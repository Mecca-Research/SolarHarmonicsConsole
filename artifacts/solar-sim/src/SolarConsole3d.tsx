import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { NBodySim, oscFromState, sampleOrbit, G, EPOCH_UNIX_MS, type OscElements } from "./nbody";

import earthTexUrl from '@assets/Earth_from_Space_1773586048704.jpg';
import earthTexFallbackUrl from '@assets/Earth_30_year_comparison_pillars_1773586048704.jpg';

const clamp = (x:number,a:number,b:number)=>Math.max(a,Math.min(b,x));
const rad = (d:number)=>d*Math.PI/180;
const lerp=(a:number,b:number,t:number)=>a+(b-a)*t;
const randn=()=>{let u=0,v=0;while(u===0)u=Math.random();while(v===0)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)};

const TEX_CDN = 'https://www.solarsystemscope.com/textures/download';
const GLOBE_CDN = 'https://cdn.jsdelivr.net/npm/three-globe@2.34.0/example/img';
const PLANET_CDN = 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images';

// Mercury and Saturn are hand-built procedural maps modeled on NASA reference
// photos (MESSENGER enhanced color / Cassini) — the tiny CDN maps looked
// worse, so they must NOT override those procedurals. Venus uses the classic
// creamy cloud-deck CDN map (with a matching cloudy procedural fallback).
const CDN_TEX_URLS: Record<string, string[]> = {
  Venus:   [`${PLANET_CDN}/venusmap.jpg`],
  Mars:    [`${PLANET_CDN}/marsmap1k.jpg`],
  Jupiter: [`${PLANET_CDN}/jupitermap.jpg`],
  Pluto:   [`${PLANET_CDN}/plutomap1k.jpg`],
};

const OUTER_PLANETS = new Set(['Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']);

const PLANET_NAMES = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"] as const;
type P = typeof PLANET_NAMES[number];
type BodyName = P | 'Sun';

type FocusState = {
  name: BodyName;
  obj: THREE.Object3D;
  dist: number; minDist: number; maxDist: number;
  pitch: number; yaw: number;
  spin: number; // rad/s about the body's own (possibly tilted) axis while observed
};

const BODY_INFO: Record<BodyName, {kind:string; blurb:string; stats:[string,string][]}> = {
  Sun: {
    kind: 'G2V Main-Sequence Star',
    blurb: 'The star at the heart of our solar system, holding 99.86% of its total mass. A churning ball of hydrogen plasma powered by nuclear fusion, the Sun converts about 4 million tonnes of matter into energy every second — the light that drives weather, ocean currents, and photosynthesis on Earth.',
    stats: [
      ['Diameter', '1,392,700 km (109 × Earth)'],
      ['Mass', '1.99 × 10³⁰ kg (333,000 × Earth)'],
      ['Surface temp', '5,505 °C'],
      ['Core temp', '~15,000,000 °C'],
      ['Rotation period', '~25.4 days (equator)'],
      ['Composition', '≈73% hydrogen, 25% helium'],
      ['Age', '~4.6 billion years'],
    ],
  },
  Mercury: {
    kind: 'Terrestrial Planet',
    blurb: 'The smallest planet and the closest to the Sun, Mercury is a cratered, airless world that looks much like our Moon. With almost no atmosphere to trap heat, it endures the most extreme temperature swings in the solar system — scorching days and frigid nights.',
    stats: [
      ['Diameter', '4,879 km'],
      ['Mass', '3.30 × 10²³ kg'],
      ['Distance from Sun', '57.9 M km (0.39 AU)'],
      ['Year length', '88 Earth days'],
      ['Day (rotation)', '58.6 Earth days'],
      ['Surface temp', '−173 to 427 °C'],
      ['Moons', '0'],
    ],
  },
  Venus: {
    kind: 'Terrestrial Planet',
    blurb: 'Venus is Earth’s hostile twin — nearly the same size, but wrapped in a crushing carbon-dioxide atmosphere topped with clouds of sulfuric acid. A runaway greenhouse effect makes it the hottest planet, and it spins backwards so slowly that its day outlasts its year.',
    stats: [
      ['Diameter', '12,104 km'],
      ['Mass', '4.87 × 10²⁴ kg'],
      ['Distance from Sun', '108.2 M km (0.72 AU)'],
      ['Year length', '224.7 Earth days'],
      ['Day (rotation)', '243 Earth days (retrograde)'],
      ['Surface temp', '464 °C (hottest planet)'],
      ['Surface pressure', '92 × Earth'],
      ['Moons', '0'],
    ],
  },
  Earth: {
    kind: 'Terrestrial Planet',
    blurb: 'Our home — the only world known to harbor life. Liquid water covers 71% of its surface, a global magnetic field and thick atmosphere shield it from radiation, and plate tectonics continually resurface it. Its large Moon steadies the axial tilt that gives us stable seasons.',
    stats: [
      ['Diameter', '12,742 km'],
      ['Mass', '5.97 × 10²⁴ kg'],
      ['Distance from Sun', '149.6 M km (1.00 AU)'],
      ['Year length', '365.25 days'],
      ['Day (rotation)', '23.9 hours'],
      ['Average temp', '15 °C'],
      ['Axial tilt', '23.4°'],
      ['Moons', '1 (the Moon)'],
    ],
  },
  Mars: {
    kind: 'Terrestrial Planet',
    blurb: 'The Red Planet owes its color to iron-oxide dust. Mars hosts the solar system’s tallest volcano, Olympus Mons, and a canyon system that would stretch across the United States. Dry riverbeds and minerals show it was once warm and wet — the prime target in the search for past life.',
    stats: [
      ['Diameter', '6,779 km'],
      ['Mass', '6.42 × 10²³ kg'],
      ['Distance from Sun', '227.9 M km (1.52 AU)'],
      ['Year length', '687 Earth days'],
      ['Day (rotation)', '24.6 hours'],
      ['Average temp', '−63 °C'],
      ['Moons', '2 (Phobos & Deimos)'],
    ],
  },
  Jupiter: {
    kind: 'Gas Giant',
    blurb: 'The giant of the solar system — more than twice as massive as all the other planets combined. Its banded clouds churn with storms, including the Great Red Spot, a tempest wider than Earth that has raged for centuries. Its huge family of moons is a miniature planetary system.',
    stats: [
      ['Diameter', '139,820 km (11 × Earth)'],
      ['Mass', '1.90 × 10²⁷ kg (318 × Earth)'],
      ['Distance from Sun', '778.5 M km (5.20 AU)'],
      ['Year length', '11.9 Earth years'],
      ['Day (rotation)', '9.9 hours (fastest)'],
      ['Cloud-top temp', '−108 °C'],
      ['Moons', '95 known'],
    ],
  },
  Saturn: {
    kind: 'Gas Giant',
    blurb: 'The jewel of the solar system, ringed by billions of ice fragments spanning some 282,000 km yet only tens of meters thick. Saturn is the least dense planet — lighter than water — and its moon family includes Titan, the only moon with a thick atmosphere.',
    stats: [
      ['Diameter', '116,460 km (9.4 × Earth)'],
      ['Mass', '5.68 × 10²⁶ kg (95 × Earth)'],
      ['Distance from Sun', '1.43 B km (9.54 AU)'],
      ['Year length', '29.4 Earth years'],
      ['Day (rotation)', '10.7 hours'],
      ['Cloud-top temp', '−139 °C'],
      ['Ring span', '~282,000 km'],
      ['Moons', '274 known (most of any planet)'],
    ],
  },
  Uranus: {
    kind: 'Ice Giant',
    blurb: 'Uranus rolls around the Sun on its side — tipped almost 98°, likely by an ancient giant impact — so its poles take turns facing the Sun for 42 years at a time. Methane in its atmosphere gives it a serene teal color, and it has the coldest atmosphere of any planet.',
    stats: [
      ['Diameter', '50,724 km (4 × Earth)'],
      ['Mass', '8.68 × 10²⁵ kg (14.5 × Earth)'],
      ['Distance from Sun', '2.87 B km (19.2 AU)'],
      ['Year length', '84 Earth years'],
      ['Day (rotation)', '17.2 hours (retrograde)'],
      ['Cloud-top temp', '−197 °C (coldest atmosphere)'],
      ['Axial tilt', '97.8°'],
      ['Moons', '28 known'],
    ],
  },
  Neptune: {
    kind: 'Ice Giant',
    blurb: 'The most distant planet, a deep cobalt world discovered in 1846 by mathematics before it was seen through a telescope. Despite receiving the least sunlight, Neptune hosts the fastest winds in the solar system — supersonic jets reaching 2,100 km/h.',
    stats: [
      ['Diameter', '49,244 km (3.9 × Earth)'],
      ['Mass', '1.02 × 10²⁶ kg (17 × Earth)'],
      ['Distance from Sun', '4.50 B km (30.1 AU)'],
      ['Year length', '164.8 Earth years'],
      ['Day (rotation)', '16.1 hours'],
      ['Cloud-top temp', '−201 °C'],
      ['Winds', 'up to 2,100 km/h (fastest)'],
      ['Moons', '16 known'],
    ],
  },
  Pluto: {
    kind: 'Dwarf Planet',
    blurb: 'The king of the Kuiper Belt, demoted from full planethood in 2006 but no less fascinating. New Horizons revealed a world with a vast heart-shaped nitrogen glacier, blue atmospheric haze, and mountains of water ice. Its moon Charon is so large the two orbit like a double world.',
    stats: [
      ['Diameter', '2,377 km (0.19 × Earth)'],
      ['Mass', '1.31 × 10²² kg'],
      ['Distance from Sun', '5.9 B km avg (39.5 AU)'],
      ['Year length', '248 Earth years'],
      ['Day (rotation)', '6.4 Earth days (retrograde)'],
      ['Surface temp', '−229 °C'],
      ['Moons', '5 (incl. Charon)'],
    ],
  },
};

const EARTH_NIGHT_URL  = `${GLOBE_CDN}/earth-night.jpg`;
const EARTH_WATER_URL  = `${GLOBE_CDN}/earth-water.png`;
const EARTH_TOPO_URL   = `${GLOBE_CDN}/earth-topology.png`;

// NOTE: there are deliberately NO additive atmosphere glow shells anywhere —
// every one of them (Venus, Pluto, then Jupiter/Uranus/Neptune) read as a
// transparent ring floating around the planet. Atmosphere color belongs in
// the surface textures.

// Day/night terminator shader for the inner rocky planets (Mercury, Venus,
// Mars): same soft sun-facing terminator as Earth's shader, minus the
// night-lights/ocean layers. A faint ambient keeps the night limb readable.
const LIT_VERT = /* glsl */`
  varying vec2 vUv;
  varying vec3 vNormal;
  void main(){
    vUv = uv;
    vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const LIT_FRAG = /* glsl */`
  uniform sampler2D dayMap;
  uniform vec3 sunDir;
  varying vec2 vUv;
  varying vec3 vNormal;
  void main(){
    float NdotL = dot(normalize(vNormal), sunDir);
    float dayFactor = smoothstep(-0.15, 0.25, NdotL);
    vec3 col = texture2D(dayMap, vUv).rgb;
    gl_FragColor = vec4(col * (0.035 + 0.965 * dayFactor), 1.0);
  }
`;

const EARTH_VERT = /* glsl */`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  void main(){
    vUv = uv;
    vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const EARTH_FRAG = /* glsl */`
  uniform sampler2D dayMap;
  uniform sampler2D nightMap;
  uniform sampler2D specMap;
  uniform sampler2D bumpMap;
  uniform vec3 sunDir;
  uniform vec3 camPos;
  uniform float uBumpScale;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  vec3 perturbNormal(vec3 n, vec2 uv) {
    float bL = texture2D(bumpMap, uv + vec2(-0.001, 0.0)).r;
    float bR = texture2D(bumpMap, uv + vec2( 0.001, 0.0)).r;
    float bD = texture2D(bumpMap, uv + vec2(0.0, -0.001)).r;
    float bU = texture2D(bumpMap, uv + vec2(0.0,  0.001)).r;
    vec3 bump = normalize(n + vec3((bL - bR), (bD - bU), 0.0) * uBumpScale);
    return bump;
  }

  void main(){
    vec3 geoN = normalize(vNormal);
    vec3 n = perturbNormal(geoN, vUv);
    float NdotL = dot(geoN, sunDir);
    float dayFactor = smoothstep(-0.15, 0.25, NdotL);

    vec3 dayColor = texture2D(dayMap, vUv).rgb;
    vec3 nightColor = texture2D(nightMap, vUv).rgb;
    float waterMask = texture2D(specMap, vUv).r;

    vec3 viewDir = normalize(camPos - vWorldPos);

    vec3 halfDir = normalize(sunDir + viewDir);
    float spec = pow(max(dot(n, halfDir), 0.0), 80.0) * waterMask * dayFactor;

    vec3 daySat = dayColor * 1.15;
    daySat = mix(daySat, daySat * vec3(0.7, 0.85, 1.3) * 1.1, waterMask * dayFactor);

    float nightSide = 1.0 - dayFactor;
    vec3 cityLights = nightColor * 6.0 * nightSide;

    vec3 surface = daySat * dayFactor;
    surface += vec3(0.75, 0.85, 1.0) * spec * 0.5;
    surface += cityLights;
    surface += vec3(0.018) * nightSide;

    gl_FragColor = vec4(surface, 1.0);
  }
`;

export default function SolarHarmonics3D(){
  const mountRef=useRef<HTMLDivElement|null>(null); const rafRef=useRef(0);

  const SPEED_MIN=1, SPEED_MAX=4000; const [simDaysPerSec,setSimDaysPerSec]=useState(30);
  const [speedPos,setSpeedPos]=useState(()=>daysToSlider(30,SPEED_MIN,SPEED_MAX)); const simDaysPerSecRef=useRef(simDaysPerSec); useEffect(()=>{simDaysPerSecRef.current=simDaysPerSec;},[simDaysPerSec]);
  const [asteroidCount,setAsteroidCount]=useState(12000); const astCRef=useRef(asteroidCount); useEffect(()=>{astCRef.current=asteroidCount;},[asteroidCount]);
  const [kuiperCount,setKuiperCount]=useState(60000); const kuiCRef=useRef(kuiperCount); useEffect(()=>{kuiCRef.current=kuiperCount;},[kuiperCount]);
  const yawRef=useRef(-Math.PI/4), pitchRef=useRef(0.5), distRef=useRef(620);

  const PLANETS=PLANET_NAMES;
  const [sel,setSel]=useState<P>("Earth"); const [spd,setSpd]=useState(1.0); const [tilt,setTilt]=useState(0); const lastRef=useRef<P|null>(null);
  const cmdsRef=useRef<any>({});
  const [focused,setFocused]=useState<BodyName|null>(null);
  const focusRef=useRef<FocusState|null>(null);
  const dateHudRef=useRef<HTMLSpanElement|null>(null);

  const [webglError, setWebglError] = useState(false);

  useEffect(()=>{
    const root=mountRef.current!; const w=root.clientWidth||window.innerWidth; const h=root.clientHeight||window.innerHeight;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer=new THREE.WebGLRenderer({antialias:true});
    } catch {
      setWebglError(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)); renderer.setSize(w,h);
    (renderer as any).outputColorSpace=THREE.SRGBColorSpace;
    (renderer as any).toneMapping=THREE.ACESFilmicToneMapping;
    (renderer as any).toneMappingExposure=1.4;
    root.appendChild(renderer.domElement);
    const scene=new THREE.Scene(); scene.background=new THREE.Color(0x000000);
    const cam=new THREE.PerspectiveCamera(60,w/h,0.1,120000);
    (scene as any).userData._spinUpdates = [] as Array<(dt:number)=>void>;

    // AU2U is the VISUAL scale only: physics runs in true units (AU / days /
    // solar masses) inside NBodySim; rendering multiplies by AU2U at the end.
    const AU2U=30; const TE=365.25; const aE=AU2U*1.0;

    // ---- N-body physics state: Sun + 9 planets under pairwise gravity ----
    const sim = new NBodySim();
    const IDX = {} as Record<BodyName, number>;
    sim.bodies.forEach((b, i) => { IDX[b.name as BodyName] = i; });
    const sunB = sim.bodies[IDX.Sun];
    // Epoch snapshot (Sun-relative) so the orbit editor's resets can restore it.
    type Vec6 = {x:number,y:number,z:number,vx:number,vy:number,vz:number};
    const epochRel: Record<P, Vec6> = {} as any;
    for (const p of PLANETS) {
      const b = sim.bodies[IDX[p]];
      epochRel[p] = { x:b.x-sunB.x, y:b.y-sunB.y, z:b.z-sunB.z, vx:b.vx-sunB.vx, vy:b.vy-sunB.vy, vz:b.vz-sunB.vz };
    }
    const relState = (p:P): Vec6 => { const b = sim.bodies[IDX[p]]; return { x:b.x-sunB.x, y:b.y-sunB.y, z:b.z-sunB.z, vx:b.vx-sunB.vx, vy:b.vy-sunB.vy, vz:b.vz-sunB.vz }; };
    // Physics -> scene mapping: heliocentric ecliptic (x,y,z) AU -> three.js
    // (x, z, y) * AU2U (the scene is Y-up; the ecliptic plane is scene X-Z).
    const sceneFrom = (p:P, out:THREE.Vector3) => { const b = sim.bodies[IDX[p]]; out.set((b.x-sunB.x)*AU2U, (b.z-sunB.z)*AU2U, (b.y-sunB.y)*AU2U); };
    const oscOf = (p:P): OscElements => { const r = relState(p); return oscFromState(r.x, r.y, r.z, r.vx, r.vy, r.vz, G*(1+sim.bodies[IDX[p]].m)); };
    const oscCache: Record<P, OscElements> = {} as any;
    for (const p of PLANETS) oscCache[p] = oscOf(p);
    // Jupiter's live true longitude — the anchor for Trojan/Hilda swarms.
    const jupLon = () => { const r = relState('Jupiter'); return Math.atan2(r.y, r.x); };

    // Saturn at 4.8 keeps the real Saturn/Jupiter size ratio (~0.86) so the
    // body doesn't read undersized against its wide ring system.
    const R:Record<P,number>={Mercury:1.0,Venus:1.8,Earth:2.2,Mars:1.6,Jupiter:5.6,Saturn:4.8,Uranus:3.4,Neptune:3.1,Pluto:2.4};
    const C:Record<P,number>={Mercury:0xc9b9a7,Venus:0xe0c16c,Earth:0x4da6ff,Mars:0xff6f50,Jupiter:0xd6a46c,Saturn:0xf0d9a6,Uranus:0x84dfff,Neptune:0x5d8cff,Pluto:0xaaaaaa};

    const track=(t:THREE.Texture)=>{bag.push(()=>t.dispose()); return t}; const bag:(()=>void)[]=[];
    const dotTex=(()=>{const c=document.createElement('canvas'); const s=64; c.width=c.height=s; const g=c.getContext('2d')!.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2); g.addColorStop(0,'#fff'); g.addColorStop(1,'#fff0'); const x=c.getContext('2d')!; x.fillStyle=g; x.fillRect(0,0,s,s); const t=track(new THREE.CanvasTexture(c)); (t as any).colorSpace=THREE.SRGBColorSpace; (t as any).needsUpdate=true; return t;})();

    const makeBlot=(base:string,blot:string,n=110)=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;x.fillStyle=base;x.fillRect(0,0,s,s);x.globalAlpha=.25;x.fillStyle=blot;for(let i=0;i<n;i++){const r=(Math.random()*.06+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill();}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t};
    const bandsProc=(cols:string[])=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!,bh=s/cols.length;cols.forEach((col,i)=>{x.fillStyle=col;x.fillRect(0,i*bh,s,bh)});const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t};
    const earthProc=()=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;x.fillStyle='#2764cc';x.fillRect(0,0,s,s);x.fillStyle='#4caf50';x.globalAlpha=.95;for(let i=0;i<80;i++){const r=(Math.random()*.08+.03)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill()}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t};
    // Lazy so only the requested planet's texture is built (the reference-photo
    // procedurals below are heavier than the old blot textures).
    const fallbackTex=(n:P):THREE.Texture=>{switch(n){
      case 'Mercury': return mercuryProc();
      case 'Venus':   return venusProc();
      case 'Earth':   return earthProc();
      case 'Mars':    return makeBlot('#d16b3e','#7a3e26');
      case 'Jupiter': return bandsProc(['#caa376','#e1c8a8','#b68955','#e6d3b7','#ad7a49','#dcc29f','#bf915f']);
      case 'Saturn':  return saturnBodyProc();
      case 'Uranus':  return uranusProc();
      case 'Neptune': return neptuneProc();
      default:        return makeBlot('#cdcac7','#a09d9b');
    }};

    const tl = new THREE.TextureLoader();
    tl.crossOrigin = 'anonymous';

    const loadFirst = (urls: string[], onOk: (t:THREE.Texture)=>void) => {
      let idx = 0;
      const tryNext = () => {
        if (idx >= urls.length) return;
        const url = urls[idx++];
        tl.load(url, (tex) => {
          (tex as any).colorSpace = THREE.SRGBColorSpace;
          tex.needsUpdate = true;
          track(tex);
          onOk(tex);
        }, undefined, () => tryNext());
      };
      tryNext();
    };

    const saturnRingProc=()=>{
      // Detailed strip modeled on the Cassini portrait. u 0->1 maps radius
      // 1.20R -> 2.33R: C ring (translucent, grooved) -> dense bright B ring
      // (packed fine ringlets) -> Cassini Division (with its faint inner
      // ringlet) -> A ring (Encke + Keeler gaps) -> dark gap -> thin F ring.
      const w=2048,h=8,c=document.createElement('canvas');c.width=w;c.height=h;
      const x=c.getContext('2d')!;x.clearRect(0,0,w,h);
      // fine quasi-random grooving (fixed phases, radial so no wrap concern)
      const grain=(t:number)=>0.5+0.20*Math.sin(t*831.7)+0.16*Math.sin(t*407.3+1.7)+0.12*Math.sin(t*1723.9+0.6)+0.08*Math.sin(t*263.1+2.9);
      const seg=(t:number):[number,number,number]=>{ // [alpha, lum, warmth]
        let a=0,lum=200,warm=1;
        const g=grain(t);
        if(t<0.031){ a=0; }
        else if(t<0.288){ // C ring: translucent but clearly present, so the
          // rings visually connect to the planet instead of floating detached
          const k=(t-0.031)/0.257; a=0.24+0.24*k+0.10*(g-0.5); lum=158+34*k+22*(g-0.5); warm=0.92;
          if(Math.abs(t-0.115)<0.004) a*=0.30;                        // Colombo gap
          if(Math.abs(t-0.236)<0.004) a*=0.30;                        // Maxwell gap
        }
        else if(t<0.664){ // B ring: bright, dense, heavily grooved
          const k=(t-0.288)/0.376; a=0.88+0.12*(g-0.2); lum=205+34*g-12*k; warm=1.0;
          if(Math.abs(t-0.30)<0.006) lum-=26;                          // inner B shading
        }
        else if(t<0.735){ // Cassini Division: near-empty with a faint ringlet
          a=0.05; lum=120;
          if(Math.abs(t-0.695)<0.006){ a=0.20; lum=150; }              // Huygens ringlet
        }
        else if(t<0.947){ // A ring: medium, finely grooved
          const k=(t-0.735)/0.212; a=0.60+0.10*(g-0.5)-0.10*k; lum=188+22*g-10*k; warm=0.97;
          if(Math.abs(t-0.897)<0.005) a*=0.06;                         // Encke gap
          if(Math.abs(t-0.938)<0.0022) a*=0.15;                        // Keeler gap
        }
        else if(t<0.985){ a=0.012; lum=120; }                          // Roche gap
        else { // F ring: single thin bright strand
          const d=Math.abs(t-0.9915); a=d<0.0035?0.55*(1-d/0.0035):0; lum=225;
        }
        if(t>0.9995) a=0;
        return [Math.max(0,Math.min(1,a)),lum,warm];
      };
      for(let i=0;i<w;i++){ const t=i/(w-1); const [a,lum,warm]=seg(t);
        x.fillStyle=`rgba(${lum|0},${(lum*0.93*warm)|0},${(lum*0.80*warm)|0},${a.toFixed(3)})`; x.fillRect(i,0,1,h); }
      const tex=track(new THREE.CanvasTexture(c));(tex as any).colorSpace=THREE.SRGBColorSpace;(tex as any).needsUpdate=true;return tex;
    };

    const uranusRingProc=()=>{
      const w=1024,h=8,c=document.createElement('canvas');c.width=w;c.height=h;
      const x=c.getContext('2d')!;x.clearRect(0,0,w,h);
      // u 0->1 maps inner(1.55R)->outer(2.02R). Uranus's rings are dark and narrow; the outer
      // epsilon ring is the single bright band that stands out in the reference photo.
      const ringlets=[0.08,0.20,0.33,0.45,0.58,0.70,0.80];
      for(let i=0;i<w;i++){ const t=i/(w-1); let a=0.02+0.012*Math.sin(t*44); let lum=140;
        for(const r of ringlets){ const d=Math.abs(t-r); if(d<0.010){ const k=1-d/0.010; a=Math.max(a,0.30*k); lum=120; } }
        { const d=Math.abs(t-0.93); if(d<0.028){ const k=1-d/0.028; a=Math.max(a,0.95*k); lum=215; } } // epsilon ring
        if(t<0.01||t>0.995) a=0;
        x.fillStyle=`rgba(${lum|0},${(lum*0.94)|0},${(lum*0.92)|0},${Math.max(0,a).toFixed(3)})`; x.fillRect(i,0,1,h);
      }
      const tex=track(new THREE.CanvasTexture(c));(tex as any).colorSpace=THREE.SRGBColorSpace;(tex as any).needsUpdate=true;return tex;
    };

    const amb=new THREE.AmbientLight(0x040408, 0.02); scene.add(amb);
    const sunLight=new THREE.PointLight(0xfff8e7, 2.0, 0, 2); scene.add(sunLight);
    const rPeriMerc = oscCache.Mercury.a*(1-oscCache.Mercury.e)*AU2U;
    const SUN_VIS_R = Math.max(2.5, Math.min(rPeriMerc*0.60, AU2U*0.80));
    const sunGeom=new THREE.SphereGeometry(SUN_VIS_R,64,48); const sunMat=makeSunMat(); const sun=new THREE.Mesh(sunGeom,sunMat); sun.name='Sun'; scene.add(sun);
    const sunGlow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex(),color:0xffffff,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false})); sunGlow.scale.setScalar(rPeriMerc*0.90); scene.add(sunGlow);

    const flareTex=mkFlareTex(); const flareGroup=new THREE.Group(); scene.add(flareGroup);
    const FPOOL=90, flSprites:THREE.Sprite[]=[] as THREE.Sprite[], life:number[]=[], lifeMax:number[]=[], vel:THREE.Vector3[]=[];
    for(let i=0;i<FPOOL;i++){
      const mat=new THREE.SpriteMaterial({map:flareTex,color:0xffb070,blending:THREE.AdditiveBlending,transparent:true,opacity:0,depthTest:true,depthWrite:false});
      const s=new THREE.Sprite(mat); s.scale.setScalar(.01);
      flSprites.push(s); life.push(0); lifeMax.push(0); vel.push(new THREE.Vector3()); flareGroup.add(s);
    }
    const FLARE_CAP=AU2U*(0.3871-0.02);
    const spawn=()=>{
      const i=life.findIndex(v=>v<=0); if(i<0)return;
      const th=Math.random()*Math.PI*2, inc=(Math.random()*Math.PI/7-Math.PI/14);
      const dir=new THREE.Vector3(Math.cos(th)*Math.cos(inc),Math.sin(inc),Math.sin(th)*Math.cos(inc));
      const r0=8.6 + Math.random()*2.0;
      const s=flSprites[i]; s.position.copy(dir.clone().multiplyScalar(r0));
      const smat = (s.material as THREE.SpriteMaterial) || new THREE.SpriteMaterial({map:flareTex});
      smat.opacity=0.85; s.material=smat;
      s.scale.setScalar(lerp(2,5,Math.random())); life[i]=1e-6; lifeMax[i]=.9+Math.random()*1.2; vel[i].copy(dir).multiplyScalar(7+Math.random()*12)
    };

    const wrap=(x:number)=>{const t=Math.PI*2; x%=t; return x<0?x+t:x};
    const solveE=(M:number,e:number)=>{let E=e<.8?M:Math.PI; for(let k=0;k<6;k++){const f=E-e*Math.sin(E)-M, fp=1-e*Math.cos(E); E-=f/fp;} return E};
    const approxTrue=(M:number,e:number)=>{const s=Math.sin(M), c2=Math.sin(2*M); return M + 2*e*s + 1.25*e*e*c2};

    const mesh:Record<P,THREE.Mesh>={} as any; const line:Record<P,THREE.LineLoop>={} as any;
    // Orbit lines are the live OSCULATING ellipses implied by each planet's
    // state vector — they visibly precess/reshape as perturbations act.
    const LINE_N=512; const lineScratch=new Float32Array(LINE_N*3);
    const updateLine=(p:P)=>{ const L=line[p]; if(!L) return; const el=oscCache[p]=oscOf(p); const ok=sampleOrbit(el, lineScratch); L.visible=ok; if(!ok) return; const attr=L.geometry.getAttribute('position') as THREE.BufferAttribute; const arr=attr.array as Float32Array; for(let k=0;k<LINE_N;k++){ arr[3*k]=lineScratch[3*k]*AU2U; arr[3*k+1]=lineScratch[3*k+2]*AU2U; arr[3*k+2]=lineScratch[3*k+1]*AU2U; } attr.needsUpdate=true; };
    const mkLine=(p:P)=>{ if(line[p]) return; const g=new THREE.BufferGeometry(); const attr=new THREE.BufferAttribute(new Float32Array(LINE_N*3),3); attr.setUsage(THREE.DynamicDrawUsage); g.setAttribute('position',attr); const m=new THREE.LineBasicMaterial({color:p==='Pluto'?0x8b96a8:0x566173}); const L=new THREE.LineLoop(g,m); L.frustumCulled=false; scene.add(L); line[p]=L; updateLine(p); };

    const earthShaderUniforms = {
      dayMap:   { value: new THREE.Texture() },
      nightMap: { value: new THREE.Texture() },
      specMap:  { value: new THREE.Texture() },
      bumpMap:  { value: new THREE.Texture() },
      sunDir:   { value: new THREE.Vector3(1,0,0) },
      camPos:   { value: new THREE.Vector3() },
      uBumpScale: { value: 0.008 },
    };

    const solidTex = (hex: number) => {
      const c = document.createElement('canvas'); c.width=c.height=4;
      const x = c.getContext('2d')!;
      x.fillStyle = '#' + hex.toString(16).padStart(6,'0');
      x.fillRect(0,0,4,4);
      const t = track(new THREE.CanvasTexture(c));
      (t as any).colorSpace = THREE.SRGBColorSpace;
      return t;
    };

    earthShaderUniforms.dayMap.value = fallbackTex('Earth');
    earthShaderUniforms.nightMap.value = solidTex(0x050510);
    earthShaderUniforms.specMap.value = solidTex(0x000000);

    // ---- Reference-photo procedural textures ------------------------------
    // The NASA reference images are disk-on-black photos (not equirectangular),
    // so their palettes are baked into hand-built equirectangular maps instead
    // of UV-mapping them directly. All longitude waves use integer frequencies
    // so the maps wrap seamlessly; generators are seeded so every load matches.
    const mkRng=(seed:number)=>{let s=seed>>>0; return ()=>{s=(s*1664525+1013904223)>>>0; return s/4294967296;};};
    // Seam-free organic mottling: summed integer-longitude-frequency sinusoids.
    const mkNoise=(seed:number,octaves=10)=>{
      const rnd=mkRng(seed);
      const terms:{fx:number;fy:number;ph:number;ph2:number;amp:number}[]=[]; let norm=0;
      for(let o=0;o<octaves;o++){const amp=1/(1+o*0.5); norm+=amp;
        terms.push({fx:1+Math.floor(rnd()*(2+o*1.5)),fy:0.5+rnd()*(1.5+o*1.2),ph:rnd()*Math.PI*2,ph2:rnd()*Math.PI*2,amp});}
      return (u:number,v:number)=>{let s=0; for(const q of terms) s+=Math.sin(u*Math.PI*2*q.fx+Math.sin(v*Math.PI*2*q.fy+q.ph2)*1.8+q.ph)*q.amp; return s/norm;};
    };
    // Paint fn at x-offsets -w,0,+w so strokes crossing the seam wrap cleanly.
    const wrapX=(x2:CanvasRenderingContext2D,w:number,fn:()=>void)=>{for(const off of [-w,0,w]){x2.save();x2.translate(off,0);fn();x2.restore();}};

    const mercuryProc=()=>{
      // MESSENGER enhanced-color style at high res: warm tan volcanic plains,
      // deep indigo low-reflectance terrain, ~1400 shaded craters, pale
      // blue-white ray systems, micro-roughness grit, Caloris-like basin.
      const w=2048,h=1024,c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d')!;
      const rnd=mkRng(20261);
      const nProv=mkNoise(11,7), nTone=mkNoise(23,10);
      const bw=512,bh=256,bc=document.createElement('canvas');bc.width=bw;bc.height=bh;const bx=bc.getContext('2d')!;
      const img=bx.createImageData(bw,bh);
      const TAN=[191,139,82], MID=[118,108,121], BLU=[47,60,110];
      for(let j=0;j<bh;j++)for(let i=0;i<bw;i++){
        const u=i/bw, v=j/bh;
        const p=nProv(u,v), tone=nTone(u*3,v*3);
        let r:number,g:number,b:number;
        if(p>0.08){const k=Math.min(1,(p-0.08)/0.30); r=lerp(MID[0],TAN[0],k);g=lerp(MID[1],TAN[1],k);b=lerp(MID[2],TAN[2],k);}
        else if(p<-0.08){const k=Math.min(1,(-p-0.08)/0.30); r=lerp(MID[0],BLU[0],k);g=lerp(MID[1],BLU[1],k);b=lerp(MID[2],BLU[2],k);}
        else {r=MID[0];g=MID[1];b=MID[2];}
        const lum=1+tone*0.22-(Math.abs(v-0.5)>0.42?0.08:0);
        const o=4*(j*bw+i); img.data[o]=clamp(r*lum,0,255); img.data[o+1]=clamp(g*lum,0,255); img.data[o+2]=clamp(b*lum,0,255); img.data[o+3]=255;
      }
      bx.putImageData(img,0,0);
      x.imageSmoothingEnabled=true; x.drawImage(bc,0,0,w,h);
      // Micro-roughness grit so the surface reads rocky up close.
      for(let i=0;i<26000;i++){
        const px2=rnd()*w, py2=rnd()*h, s2=rnd()<0.8?1:2;
        x.fillStyle=rnd()<0.45?'rgba(232,226,214,0.05)':'rgba(24,28,44,0.055)';
        x.fillRect(px2,py2,s2,s2);
      }
      // Caloris-like basin: broad warm plain with a subtle darker rim.
      wrapX(x,w,()=>{
        const cx2=w*0.66, cy2=h*0.24, rr=w*0.085;
        const g2=x.createRadialGradient(cx2,cy2,0,cx2,cy2,rr);
        g2.addColorStop(0,'rgba(214,156,92,0.9)');g2.addColorStop(0.75,'rgba(206,148,88,0.55)');g2.addColorStop(1,'rgba(206,148,88,0)');
        x.fillStyle=g2;x.beginPath();x.ellipse(cx2,cy2,rr*1.35,rr,0,0,Math.PI*2);x.fill();
        x.strokeStyle='rgba(120,96,80,0.28)';x.lineWidth=5;x.beginPath();x.ellipse(cx2,cy2,rr*1.30,rr*0.96,0,0,Math.PI*2);x.stroke();
      });
      // Craters with directional shading: shadowed floor ring, lighter inner
      // floor, sunlit rim arc opposite a shadow rim arc; x-stretched with
      // latitude so they render round on the sphere.
      for(let i=0;i<1400;i++){
        const px2=rnd()*w, py2=h*(0.03+rnd()*0.94);
        const lat=(py2/h-0.5)*Math.PI; const st=Math.min(3.2,1/Math.max(0.28,Math.cos(lat)));
        const r2=(rnd()<0.8?1.5+rnd()*6:7+rnd()*16);
        wrapX(x,w,()=>{
          x.globalAlpha=0.14+rnd()*0.14; x.fillStyle=rnd()<0.5?'#1f2740':'#372f28';
          x.beginPath();x.ellipse(px2,py2,r2*st,r2,0,0,Math.PI*2);x.fill();
          x.globalAlpha=0.08+rnd()*0.08; x.fillStyle='#9a917f';
          x.beginPath();x.ellipse(px2,py2,r2*st*0.6,r2*0.6,0,0,Math.PI*2);x.fill();
          x.globalAlpha=0.20+rnd()*0.16; x.strokeStyle='#efe6d2'; x.lineWidth=Math.max(0.8,r2*0.22);
          x.beginPath();x.ellipse(px2,py2,r2*st,r2,0,Math.PI*0.75,Math.PI*1.65);x.stroke();
          x.globalAlpha=0.14+rnd()*0.12; x.strokeStyle='#141a30'; x.lineWidth=Math.max(0.8,r2*0.20);
          x.beginPath();x.ellipse(px2,py2,r2*st,r2,0,Math.PI*1.85,Math.PI*0.55);x.stroke();
        });
      }
      x.globalAlpha=1;
      // Ray craters: tapered feathered rays (soft puffs, not hard strokes).
      for(let i=0;i<16;i++){
        const px2=rnd()*w, py2=h*(0.12+rnd()*0.76);
        const lat=(py2/h-0.5)*Math.PI; const st=Math.min(3.2,1/Math.max(0.28,Math.cos(lat)));
        const big=i===0; const rays=big?22:8+Math.floor(rnd()*9); const len=big?h*0.30:h*(0.05+rnd()*0.10);
        wrapX(x,w,()=>{
          for(let k2=0;k2<rays;k2++){
            const th=rnd()*Math.PI*2, ll=len*(0.5+rnd()*0.5), segs=9;
            for(let s2=1;s2<=segs;s2++){
              const f2=s2/segs;
              const rx2=px2+Math.cos(th)*ll*f2*st, ry2=py2+Math.sin(th)*ll*f2;
              x.globalAlpha=(big?0.10:0.085)*(1-f2)*(0.7+rnd()*0.5);
              x.fillStyle='#dce6f4';
              const rr=(1.7-f2)*(big?2.4:1.6);
              x.beginPath();x.ellipse(rx2,ry2,rr*st,rr,0,0,Math.PI*2);x.fill();
            }
          }
          x.globalAlpha=1;
          const rr=big?11:5;
          const g2=x.createRadialGradient(px2,py2,0,px2,py2,rr);
          g2.addColorStop(0,'rgba(236,242,250,0.9)');g2.addColorStop(1,'rgba(236,242,250,0)');
          x.fillStyle=g2;x.beginPath();x.ellipse(px2,py2,rr*st,rr,0,0,Math.PI*2);x.fill();
        });
      }
      x.globalAlpha=1;
      const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t;
    };

    const venusProc=()=>{
      // Classic visible-light Venus: a nearly featureless creamy cloud deck
      // with soft swirled bands and faint equator-slanting chevrons. This is
      // the fallback behind the CDN venusmap; deliberately NO halo shell.
      const w=1024,h=512,c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d')!;
      const rnd=mkRng(80085);
      const n1=mkNoise(41,7), n2=mkNoise(57,10);
      const bw=256,bh=128,bc=document.createElement('canvas');bc.width=bw;bc.height=bh;const bx=bc.getContext('2d')!;
      const img=bx.createImageData(bw,bh);
      const at=(v:number):[number,number,number]=>{
        const kk=Math.sin(v*Math.PI); // 0 poles, 1 equator
        return [lerp(212,242,kk),lerp(176,220,kk),lerp(118,166,kk)];
      };
      for(let j=0;j<bh;j++)for(let i=0;i<bw;i++){
        const u=i/bw, v=j/bh; const [r,g2,b]=at(v);
        const m2=1+n1(u,v)*0.05+n2(u*2,v*2)*0.03;
        const o=4*(j*bw+i); img.data[o]=clamp(r*m2,0,255); img.data[o+1]=clamp(g2*m2,0,255); img.data[o+2]=clamp(b*m2,0,255); img.data[o+3]=255;
      }
      bx.putImageData(img,0,0);
      x.imageSmoothingEnabled=true; x.drawImage(bc,0,0,w,h);
      // Soft swirled cloud bands, slanting gently toward the equator.
      for(let b=0;b<26;b++){
        const yc=(b+0.5)/26*h, vv=yc/h, bh2=h/26*(0.7+rnd()*0.9);
        const light=rnd()<0.5; const a=0.040+rnd()*0.055;
        const chev=(vv<0.5?1:-1)*(4+6*Math.abs(vv-0.5));
        for(let px2=0;px2<w;px2++){
          const u=px2/w;
          const off=Math.sin(u*Math.PI*2*2+b*1.9)*3+Math.sin(u*Math.PI*2*4+b)*1.5+Math.sin(u*Math.PI*2+b*0.7)*chev;
          x.fillStyle=light?`rgba(252,244,220,${a.toFixed(3)})`:`rgba(172,136,80,${a.toFixed(3)})`;
          x.fillRect(px2,yc-bh2/2+off,1,bh2);
        }
      }
      // Large soft bright swirls in the cloud deck.
      for(let i=0;i<14;i++){
        const cx2=rnd()*w, cy2=h*(0.2+rnd()*0.6), rr=20+rnd()*70;
        wrapX(x,w,()=>{const g2=x.createRadialGradient(cx2,cy2,0,cx2,cy2,rr);
          g2.addColorStop(0,`rgba(252,246,226,${(0.05+rnd()*0.06).toFixed(3)})`);g2.addColorStop(1,'rgba(252,246,226,0)');
          x.fillStyle=g2;x.beginPath();x.ellipse(cx2,cy2,rr*1.8,rr*0.6,0,0,Math.PI*2);x.fill();});
      }
      const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t;
    };

    const saturnBodyProc = () => {
      // Cassini palette with Jupiter-grade band definition: distinct zones and
      // belts whose boundaries are wobbled by turbulence noise, plus fine
      // streak detail — but in Saturn's soft butter/butterscotch tones.
      const w=2048,h=1024,c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d')!;
      const rnd=mkRng(60318);
      const nEdge=mkNoise(61,8), nTone=mkNoise(73,10);
      const stops:[number,[number,number,number]][]= [
        [0.00,[138,150,144]],[0.06,[158,164,148]],[0.12,[182,178,142]],
        [0.18,[205,192,148]],[0.24,[186,166,116]],[0.30,[220,203,152]],
        [0.36,[199,177,122]],[0.42,[228,211,160]],[0.48,[232,217,168]],
        [0.54,[209,184,128]],[0.60,[224,204,148]],[0.66,[199,172,112]],
        [0.72,[214,190,130]],[0.78,[192,161,100]],[0.84,[205,177,116]],
        [0.90,[186,152,92]],[1.00,[172,138,80]],
      ];
      const at=(v:number):[number,number,number]=>{
        for(let s2=0;s2<stops.length-1;s2++){const [v0,c0]=stops[s2],[v1,c1]=stops[s2+1];
          if(v<=v1){const k=(v-v0)/(v1-v0); return [lerp(c0[0],c1[0],k),lerp(c0[1],c1[1],k),lerp(c0[2],c1[2],k)];}}
        return stops[stops.length-1][1];
      };
      const bw=512,bh=256,bc=document.createElement('canvas');bc.width=bw;bc.height=bh;const bx=bc.getContext('2d')!;
      const img=bx.createImageData(bw,bh);
      for(let j=0;j<bh;j++)for(let i=0;i<bw;i++){
        const u=i/bw, v=j/bh;
        const wob=nEdge(u,v)*0.020; // turbulent band boundaries, Jupiter-style
        const [r,g2,b]=at(clamp(v+wob,0,1));
        const m2=1+nTone(u*2,v*2)*0.05;
        const o=4*(j*bw+i); img.data[o]=clamp(r*m2,0,255); img.data[o+1]=clamp(g2*m2,0,255); img.data[o+2]=clamp(b*m2,0,255); img.data[o+3]=255;
      }
      bx.putImageData(img,0,0);
      x.imageSmoothingEnabled=true; x.drawImage(bc,0,0,w,h);
      // Very fine zonal streaks.
      for(let i=0;i<320;i++){
        const yy=rnd()*h; const light=rnd()<0.5;
        x.globalAlpha=0.014+rnd()*0.035;
        x.strokeStyle=light?'#fff8e0':'#8a6c3c'; x.lineWidth=0.6+rnd()*1.6;
        x.beginPath();x.moveTo(0,yy);
        for(let px2=0;px2<=w;px2+=32) x.lineTo(px2,yy+Math.sin(px2/w*Math.PI*2*4+i)*2.0);
        x.stroke();
      }
      x.globalAlpha=1;
      // A few pale storm ovals and one small dark spot.
      for(let i=0;i<7;i++){
        const cx2=rnd()*w, cy2=h*(0.5+rnd()*0.38), rr=2+rnd()*5;
        x.globalAlpha=0.10+rnd()*0.10; x.fillStyle=i===0?'#7a6034':'#fff8e4';
        x.beginPath();x.ellipse(cx2,cy2,rr*2.2,rr,0,0,Math.PI*2);x.fill();
      }
      x.globalAlpha=1;
      const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t;
    };

    const uranusProc = () => {
      // Keck palette, silky smooth: a pure latitude gradient with a gently
      // glowing polar collar and a couple of faint methane clouds. No bands —
      // Uranus is nearly featureless, and drawn stripes read as artifacts.
      const w=1024,h=512,c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d')!;
      const n1=mkNoise(91,4); // very low frequency, barely-there mottling
      const bw=256,bh=128,bc=document.createElement('canvas');bc.width=bw;bc.height=bh;const bx=bc.getContext('2d')!;
      const img=bx.createImageData(bw,bh);
      for(let j=0;j<bh;j++)for(let i=0;i<bw;i++){
        const u=i/bw, v=j/bh;
        const kk=Math.sin(v*Math.PI); // 0 at poles, 1 at equator
        let r=lerp(24,50,kk), g2=lerp(120,180,kk), b=lerp(144,204,kk);
        // soft bright collar near the south pole + gentle polar cap glow
        const collar=Math.exp(-Math.pow((v-0.80)/0.085,2))*0.30;
        const cap=Math.exp(-Math.pow((v-1.0)/0.12,2))*0.22;
        const k3=Math.min(1,collar+cap);
        r=lerp(r,205,k3); g2=lerp(g2,244,k3); b=lerp(b,248,k3);
        const m2=1+n1(u,v)*0.018;
        const o=4*(j*bw+i); img.data[o]=clamp(r*m2,0,255); img.data[o+1]=clamp(g2*m2,0,255); img.data[o+2]=clamp(b*m2,0,255); img.data[o+3]=255;
      }
      bx.putImageData(img,0,0);
      x.imageSmoothingEnabled=true; x.drawImage(bc,0,0,w,h);
      // A couple of faint discrete methane clouds.
      for(const [sx,sy,sr,sa] of [[0.28,0.30,0.011,0.35],[0.66,0.76,0.012,0.40],[0.48,0.36,0.008,0.25]] as const){
        wrapX(x,w,()=>{const rg=x.createRadialGradient(w*sx,h*sy,0,w*sx,h*sy,w*sr);
          rg.addColorStop(0,`rgba(230,252,254,${sa})`);rg.addColorStop(1,'rgba(230,252,254,0)');
          x.fillStyle=rg;x.beginPath();x.ellipse(w*sx,h*sy,w*sr*1.6,h*sr*2.2,0,0,Math.PI*2);x.fill();});
      }
      const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t;
    };

    const neptuneProc = () => {
      // Voyager-2 portrait palette: vivid azure mid-latitudes over deep cobalt,
      // the Great Dark Spot with its bright companion cirrus, the "Scooter",
      // and Dark Spot 2 with a bright core.
      const w=1024,h=512,c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d')!;
      const rnd=mkRng(84630);
      const n1=mkNoise(101,7), n2=mkNoise(113,10);
      const bw=256,bh=128,bc=document.createElement('canvas');bc.width=bw;bc.height=bh;const bx=bc.getContext('2d')!;
      const img=bx.createImageData(bw,bh);
      const stops:[number,[number,number,number]][]= [
        [0.00,[19,26,84]],[0.18,[34,52,152]],[0.36,[46,74,202]],[0.50,[56,92,222]],
        [0.62,[44,70,196]],[0.80,[30,46,142]],[1.00,[16,22,74]],
      ];
      const at=(v:number):[number,number,number]=>{
        for(let s2=0;s2<stops.length-1;s2++){const [v0,c0]=stops[s2],[v1,c1]=stops[s2+1];
          if(v<=v1){const k=(v-v0)/(v1-v0); return [lerp(c0[0],c1[0],k),lerp(c0[1],c1[1],k),lerp(c0[2],c1[2],k)];}}
        return stops[stops.length-1][1];
      };
      for(let j=0;j<bh;j++)for(let i=0;i<bw;i++){
        const u=i/bw, v=j/bh; const [r,g2,b]=at(v);
        const m2=1+n1(u,v)*0.09+n2(u*2,v*2)*0.04;
        const o=4*(j*bw+i); img.data[o]=clamp(r*m2,0,255); img.data[o+1]=clamp(g2*m2,0,255); img.data[o+2]=clamp(b*m2,0,255); img.data[o+3]=255;
      }
      bx.putImageData(img,0,0);
      x.imageSmoothingEnabled=true; x.drawImage(bc,0,0,w,h);
      // Great Dark Spot (~22°S) with soft edges and bright cirrus hooking
      // around its southern rim (as in the Voyager portrait).
      wrapX(x,w,()=>{
        const cx2=w*0.40, cy2=h*0.62, rx=w*0.062, ry=h*0.055;
        x.save();x.translate(cx2,cy2);x.scale(rx,ry);
        const rg=x.createRadialGradient(0,0,0,0,0,1);
        rg.addColorStop(0,'rgba(13,22,74,0.95)');rg.addColorStop(0.55,'rgba(16,26,84,0.85)');rg.addColorStop(1,'rgba(16,26,84,0)');
        x.fillStyle=rg;x.beginPath();x.arc(0,0,1,0,Math.PI*2);x.fill();x.restore();
        for(let k2=0;k2<26;k2++){
          const th=Math.PI*(0.15+0.7*(k2/26));
          const px2=cx2+Math.cos(th)*rx*1.15, py2=cy2+Math.sin(th)*ry*1.35+ry*0.25;
          x.globalAlpha=0.10+0.30*Math.sin(k2/26*Math.PI); x.fillStyle='#f2f6ff';
          x.beginPath();x.ellipse(px2,py2,3+rnd()*7,1.2+rnd()*2.2,0,0,Math.PI*2);x.fill();
        }
        x.globalAlpha=1;
      });
      // "Scooter" — the small fast bright cloud south of the GDS.
      wrapX(x,w,()=>{const rg=x.createRadialGradient(w*0.52,h*0.72,0,w*0.52,h*0.72,w*0.016);
        rg.addColorStop(0,'rgba(238,244,255,0.8)');rg.addColorStop(1,'rgba(238,244,255,0)');
        x.fillStyle=rg;x.beginPath();x.ellipse(w*0.52,h*0.72,w*0.020,h*0.014,0,0,Math.PI*2);x.fill();});
      // Dark Spot 2 with its bright core.
      wrapX(x,w,()=>{
        const cx2=w*0.68, cy2=h*0.80;
        x.save();x.translate(cx2,cy2);x.scale(w*0.026,h*0.020);
        const rg=x.createRadialGradient(0,0,0,0,0,1);
        rg.addColorStop(0,'rgba(14,22,72,0.85)');rg.addColorStop(1,'rgba(14,22,72,0)');
        x.fillStyle=rg;x.beginPath();x.arc(0,0,1,0,Math.PI*2);x.fill();x.restore();
        const rg2=x.createRadialGradient(cx2,cy2,0,cx2,cy2,w*0.008);
        rg2.addColorStop(0,'rgba(240,246,255,0.75)');rg2.addColorStop(1,'rgba(240,246,255,0)');
        x.fillStyle=rg2;x.beginPath();x.arc(cx2,cy2,w*0.008,0,Math.PI*2);x.fill();
      });
      // Soft feathered cirrus: chains of tapered translucent puffs along a
      // wavy path — no hard stroked lines.
      const cirrus=(yc:number,count:number)=>{
        for(let i=0;i<count;i++){
          const u0=rnd(), len=0.05+rnd()*0.12; const py0=h*(yc+(rnd()-0.5)*0.05);
          const wBase=1.2+rnd()*2.4, aBase=0.15+rnd()*0.18, ph=rnd()*Math.PI*2;
          const nSeg=Math.max(10,Math.floor(len*w/8));
          wrapX(x,w,()=>{
            for(let s2=0;s2<=nSeg;s2++){
              const f2=s2/nSeg, uu=u0+len*f2;
              const px2=uu*w, py2=py0+Math.sin(uu*Math.PI*2*6+ph)*3+Math.sin(uu*Math.PI*2*14+ph*2)*1.2;
              const taper=Math.sin(f2*Math.PI); // fade in and out along the streak
              const rr=wBase*(0.8+0.5*taper);
              const rg=x.createRadialGradient(px2,py2,0,px2,py2,rr*4);
              rg.addColorStop(0,`rgba(238,244,255,${(aBase*taper).toFixed(3)})`);
              rg.addColorStop(1,'rgba(238,244,255,0)');
              x.fillStyle=rg;x.beginPath();x.ellipse(px2,py2,rr*4,rr*1.6,0,0,Math.PI*2);x.fill();
            }
          });
        }
      };
      cirrus(0.33,7); cirrus(0.44,4); cirrus(0.68,6);
      const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t;
    };

    // Sun-direction uniforms for the terminator-lit inner planets.
    const litUniforms: Partial<Record<P, {dayMap:{value:THREE.Texture}, sunDir:{value:THREE.Vector3}}>> = {};

    for(const p of PLANETS){
      let planetMat: THREE.Material;
      const isOuter = OUTER_PLANETS.has(p);

      if (p === 'Earth') {
        planetMat = new THREE.ShaderMaterial({
          vertexShader: EARTH_VERT,
          fragmentShader: EARTH_FRAG,
          uniforms: earthShaderUniforms,
        });
      } else if (isOuter) {
        const fb = p === 'Saturn' ? saturnBodyProc()
          : p === 'Uranus' ? uranusProc()
          : p === 'Neptune' ? neptuneProc()
          : fallbackTex(p);
        const basicMat = new THREE.MeshBasicMaterial({ map: fb });
        basicMat.color.setScalar(p === 'Pluto' ? 0.90 : 0.82); // outer planets dimmer (far from Sun); Pluto eased to stay visible
        planetMat = basicMat;

        const cdnUrls = CDN_TEX_URLS[p];
        if (cdnUrls && cdnUrls.length > 0) {
          loadFirst(cdnUrls, (tex) => { basicMat.map = tex; basicMat.needsUpdate = true; });
        }
      } else {
        // Inner rocky planets: day/night terminator like Earth's — the
        // hemisphere facing away from the Sun falls into near-darkness.
        const uniforms = { dayMap: { value: fallbackTex(p) }, sunDir: { value: new THREE.Vector3(1,0,0) } };
        litUniforms[p] = uniforms;
        planetMat = new THREE.ShaderMaterial({ vertexShader: LIT_VERT, fragmentShader: LIT_FRAG, uniforms });

        const cdnUrls = CDN_TEX_URLS[p];
        if (cdnUrls && cdnUrls.length > 0) {
          loadFirst(cdnUrls, (tex) => { uniforms.dayMap.value = tex; });
        }
      }

      const m = new THREE.Mesh(new THREE.SphereGeometry(R[p],64,48), planetMat);
      m.name = p;
      sceneFrom(p, m.position);
      mesh[p] = m;
      scene.add(m);

      if (p === 'Saturn') {
        const ringInner = R.Saturn*1.20, ringOuter = R.Saturn*2.33; // out to the thin F ring
        const rg = new THREE.RingGeometry(ringInner, ringOuter, 256);
        // Remap UVs so the radial direction samples the ring strip texture (inner->outer = u 0->1)
        const ringPos = rg.attributes.position;
        const ringUv = rg.attributes.uv;
        const ringV = new THREE.Vector3();
        for (let i = 0; i < ringPos.count; i++) {
          ringV.fromBufferAttribute(ringPos, i);
          const u = (ringV.length() - ringInner) / (ringOuter - ringInner);
          ringUv.setXY(i, u, 0.5);
        }
        ringUv.needsUpdate = true;
        // The hand-built ring strip is far more detailed than the old CDN ring
        // textures, so nothing overrides it anymore.
        const rm = new THREE.MeshBasicMaterial({map: saturnRingProc(), transparent: true, side: THREE.DoubleSide, depthWrite: false});
        const rings = new THREE.Mesh(rg, rm);
        rings.rotation.x = Math.PI/2;
        m.add(rings);
      }

      if (p === 'Uranus') {
        const ringInner = R.Uranus*1.55, ringOuter = R.Uranus*2.02;
        const rg = new THREE.RingGeometry(ringInner, ringOuter, 256);
        // Remap UVs so the radial direction samples the ring strip texture (inner->outer = u 0->1)
        const ringPos = rg.attributes.position;
        const ringUv = rg.attributes.uv;
        const ringV = new THREE.Vector3();
        for (let i = 0; i < ringPos.count; i++) {
          ringV.fromBufferAttribute(ringPos, i);
          const u = (ringV.length() - ringInner) / (ringOuter - ringInner);
          ringUv.setXY(i, u, 0.5);
        }
        ringUv.needsUpdate = true;
        const rm = new THREE.MeshBasicMaterial({map: uranusRingProc(), transparent: true, side: THREE.DoubleSide, depthWrite: false});
        const rings = new THREE.Mesh(rg, rm);
        rings.rotation.x = Math.PI/2; // ring lies in the planet's equatorial plane
        m.add(rings);
        // Uranus is tipped ~98 deg on its side — that's WHY its rings appear nearly vertical.
        // Tilting the whole body (with its equatorial ring) stands the ring upright as in the photo.
        m.rotation.z = THREE.MathUtils.degToRad(97.77);
      }

      mkLine(p);
    }

    const applyEarthDay = (tex: THREE.Texture) => { earthShaderUniforms.dayMap.value = tex; };
    loadFirst([
      `${GLOBE_CDN}/earth-day.jpg`,
      `${TEX_CDN}/2k_earth_daymap.jpg`,
      earthTexUrl,
      earthTexFallbackUrl,
    ], applyEarthDay);
    loadFirst([EARTH_NIGHT_URL], (tex) => {
      earthShaderUniforms.nightMap.value = tex;
    });
    loadFirst([EARTH_WATER_URL], (tex) => {
      earthShaderUniforms.specMap.value = tex;
    });

    loadFirst([EARTH_TOPO_URL], (tex) => {
      earthShaderUniforms.bumpMap.value = tex;
    });

    const kmToAU=(km:number)=>km/149_597_870;

    type Lunar = { body:THREE.Mesh, a:number,e:number,i:number,Omega:number,omega:number,M:number,n:number, parent:THREE.Object3D };
    let lunar:Lunar|null=null; let lunarLine:THREE.Line|null=null;

    function addEarthMoon(){
      const parent = mesh.Earth as THREE.Object3D; if(!parent) return;
      const a = AU2U * kmToAU(384_400);
      const e = 0.0549; const i = rad(5.145); const Omega = rad(125.08); const omega = rad(318.15);
      const P = 27.321661; const n = 2*Math.PI / P;
      const geo = new THREE.SphereGeometry(0.58, 32, 24);
      const mat = new THREE.MeshStandardMaterial({ color:0xbebebe, roughness:0.95, metalness:0 });
      const body = new THREE.Mesh(geo, mat); body.name='Moon'; parent.add(body);
      lunar = { body, a, e, i, Omega, omega, M:0, n, parent };
      const N=256; const pts=new Float32Array(N*3);
      for(let k=0;k<N;k++){ const f=(k/N)*Math.PI*2; const r=(a*(1-e*e))/(1+e*Math.cos(f)); let x=r*Math.cos(f), y=r*Math.sin(f), z=0; const cw=Math.cos(omega), sw=Math.sin(omega); const ci=Math.cos(i), si=Math.sin(i); const cO=Math.cos(Omega), sO=Math.sin(Omega); let x1=x*cw - y*sw, y1=x*sw + y*cw, z1=0; let x2=x1, y2=y1*ci - z1*si, z2=y1*si + z1*ci; let xf=x2*cO - y2*sO, yf=x2*sO + y2*cO, zf=z2; const off=3*k; pts[off]=xf; pts[off+1]=yf; pts[off+2]=zf; }
      const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pts,3));
      const lm=new THREE.LineBasicMaterial({color:0x7aa2ff,transparent:true,opacity:0.6}); lunarLine=new THREE.LineLoop(g,lm); parent.add(lunarLine);
    }

    function updateMoon(d:number){ if(!lunar) return; lunar.M = wrap(lunar.M + lunar.n*d); const E=solveE(lunar.M, lunar.e); const beta=Math.sqrt((1+lunar.e)/(1-lunar.e)); const f=2*Math.atan(beta*Math.tan(E/2)); const r=lunar.a*(1 - lunar.e*Math.cos(E)); let x=r*Math.cos(f), y=r*Math.sin(f), z=0; const cw=Math.cos(lunar.omega), sw=Math.sin(lunar.omega); const ci=Math.cos(lunar.i), si=Math.sin(lunar.i); const cO=Math.cos(lunar.Omega), sO=Math.sin(lunar.Omega); let x1=x*cw - y*sw, y1=x*sw + y*cw, z1=0; let x2=x1, y2=y1*ci - z1*si, z2=y1*si + z1*ci; let xf=x2*cO - y2*sO, yf=x2*sO + y2*cO, zf=z2; lunar.body.position.set(xf,yf,zf); }

    type SimpleMoon = {pivot:THREE.Object3D, angVel:number};
    let simpleMoons:SimpleMoon[]=[];
    (function addBigMoons(){ const j=mesh.Jupiter, s=mesh.Saturn; if(!j||!s) return; const add=(parent:THREE.Object3D, radius:number, period:number, size:number, col:number, incDeg:number, name:string)=>{ const pivot=new THREE.Object3D(); pivot.rotation.x=rad(incDeg); parent.add(pivot); const pm = new THREE.MeshStandardMaterial({color:col, roughness:0.9, metalness:0}); const m=new THREE.Mesh(new THREE.SphereGeometry(size,24,18), pm); m.name=name; m.position.set(radius,0,0); pivot.add(m); simpleMoons.push({pivot, angVel:(2*Math.PI)/period}); }; add(j, AU2U*kmToAU(1_070_400), 7.154553, 0.72, 0x9d9a8f, 2, 'Ganymede'); add(s, AU2U*kmToAU(1_221_870), 15.945, 0.67, 0xcaa464, 3, 'Titan'); })();

    addEarthMoon();

    // Belt particles sample an 8-cell atlas of shaded asteroid sprites and
    // slowly tumble (per-particle rotation animated in the fragment shader) —
    // still a single draw call per belt, no extra geometry.
    const vshader = `
      attribute vec3 color; attribute float aCell; attribute float aAng; attribute float aSpin;
      varying vec3 vColor; varying float vCell; varying float vAng; varying float vBright;
      uniform float uMinPx; uniform float uMaxPx; uniform float uScale; uniform float uTime;
      uniform vec3 uCamPos; uniform float uPhase;
      void main(){
        vColor = color;
        vCell = aCell;
        vAng = aAng + aSpin * uTime;
        // Sun-phase lighting: rocks glow when their sunlit side faces the
        // camera (sun at the origin) and dim when backlit. uPhase blends it
        // out for Kuiper objects, which get near-constant display luminance.
        float d = dot(normalize(-position), normalize(uCamPos - position));
        float ph = 0.25 + 0.75 * clamp(0.5 + 0.5 * d, 0.0, 1.0);
        vBright = mix(1.0, ph, uPhase);
        vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_Position = projectionMatrix * mv;
        float px = uScale / max(-mv.z, 1.0);
        gl_PointSize = clamp(px, uMinPx, uMaxPx);
      }
    `;
    const fshader = `
      varying vec3 vColor; varying float vCell; varying float vAng; varying float vBright;
      uniform sampler2D uMap; uniform float uOpacity;
      void main(){
        vec2 pc = gl_PointCoord - 0.5;
        float cs = cos(vAng), sn = sin(vAng);
        pc = mat2(cs, -sn, sn, cs) * pc;
        if(abs(pc.x) > 0.499 || abs(pc.y) > 0.499) discard;
        vec2 uv = (vec2(mod(vCell, 4.0), floor(vCell / 4.0)) + pc + 0.5) / vec2(4.0, 2.0);
        vec4 tex = texture2D(uMap, uv);
        vec4 c = vec4(vColor * vBright, 1.0) * tex; c.a *= uOpacity;
        if(c.a < 0.02) discard; gl_FragColor = c;
      }
    `;
    // 4x2 atlas of lumpy, crater-pocked rocks lit from the upper-left. Each
    // rock stays inside the cell's inscribed circle so rotation never clips.
    const mkAsteroidAtlas=()=>{
      const cw=128, cols=4, rows=2, c=document.createElement('canvas');
      c.width=cw*cols; c.height=cw*rows;
      const x=c.getContext('2d')!;
      const rnd=mkRng(4242);
      for(let cell=0; cell<cols*rows; cell++){
        const cx=(cell%cols)*cw+cw/2, cy=Math.floor(cell/cols)*cw+cw/2;
        const rBase=cw*(0.20+rnd()*0.08);
        const nV=10+Math.floor(rnd()*5);
        const radii:number[]=[]; for(let k=0;k<nV;k++) radii.push(rBase*(0.72+rnd()*0.5));
        x.save(); x.beginPath();
        for(let k=0;k<=nV;k++){const th=k/nV*Math.PI*2; const rr=radii[k%nV];
          const px2=cx+Math.cos(th)*rr, py2=cy+Math.sin(th)*rr*(0.8+(cell%3)*0.1);
          if(k===0)x.moveTo(px2,py2); else x.lineTo(px2,py2);}
        x.closePath();
        const warm=cell%2===0;
        const g=x.createLinearGradient(cx-rBase,cy-rBase,cx+rBase,cy+rBase);
        g.addColorStop(0, warm?'#cdc4b2':'#c2c6cd');
        g.addColorStop(0.55, warm?'#8a7f6d':'#83878f');
        g.addColorStop(1, '#2e2b25');
        x.fillStyle=g; x.fill();
        x.strokeStyle='rgba(0,0,0,0.45)'; x.lineWidth=3; x.stroke();
        x.clip();
        const nC=3+Math.floor(rnd()*4);
        for(let k=0;k<nC;k++){
          const th=rnd()*Math.PI*2, dd=rnd()*rBase*0.7;
          const px2=cx+Math.cos(th)*dd, py2=cy+Math.sin(th)*dd, cr=rBase*(0.10+rnd()*0.16);
          x.fillStyle='rgba(16,14,10,0.4)'; x.beginPath(); x.arc(px2,py2,cr,0,Math.PI*2); x.fill();
          x.fillStyle='rgba(238,232,218,0.28)'; x.beginPath(); x.arc(px2-cr*0.35,py2-cr*0.35,cr*0.5,0,Math.PI*2); x.fill();
        }
        x.restore();
      }
      const t=track(new THREE.CanvasTexture(c)); (t as any).colorSpace=THREE.SRGBColorSpace; t.needsUpdate=true; return t;
    };
    const asteroidAtlas=mkAsteroidAtlas();
    const addRockAttrs=(geo:THREE.BufferGeometry, count:number)=>{
      const cell=new Float32Array(count), ang=new Float32Array(count), spin=new Float32Array(count);
      for(let i=0;i<count;i++){cell[i]=Math.floor(Math.random()*8); ang[i]=Math.random()*Math.PI*2; spin[i]=(Math.random()-0.5)*1.6;}
      geo.setAttribute('aCell',new THREE.BufferAttribute(cell,1));
      geo.setAttribute('aAng',new THREE.BufferAttribute(ang,1));
      geo.setAttribute('aSpin',new THREE.BufferAttribute(spin,1));
    };
    const mkMat = (opacity:number, minPx=2.0, maxPx=10.0, phase=1.0)=> new THREE.ShaderMaterial({
      vertexShader: vshader, fragmentShader: fshader, transparent:true,
      depthWrite:false, depthTest:true, blending:THREE.NormalBlending,
      uniforms:{ uMap:{value:asteroidAtlas}, uTime:{value:0}, uCamPos:{value:new THREE.Vector3()}, uPhase:{value:phase}, uOpacity:{value:opacity}, uMinPx:{value:minPx}, uMaxPx:{value:maxPx}, uScale:{value:460*(renderer.getPixelRatio?.()||1)} }
    });
    type Belt={geo:THREE.BufferGeometry,mesh:THREE.Points,a:Float32Array,e:Float32Array,inc:Float32Array,M:Float32Array,n:Float32Array,cursor:number};
    const mkOrbitingBelt=(count:number,rangeAU:[number,number],eccMax:number,incSigmaDeg:number,size:number,colorize:(i:number)=>[number,number,number],opacity=0.62,phase=1.0):Belt=>{const geo=new THREE.BufferGeometry(); const pos=new Float32Array(count*3), col=new Float32Array(count*3); const a=new Float32Array(count), e=new Float32Array(count), inc=new Float32Array(count), M=new Float32Array(count), nA=new Float32Array(count); for(let i=0;i<count;i++){const ai=lerp(rangeAU[0],rangeAU[1],Math.random())*AU2U; a[i]=ai; e[i]=Math.random()*eccMax; inc[i]=rad(Math.max(0,randn()*incSigmaDeg)); const Ti=TE*Math.pow((ai/aE),1.5); nA[i]=(2*Math.PI)/Ti; M[i]=Math.random()*Math.PI*2; const f=approxTrue(M[i],e[i]); const r=ai*(1-e[i]*Math.cos(M[i])); const xp=r*Math.cos(f), yp=r*Math.sin(f); const idx=3*i; pos[idx]=xp; pos[idx+1]=yp*Math.sin(inc[i]); pos[idx+2]=yp*Math.cos(inc[i]); const [rC,gC,bC]=colorize(i); col.set([rC,gC,bC],idx);} const posAttr=new THREE.BufferAttribute(pos,3); posAttr.setUsage(THREE.DynamicDrawUsage); geo.setAttribute('position',posAttr); geo.setAttribute('color',new THREE.BufferAttribute(col,3)); addRockAttrs(geo,count); const mat=mkMat(opacity, 2.0, 10.0, phase); const pts=new THREE.Points(geo,mat); pts.frustumCulled=false; if(!geo.boundingSphere) geo.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,0), AU2U*80); scene.add(pts); return {geo,mesh:pts,a,e,inc,M:M,n:nA,cursor:0}};
    let ast=mkOrbitingBelt(astCRef.current,[2.1,3.3],0.12,2.5,0.9,()=>{const c=.85+Math.random()*.25;return [c,c,c]},0.85,1.0);
    let kui=mkOrbitingBelt(kuiCRef.current,[42,48],0.10,5.5,1.4,()=>{const c=.9+Math.random()*.2;return [c*.75,c*.95,1.15]},0.95,0.15);

    type Swarm=Belt;
    const mkCoOrbital=(count:number,aRangeAU:[number,number],centerOffset:number,coreDeg:number,color:number,incSigma=1.2):Swarm=>{const aMin=aRangeAU[0]*AU2U,aMax=aRangeAU[1]*AU2U; const geo=new THREE.BufferGeometry(); const pos=new Float32Array(count*3), col=new Float32Array(count*3); const a=new Float32Array(count), e=new Float32Array(count), inc=new Float32Array(count), M=new Float32Array(count), nA=new Float32Array(count); const cc=new THREE.Color(color); const mj=jupLon(); for(let i=0;i<count;i++){const core=Math.random()<0.7; const width=rad(coreDeg); const tail=rad(60); const g=width*0.55*randn(); const tailOff=(Math.random()*tail); const dTheta=core? g : (width*0.25*randn()+tailOff); const sign=Math.sign(centerOffset||1); const theta=wrap(mj+centerOffset+sign*dTheta); const t=clamp((core?Math.abs(g):tailOff)/tail,0,1); const ai=lerp(aMin,aMax, core?0.45+0.35*Math.random():0.25+0.70*t); const ei=Math.min(0.08,Math.abs(randn())*0.03+0.01*Math.random()); const inci=rad(Math.max(0,randn()*incSigma)); a[i]=ai; e[i]=ei; inc[i]=inci; const Ti=TE*Math.pow((ai/aE),1.5); nA[i]=(2*Math.PI)/Ti; M[i]=theta; const f=approxTrue(M[i],e[i]); const r=ai*(1-e[i]*Math.cos(M[i])); const xp=r*Math.cos(f), yp=r*Math.sin(f); const idx=3*i; pos[idx]=xp; pos[idx+1]=yp*Math.sin(inci); pos[idx+2]=yp*Math.cos(inci); col.set([cc.r,cc.g,cc.b],idx);} const posAttr=new THREE.BufferAttribute(pos,3); posAttr.setUsage(THREE.DynamicDrawUsage); geo.setAttribute('position',posAttr); geo.setAttribute('color',new THREE.BufferAttribute(col,3)); addRockAttrs(geo,count); const mat=mkMat(0.66, 2.0, 10.0, 1.0); const pts=new THREE.Points(geo,mat); pts.frustumCulled=false; if(!geo.boundingSphere) geo.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,0), AU2U*80); scene.add(pts); return {geo,mesh:pts,a,e,inc,M:M,n:nA,cursor:0}};
    let L4:Swarm, L5:Swarm; const trojanTotal=Math.max(2000,Math.floor(astCRef.current*0.2)); L4=mkCoOrbital(Math.floor(trojanTotal/2),[4.9,5.5],+Math.PI/3,20,0x62f38e,1.0); L5=mkCoOrbital(Math.ceil(trojanTotal/2), [4.9,5.5],-Math.PI/3,20,0xff6b6b,1.0);

    const mkHilda=(count:number,phase:number)=>{const aH=5.2028*Math.pow(2/3,2/3); const geo=new THREE.BufferGeometry(); const pos=new Float32Array(count*3), col=new Float32Array(count*3); const a=new Float32Array(count), e=new Float32Array(count), inc=new Float32Array(count), M=new Float32Array(count), nA=new Float32Array(count); const mj=jupLon(); const cc=new THREE.Color(0xc770ff); for(let i=0;i<count;i++){const d=rad(18)*randn(); const theta=wrap(mj+phase+d); const ai=(aH+lerp(-0.35,0.35,Math.random()))*AU2U; const ei=0.08+Math.abs(randn())*0.05; const inci=rad(Math.max(0,randn()*1.5)); a[i]=ai; e[i]=clamp(ei,0,0.18); inc[i]=inci; const Ti=TE*Math.pow((ai/aE),1.5); nA[i]=(2*Math.PI)/Ti; M[i]=theta; const f=approxTrue(M[i],e[i]); const r=ai*(1-e[i]*Math.cos(M[i])); const xp=r*Math.cos(f), yp=r*Math.sin(f); const idx=3*i; pos[idx]=xp; pos[idx+1]=yp*Math.sin(inci); pos[idx+2]=yp*Math.cos(inci); col.set([cc.r,cc.g,cc.b],idx);} const posAttr=new THREE.BufferAttribute(pos,3); posAttr.setUsage(THREE.DynamicDrawUsage); geo.setAttribute('position',posAttr); geo.setAttribute('color',new THREE.BufferAttribute(col,3)); addRockAttrs(geo,count); const mat=mkMat(0.74, 2.0, 10.0, 1.0); const pts=new THREE.Points(geo,mat); pts.frustumCulled=false; if(!geo.boundingSphere) geo.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,0), AU2U*80); scene.add(pts); return {geo,mesh:pts,a,e,inc,M:M,n:nA,cursor:0}};
    let H1:Swarm, H2:Swarm, H3:Swarm; const hildaTotal=Math.max(1000,Math.floor(astCRef.current*0.08)); H1=mkHilda(Math.floor(hildaTotal/3), +Math.PI/3); H2=mkHilda(Math.floor(hildaTotal/3), Math.PI); H3=mkHilda(hildaTotal-2*Math.floor(hildaTotal/3), -Math.PI/3);

    // ---- Sky: layered starfield + faint galactic band ----------------------
    // The whole sky group follows the camera every frame, so the stars behave
    // as an infinitely distant backdrop from ANY viewpoint. Depth testing
    // stays on, so planets and rings still occlude the sky correctly.
    // Brightness is driven per frame: brighter as you zoom out of the system,
    // fading as the Sun's light dominates the view, and easing off slightly
    // when a focused planet fills the frame.
    const SKY_R = 60000;
    const sky = new THREE.Group(); scene.add(sky);
    // Band (Milky Way) orientation — tilted like the real galactic plane.
    const bandEuler = new THREE.Euler(rad(62), 0, rad(23));
    // ---- Photoreal star rendering -----------------------------------------
    // Every star is a soft gaussian point-spread function (computed per pixel,
    // never a hard-edged disc), with a CONTINUOUS power-law mix of sizes and
    // brightness in a single draw call. Stars smaller than ~1.8px render as
    // dimmer (not smaller) soft specks — the classic PSF trick that removes
    // all hard single-pixel "screensaver" dots.
    const mkGaussTex=()=>{
      const s=64, c=document.createElement('canvas'); c.width=c.height=s;
      const x=c.getContext('2d')!; const img=x.createImageData(s,s);
      for(let py2=0;py2<s;py2++)for(let px2=0;px2<s;px2++){
        const dx=(px2+0.5)/s-0.5, dy=(py2+0.5)/s-0.5;
        const r=Math.sqrt(dx*dx+dy*dy)*2; // 1 at edge
        const a=Math.exp(-Math.pow(r*2.2,2));
        const o=4*(py2*s+px2); img.data[o]=img.data[o+1]=img.data[o+2]=255; img.data[o+3]=Math.round(a*255);
      }
      x.putImageData(img,0,0);
      const t=track(new THREE.CanvasTexture(c)); t.needsUpdate=true; return t;
    };
    const mkBrightStarTex=()=>{
      const s=128, half=s/2, c=document.createElement('canvas'); c.width=c.height=s;
      const x=c.getContext('2d')!; const img=x.createImageData(s,s);
      for(let py2=0;py2<s;py2++)for(let px2=0;px2<s;px2++){
        const dx=px2+0.5-half, dy=py2+0.5-half;
        const r=Math.sqrt(dx*dx+dy*dy)/half; // 1 at edge
        let a=Math.exp(-Math.pow(r*2.8,2))          // tight core
             +0.28*Math.exp(-Math.pow(r*1.15,2));   // soft halo
        // faint 4-point diffraction spikes
        a+=0.40*Math.exp(-(dy*dy)/(2*1.2*1.2))*Math.exp(-Math.abs(dx)/(half*0.38));
        a+=0.40*Math.exp(-(dx*dx)/(2*1.2*1.2))*Math.exp(-Math.abs(dy)/(half*0.38));
        const o=4*(py2*s+px2); img.data[o]=img.data[o+1]=img.data[o+2]=255; img.data[o+3]=Math.round(Math.min(1,a)*255);
      }
      x.putImageData(img,0,0);
      const t=track(new THREE.CanvasTexture(c)); t.needsUpdate=true; return t;
    };
    const STAR_VERT=`
      attribute float aSize; attribute vec3 color;
      varying vec3 vColor; varying float vFade;
      uniform float uPx;
      void main(){
        vColor=color;
        float s=max(aSize,1.8);
        vFade=pow(clamp(aSize/1.8,0.35,1.0),1.1);
        gl_PointSize=s*uPx;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
      }
    `;
    const STAR_FRAG=`
      uniform sampler2D uMap; uniform float uOpacity;
      varying vec3 vColor; varying float vFade;
      void main(){
        vec4 tex=texture2D(uMap,gl_PointCoord);
        gl_FragColor=vec4(vColor*tex.a, tex.a*vFade*uOpacity);
      }
    `;
    const skyMats: THREE.ShaderMaterial[] = [];
    const starField=(n:number,seed:number,bandFrac:number,tex:THREE.Texture,baseOp:number,sizeFn:(r:()=>number)=>number)=>{
      const rnd=mkRng(seed);
      const g=(s:number)=>(rnd()+rnd()+rnd()-1.5)/1.5*s;
      const pos=new Float32Array(n*3), col=new Float32Array(n*3), siz=new Float32Array(n);
      const v=new THREE.Vector3();
      const clumps:number[]=[]; for(let k=0;k<12;k++) clumps.push(rnd()*Math.PI*2);
      let sMin=1e9,sMax=0; const raw:number[]=[];
      for(let i2=0;i2<n;i2++){ const s2=sizeFn(rnd); raw.push(s2); if(s2<sMin)sMin=s2; if(s2>sMax)sMax=s2; }
      for(let i2=0;i2<n;i2++){
        if(rnd()<bandFrac){
          const th=rnd()<0.6?rnd()*Math.PI*2:clumps[Math.floor(rnd()*12)]+g(0.55);
          const lat=g(rnd()<0.5?0.11:0.17);
          v.set(Math.cos(th)*Math.cos(lat), Math.sin(lat), Math.sin(th)*Math.cos(lat)).applyEuler(bandEuler);
        }else{
          const u=rnd(), w2=rnd(); const th=2*Math.PI*u, ph=Math.acos(2*w2-1);
          v.set(Math.sin(ph)*Math.cos(th), Math.cos(ph), Math.sin(ph)*Math.sin(th));
        }
        pos[3*i2]=v.x*SKY_R; pos[3*i2+1]=v.y*SKY_R; pos[3*i2+2]=v.z*SKY_R;
        // realistic temperature mix: mostly white/blue-white, some warm
        const t2=rnd(); let r2:number,g2:number,b2:number;
        if(t2<0.10){r2=1;g2=0.74;b2=0.55;} else if(t2<0.28){r2=1;g2=0.90;b2=0.76;}
        else if(t2<0.72){r2=1;g2=1;b2=1;} else {r2=0.74;g2=0.85;b2=1;}
        const s2=raw[i2]; siz[i2]=s2;
        // brightness rises with size (real PSF behavior), with scatter
        const k3=(s2-sMin)/Math.max(1e-6,sMax-sMin);
        const bright=(0.50+0.50*Math.pow(k3,0.75))*(0.62+0.38*rnd());
        col[3*i2]=r2*bright; col[3*i2+1]=g2*bright; col[3*i2+2]=b2*bright;
      }
      const geo=new THREE.BufferGeometry();
      geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
      geo.setAttribute('color',new THREE.BufferAttribute(col,3));
      geo.setAttribute('aSize',new THREE.BufferAttribute(siz,1));
      const mat=new THREE.ShaderMaterial({
        vertexShader:STAR_VERT, fragmentShader:STAR_FRAG, transparent:true,
        depthWrite:false, depthTest:true, blending:THREE.AdditiveBlending,
        uniforms:{uMap:{value:tex}, uOpacity:{value:baseOp}, uPx:{value:renderer.getPixelRatio?.()||1}},
      });
      (mat as any).userData={baseOp};
      const pts=new THREE.Points(geo,mat); pts.frustumCulled=false; pts.renderOrder=-1;
      sky.add(pts); skyMats.push(mat);
    };
    // Main field: dense, mostly sub-2px soft specks with a continuous tail of
    // larger stars (power law) — includes the granular Milky Way clustering.
    starField(34000, 501, 0.45, mkGaussTex(), 0.95, r=>1.3+4.7*Math.pow(r(),2.8));
    // Bright stars: gaussian core + soft halo + faint diffraction spikes.
    starField(300, 503, 0.25, mkBrightStarTex(), 1.0, r=>5.0+9.0*Math.pow(r(),2.2));
    const skyFwd=new THREE.Vector3(), skyToSun=new THREE.Vector3();

    let drag=false,lx=0,ly=0; const md=(e:MouseEvent)=>{if(e.button!==0)return; drag=true; lx=e.clientX; ly=e.clientY}; const mm=(e:MouseEvent)=>{if(!drag)return; const dx=e.clientX-lx, dy=e.clientY-ly; lx=e.clientX; ly=e.clientY; const f=focusRef.current; if(f){f.yaw-=dx*.005; f.pitch=clamp(f.pitch+dy*.005,-1.35,1.35);}else{yawRef.current-=dx*.005; pitchRef.current=clamp(pitchRef.current+dy*.005,0,1.52); distRef.current=clamp(distRef.current*(1+dy*.002),50,30000);}}; const onUp=()=>{drag=false}; const wheel=(e:WheelEvent)=>{const f=focusRef.current; if(f){f.dist=clamp(f.dist*(e.deltaY>0?1.1:0.9),f.minDist,f.maxDist);}else{distRef.current=clamp(distRef.current*(e.deltaY>0?1.1:0.9),50,30000);}};
    renderer.domElement.addEventListener('mousedown',md); window.addEventListener('mousemove',mm); window.addEventListener('mouseup',onUp); renderer.domElement.addEventListener('wheel',wheel as any,{passive:true} as any);

    // ---- Double-click focus: fly to a body and observe it like a satellite ----
    const BODIES: BodyName[] = ['Sun', ...PLANETS];
    const bodyObj = (n:BodyName): THREE.Object3D => n==='Sun' ? sun : mesh[n];
    const bodyRadius = (n:BodyName) => n==='Sun' ? SUN_VIS_R : R[n];
    const ownerOf = (obj:THREE.Object3D|null): BodyName|null => { let o=obj, n:BodyName|null=null; while(o && !n){ if((BODIES as string[]).includes(o.name)) n=o.name as BodyName; o=o.parent; } return n; };
    // Closest zoom must stay radially outside ring annuli (Saturn rings reach 2.27R, Uranus 2.02R).
    const MIN_ZOOM: Partial<Record<BodyName,number>> = { Saturn: 2.4, Uranus: 2.15 };

    // Smoothed camera state: glide eases from a snapshot to the live desired pose,
    // so arrival is exact even while the target body keeps moving on its orbit.
    const camLookSm = new THREE.Vector3(0,0,0);
    const glide = { active:false, t0:0, dur:2200, fromPos:new THREE.Vector3(), fromLook:new THREE.Vector3(), anchor:null as THREE.Object3D|null, fromOff:new THREE.Vector3(), fromLookOff:new THREE.Vector3() };
    const startGlide = () => {
      glide.active=true; glide.t0=performance.now();
      glide.fromPos.copy(cam.position); glide.fromLook.copy(camLookSm);
      // When flying toward a body, glide in that body's reference frame: at high sim
      // speeds the body sweeps its orbit far faster than the glide, and a world-space
      // path toward a live target would whip the camera around the system.
      const f=focusRef.current; glide.anchor = f ? f.obj : null;
      if(glide.anchor){
        const ap=new THREE.Vector3(); glide.anchor.getWorldPosition(ap);
        glide.fromOff.copy(cam.position).sub(ap);
        glide.fromLookOff.copy(camLookSm).sub(ap);
      }
    };

    const focusBody = (name:BodyName) => {
      const obj = bodyObj(name); const radius = bodyRadius(name);
      const wp = new THREE.Vector3(); obj.getWorldPosition(wp);
      // Start the satellite orbit from the camera's current bearing so the fly-in is short.
      const yaw0 = Math.atan2(cam.position.x - wp.x, cam.position.z - wp.z);
      focusRef.current = { name, obj, dist: radius*3.6, minDist: radius*(MIN_ZOOM[name] ?? 1.45), maxDist: radius*30, pitch: 0.22, yaw: yaw0, spin: name==='Sun'?0.05:0.15 };
      startGlide();
      setFocused(name);
    };
    // Always reconcile the React state: if the ref and state ever desync (e.g. an effect
    // re-run in dev), Back/Esc must still dismiss the panel; only glide when leaving focus.
    const unfocus = () => { const had=focusRef.current; focusRef.current=null; if(had) startGlide(); setFocused(null); };
    cmdsRef.current.focusBody = focusBody; cmdsRef.current.unfocus = unfocus;

    const raycaster = new THREE.Raycaster();
    const pickNdc = new THREE.Vector2(); const pickWp = new THREE.Vector3(); const pickRel = new THREE.Vector3(); const camFwd = new THREE.Vector3();
    const onDblClick = (e:MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const px = e.clientX-rect.left, py = e.clientY-rect.top;
      pickNdc.set((px/rect.width)*2-1, -(py/rect.height)*2+1);
      raycaster.setFromCamera(pickNdc, cam);
      let name: BodyName|null = null;
      for (const h of raycaster.intersectObjects(BODIES.map(bodyObj), true)) {
        name = ownerOf(h.object);
        if (name) break;
      }
      if (!name) {
        // Forgiving pick: bodies are tiny from the overview, so accept the nearest
        // body center within a small screen-space radius of the click.
        cam.getWorldDirection(camFwd);
        let best: BodyName|null = null, bestD = 28;
        for (const b of BODIES) {
          bodyObj(b).getWorldPosition(pickWp);
          if (pickRel.subVectors(pickWp, cam.position).dot(camFwd) <= 0) continue; // behind camera
          pickWp.project(cam);
          const sx=(pickWp.x*0.5+0.5)*rect.width, sy=(-pickWp.y*0.5+0.5)*rect.height;
          const dd=Math.hypot(sx-px, sy-py);
          if (dd<bestD) { bestD=dd; best=b; }
        }
        if (best) {
          // Don't pick a body hidden behind another one (e.g. the Sun behind the
          // focused planet): the ray to its center must reach it first.
          bodyObj(best).getWorldPosition(pickWp);
          raycaster.set(cam.position, pickRel.subVectors(pickWp, cam.position).normalize());
          const first = raycaster.intersectObjects(BODIES.map(bodyObj), true)[0];
          const owner = first ? ownerOf(first.object) : null;
          if (!owner || owner === best) name = best;
        }
      }
      if (name && focusRef.current?.name !== name) focusBody(name);
    };
    renderer.domElement.addEventListener('dblclick', onDblClick);
    const onKeyDown = (e:KeyboardEvent) => { if(e.key==='Escape') unfocus(); };
    window.addEventListener('keydown', onKeyDown);
    if ((import.meta as any).env?.DEV) { (window as any).__solar = cmdsRef.current; }

    const sysMaxR=()=>{const pMax=Math.max(...PLANETS.map(p=>{const el=oscCache[p]; return (el.a>0&&el.e<1)?el.a*(1+el.e)*AU2U:0;})); const kMax=kui?Math.max(...kui.a)*1.05:0; return Math.max(pMax,kMax)};
    cmdsRef.current.fitInner=()=>{unfocus(); const R=AU2U*4.0; const f=cam.fov*Math.PI/180; distRef.current=clamp(R/Math.tan(f/2)*1.25,80,10000); pitchRef.current=.9};
    cmdsRef.current.fitFull=()=>{unfocus(); const R=sysMaxR(); const f=cam.fov*Math.PI/180; distRef.current=clamp(R/Math.tan(f/2)*1.25,120,30000); pitchRef.current=.9};
    cmdsRef.current.topDown=()=>{unfocus(); pitchRef.current=1.45}; cmdsRef.current.iso=()=>{unfocus(); pitchRef.current=.5; yawRef.current=-Math.PI/4};

    // Orbit editing on the N-body state: scale the tangential velocity
    // component (a true delta-v burn), then rotate the whole state about the
    // line of nodes to set the requested inclination. The perturbed orbit then
    // evolves under real gravity like everything else.
    const apply=(p:P,f:number,tiltDeg:number)=>{
      const b=sim.bodies[IDX[p]]; const mu=G*(1+b.m);
      let rx=b.x-sunB.x, ry=b.y-sunB.y, rz=b.z-sunB.z;
      let vx=b.vx-sunB.vx, vy=b.vy-sunB.vy, vz=b.vz-sunB.vz;
      const r=Math.hypot(rx,ry,rz); const rhx=rx/r, rhy=ry/r, rhz=rz/r;
      const vr=vx*rhx+vy*rhy+vz*rhz;
      const tx=vx-vr*rhx, ty=vy-vr*rhy, tz=vz-vr*rhz;
      let scale=clamp(f,.1,10);
      // Relax the burn back toward 1x (a no-op is always valid) until the
      // orbit is bound, fits inside the sim's edge, AND keeps its perihelion
      // above a floor: a sun-diving orbit moves so fast at perihelion that
      // the fixed 0.25-day step can't resolve it — the integrator would gain
      // energy there and slingshot the planet to hyperbolic ejection.
      const rCap=(sysMaxR()/AU2U)*1.2, rFloor=0.09; // AU
      for(let it=0; it<200; it++){
        const nvx=vr*rhx+tx*scale, nvy=vr*rhy+ty*scale, nvz=vr*rhz+tz*scale;
        const eps=(nvx*nvx+nvy*nvy+nvz*nvz)/2 - mu/r;
        if(eps<0){ const o=oscFromState(rx,ry,rz,nvx,nvy,nvz,mu); if(o.a*(1+o.e)<=rCap && o.a*(1-o.e)>=rFloor) break; }
        scale=1+(scale-1)*0.94;
        if(Math.abs(scale-1)<1e-4){ scale=1; break; }
      }
      vx=vr*rhx+tx*scale; vy=vr*rhy+ty*scale; vz=vr*rhz+tz*scale;
      // Rotate (r, v) rigidly about the ascending-node direction so the
      // orbital plane's inclination becomes tiltDeg (shape is preserved).
      const hx=ry*vz-rz*vy, hy=rz*vx-rx*vz, hzz=rx*vy-ry*vx;
      const hm=Math.hypot(hx,hy,hzz);
      const iCur=Math.acos(clamp(hzz/hm,-1,1));
      let ax=-hy, ay=hx; const am=Math.hypot(ax,ay);
      if(am<1e-12){ax=1; ay=0;} else {ax/=am; ay/=am;}
      const dI=rad(tiltDeg)-iCur, c=Math.cos(dI), s=Math.sin(dI);
      const rot=(x:number,y:number,z:number):[number,number,number]=>{
        const dot=ax*x+ay*y; // axis z-component is 0
        return [x*c+(ay*z)*s+ax*dot*(1-c), y*c+(-ax*z)*s+ay*dot*(1-c), z*c+(ax*y-ay*x)*s];
      };
      [rx,ry,rz]=rot(rx,ry,rz); [vx,vy,vz]=rot(vx,vy,vz);
      b.x=sunB.x+rx; b.y=sunB.y+ry; b.z=sunB.z+rz;
      b.vx=sunB.vx+vx; b.vy=sunB.vy+vy; b.vz=sunB.vz+vz;
      sim.computeAccel();
      updateLine(p); sceneFrom(p, mesh[p].position); lastRef.current=p;
      if(focusRef.current?.name===p) startGlide();
    };
    const resetPlanet=(p:P)=>{ const b=sim.bodies[IDX[p]]; const e0=epochRel[p];
      b.x=sunB.x+e0.x; b.y=sunB.y+e0.y; b.z=sunB.z+e0.z;
      b.vx=sunB.vx+e0.vx; b.vy=sunB.vy+e0.vy; b.vz=sunB.vz+e0.vz;
      updateLine(p); sceneFrom(p, mesh[p].position); };
    cmdsRef.current.apply=apply; cmdsRef.current.resetLast=()=>{const p=lastRef.current; if(!p) return; resetPlanet(p); sim.computeAccel(); if(focusRef.current?.name===p) startGlide();}; cmdsRef.current.fullReset=()=>{for(const p of PLANETS) resetPlanet(p); sim.t=0; lineTick=1; sim.computeAccel(); if(focusRef.current) startGlide();};

    const advanceBelt=(B:Belt,d:number)=>{const pos=B.geo.getAttribute('position') as THREE.BufferAttribute; const arr=pos.array as Float32Array; const N=B.a.length; const heavy=N>40000; const CH=heavy?Math.max(8000,Math.ceil(N/12)):Math.max(12000,Math.ceil(N/6)); let s=B.cursor,e=Math.min(N,s+CH); for(let i=s;i<e;i++){const Mi=wrap(B.M[i]+B.n[i]*d); B.M[i]=Mi; const ei=B.e[i]; const f=approxTrue(Mi,ei); const r=B.a[i]*(1-ei*Math.cos(Mi)); const xp=r*Math.cos(f), yp=r*Math.sin(f); const si=Math.sin(B.inc[i]),ci=Math.cos(B.inc[i]); const idx=3*i; arr[idx]=xp; arr[idx+1]=yp*si; arr[idx+2]=yp*ci;} const off=s*3, cnt=(e-s)*3; const anyPos:any = pos as any; if (typeof anyPos.setUpdateRange === 'function'){ anyPos.setUpdateRange(off,cnt); } else { if (!anyPos.updateRange) anyPos.updateRange = {offset:0,count:-1}; anyPos.updateRange.offset = off; anyPos.updateRange.count = cnt; } pos.needsUpdate=true; B.cursor=(e===N)?0:e };

    const onResize=()=>{const W=root.clientWidth||window.innerWidth,H=root.clientHeight||window.innerHeight; renderer.setSize(W,H); cam.aspect=W/H; cam.updateProjectionMatrix()}; const ro=new ResizeObserver(onResize); ro.observe(root);

    const desiredPos=new THREE.Vector3(), desiredLook=new THREE.Vector3(), glTmp=new THREE.Vector3(), glTmp2=new THREE.Vector3();
    let lineTick=1;
    let t0=performance.now(); const loop=()=>{const now=performance.now(), dt=Math.min(.25,(now-t0)/1000); t0=now;
      // Use the days the integrator ACTUALLY advanced (it may truncate after a
      // stalled frame) so the decorative belts/moons stay in phase with it.
      const d=sim.advance(dt*simDaysPerSecRef.current);
      for(const p of PLANETS){ sceneFrom(p, mesh[p].position); }
      if(--lineTick<=0){ lineTick=15;
        for(const p of PLANETS) updateLine(p);
        if(dateHudRef.current){
          const ms=EPOCH_UNIX_MS+sim.t*86400000, yr=sim.t/365.25;
          // Past year 9999 the ISO form garbles ("+275760-…") and eventually
          // new Date() throws — fall back to elapsed years only.
          dateHudRef.current.textContent = ms<253402300799999
            ? new Date(ms).toISOString().slice(0,10)+'  •  T+'+yr.toFixed(2)+' yr'
            : 'T+'+Math.round(yr).toLocaleString()+' yr';
        }
      }
      updateMoon(d);
      for(const m of simpleMoons){m.pivot.rotation.y+=m.angVel*d}
      advanceBelt(ast,d); advanceBelt(kui,d); advanceBelt(L4,d); advanceBelt(L5,d); advanceBelt(H1,d); advanceBelt(H2,d); advanceBelt(H3,d);
      const focus=focusRef.current;
      if(focus){
        focus.yaw+=0.06*dt; // slow satellite drift around the body
        // rotateY spins about the body's local (tilted) pole, so Uranus's rings don't wobble
        focus.obj.rotateY(focus.spin*dt);
        focus.obj.getWorldPosition(desiredLook);
        desiredPos.set(
          desiredLook.x + focus.dist*Math.cos(focus.pitch)*Math.sin(focus.yaw),
          desiredLook.y + focus.dist*Math.sin(focus.pitch),
          desiredLook.z + focus.dist*Math.cos(focus.pitch)*Math.cos(focus.yaw)
        );
      }else{
        const r=distRef.current,yaw=yawRef.current,pitch=pitchRef.current;
        desiredPos.set(r*Math.cos(pitch)*Math.sin(yaw),r*Math.sin(pitch),r*Math.cos(pitch)*Math.cos(yaw));
        desiredLook.set(0,0,0);
      }
      if(glide.active){
        const g=clamp((now-glide.t0)/glide.dur,0,1);
        const s=g*g*g*(g*(g*6-15)+10); // smootherstep ease
        if(glide.anchor && focus && glide.anchor===focus.obj){
          // Body-frame glide: desiredLook is the body's live world position, so
          // interpolate offsets from it and the body's own motion never whips the path.
          glTmp.subVectors(desiredPos,desiredLook);
          cam.position.lerpVectors(glide.fromOff,glTmp,s).add(desiredLook);
          camLookSm.lerpVectors(glide.fromLookOff,glTmp2.set(0,0,0),s).add(desiredLook);
        }else{
          cam.position.lerpVectors(glide.fromPos,desiredPos,s);
          camLookSm.lerpVectors(glide.fromLook,desiredLook,s);
        }
        // The straight-line path may pass through a body (e.g. the Sun when hopping
        // across the system) — push the camera radially out of any sphere it enters.
        for(const b of BODIES){
          bodyObj(b).getWorldPosition(glTmp);
          const rr=bodyRadius(b)*1.15, dd=cam.position.distanceTo(glTmp);
          if(dd<rr && dd>1e-6) cam.position.sub(glTmp).multiplyScalar(rr/dd).add(glTmp);
        }
        if(g>=1) glide.active=false;
      }else{
        cam.position.copy(desiredPos);
        camLookSm.copy(desiredLook);
      }
      cam.lookAt(camLookSm);

      // ---- Sky parallax + view-reactive star prominence ----
      // The sky follows the camera at 55% of its motion: distant-sky parallax,
      // so stars drift gently as you pan/zoom instead of freezing in place
      // (the offset stays well inside the sky sphere at max zoom-out).
      sky.position.copy(cam.position).multiplyScalar(0.55);
      {
        const camDist=cam.position.length();
        // fade against the Sun's light: facing it and/or close enough that
        // its glare dominates the frame
        cam.getWorldDirection(skyFwd);
        skyToSun.copy(cam.position).multiplyScalar(-1).normalize();
        const facing=Math.max(0,skyFwd.dot(skyToSun));
        const sunApp=clamp((SUN_VIS_R*10)/Math.max(camDist,1),0,1);
        const glare=Math.pow(facing,3)*sunApp;
        // ease off a touch when a focused planet fills the frame
        const fc=focusRef.current;
        const occl=fc?clamp(bodyRadius(fc.name)*2.2/fc.dist,0,1)*0.18:0;
        // Inside the solar system the stars sit DIM in the background so
        // they never compete with solar objects. They only reach full
        // brightness once Pluto's entire orbit fits in view (camDist ≳ 3500
        // units); zooming in from there, the fade begins as Pluto's orbit
        // approaches the edge of the frame (~1200 units) and bottoms out at
        // a faint baseline for every closer view.
        const zoomFade=clamp((camDist-1200)/2300,0,1);
        const starI=(0.35+0.65*zoomFade)*(1-0.85*glare)*(1-occl);
        for(const m2 of skyMats) m2.uniforms.uOpacity.value=((m2 as any).userData.baseOp||1)*starI;
      }
      // asteroid tumble clock (wall time, so it stays smooth at any sim speed)
      // + camera position for the sun-phase lighting on the rocks
      {
        const wallT=now/1000;
        for(const B of [ast,kui,L4,L5,H1,H2,H3]){
          const u=(B.mesh.material as any).uniforms;
          u.uTime.value=wallT;
          u.uCamPos.value.copy(cam.position);
        }
      }
      sunLight.position.set(0,0,0);
      sunGlow.position.set(0,0,0);

      const earthPos = mesh.Earth.position;
      const sunDirFromEarth = new THREE.Vector3().copy(earthPos).negate().normalize();
      earthShaderUniforms.sunDir.value.copy(sunDirFromEarth);
      earthShaderUniforms.camPos.value.copy(cam.position);
      for(const p of ['Mercury','Venus','Mars'] as const){
        const u=litUniforms[p]; if(u) u.sunDir.value.copy(mesh[p].position).multiplyScalar(-1).normalize();
      }

      if(Math.random()<dt*6)spawn(); if(Math.random()<dt*6)spawn();
      flareGroup.rotation.y+=.25*dt;
      for(let i=0;i<FPOOL;i++){if(life[i]<=0)continue; life[i]+=dt; const s=flSprites[i]; const mat = (s.material as THREE.SpriteMaterial) || null; if(!mat){continue;} s.position.addScaledVector(vel[i],dt); const t=clamp(life[i]/lifeMax[i],0,1); mat.opacity=t<.15?t/.15:1-(t-.15)/.85; s.scale.setScalar(2+6*t); if(s.position.length()>FLARE_CAP||t>=1){mat.opacity=0; life[i]=0}}
      (sun.material as any).uniforms.uTime.value += dt;
      const spinUps=(scene as any).userData._spinUpdates as Array<(dt:number)=>void>|undefined;
      if(spinUps){for(let i=0;i<spinUps.length;i++){try{spinUps[i](dt);}catch{}}}
      renderer.render(scene,cam);
      rafRef.current=requestAnimationFrame(loop)
    };
    rafRef.current=requestAnimationFrame(loop);

    cmdsRef.current.rebuildBelts=()=>{const re=(B:Belt)=>{scene.remove(B.mesh); B.geo.dispose(); (B.mesh.material as THREE.Material).dispose()}; re(ast); re(kui); re(L4); re(L5); re(H1); re(H2); re(H3); ast=mkOrbitingBelt(astCRef.current,[2.1,3.3],0.12,2.5,0.9,()=>{const c=.85+Math.random()*.25;return [c,c,c]},0.85,1.0); kui=mkOrbitingBelt(kuiCRef.current,[42,48],0.10,5.5,1.4,()=>{const c=.9+Math.random()*.2;return [c*.75,c*.95,1.15]},0.95,0.15); const trojanTotal=Math.max(2000,Math.floor(astCRef.current*0.2)); L4=mkCoOrbital(Math.floor(trojanTotal/2),[4.9,5.5],+Math.PI/3,20,0x62f38e,1.0); L5=mkCoOrbital(Math.ceil(trojanTotal/2),[4.9,5.5],-Math.PI/3,20,0xff6b6b,1.0); const hildaTotal=Math.max(1000,Math.floor(astCRef.current*0.08)); H1=mkHilda(Math.floor(hildaTotal/3),+Math.PI/3); H2=mkHilda(Math.floor(hildaTotal/3),Math.PI); H3=mkHilda(hildaTotal-2*Math.floor(hildaTotal/3),-Math.PI/3)};

    return ()=>{cancelAnimationFrame(rafRef.current); ro.disconnect(); renderer.domElement.removeEventListener('mousedown',md as any); window.removeEventListener('mousemove',mm as any); window.removeEventListener('mouseup',onUp as any); renderer.domElement.removeEventListener('wheel',wheel as any); renderer.domElement.removeEventListener('dblclick',onDblClick as any); window.removeEventListener('keydown',onKeyDown as any); if((window as any).__solar===cmdsRef.current) delete (window as any).__solar; focusRef.current=null; root.removeChild(renderer.domElement); renderer.dispose(); scene.traverse((o:any)=>{o.geometry?.dispose?.(); const m=o.material; if(m){Array.isArray(m)?m.forEach((mm:any)=>mm.dispose?.()):m.dispose?.();}}); bag.forEach(f=>{try{f()}catch{}}) };

    function glowTex(){const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!,g=x.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);g.addColorStop(0,'rgba(255,200,120,.95)');g.addColorStop(.55,'rgba(255,140,50,.35)');g.addColorStop(1,'rgba(255,110,40,0)');x.fillStyle=g;x.fillRect(0,0,s,s);const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t}
    function mkFlareTex(){const s=128,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!,g=x.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);g.addColorStop(0,'rgba(255,220,170,.95)');g.addColorStop(.35,'rgba(255,140,60,.55)');g.addColorStop(1,'rgba(255,140,60,0)');x.fillStyle=g;x.beginPath();x.ellipse(s/2,s/2,s*.48,s*.18,Math.PI/4,0,Math.PI*2);x.fill();const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t}
    function makeSunMat(){
      const vSun=/* glsl */`
        varying vec3 vN; varying vec3 vWP; varying vec3 vV;
        void main(){
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal);
          vV = normalize(cameraPosition - vWP);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `;
      const fSun=/* glsl */`
        varying vec3 vN; varying vec3 vWP; varying vec3 vV;
        uniform float uTime;
        float hash(vec3 p){ return fract(sin(dot(p, vec3(127.1,311.7,74.7)))*43758.5453123); }
        float noise(vec3 p){ vec3 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          float n = mix(mix(mix(hash(i+vec3(0,0,0)),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                        mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
          return n; }
        float fbm(vec3 p){ float a=0.0; float amp=0.5; float f=1.0; for(int i=0;i<5;i++){ a += amp*noise(p*f); f*=2.07; amp*=0.55; } return a; }
        vec3 palette(float t){ vec3 orange=vec3(1.0,0.58,0.20); vec3 red=vec3(0.85,0.20,0.08); vec3 white=vec3(1.0); vec3 base = 0.6*orange + 0.3*red + 0.1*white; return mix(base, white, smoothstep(0.75,0.98,t)); }
        void main(){
          vec3 n = normalize(vN);
          vec3 p = n*5.0;
          float ct = cos(uTime*0.07), st = sin(uTime*0.07);
          mat2 R = mat2(ct,-st,st,ct);
          p.xy = R * p.xy; p.yz = R * p.yz;
          float g = fbm(p);
          float s = fbm(p*2.3 + vec3(0.0,uTime*0.25,0.0));
          float t = clamp(mix(g,s,0.45),0.0,1.0);
          float mu = clamp(dot(normalize(vV), n), 0.0, 1.0);
          float limb = mix(0.55, 1.0, pow(mu, 0.35));
          vec3 col = palette(t) * (1.1 + 0.6*t) * limb;
          gl_FragColor = vec4(col, 1.0);
        }
      `;
      return new THREE.ShaderMaterial({vertexShader:vSun,fragmentShader:fSun,uniforms:{uTime:{value:0}},transparent:false,depthWrite:true,depthTest:true});
    }
  },[]);

  return (
    <div style={{width:'100%',height:'100vh',display:'grid',gridTemplateColumns:'1fr 420px',gap:8,background:'#000'}}>
      <div style={{position:'relative',width:'100%',height:'100%',overflow:'hidden'}}>
        <div ref={mountRef} style={{width:'100%',height:'100%'}}>
          {webglError && <div style={{color:'#e5e7eb',display:'flex',alignItems:'center',justifyContent:'center',height:'100%',fontFamily:'system-ui',fontSize:18}}>WebGL is required to display the 3D simulation.</div>}
        </div>
        {!webglError && !focused && (
          <div style={{position:'absolute',left:16,bottom:14,color:'#cbd5e1',fontFamily:'system-ui,sans-serif',fontSize:12.5,background:'rgba(17,24,39,.65)',border:'1px solid #334155',borderRadius:999,padding:'6px 12px',pointerEvents:'none'}}>
            Double-click the Sun or a planet for a close-up satellite view
          </div>
        )}
        {!webglError && (
          <div style={{position:'absolute',right:12,top:12,color:'#cbd5e1',fontFamily:'system-ui,sans-serif',fontSize:12.5,background:'rgba(17,24,39,.65)',border:'1px solid #334155',borderRadius:8,padding:'6px 10px',pointerEvents:'none',fontVariantNumeric:'tabular-nums'}}>
            <span ref={dateHudRef}>2026-07-10  •  T+0.00 yr</span>
          </div>
        )}
        {!webglError && focused && <InfoPanel body={focused} onBack={()=>cmdsRef.current.unfocus?.()} />}
      </div>
      <div style={{color:'#e5e7eb',fontFamily:'system-ui,sans-serif',background:'rgba(17,24,39,.7)',border:'1px solid #334155',borderRadius:10,padding:12,height:'calc(100vh - 8px)',overflowY:'auto'}}>
        <div style={{fontWeight:700,marginBottom:2}}>🛠 Orbit Editor</div>
        <div style={{opacity:.65,fontSize:11.5,marginBottom:10}}>True N-body gravity: Sun + 9 planets (AU · days · M☉), Yoshida-4 symplectic, dt ≤ 0.25 d — resonances and precession emerge from the forces.</div>
        <Row label="Orbital Speed (days/sec)"><input type="range" min={0} max={100} step={1} value={speedPos} onChange={e=>{const p=parseInt(e.target.value); setSpeedPos(p); const d=sliderToDays(p,SPEED_MIN,SPEED_MAX); setSimDaysPerSec(d); simDaysPerSecRef.current=d;}}/><span style={{textAlign:'right'}}>{simDaysPerSec}</span></Row>
        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:16}}>
          <Btn onClick={()=>cmdsRef.current.topDown?.()}>Top‑down</Btn>
          <Btn onClick={()=>cmdsRef.current.iso?.()}>Isometric</Btn>
          <Btn2 onClick={()=>cmdsRef.current.fitInner?.()}>Fit Inner</Btn2>
          <Btn2 onClick={()=>cmdsRef.current.fitFull?.()}>Fit Full</Btn2>
        </div>
        <div style={{marginBottom:10}}>
          <div style={{marginBottom:6,opacity:.9}}>Planet</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6}}>
            {PLANETS.map(p=> <Tab key={p} active={sel===p} onClick={()=>setSel(p)}>{p}</Tab>)}
          </div>
        </div>
        <div style={{marginTop:8,paddingTop:8,borderTop:'1px solid #374151'}}>
          <Row label="Speed factor (tangential Δv)"><input type="range" min={0.1} max={10} step={0.01} value={spd} onChange={e=>setSpd(parseFloat(e.target.value))}/><span>{spd.toFixed(2)}×</span></Row>
          <Row label="Tilt / Inclination (deg)"><input type="range" min={0} max={30} step={0.5} value={tilt} onChange={e=>setTilt(parseFloat(e.target.value))}/><span>{tilt.toFixed(1)}°</span></Row>
          <div style={{display:'flex',gap:8,marginTop:8}}>
            <Btn onClick={()=>cmdsRef.current.apply?.(sel,spd,tilt)}>Apply</Btn>
            <Btn2 onClick={()=>cmdsRef.current.resetLast?.()}>Reset Last</Btn2>
            <Btn2 onClick={()=>cmdsRef.current.fullReset?.()}>Full Reset</Btn2>
          </div>
        </div>
        <div style={{marginTop:16,paddingTop:10,borderTop:'1px solid #374151'}}>
          <div style={{fontWeight:700,marginBottom:8}}>Belts</div>
          <Row label="Asteroid Density"><input type="range" min={0} max={150000} step={1000} value={asteroidCount} onChange={e=>{const v=parseInt(e.target.value); setAsteroidCount(v); astCRef.current=v; cmdsRef.current.rebuildBelts?.();}}/><span>{asteroidCount.toLocaleString()}</span></Row>
          <Row label="Kuiper Density"><input type="range" min={0} max={600000} step={5000} value={kuiperCount} onChange={e=>{const v=parseInt(e.target.value); setKuiperCount(v); kuiCRef.current=v; cmdsRef.current.rebuildBelts?.();}}/><span>{kuiperCount.toLocaleString()}</span></Row>
          <div style={{opacity:.85,fontSize:12,marginTop:6}}>Trojans/Greeks ≈ <b>20%</b> of main belt • Hildas ≈ <b>8%</b> (auto‑scaled)</div>
        </div>
      </div>
    </div>
  );
}

function InfoPanel({body,onBack}:{body:BodyName,onBack:()=>void}){
  const info=BODY_INFO[body];
  return (
    <div style={{position:'absolute',top:16,left:16,width:340,maxWidth:'calc(100% - 32px)',maxHeight:'calc(100% - 32px)',overflowY:'auto',color:'#e5e7eb',fontFamily:'system-ui,sans-serif',background:'rgba(17,24,39,.85)',border:'1px solid #334155',borderRadius:12,padding:16,backdropFilter:'blur(6px)'}}>
      <button onClick={onBack} style={{padding:'7px 12px',borderRadius:8,background:'#059669',border:'1px solid #10b981',color:'#fff',cursor:'pointer',fontWeight:600}}>← Back to Solar System</button>
      <div style={{fontSize:26,fontWeight:800,marginTop:12,lineHeight:1.1}}>{body}</div>
      <div style={{color:'#34d399',fontSize:11.5,fontWeight:700,letterSpacing:1.2,textTransform:'uppercase',marginTop:3,marginBottom:10}}>{info.kind}</div>
      <p style={{fontSize:13,lineHeight:1.55,opacity:.92,margin:'0 0 12px'}}>{info.blurb}</p>
      <div>
        {info.stats.map(([k,v])=>(
          <div key={k} style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12,padding:'6px 0',borderTop:'1px solid #273244',fontSize:12.5}}>
            <span style={{opacity:.7,whiteSpace:'nowrap'}}>{k}</span><span style={{textAlign:'right',fontWeight:600}}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{opacity:.6,fontSize:11.5,marginTop:10}}>Drag to orbit • Scroll to zoom • Esc to exit</div>
    </div>
  );
}

function Row({label,children}:{label:string,children:any}){return <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 100px',alignItems:'center',gap:10,marginBottom:12}}><div style={{opacity:.9}}>{label}</div>{children}</div>}
function Tab({active,children,onClick}:{active?:boolean,children:any,onClick?:any}){return <button onClick={onClick} style={{padding:'6px 8px',borderRadius:8,background:active?'#059669':'#1f2937',border:`1px solid ${active?'#10b981':'#374151'}`,color:'#e5e7eb',cursor:'pointer'}}>{children}</button>}
function Btn({children,onClick}:{children:any,onClick?:any}){return <button onClick={onClick} style={{padding:'6px 10px',borderRadius:8,background:'#059669',border:'1px solid #10b981',color:'#fff',cursor:'pointer'}}>{children}</button>}
function Btn2({children,onClick}:{children:any,onClick?:any}){return <button onClick={onClick} style={{padding:'6px 10px',borderRadius:8,background:'#374151',border:'1px solid #4b5563',color:'#e5e7eb',cursor:'pointer'}}>{children}</button>}

function sliderToDays(pos:number,min:number,max:number){const t=pos/100; return Math.round(min*Math.pow(max/min,t))}
function daysToSlider(days:number,min:number,max:number){const t=Math.log(days/min)/Math.log(max/min); return Math.round(clamp01(t)*100)}
function clamp01(x:number){return Math.max(0,Math.min(1,x))}

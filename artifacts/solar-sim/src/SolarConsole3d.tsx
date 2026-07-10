import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import earthTexUrl from '@assets/Earth_from_Space_1773586048704.jpg';
import earthTexFallbackUrl from '@assets/Earth_30_year_comparison_pillars_1773586048704.jpg';

const clamp = (x:number,a:number,b:number)=>Math.max(a,Math.min(b,x));
const sgn = (x:number)=>x>=0?1:-1;
const rad = (d:number)=>d*Math.PI/180;
const lerp=(a:number,b:number,t:number)=>a+(b-a)*t;
const randn=()=>{let u=0,v=0;while(u===0)u=Math.random();while(v===0)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)};

const TEX_CDN = 'https://www.solarsystemscope.com/textures/download';
const GLOBE_CDN = 'https://cdn.jsdelivr.net/npm/three-globe@2.34.0/example/img';
const PLANET_CDN = 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images';

const CDN_TEX_URLS: Record<string, string[]> = {
  Mercury: [`${PLANET_CDN}/mercurymap.jpg`],
  Venus:   [`${PLANET_CDN}/venusmap.jpg`],
  Mars:    [`${PLANET_CDN}/marsmap1k.jpg`],
  Jupiter: [`${PLANET_CDN}/jupitermap.jpg`],
  Saturn:  [`${PLANET_CDN}/saturnmap.jpg`],
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
const SATURN_RING_COLOR_URL = `${PLANET_CDN}/saturnringcolor.jpg`;
const SATURN_RING_ALPHA_URL = `${PLANET_CDN}/saturnringpattern.gif`;

const ATMO_PARAMS: Record<string, {color:[number,number,number], power:number, opacity:number, scale:number}> = {
  Venus:   {color:[0.95,0.85,0.5],  power:2.5, opacity:0.55, scale:1.06},
  Earth:   {color:[0.15,0.4,1.0],   power:4.5, opacity:0.0, scale:1.025},
  Mars:    {color:[0.8,0.35,0.2],   power:5.5, opacity:0.25, scale:1.02},
  Jupiter: {color:[0.85,0.65,0.35], power:3.5, opacity:0.20, scale:1.03},
  Uranus:  {color:[0.4,0.85,0.9],   power:3.5, opacity:0.30, scale:1.04},
  Neptune: {color:[0.25,0.45,1.0],  power:3.5, opacity:0.35, scale:1.04},
  Pluto:   {color:[0.6,0.72,0.95],  power:4.0, opacity:0.18, scale:1.05},
};

const ATMO_VERT = /* glsl */`
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main(){
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const ATMO_FRAG = /* glsl */`
  uniform vec3 uColor;
  uniform float uPower;
  uniform float uOpacity;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main(){
    float intensity = 1.0 - dot(vNormal, vViewDir);
    float scatter = pow(max(intensity, 0.0), uPower);
    gl_FragColor = vec4(uColor, scatter * uOpacity);
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

    const AU2U=30; const TE=365.25; const aE=AU2U*1.0; const mu=Math.pow((2*Math.PI)/TE,2)*Math.pow(aE,3);

    const ELS:Record<P,{a:number,e:number,i:number,M:number}>= {
      Mercury:{a:0.3871,e:0.2056,i:rad(7.0), M:0.0},
      Venus:{a:0.7233,e:0.0068,i:rad(3.4), M:0.6},
      Earth:{a:1.0000,e:0.0167,i:rad(0.0), M:1.2},
      Mars:{a:1.5237,e:0.0934,i:rad(1.8), M:1.8},
      Jupiter:{a:5.2028,e:0.0489,i:rad(1.3), M:0.25},
      Saturn:{a:9.5388,e:0.0565,i:rad(2.5), M:1.10},
      Uranus:{a:19.1914,e:0.0457,i:rad(0.8), M:2.00},
      Neptune:{a:30.0689,e:0.0113,i:rad(1.8), M:2.70},
      Pluto:{a:39.482,e:0.2488,i:rad(17.0),M:0.00},
    };
    const elements:Record<P,{a:number,e:number,i:number,M:number}>={} as any; const base:typeof elements={} as any;
    for(const k of PLANETS){const el=ELS[k]; elements[k]={a:el.a*AU2U,e:el.e,i:el.i,M:el.M}; base[k]={...elements[k]};}

    const R:Record<P,number>={Mercury:1.0,Venus:1.8,Earth:2.2,Mars:1.6,Jupiter:5.6,Saturn:4.2,Uranus:3.4,Neptune:3.1,Pluto:2.4};
    const C:Record<P,number>={Mercury:0xc9b9a7,Venus:0xe0c16c,Earth:0x4da6ff,Mars:0xff6f50,Jupiter:0xd6a46c,Saturn:0xf0d9a6,Uranus:0x84dfff,Neptune:0x5d8cff,Pluto:0xaaaaaa};

    const track=(t:THREE.Texture)=>{bag.push(()=>t.dispose()); return t}; const bag:(()=>void)[]=[];
    const dotTex=(()=>{const c=document.createElement('canvas'); const s=64; c.width=c.height=s; const g=c.getContext('2d')!.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2); g.addColorStop(0,'#fff'); g.addColorStop(1,'#fff0'); const x=c.getContext('2d')!; x.fillStyle=g; x.fillRect(0,0,s,s); const t=track(new THREE.CanvasTexture(c)); (t as any).colorSpace=THREE.SRGBColorSpace; (t as any).needsUpdate=true; return t;})();

    const makeBlot=(base:string,blot:string,n=110)=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;x.fillStyle=base;x.fillRect(0,0,s,s);x.globalAlpha=.25;x.fillStyle=blot;for(let i=0;i<n;i++){const r=(Math.random()*.06+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill();}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t};
    const bandsProc=(cols:string[])=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!,bh=s/cols.length;cols.forEach((col,i)=>{x.fillStyle=col;x.fillRect(0,i*bh,s,bh)});const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t};
    const earthProc=()=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;x.fillStyle='#2764cc';x.fillRect(0,0,s,s);x.fillStyle='#4caf50';x.globalAlpha=.95;for(let i=0;i<80;i++){const r=(Math.random()*.08+.03)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill()}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t};
    const fallbackTex=(n:P)=>({Mercury:makeBlot('#b6ada3','#6e675f'),Venus:makeBlot('#e8c873','#c8a24a'),Earth:earthProc(),Mars:makeBlot('#d16b3e','#7a3e26'),Jupiter:bandsProc(['#caa376','#e1c8a8','#b68955','#e6d3b7','#ad7a49','#dcc29f','#bf915f']),Saturn:bandsProc(['#e8d7aa','#d8be86','#efdcb8','#c8aa72','#e5d6ae','#c8aa72']),Uranus:bandsProc(['#9de3f7','#84dfff','#9de3f7']),Neptune:bandsProc(['#6aa7ff','#5d8cff','#6aa7ff']),Pluto:makeBlot('#cdcac7','#a09d9b')})[n];

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
      const w=1024,h=8,c=document.createElement('canvas');c.width=w;c.height=h;
      const x=c.getContext('2d')!;x.clearRect(0,0,w,h);
      // u 0->1 maps inner(1.20R)->outer(2.27R): faint C ring, bright B ring, Cassini gap, A ring.
      const seg=(t:number):[number,number]=>{
        let a=0,lum=200;
        if(t<0.304){ a=0.28+0.10*Math.sin(t*60); lum=165+25*Math.sin(t*50); }       // C ring (faint, dusky)
        else if(t<0.701){ a=0.92+0.06*Math.sin(t*90); lum=212+28*Math.sin(t*70); }   // B ring (bright, dense)
        else if(t<0.771){ a=0.06; lum=120; }                                          // Cassini Division
        else { a=0.64+0.10*Math.sin(t*80); lum=196+24*Math.sin(t*60); }              // A ring (medium)
        if(t>0.945&&t<0.962) a*=0.25;                                                  // Encke gap
        if(t<0.012||t>0.992) a=0;                                                      // soft edges
        return [Math.max(0,a),lum];
      };
      for(let i=0;i<w;i++){ const t=i/(w-1); const [a,lum]=seg(t);
        x.fillStyle=`rgba(${lum|0},${(lum*0.9)|0},${(lum*0.68)|0},${a.toFixed(3)})`; x.fillRect(i,0,1,h); }
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
    const rPeriMerc = ELS.Mercury.a*(1-ELS.Mercury.e)*AU2U;
    const SUN_VIS_R = Math.max(2.5, Math.min(rPeriMerc*0.60, AU2U*0.80));
    const sunGeom=new THREE.SphereGeometry(SUN_VIS_R,64,48); const sunMat=makeSunMat(); const sun=new THREE.Mesh(sunGeom,sunMat); sun.name='Sun'; scene.add(sun);
    const sunGlow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex(),color:0xffffff,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false})); sunGlow.scale.setScalar(rPeriMerc*0.90); scene.add(sunGlow);

    const flareTex=mkFlareTex(); const flareGroup=new THREE.Group(); scene.add(flareGroup);
    const FPOOL=90, flSprites:THREE.Sprite[]=[] as THREE.Sprite[], life:number[]=[], lifeMax:number[]=[], vel:THREE.Vector3[]=[];
    for(let i=0;i<FPOOL;i++){
      const mat=new THREE.SpriteMaterial({map:flareTex,color:0xffb070,blending:THREE.AdditiveBlending,transparent:true,opacity:0,depthTest:false,depthWrite:false});
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
    const posOf=(p:P)=>{const el=elements[p]; const E=solveE(el.M,el.e); const xp=el.a*(Math.cos(E)-el.e), yp=el.a*Math.sqrt(1-el.e*1)*Math.sin(E); const x=xp, y=yp*Math.sin(el.i), z=yp*Math.cos(el.i); return new THREE.Vector3(x,y,z)};

    const mesh:Record<P,THREE.Mesh>={} as any; const line:Record<P,THREE.LineLoop>={} as any;
    const mkLine=(p:P)=>{if(line[p]){scene.remove(line[p]); line[p].geometry.dispose(); (line[p].material as THREE.Material).dispose();} const el=elements[p], N=512, pts=new Float32Array(N*3); for(let i=0;i<N;i++){const f=i/N*Math.PI*2; const r=el.a*(1-el.e*el.e)/(1+el.e*Math.cos(f)); const xp=r*Math.cos(f), yp=r*Math.sin(f); pts[i*3+0]=xp; pts[i*3+1]=yp*Math.sin(el.i); pts[i*3+2]=yp*Math.cos(el.i);} const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pts,3)); const m=new THREE.LineBasicMaterial({color:p==='Pluto'?0x8b96a8:0x566173}); const L=new THREE.LineLoop(g,m); scene.add(L); line[p]=L};

    const mkAtmoSphere = (parentMesh: THREE.Mesh, planetR: number, params: {color:[number,number,number], power:number, opacity:number, scale:number}) => {
      const geo = new THREE.SphereGeometry(planetR * params.scale, 48, 32);
      const mat = new THREE.ShaderMaterial({
        vertexShader: ATMO_VERT,
        fragmentShader: ATMO_FRAG,
        uniforms: {
          uColor: { value: new THREE.Vector3(params.color[0], params.color[1], params.color[2]) },
          uPower: { value: params.power },
          uOpacity: { value: params.opacity },
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
      });
      const atmo = new THREE.Mesh(geo, mat);
      parentMesh.add(atmo);
      bag.push(() => { geo.dispose(); mat.dispose(); });

      const geo2 = new THREE.SphereGeometry(planetR * (params.scale * 0.997), 48, 32);
      const mat2 = new THREE.ShaderMaterial({
        vertexShader: ATMO_VERT,
        fragmentShader: ATMO_FRAG,
        uniforms: {
          uColor: { value: new THREE.Vector3(params.color[0], params.color[1], params.color[2]) },
          uPower: { value: params.power + 1.0 },
          uOpacity: { value: params.opacity * 0.4 },
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.FrontSide,
        depthWrite: false,
      });
      const atmo2 = new THREE.Mesh(geo2, mat2);
      parentMesh.add(atmo2);
      bag.push(() => { geo2.dispose(); mat2.dispose(); });
    };

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

    const saturnBodyProc = () => {
      const s = 512, c = document.createElement('canvas'); c.width = s; c.height = s;
      const x = c.getContext('2d')!;
      const bands = [
        {y:0,   h:0.06, col:'#d4c89a'}, {y:0.06, h:0.08, col:'#c8b878'},
        {y:0.14, h:0.10, col:'#e0d4a8'}, {y:0.24, h:0.06, col:'#c4aa68'},
        {y:0.30, h:0.12, col:'#ddd0a0'}, {y:0.42, h:0.08, col:'#b89e58'},
        {y:0.50, h:0.10, col:'#e8ddb8'}, {y:0.60, h:0.06, col:'#c8b878'},
        {y:0.66, h:0.10, col:'#d8c890'}, {y:0.76, h:0.08, col:'#c0a860'},
        {y:0.84, h:0.08, col:'#ddd0a0'}, {y:0.92, h:0.08, col:'#d4c89a'},
      ];
      bands.forEach(b => {
        x.fillStyle = b.col;
        x.fillRect(0, b.y * s, s, b.h * s);
      });
      x.globalAlpha = 0.12;
      for (let i = 0; i < 600; i++) {
        const yy = Math.random() * s;
        x.strokeStyle = Math.random() > 0.5 ? '#fff' : '#a08850';
        x.globalAlpha = 0.03 + Math.random() * 0.08;
        x.beginPath(); x.moveTo(0, yy); x.lineTo(s, yy); x.lineWidth = 0.5 + Math.random() * 1.5; x.stroke();
      }
      x.globalAlpha = 1;
      const t = track(new THREE.CanvasTexture(c)); (t as any).colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; return t;
    };

    const uranusProc = () => {
      const w = 1024, h = 512, c = document.createElement('canvas'); c.width = w; c.height = h;
      const x = c.getContext('2d')!;
      // Palette sampled from the Keck/Voyager Uranus reference: a saturated teal-cyan, not pale.
      const g = x.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0.00, '#0a6f8c'); g.addColorStop(0.22, '#0a8cb0');
      g.addColorStop(0.50, '#0a9ac0'); g.addColorStop(0.78, '#0a8cb0');
      g.addColorStop(1.00, '#0a6f8c');
      x.fillStyle = g; x.fillRect(0, 0, w, h);
      // Very subtle latitudinal banding (Uranus is nearly featureless).
      const bands = ['#0f9bc0', '#0a86ab', '#13a4c6', '#0a86ab', '#0f9bc0'];
      bands.forEach((col, i) => {
        const yc = (i + 0.5) / bands.length * h, bh = h / bands.length * 0.8;
        x.globalAlpha = 0.06; x.fillStyle = col;
        for (let px = 0; px < w; px++) {
          const off = Math.sin(px / w * Math.PI * 6 + i * 1.3) * 0.008 * h;
          x.fillRect(px, yc - bh / 2 + off, 1, bh);
        }
      });
      // Soft bright polar cap (Uranus's sunlit pole reads brighter in Keck/HST imagery).
      const cap = x.createRadialGradient(w * 0.5, h * 0.06, 0, w * 0.5, h * 0.06, w * 0.32);
      cap.addColorStop(0, 'rgba(190,240,247,0.32)'); cap.addColorStop(1, 'rgba(190,240,247,0)');
      x.fillStyle = cap; x.fillRect(0, 0, w, h * 0.4);
      // Discrete bright cloud spots (small methane storms), clustered as in the reference photo.
      const uSpot = (cx: number, cy: number, r: number, a: number) => {
        const rg = x.createRadialGradient(w * cx, h * cy, 0, w * cx, h * cy, w * r);
        rg.addColorStop(0, `rgba(224,248,252,${a})`); rg.addColorStop(0.5, `rgba(200,242,248,${a * 0.5})`);
        rg.addColorStop(1, 'rgba(200,242,248,0)');
        x.fillStyle = rg; x.beginPath(); x.ellipse(w * cx, h * cy, w * r, h * r * 1.5, 0, 0, Math.PI * 2); x.fill();
      };
      for (const [sx, sy, sr, sa] of [
        [0.30, 0.44, 0.016, 0.85], [0.36, 0.52, 0.011, 0.70], [0.42, 0.40, 0.009, 0.60],
        [0.60, 0.58, 0.013, 0.80], [0.66, 0.50, 0.010, 0.65], [0.72, 0.62, 0.008, 0.55],
        [0.84, 0.46, 0.010, 0.60], [0.20, 0.60, 0.009, 0.55], [0.50, 0.66, 0.010, 0.60],
      ] as const) uSpot(sx, sy, sr, sa);
      x.globalAlpha = 1;
      // Faint wispy zonal streaks.
      for (let i = 0; i < 90; i++) {
        const yy = Math.random() * h;
        x.globalAlpha = 0.012 + Math.random() * 0.025;
        x.strokeStyle = Math.random() > 0.5 ? '#cdeff4' : '#0a7a9c';
        x.lineWidth = 0.5 + Math.random() * 0.9;
        x.beginPath(); x.moveTo(0, yy);
        for (let px = 0; px <= w; px += 48) x.lineTo(px, yy + Math.sin(px / w * Math.PI * 4 + i) * 1.6);
        x.stroke();
      }
      x.globalAlpha = 1;
      const t = track(new THREE.CanvasTexture(c)); (t as any).colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; return t;
    };

    const neptuneProc = () => {
      const w = 1024, h = 512, c = document.createElement('canvas'); c.width = w; c.height = h;
      const x = c.getContext('2d')!;
      // Palette sampled from the Voyager 2 Neptune reference: deep cobalt with dark-navy poles.
      const g = x.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0.00, '#222a63'); g.addColorStop(0.16, '#2c3a90');
      g.addColorStop(0.34, '#3649b6'); g.addColorStop(0.50, '#3a53d4');
      g.addColorStop(0.66, '#3649b6'); g.addColorStop(0.84, '#2c3a90');
      g.addColorStop(1.00, '#222a63');
      x.fillStyle = g; x.fillRect(0, 0, w, h);
      const bands = ['#2f3d97', '#3a51c4', '#3357d2', '#2d3f9c', '#3b54cc', '#283a86'];
      bands.forEach((col, i) => {
        const yc = (i + 0.5) / bands.length * h, bh = h / bands.length * 0.85;
        x.globalAlpha = 0.16; x.fillStyle = col;
        for (let px = 0; px < w; px++) {
          const off = Math.sin(px / w * Math.PI * 4 + i * 1.1) * 0.016 * h;
          x.fillRect(px, yc - bh / 2 + off, 1, bh);
        }
      });
      x.globalAlpha = 1;
      const drawSpot = (cx: number, cy: number, rx: number, ry: number, core: string) => {
        x.save(); x.translate(cx, cy); x.scale(rx, ry);
        const rg = x.createRadialGradient(0, 0, 0, 0, 0, 1);
        rg.addColorStop(0, core); rg.addColorStop(0.6, core); rg.addColorStop(1, 'rgba(20,40,120,0)');
        x.fillStyle = rg; x.beginPath(); x.arc(0, 0, 1, 0, Math.PI * 2); x.fill(); x.restore();
      };
      // Great Dark Spot + a smaller southern companion spot.
      drawSpot(w * 0.33, h * 0.42, w * 0.085, h * 0.055, 'rgba(14,24,74,0.92)');
      drawSpot(w * 0.66, h * 0.70, w * 0.045, h * 0.03, 'rgba(16,28,82,0.8)');
      // Bright companion clouds ("the scooter") trailing the Great Dark Spot.
      x.globalAlpha = 0.55; x.fillStyle = '#e2ecff';
      for (const [sx, sy, sr] of [[0.40, 0.46, 0.020], [0.30, 0.50, 0.013], [0.22, 0.34, 0.011]] as const) {
        x.beginPath(); x.ellipse(w * sx, h * sy, w * sr, h * sr * 0.7, 0, 0, Math.PI * 2); x.fill();
      }
      x.globalAlpha = 1;
      // Bright white cirrus cloud bands — Neptune's signature high-altitude methane streaks.
      const cirrus = [
        { yc: 0.30, hh: 0.045, a: 0.30 }, { yc: 0.38, hh: 0.022, a: 0.22 },
        { yc: 0.62, hh: 0.050, a: 0.32 }, { yc: 0.70, hh: 0.028, a: 0.24 },
      ];
      cirrus.forEach((b, bi) => {
        for (let px = 0; px < w; px++) {
          const wob = Math.sin(px / w * Math.PI * 6 + bi * 2.1) * 0.012 * h;
          const dab = 0.5 + 0.5 * Math.sin(px / w * Math.PI * 18 + bi * 3.7); // broken / patchy
          x.globalAlpha = b.a * dab; x.fillStyle = '#eaf1ff';
          x.fillRect(px, b.yc * h - b.hh * h / 2 + wob, 1, b.hh * h);
        }
      });
      x.globalAlpha = 1;
      // Fine wispy streaks for surface texture.
      for (let i = 0; i < 80; i++) {
        const yy = Math.random() * h;
        x.globalAlpha = 0.04 + Math.random() * 0.10;
        x.strokeStyle = Math.random() > 0.35 ? '#cfe0ff' : '#ffffff';
        x.lineWidth = 0.6 + Math.random() * 1.6;
        x.beginPath(); x.moveTo(0, yy);
        for (let px = 0; px <= w; px += 40) x.lineTo(px, yy + Math.sin(px / w * Math.PI * 6 + i) * 2.6);
        x.stroke();
      }
      x.globalAlpha = 1;
      const t = track(new THREE.CanvasTexture(c)); (t as any).colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; return t;
    };

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
        const fb = fallbackTex(p);
        const basicMat = new THREE.MeshBasicMaterial({ color: 0xffffff, map: fb });
        planetMat = basicMat;

        const cdnUrls = CDN_TEX_URLS[p];
        if (cdnUrls && cdnUrls.length > 0) {
          loadFirst(cdnUrls, (tex) => { basicMat.map = tex; basicMat.needsUpdate = true; });
        }
      }

      const m = new THREE.Mesh(new THREE.SphereGeometry(R[p],64,48), planetMat);
      m.name = p;
      m.position.copy(posOf(p));
      mesh[p] = m;
      scene.add(m);

      if (p === 'Saturn') {
        const ringInner = R.Saturn*1.20, ringOuter = R.Saturn*2.27;
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
        const rm = new THREE.MeshBasicMaterial({map: saturnRingProc(), transparent: true, side: THREE.DoubleSide, depthWrite: false});
        const rings = new THREE.Mesh(rg, rm);
        rings.rotation.x = Math.PI/2;
        m.add(rings);
        loadFirst([SATURN_RING_COLOR_URL], (tex) => { (tex as any).colorSpace = THREE.SRGBColorSpace; rm.map = tex; rm.needsUpdate = true; });
        loadFirst([SATURN_RING_ALPHA_URL], (tex) => { rm.alphaMap = tex; rm.transparent = true; rm.needsUpdate = true; });
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

      const atmoP = ATMO_PARAMS[p];
      if (atmoP) {
        mkAtmoSphere(m, R[p], atmoP);
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

    const vshader = `
      attribute vec3 color; varying vec3 vColor;
      uniform float uMinPx; uniform float uMaxPx; uniform float uScale;
      void main(){
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_Position = projectionMatrix * mv;
        float px = uScale / max(-mv.z, 1.0);
        gl_PointSize = clamp(px, uMinPx, uMaxPx);
      }
    `;
    const fshader = `
      varying vec3 vColor; uniform sampler2D uMap; uniform float uOpacity;
      void main(){
        vec4 tex = texture2D(uMap, gl_PointCoord);
        vec4 c = vec4(vColor,1.0) * tex; c.a *= uOpacity;
        if(c.a < 0.02) discard; gl_FragColor = c;
      }
    `;
    const mkMat = (opacity:number, minPx=1.5, maxPx=6.0)=> new THREE.ShaderMaterial({
      vertexShader: vshader, fragmentShader: fshader, transparent:true,
      depthWrite:false, depthTest:false, blending:THREE.NormalBlending,
      uniforms:{ uMap:{value:dotTex}, uOpacity:{value:opacity}, uMinPx:{value:minPx}, uMaxPx:{value:maxPx}, uScale:{value:460*(renderer.getPixelRatio?.()||1)} }
    });
    type Belt={geo:THREE.BufferGeometry,mesh:THREE.Points,a:Float32Array,e:Float32Array,inc:Float32Array,M:Float32Array,n:Float32Array,cursor:number};
    const mkOrbitingBelt=(count:number,rangeAU:[number,number],eccMax:number,incSigmaDeg:number,size:number,colorize:(i:number)=>[number,number,number],opacity=0.62):Belt=>{const geo=new THREE.BufferGeometry(); const pos=new Float32Array(count*3), col=new Float32Array(count*3); const a=new Float32Array(count), e=new Float32Array(count), inc=new Float32Array(count), M=new Float32Array(count), nA=new Float32Array(count); for(let i=0;i<count;i++){const ai=lerp(rangeAU[0],rangeAU[1],Math.random())*AU2U; a[i]=ai; e[i]=Math.random()*eccMax; inc[i]=rad(Math.max(0,randn()*incSigmaDeg)); const Ti=TE*Math.pow((ai/aE),1.5); nA[i]=(2*Math.PI)/Ti; M[i]=Math.random()*Math.PI*2; const f=approxTrue(M[i],e[i]); const r=ai*(1-e[i]*Math.cos(M[i])); const xp=r*Math.cos(f), yp=r*Math.sin(f); const idx=3*i; pos[idx]=xp; pos[idx+1]=yp*Math.sin(inc[i]); pos[idx+2]=yp*Math.cos(inc[i]); const [rC,gC,bC]=colorize(i); col.set([rC,gC,bC],idx);} const posAttr=new THREE.BufferAttribute(pos,3); posAttr.setUsage(THREE.DynamicDrawUsage); geo.setAttribute('position',posAttr); geo.setAttribute('color',new THREE.BufferAttribute(col,3)); const mat=mkMat(opacity, 1.6, 6.5); const pts=new THREE.Points(geo,mat); pts.frustumCulled=false; if(!geo.boundingSphere) geo.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,0), AU2U*80); scene.add(pts); return {geo,mesh:pts,a,e,inc,M:M,n:nA,cursor:0}};
    let ast=mkOrbitingBelt(astCRef.current,[2.1,3.3],0.12,2.5,0.9,()=>{const c=.68+Math.random()*.22;return [c,c,c]},0.58);
    let kui=mkOrbitingBelt(kuiCRef.current,[42,48],0.10,5.5,1.4,()=>{const c=.78+Math.random()*.18;return [c*.65,c*.85,1.0]},0.72);

    type Swarm=Belt;
    const mkCoOrbital=(count:number,aRangeAU:[number,number],centerOffset:number,coreDeg:number,color:number,incSigma=1.2):Swarm=>{const aMin=aRangeAU[0]*AU2U,aMax=aRangeAU[1]*AU2U; const geo=new THREE.BufferGeometry(); const pos=new Float32Array(count*3), col=new Float32Array(count*3); const a=new Float32Array(count), e=new Float32Array(count), inc=new Float32Array(count), M=new Float32Array(count), nA=new Float32Array(count); const cc=new THREE.Color(color); const mj=elements.Jupiter.M; for(let i=0;i<count;i++){const core=Math.random()<0.7; const width=rad(coreDeg); const tail=rad(60); const g=width*0.55*randn(); const tailOff=(Math.random()*tail); const dTheta=core? g : (width*0.25*randn()+tailOff); const sign=Math.sign(centerOffset||1); const theta=wrap(mj+centerOffset+sign*dTheta); const t=clamp((core?Math.abs(g):tailOff)/tail,0,1); const ai=lerp(aMin,aMax, core?0.45+0.35*Math.random():0.25+0.70*t); const ei=Math.min(0.08,Math.abs(randn())*0.03+0.01*Math.random()); const inci=rad(Math.max(0,randn()*incSigma)); a[i]=ai; e[i]=ei; inc[i]=inci; const Ti=TE*Math.pow((ai/aE),1.5); nA[i]=(2*Math.PI)/Ti; M[i]=theta; const f=approxTrue(M[i],e[i]); const r=ai*(1-e[i]*Math.cos(M[i])); const xp=r*Math.cos(f), yp=r*Math.sin(f); const idx=3*i; pos[idx]=xp; pos[idx+1]=yp*Math.sin(inci); pos[idx+2]=yp*Math.cos(inci); col.set([cc.r,cc.g,cc.b],idx);} const posAttr=new THREE.BufferAttribute(pos,3); posAttr.setUsage(THREE.DynamicDrawUsage); geo.setAttribute('position',posAttr); geo.setAttribute('color',new THREE.BufferAttribute(col,3)); const mat=mkMat(0.56, 1.6, 6.5); const pts=new THREE.Points(geo,mat); pts.frustumCulled=false; if(!geo.boundingSphere) geo.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,0), AU2U*80); scene.add(pts); return {geo,mesh:pts,a,e,inc,M:M,n:nA,cursor:0}};
    let L4:Swarm, L5:Swarm; const trojanTotal=Math.max(2000,Math.floor(astCRef.current*0.2)); L4=mkCoOrbital(Math.floor(trojanTotal/2),[4.9,5.5],+Math.PI/3,20,0x62f38e,1.0); L5=mkCoOrbital(Math.ceil(trojanTotal/2), [4.9,5.5],-Math.PI/3,20,0xff6b6b,1.0);

    const mkHilda=(count:number,phase:number)=>{const aH=5.2028*Math.pow(2/3,2/3); const geo=new THREE.BufferGeometry(); const pos=new Float32Array(count*3), col=new Float32Array(count*3); const a=new Float32Array(count), e=new Float32Array(count), inc=new Float32Array(count), M=new Float32Array(count), nA=new Float32Array(count); const mj=elements.Jupiter.M; const cc=new THREE.Color(0xc770ff); for(let i=0;i<count;i++){const d=rad(18)*randn(); const theta=wrap(mj+phase+d); const ai=(aH+lerp(-0.35,0.35,Math.random()))*AU2U; const ei=0.08+Math.abs(randn())*0.05; const inci=rad(Math.max(0,randn()*1.5)); a[i]=ai; e[i]=clamp(ei,0,0.18); inc[i]=inci; const Ti=TE*Math.pow((ai/aE),1.5); nA[i]=(2*Math.PI)/Ti; M[i]=theta; const f=approxTrue(M[i],e[i]); const r=ai*(1-e[i]*Math.cos(M[i])); const xp=r*Math.cos(f), yp=r*Math.sin(f); const idx=3*i; pos[idx]=xp; pos[idx+1]=yp*Math.sin(inci); pos[idx+2]=yp*Math.cos(inci); col.set([cc.r,cc.g,cc.b],idx);} const posAttr=new THREE.BufferAttribute(pos,3); posAttr.setUsage(THREE.DynamicDrawUsage); geo.setAttribute('position',posAttr); geo.setAttribute('color',new THREE.BufferAttribute(col,3)); const mat=mkMat(0.64, 1.6, 6.5); const pts=new THREE.Points(geo,mat); pts.frustumCulled=false; if(!geo.boundingSphere) geo.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,0), AU2U*80); scene.add(pts); return {geo,mesh:pts,a,e,inc,M:M,n:nA,cursor:0}};
    let H1:Swarm, H2:Swarm, H3:Swarm; const hildaTotal=Math.max(1000,Math.floor(astCRef.current*0.08)); H1=mkHilda(Math.floor(hildaTotal/3), +Math.PI/3); H2=mkHilda(Math.floor(hildaTotal/3), Math.PI); H3=mkHilda(hildaTotal-2*Math.floor(hildaTotal/3), -Math.PI/3);

    (function(){const N=2200, geo=new THREE.BufferGeometry(), pos=new Float32Array(N*3); for(let i=0;i<N;i++){const R=5000,u=Math.random(),v=Math.random(),th=2*Math.PI*u, ph=Math.acos(2*v-1); pos[i*3+0]=R*Math.sin(ph)*Math.cos(th); pos[i*3+1]=R*Math.sin(ph)*Math.sin(th); pos[i*3+2]=R*Math.cos(ph);} geo.setAttribute('position',new THREE.BufferAttribute(pos,3)); const s=new THREE.Points(geo,new THREE.PointsMaterial({map:dotTex,size:1.5,transparent:true,depthWrite:false,color:0xffffff})); scene.add(s); bag.push(()=>{geo.dispose(); (s.material as THREE.Material).dispose();})})();

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

    const sysMaxR=()=>{const pMax=Math.max(...PLANETS.map(p=>elements[p].a*(1+elements[p].e))); const kMax=kui?Math.max(...kui.a)*1.05:0; return Math.max(pMax,kMax)};
    cmdsRef.current.fitInner=()=>{unfocus(); const R=AU2U*4.0; const f=cam.fov*Math.PI/180; distRef.current=clamp(R/Math.tan(f/2)*1.25,80,10000); pitchRef.current=.9};
    cmdsRef.current.fitFull=()=>{unfocus(); const R=sysMaxR(); const f=cam.fov*Math.PI/180; distRef.current=clamp(R/Math.tan(f/2)*1.25,120,30000); pitchRef.current=.9};
    cmdsRef.current.topDown=()=>{unfocus(); pitchRef.current=1.45}; cmdsRef.current.iso=()=>{unfocus(); pitchRef.current=.5; yawRef.current=-Math.PI/4};

    const apply=(p:P,f:number,tiltDeg:number)=>{const el=elements[p]; const E=solveE(el.M,el.e), th=Math.atan2(Math.sqrt(1-el.e*el.e)*Math.sin(E),Math.cos(E)-el.e); const r=el.a*(1-el.e*Math.cos(E)); const pOld=el.a*(1-el.e*el.e), hOld=Math.sqrt(mu*pOld), vtOld=hOld/r, vrOld=(mu/hOld)*el.e*Math.sin(th); const vtNew=clamp(vtOld*clamp(f,.1,10),.05*vtOld,10*vtOld), vrNew=vrOld; let eps=.5*(vtNew*vtNew+vrNew*vrNew)-mu/r; if(eps>=0) eps=-1e-9; let aNew=-mu/(2*eps); const hNew=r*vtNew; let e2=1-(hNew*hNew)/(mu*aNew); e2=clamp(e2,0,0.999999); const eNew=Math.sqrt(e2); const rmax=aNew*(1+eNew); if(rmax>sysMaxR()*1.2){const s=sysMaxR()*1.2/rmax; aNew*=s;} const pNew=aNew*(1-e2); let cosf=(pNew/r-1)/eNew; if(eNew<1e-8||!isFinite(cosf)) cosf=Math.cos(th); cosf=clamp(cosf,-1,1); const sinf=sgn(vrNew)*Math.sqrt(Math.max(0,1-cosf*cosf)); const fNew=Math.atan2(sinf,cosf); const beta=Math.sqrt((1-eNew)/(1+eNew)); const Enew=2*Math.atan(beta*Math.tan(fNew/2)); const Mnew=wrap(Enew - eNew*Math.sin(Enew)); elements[p]={a:aNew,e:eNew,i:rad(tiltDeg),M:Mnew}; mkLine(p); mesh[p].position.copy(posOf(p)); lastRef.current=p; if(focusRef.current?.name===p) startGlide();};
    cmdsRef.current.apply=apply; cmdsRef.current.resetLast=()=>{const p=lastRef.current; if(!p) return; elements[p]={...base[p]}; mkLine(p); mesh[p].position.copy(posOf(p)); if(focusRef.current?.name===p) startGlide();}; cmdsRef.current.fullReset=()=>{for(const p of PLANETS){elements[p]={...base[p]}; mkLine(p); mesh[p].position.copy(posOf(p))} if(focusRef.current) startGlide();};

    const advanceBelt=(B:Belt,d:number)=>{const pos=B.geo.getAttribute('position') as THREE.BufferAttribute; const arr=pos.array as Float32Array; const N=B.a.length; const heavy=N>40000; const CH=heavy?Math.max(8000,Math.ceil(N/12)):Math.max(12000,Math.ceil(N/6)); let s=B.cursor,e=Math.min(N,s+CH); for(let i=s;i<e;i++){const Mi=wrap(B.M[i]+B.n[i]*d); B.M[i]=Mi; const ei=B.e[i]; const f=approxTrue(Mi,ei); const r=B.a[i]*(1-ei*Math.cos(Mi)); const xp=r*Math.cos(f), yp=r*Math.sin(f); const si=Math.sin(B.inc[i]),ci=Math.cos(B.inc[i]); const idx=3*i; arr[idx]=xp; arr[idx+1]=yp*si; arr[idx+2]=yp*ci;} const off=s*3, cnt=(e-s)*3; const anyPos:any = pos as any; if (typeof anyPos.setUpdateRange === 'function'){ anyPos.setUpdateRange(off,cnt); } else { if (!anyPos.updateRange) anyPos.updateRange = {offset:0,count:-1}; anyPos.updateRange.offset = off; anyPos.updateRange.count = cnt; } pos.needsUpdate=true; B.cursor=(e===N)?0:e };

    const onResize=()=>{const W=root.clientWidth||window.innerWidth,H=root.clientHeight||window.innerHeight; renderer.setSize(W,H); cam.aspect=W/H; cam.updateProjectionMatrix()}; const ro=new ResizeObserver(onResize); ro.observe(root);

    const desiredPos=new THREE.Vector3(), desiredLook=new THREE.Vector3(), glTmp=new THREE.Vector3(), glTmp2=new THREE.Vector3();
    let t0=performance.now(); const loop=()=>{const now=performance.now(), dt=Math.min(.25,(now-t0)/1000); t0=now; const d=dt*simDaysPerSecRef.current;
      for(const p of PLANETS){const el=elements[p]; const n=Math.sqrt(mu/Math.pow(el.a,3)); el.M=wrap(el.M+n*d); mesh[p].position.copy(posOf(p))}
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
      sunLight.position.set(0,0,0);
      sunGlow.position.set(0,0,0);

      const earthPos = mesh.Earth.position;
      const sunDirFromEarth = new THREE.Vector3().copy(earthPos).negate().normalize();
      earthShaderUniforms.sunDir.value.copy(sunDirFromEarth);
      earthShaderUniforms.camPos.value.copy(cam.position);

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

    cmdsRef.current.rebuildBelts=()=>{const re=(B:Belt)=>{scene.remove(B.mesh); B.geo.dispose(); (B.mesh.material as THREE.Material).dispose()}; re(ast); re(kui); re(L4); re(L5); re(H1); re(H2); re(H3); ast=mkOrbitingBelt(astCRef.current,[2.1,3.3],0.12,2.5,0.9,()=>{const c=.68+Math.random()*.22;return [c,c,c]},0.58); kui=mkOrbitingBelt(kuiCRef.current,[42,48],0.10,5.5,1.4,()=>{const c=.78+Math.random()*.18;return [c*.65,c*.85,1.0]},0.72); const trojanTotal=Math.max(2000,Math.floor(astCRef.current*0.2)); L4=mkCoOrbital(Math.floor(trojanTotal/2),[4.9,5.5],+Math.PI/3,20,0x62f38e,1.0); L5=mkCoOrbital(Math.ceil(trojanTotal/2),[4.9,5.5],-Math.PI/3,20,0xff6b6b,1.0); const hildaTotal=Math.max(1000,Math.floor(astCRef.current*0.08)); H1=mkHilda(Math.floor(hildaTotal/3),+Math.PI/3); H2=mkHilda(Math.floor(hildaTotal/3),Math.PI); H3=mkHilda(hildaTotal-2*Math.floor(hildaTotal/3),-Math.PI/3)};

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
        {!webglError && focused && <InfoPanel body={focused} onBack={()=>cmdsRef.current.unfocus?.()} />}
      </div>
      <div style={{color:'#e5e7eb',fontFamily:'system-ui,sans-serif',background:'rgba(17,24,39,.7)',border:'1px solid #334155',borderRadius:10,padding:12,height:'calc(100vh - 8px)',overflowY:'auto'}}>
        <div style={{fontWeight:700,marginBottom:8}}>🛠 Orbit Editor</div>
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

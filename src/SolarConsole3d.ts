import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// --- compact helpers ---
const clamp = (x:number,a:number,b:number)=>Math.max(a,Math.min(b,x));
const sgn = (x:number)=>x>=0?1:-1;
const rad = (d:number)=>d*Math.PI/180;
const lerp=(a:number,b:number,t:number)=>a+(b-a)*t;
const randn=()=>{let u=0,v=0;while(u===0)u=Math.random();while(v===0)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)};

export default function SolarHarmonics3D(){
  const mountRef=useRef<HTMLDivElement|null>(null); const rafRef=useRef(0);

  // ======= sim + ui =======
  const SPEED_MIN=1, SPEED_MAX=4000; const [simDaysPerSec,setSimDaysPerSec]=useState(120);
  const [speedPos,setSpeedPos]=useState(()=>daysToSlider(120,SPEED_MIN,SPEED_MAX)); const simDaysPerSecRef=useRef(simDaysPerSec); useEffect(()=>{simDaysPerSecRef.current=simDaysPerSec;},[simDaysPerSec]);
  const [asteroidCount,setAsteroidCount]=useState(150000); const astCRef=useRef(asteroidCount); useEffect(()=>{astCRef.current=asteroidCount;},[asteroidCount]);
  const [kuiperCount,setKuiperCount]=useState(120000); const kuiCRef=useRef(kuiperCount); useEffect(()=>{kuiCRef.current=kuiperCount;},[kuiperCount]);
  const yawRef=useRef(-Math.PI/4), pitchRef=useRef(0.5), distRef=useRef(620);

  const PLANETS=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"] as const; type P=typeof PLANETS[number];
  const [sel,setSel]=useState<P>("Earth"); const [spd,setSpd]=useState(1.0); const [tilt,setTilt]=useState(0); const lastRef=useRef<P|null>(null);
  const cmdsRef=useRef<any>({});

  useEffect(()=>{
    const root=mountRef.current!; const w=root.clientWidth||window.innerWidth; const h=root.clientHeight||window.innerHeight;
    const renderer=new THREE.WebGLRenderer({antialias:true}); renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)); renderer.setSize(w,h); (renderer as any).outputColorSpace=THREE.SRGBColorSpace; (renderer as any).toneMapping=THREE.ACESFilmicToneMapping; (renderer as any).toneMappingExposure=1.12; root.appendChild(renderer.domElement);
    const scene=new THREE.Scene(); scene.background=new THREE.Color(0x000000);
    const cam=new THREE.PerspectiveCamera(60,w/h,0.1,120000);
    (scene as any).userData._spinUpdates = [] as Array<(dt:number)=>void>;

    // --- units & gravity ---
    const AU2U=30; const TE=365.25; const aE=AU2U*1.0; const mu=Math.pow((2*Math.PI)/TE,2)*Math.pow(aE,3);

    // elements (AU,e,i,M in rad)
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

    // visual sizes/colors — ensure Jupiter > Saturn
    const R:Record<P,number>={Mercury:1.0,Venus:1.8,Earth:2.2,Mars:1.6,Jupiter:5.6,Saturn:4.2,Uranus:3.4,Neptune:3.1,Pluto:1.2};
    const C:Record<P,number>={Mercury:0xc9b9a7,Venus:0xe0c16c,Earth:0x4da6ff,Mars:0xff6f50,Jupiter:0xd6a46c,Saturn:0xf0d9a6,Uranus:0x84dfff,Neptune:0x5d8cff,Pluto:0xaaaaaa};

    // texture helpers
    const track=(t:THREE.Texture)=>{bag.push(()=>t.dispose()); return t}; const bag:(()=>void)[]=[];
    const dotTex=(()=>{const c=document.createElement('canvas'); const s=64; c.width=c.height=s; const g=c.getContext('2d')!.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2); g.addColorStop(0,'#fff'); g.addColorStop(1,'#fff0'); const x=c.getContext('2d')!; x.fillStyle=g; x.fillRect(0,0,s,s); const t=track(new THREE.CanvasTexture(c)); (t as any).colorSpace=THREE.SRGBColorSpace; (t as any).needsUpdate=true; return t;})();
    const makeBlot=(base:string,blot:string,n=110)=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;x.fillStyle=base;x.fillRect(0,0,s,s);x.globalAlpha=.25;x.fillStyle=blot;for(let i=0;i<n;i++){const r=(Math.random()*.06+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill();}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t};
    const bands=(cols:string[])=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!,bh=s/cols.length;cols.forEach((col,i)=>{x.fillStyle=col;x.fillRect(0,i*bh,s,bh)});const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t};
    const earthTex=()=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;x.fillStyle='#2764cc';x.fillRect(0,0,s,s);x.fillStyle='#4caf50';x.globalAlpha=.95;for(let i=0;i<80;i++){const r=(Math.random()*.08+.03)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill()}x.globalAlpha=.25;x.fillStyle='#fff';for(let i=0;i<60;i++){const r=(Math.random()*.06+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.ellipse(xx,yy,r*1.4,r*.6,Math.random()*Math.PI,0,Math.PI*2);x.fill()}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t};
    const saturnRingTex=()=>{const s=256,c=document.createElement('canvas');c.width=s;c.height=s;const x=c.getContext('2d')!,cx=s/2,cy=s/2,rO=s*.49,rI=s*.25;x.clearRect(0,0,s,s);for(let r=rI;r<rO;r++){const t=(r-rI)/(rO-rI),a=.18+.25*Math.sin(t*20)*(1-t)+.05*Math.random();x.strokeStyle=`rgba(230,210,170,${a.toFixed(3)})`;x.beginPath();x.arc(cx,cy,r,0,Math.PI*2);x.stroke()}const tex=track(new THREE.CanvasTexture(c));(tex as any).colorSpace=THREE.SRGBColorSpace;(tex as any).needsUpdate=true;return tex};
    const planetTex=(n:P)=>({Mercury:makeBlot('#b6ada3','#6e675f'),Venus:makeBlot('#e8c873','#c8a24a'),Earth:earthTex(),Mars:makeBlot('#d16b3e','#7a3e26'),Jupiter:bands(['#caa376','#e1c8a8','#b68955','#e6d3b7','#ad7a49','#dcc29f','#bf915f']),Saturn:bands(['#e8d7aa','#d8be86','#efdcb8','#c8aa72','#e5d6ae','#c8aa72']),Uranus:bands(['#9de3f7','#84dfff','#9de3f7']),Neptune:bands(['#6aa7ff','#5d8cff','#6aa7ff']),Pluto:makeBlot('#cdcac7','#a09d9b')})[n];

    // --- sun & lights ---
    const amb=new THREE.AmbientLight(0xffffff,.30), hemi=new THREE.HemisphereLight(0xeeeeff,0x222233,.44); scene.add(amb,hemi);
    const sunLight=new THREE.PointLight(0xfff2cc,56,0,2); scene.add(sunLight);
    // Recalibrate Sun visual radius so Mercury never intersects it (keep look, not physics)
    const rPeriMerc = ELS.Mercury.a*(1-ELS.Mercury.e)*AU2U; // Mercury perihelion in scene units
    const SUN_VIS_R = Math.max(2.5, Math.min(rPeriMerc*0.60, AU2U*0.80)); // big but always inside Mercury
    const sunGeom=new THREE.SphereGeometry(SUN_VIS_R,64,48); const sunMat=makeSunMat(); const sun=new THREE.Mesh(sunGeom,sunMat); scene.add(sun);
    const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex(),color:0xffffff,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false})); glow.scale.setScalar(rPeriMerc*0.90); scene.add(glow); queueMicrotask(()=>upgradeEarth(scene,renderer));
    queueMicrotask(()=>upgradeMars(scene));
    queueMicrotask(()=>upgradeJupiter(scene));

    // flares — stronger & always active inside Mercury
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
      const r0=8.6 + Math.random()*2.0; // start closer to the Sun
      const s=flSprites[i]; s.position.copy(dir.clone().multiplyScalar(r0));
      const smat = (s.material as THREE.SpriteMaterial) || new THREE.SpriteMaterial({map:flareTex}); // safe default
      smat.opacity=0.85; s.material=smat;
      s.scale.setScalar(lerp(2,5,Math.random())); life[i]=1e-6; lifeMax[i]=.9+Math.random()*1.2; vel[i].copy(dir).multiplyScalar(7+Math.random()*12)
    };

    // --- kepler helpers ---
    const wrap=(x:number)=>{const t=Math.PI*2; x%=t; return x<0?x+t:x};
    const solveE=(M:number,e:number)=>{let E=e<.8?M:Math.PI; for(let k=0;k<6;k++){const f=E-e*Math.sin(E)-M, fp=1-e*Math.cos(E); E-=f/fp;} return E};
    const approxTrue=(M:number,e:number)=>{const s=Math.sin(M), c2=Math.sin(2*M); return M + 2*e*s + 1.25*e*e*c2};
    const posOf=(p:P)=>{const el=elements[p]; const E=solveE(el.M,el.e); const xp=el.a*(Math.cos(E)-el.e), yp=el.a*Math.sqrt(1-el.e*1)*Math.sin(E); const x=xp, y=yp*Math.sin(el.i), z=yp*Math.cos(el.i); return new THREE.Vector3(x,y,z)};

    // --- orbits & planet meshes ---
    const mesh:Record<P,THREE.Mesh>={} as any; const line:Record<P,THREE.LineLoop>={} as any;
    const mkLine=(p:P)=>{if(line[p]){scene.remove(line[p]); line[p].geometry.dispose(); (line[p].material as THREE.Material).dispose();} const el=elements[p], N=512, pts=new Float32Array(N*3); for(let i=0;i<N;i++){const f=i/N*Math.PI*2; const r=el.a*(1-el.e*el.e)/(1+el.e*Math.cos(f)); const xp=r*Math.cos(f), yp=r*Math.sin(f); pts[i*3+0]=xp; pts[i*3+1]=yp*Math.sin(el.i); pts[i*3+2]=yp*Math.cos(el.i);} const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pts,3)); const m=new THREE.LineBasicMaterial({color:p==='Pluto'?0x8b96a8:0x566173}); const L=new THREE.LineLoop(g,m); scene.add(L); line[p]=L};
    const baseEm=.52; const emAll=baseEm*1.5; const emEarth=baseEm*2.0; // Earth brighter
    for(const p of PLANETS){const m=new THREE.Mesh(new THREE.SphereGeometry(R[p],48,32),new THREE.MeshPhongMaterial({color:C[p],map:planetTex(p),specular:new THREE.Color(0x222222),shininess:(p==='Earth'||p==='Venus')?18:7,emissive:new THREE.Color(0x121212),emissiveIntensity:(p==='Earth'?emEarth:emAll)})); m.name=p; m.position.copy(posOf(p)); mesh[p]=m; scene.add(m); if(p==='Saturn'){const tex=saturnRingTex(); const rg=new THREE.RingGeometry(R.Saturn*1.35,R.Saturn*2.25,256); const rm=new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide,depthWrite:false}); const rings=new THREE.Mesh(rg,rm); rings.rotation.x=Math.PI/2; m.add(rings);} mkLine(p); }

    // ---- Earth–Moon system (accurate) + simple big moons ----
    const kmToAU=(km:number)=>km/149_597_870;

    type Lunar = { body:THREE.Mesh, a:number,e:number,i:number,Omega:number,omega:number,M:number,n:number, parent:THREE.Object3D };
    let lunar:Lunar|null=null; let lunarLine:THREE.Line|null=null;

    function addEarthMoon(){
      const parent = mesh.Earth as THREE.Object3D; if(!parent) return;
      const a = AU2U * kmToAU(384_400);
      const e = 0.0549; const i = rad(5.145); const Omega = rad(125.08); const omega = rad(318.15);
      const P = 27.321661; const n = 2*Math.PI / P;
      const geo = new THREE.SphereGeometry(0.58, 32, 24);
      const mat = new THREE.MeshPhongMaterial({ color:0xbebebe, specular:new THREE.Color(0x111111), shininess:8, emissive:new THREE.Color(0x0b0b0b), emissiveIntensity:0.35 });
      const body = new THREE.Mesh(geo, mat); body.name='Moon'; parent.add(body);
      lunar = { body, a, e, i, Omega, omega, M:0, n, parent };
      // orbit line
      const N=256; const pts=new Float32Array(N*3);
      for(let k=0;k<N;k++){ const f=(k/N)*Math.PI*2; const r=(a*(1-e*e))/(1+e*Math.cos(f)); let x=r*Math.cos(f), y=r*Math.sin(f), z=0; const cw=Math.cos(omega), sw=Math.sin(omega); const ci=Math.cos(i), si=Math.sin(i); const cO=Math.cos(Omega), sO=Math.sin(Omega); let x1=x*cw - y*sw, y1=x*sw + y*cw, z1=0; let x2=x1, y2=y1*ci - z1*si, z2=y1*si + z1*ci; let xf=x2*cO - y2*sO, yf=x2*sO + y2*cO, zf=z2; const off=3*k; pts[off]=xf; pts[off+1]=yf; pts[off+2]=zf; }
      const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pts,3));
      const lm=new THREE.LineBasicMaterial({color:0x7aa2ff,transparent:true,opacity:0.6}); lunarLine=new THREE.LineLoop(g,lm); parent.add(lunarLine);
    }

    function updateMoon(d:number){ if(!lunar) return; lunar.M = wrap(lunar.M + lunar.n*d); const E=solveE(lunar.M, lunar.e); const beta=Math.sqrt((1+lunar.e)/(1-lunar.e)); const f=2*Math.atan(beta*Math.tan(E/2)); const r=lunar.a*(1 - lunar.e*Math.cos(E)); let x=r*Math.cos(f), y=r*Math.sin(f), z=0; const cw=Math.cos(lunar.omega), sw=Math.sin(lunar.omega); const ci=Math.cos(lunar.i), si=Math.sin(lunar.i); const cO=Math.cos(lunar.Omega), sO=Math.sin(lunar.Omega); let x1=x*cw - y*sw, y1=x*sw + y*cw, z1=0; let x2=x1, y2=y1*ci - z1*si, z2=y1*si + z1*ci; let xf=x2*cO - y2*sO, yf=x2*sO + y2*cO, zf=z2; lunar.body.position.set(xf,yf,zf); }

    // simple pivots for performance for the other two big moons
    type SimpleMoon = {pivot:THREE.Object3D, angVel:number};
    let simpleMoons:SimpleMoon[]=[];
    (function addBigMoons(){ const j=mesh.Jupiter, s=mesh.Saturn; if(!j||!s) return; const add=(parent:THREE.Object3D, radius:number, period:number, size:number, col:number, incDeg:number, name:string)=>{ const pivot=new THREE.Object3D(); pivot.rotation.x=rad(incDeg); parent.add(pivot); const pm = new THREE.MeshPhongMaterial({color:col, emissive:new THREE.Color(0x0a0a0a), emissiveIntensity:0.25, specular: new THREE.Color(0x111111), shininess:8}); const m=new THREE.Mesh(new THREE.SphereGeometry(size,24,18), pm); m.name=name; m.position.set(radius,0,0); pivot.add(m); simpleMoons.push({pivot, angVel:(2*Math.PI)/period}); }; add(j, AU2U*kmToAU(1_070_400), 7.154553, 0.72, 0x9d9a8f, 2, 'Ganymede'); add(s, AU2U*kmToAU(1_221_870), 15.945, 0.67, 0xcaa464, 3, 'Titan'); })();

    addEarthMoon();

    // ===== belts =====
    // Screen-space point size shader (prevents fade on zoom-in)
    const vshader = `
      attribute vec3 color; varying vec3 vColor;
      uniform float uMinPx; uniform float uMaxPx; uniform float uScale; // ~dpi scaled
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

    // Trojans & Greeks — head+beak wedge (flat)
    type Swarm=Belt;
    const mkCoOrbital=(count:number,aRangeAU:[number,number],centerOffset:number,coreDeg:number,color:number,incSigma=1.2):Swarm=>{const aMin=aRangeAU[0]*AU2U,aMax=aRangeAU[1]*AU2U; const geo=new THREE.BufferGeometry(); const pos=new Float32Array(count*3), col=new Float32Array(count*3); const a=new Float32Array(count), e=new Float32Array(count), inc=new Float32Array(count), M=new Float32Array(count), nA=new Float32Array(count); const cc=new THREE.Color(color); const mj=elements.Jupiter.M; for(let i=0;i<count;i++){const core=Math.random()<0.7; const width=rad(coreDeg); const tail=rad(60); const g=width*0.55*randn(); const tailOff=(Math.random()*tail); const dTheta=core? g : (width*0.25*randn()+tailOff); const sign=Math.sign(centerOffset||1); const theta=wrap(mj+centerOffset+sign*dTheta); const t=clamp((core?Math.abs(g):tailOff)/tail,0,1); const ai=lerp(aMin,aMax, core?0.45+0.35*Math.random():0.25+0.70*t); const ei=Math.min(0.08,Math.abs(randn())*0.03+0.01*Math.random()); const inci=rad(Math.max(0,randn()*incSigma)); a[i]=ai; e[i]=ei; inc[i]=inci; const Ti=TE*Math.pow((ai/aE),1.5); nA[i]=(2*Math.PI)/Ti; M[i]=theta; const f=approxTrue(M[i],e[i]); const r=ai*(1-e[i]*Math.cos(M[i])); const xp=r*Math.cos(f), yp=r*Math.sin(f); const idx=3*i; pos[idx]=xp; pos[idx+1]=yp*Math.sin(inci); pos[idx+2]=yp*Math.cos(inci); col.set([cc.r,cc.g,cc.b],idx);} const posAttr=new THREE.BufferAttribute(pos,3); posAttr.setUsage(THREE.DynamicDrawUsage); geo.setAttribute('position',posAttr); geo.setAttribute('color',new THREE.BufferAttribute(col,3)); const mat=mkMat(0.56, 1.6, 6.5); const pts=new THREE.Points(geo,mat); pts.frustumCulled=false; if(!geo.boundingSphere) geo.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,0), AU2U*80); scene.add(pts); return {geo,mesh:pts,a,e,inc,M:M,n:nA,cursor:0}};
    let L4:Swarm, L5:Swarm; const trojanTotal=Math.max(2000,Math.floor(astCRef.current*0.2)); L4=mkCoOrbital(Math.floor(trojanTotal/2),[4.9,5.5],+Math.PI/3,20,0x62f38e,1.0); L5=mkCoOrbital(Math.ceil(trojanTotal/2), [4.9,5.5],-Math.PI/3,20,0xff6b6b,1.0);

    // Hildas — bulged triangle at ~3.97 AU (3:2 resonance)
    const mkHilda=(count:number,phase:number)=>{const aH=5.2028*Math.pow(2/3,2/3); const geo=new THREE.BufferGeometry(); const pos=new Float32Array(count*3), col=new Float32Array(count*3); const a=new Float32Array(count), e=new Float32Array(count), inc=new Float32Array(count), M=new Float32Array(count), nA=new Float32Array(count); const mj=elements.Jupiter.M; const cc=new THREE.Color(0xc770ff); for(let i=0;i<count;i++){const d=rad(18)*randn(); const theta=wrap(mj+phase+d); const ai=(aH+lerp(-0.35,0.35,Math.random()))*AU2U; const ei=0.08+Math.abs(randn())*0.05; const inci=rad(Math.max(0,randn()*1.5)); a[i]=ai; e[i]=clamp(ei,0,0.18); inc[i]=inci; const Ti=TE*Math.pow((ai/aE),1.5); nA[i]=(2*Math.PI)/Ti; M[i]=theta; const f=approxTrue(M[i],e[i]); const r=ai*(1-e[i]*Math.cos(M[i])); const xp=r*Math.cos(f), yp=r*Math.sin(f); const idx=3*i; pos[idx]=xp; pos[idx+1]=yp*Math.sin(inci); pos[idx+2]=yp*Math.cos(inci); col.set([cc.r,cc.g,cc.b],idx);} const posAttr=new THREE.BufferAttribute(pos,3); posAttr.setUsage(THREE.DynamicDrawUsage); geo.setAttribute('position',posAttr); geo.setAttribute('color',new THREE.BufferAttribute(col,3)); const mat=mkMat(0.64, 1.6, 6.5); const pts=new THREE.Points(geo,mat); pts.frustumCulled=false; if(!geo.boundingSphere) geo.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,0), AU2U*80); scene.add(pts); return {geo,mesh:pts,a,e,inc,M:M,n:nA,cursor:0}};
    let H1:Swarm, H2:Swarm, H3:Swarm; const hildaTotal=Math.max(1000,Math.floor(astCRef.current*0.08)); H1=mkHilda(Math.floor(hildaTotal/3), +Math.PI/3); H2=mkHilda(Math.floor(hildaTotal/3), Math.PI); H3=mkHilda(hildaTotal-2*Math.floor(hildaTotal/3), -Math.PI/3);

    // background stars
    (function(){const N=2200, geo=new THREE.BufferGeometry(), pos=new Float32Array(N*3); for(let i=0;i<N;i++){const R=5000,u=Math.random(),v=Math.random(),th=2*Math.PI*u, ph=Math.acos(2*v-1); pos[i*3+0]=R*Math.sin(ph)*Math.cos(th); pos[i*3+1]=R*Math.sin(ph)*Math.sin(th); pos[i*3+2]=R*Math.cos(ph);} geo.setAttribute('position',new THREE.BufferAttribute(pos,3)); const s=new THREE.Points(geo,new THREE.PointsMaterial({map:dotTex,size:1.5,transparent:true,depthWrite:false,color:0xffffff})); scene.add(s); bag.push(()=>{geo.dispose(); (s.material as THREE.Material).dispose();})})();

    // camera controls
    let drag=false,lx=0,ly=0; const md=(e:MouseEvent)=>{if(e.button!==0)return; drag=true; lx=e.clientX; ly=e.clientY}; const mm=(e:MouseEvent)=>{if(!drag)return; const dx=e.clientX-lx, dy=e.clientY-ly; lx=e.clientX; ly=e.clientY; yawRef.current-=dx*.005; pitchRef.current=clamp(pitchRef.current+dy*.005,0,1.52); distRef.current=clamp(distRef.current*(1+dy*.002),50,30000)}; const onUp=()=>{drag=false}; const wheel=(e:WheelEvent)=>{distRef.current=clamp(distRef.current*(e.deltaY>0?1.1:0.9),50,30000)};
    renderer.domElement.addEventListener('mousedown',md); window.addEventListener('mousemove',mm); window.addEventListener('mouseup',onUp); renderer.domElement.addEventListener('wheel',wheel as any,{passive:true} as any);

    // fit helpers
    const sysMaxR=()=>{const pMax=Math.max(...PLANETS.map(p=>elements[p].a*(1+elements[p].e))); const kMax=kui?Math.max(...kui.a)*1.05:0; return Math.max(pMax,kMax)};
    cmdsRef.current.fitInner=()=>{const R=AU2U*4.0; const f=cam.fov*Math.PI/180; distRef.current=clamp(R/Math.tan(f/2)*1.25,80,10000); pitchRef.current=.9};
    cmdsRef.current.fitFull=()=>{const R=sysMaxR(); const f=cam.fov*Math.PI/180; distRef.current=clamp(R/Math.tan(f/2)*1.25,120,30000); pitchRef.current=.9};
    cmdsRef.current.topDown=()=>{pitchRef.current=1.45}; cmdsRef.current.iso=()=>{pitchRef.current=.5; yawRef.current=-Math.PI/4};

    // planet Δv/tilt
    const apply=(p:P,f:number,tiltDeg:number)=>{const el=elements[p]; const E=solveE(el.M,el.e), th=Math.atan2(Math.sqrt(1-el.e*el.e)*Math.sin(E),Math.cos(E)-el.e); const r=el.a*(1-el.e*Math.cos(E)); const pOld=el.a*(1-el.e*el.e), hOld=Math.sqrt(mu*pOld), vtOld=hOld/r, vrOld=(mu/hOld)*el.e*Math.sin(th); const vtNew=clamp(vtOld*clamp(f,.1,10),.05*vtOld,10*vtOld), vrNew=vrOld; let eps=.5*(vtNew*vtNew+vrNew*vrNew)-mu/r; if(eps>=0) eps=-1e-9; let aNew=-mu/(2*eps); const hNew=r*vtNew; let e2=1-(hNew*hNew)/(mu*aNew); e2=clamp(e2,0,0.999999); const eNew=Math.sqrt(e2); const rmax=aNew*(1+eNew); if(rmax>sysMaxR()*1.2){const s=sysMaxR()*1.2/rmax; aNew*=s;} const pNew=aNew*(1-e2); let cosf=(pNew/r-1)/eNew; if(eNew<1e-8||!isFinite(cosf)) cosf=Math.cos(th); cosf=clamp(cosf,-1,1); const sinf=sgn(vrNew)*Math.sqrt(Math.max(0,1-cosf*cosf)); const fNew=Math.atan2(sinf,cosf); const beta=Math.sqrt((1-eNew)/(1+eNew)); const Enew=2*Math.atan(beta*Math.tan(fNew/2)); const Mnew=wrap(Enew - eNew*Math.sin(Enew)); elements[p]={a:aNew,e:eNew,i:rad(tiltDeg),M:Mnew}; mkLine(p); mesh[p].position.copy(posOf(p)); lastRef.current=p};
    cmdsRef.current.apply=apply; cmdsRef.current.resetLast=()=>{const p=lastRef.current; if(!p) return; elements[p]={...base[p]}; mkLine(p); mesh[p].position.copy(posOf(p))}; cmdsRef.current.fullReset=()=>{for(const p of PLANETS){elements[p]={...base[p]}; mkLine(p); mesh[p].position.copy(posOf(p))}};

    // advance (chunked updates) — robust to three.js variants (no undefined updateRange)
    const advanceBelt=(B:Belt,d:number)=>{const pos=B.geo.getAttribute('position') as THREE.BufferAttribute; const arr=pos.array as Float32Array; const N=B.a.length; const heavy=N>40000; const CH=heavy?Math.max(8000,Math.ceil(N/12)):Math.max(12000,Math.ceil(N/6)); let s=B.cursor,e=Math.min(N,s+CH); for(let i=s;i<e;i++){const Mi=wrap(B.M[i]+B.n[i]*d); B.M[i]=Mi; const ei=B.e[i]; const f=approxTrue(Mi,ei); const r=B.a[i]*(1-ei*Math.cos(Mi)); const xp=r*Math.cos(f), yp=r*Math.sin(f); const si=Math.sin(B.inc[i]),ci=Math.cos(B.inc[i]); const idx=3*i; arr[idx]=xp; arr[idx+1]=yp*si; arr[idx+2]=yp*ci;} const off=s*3, cnt=(e-s)*3; const anyPos:any = pos as any; if (typeof anyPos.setUpdateRange === 'function'){ anyPos.setUpdateRange(off,cnt); } else { if (!anyPos.updateRange) anyPos.updateRange = {offset:0,count:-1}; anyPos.updateRange.offset = off; anyPos.updateRange.count = cnt; } pos.needsUpdate=true; B.cursor=(e===N)?0:e };

    // resize
    const onResize=()=>{const W=root.clientWidth||window.innerWidth,H=root.clientHeight||window.innerHeight; renderer.setSize(W,H); cam.aspect=W/H; cam.updateProjectionMatrix()}; const ro=new ResizeObserver(onResize); ro.observe(root);

    // animate
    let t0=performance.now(); const loop=()=>{const now=performance.now(), dt=Math.min(.25,(now-t0)/1000); t0=now; const d=dt*simDaysPerSecRef.current; for(const p of PLANETS){const el=elements[p]; const n=Math.sqrt(mu/Math.pow(el.a,3)); el.M=wrap(el.M+n*d); mesh[p].position.copy(posOf(p))} updateMoon(d); for(const m of simpleMoons){m.pivot.rotation.y+=m.angVel*d} advanceBelt(ast,d); advanceBelt(kui,d); advanceBelt(L4,d); advanceBelt(L5,d); advanceBelt(H1,d); advanceBelt(H2,d); advanceBelt(H3,d); const r=distRef.current,yaw=yawRef.current,pitch=pitchRef.current; cam.position.set(r*Math.cos(pitch)*Math.sin(yaw),r*Math.sin(pitch),r*Math.cos(pitch)*Math.cos(yaw)); cam.lookAt(0,0,0); sunLight.position.set(0,0,0); glow.position.set(0,0,0); if(Math.random()<dt*6)spawn(); if(Math.random()<dt*6)spawn(); flareGroup.rotation.y+=.25*dt; for(let i=0;i<FPOOL;i++){if(life[i]<=0)continue; life[i]+=dt; const s=flSprites[i]; const mat = (s.material as THREE.SpriteMaterial) || null; if(!mat){continue;} s.position.addScaledVector(vel[i],dt); const t=clamp(life[i]/lifeMax[i],0,1); mat.opacity=t<.15?t/.15:1-(t-.15)/.85; s.scale.setScalar(2+6*t); if(s.position.length()>FLARE_CAP||t>=1){mat.opacity=0; life[i]=0}} (sun.material as any).uniforms.uTime.value += dt; const ups=(scene as any).userData._spinUpdates as Array<(dt:number)=>void>|undefined; if(ups){for(let i=0;i<ups.length;i++){try{ups[i](dt);}catch{}}} renderer.render(scene,cam); rafRef.current=requestAnimationFrame(loop)}; rafRef.current=requestAnimationFrame(loop);

    // rebuild belts on demand
    cmdsRef.current.rebuildBelts=()=>{const re=(B:Belt)=>{scene.remove(B.mesh); B.geo.dispose(); (B.mesh.material as THREE.Material).dispose()}; re(ast); re(kui); re(L4); re(L5); re(H1); re(H2); re(H3); ast=mkOrbitingBelt(astCRef.current,[2.1,3.3],0.12,2.5,0.9,()=>{const c=.68+Math.random()*.22;return [c,c,c]},0.58); kui=mkOrbitingBelt(kuiCRef.current,[42,48],0.10,5.5,1.4,()=>{const c=.78+Math.random()*.18;return [c*.65,c*.85,1.0]},0.72); const trojanTotal=Math.max(2000,Math.floor(astCRef.current*0.2)); L4=mkCoOrbital(Math.floor(trojanTotal/2),[4.9,5.5],+Math.PI/3,20,0x62f38e,1.0); L5=mkCoOrbital(Math.ceil(trojanTotal/2),[4.9,5.5],-Math.PI/3,20,0xff6b6b,1.0); const hildaTotal=Math.max(1000,Math.floor(astCRef.current*0.08)); H1=mkHilda(Math.floor(hildaTotal/3),+Math.PI/3); H2=mkHilda(Math.floor(hildaTotal/3),Math.PI); H3=mkHilda(hildaTotal-2*Math.floor(hildaTotal/3),-Math.PI/3)};

    // quick sanity checks (runtime assertions)
    console.assert((R.Jupiter||0) > (R.Saturn||0), 'Jupiter should be larger than Saturn (visual scale)');
    console.assert((sunGeom.parameters.widthSegments||64) > 0, 'Sun geometry ok');

    // cleanup
    return ()=>{cancelAnimationFrame(rafRef.current); ro.disconnect(); renderer.domElement.removeEventListener('mousedown',md as any); window.removeEventListener('mousemove',mm as any); window.removeEventListener('mouseup',onUp as any); renderer.domElement.removeEventListener('wheel',wheel as any); root.removeChild(renderer.domElement); renderer.dispose(); scene.traverse((o:any)=>{o.geometry?.dispose?.(); const m=o.material; if(m){Array.isArray(m)?m.forEach((mm:any)=>mm.dispose?.()):m.dispose?.();}}); bag.forEach(f=>{try{f()}catch{}}) };

    // --- local textures ---
    function sunTex(){const s=512,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;let g=x.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);g.addColorStop(0,'#fff6e8');g.addColorStop(.35,'#ffd08a');g.addColorStop(.7,'#ff8a3d');g.addColorStop(1,'#ef6a1e');x.fillStyle=g;x.fillRect(0,0,s,s);const N=320;for(let i=0;i<N;i++){const p=Math.random();if(p<.60){x.globalAlpha=.35;x.fillStyle='#ff9a3d';const r=(Math.random()*.05+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.ellipse(xx,yy,r*1.5,r*.6,Math.random()*Math.PI,0,Math.PI*2);x.fill()}else if(p<.90){x.globalAlpha=.40;x.fillStyle='#d02b2b';const r=(Math.random()*.06+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.ellipse(xx,yy,r*1.8,r*.45,Math.random()*Math.PI,0,Math.PI*2);x.fill()}else{x.globalAlpha=.28;x.fillStyle='#fff';const r=(Math.random()*.035+.012)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill()}}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;(t as any).needsUpdate=true;return t}
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
      <div ref={mountRef} style={{width:'100%',height:'100%'}}/>
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

function Row({label,children}:{label:string,children:any}){return <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 100px',alignItems:'center',gap:10,marginBottom:12}}><div style={{opacity:.9}}>{label}</div>{children}</div>}
function Tab({active,children,onClick}:{active?:boolean,children:any,onClick?:any}){return <button onClick={onClick} style={{padding:'6px 8px',borderRadius:8,background:active?'#059669':'#1f2937',border:`1px solid ${active?'#10b981':'#374151'}`,color:'#e5e7eb',cursor:'pointer'}}>{children}</button>}
function Btn({children,onClick}:{children:any,onClick?:any}){return <button onClick={onClick} style={{padding:'6px 10px',borderRadius:8,background:'#059669',border:'1px solid #10b981',color:'#fff',cursor:'pointer'}}>{children}</button>}
function Btn2({children,onClick}:{children:any,onClick?:any}){return <button onClick={onClick} style={{padding:'6px 10px',borderRadius:8,background:'#374151',border:'1px solid #4b5563',color:'#e5e7eb',cursor:'pointer'}}>{children}</button>}

function sliderToDays(pos:number,min:number,max:number){const t=pos/100; return Math.round(min*Math.pow(max/min,t))}
function daysToSlider(days:number,min:number,max:number){const t=Math.log(days/min)/Math.log(max/min); return Math.round(clamp01(t)*100)}
function clamp01(x:number){return Math.max(0,Math.min(1,x))}

// ===== Earth upgrade (textures + clouds + atmosphere; orbits unchanged) =====
function upgradeEarth(scene:THREE.Scene, renderer:THREE.WebGLRenderer){
  const earth=scene.getObjectByName('Earth') as THREE.Mesh | null; if(!earth||!(earth as any).isMesh){console.warn('Earth mesh not found to upgrade');return;}
  const tl=new THREE.TextureLoader();
  const maxAniso=Math.min(8,(renderer.capabilities as any).getMaxAnisotropy?.()||8);
  // ---------- helpers ----------
  function solidTex(rgb:number):THREE.Texture{const c=document.createElement('canvas');c.width=c.height=2;const g=c.getContext('2d')!;g.fillStyle='#'+rgb.toString(16).padStart(6,'0');g.fillRect(0,0,2,2);const t=new THREE.CanvasTexture(c);(t as any).colorSpace=THREE.SRGBColorSpace;return t;}
  function loadFirst(urls:string[],onOk:(t:THREE.Texture)=>void,onFail:()=>void){let i=0;const next=()=>{if(i>=urls.length){onFail();return;}const u=urls[i++];tl.load(u,(t)=>{(t as any).colorSpace=THREE.SRGBColorSpace; (t as any).anisotropy=maxAniso; (t as any).wrapS=THREE.RepeatWrapping; (t as any).wrapT=THREE.RepeatWrapping; onOk(t);},undefined,()=>next());};next();}
  function loadOptional(urls:string[],cb:(t:THREE.Texture)=>void){loadFirst(urls,cb,()=>cb(solidTex(0x000000)));}
  // ---------- candidate maps (provide your own in /public/earth/ ) ----------
  const DAY = ['/earth/blue_marble.jpg','/earth/earth_albedo.jpg','/earth/earth_albedo.png','/biosphere-sea-2008-lrg.webp'];
  const NIGHT=['/earth/night.jpg','/earth/earth_night_lights.jpg'];
  const SPEC =['/earth/specular_ocean.jpg','/earth/ocean_mask.jpg'];
  // load all (with graceful fallbacks)
  let dayTex:THREE.Texture|undefined, nightTex:THREE.Texture|undefined, specTex:THREE.Texture|undefined;
  const applyIfReady = () => {
    const m = earth.material as THREE.MeshPhongMaterial;
    if (dayTex) { m.map = dayTex; }
    if (specTex) { (m as any).specularMap = specTex; }
    if (nightTex) { m.emissiveMap = nightTex; m.emissive = new THREE.Color(0x222244); m.emissiveIntensity = 0.55; }
    m.shininess = 18; m.color = new THREE.Color(0xffffff);
    m.needsUpdate = true;
  };

  // Procedural cloud texture + lightweight cloud layer
  function mkCloudTex(): THREE.Texture {
    const s = 512; const c = document.createElement('canvas'); c.width = c.height = s; const x = c.getContext('2d')!;
    x.clearRect(0,0,s,s); x.globalAlpha = 0.28; x.fillStyle = '#fff';
    for (let i = 0; i < 1100; i++) {
      const r = (Math.random() * 0.02 + 0.004) * s; const xx = Math.random() * s; const yy = Math.random() * s;
      x.beginPath(); x.ellipse(xx, yy, r * 1.8, r * 0.9, Math.random() * Math.PI, 0, Math.PI * 2); x.fill();
    }
    const t = new THREE.CanvasTexture(c); (t as any).colorSpace = THREE.SRGBColorSpace; (t as any).wrapS = THREE.RepeatWrapping; (t as any).wrapT = THREE.RepeatWrapping; t.needsUpdate = true; return t;
  }

  const r = (earth.geometry as THREE.SphereGeometry).parameters.radius || 2.2;
  const clouds = new THREE.Mesh(new THREE.SphereGeometry(r * 1.03, 32, 24), new THREE.MeshPhongMaterial({ map: mkCloudTex(), transparent: true, depthWrite: false, opacity: 0.5 }));
  clouds.name = 'EarthClouds'; earth.add(clouds);
  const ups = (scene as any).userData._spinUpdates as Array<(dt:number)=>void> | undefined; if (ups) { ups.push((dt)=>{ clouds.rotation.y += 0.03 * dt; }); }

  // Load maps with fallbacks, then apply
  loadFirst(DAY, t => { dayTex = t; applyIfReady(); }, ()=>{});
  loadOptional(NIGHT, t => { nightTex = t; applyIfReady(); });
  loadOptional(SPEC, t => { specTex = t; applyIfReady(); });
}

// ===== Mars upgrade (procedural rust, canyons, Olympus Mons, polar caps) =====
function upgradeMars(scene:THREE.Scene){
  const mars=scene.getObjectByName('Mars') as THREE.Mesh | null; if(!mars||!(mars as any).isMesh) return;
  const s=512, c=document.createElement('canvas'); c.width=s; c.height=s; const x=c.getContext('2d')!;
  // base rust tone + mottling
  const baseGrad=x.createLinearGradient(0,0,0,s); baseGrad.addColorStop(0,'#b65a32'); baseGrad.addColorStop(1,'#8a3c22'); x.fillStyle=baseGrad; x.fillRect(0,0,s,s);
  x.globalAlpha=0.28; x.fillStyle='#c97a4d'; for(let i=0;i<900;i++){const r=(Math.random()*0.05+0.01)*s; const xx=Math.random()*s; const yy=Math.random()*s; x.beginPath(); x.arc(xx,yy,r,0,Math.PI*2); x.fill();}
  x.globalAlpha=0.22; x.fillStyle='#6d2f1c'; for(let i=0;i<600;i++){const r=(Math.random()*0.04+0.008)*s; const xx=Math.random()*s; const yy=Math.random()*s; x.beginPath(); x.ellipse(xx,yy,r*1.4,r*0.7,Math.random()*Math.PI,0,Math.PI*2); x.fill();}
  // Valles Marineris (dark equatorial canyon)
  x.globalAlpha=0.55; x.fillStyle='#4a1e10'; const w=0.06*s; x.save(); x.translate(s*0.45,s*0.55); x.rotate(-12*Math.PI/180); x.fillRect(-0.40*s,-w/2,0.55*s,w); x.restore();
  // Olympus Mons (bright circular)
  const omR=0.05*s; const omX=s*0.78, omY=s*0.48; const g=x.createRadialGradient(omX,omY,0,omX,omY,omR); g.addColorStop(0,'rgba(255,210,170,0.95)'); g.addColorStop(0.6,'rgba(220,150,110,0.55)'); g.addColorStop(1,'rgba(0,0,0,0)'); x.globalAlpha=1; x.fillStyle=g; x.beginPath(); x.arc(omX,omY,omR,0,Math.PI*2); x.fill();
  // Polar caps
  const cap=(cx:number,cy:number)=>{const r=0.18*s; const gg=x.createRadialGradient(cx,cy,0,cx,cy,r); gg.addColorStop(0,'rgba(255,255,255,0.95)'); gg.addColorStop(1,'rgba(255,255,255,0)'); x.fillStyle=gg; x.beginPath(); x.arc(cx,cy,r,0,Math.PI*2); x.fill();};
  cap(s/2, s*0.04); cap(s/2, s*0.96);
  const t=new THREE.CanvasTexture(c); (t as any).colorSpace=THREE.SRGBColorSpace; t.needsUpdate=true;
  const mat=mars.material as THREE.MeshPhongMaterial; mat.map=t; mat.color=new THREE.Color(0xffffff); mat.emissive=new THREE.Color(0x0e0b0b); mat.emissiveIntensity=0.28; mat.shininess=6; mat.needsUpdate=true;
}

// ===== Jupiter upgrade (bands + Great Red Spot) =====
function upgradeJupiter(scene:THREE.Scene){
  const j=scene.getObjectByName('Jupiter') as THREE.Mesh | null; if(!j||!(j as any).isMesh) return;
  const s=1024, c=document.createElement('canvas'); c.width=s; c.height=s/2; const x=c.getContext('2d')!; const H=c.height;
  const bands=[ '#9c6f42', '#e5d1b2', '#b2824d', '#efe0c7', '#a36c3d', '#e7d5b8', '#b98a57' ];
  const stripes=[
    {h:0.15,col:'#9c6f42'},
    {h:0.08,col:'#ffffff'},
    {h:0.10,col:'#b5753f'},
    {h:0.08,col:'#ffffff'},
    {h:0.10,col:'#b5753f'},
    {h:0.08,col:'#ffffff'},
    {h:0.15,col:'#8f6038'}
  ];
  let y=0; for(const sdef of stripes){const hh=sdef.h*H; const grad=x.createLinearGradient(0,y,0,y+hh); grad.addColorStop(0,sdef.col); grad.addColorStop(1, sdef.col); x.fillStyle=grad; x.fillRect(0,y,c.width,hh); y+=hh;}
  // Gentle turbulence
  x.globalAlpha=0.18; x.fillStyle='#000'; for(let i=0;i<900;i++){const rw=(Math.random()*0.08+0.01)*c.width; const rh=rw*0.24; const xx=Math.random()*c.width; const yy=Math.random()*H; x.beginPath(); x.ellipse(xx,yy,rw,rh,Math.random()*Math.PI,0,Math.PI*2); x.fill();}
  x.globalAlpha=1;
  // Great Red Spot (south band)
  const grsY=H*0.70, grsX=c.width*0.65, grsW=H*0.35, grsH=H*0.22; const g=x.createRadialGradient(grsX,grsY,0,grsX,grsY,grsW*0.9); g.addColorStop(0,'rgba(210,80,50,0.9)'); g.addColorStop(0.6,'rgba(170,60,40,0.7)'); g.addColorStop(1,'rgba(0,0,0,0)'); x.fillStyle=g; x.beginPath(); x.ellipse(grsX,grsY,grsW,grsH,Math.PI*0.1,0,Math.PI*2); x.fill();
  const t=new THREE.CanvasTexture(c); (t as any).colorSpace=THREE.SRGBColorSpace; (t as any).wrapS=THREE.RepeatWrapping; (t as any).wrapT=THREE.MirroredRepeatWrapping; t.needsUpdate=true;
  const m=j.material as THREE.MeshPhongMaterial; m.map=t; m.color=new THREE.Color(0xffffff); m.emissive=new THREE.Color(0x121010); m.emissiveIntensity=0.32; m.shininess=8; m.needsUpdate=true;
}

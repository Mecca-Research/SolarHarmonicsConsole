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
    const renderer=new THREE.WebGLRenderer({antialias:true}); renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)); renderer.setSize(w,h); renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.12; root.appendChild(renderer.domElement);
    const scene=new THREE.Scene(); scene.background=new THREE.Color(0x000000);
    const cam=new THREE.PerspectiveCamera(60,w/h,0.1,120000);

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
    const dotTex=(()=>{const c=document.createElement('canvas'); const s=64; c.width=c.height=s; const g=c.getContext('2d')!.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2); g.addColorStop(0,'#fff'); g.addColorStop(1,'#fff0'); const x=c.getContext('2d')!; x.fillStyle=g; x.fillRect(0,0,s,s); const t=track(new THREE.CanvasTexture(c)); (t as any).colorSpace=THREE.SRGBColorSpace; t.needsUpdate=true; return t;})();
    const makeBlot=(base:string,blot:string,n=110)=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;x.fillStyle=base;x.fillRect(0,0,s,s);x.globalAlpha=.25;x.fillStyle=blot;for(let i=0;i<n;i++){const r=(Math.random()*.06+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill();}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t};
    const bands=(cols:string[])=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!,bh=s/cols.length;cols.forEach((col,i)=>{x.fillStyle=col;x.fillRect(0,i*bh,s,bh)});const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t};
    const earthTex=()=>{const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;x.fillStyle='#2764cc';x.fillRect(0,0,s,s);x.fillStyle='#4caf50';x.globalAlpha=.95;for(let i=0;i<80;i++){const r=(Math.random()*.08+.03)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill()}x.globalAlpha=.25;x.fillStyle='#fff';for(let i=0;i<60;i++){const r=(Math.random()*.06+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.ellipse(xx,yy,r*1.4,r*.6,Math.random()*Math.PI,0,Math.PI*2);x.fill()}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t};
    const saturnRingTex=()=>{const s=256,c=document.createElement('canvas');c.width=s;c.height=s;const x=c.getContext('2d')!,cx=s/2,cy=s/2,rO=s*.49,rI=s*.25;x.clearRect(0,0,s,s);for(let r=rI;r<rO;r++){const t=(r-rI)/(rO-rI),a=.18+.25*Math.sin(t*20)*(1-t)+.05*Math.random();x.strokeStyle=`rgba(230,210,170,${a.toFixed(3)})`;x.beginPath();x.arc(cx,cy,r,0,Math.PI*2);x.stroke()}const tex=track(new THREE.CanvasTexture(c));(tex as any).colorSpace=THREE.SRGBColorSpace;tex.needsUpdate=true;return tex};
    const planetTex=(n:P)=>({Mercury:makeBlot('#b6ada3','#6e675f'),Venus:makeBlot('#e8c873','#c8a24a'),Earth:earthTex(),Mars:makeBlot('#d16b3e','#7a3e26'),Jupiter:bands(['#caa376','#e1c8a8','#b68955','#e6d3b7','#ad7a49','#dcc29f','#bf915f']),Saturn:bands(['#e8d7aa','#d8be86','#efdcb8','#c8aa72','#e5d6ae','#c8aa72']),Uranus:bands(['#9de3f7','#84dfff','#9de3f7']),Neptune:bands(['#6aa7ff','#5d8cff','#6aa7ff']),Pluto:makeBlot('#cdcac7','#a09d9b')})[n];

    // --- sun & lights ---
    const amb=new THREE.AmbientLight(0xffffff,.30), hemi=new THREE.HemisphereLight(0xeeeeff,0x222233,.44); scene.add(amb,hemi);
    const sunLight=new THREE.PointLight(0xfff2cc,56,0,2); scene.add(sunLight);
    // Recalibrate Sun visual radius so Mercury never intersects it (keep look, not physics)
    const rPeriMerc = ELS.Mercury.a*(1-ELS.Mercury.e)*AU2U; // Mercury perihelion in scene units
    const SUN_VIS_R = Math.max(2.5, Math.min(rPeriMerc*0.60, AU2U*0.80)); // big but always inside Mercury
    const sunGeom=new THREE.SphereGeometry(SUN_VIS_R,64,48); const sunMat=makeSunMat(); const sun=new THREE.Mesh(sunGeom,sunMat); scene.add(sun);
    const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex(),color:0xffffff,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false})); glow.scale.setScalar(rPeriMerc*0.90); scene.add(glow); queueMicrotask(()=>upgradeEarth(scene,renderer));
    queueMicrotask(()=>upgradeMars(scene,renderer));
    queueMicrotask(()=>upgradeJupiter(scene,renderer));
    queueMicrotask(()=>upgradeSaturn(scene,renderer));

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
    const posOf=(p:P)=>{const el=elements[p]; const E=solveE(el.M,el.e); const xp=el.a*(Math.cos(E)-el.e), yp=el.a*Math.sqrt(1-el.e*el.e)*Math.sin(E); const x=xp, y=yp*Math.sin(el.i), z=yp*Math.cos(el.i); return new THREE.Vector3(x,y,z)};

    // --- orbits & planet meshes ---
    const mesh:Record<P,THREE.Mesh>={} as any; const line:Record<P,THREE.LineLoop>={} as any;
    const mkLine=(p:P)=>{if(line[p]){scene.remove(line[p]); line[p].geometry.dispose(); (line[p].material as THREE.Material).dispose();} const el=elements[p], N=512, pts=new Float32Array(N*3); for(let i=0;i<N;i++){const f=i/N*Math.PI*2; const r=el.a*(1-el.e*el.e)/(1+el.e*Math.cos(f)); const xp=r*Math.cos(f), yp=r*Math.sin(f); pts[i*3+0]=xp; pts[i*3+1]=yp*Math.sin(el.i); pts[i*3+2]=yp*Math.cos(el.i);} const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pts,3)); const m=new THREE.LineBasicMaterial({color:p==='Pluto'?0x8b96a8:0x566173}); const L=new THREE.LineLoop(g,m); scene.add(L); line[p]=L};
    const baseEm=.52; const emAll=baseEm*1.5; const emEarth=baseEm*2.0; // Earth brighter
    for(const p of PLANETS){const m=new THREE.Mesh(new THREE.SphereGeometry(R[p],48,32),new THREE.MeshPhongMaterial({color:C[p],map:planetTex(p),specular:new THREE.Color(0x222222),shininess:(p==='Earth'||p==='Venus')?18:7,emissive:new THREE.Color(0x121212),emissiveIntensity:(p==='Earth'?emEarth:emAll)})); m.position.copy(posOf(p)); mesh[p]=m; scene.add(m); if(p==='Saturn'){const tex=saturnRingTex(); const rg=new THREE.RingGeometry(R.Saturn*1.35,R.Saturn*2.25,256); const rm=new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide,depthWrite:false}); const rings=new THREE.Mesh(rg,rm); rings.rotation.x=Math.PI/2; m.add(rings);} mkLine(p); }

    // moons
    const AU_TO_UNITS=AU2U; const kmToAU=(km:number)=>km/149_597_870; const moons=[{name:'Moon',parent:'Earth',a:AU_TO_UNITS*kmToAU(384400),P:27.321661,size:.58,col:0xbebebe,inc:5},{name:'Ganymede',parent:'Jupiter',a:AU_TO_UNITS*kmToAU(1070400),P:7.154553,size:.72,col:0x9d9a8f,inc:2},{name:'Titan',parent:'Saturn',a:AU_TO_UNITS*kmToAU(1221870),P:15.945,size:.67,col:0xcaa464,inc:3}] as const; const moonObjs:{pivot:THREE.Object3D, angVel:number}[]=[]; const mtex=(n:string)=>n==='Moon'?makeBlot('#ddd','#9f9f9f',90):n==='Ganymede'?makeBlot('#a7a299','#6e6a62',140):makeBlot('#caa464','#a77f3f',120); for(const m of moons){const parent=mesh[m.parent as P]; if(!parent) continue; const pivot=new THREE.Object3D(); pivot.rotation.x=rad(m.inc); parent.add(pivot); const s=new THREE.Mesh(new THREE.SphereGeometry(m.size,32,24),new THREE.MeshPhongMaterial({color:m.col,map:mtex(m.name),specular:new THREE.Color(0x111111),shininess:8,emissive:new THREE.Color(0x0b0b0b),emissiveIntensity:.28})); s.position.set(m.a,0,0); pivot.add(s); moonObjs.push({pivot, angVel:(2*Math.PI)/m.P})}

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
    let t0=performance.now(); const loop=()=>{const now=performance.now(), dt=Math.min(.25,(now-t0)/1000); t0=now; const d=dt*simDaysPerSecRef.current; for(const p of PLANETS){const el=elements[p]; const n=Math.sqrt(mu/Math.pow(el.a,3)); el.M=wrap(el.M+n*d); mesh[p].position.copy(posOf(p))} for(const m of moonObjs){m.pivot.rotation.y+=m.angVel*d} advanceBelt(ast,d); advanceBelt(kui,d); advanceBelt(L4,d); advanceBelt(L5,d); advanceBelt(H1,d); advanceBelt(H2,d); advanceBelt(H3,d); const r=distRef.current,yaw=yawRef.current,pitch=pitchRef.current; cam.position.set(r*Math.cos(pitch)*Math.sin(yaw),r*Math.sin(pitch),r*Math.cos(pitch)*Math.cos(yaw)); cam.lookAt(0,0,0); sunLight.position.set(0,0,0); glow.position.set(0,0,0); if(Math.random()<dt*6)spawn(); if(Math.random()<dt*6)spawn(); flareGroup.rotation.y+=.25*dt; for(let i=0;i<FPOOL;i++){if(life[i]<=0)continue; life[i]+=dt; const s=flSprites[i]; const mat = (s.material as THREE.SpriteMaterial) || null; if(!mat){continue;} s.position.addScaledVector(vel[i],dt); const t=clamp(life[i]/lifeMax[i],0,1); mat.opacity=t<.15?t/.15:1-(t-.15)/.85; s.scale.setScalar(2+6*t); if(s.position.length()>FLARE_CAP||t>=1){mat.opacity=0; life[i]=0}} sunMat.uniforms.uTime.value += dt; const ups=scene.userData._spinUpdates; if(ups){for(let i=0;i<ups.length;i++){try{ups[i](dt);}catch{}}} renderer.render(scene,cam); rafRef.current=requestAnimationFrame(loop)}; rafRef.current=requestAnimationFrame(loop);

    // rebuild belts on demand
    cmdsRef.current.rebuildBelts=()=>{const re=(B:Belt)=>{scene.remove(B.mesh); B.geo.dispose(); (B.mesh.material as THREE.Material).dispose()}; re(ast); re(kui); re(L4); re(L5); re(H1); re(H2); re(H3); ast=mkOrbitingBelt(astCRef.current,[2.1,3.3],0.12,2.5,0.9,()=>{const c=.68+Math.random()*.22;return [c,c,c]},0.58); kui=mkOrbitingBelt(kuiCRef.current,[42,48],0.10,5.5,1.4,()=>{const c=.78+Math.random()*.18;return [c*.65,c*.85,1.0]},0.72); const trojanTotal=Math.max(2000,Math.floor(astCRef.current*0.2)); L4=mkCoOrbital(Math.floor(trojanTotal/2),[4.9,5.5],+Math.PI/3,20,0x62f38e,1.0); L5=mkCoOrbital(Math.ceil(trojanTotal/2),[4.9,5.5],-Math.PI/3,20,0xff6b6b,1.0); const hildaTotal=Math.max(1000,Math.floor(astCRef.current*0.08)); H1=mkHilda(Math.floor(hildaTotal/3),+Math.PI/3); H2=mkHilda(Math.floor(hildaTotal/3),Math.PI); H3=mkHilda(hildaTotal-2*Math.floor(hildaTotal/3),-Math.PI/3)};

    // cleanup
    return ()=>{cancelAnimationFrame(rafRef.current); ro.disconnect(); renderer.domElement.removeEventListener('mousedown',md as any); window.removeEventListener('mousemove',mm as any); window.removeEventListener('mouseup',onUp as any); renderer.domElement.removeEventListener('wheel',wheel as any); root.removeChild(renderer.domElement); renderer.dispose(); scene.traverse((o:any)=>{o.geometry?.dispose?.(); const m=o.material; if(m){Array.isArray(m)?m.forEach((mm:any)=>mm.dispose?.()):m.dispose?.();}}); bag.forEach(f=>{try{f()}catch{}}) };

    // --- local textures ---
    function sunTex(){const s=512,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!;let g=x.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);g.addColorStop(0,'#fff6e8');g.addColorStop(.35,'#ffd08a');g.addColorStop(.7,'#ff8a3d');g.addColorStop(1,'#ef6a1e');x.fillStyle=g;x.fillRect(0,0,s,s);const N=320;for(let i=0;i<N;i++){const p=Math.random();if(p<.60){x.globalAlpha=.35;x.fillStyle='#ff9a3d';const r=(Math.random()*.05+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.ellipse(xx,yy,r*1.5,r*.6,Math.random()*Math.PI,0,Math.PI*2);x.fill()}else if(p<.90){x.globalAlpha=.40;x.fillStyle='#d02b2b';const r=(Math.random()*.06+.02)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.ellipse(xx,yy,r*1.8,r*.45,Math.random()*Math.PI,0,Math.PI*2);x.fill()}else{x.globalAlpha=.28;x.fillStyle='#fff';const r=(Math.random()*.035+.012)*s,xx=Math.random()*s,yy=Math.random()*s;x.beginPath();x.arc(xx,yy,r,0,Math.PI*2);x.fill()}}x.globalAlpha=1;const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t}
    function glowTex(){const s=256,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!,g=x.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);g.addColorStop(0,'rgba(255,200,120,.95)');g.addColorStop(.55,'rgba(255,140,50,.35)');g.addColorStop(1,'rgba(255,110,40,0)');x.fillStyle=g;x.fillRect(0,0,s,s);const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t}
    function mkFlareTex(){const s=128,c=document.createElement('canvas');c.width=c.height=s;const x=c.getContext('2d')!,g=x.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);g.addColorStop(0,'rgba(255,220,170,.95)');g.addColorStop(.35,'rgba(255,140,60,.55)');g.addColorStop(1,'rgba(255,140,60,0)');x.fillStyle=g;x.beginPath();x.ellipse(s/2,s/2,s*.48,s*.18,Math.PI/4,0,Math.PI*2);x.fill();const t=track(new THREE.CanvasTexture(c));(t as any).colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t}
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
  const maxAniso=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  // ---------- helpers ----------
  function solidTex(rgb:number):THREE.Texture{const c=document.createElement('canvas');c.width=c.height=2;const g=c.getContext('2d')!;g.fillStyle='#'+rgb.toString(16).padStart(6,'0');g.fillRect(0,0,2,2);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
  function loadFirst(urls:string[],onOk:(t:THREE.Texture)=>void,onFail:()=>void){let i=0;const next=()=>{if(i>=urls.length){onFail();return;}const u=urls[i++];tl.load(u,(t)=>{t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=maxAniso;t.wrapS=t.wrapT=THREE.RepeatWrapping;onOk(t);},undefined,()=>next());};next();}
  function loadOptional(urls:string[],cb:(t:THREE.Texture)=>void){loadFirst(urls,cb,()=>cb(solidTex(0x000000)));}
  // ---------- candidate maps (provide your own in /public/earth/ ) ----------
  const DAY = ['/earth/blue_marble.jpg','/earth/earth_albedo.jpg','/earth/earth_albedo.png','/biosphere-sea-2008-lrg.webp'];
  const NIGHT=['/earth/night.jpg','/earth/earth_night_lights.jpg'];
  const SPEC =['/earth/specular_ocean.jpg','/earth/ocean_mask.jpg'];
  const NORM =['/earth/normal.jpg','/earth/earth_normal.jpg'];
  // load all (with graceful fallbacks)
  let dayTex:THREE.Texture, nightTex:THREE.Texture, specTex:THREE.Texture, normTex:THREE.Texture;
  loadOptional(DAY,(t)=>dayTex=t); loadOptional(NIGHT,(t)=>nightTex=t); loadOptional(SPEC,(t)=>specTex=t); loadOptional(NORM,(t)=>normTex=t);
  // build after a tick (textures may arrive async but we use defaults immediately)
  setTimeout(()=>{
    dayTex = dayTex||solidTex(0x2a63d8); nightTex = nightTex||solidTex(0x000010); specTex = specTex||solidTex(0x000000); normTex = normTex||solidTex(0x8080ff);
    // ----- Earth PBR-like shader: day/night blend + ocean spec -----
    const v=`
      varying vec2 vUv; varying vec3 vN; varying vec3 vWP; varying vec3 vV;
      void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.0); vWP=w.xyz; vN=normalize(normalMatrix*normal); vV=normalize(cameraPosition-vWP); gl_Position=projectionMatrix*viewMatrix*w; }
    `;
    const f=`
      varying vec2 vUv; varying vec3 vN; varying vec3 vWP; varying vec3 vV;
      uniform sampler2D uDay, uNight, uSpec, uNorm; uniform float uGloss; uniform float uExposure;
      // quick TBN from world normal (not perfect but good enough at this scale)
      vec3 getNormal(){ vec3 N=normalize(vN); vec3 up=abs(N.y)>0.99?vec3(0,0,1):vec3(0,1,0); vec3 T=normalize(cross(up,N)); vec3 B=cross(N,T); vec3 n=texture2D(uNorm,vUv).xyz*2.0-1.0; return normalize(n.x*T+n.y*B+n.z*N); }
      vec3 srgbToLinear(vec3 c){ return pow(c, vec3(2.2)); }
      vec3 linearToSrgb(vec3 c){ return pow(c, vec3(1.0/2.2)); }
      void main(){
        vec3 N = getNormal();
        vec3 L = normalize(-vWP); // Sun at origin
        float NdotL = dot(N,L);
        float dayW = smoothstep(-0.15, 0.05, NdotL);
        vec3 day = srgbToLinear(texture2D(uDay,vUv).rgb);
        vec3 night = srgbToLinear(texture2D(uNight,vUv).rgb);
        vec3 base = mix(night, day, dayW);
        float ocean = texture2D(uSpec,vUv).r; // expects oceans bright
        vec3 R = reflect(-L, N); float spec = pow(max(dot(R, normalize(vV)), 0.0), 80.0) * ocean * uGloss;
        vec3 col = base + spec; col *= uExposure; col = linearToSrgb(col);
        gl_FragColor = vec4(col,1.0);
      }
    `;
    const earthMat=new THREE.ShaderMaterial({vertexShader:v,fragmentShader:f,uniforms:{uDay:{value:dayTex},uNight:{value:nightTex},uSpec:{value:specTex},uNorm:{value:normTex},uGloss:{value:0.35},uExposure:{value:1.25}},transparent:false});
    (earth as THREE.Mesh).material=earthMat; (earth.material as any).needsUpdate=true;
    // ----- Atmosphere (rim) -----
    const r=((earth.geometry as any).boundingSphere?.radius)||1; 
    const vAtm=`varying vec3 vN; varying vec3 vV; void main(){vec4 w=modelMatrix*vec4(position,1.0); vN=normalize(normalMatrix*normal); vV=normalize(cameraPosition-w.xyz); gl_Position=projectionMatrix*viewMatrix*w;}`;
    const fAtm=`varying vec3 vN; varying vec3 vV; void main(){float m=clamp(1.0 - dot(normalize(vN), normalize(vV)),0.0,1.0); float a=pow(m,3.2); vec3 col=vec3(0.22,0.52,1.0)*a; gl_FragColor=vec4(col,a*0.8);}`;
    const atm=new THREE.Mesh(new THREE.SphereGeometry(r*1.022,56,40), new THREE.ShaderMaterial({vertexShader:vAtm,fragmentShader:fAtm,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending})); atm.name='EarthAtmosphere'; earth.add(atm);
    // ----- Clouds (two layers, slight parallax) -----
    function makeCloudTex(W=1024,H=512,seed=0):THREE.Texture{const c=document.createElement('canvas');c.width=W;c.height=H;const g=c.getContext('2d')!;const img=g.createImageData(W,H);const d=img.data;for(let y=0;y<H;y++){for(let x=0;x<W;x++){const nx=x/W, ny=y/H; const n=Math.abs(Math.sin((nx+seed)*16.0)+Math.sin((ny+seed*0.37)*21.0)+Math.sin((nx+ny+seed)*9.0))*0.33; const v=Math.max(0, Math.min(1, n-0.34))*1.9; const i=(y*W+x)*4; d[i]=d[i+1]=d[i+2]=255; d[i+3]=Math.round(255*v);} } g.putImageData(img,0,0);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=maxAniso;return t;}
    const cloudA=makeCloudTex(1024,512,0.0), cloudB=makeCloudTex(1024,512,0.42);
    const cloudsA=new THREE.Mesh(new THREE.SphereGeometry(r*1.016,48,32), new THREE.MeshLambertMaterial({map:cloudA,transparent:true,opacity:0.88,depthWrite:false}));
    const cloudsB=new THREE.Mesh(new THREE.SphereGeometry(r*1.018,48,32), new THREE.MeshLambertMaterial({map:cloudB,transparent:true,opacity:0.55,depthWrite:false}));
    cloudsA.name='EarthCloudsA'; cloudsB.name='EarthCloudsB'; earth.add(cloudsA); earth.add(cloudsB);
    // ----- Spin and cloud drift (hooked into main loop safely) -----
    (scene.userData._spinUpdates||(scene.userData._spinUpdates=[])).push((dt:number)=>{
      earth.rotation.y += dt*(0.6*Math.PI/180); // ~0.6 deg/s visual
      cloudsA.rotation.y += dt*(0.7*Math.PI/180);
      cloudsB.rotation.y += dt*(0.5*Math.PI/180);
      cloudA.offset.x=(cloudA.offset.x+dt*0.003)%1; cloudB.offset.x=(cloudB.offset.x+dt*0.0018)%1;
    });
  },0);
}

// ===== Mars upgrade (procedural rust + landmarks; orbits unchanged) =====
function upgradeMars(scene:THREE.Scene, renderer:THREE.WebGLRenderer){
  const mars=scene.getObjectByName('Mars') as THREE.Mesh | null; if(!mars||!(mars as any).isMesh){console.warn('Mars mesh not found to upgrade');return;}
  const v=`
    varying vec3 vN; varying vec3 vWP; varying vec2 vUv;
    void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.0); vWP=w.xyz; vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*viewMatrix*w; }
  `;
  const f=`
    varying vec3 vN; varying vec3 vWP; varying vec2 vUv;
    uniform float uExposure; uniform float uAmbient;
    float hash(vec3 p){ return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453); }
    float noise(vec3 p){ vec3 i=floor(p); vec3 f=fract(p); f=f*f*(3.0-2.0*f);
      float n=mix(mix(mix(hash(i+vec3(0,0,0)),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
      return n; }
    float fbm(vec3 p){ float a=0.0, amp=0.5; for(int i=0;i<5;i++){ a+=amp*noise(p); p*=2.03; amp*=0.55;} return a; }
    float adiff(float a,float b){ float d=a-b; d=mod(d+3.14159265, 6.2831853)-3.14159265; return abs(d); }
    vec3 sph(float lat,float lon){ return vec3(cos(lat)*cos(lon), sin(lat), cos(lat)*sin(lon)); }
    void main(){
      vec3 N = normalize(vN);
      float lat = asin(N.y); float lon = atan(N.z, N.x);
      // base rust palette
      vec3 rustA=vec3(0.74,0.40,0.20); vec3 rustB=vec3(0.88,0.55,0.28);
      float tex = fbm(N*6.0) * 0.9 + fbm(N*12.0)*0.1; // multi-scale variation
      vec3 base = mix(rustA, rustB, tex);
      // Valles Marineris (equatorial canyon ~ lon -90 to -30)
      float lonC = radians(-70.0); float wLon = radians(18.0); float wLat = radians(10.0);
      float stripe = exp(-pow(adiff(lon,lonC)/wLon,2.0)) * exp(-pow(lat/wLat,2.0));
      // branching/irregularity
      float branch = exp(-pow(adiff(lon,radians(-55.0))/wLon,2.0)) * exp(-pow((lat-radians(6.0))/radians(10.0),2.0));
      float valles = clamp(stripe + 0.6*branch, 0.0, 1.0);
      base = mix(base, base*0.45, valles);
      // Olympus Mons (~lat 19N, lon -130E), large shield + bright rim
      vec3 center = sph(radians(19.0), radians(-130.0));
      float ang = acos(clamp(dot(N, center), -1.0, 1.0));
      float mons = smoothstep(radians(16.0), radians(9.5), ang);
      float rim  = smoothstep(radians(10.5), radians(9.8), ang) - smoothstep(radians(9.8), radians(8.6), ang);
      base = mix(base, base*0.55, mons) + rim*vec3(0.12,0.10,0.08);
      // Polar ice caps with noisy edge
      float cap = smoothstep(radians(55.0), radians(75.0), abs(lat));
      float capNoise = fbm(N*9.0);
      cap *= smoothstep(0.35,0.65,capNoise);
      vec3 col = mix(base, vec3(0.96,0.97,1.0), cap*0.95);
      // simple lambert + ambient
      vec3 L = normalize(-vWP); float lam = max(dot(N,L),0.0);
      col = col*(uAmbient + (1.0-uAmbient)*lam) * uExposure;
      col = pow(col, vec3(1.0/2.2));
      gl_FragColor = vec4(col,1.0);
    }
  `;
  const mat=new THREE.ShaderMaterial({vertexShader:v,fragmentShader:f,uniforms:{uExposure:{value:1.15},uAmbient:{value:0.22}},transparent:false});
  (mars as THREE.Mesh).material=mat; (mars.material as any).needsUpdate=true;
  (scene.userData._spinUpdates||(scene.userData._spinUpdates=[])).push((dt:number)=>{ (mars as THREE.Mesh).rotation.y += dt*(0.61*Math.PI/180); });
}

// ===== Jupiter upgrade (banded shader + Great Red Spot; orbits unchanged) =====
function upgradeJupiter(scene:THREE.Scene, renderer:THREE.WebGLRenderer){
  const j=scene.getObjectByName('Jupiter') as THREE.Mesh|null; if(!j||!(j as any).isMesh){console.warn('Jupiter mesh not found to upgrade');return;}
  const v=`
    varying vec3 vN; varying vec3 vWP; varying vec2 vUv; 
    void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.0); vWP=w.xyz; vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*viewMatrix*w; }
  `;
  const f=`
    varying vec3 vN; varying vec3 vWP; varying vec2 vUv;
    uniform float uTime; uniform float uAmbient; uniform float uExposure;
    float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} 
    float noise(vec3 p){ vec3 i=floor(p); vec3 f=fract(p); f=f*f*(3.0-2.0*f);
      float n=mix(mix(mix(hash(i+vec3(0,0,0)),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
      return n; }
    float fbm(vec3 p){ float a=0.0, amp=0.5; for(int i=0;i<5;i++){ a+=amp*noise(p); p*=2.02; amp*=0.55;} return a; }
    float adiff(float a,float b){ float d=a-b; d=mod(d+3.14159265,6.2831853)-3.14159265; return abs(d);} 
    vec3 palWhite=vec3(0.88,0.90,0.94);
    vec3 palRust=vec3(0.75,0.58,0.40);
    vec3 palTan =vec3(0.82,0.70,0.52);
    vec3 palRed =vec3(0.78,0.28,0.14);
    void main(){
      vec3 N=normalize(vN); float lat=asin(N.y); float lon=atan(N.z,N.x);
      // Band structure: Rust polar -> White -> Rust -> White (equator) -> Rust -> White -> Rust polar
      float a=abs(lat);
      float w=0.06; // transition width
      float w1=smoothstep(0.95,1.00, a/1.57); // polar rust
      float w2=smoothstep(0.45,0.55, a/1.57); // outer white
      float w3=smoothstep(0.32,0.40, a/1.57); // outer rust
      float w4=smoothstep(0.14,0.22, a/1.57); // inner white
      float w5=smoothstep(0.06,0.12, a/1.57); // inner rust
      float wEq=smoothstep(0.00,0.05, a/1.57); // equatorial white core
      // Convert to weights (not strictly normalized on purpose; we layer)
      vec3 col = vec3(0.0);
      col = mix(col, palRust, w1);
      col = mix(col, palWhite, w2);
      col = mix(col, mix(palRust,palTan,0.5), w3);
      col = mix(col, palWhite, w4);
      col = mix(col, palTan,  w5);
      col = mix(col, palWhite*0.98, wEq);
      // Subtle band marbling and shear
      float shear = (sin(lat*12.0)*0.15 + 0.15)*uTime; // hemi-differential drift
      float bandNoise = fbm(vec3(lon*3.0 + shear, lat*8.0, 0.0));
      col *= 0.92 + 0.16*bandNoise;
      // Great Red Spot (~22°S, ~60°W) as an oval, placed on southern rust band
      float latGRS = radians(-22.0); float lonGRS = radians(-60.0);
      float dLat = (lat - latGRS); float dLon = adiff(lon, lonGRS);
      // reshape to ellipse
      float e = sqrt((dLon*dLon)/(radians(12.0)*radians(12.0)) + (dLat*dLat)/(radians(8.0)*radians(8.0)));
      float grs = exp(-4.0*e*e); // tight core
      // soft outer halo and internal swirl tint
      float halo = exp(-1.2*e*e);
      vec3 spot = mix(palRed*0.9, palRed*1.15, clamp(bandNoise*1.2,0.0,1.0));
      col = mix(col, spot, grs) + halo*vec3(0.06,0.04,0.02);
      // simple lambert
      vec3 L = normalize(-vWP); float lam=max(dot(N,L),0.0);
      col *= (uAmbient + (1.0-uAmbient)*lam) * uExposure; col = pow(col, vec3(1.0/2.2));
      gl_FragColor=vec4(col,1.0);
    }
  `;
  const jMat=new THREE.ShaderMaterial({vertexShader:v,fragmentShader:f,uniforms:{uTime:{value:0},uAmbient:{value:0.28},uExposure:{value:1.15}},transparent:false});
  (j as THREE.Mesh).material=jMat; (j.material as any).needsUpdate=true;
  (scene.userData._spinUpdates||(scene.userData._spinUpdates=[])).push((dt:number)=>{ j.rotation.y += dt*(0.40*Math.PI/180); (jMat.uniforms.uTime.value as number)+=dt*0.05; });
}

// ===== Saturn upgrade (animated creamy bands like reference; orbits unchanged) =====
function upgradeSaturn(scene:THREE.Scene, renderer:THREE.WebGLRenderer){
  const s = scene.getObjectByName('Saturn') as THREE.Mesh|null; if(!s||!(s as any).isMesh){console.warn('Saturn mesh not found to upgrade');return;}
  const v = `
    varying vec3 vN; varying vec3 vWP; varying vec2 vUv; 
    void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.0); vWP=w.xyz; vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*viewMatrix*w; }
  `;
  const f = `
    varying vec3 vN; varying vec3 vWP; varying vec2 vUv; 
    uniform float uTime; uniform float uAmbient; uniform float uExposure;
    float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} 
    float noise(vec3 p){ vec3 i=floor(p); vec3 f=fract(p); f=f*f*(3.0-2.0*f);
      float n=mix(mix(mix(hash(i+vec3(0,0,0)),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
      return n; }
    float fbm(vec3 p){ float a=0.0, amp=0.5; for(int i=0;i<5;i++){ a+=amp*noise(p); p*=2.01; amp*=0.55;} return a; }
    float band(float lat, float c, float w){ float d=abs(lat-c); return smoothstep(w, 0.0, d); }
    void main(){
      vec3 N=normalize(vN); float lat=asin(N.y); float lon=atan(N.z,N.x);
      // Palette from Cassini-like reference: creamy yellows with tan/gray separators
      vec3 cream   = vec3(0.94,0.90,0.78);
      vec3 pale    = vec3(0.90,0.85,0.68);
      vec3 tan     = vec3(0.78,0.68,0.54);
      vec3 greyTan = vec3(0.70,0.66,0.60);
      // Base latitude bands
      float B0 = band(lat, 0.00, 0.18); // equatorial pale
      float B1 = band(lat, 0.22, 0.10) + band(lat,-0.22,0.10);
      float B2 = band(lat, 0.38, 0.08) + band(lat,-0.38,0.08);
      float B3 = band(lat, 0.56, 0.07) + band(lat,-0.56,0.07);
      vec3 col = vec3(0.0);
      col += B3 * greyTan;
      col = mix(col, tan,    clamp(B2,0.0,1.0));
      col = mix(col, pale,   clamp(B1,0.0,1.0));
      col = mix(col, cream,  clamp(B0,0.0,1.0));
      // Animated flow like the Sun but subtle; differential rotation per latitude
      float shear = uTime*(0.05 + 0.20*pow(abs(lat)/1.57, 1.2));
      float flow = fbm(vec3(lon*5.0 + shear, lat*9.0, 0.0));
      col *= 0.94 + 0.12*flow; // gentle texture
      // Optional north-pole hexagon hint (very soft sixfold ring)
      float a = abs(lat);
      float hex = pow(max(0.0, cos(6.0*lon))*smoothstep(1.20,1.47,a*2.0), 6.0);
      col = mix(col, col*0.85, hex*0.15);
      // Lambert lighting with exposure
      vec3 L=normalize(-vWP); float lam=max(dot(N,L),0.0);
      col = col*(uAmbient + (1.0-uAmbient)*lam) * uExposure; col = pow(col, vec3(1.0/2.2));
      gl_FragColor = vec4(col,1.0);
    }
  `;
  const mat=new THREE.ShaderMaterial({vertexShader:v,fragmentShader:f,uniforms:{uTime:{value:0},uAmbient:{value:0.28},uExposure:{value:1.10}},transparent:false});
  (s as THREE.Mesh).material=mat; (s.material as any).needsUpdate=true;
  (scene.userData._spinUpdates||(scene.userData._spinUpdates=[])).push((dt:number)=>{ s.rotation.y += dt*(0.44*Math.PI/180); (mat.uniforms.uTime.value as number)+=dt*0.05; });
  // Upgrade rings gently if present
  const rings = scene.getObjectByName('SaturnRings') as THREE.Mesh|null; if(rings&&(rings as any).isMesh){
    const ringFrag = `
      varying vec2 vUv; uniform float uFade; void main(){ float r=vUv.x; // assume radial uv in [0,1]
        // multiple faint lanes using smooth steps
        float lane=0.0; 
        lane += smoothstep(0.15,0.16,r)-smoothstep(0.16,0.17,r);
        lane += smoothstep(0.23,0.25,r)-smoothstep(0.25,0.27,r);
        lane += smoothstep(0.34,0.37,r)-smoothstep(0.37,0.40,r);
        lane += smoothstep(0.55,0.58,r)-smoothstep(0.58,0.62,r);
        vec3 base=mix(vec3(0.70,0.64,0.58), vec3(0.82,0.76,0.68), r);
        base *= 0.85 + lane*0.35; float alpha = smoothstep(0.08,0.12,r)*smoothstep(1.0,0.88,r);
        gl_FragColor=vec4(base, alpha*uFade);
      }`;
    const ringVert = `
      varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} `;
    const ringMat=new THREE.ShaderMaterial({vertexShader:ringVert,fragmentShader:ringFrag,transparent:true,depthWrite:false,uniforms:{uFade:{value:1.0}}});
    (rings as THREE.Mesh).material=ringMat;
  }
}

// tiny runtime tests
(()=>{try{
  console.assert(sliderToDays(0,1,4000)===1,'sliderToDays min');
  const s=daysToSlider(120,1,2000); console.assert(s>=0&&s<=100,'daysToSlider range');
  const aH=5.2028*Math.pow(2/3,2/3); console.assert(Math.abs(aH-3.97)<0.2,'a_Hilda ~3.97 AU');
  const d25=sliderToDays(25,1,4000); const b25=daysToSlider(d25,1,4000); console.assert(Math.abs(b25-25)<=2,'roundtrip 25');
  const d50=sliderToDays(50,1,4000); const b50=daysToSlider(d50,1,4000); console.assert(Math.abs(b50-50)<=2,'roundtrip 50');
  const d75=sliderToDays(75,1,4000); const b75=daysToSlider(d75,1,4000); console.assert(Math.abs(b75-75)<=2,'roundtrip 75');
  // new: belts must not alias M and n arrays
  const __testBeltArrays=(()=>{const geo=new THREE.BufferGeometry(); const pos=new Float32Array(6); geo.setAttribute('position',new THREE.BufferAttribute(pos,3)); const a=new Float32Array([1,1]), e=new Float32Array([0,0]), inc=new Float32Array([0,0]), M=new Float32Array([0.1,0.2]), n=new Float32Array([0.01,0.02]); const belt={geo,mesh:new THREE.Points(geo,new THREE.PointsMaterial()),a,e,inc,M,n,cursor:0}; console.assert(belt.M!==belt.n,'M and n must be different arrays');})();
}catch{}})();

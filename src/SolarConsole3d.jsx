import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Solar Harmonics — SafeBoot: Full System + Pluto + Kuiper + Editor Panel
 * ----------------------------------------------------------------------
 * Pure THREE + MeshBasicMaterial (always visible). No drei.
 *
 * Camera (Sun at origin):
 *  • LEFT-DRAG: yaw (horizontal) + tilt (vertical). Pull DOWN ⇒ tilt toward top‑down + zoom out.
 *  • Wheel: zoom in/out. Buttons: Top‑down, Isometric, Fit Inner, Fit Full.
 *
 * Physics upgrade:
 *  • All planets propagate via Kepler elements (a,e,i,M) with μ calibrated so Earth (a=30) has T=365.25 d.
 *  • Orbit Editor applies a tangential Δv factor at the current point **with radial velocity preserved**.
 *    New (a,e) are computed from energy & angular momentum (vis‑viva + h), anomaly picked by sign(vr).
 *  • To avoid "disappearing" bodies, we **cap the ellipse** to the scene radius (r_max ≤ 188) after edits.
 *  • Inclination (tilt) rotates the orbital plane about +X for viz.
 *  • “Reset Last” and “Full Reset” restore baselines.
 *
 * Belts:
 *  • Asteroid belt and Kuiper belt have tunable densities and animate with Keplerian speeds.
 */

export default function SolarHarmonics3D_FullSystem_WithEditor() {
  const mountRef = useRef(null);
  const rafRef = useRef(0);

  // ================= Simulation & UI state =================
  // Sim speed (days of orbital time per real second). We use a **log slider** for better sensitivity.
  const SPEED_MIN = 1;
  const SPEED_MAX = 2000; // user-requested cap (better than 6000 which looked same)
  const [simDaysPerSec, setSimDaysPerSec] = useState(120);
  const [speedSliderPos, setSpeedSliderPos] = useState(() => daysToSlider(120, SPEED_MIN, SPEED_MAX));
  const simDaysPerSecRef = useRef(simDaysPerSec);
  useEffect(() => { simDaysPerSecRef.current = simDaysPerSec; }, [simDaysPerSec]);

  // Belt densities
  const [asteroidCount, setAsteroidCount] = useState(2000);
  const [kuiperCount, setKuiperCount] = useState(2500);
  const asteroidCountRef = useRef(asteroidCount); useEffect(()=>{ asteroidCountRef.current = asteroidCount; },[asteroidCount]);
  const kuiperCountRef = useRef(kuiperCount); useEffect(()=>{ kuiperCountRef.current = kuiperCount; },[kuiperCount]);

  // Camera spherical params
  const yawRef = useRef(-Math.PI / 4);
  const pitchRef = useRef(0.5);
  const distRef = useRef(180);

  // Editor (second window) state
  const PLANET_NAMES = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"];
  const [selected, setSelected] = useState("Earth");
  const [speedFactor, setSpeedFactor] = useState(1.0);    // multiplicative Δv on tangential speed
  const [tiltDeg, setTiltDeg] = useState(0);               // inclination in degrees
  const lastEditedRef = useRef(null);                      // for "Reset Last"

  // Exposed commands for UI buttons
  const cmdsRef = useRef({});

  // Helpers
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const sgn = (x) => (x >= 0 ? 1 : -1);
  const SCENE_R_MAX = 188; // keep inside Fit Full (~190)

  // ================= THREE scaffolding =================
  useEffect(() => {
    const mount = mountRef.current; if (!mount) return;
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Scene & camera
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 10000);
    camera.position.set(0, 0, distRef.current); camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // ----------------- Content (always-visible materials) -----------------
    // Sun
    const sunGeom = new THREE.SphereGeometry(10, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const sun = new THREE.Mesh(sunGeom, sunMat); scene.add(sun);

    // Gravitational parameter μ calibrated to Earth at a=30, T=365.25 days
    const aE = 30; const TE = 365.25; const mu = Math.pow((2*Math.PI)/TE, 2) * Math.pow(aE, 3);

    // Baseline Kepler elements for planets (compact scale)
    // a: semi-major axis (scene units), e: eccentricity, i: inclination (rad), M: mean anomaly (rad)
    const baseline = {
      Mercury: { a: 18,  e: 0.0,    i: 0.00, M: 0.00 },
      Venus:   { a: 24,  e: 0.0,    i: 0.00, M: 0.60 },
      Earth:   { a: 30,  e: 0.0167, i: 0.00, M: 1.20 },
      Mars:    { a: 38,  e: 0.0934, i: 0.00, M: 1.80 },
      Jupiter: { a: 60,  e: 0.0489, i: 0.00, M: 0.25 },
      Saturn:  { a: 80,  e: 0.0565, i: 0.00, M: 1.10 },
      Uranus:  { a: 110, e: 0.0457, i: 0.00, M: 2.00 },
      Neptune: { a: 140, e: 0.0113, i: 0.00, M: 2.70 },
      Pluto:   { a: 170, e: 0.2488, i: 0.00, M: 0.00 },
    };

    // Display radii (visual only)
    const visRadius = {
      Mercury: 1.0, Venus: 1.8, Earth: 2.0, Mars: 1.6,
      Jupiter: 5.0, Saturn: 4.5, Uranus: 3.5, Neptune: 3.2, Pluto: 1.2,
    };
    const colors = {
      Mercury: 0xc9b9a7, Venus: 0xe0c16c, Earth: 0x4da6ff, Mars: 0xff6f50,
      Jupiter: 0xd6a46c, Saturn: 0xf0d9a6, Uranus: 0x84dfff, Neptune: 0x5d8cff, Pluto: 0xaaaaaa,
    };

    // Deep copy into live elements state
    const elements = {}; const baselineCopy = {};
    for (const name of PLANET_NAMES) { elements[name] = { ...baseline[name] }; baselineCopy[name] = { ...baseline[name] }; }

    // Helpers: Kepler solves
    const wrapAngle = (x) => { const t = Math.PI*2; x %= t; return x < 0 ? x + t : x; };
    const solveKeplerE = (M, e) => { let E = e < 0.8 ? M : Math.PI; for (let k=0;k<6;k++){ const f = E - e*Math.sin(E) - M; const fp = 1 - e*Math.cos(E); E -= f/fp; } return E; };
    const trueAnomFromE = (E,e) => { const s=Math.sqrt(1+e), t=Math.sqrt(1-e); return 2 * Math.atan2(s*Math.sin(E/2), t*Math.cos(E/2)); };

    // Convert elements → position in plane (x,z), then rotate about X by i
    function elemsToCartesian(name) {
      const el = elements[name]; const { a, e, i, M } = el;
      const E = solveKeplerE(M, e);
      const x_p = a * (Math.cos(E) - e);
      const y_p = a * Math.sqrt(1 - e*e) * Math.sin(E); // orbital-plane y
      const r = Math.hypot(x_p, y_p);
      const x = x_p; const y = y_p * Math.sin(i); const z = y_p * Math.cos(i);
      return { pos: new THREE.Vector3(x, y, z), r, E };
    }

    // Orbital mechanics helpers
    const speedAt = (a,e,r) => Math.sqrt(mu * (2/r - 1/a));

    // Apply Δv-like speed factor at current point: scale **tangential** component, keep **radial** component
    function applySpeedAndTilt(name, factor, tiltRad) {
      const el = elements[name];
      // Current geometry
      const E = solveKeplerE(el.M, el.e);
      const th = trueAnomFromE(E, el.e);
      const r = el.a * (1 - el.e * Math.cos(E));
      const p_old = el.a * (1 - el.e * el.e);
      const h_old = Math.sqrt(mu * p_old);
      const vt_old = h_old / r;
      const vr_old = (mu / h_old) * el.e * Math.sin(th);

      // New velocity components
      const vt_new = clamp(vt_old * factor, 0.05 * vt_old, 10.0 * vt_old);
      const vr_new = vr_old; // tangential burn only
      const v2 = vt_new*vt_new + vr_new*vr_new;

      // New energy & a (nudge if unbound)
      let eps = 0.5 * v2 - mu / r;
      if (eps >= 0) eps = -1e-9; // keep elliptical
      let a_new = -mu / (2 * eps);

      // New eccentricity from angular momentum
      const h_new = r * vt_new;
      let e_sq = 1 - (h_new*h_new) / (mu * a_new);
      e_sq = clamp(e_sq, 0, 0.999999);
      let e_new = Math.sqrt(e_sq);

      // Cap ellipse to scene to avoid "disappear beyond camera"
      const rmax = a_new * (1 + e_new);
      if (rmax > SCENE_R_MAX) {
        const scale = SCENE_R_MAX / rmax; // uniform scaling of ellipse
        a_new *= scale;
        // e stays the same under uniform scaling
      }

      // Choose new true anomaly f' from r, e', p' and sign(vr)
      const p_new = a_new * (1 - e_sq);
      let cosf = (p_new / r - 1) / e_new;
      if (e_new < 1e-8 || !isFinite(cosf)) { cosf = Math.cos(th); }
      cosf = clamp(cosf, -1, 1);
      const sinf = sgn(vr_new) * Math.sqrt(Math.max(0, 1 - cosf*cosf));
      const f_new = Math.atan2(sinf, cosf);

      // Convert f' → E' → M'
      const beta = Math.sqrt((1 - e_new) / (1 + e_new));
      const E_new = 2 * Math.atan( beta * Math.tan(f_new / 2) );
      const M_new = wrapAngle(E_new - e_new * Math.sin(E_new));

      // Commit
      el.a = a_new; el.e = e_new; el.M = M_new; el.i = tiltRad;
    }

    // Planet meshes and orbit lines
    const planetMeshes = {}; const orbitLines = {};

    function rebuildOrbitLine(name) {
      if (orbitLines[name]) { scene.remove(orbitLines[name]); orbitLines[name].geometry.dispose(); orbitLines[name].material.dispose(); }
      const el = elements[name]; const N = 512; const pts = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const f = (i / N) * Math.PI * 2;
        const r = el.a * (1 - el.e * el.e) / (1 + el.e * Math.cos(f));
        const x_p = r * Math.cos(f); const y_p = r * Math.sin(f);
        const x = x_p; const y = y_p * Math.sin(el.i); const z = y_p * Math.cos(el.i);
        pts[i*3+0] = x; pts[i*3+1] = y; pts[i*3+2] = z;
      }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pts, 3));
      const m = new THREE.LineBasicMaterial({ color: name === 'Pluto' ? 0x8b96a8 : 0x566173 });
      const line = new THREE.LineLoop(g, m); scene.add(line); orbitLines[name] = line;
    }

    // Create planets
    for (const name of PLANET_NAMES) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(visRadius[name], 32, 32),
        new THREE.MeshBasicMaterial({ color: colors[name] })
      );
      const { pos } = elemsToCartesian(name);
      mesh.position.copy(pos);
      planetMeshes[name] = mesh; scene.add(mesh);
      rebuildOrbitLine(name);
    }

    // ================ Belts =================
    // Asteroid belt
    let aObj = null; // {mesh, geo, angle[], period[], r[]}
    function buildAsteroids(count) {
      if (aObj) { scene.remove(aObj.mesh); aObj.geo.dispose(); aObj.mesh.material.dispose(); }
      const innerR = 45, outerR = 55;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const angle = new Float32Array(count);
      const period = new Float32Array(count);
      const r = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        r[i] = innerR + Math.random() * (outerR - innerR);
        angle[i] = Math.random() * Math.PI * 2;
        const T = 365.25 * Math.pow(r[i] / aE, 1.5);
        period[i] = T;
        pos[i*3+0] = Math.cos(angle[i]) * r[i];
        pos[i*3+1] = 0;
        pos[i*3+2] = Math.sin(angle[i]) * r[i];
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color: 0xbec7d5, size: 0.7, sizeAttenuation: true });
      const mesh = new THREE.Points(geo, mat); scene.add(mesh); aObj = { mesh, geo, angle, period, r };
    }

    // Kuiper belt (low-e elliptical orbits)
    let kObj = null; // {mesh, geo, M[], a[], e[], n[], i[]}
    function buildKuiper(count) {
      if (kObj) { scene.remove(kObj.mesh); kObj.geo.dispose(); kObj.mesh.material.dispose(); }
      const innerA = 155, outerA = 190;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const M = new Float32Array(count);
      const a = new Float32Array(count);
      const e = new Float32Array(count);
      const n = new Float32Array(count);
      const inc = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        a[i] = innerA + Math.random() * (outerA - innerA);
        e[i] = Math.random() * 0.1;
        inc[i] = Math.random() * (10 * Math.PI/180); // up to ~10° tilt
        const T = 365.25 * Math.pow(a[i] / aE, 1.5);
        n[i] = (2 * Math.PI) / T;
        M[i] = Math.random() * Math.PI * 2;
        const E0 = solveKeplerE(M[i], e[i]);
        const r0 = a[i] * (1 - e[i] * Math.cos(E0));
        const th0 = trueAnomFromE(E0, e[i]);
        const x_p = r0 * Math.cos(th0); const y_p = r0 * Math.sin(th0);
        pos[i*3+0] = x_p; pos[i*3+1] = y_p * Math.sin(inc[i]); pos[i*3+2] = y_p * Math.cos(inc[i]);
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color: 0x9fc5ff, size: 0.6, sizeAttenuation: true });
      const mesh = new THREE.Points(geo, mat); scene.add(mesh);
      kObj = { mesh, geo, M, a, e, n, inc };
    }

    buildAsteroids(asteroidCountRef.current);
    buildKuiper(kuiperCountRef.current);

    // ================ Interaction: camera (drag orbit + wheel zoom) ================
    let dragging = false, lastX = 0, lastY = 0;
    const onMouseDown = (e) => { if (e.button !== 0) return; dragging = true; lastX = e.clientX; lastY = e.clientY; };
    const onMouseMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX; const dy = e.clientY - lastY; lastX = e.clientX; lastY = e.clientY;
      yawRef.current -= dx * 0.005;                         // yaw
      pitchRef.current = clamp(pitchRef.current + dy * 0.005, 0.0, 1.52); // tilt
      const zoomFactor = 1 + dy * 0.002;                    // coupled zoom
      distRef.current = clamp(distRef.current * zoomFactor, 40, 8000);
    };
    const onMouseUp = () => { dragging = false; };
    const onWheel = (e) => { const f = e.deltaY > 0 ? 1.1 : 0.9; distRef.current = clamp(distRef.current * f, 20, 8000); };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: true });

    // Resize
    const onResize = () => { const w = mount.clientWidth || window.innerWidth; const h = mount.clientHeight || window.innerHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); };
    const ro = new ResizeObserver(onResize); ro.observe(mount);

    // Fit helpers for UI buttons
    cmdsRef.current.fitInner = () => { const R = 45; const f = camera.fov * Math.PI/180; const need = R/Math.tan(f/2)*1.25; distRef.current = clamp(need, 60, 4000); pitchRef.current = 0.8; };
    cmdsRef.current.fitFull  = () => { const R = 190; const f = camera.fov * Math.PI/180; const need = R/Math.tan(f/2)*1.25; distRef.current = clamp(need, 140, 8000); pitchRef.current = 0.9; };
    cmdsRef.current.topDown  = () => { pitchRef.current = 1.45; };
    cmdsRef.current.iso      = () => { pitchRef.current = 0.5; yawRef.current = -Math.PI/4; };

    // ================ Editor actions ================
    function applyEditFor(name, factor, tiltDegrees) {
      const fr = clamp(factor, 0.1, 10.0);            // Δv factor
      const tiltRad = clamp(tiltDegrees, 0, 30) * Math.PI/180;
      applySpeedAndTilt(name, fr, tiltRad);
      rebuildOrbitLine(name);
      const { pos } = elemsToCartesian(name); // snap now to avoid one-frame lag
      planetMeshes[name].position.copy(pos);
      lastEditedRef.current = name;
    }
    cmdsRef.current.applyEditFor = applyEditFor;

    function resetLast() {
      const name = lastEditedRef.current; if (!name) return;
      elements[name] = { ...baselineCopy[name] };
      rebuildOrbitLine(name);
      const { pos } = elemsToCartesian(name);
      planetMeshes[name].position.copy(pos);
    }
    cmdsRef.current.resetLast = resetLast;

    function fullReset() {
      for (const nm of PLANET_NAMES) {
        elements[nm] = { ...baselineCopy[nm] };
        rebuildOrbitLine(nm);
        const { pos } = elemsToCartesian(nm);
        planetMeshes[nm].position.copy(pos);
      }
    }
    cmdsRef.current.fullReset = fullReset;

    // ================ Dev Self-Tests (non-blocking) ================
    try {
      // 1) μ calibration: Earth mean motion ≈ 2π/T
      const nEarth = Math.sqrt(mu / Math.pow(elements.Earth.a,3));
      console.assert(Math.abs(nEarth - (2*Math.PI/TE)) < 1e-4, 'Earth mean motion calibrated');
      // 2) Δv extremes finite & capped inside scene
      const check = (nm, f) => {
        const save = { ...elements[nm] };
        applySpeedAndTilt(nm, f, 0);
        const rmax = elements[nm].a * (1 + elements[nm].e);
        console.assert(Number.isFinite(rmax) && rmax <= SCENE_R_MAX + 1e-6, nm+` rmax<=${SCENE_R_MAX}`);
        elements[nm] = save; // restore
      };
      [0.1, 10].forEach(f => ['Earth','Mars','Pluto'].forEach(nm => check(nm, f)));
      // 3) Slider mapping round-trips endpoints & monotonic
      console.assert(sliderToDays(0, SPEED_MIN, SPEED_MAX) === SPEED_MIN, 'sliderToDays(0)==min');
      console.assert(sliderToDays(100, SPEED_MIN, SPEED_MAX) === SPEED_MAX, 'sliderToDays(100)==max');
      const midDays = sliderToDays(50, SPEED_MIN, SPEED_MAX);
      console.assert(midDays > SPEED_MIN && midDays < SPEED_MAX, 'slider midpoint within range');
      console.log('[Self-Tests] Passed');
    } catch (e) { console.warn('[Self-Tests] Failed', e); }

    // ================ Animation =================
    let last = performance.now();
    const animate = () => {
      const now = performance.now(); const dt = Math.min(0.25, (now - last) / 1000); last = now;
      const daysStep = dt * simDaysPerSecRef.current;

      // Advance mean anomaly for each planet
      for (const name of PLANET_NAMES) {
        const el = elements[name]; const n = Math.sqrt(mu / Math.pow(el.a, 3));
        el.M = (el.M + n * daysStep) % (Math.PI*2);
        const { pos } = elemsToCartesian(name);
        planetMeshes[name].position.copy(pos);
      }

      // Asteroids
      if (aObj) {
        const pos = aObj.geo.getAttribute('position');
        for (let i = 0; i < aObj.angle.length; i++) {
          aObj.angle[i] = (aObj.angle[i] + daysStep * (2*Math.PI / aObj.period[i])) % (Math.PI*2);
          pos.array[i*3+0] = Math.cos(aObj.angle[i]) * aObj.r[i];
          pos.array[i*3+1] = 0; pos.array[i*3+2] = Math.sin(aObj.angle[i]) * aObj.r[i];
        }
        pos.needsUpdate = true;
      }

      // Kuiper
      if (kObj) {
        const pos = kObj.geo.getAttribute('position');
        for (let i = 0; i < kObj.M.length; i++) {
          kObj.M[i] = (kObj.M[i] + kObj.n[i] * daysStep) % (Math.PI*2);
          const Ei = solveKeplerE(kObj.M[i], kObj.e[i]);
          const ri = kObj.a[i] * (1 - kObj.e[i] * Math.cos(Ei));
          const thi = trueAnomFromE(Ei, kObj.e[i]);
          const x_p = ri * Math.cos(thi); const y_p = ri * Math.sin(thi);
          pos.array[i*3+0] = x_p; pos.array[i*3+1] = y_p * Math.sin(kObj.inc[i]); pos.array[i*3+2] = y_p * Math.cos(kObj.inc[i]);
        }
        pos.needsUpdate = true;
      }

      // Camera from spherical
      const r = distRef.current, yaw = yawRef.current, pitch = pitchRef.current;
      const cx = r * Math.cos(pitch) * Math.sin(yaw);
      const cy = r * Math.sin(pitch);
      const cz = r * Math.cos(pitch) * Math.cos(yaw);
      camera.position.set(cx, cy, cz); camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // React to density changes → rebuild belts
    function rebuildBelts() { buildAsteroids(asteroidCountRef.current); buildKuiper(kuiperCountRef.current); }
    cmdsRef.current.rebuildBelts = rebuildBelts;

    // Cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('wheel', onWheel);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) { if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose()); else o.material.dispose(); } });
    };
  }, []);

  // =================== UI Rendering ===================
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', background: '#000', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 8 }}>
      {/* Main viewport */}
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

      {/* Right-hand editor panel (second window) */}
      <div style={{ color: '#e5e7eb', fontFamily: 'system-ui, sans-serif', background: 'rgba(17,24,39,0.7)', border: '1px solid #334155', borderRadius: 10, padding: 12, height: 'calc(100vh - 8px)', overflowY: 'auto' }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>🛠 Orbit Editor</div>

        {/* Simulation speed (log slider) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 48px', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ opacity: 0.9 }}>Orbital Speed (days/sec)</div>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={speedSliderPos}
            onChange={(e)=>{
              const pos = parseInt(e.target.value);
              setSpeedSliderPos(pos);
              const days = sliderToDays(pos, SPEED_MIN, SPEED_MAX);
              setSimDaysPerSec(days);
              simDaysPerSecRef.current = days;
            }}
          />
          <div style={{ textAlign: 'right' }}>{simDaysPerSec}</div>
        </div>

        {/* Fit buttons */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          <button onClick={()=>cmdsRef.current.topDown && cmdsRef.current.topDown()} style={btn}>Top‑down</button>
          <button onClick={()=>cmdsRef.current.iso && cmdsRef.current.iso()} style={btn}>Isometric</button>
          <button onClick={()=>cmdsRef.current.fitInner && cmdsRef.current.fitInner()} style={btnSecondary}>Fit Inner</button>
          <button onClick={()=>cmdsRef.current.fitFull && cmdsRef.current.fitFull()} style={btnSecondary}>Fit Full</button>
        </div>

        {/* Planet selector */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ marginBottom: 6, opacity: 0.9 }}>Planet</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {PLANET_NAMES.map(n => (
              <button key={n} onClick={()=>{ setSelected(n); }} style={{ ...btnTab, ...(selected===n?btnTabActive:{} )}}>{n}</button>
            ))}
          </div>
        </div>

        {/* Per-planet controls */}
        <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #374151' }}>
          <Labeled label="Speed factor (tangential Δv)">
            <input type="range" min={0.1} max={10} step={0.01} value={speedFactor} onChange={(e)=>setSpeedFactor(parseFloat(e.target.value))} style={{ width: '100%' }} />
            <div style={{ width: 60, textAlign: 'right' }}>{speedFactor.toFixed(2)}×</div>
          </Labeled>
          <Labeled label="Tilt / Inclination (deg)">
            <input type="range" min={0} max={30} step={0.5} value={tiltDeg} onChange={(e)=>setTiltDeg(parseFloat(e.target.value))} style={{ width: '100%' }} />
            <div style={{ width: 60, textAlign: 'right' }}>{tiltDeg.toFixed(1)}°</div>
          </Labeled>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button style={btn} onClick={()=>cmdsRef.current.applyEditFor && cmdsRef.current.applyEditFor(selected, speedFactor, tiltDeg)}>Apply</button>
            <button style={btnSecondary} onClick={()=>cmdsRef.current.resetLast && cmdsRef.current.resetLast()}>Reset Last</button>
            <button style={btnSecondary} onClick={()=>cmdsRef.current.fullReset && cmdsRef.current.fullReset()}>Full Reset</button>
          </div>
        </div>

        {/* Belts density */}
        <div style={{ marginTop: 16, paddingTop: 10, borderTop: '1px solid #374151' }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Belts</div>
          <Labeled label="Asteroid Density">
            <input type="range" min={0} max={8000} step={100} value={asteroidCount} onChange={(e)=>{ const v = parseInt(e.target.value); setAsteroidCount(v); asteroidCountRef.current = v; cmdsRef.current.rebuildBelts && cmdsRef.current.rebuildBelts(); }} style={{ width: '100%' }} />
            <div style={{ width: 60, textAlign: 'right' }}>{asteroidCount}</div>
          </Labeled>
          <Labeled label="Kuiper Density">
            <input type="range" min={0} max={8000} step={100} value={kuiperCount} onChange={(e)=>{ const v = parseInt(e.target.value); setKuiperCount(v); kuiperCountRef.current = v; cmdsRef.current.rebuildBelts && cmdsRef.current.rebuildBelts(); }} style={{ width: '100%' }} />
            <div style={{ width: 60, textAlign: 'right' }}>{kuiperCount}</div>
          </Labeled>
        </div>
      </div>
    </div>
  );
}

function Labeled({ label, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <div style={{ opacity: 0.9 }}>{label}</div>
      {children}
    </div>
  );
}

// ---- Slider mapping helpers (log scale) ----
function sliderToDays(pos, min, max) {
  const t = pos / 100; return Math.round(min * Math.pow(max / min, t));
}
function daysToSlider(days, min, max) {
  const t = Math.log(days / min) / Math.log(max / min); return Math.round(clamp01(t) * 100);
}
function clamp01(x){ return Math.max(0, Math.min(1, x)); }

const btn = { padding: '6px 10px', borderRadius: 8, background: '#059669', border: '1px solid #10b981', color: 'white', cursor: 'pointer' };
const btnSecondary = { ...btn, background: '#374151', border: '1px solid #4b5563' };
const btnTab = { padding: '6px 8px', borderRadius: 8, background: '#1f2937', border: '1px solid #374151', color: '#e5e7eb', cursor: 'pointer' };
const btnTabActive = { background: '#059669', border: '1px solid #10b981' };

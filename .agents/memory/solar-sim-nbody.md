---
name: Solar-sim N-body physics engine
description: How the true N-body engine in solar-sim works, its unit system, and the invariants that keep it stable and testable
---

# N-body physics in solar-sim (`src/nbody.ts`)

## Unit system (do not mix with scene units)
Physics runs in **AU / days / solar masses**; in these units G = k² (Gaussian
gravitational constant squared) = **2.959122083e-4** exactly. `AU2U` (=30) in
`SolarConsole3d.tsx` is a *visual* multiplier applied only when writing mesh
positions; nothing in the render path may write back into `NBodySim` state.
Axis map: heliocentric ecliptic (x, y, z) → three.js scene (x, z, y) · AU2U
(scene is Y-up; ecliptic plane = scene X-Z). Rendering is Sun-relative, so the
Sun mesh stays at the scene origin even though the physical Sun wobbles.

## Integrator choice — why Yoshida-4, not leapfrog or RK4
- RK4 is not symplectic: energy drifts secularly, orbits spiral. Never use it here.
- Plain leapfrog (2nd order) is symplectic but its numerical apsidal drift at
  dt=0.25–0.5 d exceeds Mercury's REAL perturbation-driven precession
  (~532″/century), which the sim is supposed to expose.
- 4th-order Yoshida (3 kick-drift-kick stages with weights w1=1/(2−∛2),
  w0=−∛2·w1) at dt ≤ 0.25 d gives energy drift ~3e-11 per century and keeps
  numerical precession far below the physical signal. Substep count per frame
  is capped (maxSteps) so a stalled tab can't freeze the loop.

## Initial conditions without network access
JPL Horizons is blocked in some deployments (agent proxy 403). The fallback —
Standish "Approximate Positions of the Planets" J2000 elements + centennial
rates, evaluated at the epoch and converted to state vectors — is accurate
enough that Pluto–Neptune 3:2 resonance protection *emerges* (min separation
20 AU over 500 yr, resonant angle φ=3λP−2λN−ϖP librating ~[135°,325°]).
After building heliocentric states, shift to the zero-momentum barycentric
frame or the whole system drifts.

## Verification harness (rerun after touching the engine)
`scratchpad verify-nbody.mjs` pattern: bundle `nbody.ts` with esbuild
(`node_modules/.pnpm/esbuild@*/node_modules/esbuild/bin/esbuild --bundle
--format=esm`), then assert: (1) t=0 osculating elements ≈ element table;
(2) energy drift < 1e-8/100 yr; (3) periods — lap-timing only for planets
completing full orbits (partial-sweep extrapolation is biased by Kepler's 2nd
law; use a³ via Kepler 3 for outer planets); (4) Pluto–Neptune min separation
> 12 AU over 500 yr AND Pluto dips inside Neptune's heliocentric distance;
(5) Mercury ϖ advance ≈ 350–750″/cy (window-dependent; osculating rate over
200 yr ≈ 690″/cy is normal — the textbook 532″/cy is a millennial mean).

## Gotchas
- Orbit lines must be *osculating* ellipses recomputed from live state (with
  full Ω/ω orientation), not fixed ellipses; hide the line (`visible=false`)
  when a user Δv makes the state hyperbolic (e ≥ 1) instead of drawing garbage.
- Editing a body's state directly (orbit editor / resets) leaves `NBodySim`'s
  cached accelerations stale — call `sim.computeAccel()` afterwards.
- Belts/Trojans/Hildas stay on decorative Kepler rails (test particles;
  100k-particle true N-body is not browser-feasible at 4000 days/s). Their
  build-time anchor is Jupiter's live true longitude `atan2(y_rel, x_rel)`,
  NOT a Kepler mean-anomaly element (those no longer exist).

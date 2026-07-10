---
name: Solar-sim planet texture CDN sources
description: Which CDNs actually serve loadable, CORS-enabled equirectangular planet textures for the Three.js solar simulation
---

# Planet texture loading in solar-sim

The Three.js solar simulation (`artifacts/solar-sim/src/SolarConsole3d.tsx`) loads planet
surface textures from CDNs at runtime via `loadFirst(urls, onOk)`, with procedural
canvas textures as a last-resort fallback.

## Rule
- **Do NOT use `https://www.solarsystemscope.com/textures/download/<file>` for textures.**
  That endpoint returns `content-type: text/html` (a download landing page, not the image)
  and sends **no `access-control-allow-origin` header**. `TextureLoader` silently fails on it,
  so planets fall back to procedural/disk-photo textures and look broken.
- **Use jsdelivr-served GitHub repos for equirectangular maps** — they return real JPEGs with
  `access-control-allow-origin: *`. Verified working base:
  `https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/`
  with files: `mercurymap.jpg`, `venusmap.jpg`, `marsmap1k.jpg`, `jupitermap.jpg`,
  `saturnmap.jpg`, `plutomap1k.jpg`. (`uranusmap.jpg`/`neptunemap.jpg` exist there too but are
  tiny/near-flat — see "Gas-giant procedural textures" below; they are generated procedurally instead.)
- Earth uses `https://cdn.jsdelivr.net/npm/three-globe@.../example/img/earth-day.jpg` (also CORS-ok).

## Why
**Why:** Browser texture loading needs both (a) actual image bytes and (b) a permissive CORS
header because `TextureLoader.crossOrigin='anonymous'`. The solarsystemscope download URLs fail
both. This was non-obvious: the URLs return HTTP 200, so they look fine until you check
`content-type` and CORS headers with `curl -I -H "Origin: ..."`.

## How to apply
- Before adding any planet/texture CDN URL, verify with:
  `curl -sI -H "Origin: https://example.com" "<url>" | grep -iE "content-type|access-control-allow-origin"`
  Require `content-type: image/*` AND `access-control-allow-origin`.
- Disk/"true color" planet photos (a round planet on a black background, e.g. bundled
  `@assets/Mars_*.jpg`) are NOT equirectangular — UV-mapping them onto a sphere produces a
  "big hole"/black void. Only use equirectangular maps for sphere textures.

## Material note
Non-Earth planets use `MeshBasicMaterial` (unlit, shows texture directly). They do NOT depend on
scene lights — the scene's `PointLight` has quadratic decay and is effectively zero at orbital
distances, so `MeshStandardMaterial` rendered them black. Earth alone uses a custom ShaderMaterial.

## Gas-giant procedural textures beat the tiny CDN maps (Uranus/Neptune)
The threex.planets `uranusmap.jpg` (~8KB) and `neptunemap.jpg` (~48KB) are near-flat/low-res.
Real Uranus/Neptune photos are nearly featureless anyway, so hand-built procedural canvas
textures (latitudinal gradient + wavy bands + cloud streaks; Neptune adds a Great Dark Spot)
look better and are 100% CORS-reliable. These two are now generated procedurally and are NOT in
`CDN_TEX_URLS`. Jupiter/Saturn/Pluto still load real CDN maps over a procedural fallback.
**Why:** real textures only beat procedural when they carry real detail; for featureless gas
giants a tiny photo is worse than a crafted procedural.

## Equirectangular procedural seam rule
For a procedural texture mapped onto a sphere (full longitude wrap), any sine wave drawn across
the canvas width must use an **even** multiple of π — `Math.sin(px/w * Math.PI * N + phase)` with
N even — so the value at px=0 equals the value at px=w. An odd N leaves a visible seam at the
longitude wrap. (Bands are full-width rectangles so they wrap fine; only per-stroke wavy lines hit this.)

## Pluto "invisible" was a render-size issue, not a texture bug
`plutomap1k.jpg` loads fine. Pluto looked "non-existent" because its visual radius (R) was the
smallest body, so at the only zoom where its far orbit is in frame (full-system view) it rendered
sub-pixel while the gas giants (R 3.1–5.6) were visible. Fix was to bump Pluto's R and add a faint
additive atmosphere haze (also realistic — New Horizons blue haze) so it reads at distance.
**Why:** camera far plane is huge (120000), so it was never clipping — pure on-screen pixel size.

## Matching planets to user-supplied "satellite photos"
When the user hands you a planet photo (a round disk on black), it is NOT equirectangular and
must NOT be UV-mapped onto a sphere (produces a black void / warp). Instead sample its real colors
and bake them into the procedural equirectangular generator:
- Sample colors with ImageMagick: `magick img -crop WxH+X+Y +repage -resize 1x1 txt:-` then grep
  `#RRGGBB`. Walk down the central meridian to read the latitude color profile.
- Build a **symmetric** pole→equator→pole gradient. Do NOT copy the photo's day/night terminator
  darkening — outer planets render with unlit `MeshBasicMaterial`, so the map must be uniformly lit.
- The Keck/Voyager Uranus reference is a **saturated teal-cyan** (~#0a9ac0), not the pale baby-blue
  most people expect. Neptune is deep cobalt (~#3a53d4 equator) with dark-navy poles (~#222a63).

## Saturn ring proportions (measured from a reference photo)
Real ratio: ring outer edge (A ring) ≈ **2.27 × planet radius**; visible inner edge (C ring) ≈ 1.2 R.
Measure a reference photo with `magick saturn -fuzz 12% -trim`: content width ≈ ring outer diameter,
content height ≈ planet polar diameter, so width/height ≈ outer/R (came out ~2.27, confirming real).
The ring strip is modeled across u 0→1 (the radial UV remap `u=(radius-inner)/(outer-inner)`) as:
faint C ring → bright dense B ring → Cassini Division gap (~u 0.70–0.77) → A ring (+ Encke gap).

## Dimming unlit outer planets
Outer planets use `MeshBasicMaterial` (unlit) so they render full-bright and look self-illuminated
("as bright as the Sun"). To dim without switching to a lit material (the scene PointLight is ~0 at
those distances), set `material.color.setScalar(k)` with k<1 — it multiplies the map, including any
CDN texture swapped in asynchronously later. ~0.82 ≈ 18% dimmer. Keep Pluto lighter (~0.90) so the
hard-won visibility fix above isn't undone.

## Making a ring look vertical (Uranus) — tilt the whole body, not just the ring
A planet's rings appear vertical because the planet is tipped on its side (Uranus obliquity ~98°).
Build the ring in the planet's equatorial plane exactly like Saturn (RingGeometry, radial UV remap,
ring mesh `rotation.x = PI/2`), then tilt the **whole planet mesh** by the obliquity
(`m.rotation.z = degToRad(97.77)`). The ring is a child of the body, so it tips with it and stands
vertical — and the body's bands/poles stay aligned with the ring (physically correct). Do NOT tilt
only the ring (bands would then disagree with the ring).
**Why it's safe here:** the animation loop never overwrites `.rotation`, so a body tilt persists
frame-to-frame. Spin DOES exist since the double-click focus feature: the focused body spins via
`obj.rotateY()`, which rotates about the body's LOCAL (i.e. tilted) pole — exactly the safe way —
so the equatorial ring spins about its own symmetry axis and cannot wobble. Keep any future spin
on the local axis (`rotateY`/child group), never by writing world-frame Euler angles.
**Uranus ring look:** the rings are dark and narrow; only the outer epsilon ring reads bright. Keep
the broad annulus baseline alpha very low (~0.02) or it looks like a ghost disk instead of a thin ring.

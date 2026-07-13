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
  with files: `venusmap.jpg`, `marsmap1k.jpg`, `jupitermap.jpg` (the three used).
  Mercury, Saturn (body AND rings), Uranus, Neptune are hand-built procedural maps modeled
  on NASA reference photos (MESSENGER enhanced color / Cassini portrait / Keck / Voyager 2)
  — the CDN versions of those looked worse and must NOT be re-added as overrides,
  since `loadFirst` would clobber the procedurals asynchronously. Pluto uses a BUNDLED
  real New Horizons map (see "Pluto real map" section below). Venus is the exception: the USER
  PREFERS the classic creamy cloud-deck look (CDN venusmap over a matching cloudy procedural
  fallback), NOT the Magellan radar surface — don't bring the orange radar Venus back.

## Belt/flare particles must depth-test (planets looked transparent)
The belt Points shader and the sun-flare sprites originally used `depthTest:false`, which drew
Kuiper/asteroid particles and flares ON TOP of planet disks even when they were behind them —
users read this as "the planets are semi-transparent." Keep `depthTest:true` (with
`depthWrite:false` so translucent particles still blend among themselves). Never disable depth
testing on anything that can overlap a planet disk. Same family of issue: additive atmosphere
halo shells read as "rings" on small bodies — Venus and Pluto must have NO ATMO_PARAMS entry.
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
`CDN_TEX_URLS`. Jupiter still loads a real CDN map over a procedural fallback. Pluto is also
fully procedural now (New Horizons look: Sputnik heart, Cthulhu Macula, gold north, craters,
fracture troughs) — the 1k CDN plutomap was far below the user's requested quality.
**Why:** real textures only beat procedural when they carry real detail; for featureless gas
giants a tiny photo is worse than a crafted procedural.

## Uranus is a TRUE-COLOR composite now (pale haze-muted cyan) — not saturated teal
Uranus works like Pluto/Neptune: bundled real 4k map (`public/textures/uranus_4k.jpg`, from
CelestiaContent `textures/hires/uranus.jpg`) composited by
`texture-tools/composite-uranus-map.cjs` with muted upper-atmosphere features the user asked
for: subtle zonal bands, polar collar, bright methane clouds, and the 2006 HST Uranus Dark Spot
(~27°N). Rendered with the shared LIMB ShaderMaterial; uranusProc fallback retinted to the same
pale palette. The old "saturated teal-cyan (~#0a9ac0)" guidance is superseded for Uranus's own
map. Rings and the 97.77° obliquity tilt are untouched — the ring is separate child geometry,
so material swaps don't affect it.

## Neptune is TRUE-COLOR now (pale milky cyan) — not cobalt
The user asked for the "current true color best guess" Neptune (the modern reprocessing of
Voyager 2 data — pale milky cyan like Uranus) with the Great Dark Spot, Small Dark Spot,
Scooter and cirrus visible. Neptune now works exactly like Pluto: bundled real 4k map
(`public/textures/neptune_4k.jpg`, from CelestiaContent `textures/hires/neptune.jpg`, graded by
`texture-tools/grade-neptune-map.cjs`) loaded over the neptuneProc() fallback, rendered with the
shared LIMB ShaderMaterial (uDim 1.0). neptuneProc's palette was retinted to the same pale
true-color so the fallback doesn't flash cobalt. Do NOT restore the deep-cobalt palette
(~#3a53d4) — the old "Neptune is deep cobalt (~#3a53d4)" guidance elsewhere in this file is
superseded for Neptune's own map (it still describes the classic press-photo look).

## Pluto real map: bundle same-origin, don't revert to procedural
The user rejected the procedural Pluto as "N64 graphics" and asked to match the NH
enhanced-color portrait. Pluto now loads `public/textures/pluto_4k.jpg` — the REAL New
Horizons 4k mosaic (CelestiaContent `textures/hires/pluto.jpg`, NASA/JHUAPL/SwRI data),
color-graded by `texture-tools/grade-pluto-map.cjs` (params in its header) because the raw
Celestia map is washed-out beige. It loads via `loadFirst([BASE_URL + 'textures/pluto_4k.jpg'])`
over the plutoProc() fallback. The anti-encounter hemisphere of the real mosaic is
genuinely blurry (NH never imaged it up close — the user flagged it as "blurry mess");
it's filled by `texture-tools/enhance-pluto-farside.cjs`, which transplants real
high-pass detail patches from the sharp hemisphere, class-matched by terrain type
(params in its header). Re-run grade → enhance if the texture is ever regenerated. **Bundling in public/ serves same-origin and sidesteps the CORS
problem entirely** — this is the preferred pattern for any future real-map upgrade (deploy
copies dist/public → repo root, so the file ships with the site). Do NOT go back to a
procedural-only Pluto and do NOT try CDN URLs for it.
- LIMB shader now shades with a view-space key light from the viewer's upper-left
  (`normalize(vec3(-0.48,0.40,0.62))`, smoothstep(-0.05,0.60) day term, ambient 0.12,
  limb mix(0.60,1.0,pow(n.z,0.5))), matching the NH portrait's terminator. uDim is 1.0 now;
  the directional term does the dimming. Radial-only limb darkening looked like a flat full moon.
- `loadFirst` sets `tex.anisotropy = renderer.capabilities.getMaxAnisotropy()` on every
  loaded texture, and planet spheres are SphereGeometry(R,128,64) — 64 segments faceted the
  limb of a focused planet. Keep both.
- Only GitHub domains are reachable from the remote-session sandbox (raw.githubusercontent.com
  works; NASA/USGS/wikimedia/jsdelivr are proxy-blocked, and in-browser CDN loads fail there
  too, so planets fall back to procedurals in sandbox screenshots — that's a sandbox artifact,
  not a production bug).

## Custom ShaderMaterial output MUST end with the tonemapping/colorspace chunks
Pluto's limb-darkening `ShaderMaterial` initially rendered the authored texture far too dark:
raw ShaderMaterial writes gl_FragColor as-is, skipping the ACES tone map + linear→sRGB output
encode that built-in materials (MeshBasicMaterial) append. Since the sampled sRGB texture is
hardware-decoded to LINEAR, the un-encoded output loses the gamma curve entirely. Fix: end the
fragment shader with `#include <tonemapping_fragment>` and `#include <colorspace_fragment>`
(three r154+ chunk names) so the pipeline matches the built-ins and authored colors survive.
The existing Earth/LIT shaders don't include them — their textures were tuned under that darker
pipeline and the user approved the look, so leave them alone; use the chunks for NEW shaders.

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

## Venus must have NO atmosphere glow shell
Venus's additive BackSide atmosphere halo (formerly opacity 0.55, scale 1.06) read as a bright
RING around the planet disk and the user asked for it to be removed. Do not re-add a Venus entry
to ATMO_PARAMS. If Venus ever needs an atmosphere effect, it must be surface-level (baked into
the texture), not a rim-glow shell.

## Seam-safe procedural detail (the `mkNoise`/`wrapX` helpers)
The reference-photo procedurals get organic mottling from summed sinusoids whose LONGITUDE
frequency is an integer (`mkNoise`) — that generalizes the even-multiple-of-π seam rule to
noise. Any canvas stroke/blob that could cross the x seam is drawn via `wrapX` (paints at
x-offsets −w, 0, +w). Per-pixel bases are computed at 256×128 and upscaled with smoothing;
avoid hard thresholds in per-pixel code (they upscale into blocky edges — use a smoothstep,
as the Venus radar-dark plains do). Craters/spots must stretch their x-radius by 1/cos(lat)
to stay round on the sphere.

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
CDN texture swapped in asynchronously later. ~0.82 ≈ 18% dimmer. Pluto's ShaderMaterial has a
`uDim` uniform, now 1.0 — its directional key-light shading (see "Pluto real map") provides
the dimming instead.

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

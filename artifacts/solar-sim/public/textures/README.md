# Bundled planet textures

## saturn_4k.jpg

Saturn global map (4096×2048 equirectangular) in true color.

- **Source imagery:** NASA/JPL/SSI — Cassini (2004–2017).
- **Map assembly:** the Celestia project's 4k Saturn texture
  (<https://github.com/CelestiaProject/CelestiaContent>, `textures/hires/saturn.jpg`).
- **Processing:** graded for this app — band-definition unsharp, gentle
  band-deepening S-curve + gamma tuned for the ACES render pipeline, subtle
  wind-streak turbulence. Tool:
  `artifacts/solar-sim/texture-tools/grade-saturn-map.cjs`.
- The ring system is separate geometry in the app (procedural, modeled on the
  Cassini portrait) and is unaffected.

## mercury_4k.jpg

Mercury global map (4096×2048 equirectangular) in MESSENGER enhanced color.

- **Source imagery:** NASA/JHUAPL/Carnegie — MESSENGER MDIS global mosaic,
  via the Celestia project's 4k grey Mercury texture
  (<https://github.com/CelestiaProject/CelestiaContent>, `textures/hires/mercury.jpg`).
- **Processing:** colorized toward the famous MDIS *enhanced-color* global
  mosaic (true-color Mercury is nearly moon-grey): terrain classes derived
  from the real geography (large-scale brightness + crater-ray energy) drive
  the palette — indigo low-reflectance material, violet-grey midtones,
  tan-orange high-reflectance plains, cyan-white fresh rays — plus pole-edge
  cleanup of projection artifacts. The hues are representative of the
  enhanced-color product, not true color. Tool:
  `artifacts/solar-sim/texture-tools/colorize-mercury-map.cjs`.

## uranus_4k.jpg

Uranus global map (4096×2048 equirectangular) in true color — a composite.

- **Base:** the Celestia project's 4k Uranus texture
  (<https://github.com/CelestiaProject/CelestiaContent>, `textures/hires/uranus.jpg`),
  which follows the true-color, haze-muted pale-cyan appearance (Voyager 2 /
  modern reprocessing) with the grey north polar hood.
- **Composited upper-atmosphere features** (guided by HST and Keck imagery,
  kept muted beneath the haze as in reality): subtle zonal bands, a polar
  collar, discrete bright methane storm clouds at mid-latitudes, and the
  Uranus Dark Spot (the dark vortex imaged by Hubble in 2006, ~27°N). These
  features are representative composites, not a single-epoch photograph —
  no true-color full-map photo of them exists.
- Tool: `artifacts/solar-sim/texture-tools/composite-uranus-map.cjs`.
- The ring system is separate geometry in the app and is unaffected.

## neptune_4k.jpg

Neptune global map (4096×2048 equirectangular) in modern TRUE color.

- **Source imagery:** NASA/JPL — Voyager 2 (1989 flyby), the only close-up
  imagery of Neptune that exists.
- **Map assembly:** the Celestia project's 4k Neptune texture
  (<https://github.com/CelestiaProject/CelestiaContent>, `textures/hires/neptune.jpg`),
  which already reflects the modern true-color reprocessing (pale milky cyan,
  not the saturated cobalt of the classic press images) and carries the
  Great Dark Spot with companion clouds, the Small Dark Spot (D2), the
  "Scooter", and cirrus streaks.
- **Processing:** graded for this app — slight green shift toward the
  true-color portrait, high-pivot S-curve to deepen the dark spots, unsharp
  on the bands/cirrus, and subtle horizontal wind-streak turbulence for
  close-zoom definition. Tool:
  `artifacts/solar-sim/texture-tools/grade-neptune-map.cjs`.

## pluto_4k.jpg

Real New Horizons global mosaic of Pluto (4096×2048 equirectangular).

- **Source imagery:** NASA / Johns Hopkins University Applied Physics Laboratory /
  Southwest Research Institute — New Horizons LORRI + Ralph/MVIC global mosaic
  (July 2015 flyby data).
- **Map assembly:** the Celestia project's 4k Pluto texture
  (<https://github.com/CelestiaProject/CelestiaContent>, `textures/hires/pluto.jpg`).
- **Processing:** color-graded for this app to match the NH enhanced-color
  full-disk portrait (rust maculae, cream nitrogen ice), plus low-amplitude
  mottling over the unimaged southern fill. Tool:
  `artifacts/solar-sim/texture-tools/grade-pluto-map.cjs`.
- **Far-side detail synthesis:** New Horizons only imaged one hemisphere at
  high resolution; the anti-encounter side of the real mosaic is blurry. That
  half is filled with high-frequency detail transplanted from the sharp
  hemisphere (class-matched: crater/fracture texture onto dark terrain,
  subtle texture onto bright ice). The synthesized detail is plausible, not
  real topography. Tool:
  `artifacts/solar-sim/texture-tools/enhance-pluto-farside.cjs`.

Bundled same-origin because the CDN texture hosts previously used by this app
either block CORS or serve HTML at image URLs (see
`.agents/memory/solar-sim-textures.md`).

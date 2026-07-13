# Bundled planet textures

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

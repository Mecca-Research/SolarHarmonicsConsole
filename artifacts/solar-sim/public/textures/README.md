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

Bundled same-origin because the CDN texture hosts previously used by this app
either block CORS or serve HTML at image URLs (see
`.agents/memory/solar-sim-textures.md`).

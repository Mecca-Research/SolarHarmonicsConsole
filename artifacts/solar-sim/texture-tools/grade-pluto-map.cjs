// Color-grade the Celestia New Horizons Pluto map toward the enhanced-color
// NH full-disk portrait: rich rust maculae, bright cream Sputnik ice,
// saturation + contrast lift, plus gentle mottle over the flat unimaged south.
//
// Usage (needs `npm i sharp` wherever you run it):
//   node grade-pluto-map.cjs <input.jpg> <output.jpg> '<params-json>'
// public/textures/pluto_4k.jpg was produced from CelestiaContent
// textures/hires/pluto.jpg with:
//   '{"sat":1.8,"satHi":1.18,"rust":0.6,"contrast":0.15,"gamma":1.08,
//     "whiten":0.32,"highDamp":0.075}'
const sharp = require('sharp');

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const sstep = (e0, e1, v) => { const t = clamp((v - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };

// Seamless-in-x value noise (lattice width divides the period).
function mkNoise(seed, fx, fy) {
  const hash = (i, j) => {
    let h = (i * 374761393 + j * 668265263 + seed * 2246822519) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return (((h ^ (h >>> 16)) >>> 0) / 4294967295);
  };
  return (u, v) => {
    const x = ((u % 1) + 1) % 1 * fx, y = v * fy;
    const i = Math.floor(x), j = Math.floor(y);
    const fxr = x - i, fyr = y - j;
    const sx = fxr * fxr * (3 - 2 * fxr), sy = fyr * fyr * (3 - 2 * fyr);
    const i1 = (i + 1) % fx;
    return lerp(lerp(hash(i, j), hash(i1, j), sx), lerp(hash(i, j + 1), hash(i1, j + 1), sx), sy) - 0.5;
  };
}

async function main() {
  const src = sharp(process.argv[2] || 'celestia_pluto.jpg');
  const { width: W, height: H } = await src.metadata();
  const buf = await src.raw().toBuffer(); // RGB
  const out = Buffer.alloc(buf.length);

  const P = JSON.parse(process.argv[4] || '{}');
  const SAT = P.sat ?? 1.9;            // saturation boost
  const SHADOW_RUST = P.rust ?? 0.55;  // strength of rust push in darks
  const CONTRAST = P.contrast ?? 0.16; // S-curve amount
  const GAMMA = P.gamma ?? 1.0;
  // Rust target for the dark maculae (enhanced-color Cthulhu)
  const RT = P.rustTarget ?? [128, 52, 30];

  const n1 = mkNoise(7, 24, 12), n2 = mkNoise(13, 96, 48), n3 = mkNoise(29, 8, 4);

  for (let y = 0; y < H; y++) {
    const v = y / H;
    // south unimaged-fill mottle weight (map blurs out below ~v 0.66)
    const southW = sstep(0.66, 0.80, v);
    for (let x = 0; x < W; x++) {
      const o = 3 * (y * W + x);
      let r = buf[o] / 255, g = buf[o + 1] / 255, b = buf[o + 2] / 255;

      // gentle multi-scale mottle over the flat south fill so it reads as
      // terrain seen at low resolution instead of a paint fill
      if (southW > 0) {
        const u = x / W;
        const m = n1(u, v) * 0.045 + n2(u, v) * 0.02 + n3(u, v) * 0.05;
        const k = 1 + m * southW;
        r *= k; g *= k; b *= k * (1 - 0.15 * southW * Math.max(0, m)); // warm the bright mottle slightly
      }

      // luminance
      let L = 0.299 * r + 0.587 * g + 0.114 * b;

      // shadow rust tint: darks pull toward enhanced-color rust
      const w = Math.pow(1 - L, 2.2) * SHADOW_RUST;
      r = lerp(r, RT[0] / 255, w * clamp((RT[0] / 255) / Math.max(0.02, L * 1.15), 0, 1.6) * 0.65);
      g = lerp(g, (RT[1] / 255) * (L / 0.35), w);
      b = lerp(b, (RT[2] / 255) * (L / 0.35), w * 1.1);

      // saturation boost around luminance — strong in the dark maculae,
      // gentle in the bright ices so the heart/north stay cream-white
      L = 0.299 * r + 0.587 * g + 0.114 * b;
      const satL = lerp(SAT, P.satHi ?? 1.12, sstep(0.42, 0.78, L));
      r = L + (r - L) * satL; g = L + (g - L) * satL; b = L + (b - L) * satL;

      // very bright ice pulls toward clean neutral white
      const wh = sstep(0.80, 0.97, L) * (P.whiten ?? 0.45);
      r = lerp(r, L, wh); g = lerp(g, L, wh); b = lerp(b, L, wh);

      // contrast S-curve on each channel, pivot 0.55
      const piv = 0.55;
      r = piv + (r - piv) * (1 + CONTRAST) + CONTRAST * 0.5 * Math.sin((r - piv) * Math.PI) * 0;
      g = piv + (g - piv) * (1 + CONTRAST);
      b = piv + (b - piv) * (1 + CONTRAST);

      if (GAMMA !== 1) { r = Math.pow(clamp(r, 0, 1), GAMMA); g = Math.pow(clamp(g, 0, 1), GAMMA); b = Math.pow(clamp(b, 0, 1), GAMMA); }

      // highlight shoulder: ACES + exposure 1.4 in the renderer clips paper
      // whites — pull the brightest ice down to ivory so cell texture survives
      const hd = P.highDamp ?? 0.0;
      if (hd > 0) {
        const L2 = 0.299 * r + 0.587 * g + 0.114 * b;
        const d = sstep(0.72, 1.0, L2) * hd;
        r -= d; g -= d; b -= d * 0.9;
      }

      out[o] = clamp(Math.round(r * 255), 0, 255);
      out[o + 1] = clamp(Math.round(g * 255), 0, 255);
      out[o + 2] = clamp(Math.round(b * 255), 0, 255);
    }
  }

  await sharp(out, { raw: { width: W, height: H, channels: 3 } })
    .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
    .toFile(process.argv[3] || 'pluto_graded.jpg');
  console.log('wrote', process.argv[3] || 'pluto_graded.jpg', W + 'x' + H);
}
main().catch(e => { console.error(e); process.exit(1); });

// Grade the Celestia Neptune map toward the modern true-color reprocessing of
// the Voyager 2 data (pale milky cyan) while deepening the Great/Small Dark
// Spots and crisping bands/cirrus for close-zoom definition.
//
// Usage (needs `npm i sharp` wherever you run it):
//   node grade-neptune-map.cjs <input.jpg> <output.jpg> '<params-json>'
// public/textures/neptune_4k.jpg was produced from CelestiaContent
// textures/hires/neptune.jpg with:
//   '{"contrast":0.36,"grain":0.005,"streak":0.018}'
const sharp = require('sharp');

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const sstep = (e0, e1, v) => { const t = clamp((v - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };

function boxBlur(src, W, H, r, passes = 3) {
  let a = Float32Array.from(src), b = new Float32Array(W * H);
  for (let p = 0; p < passes; p++) {
    for (let y = 0; y < H; y++) {
      let acc = 0; const row = y * W;
      for (let i = -r; i <= r; i++) acc += a[row + ((i % W) + W) % W];
      for (let x = 0; x < W; x++) {
        b[row + x] = acc / (2 * r + 1);
        acc += a[row + (((x + r + 1) % W) + W) % W] - a[row + (((x - r) % W) + W) % W];
      }
    }
    for (let x = 0; x < W; x++) {
      let acc = 0;
      for (let i = -r; i <= r; i++) acc += b[clamp(i, 0, H - 1) * W + x];
      for (let y = 0; y < H; y++) {
        a[y * W + x] = acc / (2 * r + 1);
        acc += b[clamp(y + r + 1, 0, H - 1) * W + x] - b[clamp(y - r, 0, H - 1) * W + x];
      }
    }
  }
  return a;
}

// seamless-in-x value noise
function mkNoise(seed, fx, fy) {
  const hash = (i, j) => {
    let h = (i * 374761393 + j * 668265263 + seed * 2246822519) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return (((h ^ (h >>> 16)) >>> 0) / 4294967295);
  };
  return (u, v) => {
    const x = (((u % 1) + 1) % 1) * fx, y = v * fy;
    const i = Math.floor(x), j = Math.floor(y);
    const fx2 = x - i, fy2 = y - j;
    const sx = fx2 * fx2 * (3 - 2 * fx2), sy = fy2 * fy2 * (3 - 2 * fy2);
    const i1 = (i + 1) % fx;
    return lerp(lerp(hash(i, j), hash(i1, j), sx), lerp(hash(i, j + 1), hash(i1, j + 1), sx), sy) - 0.5;
  };
}

async function main() {
  const IN = process.argv[2] || 'celestia_neptune.jpg';
  const OUT = process.argv[3] || 'neptune_graded.jpg';
  const P = JSON.parse(process.argv[4] || '{}');

  const img = sharp(IN);
  const { width: W, height: H } = await img.metadata();
  const rgb = await img.raw().toBuffer();
  const N = W * H;

  const Lsrc = new Float32Array(N);
  for (let i = 0; i < N; i++) Lsrc[i] = (0.299 * rgb[3 * i] + 0.587 * rgb[3 * i + 1] + 0.114 * rgb[3 * i + 2]) / 255;
  // large-radius blur for unsharp masking (bands/spots live at low frequency)
  const Lblur = boxBlur(Lsrc, W, H, P.usmR ?? 20, 2);

  // wind-streak cells must be WIDER than tall (map is 2:1, so fx/W << fy/H)
  const nStreak = mkNoise(11, 128, 340);  // ~32px wide, ~6px tall cells
  const nFine = mkNoise(23, 1024, 512);   // isotropic micro grain (4px cells)
  const USM = P.usm ?? 0.5;               // unsharp amount (definition)
  const PIVOT = P.pivot ?? 0.80, CONTRAST = P.contrast ?? 0.30; // deepen dark spots
  const BR = P.bright ?? 1.05, GSHIFT = P.gshift ?? 1.014, BSHIFT = P.bshift ?? 0.982;

  const out = Buffer.alloc(N * 3);
  for (let y = 0; y < H; y++) {
    const v = y / H;
    // reference portrait: northern half reads slightly brighter/milkier
    const northLift = 1 + 0.035 * sstep(0.55, 0.15, v);
    for (let x = 0; x < W; x++) {
      const i = y * W + x, u = x / W;
      let r = rgb[3 * i] / 255, g = rgb[3 * i + 1] / 255, b = rgb[3 * i + 2] / 255;

      // definition: unsharp on luminance, applied hue-preserving
      const d = (Lsrc[i] - Lblur[i]) * USM;
      const l0 = Math.max(Lsrc[i], 0.05);
      r += d * (r / l0); g += d * (g / l0); b += d * (b / l0);

      // gentle S-curve pivoted high: pale disk stays pale, dark spots deepen
      const L = 0.299 * r + 0.587 * g + 0.114 * b;
      const k = 1 + CONTRAST * (PIVOT - L);
      const dark = clamp((PIVOT - L) * CONTRAST * 1.35, 0, 0.5);
      r = r * k * (1 - dark * 0.10); // spots go slightly steel-blue, not black
      g = g * k * (1 - dark * 0.04);
      b = b * k;

      // true-color cast: a touch greener/less blue, overall milky lift
      r *= BR * northLift; g *= BR * GSHIFT * northLift; b *= BR * BSHIFT * northLift;

      // subtle wind-streak turbulence + micro grain for close-zoom life
      const t = 1 + nStreak(u, v) * (P.streak ?? 0.02) + nFine(u, v) * (P.grain ?? 0.008);
      r *= t; g *= t; b *= t;

      out[3 * i] = clamp(Math.round(r * 255), 0, 255);
      out[3 * i + 1] = clamp(Math.round(g * 255), 0, 255);
      out[3 * i + 2] = clamp(Math.round(b * 255), 0, 255);
    }
  }
  await sharp(out, { raw: { width: W, height: H, channels: 3 } })
    .jpeg({ quality: 88, chromaSubsampling: '4:4:4' }).toFile(OUT);
  console.log('wrote', OUT, W + 'x' + H);
}
main().catch(e => { console.error(e); process.exit(1); });

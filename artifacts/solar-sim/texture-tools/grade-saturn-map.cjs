// Grade the Celestia (Cassini-based) Saturn map toward the true-color
// portrait: keep the creamy pale gold, deepen band definition, add subtle
// wind-streak texture for close-zoom life.
//
// Usage (needs `npm i sharp`): node grade-saturn-map.cjs <in.jpg> <out.jpg> "<params-json>"
// public/textures/saturn_4k.jpg was produced from CelestiaContent
// textures/hires/saturn.jpg with default params ("{}").
const sharp = require('sharp');

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

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
  const IN = process.argv[2] || 'celestia_saturn.jpg';
  const OUT = process.argv[3] || 'saturn_graded.jpg';
  const P = JSON.parse(process.argv[4] || '{}');
  const img = sharp(IN);
  const { width: W, height: H } = await img.metadata();
  const rgb = await img.raw().toBuffer();
  const N = W * H;

  const L = new Float32Array(N);
  for (let i = 0; i < N; i++) L[i] = (0.299 * rgb[3 * i] + 0.587 * rgb[3 * i + 1] + 0.114 * rgb[3 * i + 2]) / 255;
  const Lb = boxBlur(L, W, H, P.usmR ?? 16, 2);

  const nStreak = mkNoise(19, 128, 340);
  const USM = P.usm ?? 0.45, GAMMA = P.gamma ?? 1.06, SAT = P.sat ?? 1.12;
  const PIVOT = P.pivot ?? 0.72, CON = P.contrast ?? 0.12;

  const out = Buffer.alloc(N * 3);
  for (let y = 0; y < H; y++) {
    const v = y / H;
    for (let x = 0; x < W; x++) {
      const i = y * W + x, u = x / W;
      let r = rgb[3 * i] / 255, g = rgb[3 * i + 1] / 255, b = rgb[3 * i + 2] / 255;

      const d = (L[i] - Lb[i]) * USM;
      const l0 = Math.max(L[i], 0.05);
      r += d * (r / l0); g += d * (g / l0); b += d * (b / l0);

      const t = 1 + nStreak(u, v) * (P.streak ?? 0.008);
      r *= t; g *= t; b *= t;

      // gentle band-deepening S-curve + gamma so ACES doesn't flatten it
      const Lc = 0.299 * r + 0.587 * g + 0.114 * b;
      const k = 1 + CON * (PIVOT - Lc);
      r = Math.pow(clamp(r * k, 0, 1), GAMMA);
      g = Math.pow(clamp(g * k, 0, 1), GAMMA);
      b = Math.pow(clamp(b * k, 0, 1), GAMMA);

      const Lf = 0.299 * r + 0.587 * g + 0.114 * b;
      r = Lf + (r - Lf) * SAT; g = Lf + (g - Lf) * SAT; b = Lf + (b - Lf) * SAT;

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

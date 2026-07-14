// Grade Jupiter / Mars / Venus maps for the solar sim.
//   node jmv.js jupiter <in.jpg> <out.jpg>   — Cassini true-color: definition + mild depth
//   node jmv.js mars    <in.jpg> <out.jpg>   — Viking/MGS true color: warmth + definition
//   node jmv.js venus   <in.jpg> <out.jpg>   — true-color cream cloud deck: upscale 2k->4k,
//                                              streak definition + fine turbulence
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

const PRESETS = {
  // muted Cassini true color: crisp the swirls, tiny warm/sat lift so the
  // ACES pipeline doesn't wash the bands flat
  jupiter: { usmR: 10, usm: 0.55, sat: 1.14, pivot: 0.62, contrast: 0.10, gamma: 1.02, streak: 0.006, streakFx: 160, streakFy: 400 },
  // Viking/MGS true color: keep butterscotch, lift definition + a touch of warmth
  mars:    { usmR: 8,  usm: 0.65, sat: 1.16, pivot: 0.52, contrast: 0.10, gamma: 1.0,  streak: 0.0 },
  // true-color cream cloud deck: source is soft 2k — upscale, amplify the real
  // streak structure, add faint fine turbulence so 4k zoom isn't dead-flat
  venus:   { upscale: 4096, usmR: 22, usm: 0.7, sat: 1.05, pivot: 0.80, contrast: 0.06, gamma: 1.0, streak: 0.010, streakFx: 96, streakFy: 260, tint: [1.0, 0.988, 0.945] },
};

async function main() {
  const planet = process.argv[2];
  const IN = process.argv[3], OUT = process.argv[4];
  const P = { ...PRESETS[planet], ...JSON.parse(process.argv[5] || '{}') };
  if (!P.usmR) throw new Error('unknown planet ' + planet);

  let src = sharp(IN);
  if (P.upscale) src = src.resize(P.upscale, P.upscale / 2, { kernel: 'lanczos3' });
  const buf = await src.raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = buf.info;
  const rgb = buf.data;
  const N = W * H;

  const L = new Float32Array(N);
  for (let i = 0; i < N; i++) L[i] = (0.299 * rgb[3 * i] + 0.587 * rgb[3 * i + 1] + 0.114 * rgb[3 * i + 2]) / 255;
  const Lb = boxBlur(L, W, H, P.usmR, 2);
  const nStreak = P.streak ? mkNoise(29, P.streakFx, P.streakFy) : null;

  const out = Buffer.alloc(N * 3);
  for (let y = 0; y < H; y++) {
    const v = y / H;
    for (let x = 0; x < W; x++) {
      const i = y * W + x, u = x / W;
      let r = rgb[3 * i] / 255, g = rgb[3 * i + 1] / 255, b = rgb[3 * i + 2] / 255;

      const d = (L[i] - Lb[i]) * P.usm;
      const l0 = Math.max(L[i], 0.05);
      r += d * (r / l0); g += d * (g / l0); b += d * (b / l0);

      if (nStreak) { const t = 1 + nStreak(u, v) * P.streak; r *= t; g *= t; b *= t; }

      const Lc = 0.299 * r + 0.587 * g + 0.114 * b;
      const k = 1 + P.contrast * (P.pivot - Lc);
      r = Math.pow(clamp(r * k, 0, 1), P.gamma);
      g = Math.pow(clamp(g * k, 0, 1), P.gamma);
      b = Math.pow(clamp(b * k, 0, 1), P.gamma);

      const Lf = 0.299 * r + 0.587 * g + 0.114 * b;
      r = Lf + (r - Lf) * P.sat; g = Lf + (g - Lf) * P.sat; b = Lf + (b - Lf) * P.sat;

      if (P.tint) { r *= P.tint[0]; g *= P.tint[1]; b *= P.tint[2]; }

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

// Synthesize high-frequency detail into the blurry (anti-encounter) half of
// the Pluto map by transplanting real texture patches from the sharp
// (encounter) hemisphere, class-matched by terrain type. New Horizons only
// imaged one hemisphere up close, so the real mosaic is genuinely low-res on
// the far side; this fills it with plausible detail borrowed from real data.
//
// Usage (needs `npm i sharp` wherever you run it):
//   node enhance-pluto-farside.cjs <input.jpg> <output.jpg> '<params-json>'
// public/textures/pluto_4k.jpg was produced from the graded map (see
// grade-pluto-map.cjs) with:
//   '{"baseR":12,"patch":128,"stride":64,"strength":1.2,"amp":[1.15,1.05,0.6],
//     "sLo":0.006,"sHi":0.014,"lonB":3010,"lonEdge":260}'
const sharp = require('sharp');

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const sstep = (e0, e1, v) => { const t = clamp((v - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };

// separable box blur on a float array (approximates gaussian with 3 passes)
function boxBlur(src, W, H, r, passes = 3) {
  let a = Float32Array.from(src), b = new Float32Array(W * H);
  for (let p = 0; p < passes; p++) {
    // horizontal (wraps in x — the map is periodic in longitude)
    for (let y = 0; y < H; y++) {
      let acc = 0;
      const row = y * W;
      for (let i = -r; i <= r; i++) acc += a[row + ((i % W) + W) % W];
      for (let x = 0; x < W; x++) {
        b[row + x] = acc / (2 * r + 1);
        const xa = ((x + r + 1) % W + W) % W, xr = ((x - r) % W + W) % W;
        acc += a[row + xa] - a[row + xr];
      }
    }
    // vertical (clamped)
    for (let x = 0; x < W; x++) {
      let acc = 0;
      for (let i = -r; i <= r; i++) acc += b[clamp(i, 0, H - 1) * W + x];
      for (let y = 0; y < H; y++) {
        a[y * W + x] = acc / (2 * r + 1);
        const ya = clamp(y + r + 1, 0, H - 1), yr = clamp(y - r, 0, H - 1);
        acc += b[ya * W + x] - b[yr * W + x];
      }
    }
  }
  return a;
}

function mulberry(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

async function main() {
  const IN = process.argv[2] || 'pluto_graded.jpg';
  const OUT = process.argv[3] || 'pluto_enhanced.jpg';
  const P = JSON.parse(process.argv[4] || '{}');
  const MASK_ONLY = !!P.maskOnly;

  const img = sharp(IN);
  const { width: W, height: H } = await img.metadata();
  const rgb = await img.raw().toBuffer();
  const N = W * H;

  // luminance
  const L = new Float32Array(N);
  for (let i = 0; i < N; i++) L[i] = (0.299 * rgb[3 * i] + 0.587 * rgb[3 * i + 1] + 0.114 * rgb[3 * i + 2]) / 255;

  // base (low-pass) and detail (high-pass) of luminance
  const Lb = boxBlur(L, W, H, P.baseR ?? 5);
  const dL = new Float32Array(N);
  for (let i = 0; i < N; i++) dL[i] = L[i] - Lb[i];

  // local high-frequency energy -> sharpness
  const absD = new Float32Array(N);
  for (let i = 0; i < N; i++) absD[i] = Math.abs(dL[i]);
  const S = boxBlur(absD, W, H, P.energyR ?? 24, 2);

  // blur mask: 1 where the map is smooth (missing detail)
  const sLo = P.sLo ?? 0.0045, sHi = P.sHi ?? 0.011;
  // Longitude window of the anti-encounter hemisphere: EVERYTHING there is
  // genuinely low-res (its apparent "sharpness" is just smear gradients), so
  // the mask gets a high floor across the whole window.
  const lonA = P.lonA ?? 700, lonB = P.lonB ?? 2600, edge = P.lonEdge ?? 220;
  const floorIn = P.windowFloor ?? 0.8;
  let M = new Float32Array(N);
  for (let y = 0; y < H; y++) {
    const v = y / H;
    for (let x = 0; x < W; x++) {
      const i = y * W + x;
      const wlon = sstep(lonA - edge, lonA + edge, x) * (1 - sstep(lonB - edge, lonB + edge, x));
      let m = Math.max(sstep(sHi, sLo, S[i]), floorIn) * wlon; // smoother -> closer to 1
      m = Math.max(m, sstep(0.66, 0.78, v)); // unimaged south is always masked
      M[i] = m;
    }
  }
  M = boxBlur(M, W, H, P.maskR ?? 14, 2);

  if (MASK_ONLY) {
    const out = Buffer.alloc(N * 3);
    for (let i = 0; i < N; i++) {
      out[3 * i] = Math.round(M[i] * 255);
      out[3 * i + 1] = Math.round(rgb[3 * i + 1] * 0.5);
      out[3 * i + 2] = Math.round(rgb[3 * i + 2] * 0.5);
    }
    await sharp(out, { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 85 }).toFile(OUT);
    console.log('mask preview ->', OUT);
    return;
  }

  // terrain class from the low-pass color: 0=dark/rust 1=tan 2=ice
  const Rb = boxBlur(Float32Array.from({ length: N }, (_, i) => rgb[3 * i] / 255), W, H, 6, 2);
  const Bb = boxBlur(Float32Array.from({ length: N }, (_, i) => rgb[3 * i + 2] / 255), W, H, 6, 2);
  const cls = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    const red = Rb[i] - Bb[i];
    cls[i] = Lb[i] > (P.iceL ?? 0.72) ? 2 : (Lb[i] < (P.darkL ?? 0.52) || red > 0.22) ? 0 : 1;
  }

  // source patch centers: sharp areas only, per class, away from poles
  const PATCH = P.patch ?? 96, HALF = PATCH >> 1, STRIDE = P.stride ?? 48;
  const pools = [[], [], []];
  for (let y = H * 0.12 | 0; y < H * 0.72; y += 8) {
    for (let x = 0; x < W; x += 8) {
      const i = y * W + x;
      if (M[i] < 0.06 && S[i] > sHi * 1.15) pools[cls[i]].push(i);
    }
  }
  console.log('source pool sizes (dark/tan/ice):', pools.map(p => p.length).join('/'));
  if (pools.some(p => p.length < 40)) throw new Error('source pool too small — tune thresholds');

  // transplant detail patch-by-patch over the masked area
  const Dnew = new Float32Array(N), Wsum = new Float32Array(N);
  const rnd = mulberry(P.seed ?? 1969);
  const feather = (t) => 0.5 - 0.5 * Math.cos(Math.PI * 2 * t); // hann over [0,1]
  for (let ty = 0; ty < H; ty += STRIDE) {
    const vlat = Math.abs((ty + HALF) / H - 0.5) * Math.PI;
    const xstretch = Math.max(0.25, Math.cos(vlat)); // sample squeezed in x near poles
    for (let tx = 0; tx < W; tx += STRIDE) {
      const tc = clamp(ty + HALF, 0, H - 1) * W + ((tx + HALF) % W);
      if (M[tc] < 0.05) continue;
      const pool = pools[cls[tc]];
      const src = pool[(rnd() * pool.length) | 0];
      const scy = (src / W) | 0, scx = src % W;
      for (let py = 0; py < PATCH; py++) {
        const yy = ty + py; if (yy >= H) break;
        const fy = feather(py / PATCH);
        const sy = clamp(scy + py - HALF, 0, H - 1);
        for (let px = 0; px < PATCH; px++) {
          const xx = (tx + px) % W;
          const fx = feather(px / PATCH);
          const sx = (((scx + Math.round((px - HALF) * xstretch)) % W) + W) % W;
          const w = fx * fy;
          const o = yy * W + xx;
          Dnew[o] += dL[sy * W + sx] * w;
          Wsum[o] += w;
        }
      }
    }
  }

  // per-class detail amplitude
  const AMP = P.amp ?? [1.0, 0.9, 0.55];
  const strength = P.strength ?? 0.95;
  const out = Buffer.alloc(N * 3);
  for (let i = 0; i < N; i++) {
    let d = Wsum[i] > 1e-6 ? Dnew[i] / Wsum[i] : 0;
    d *= AMP[cls[i]] * strength * M[i];
    const l = Math.max(L[i], 0.06);
    for (let c = 0; c < 3; c++) {
      const val = rgb[3 * i + c] / 255;
      out[3 * i + c] = clamp(Math.round((val + d * (val / l)) * 255), 0, 255);
    }
  }
  await sharp(out, { raw: { width: W, height: H, channels: 3 } })
    .jpeg({ quality: 88, chromaSubsampling: '4:4:4' }).toFile(OUT);
  console.log('wrote', OUT);
}
main().catch(e => { console.error(e); process.exit(1); });

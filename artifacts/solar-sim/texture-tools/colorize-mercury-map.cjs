// Colorize the (real, MESSENGER-derived) grey Celestia Mercury map toward the
// famous MESSENGER MDIS enhanced-color global mosaic: indigo-blue
// low-reflectance material, violet-grey midtones, tan-orange high-reflectance
// smooth plains, cyan-white fresh crater rays. Terrain classes are derived
// from the map itself (large-scale brightness + high-frequency ray energy) so
// the coloring follows the real geography.
//
// Usage (needs `npm i sharp`): node colorize-mercury-map.cjs <in.jpg> <out.jpg> "<params-json>"
// public/textures/mercury_4k.jpg was produced from CelestiaContent
// textures/hires/mercury.jpg with default params ("{}").
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
  const IN = process.argv[2] || 'celestia_mercury.jpg';
  const OUT = process.argv[3] || 'mercury_graded.jpg';
  const P = JSON.parse(process.argv[4] || '{}');
  const img = sharp(IN);
  const { width: W, height: H } = await img.metadata();
  const rgb = await img.raw().toBuffer();
  const N = W * H;

  const L = new Float32Array(N);
  for (let i = 0; i < N; i++) L[i] = (0.299 * rgb[3 * i] + 0.587 * rgb[3 * i + 1] + 0.114 * rgb[3 * i + 2]) / 255;

  // normalize the flat/dark map: stretch to a healthy range first
  let lo = 1, hi = 0;
  { const hist = new Float32Array(256);
    for (let i = 0; i < N; i++) hist[Math.round(L[i] * 255)]++;
    let acc = 0; for (let k = 0; k < 256 && acc < N * 0.005; k++) { acc += hist[k]; lo = k / 255; }
    acc = 0; for (let k = 255; k >= 0 && acc < N * 0.005; k--) { acc += hist[k]; hi = k / 255; } }
  const stretch = (x) => clamp((x - lo) / Math.max(0.05, hi - lo), 0, 1);
  for (let i = 0; i < N; i++) L[i] = stretch(L[i]);

  const Lb = boxBlur(L, W, H, P.baseR ?? 28, 2);          // regional brightness
  const dL = new Float32Array(N);
  for (let i = 0; i < N; i++) dL[i] = L[i] - Lb[i];
  const absD = new Float32Array(N);
  for (let i = 0; i < N; i++) absD[i] = Math.abs(dL[i]);
  const T = boxBlur(absD, W, H, P.rayR ?? 18, 2);         // ray/texture energy

  // very low-frequency patchiness so blue/tan provinces vary like the mosaic
  const nProv = mkNoise(41, 7, 4), nProv2 = mkNoise(53, 13, 7);

  // enhanced-color anchor palette
  const BLUE = [64, 78, 148], VIOLET = [122, 112, 138], TAN = [168, 128, 92],
        ORANGE = [196, 132, 70], CYAN = [178, 214, 228];

  const USM = P.usm ?? 0.85; // strong definition boost — the source is soft
  const out = Buffer.alloc(N * 3);
  for (let y = 0; y < H; y++) {
    const v = y / H;
    for (let x = 0; x < W; x++) {
      const i = y * W + x, u = x / W;

      // definition: unsharp luminance
      let l = clamp(L[i] + dL[i] * USM, 0, 1);

      // terrain classing from the real geography
      const prov = nProv(u, v) + nProv2(u, v) * 0.5;       // -0.75..0.75 province bias
      const dark = sstep(0.52, 0.20, Lb[i]);               // low-reflectance
      const plains = sstep(0.55, 0.78, Lb[i]) * sstep(0.055, 0.02, T[i]); // bright smooth
      const rays = sstep(0.05, 0.11, T[i]) * sstep(0.0, 0.25, dL[i]);     // fresh bright rays

      // base hue: violet-grey pushed blue in dark provinces, tan in warm ones
      let cr = VIOLET[0], cg = VIOLET[1], cb = VIOLET[2];
      const warmW = clamp(0.5 + prov * 0.9, 0, 1) * (1 - dark);
      cr = lerp(cr, TAN[0], warmW); cg = lerp(cg, TAN[1], warmW); cb = lerp(cb, TAN[2], warmW);
      cr = lerp(cr, BLUE[0], dark); cg = lerp(cg, BLUE[1], dark); cb = lerp(cb, BLUE[2], dark);
      cr = lerp(cr, ORANGE[0], plains * clamp(0.4 + prov, 0, 1));
      cg = lerp(cg, ORANGE[1], plains * clamp(0.4 + prov, 0, 1));
      cb = lerp(cb, ORANGE[2], plains * clamp(0.4 + prov, 0, 1));
      const rayW = clamp(rays, 0, 1) * 0.8;
      cr = lerp(cr, CYAN[0], rayW); cg = lerp(cg, CYAN[1], rayW); cb = lerp(cb, CYAN[2], rayW);

      // luminance drives shading; hue comes from the class palette
      const shade = 0.28 + 1.5 * l;
      let r = (cr / 255) * shade, g = (cg / 255) * shade, b = (cb / 255) * shade;

      out[3 * i] = clamp(Math.round(r * 255), 0, 255);
      out[3 * i + 1] = clamp(Math.round(g * 255), 0, 255);
      out[3 * i + 2] = clamp(Math.round(b * 255), 0, 255);
    }
  }
  // pole cleanup: the source mosaic has projection-stretch artifacts at the
  // very top/bottom — blend those rows toward a horizontally-smoothed
  // reference row so the poles read as continuous terrain
  const fixPole = (yRef, y0, y1) => {
    const ref = new Float32Array(W * 3);
    const R2 = 220; // heavy horizontal smoothing of the reference row
    for (let c = 0; c < 3; c++) {
      let acc = 0;
      for (let k = -R2; k <= R2; k++) acc += out[3 * (yRef * W + ((k % W) + W) % W) + c];
      for (let x = 0; x < W; x++) {
        ref[3 * x + c] = acc / (2 * R2 + 1);
        acc += out[3 * (yRef * W + (((x + R2 + 1) % W) + W) % W) + c]
             - out[3 * (yRef * W + (((x - R2) % W) + W) % W) + c];
      }
    }
    const lo2 = Math.min(y0, y1), hi2 = Math.max(y0, y1);
    for (let y = lo2; y <= hi2; y++) {
      const t = Math.abs(y - yRef) / Math.max(1, Math.abs((y0 < y1 ? y0 : y1) === yRef ? y1 - yRef : y0 - yRef));
      const w = sstep(0.02, 0.40, t); // reach full replacement well before the edge
      for (let x = 0; x < W; x++) for (let c = 0; c < 3; c++) {
        const o = 3 * (y * W + x) + c;
        out[o] = Math.round(lerp(out[o], ref[3 * x + c], w));
      }
    }
  };
  fixPole(Math.round(H * 0.045), Math.round(H * 0.045), 0);
  fixPole(Math.round(H * 0.86), Math.round(H * 0.86), H - 1);

  await sharp(out, { raw: { width: W, height: H, channels: 3 } })
    .jpeg({ quality: 88, chromaSubsampling: '4:4:4' }).toFile(OUT);
  console.log('wrote', OUT, W + 'x' + H);
}
main().catch(e => { console.error(e); process.exit(1); });

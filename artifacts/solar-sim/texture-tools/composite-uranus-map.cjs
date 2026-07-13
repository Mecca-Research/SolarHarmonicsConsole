// Composite Uranus map: Celestia true-color base (haze-muted pale cyan, north
// polar hood) + upper-atmosphere features from the best HST/Keck-era imagery —
// subtle zonal bands, polar collar, discrete bright methane clouds, and the
// 2006 HST Uranus Dark Spot — all kept muted beneath the haze.
//
// Usage (needs `npm i sharp` wherever you run it):
//   node composite-uranus-map.cjs <input.jpg> <output.jpg> '<params-json>'
// public/textures/uranus_4k.jpg was produced from CelestiaContent
// textures/hires/uranus.jpg with default params ('{}').
const sharp = require('sharp');

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const sstep = (e0, e1, v) => { const t = clamp((v - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };

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
function mulberry(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

async function main() {
  const IN = process.argv[2] || 'celestia_uranus.jpg';
  const OUT = process.argv[3] || 'uranus_graded.jpg';
  const P = JSON.parse(process.argv[4] || '{}');

  const img = sharp(IN);
  const { width: W, height: H } = await img.metadata();
  const rgb = await img.raw().toBuffer();
  const N = W * H;

  // ---- discrete bright methane clouds (HST/Keck show them at mid-lat) ----
  // pre-render into an additive float layer so they blur naturally
  const clouds = new Float32Array(N);
  const rnd = mulberry(P.cloudSeed ?? 74);
  const nCloudCount = P.clouds ?? 26;
  for (let k = 0; k < nCloudCount; k++) {
    // mostly northern mid-latitudes (v 0.26..0.44), a few southern
    const north = rnd() < 0.75;
    const cv = north ? 0.26 + rnd() * 0.18 : 0.60 + rnd() * 0.16;
    const cu = rnd();
    const lat = Math.abs(cv - 0.5) * Math.PI;
    const stretch = 1 / Math.max(0.35, Math.cos(lat));
    const rx = (6 + rnd() * 26) * stretch, ry = 3 + rnd() * 7;
    const amp = (0.08 + rnd() * 0.16) * (P.cloudAmp ?? 1);
    const cx = cu * W, cy = cv * H;
    const x0 = Math.floor(cx - rx * 3), x1 = Math.ceil(cx + rx * 3);
    const y0 = Math.max(0, Math.floor(cy - ry * 3)), y1 = Math.min(H - 1, Math.ceil(cy + ry * 3));
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const dx = (x - cx) / rx, dy = (y - cy) / ry;
        const q = dx * dx + dy * dy;
        if (q < 9) clouds[y * W + ((x % W) + W) % W] += amp * Math.exp(-q * 1.1);
      }
    }
  }

  const nBand = mkNoise(31, 96, 200);   // wide, short cells: horizontal streaks
  const nFine = mkNoise(57, 900, 450);
  const SPOT = P.spot ?? [0.42, 0.352, 0.034, 0.024, 0.13]; // u, v(~27N), ru, rv, depth

  const out = Buffer.alloc(N * 3);
  for (let y = 0; y < H; y++) {
    const v = y / H;
    // ---- zonal structure (multiplicative, very subtle) ----
    // polar hood brightening above ~62N, slightly darker collar at ~57N,
    // a few gentle bands; symmetric-ish faint structure in the south
    let zone = 1
      + 0.030 * sstep(0.26, 0.14, v)                       // north polar hood lift
      - 0.020 * Math.exp(-(((v - 0.265) / 0.028) ** 2))    // polar collar
      - 0.012 * Math.exp(-(((v - 0.38) / 0.05) ** 2))      // mid-lat band
      + 0.010 * Math.exp(-(((v - 0.47) / 0.04) ** 2))      // bright equatorial zone
      - 0.012 * Math.exp(-(((v - 0.56) / 0.05) ** 2))      // southern band
      + 0.016 * sstep(0.80, 0.95, v);                      // south polar brightening
    for (let x = 0; x < W; x++) {
      const i = y * W + x, u = x / W;
      let r = rgb[3 * i] / 255, g = rgb[3 * i + 1] / 255, b = rgb[3 * i + 2] / 255;

      // zonal bands modulated slightly by streak noise so edges aren't ruler-straight
      const z = zone + nBand(u, v) * (P.streak ?? 0.010) + nFine(u, v) * (P.grain ?? 0.004);
      r *= z; g *= z; b *= z;

      // Uranus Dark Spot (2006 HST, ~27N): muted darker blue-grey oval
      {
        const [cu, cv, ru, rv, depth] = SPOT;
        const du = Math.min(Math.abs(u - cu), 1 - Math.abs(u - cu)) / ru;
        const dv = (v - cv) / rv;
        const q = du * du + dv * dv;
        if (q < 1) {
          const wgt = (1 - q) * (1 - q) * depth;
          r *= 1 - wgt * 1.15; g *= 1 - wgt * 1.0; b *= 1 - wgt * 0.6;
        }
      }

      // bright methane clouds: haze-muted white, additive toward white
      const c = clouds[i];
      if (c > 0.001) {
        const wgt = Math.min(c, 0.35);
        r = lerp(r, 0.97, wgt); g = lerp(g, 0.99, wgt); b = lerp(b, 1.0, wgt);
      }

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

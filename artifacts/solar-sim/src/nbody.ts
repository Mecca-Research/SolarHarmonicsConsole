// N-body gravitational engine for the solar system.
//
// Physics units (never mixed with rendering units):
//   distance = AU, time = days, mass = solar masses.
// In this system the gravitational constant is the square of the Gaussian
// gravitational constant k = 0.01720209895, i.e. G = k^2 (exact by definition
// of these units): G = 0.0002959122083 AU^3 / (Msun * day^2).
//
// Positions are integrated for the Sun and all nine planets (incl. Pluto) with
// full pairwise Newtonian gravity, so resonances (Pluto-Neptune 3:2), mutual
// perturbations and apsidal precession emerge from the forces themselves —
// nothing is put on rails. The renderer multiplies these AU coordinates by a
// visual scale; it never feeds anything back into the physics state.

export const G = 2.959122083e-4; // AU^3 / (Msun day^2)

// Simulation epoch: 2026-07-10 00:00 UTC.
export const EPOCH_JD = 2461231.5;
export const EPOCH_UNIX_MS = Date.UTC(2026, 6, 10);
// Julian centuries elapsed since J2000.0 (JD 2451545.0) at the epoch.
const EPOCH_T = (EPOCH_JD - 2451545.0) / 36525;

export const BODY_ORDER = ['Sun','Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'] as const;
export type NBodyName = typeof BODY_ORDER[number];

// Masses relative to the Sun (= 1).
export const MASSES: Record<NBodyName, number> = {
  Sun: 1.0,
  Mercury: 1.66e-7,
  Venus: 2.45e-6,
  Earth: 3.00e-6,
  Mars: 3.23e-7,
  Jupiter: 9.54e-4,
  Saturn: 2.86e-4,
  Uranus: 4.36e-5,
  Neptune: 5.15e-5,
  Pluto: 6.55e-9,
};

// Initial conditions. The JPL Horizons API is the preferred source of state
// vectors, but it is not reachable from every deployment, so we derive the
// epoch state from JPL's published Keplerian elements instead: E.M. Standish,
// "Keplerian Elements for Approximate Positions of the Major Planets" (JPL),
// Table 1 — J2000 heliocentric osculating elements + centennial rates, valid
// 1800-2050 AD. Converting these to position/velocity vectors at the epoch
// gives the same kind of state Horizons' vector table would (to the accuracy
// of that approximation), with no network dependency.
//
// Columns: a (AU), e, I (deg), L (deg), varpi = longitude of perihelion (deg),
// Omega = longitude of ascending node (deg); each as [J2000 value, rate/century].
type ElementRow = {
  a: [number, number]; e: [number, number]; I: [number, number];
  L: [number, number]; varpi: [number, number]; Omega: [number, number];
};
const STANDISH: Record<Exclude<NBodyName,'Sun'>, ElementRow> = {
  Mercury: { a:[0.38709927, 0.00000037], e:[0.20563593, 0.00001906], I:[7.00497902, -0.00594749], L:[252.25032350, 149472.67411175], varpi:[77.45779628, 0.16047689], Omega:[48.33076593, -0.12534081] },
  Venus:   { a:[0.72333566, 0.00000390], e:[0.00677672, -0.00004107], I:[3.39467605, -0.00078890], L:[181.97909950, 58517.81538729], varpi:[131.60246718, 0.00268329], Omega:[76.67984255, -0.27769418] },
  Earth:   { a:[1.00000261, 0.00000562], e:[0.01671123, -0.00004392], I:[-0.00001531, -0.01294668], L:[100.46457166, 35999.37244981], varpi:[102.93768193, 0.32327364], Omega:[0.0, 0.0] },
  Mars:    { a:[1.52371034, 0.00001847], e:[0.09339410, 0.00007882], I:[1.84969142, -0.00813131], L:[-4.55343205, 19140.30268499], varpi:[-23.94362959, 0.44441088], Omega:[49.55953891, -0.29257343] },
  Jupiter: { a:[5.20288700, -0.00011607], e:[0.04838624, -0.00013253], I:[1.30439695, -0.00183714], L:[34.39644051, 3034.74612775], varpi:[14.72847983, 0.21252668], Omega:[100.47390909, 0.20469106] },
  Saturn:  { a:[9.53667594, -0.00125060], e:[0.05386179, -0.00050991], I:[2.48599187, 0.00193609], L:[49.95424423, 1222.49362201], varpi:[92.59887831, -0.41897216], Omega:[113.66242448, -0.28867794] },
  Uranus:  { a:[19.18916464, -0.00196176], e:[0.04725744, -0.00004397], I:[0.77263783, -0.00242939], L:[313.23810451, 428.48202785], varpi:[170.95427630, 0.40805281], Omega:[74.01692503, 0.04240589] },
  Neptune: { a:[30.06992276, 0.00026291], e:[0.00859048, 0.00005105], I:[1.77004347, 0.00035372], L:[-55.12002969, 218.45945325], varpi:[44.96476227, -0.32241464], Omega:[131.78422574, -0.00508664] },
  Pluto:   { a:[39.48211675, -0.00031596], e:[0.24882730, 0.00005170], I:[17.14001206, 0.00004818], L:[238.92903833, 145.20780515], varpi:[224.06891629, -0.04062942], Omega:[110.30393684, -0.01183482] },
};

const DEG = Math.PI / 180;
const TWO_PI = Math.PI * 2;
export const wrapAngle = (x: number) => { x %= TWO_PI; return x < 0 ? x + TWO_PI : x; };

// Kepler's equation M = E - e sinE, solved by Newton iteration.
export function solveKepler(M: number, e: number): number {
  let E = e < 0.8 ? M : Math.PI;
  for (let k = 0; k < 12; k++) {
    const f = E - e * Math.sin(E) - M;
    const fp = 1 - e * Math.cos(E);
    const dE = f / fp;
    E -= dE;
    if (Math.abs(dE) < 1e-13) break;
  }
  return E;
}

export type StateVec = { x: number; y: number; z: number; vx: number; vy: number; vz: number };

// Heliocentric ecliptic state vector from Keplerian elements (angles in rad).
export function stateFromElements(a: number, e: number, I: number, Omega: number, w: number, M: number, mu: number): StateVec {
  const E = solveKepler(wrapAngle(M), e);
  const cosE = Math.cos(E), sinE = Math.sin(E);
  const sq = Math.sqrt(1 - e * e);
  // Position and velocity in the orbital plane (perifocal frame).
  const xp = a * (cosE - e), yp = a * sq * sinE;
  const n = Math.sqrt(mu / (a * a * a));
  const den = 1 - e * cosE;
  const vxp = -a * n * sinE / den, vyp = a * n * sq * cosE / den;
  // Rotate perifocal -> ecliptic: R_z(Omega) R_x(I) R_z(w).
  const cO = Math.cos(Omega), sO = Math.sin(Omega);
  const cI = Math.cos(I), sI = Math.sin(I);
  const cw = Math.cos(w), sw = Math.sin(w);
  const r11 = cO * cw - sO * sw * cI, r12 = -cO * sw - sO * cw * cI;
  const r21 = sO * cw + cO * sw * cI, r22 = -sO * sw + cO * cw * cI;
  const r31 = sw * sI,                r32 = cw * sI;
  return {
    x: r11 * xp + r12 * yp, y: r21 * xp + r22 * yp, z: r31 * xp + r32 * yp,
    vx: r11 * vxp + r12 * vyp, vy: r21 * vxp + r22 * vyp, vz: r31 * vxp + r32 * vyp,
  };
}

export type Body = { name: NBodyName; m: number } & StateVec;

// Build the epoch state: Sun + 9 planets, ecliptic J2000 frame, with the
// system shifted so the barycenter is at the origin and total momentum is
// zero (otherwise the whole system slowly drifts through space).
export function buildSolarSystem(T: number = EPOCH_T): Body[] {
  const bodies: Body[] = [{ name: 'Sun', m: 1, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0 }];
  for (const name of BODY_ORDER) {
    if (name === 'Sun') continue;
    const el = STANDISH[name];
    const a = el.a[0] + el.a[1] * T;
    const e = el.e[0] + el.e[1] * T;
    const I = (el.I[0] + el.I[1] * T) * DEG;
    const L = (el.L[0] + el.L[1] * T) * DEG;
    const varpi = (el.varpi[0] + el.varpi[1] * T) * DEG;
    const Omega = (el.Omega[0] + el.Omega[1] * T) * DEG;
    const w = varpi - Omega;
    const M = L - varpi;
    const mu = G * (1 + MASSES[name]); // heliocentric two-body mu
    const s = stateFromElements(a, e, I, Omega, w, M, mu);
    bodies.push({ name, m: MASSES[name], ...s });
  }
  // Shift to the barycentric frame: zero total momentum and center of mass.
  let mTot = 0, px = 0, py = 0, pz = 0, cx = 0, cy = 0, cz = 0;
  for (const b of bodies) { mTot += b.m; px += b.m * b.vx; py += b.m * b.vy; pz += b.m * b.vz; cx += b.m * b.x; cy += b.m * b.y; cz += b.m * b.z; }
  for (const b of bodies) {
    b.vx -= px / mTot; b.vy -= py / mTot; b.vz -= pz / mTot;
    b.x -= cx / mTot; b.y -= cy / mTot; b.z -= cz / mTot;
  }
  return bodies;
}

// Softening keeps accelerations finite if the user's delta-v edits drive a
// planet into the Sun; 1e-5 AU is far below every physical scale in play.
const SOFT2 = 1e-10;

// 4th-order Yoshida symplectic composition coefficients. A symplectic
// integrator has bounded energy error over arbitrarily long runs (unlike RK4,
// which spirals), and 4th order keeps numerical apsidal drift far below the
// real perturbation-driven precession we want to expose.
const CBRT2 = Math.cbrt(2);
const Y_W1 = 1 / (2 - CBRT2);
const Y_W0 = -CBRT2 / (2 - CBRT2);

export class NBodySim {
  bodies: Body[];
  /** Simulated days elapsed since the epoch. */
  t = 0;
  private ax: Float64Array; private ay: Float64Array; private az: Float64Array;

  constructor(bodies?: Body[]) {
    this.bodies = bodies ?? buildSolarSystem();
    const n = this.bodies.length;
    this.ax = new Float64Array(n); this.ay = new Float64Array(n); this.az = new Float64Array(n);
    this.computeAccel();
  }

  computeAccel() {
    const b = this.bodies, n = b.length, ax = this.ax, ay = this.ay, az = this.az;
    ax.fill(0); ay.fill(0); az.fill(0);
    for (let i = 0; i < n; i++) {
      const bi = b[i];
      for (let j = i + 1; j < n; j++) {
        const bj = b[j];
        const dx = bj.x - bi.x, dy = bj.y - bi.y, dz = bj.z - bi.z;
        const r2 = dx * dx + dy * dy + dz * dz + SOFT2;
        const inv = G / (r2 * Math.sqrt(r2));
        const fi = inv * bj.m, fj = inv * bi.m;
        ax[i] += dx * fi; ay[i] += dy * fi; az[i] += dz * fi;
        ax[j] -= dx * fj; ay[j] -= dy * fj; az[j] -= dz * fj;
      }
    }
  }

  // One kick-drift-kick leapfrog stage. Assumes this.a* holds the
  // acceleration at the current positions; leaves it valid for the next call.
  private kdk(h: number) {
    const b = this.bodies, n = b.length, ax = this.ax, ay = this.ay, az = this.az;
    const hh = h / 2;
    for (let i = 0; i < n; i++) { const bi = b[i]; bi.vx += ax[i] * hh; bi.vy += ay[i] * hh; bi.vz += az[i] * hh; }
    for (let i = 0; i < n; i++) { const bi = b[i]; bi.x += bi.vx * h; bi.y += bi.vy * h; bi.z += bi.vz * h; }
    this.computeAccel();
    for (let i = 0; i < n; i++) { const bi = b[i]; bi.vx += ax[i] * hh; bi.vy += ay[i] * hh; bi.vz += az[i] * hh; }
  }

  /** One 4th-order Yoshida step of size h (days). */
  step(h: number) { this.kdk(Y_W1 * h); this.kdk(Y_W0 * h); this.kdk(Y_W1 * h); }

  /**
   * Advance the simulation by up to `days`, substepping so no step exceeds
   * hMax. maxSteps bounds the work in a single call (e.g. after a stalled
   * tab); when it binds, the EXCESS SIM TIME IS DROPPED rather than
   * integrated with an oversized (less accurate) step — sim time briefly
   * slows instead of the integrator degrading. Returns the days integrated.
   */
  advance(days: number, hMax = 0.25, maxSteps = 1600): number {
    if (!(days > 0)) return 0;
    let steps = Math.ceil(days / hMax);
    if (steps > maxSteps) { steps = maxSteps; days = steps * hMax; }
    const h = days / steps;
    for (let s = 0; s < steps; s++) this.step(h);
    this.t += days;
    return days;
  }

  /** Total mechanical energy (for conservation diagnostics). */
  energy(): number {
    const b = this.bodies, n = b.length;
    let E = 0;
    for (let i = 0; i < n; i++) {
      const bi = b[i];
      E += 0.5 * bi.m * (bi.vx * bi.vx + bi.vy * bi.vy + bi.vz * bi.vz);
      for (let j = i + 1; j < n; j++) {
        const bj = b[j];
        const dx = bj.x - bi.x, dy = bj.y - bi.y, dz = bj.z - bi.z;
        E -= G * bi.m * bj.m / Math.sqrt(dx * dx + dy * dy + dz * dz + SOFT2);
      }
    }
    return E;
  }
}

// ---------------------------------------------------------------------------
// Osculating elements: the instantaneous two-body ellipse implied by a state
// vector. Used to draw live orbit lines (which visibly precess as the real
// perturbations act) and for diagnostics.
// ---------------------------------------------------------------------------

export type OscElements = { a: number; e: number; i: number; Omega: number; w: number; nu: number; varpi: number };

export function oscFromState(rx: number, ry: number, rz: number, vx: number, vy: number, vz: number, mu: number): OscElements {
  const r = Math.sqrt(rx * rx + ry * ry + rz * rz);
  const v2 = vx * vx + vy * vy + vz * vz;
  // Specific angular momentum h = r x v.
  const hx = ry * vz - rz * vy, hy = rz * vx - rx * vz, hz = rx * vy - ry * vx;
  const h = Math.sqrt(hx * hx + hy * hy + hz * hz);
  // Eccentricity vector.
  const rv = rx * vx + ry * vy + rz * vz;
  const c1 = v2 / mu - 1 / r, c2 = rv / mu;
  const ex = c1 * rx - c2 * vx, ey = c1 * ry - c2 * vy, ez = c1 * rz - c2 * vz;
  const e = Math.sqrt(ex * ex + ey * ey + ez * ez);
  const a = 1 / (2 / r - v2 / mu); // negative for hyperbolic states
  const i = Math.acos(Math.min(1, Math.max(-1, hz / h)));
  // Node vector n = z_hat x h = (-hy, hx, 0).
  const nx = -hy, ny = hx;
  const nn = Math.sqrt(nx * nx + ny * ny);
  const Omega = nn > 1e-12 ? Math.atan2(ny, nx) : 0;
  let w: number, nu: number;
  if (e > 1e-9) {
    if (nn > 1e-12) {
      // Both n and e lie in the orbital plane, so the in-plane angle between
      // them needs the sine projected onto the orbit normal h (not onto z,
      // which would bias w by a cos(i) factor and rotate drawn orbit lines
      // off the planet for inclined orbits).
      w = Math.atan2(
        (ez * (hx * hx + hy * hy) + hz * (nx * ey - ny * ex)) / (nn * h),
        (nx * ex + ny * ey) / nn
      );
    } else {
      w = Math.atan2(ey, ex); // equatorial orbit: measure from x axis
    }
    const cosNu = (ex * rx + ey * ry + ez * rz) / (e * r);
    nu = Math.acos(Math.min(1, Math.max(-1, cosNu)));
    if (rv < 0) nu = TWO_PI - nu;
  } else {
    w = 0;
    nu = Math.atan2(ry, rx); // near-circular: true longitude
  }
  return { a, e, i, Omega: wrapAngle(Omega), w: wrapAngle(w), nu: wrapAngle(nu), varpi: wrapAngle(Omega + w) };
}

/**
 * Sample the osculating ellipse into `out` (length 3N) as heliocentric
 * ecliptic coordinates. Returns false (out untouched) for non-elliptical or
 * degenerate states, so callers can hide the line instead of drawing garbage.
 */
export function sampleOrbit(el: OscElements, out: Float32Array): boolean {
  const N = Math.floor(out.length / 3);
  if (!(el.a > 0) || !(el.e >= 0) || el.e >= 0.999999 || !isFinite(el.a)) return false;
  const cO = Math.cos(el.Omega), sO = Math.sin(el.Omega);
  const cI = Math.cos(el.i), sI = Math.sin(el.i);
  const cw = Math.cos(el.w), sw = Math.sin(el.w);
  const r11 = cO * cw - sO * sw * cI, r12 = -cO * sw - sO * cw * cI;
  const r21 = sO * cw + cO * sw * cI, r22 = -sO * sw + cO * cw * cI;
  const r31 = sw * sI, r32 = cw * sI;
  const p = el.a * (1 - el.e * el.e);
  for (let k = 0; k < N; k++) {
    const nu = (k / N) * TWO_PI;
    const r = p / (1 + el.e * Math.cos(nu));
    const xp = r * Math.cos(nu), yp = r * Math.sin(nu);
    out[3 * k] = r11 * xp + r12 * yp;
    out[3 * k + 1] = r21 * xp + r22 * yp;
    out[3 * k + 2] = r31 * xp + r32 * yp;
  }
  return true;
}

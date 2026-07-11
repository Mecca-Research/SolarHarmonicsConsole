# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `artifacts/solar-sim` (`@workspace/solar-sim`)

Three.js solar system simulation (SolarHarmonicsConsole). React + Vite frontend-only app with photorealistic PBR planet rendering, custom GLSL shaders, and atmospheric effects.

- Entry: `src/main.tsx` → `src/App.tsx` → `src/SolarConsole3d.tsx`
- Physics: `src/nbody.ts` — true N-body gravitational engine for Sun + 9 planets. Units are AU / days / solar masses (G = k² = 2.959122083e-4); 4th-order Yoshida symplectic integrator with ≤ 0.25-day substeps; initial state vectors derived from JPL (Standish) J2000 osculating elements + centennial rates at epoch 2026-07-10, shifted to the zero-momentum barycentric frame. Pluto's 3:2 resonance with Neptune, mutual perturbations, and apsidal precession emerge from the forces (verified: energy drift ~3e-11/century, periods ≤ 0.08% error, Pluto–Neptune min separation 20 AU over 500 yr, resonant angle librates)
- Physics scale vs visual scale: the engine state stays in AU and is never mutated by rendering; the render loop maps heliocentric ecliptic (x, y, z) AU → scene (x, z, y) × AU2U (=30) with exaggerated planet sphere radii for visibility. Orbit lines are live osculating ellipses (recomputed every 15 frames) so precession is visible; a HUD chip shows the simulated calendar date
- Orbit editor applies a real tangential Δv (velocity-vector scaling with bound-orbit/apoapsis caps) and rigid state rotation about the line of nodes for inclination; resets restore the epoch state relative to the live Sun
- Dependencies: `three`, `@types/three`
- Features: N-body orbits, double-click focus with satellite-view camera + per-body info panels, asteroid/Kuiper belts (decorative Kepler test particles), Trojans/Hildas anchored to the live Jupiter, Earth moon system, orbit editor UI
- Rendering: Inner planets (Mercury, Venus, Mars) use MeshStandardMaterial (PBR) with sun-facing terminator lighting; outer planets (Jupiter, Saturn, Uranus, Neptune, Pluto) use MeshBasicMaterial for 360° full illumination
- Earth shader: Custom ShaderMaterial blending day/night textures based on sun direction with smooth terminator, bump mapping from topology, specular ocean reflection from water mask, cloud layer overlay (0.6 blend factor, 0.55 opacity)
- Atmosphere: Custom GLSL Rayleigh scattering shaders on BackSide sphere meshes with AdditiveBlending for Earth (blue), Venus (thick yellow), Mars (thin red), Jupiter (warm haze), Uranus (cyan), Neptune (blue)
- Textures: Mercury, Venus, Saturn (body + detailed rings incl. Cassini/Encke/Keeler gaps and F ring), Uranus, and Neptune are seeded procedural equirectangular maps modeled on NASA reference photos (MESSENGER enhanced color, Magellan radar, Cassini portrait, Keck, Voyager 2); Mars/Jupiter/Pluto load CDN maps over procedural fallbacks; Earth uses CDN day/night/water/topology maps. Venus deliberately has no atmosphere glow shell (it read as a ring)
- Lighting: PointLight sun at origin (warm white, intensity 2.0, quadratic decay) + near-zero AmbientLight (0.02) for true dark-side rendering on inner planets; outer planets fully lit via MeshBasicMaterial; ACES filmic tone mapping at exposure 1.4
- Sun: Custom GLSL fbm noise shader with limb darkening; animated solar flare particle system
- Graceful WebGL fallback: try-catch around renderer creation with user-facing message

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.

# Kotlin Website Migration (Task #2)

This repository contains a migration of a legacy React homepage (from a stripped-down revision of https://kotlinlang.org) to **React Router 7 Framework Mode** with **Server-Side Rendering (SSR)**.

## Assignment Scope

- Single-page homepage migration.
- Navigation links are intentionally non-functional (as in the source assignment).
- Visual appearance and interactions are preserved.

## What Was Migrated

1. **Framework Mode setup** using React Router 7 project structure.
2. **SSR enabled** in `react-router.config.ts` (`ssr: true`).
3. Legacy homepage moved to route-based app structure:
	 - Root layout: `app/root.tsx`
	 - Index route: `app/routes/home.tsx`
	 - Route config: `app/routes.ts`
4. Existing interactive behavior preserved (for example, tab switching and UI hover states).

## Tech Stack

- React 19
- React Router 7 (Framework Mode)
- TypeScript
- Tailwind CSS
- Existing `@rescui` / Kotlin website ecosystem dependencies retained for maintainability

## Project Structure

```text
jetbrains-internship/
	app/
		root.tsx
		routes.ts
		routes/
			home.tsx
	react-router.config.ts
	vite.config.ts
```

## Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open `http://localhost:5173`.

### 3. Build for production

```bash
npm run build
```

### 4. Type-check

```bash
npm run typecheck
```

### 5. Run production server

```bash
npm run start
```

Production server runs on `http://localhost:3000`.

## SSR Verification

- SSR is turned on in `react-router.config.ts`.
- The page is rendered on the server and then hydrated on the client.
- Interactive components continue to work after hydration.

## Migration Decisions

1. **React Router 7 Framework Mode as the target architecture**
	The migrated project follows route-based structure (`app/root.tsx`, `app/routes.ts`, `app/routes/home.tsx`) to align with modern React Router conventions and improve maintainability.

2. **SSR enabled instead of SPA mode**
	`ssr: true` is explicitly configured to satisfy assignment requirements for server rendering and hydration.

3. **Single-page behavior intentionally preserved**
	The source assignment contains one homepage only, so top navigation links remain non-functional by design.

4. **Existing UI ecosystem preserved for maintainability**
	Existing dependencies (including `@rescui`/Kotlin website ecosystem packages) are kept to avoid unnecessary UI regressions and to keep the migrated code close to the original visual baseline.

5. **Production run path corrected for SSR output**
	Start command uses `react-router-serve ./build/server/index.js` so the server build is executed directly in production mode.

## Notes

- Minor visual differences may exist if dependency versions differ from the original source revision.
- The homepage-only behavior (non-functional top navigation links) is expected by the assignment.

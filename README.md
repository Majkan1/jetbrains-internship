# Kotlin Website — React Router 7 Migration

> **JetBrains Front-End Internship — Task #2**
> Migration of the [kotlinlang.org](https://kotlinlang.org) homepage from a legacy React SPA to React Router 7 Framework Mode with Server-Side Rendering (SSR).



---

## Screenshots

![Screenshot 1](../Screenshot%202026-03-16%20172441.png)
![Screenshot 2](../Screenshot%202026-03-16%20172630.png)
![Screenshot 3](../Screenshot%202026-03-16%20172656.png)
![Screenshot 4](../Screenshot%202026-03-16%20172724.png)
![Screenshot 5](../Screenshot%202026-03-16%20172759.png)
![Screenshot 6](../Screenshot%202026-03-16%20172826.png)
![Screenshot 7](../Screenshot%202026-03-16%20172854.png)

---

## What this is

The assignment provided a legacy React homepage based on a stripped-down revision of kotlinlang.org running at `localhost:9000`. The task was to migrate it to a modern architecture using **React Router 7 Framework Mode** with **SSR enabled**, preserving all visual appearance and interactive behaviour.

This is not a redesign. It is an architectural migration — the same page, running on a fundamentally different rendering model.

---

## What changed architecturally

| Before | After |
|---|---|
| Legacy React SPA — client-side rendering only | React Router 7 Framework Mode — SSR + hydration |
| No routing framework | Route-based architecture (`root.tsx`, `routes.ts`, `routes/home.tsx`) |
| No containerisation | Multi-stage Docker build |
| No deployment config | Vercel deployment via `vercel.json` |

---

## Tech stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI layer |
| React Router | 7 (Framework Mode) | SSR, routing, server entry point |
| TypeScript | 5 | Static typing throughout |
| Tailwind CSS | 4 | Utility-first styling |
| Vite | 7 | Build tool and dev server |
| Docker | — | Containerised production build |
| Vercel | — | Cloud deployment target |

---

## Project structure

```
jetbrains-internship/
├── app/
│   ├── root.tsx              # HTML shell — wraps every route with <html>, <head>, <body>
│   ├── routes.ts             # Route config — maps "/" to home.tsx
│   ├── app.css               # Tailwind + JetBrains Sans font
│   ├── Header.tsx            # JetBrains header — client-only with SSR placeholder
│   ├── Footer.tsx            # JetBrains footer — lazy loaded after hydration
│   └── routes/
│       └── home.tsx          # Migrated Kotlin homepage with interactive sections
├── public/
│   └── assets/               # SVG logos (Gradle, Corda, Evernote, Spring, etc.)
├── react-router.config.ts    # SSR enabled: { ssr: true }
├── vite.config.ts            # SSR bundle config for JetBrains packages
├── typings.d.ts              # Type declarations for @jetbrains/kotlin-web-site-ui
├── Dockerfile                # Multi-stage production build
└── vercel.json               # Vercel deployment config
```

---

## Technical decisions

### 1. `ssr: true` in `react-router.config.ts`

```ts
export default {
  ssr: true,
} satisfies Config;
```

This single line changes the entire build output. React Router produces two bundles — a server bundle and a client bundle. On the first request, the server runs the React code and sends back fully-rendered HTML. The browser receives real content immediately, then React hydrates the page and attaches event handlers without re-rendering from scratch.

Without this, the build produces a standard SPA where the browser receives an empty `<div id="root">` and renders everything client-side — which is the architecture the legacy app used.

### 2. `noExternal` in `vite.config.ts` for JetBrains packages

```ts
ssr: {
  noExternal: ["@jetbrains/kotlin-web-site-ui", /@rescui\/.+/],
},
```

When running SSR, Vite by default treats `node_modules` as external — it imports them at runtime in Node.js rather than bundling them. The `@jetbrains/kotlin-web-site-ui` and `@rescui/*` packages use browser APIs internally (`window`, `document`). Node.js has neither, so importing them as externals crashes the server build.

Setting `noExternal` forces Vite to bundle these packages into the server output, where their browser API calls can be intercepted and handled rather than crashing Node.js.

### 3. Client-only rendering for Header and Footer

The JetBrains Header and Footer components use browser APIs that are unavailable during SSR. Two different patterns were used to handle this:

**Header — `isClient` guard:**
```tsx
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  return <div style={{ height: "64px", background: "#19191c" }} />;
}
```
On the server, `useEffect` never runs, so `isClient` stays `false` and a placeholder div is rendered. On the client, after hydration, `useEffect` fires, `isClient` becomes `true`, and the real header renders. This prevents a server crash while keeping the page layout stable — the placeholder matches the header's height so there is no layout shift.

**Footer — dynamic import inside `useEffect`:**
```tsx
useEffect(() => {
  Promise.all([
    import("@jetbrains/kotlin-web-site-ui/out/components/footer/index.js"),
    import("@jetbrains/kotlin-web-site-ui/out/components/footer/index.css")
  ]).then(([mod]) => {
    setComp(() => mod.default);
  });
}, []);
```
The footer module is never imported at the top level — it is loaded dynamically after the component mounts on the client. This means the server never attempts to evaluate the footer code at all.

Both patterns solve the same SSR problem with different tradeoffs: `isClient` is simpler and renders the real component synchronously after hydration; dynamic import is more explicit and avoids even loading the module on the server.

### 4. TypeScript declarations for untyped packages

```ts
// typings.d.ts
declare module '@jetbrains/kotlin-web-site-ui/out/components/header/index.js';
declare module '@jetbrains/kotlin-web-site-ui/out/components/footer/index.js';
```

The JetBrains UI packages do not ship TypeScript type definitions. Without these declarations, TypeScript throws a `Cannot find module` error on every import. Adding manual module declarations tells TypeScript to treat these imports as `any`, which is the correct approach when consuming untyped third-party packages.

### 5. Interactive sections in `home.tsx`

The homepage contains two interactive sections that required React state management:

**"Why Kotlin" tab switcher** — five tabs (Concise, Safe, Expressive, Interoperable, Multiplatform) each displaying different code samples:
```tsx
const [activeWhyTab, setActiveWhyTab] = useState<
  "Concise" | "Safe" | "Expressive" | "Interoperable" | "Multiplatform"
>("Concise");
```

**Usage highlights sort** — a grid of company cards that can be sorted alphabetically:
```tsx
const [usageSortMode, setUsageSortMode] = useState<"default" | "az">("default");

const displayedUsageHighlights =
  usageSortMode === "az"
    ? [...usageHighlights].sort((a, b) => a.name.localeCompare(b.name))
    : usageHighlights;
```

Both features were present in the original legacy app and are preserved in the migration.

### 6. Existing `@rescui` dependencies retained

The original source used JetBrains' internal `@rescui` component ecosystem. Rather than replacing these with generic alternatives, all existing dependencies were kept. Replacing them would have introduced visual regressions and deviated from the assignment requirement to preserve the original appearance.

### 7. Production server uses `react-router-serve`

```json
"start": "react-router-serve ./build/server/index.js"
```

In SSR mode, the build produces a Node.js server file, not a static `index.html`. A static file server would serve the build folder but cannot execute server-side rendering. `react-router-serve` starts a Node.js HTTP server that handles each request by running the React SSR pipeline and returning rendered HTML.

---

## Getting started

### Option 1 — Local development

```bash
# Clone the repository
git clone https://github.com/Majkan1/jetbrains-internship.git
cd jetbrains-internship

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Option 2 — Production build

```bash
npm run build
npm run start
```

Production server runs at [http://localhost:3000](http://localhost:3000).

### Option 3 — Docker

```bash
# Build the image
docker build -t kotlin-homepage .

# Run the container
docker run -p 3000:3000 kotlin-homepage
```

Open [http://localhost:3000](http://localhost:3000).

### Type checking

```bash
npm run typecheck
```

---

## Verifying SSR works

SSR is working when the page source contains fully rendered HTML — not an empty root div.

1. Run the production server (`npm run start` or Docker)
2. Open [http://localhost:3000](http://localhost:3000)
3. Right-click → **View Page Source**
4. The source should contain complete HTML with page content — not just `<div id="root"></div>`

Interactive sections (tab switching, sort toggle) continue working after hydration — they are handled by the client bundle that React Router attaches following the initial server render.

---

## Assignment constraints

These are intentional and match the assignment specification:

- **Navigation links are non-functional** — the assignment covered the homepage only; top navigation links remain non-functional by design, as in the source revision provided
- **Minor visual differences** — may exist if `@rescui` or `@jetbrains/kotlin-web-site-ui` dependency versions differ from the original source revision

---

## What I learned

- How React Router 7 Framework Mode differs from SPA mode and the exact build output each produces
- The SSR + hydration lifecycle: server renders HTML → client receives pre-rendered content → React hydrates and attaches interactivity
- Two practical patterns for handling browser-only third-party components in an SSR environment (`isClient` guard and dynamic import in `useEffect`)
- Why `noExternal` is needed in Vite's SSR config for packages that reference browser globals
- How to write TypeScript module declarations for untyped third-party packages
- Why `react-router-serve` is required for SSR production deployment instead of a static file server
- How to containerise a Node.js SSR application using a multi-stage Docker build

---

## License

MIT
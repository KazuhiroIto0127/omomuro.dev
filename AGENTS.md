 # Repository Guidelines

 ## Project Structure & Module Organization
 - Source: `pages/` (Next.js pages router), shared UI in `components/`, utilities in `lib/`, state in `context/`, hooks in `hooks/`.
 - Content: Markdown and assets in `contents/` and `public/`.
 - Config: `config/` (headers, navigation), styling in `styles/` (Tailwind v4), types in `types/`, models in `models/`.
 - Path alias: import via `@/*` (see `tsconfig.json`).

 ## Build, Test, and Development Commands
 - `npm run dev`: Start local dev server on `http://localhost:3000`.
 - `npm run build`: Production build (`.next/`).
 - `npm run start`: Run the built app.
- `npm run lint`: ESLint (Next.js rules + Prettier).
- `npm run format`: Prettier write.
 - `npm run biome:check`: Biome lint/format check (no writes).
 - `npm run biome:fix`: Biome apply fixes and formatting.
 - `npm run biome:format`: Biome formatter only.
- Node: use 22.x (see `package.json engines`). If using `nvm`, align `.nvmrc` accordingly. Docker files exist but are secondary to local dev.

 ## Coding Style & Naming Conventions
 - Formatting: Prefer Biome (120 cols, single quotes, semicolons). Keep Prettier for Tailwind class sorting if needed.
- Linting: `eslint` extends `next/core-web-vitals` and `prettier`.
 - TypeScript: prefer explicit props types; avoid `any`. Keep modules small and focused.
 - Naming: React components `PascalCase.tsx` in `components/`; hooks `useX.ts`; utilities `camelCase.ts`; pages follow route names in `pages/`.
 - Styling: Tailwind-first; co-locate minor CSS modules in `styles/` only when needed.

 ## Testing Guidelines
 - No test runner is configured yet. If adding tests:
   - Unit: `*.test.ts(x)` colocated or under `__tests__/` using Vitest/Jest.
   - E2E: Playwright under `e2e/` with basic page render checks.
   - Keep PRs small and cover new utilities in `lib/`.

 ## Commit & Pull Request Guidelines
 - Commit style: Conventional Commits (used in history: `feat:`, `refactor:`, `chore:`, `update:`).
   - Examples: `feat: add Speed Insights integration`, `refactor: extract Gallery grid util`.
 - PR checklist:
   - Clear description, linked issue (if any), and screenshots/GIFs for UI changes.
   - All pages build locally: `npm run build` passes; `npm run lint` is clean.
   - Update content/config when applicable (`contents/`, `config/`).

 ## Security & Configuration Tips
 - Secrets: use `.env.local` (never commit). Refer via `process.env.*`.
 - Images: remote hosts configured in `next.config.js`; add patterns before use.
 - Assets: place in `public/` and reference with absolute paths (e.g., `/images/...`).
 - Ignore generated artifacts (`.next/`, sitemap) in reviews unless config changes.

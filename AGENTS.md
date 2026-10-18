# Repository Guidelines

omomuro.dev is a Next.js 16 site (Pages Router) that presents Kazuhiro Ito's iPhone/iPad apps. It also serves the support and privacy-policy pages registered in App Store Connect. Every page exists in Japanese and English. See `README.md` for the page map.

## Hard rules

- **Never change the paths of support/privacy pages** (`/works/<app>/support`, `/works/<app>/privacy` and their `/en/` versions). They are registered in App Store Connect. The full list is in `docs/url-inventory.md`. If a public URL must change, add a 301 redirect in `next.config.js`.
- The canonical domain is `https://omomuro.dev` (no `www`). Use `SITE_URL` from `lib/site.ts`.
- Keep Japanese and English pages paired. When you add a page, add its counterpart and make sure `alternatePaths` in `lib/i18n.ts` maps it.
- Do not push to `main` without the owner's explicit OK. Pushing `main` deploys to production on Vercel. Feature branches get preview deployments.

## Structure

- `lib/apps.ts`: single source of truth for the apps (names, catch copy, pricing, tint color, App Store URL, English fields, screenshot count). The home page, app heroes, JSON-LD and Smart App Banner all read from it.
- `lib/i18n.ts`: language detection from the path, ja⇄en path mapping, and `Accept-Language` parsing.
- `proxy.ts`: redirects visitors whose browser languages exclude Japanese to the English page. Crawlers are excluded, and a `lang` cookie set by `LanguageLink` overrides it.
- `components/AppHero.tsx`, `components/AppDocument.tsx`, `components/AppMeta.tsx`: shared app page parts. `components/<app>/Document.tsx` are thin wrappers around `AppDocument`.
- `components/pages/HomePage.tsx`, `components/pages/AboutPage.tsx`: page bodies shared by `ja` and `en` routes.
- `contents/works/<app>.md`: Japanese app intro (rendered by `pages/works/[slug].tsx`).
- `pages/works/<app>/…`: support, privacy and English pages.
- `styles/globals.css`: design tokens (`paper`, `card`, `ink`, `sub`, `line`, `accent`) with dark mode, and `font-maru` for headings.
- `public/images/apps/`: app icons and App Store screenshots (`screens/<app>/{ja,en}/<n>.jpg`).

## Design

The look is minimal and soft: an off-white paper background, white cards, rounded-gothic headings (Zen Maru Gothic) and Zen Kaku Gothic body text. Use the color tokens instead of raw Tailwind colors so dark mode keeps working. No decorative animation.

## Commands

- `npm run dev`: local dev server on `http://localhost:3000`.
- `npm run build`: production build (also generates the sitemap).
- `npm run lint`: ESLint flat config (`eslint.config.mjs`, Next core-web-vitals + Prettier).
- `npx tsc --noEmit`: type check.
- `npx prettier --write <files>`: format the files you touched.

Before finishing a change, run type check, lint and build. For UI changes, check light and dark mode and a 375px-wide viewport.

## Commits

Use Conventional Commits (`feat:`, `fix:`, `chore:`, `content:`, `design:`).

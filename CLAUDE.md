# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (includes sitemap generation)
npm run build

# Start production server
npm start

# Lint code with ESLint
npm run lint

# Format code with Prettier
npm run format
```

## Architecture Overview

This is a Next.js 15 portfolio website for Kazuhiro Ito built with TypeScript and Tailwind CSS. The site features:

### Content Management System
- **Markdown-based content** stored in `contents/` directory
- **Books**: Markdown files in `contents/books/` with frontmatter for metadata
- **Works**: Markdown files in `contents/works/` for project portfolios
- Content is processed using `gray-matter` for frontmatter parsing
- Static generation via `getStaticProps` and `getStaticPaths`

### Layout System
- **One-column layout** (`oneColumnLayout.tsx`) for content pages like individual books/works
- **Global state management** via React Context for sidebar visibility (`GlobalContext`)
- **Theme support** using `next-themes` for dark/light mode switching

### Key Features
- **Dynamic routing** for books (`/books/[slug]`) and works (`/works/[slug]`)
- **View Transition API** integration for smooth page transitions (experimental)
- **Interactive animations** using Framer Motion, GSAP, Rive, and Three.js
- **Image optimization** with Next.js Image component and Sharp
- **SEO optimization** with custom Head component and next-sitemap
- **Analytics** integration (Vercel Analytics + Google Analytics)

### Component Architecture
- **Atomic design** approach with reusable components in `components/`
- **Layout components** in `components/layouts/`
- **Feature-specific components** organized by page (e.g., `components/home/`, `components/labs/`)
- **TypeScript types** defined in `types/` directory for data models

### Styling
- **Tailwind CSS** with custom configurations
- **CSS modules** for specific components (e.g., `HeroOutline.module.css`)
- **Responsive design** with mobile-first approach
- **Dark mode support** throughout the application

### Content Structure
- Books and works use consistent frontmatter structure with fields like title, description, dates, etc.
- Images stored in `public/images/` with organized subdirectories
- Gallery metadata managed via JSON files

When working on this codebase:
- Always use the `@/` path alias for imports
- Follow the existing TypeScript patterns and component structure
- Test responsive behavior and dark mode compatibility
- Run lint and format commands before committing changes
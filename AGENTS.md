# AGENTS.md — ai-free-llm-web

## Stack

- **Astro 5** (SSG, `output: "static"`)
- **Tailwind CSS 3**
- **MDX** (Content Collections for blog + changelog)
- **TypeScript** (strict)

## Commands

```bash
pnpm dev          # dev server
pnpm build        # pnpm astro check && pnpm astro build
pnpm preview      # preview built output
```

## Architecture

- All pages are statically generated at build time. Zero JS runtime shipped by default.
- i18n via Astro built-in: `[locale]` file segments, ES default at `/`, EN at `/en/`.
- Accept-Language detection: client-side inline script on root page redirects to `/en/` if browser prefers English.
- **No React**, **no antd**, **no SPA framework**. All interactivity (theme toggle, FlowRing animation, scroll-fade, video modal) is vanilla JS inline.

### Folders

| Path | Description |
|---|---|
| `src/pages/[locale]/` | Route pages (index/landing, features, privacy, terms, changelog, blog) |
| `src/components/sections/` | Landing sections (Hero, Diagnostic, HowItWorks, CTA) |
| `src/components/layout/` | Header, Footer |
| `src/components/ui/` | GradientButton, SectionHeader, StatusBanner, AppLogo |
| `src/components/Trans.astro` | i18n `<Trans>` component for `<1>...</1>` rich text replacement |
| `src/i18n/locales/` | ES/EN JSON translation files |
| `src/i18n/t.ts` | `t()` and `parseTrans()` utilities |
| `src/styles/globals.css` | Theme CSS variables (light/dark), animations, base |
| `src/content/` | MDX content collections (blog, changelog) |
| `src/config.ts` | APP_NAME, APP_URL, Locale type |

### Theme

- CSS variables under `[data-theme="light"]` and `[data-theme="dark"]`
- Boot script in BaseLayout reads localStorage + prefers-color-scheme, sets `data-theme` and CSS variables on `<html>`
- Theme toggle writes to localStorage key `theme` (format: `{ state: { theme: "light" } }`) — same as the main SPA app, so theme preference is shared

### i18n

- `t(key, locale)` — returns translated string
- `<Trans key={key} locale={locale} />` — renders `<1>text</1>` as `<strong>text</strong>`, supports `tagMap` prop for custom mappings (e.g. `tagMap={{ "1": 'span class="gradient-text"' }}`)
- Rich text in locale files uses `<1>...</1>` tags (compatible with original SPA format)

## Skills

Skills are loaded from `.agents/skills/`. Each provides the agent with project-specific context and patterns.

### Skills comunitarias (instaladas vía `npx skills`)

| Skill | Source | Propósito |
|---|---|---|
| `astro` | `astrolicious/agent-skills` | Convenciones de Astro 5 SSG, islands, content collections |
| `tailwind-design-system` | `wshobson/agents` | Patrones de Tailwind, design tokens, utility-first CSS |
| `accessibility` | `addyosmani/web-quality-skills` | Auditoría de accesibilidad web (de Addy Osmani, Chrome team) |
| `wcag-audit-patterns` | `wshobson/agents` | Patrones de auditoría WCAG 2.2 AA/AAA |
| `frontend-design` | `anhtropic/skills` | Guías de diseño frontend (de Anthropic) |
| `typescript-advanced-types` | `wshobson/agents` | Tipos avanzados de TypeScript, genéricos, branded types |

### Skills oficiales del sistema

| Skill | Fuente | Propósito |
|---|---|---|
| `cloudflare` | `cloudflare/skills` (oficial) | Plataforma Cloudflare (Workers, Pages, KV, D1, R2) |
| `wrangler` | `cloudflare/skills` (oficial) | CLI de Wrangler para deploy y desarrollo |
| `web-perf` | `cloudflare/skills` (oficial) | Auditoría de rendimiento web (Core Web Vitals) |
| `cognitive-doc-design` | Sistema opencode | Diseño de documentación técnica y MDX |
| `context7-mcp` | Sistema opencode | Documentación actualizada de librerías vía MCP |

## Related

- SPA app lives at `C:\Users\cesar\Projects\ai-free-llm` (ai-free-llm). Deployed at app.example.com.
- This site deploys to example.com. User handles Cloudflare integration.

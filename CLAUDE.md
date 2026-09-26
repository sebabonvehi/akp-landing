# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page landing for AKP Digital Dental Lab (CAD/CAM dental lab). Visible copy is Spanish (Argentina); code, comments and commit messages are in English. Stack: React 19 + Vite 8, Tailwind CSS v4, oxlint, Prettier. Node >= 22 (`.nvmrc`).

## Commands

```bash
npm run dev           # Vite dev server
npm run build         # production build to dist/
npm run preview       # serve the build
npm run lint          # oxlint (config: .oxlintrc.json)
npm run format        # Prettier write
npm run format:check  # Prettier check
```

There is no test suite. Before every commit, `format:check`, `lint` and `build` must pass.

## Architecture

- `src/App.jsx` composes the page from `src/sections/*` (page blocks). `src/components/*` holds generic UI primitives (Button, Input, Select, Card, FieldShell…).
- **All visible copy and contact data live in `src/data/*.js`**, not in JSX. Change text there. Contact details (email, phone in E.164, specialties, validation messages, inquiry labels) are in `src/data/contact.js`.
- `src/lib/` holds pure functions (validation, inquiry building, currency formatting, field a11y attrs); `src/hooks/` holds stateful logic.

### Contact form (no backend)

`useContactForm` validates on the client (`lib/validation.js`), builds subject/body with `lib/buildInquiry.js`, then either opens a `mailto:` URL or `wa.me` in a new tab. `fitUrlToLimit` truncates the text so the URL stays under ~2000 chars. Attachments (STL/PLY/OBJ, photos) can't go through `mailto:`, so the copy directs users to WeTransfer/Google Drive. On invalid submit, focus moves to the first invalid field by id — form field `id`s must match value keys.

### Styling

Tailwind v4 with no `tailwind.config.js`: design tokens are defined in `@theme` in `src/styles/theme.css`; `base.css` has global/focus/reduced-motion rules; `components.css` defines semantic classes (`.btn-primary`, `.input-field`, `.card`…). `index.css` is the entry. In JSX, use semantic classes and token-based utilities only — no hex colors or arbitrary values. Tokens come from `DESIGN.md` (read-only source of truth; don't edit it). Icons use Material Symbols loaded in `index.html` with an explicit `icon_names=` subset — add any new icon name there.

See `ARCHITECTURE.md` for layer rules and the contact-form flow.

## Pending (from README)

Final logo and photos, OG image 1200×630, domain confirmation (`akpdentallab.com` used in canonical, `public/sitemap.xml` and JSON-LD in `index.html`), confirm business hours and tariffs PDF link, hosting.

# DineCastleRock -- Conventions

## Code Style

- **TypeScript strict mode** -- no `any` types, explicit return types on exports
- **Path alias**: `@/*` maps to `./src/*`
- **Tailwind CSS v4** with OKLCH color space (warm orange-brown primary)
- **shadcn/ui** (New York style) with Radix UI primitives
- **System fonts only** -- no Google Fonts imports (performance)
- **ESLint 9** flat config via `eslint-config-next`

## Component Conventions

- All components in `src/components/`
- Shared Castle Rock Network components in `src/components/shared/`
- UI primitives (shadcn) in `src/components/ui/`
- Feature components grouped by page: `home/`, `listings/`
- Use `cn()` from `@/lib/utils` for conditional class merging

## Naming

- **Files**: kebab-case for utilities, PascalCase for components
- **Routes**: lowercase with hyphens (e.g., `add-listing`, `things-to-do`)
- **Dynamic routes**: `[slug]`, `[category]`, `[source]`
- **Route groups**: `(directory)`, `(website)` -- no URL impact

## API Route Conventions

- All routes in `src/app/api/`
- Rate limiting via `src/lib/rate-limit.ts` (100/min default)
- Return `NextResponse.json()` with proper status codes
- Include pagination metadata in list responses
- Database calls wrapped in try/catch with static data fallback

## Design System

- **Primary color**: oklch(0.65 0.18 35) -- warm orange-brown
- **Animations**: `float`, `pulse-glow`, `shimmer`, `fade-up`, `scale-in`, `blur-in`
- **Glass effects**: `.glass`, `.glass-dark`, `.glass-card`
- **Shadows**: `.shadow-modern`, `.shadow-glow`
- **Touch targets**: 44px minimum on all interactive elements
- **No backdrop-blur** on fixed/sticky elements (iOS Safari issue)

## De-branding

- NO "Epic AI" or "Epic Adventures" branding in visitor-facing UI
- Internal analytics tracking and code comments are fine
- Brand identity is "DineCastleRock" / "Dine Castle Rock"

## Image Handling

- Use Next.js `<Image>` with `quality={90}`
- Do NOT apply quality prop to Lucide icon components (`<ImageIcon>`, `<ImagePlus>`)
- `<Image fill>` requires a `sizes` prop (e.g., `sizes="100vw"` for heroes)
- Images stored in `public/images/`

## Git Conventions

- Branch: `main`
- Never commit `.env`, `.env.local`, `.env.production`
- Escape `[slug]` in zsh paths: `\[slug\]` or use quotes
- Commit message format: `type: description` (feat, fix, docs, refactor, style)

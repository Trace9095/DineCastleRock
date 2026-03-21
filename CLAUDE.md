# CLAUDE.md — DineCastleRock

> **Read this FIRST before touching any file in this repo.**

## Auto-Compact
Always enable autoCompact for long sessions:
```
claude config set autoCompact true
```

## Project Overview

**DineCastleRock** is a premium local dining and business directory for Castle Rock, Colorado. Part of the **Castle Rock Network** (Shop, Dine, Visit) — three interconnected tourism/business directory sites built by Epic AI.

- **Live URL:** https://dinecastlerock.co
- **GitHub:** https://github.com/Trace9095/DineCastleRock
- **Owner:** Trace Hildebrand (trace.hildebrand@gmail.com, GitHub: Trace9095)
- **Agency:** Epic AI (epicai.ai)
- **Vercel Team:** EPIC AI PROJECTS

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.1 |
| Language | TypeScript (strict) | 5.9.3 |
| UI | React | 19.2.3 |
| Styling | Tailwind CSS v4 (PostCSS) | 4.x |
| Components | shadcn/ui + Radix UI | New York style |
| Icons | lucide-react | 0.562.0 |
| Carousel | embla-carousel-react | 8.6.0 |
| Auth | Clerk (optional — disabled) | 6.36.5 |
| ORM | Prisma (optional — not required) | 6.19.1 |
| Payments | Stripe (optional) | 20.1.0 |
| Analytics | Vercel Analytics + EPIC AI tracking | — |

## Project Structure

```
DineCastleRock-main/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout (NetworkHeader/Footer)
│   │   ├── globals.css           # Design system (OKLCH warm orange)
│   │   ├── (directory)/          # Route group for categories
│   │   │   └── [category]/       # Dynamic category pages (17 categories)
│   │   ├── listing/[slug]/       # Business detail + claim
│   │   ├── guides/               # Dining guides (3+)
│   │   ├── add-listing/          # Business submission form
│   │   ├── advertise/            # Advertising info
│   │   ├── things-to-do/         # Activities page
│   │   ├── about/                # About page
│   │   ├── privacy/              # Privacy policy
│   │   ├── terms/                # Terms of service
│   │   ├── editorial-policy/     # Editorial policy
│   │   ├── admin/                # Admin dashboard (stub)
│   │   ├── sign-in/              # Clerk auth
│   │   ├── sign-up/              # Clerk auth
│   │   ├── sitemap.ts            # Dynamic sitemap
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   ├── llm.txt/route.ts      # AI LLM context route
│   │   └── api/                  # 7 API routes
│   ├── components/
│   │   ├── shared/               # NetworkHeader, NetworkFooter
│   │   ├── home/                 # Hero, CategoryGrid, FeaturedSection, DestinationsSection
│   │   ├── listings/             # ListingCard, FilterSidebar, SortSelect, Pagination, ReviewForm
│   │   └── ui/                   # shadcn/ui (27 components)
│   ├── lib/
│   │   ├── data.ts               # ALL business data (1,771 lines)
│   │   ├── utils.ts              # cn() utility
│   │   ├── rate-limit.ts         # In-memory rate limiter
│   │   ├── db.ts                 # Prisma singleton
│   │   ├── stripe.ts             # Stripe client
│   │   └── epic-usage.ts         # EPIC AI Dashboard tracking
│   └── middleware.ts             # Clerk auth (conditional)
├── prisma/
│   └── schema.prisma             # 9 models (optional — not required)
├── public/
│   ├── images/                   # 83 images (~24MB)
│   └── analytics.js              # EPIC AI tracking script
├── docker-compose.yml            # Local PostgreSQL setup
└── components.json               # shadcn/ui config
```

## Key Data

- **66 real Castle Rock businesses** in `src/lib/data.ts` (1,771 lines)
- **17 categories:** Restaurants, Breweries, Bars, Coffee, Dessert, Food Trucks, Takeout, Retail, Auto, Wellness, Kids, Gifts, Home Services, Professional, Beauty, Pets, Activities
- **4 destinations:** Downtown, Outlets at Castle Rock, The Promenade, Meadows Parkway
- **3+ dining guides:** Happy Hour, Date Night, Family Friendly
- **Real-time "Open Now" status** — timezone-aware (America/Denver), handles overnight hours

## Path Alias

`@/*` → `./src/*` (tsconfig.json)

## Design System

- **OKLCH color space** (warm orange-brown primary)
- Light mode: off-white background, dark text
- Dark mode: dark backgrounds, light text
- Primary: oklch(0.65 0.18 35) — warm orange-brown
- Custom shadows: `.shadow-modern`, `.shadow-glow`
- Custom animations: `float`, `pulse-glow`, `shimmer`, `fade-up`, `scale-in`, `blur-in`
- Glass effects: `.glass`, `.glass-dark`, `.glass-card`
- System fonts only (no Google Fonts — performance)

## Environment Variables

```bash
# ALL OPTIONAL — site works completely without env vars
DATABASE_URL                       # PostgreSQL (Prisma)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY  # Clerk auth (conditional)
CLERK_SECRET_KEY
STRIPE_SECRET_KEY                  # Stripe payments
NEXT_PUBLIC_APP_URL                # https://dinecastlerock.co
EPIC_API_KEY                       # Analytics tracking
```

## API Routes

| Method | Route | Purpose | Rate Limit |
|--------|-------|---------|------------|
| GET | /api/listings | List businesses (pagination, filtering) | 100/min |
| GET | /api/listings/[slug] | Single business detail | 100/min |
| GET | /api/categories | All 17 categories | 100/min |
| GET | /api/deals | Active deals/promotions | 100/min |
| GET | /api/trending | Trending businesses | 100/min |
| POST/GET | /api/claims | Business ownership claims | 100/min |

All API routes include proper error handling, rate limiting, and pagination metadata.

## Prisma Schema (9 models — optional)

User, Listing, Category, Deal, Account, Session, VerificationToken, AdPlacement, Claim

**Note:** Database is NOT required. App uses static data fallback in `src/lib/data.ts`.

## Known Issues / Tech Debt

1. **Database not connected** — Prisma ready but static data works fine
2. **Clerk auth disabled** — middleware conditionally loads only if env var present
3. **Some placeholder images** — Need real business photos
4. **Admin dashboard is a stub** — needs implementation
5. **Image optimization needed** — 83 images, many unoptimized
6. **Pagination is client-side** — "Load More" button, not server pagination

## Next.js Configuration

- Redirects for broken guide links (great-divide → great-divide-brewery-roadhouse)
- Security headers (HSTS, X-Frame-Options, CSP, etc.)
- Image caching (1 year, immutable)
- API caching (60s + stale-while-revalidate 300s)

## Sister Sites (Castle Rock Network)

| Site | URL | Status |
|------|-----|--------|
| ShopCastleRock | shopcastlerock.co | Production |
| DineCastleRock | dinecastlerock.co | Production |
| VisitCastleRock | visitcastlerock.co | Production |

All three share `NetworkHeader` and `NetworkFooter` components with cross-site navigation.

## Related Documentation

- `CLAUDE-CONTEXT.md` — Original project context (may be outdated)
- `HANDOFF-PROMPT.md` — Original LLM handoff prompt (may be outdated)
- `progress.md` — Development log

## Build & Deploy

```bash
npm run dev       # Development
npm run build     # Production build
npm run lint      # ESLint
```

Deployed on Vercel. Domain: dinecastlerock.co.

## Session History

- **Initial build:** 66-business dining directory with Apple/Tesla design, Embla carousel, comprehensive API
- **Session 29:** Added to Epic AI portfolio, CLAUDE.md created, audit completed
- **Session 30:** Added skip-to-content accessibility link + `id="main-content"` to layout.tsx
- **Session 31:** Legal date updates (privacy + terms: January 2025 → February 2026). Package version bump (0.1.0 → 1.0.0).
- **Session 34:** Gold standard audit (security headers, HSTS, robots, metadata). Fixed critical header overlap (pt-16 lg:pt-20 on main for fixed header). Added accessibility link to footer. Pushed commits e882b4f, 0f89015.
- **Session 59:** Version bump 1.1.0.
- **Session 101:** Favicon/icons fix + hero animation cleanup. Root cause: the `icons` metadata property in layout.tsx overrides Next.js file-based auto-detection, preventing `app/icon.svg` from generating `<link>` tags. Fix: removed `icons` from metadata. Brand-colored `src/app/icon.svg` and `src/app/favicon.ico` already existed. Also removed staggered `animate-fade-up` entrance animations and bouncing scroll indicator from hero section — content now loads instantly. SEO/LLM audit confirmed excellent foundations (dynamic sitemap, 19 AI crawlers in robots.ts, llms.txt, JSON-LD, RSS, OG images). Commits: `d11af57` (metadata), `b27a8b6` (app/icon.svg), `9d46118` (remove icons override), `118d160` (hero animation removal).

---
## Media Library

Master media library: `~/Documents/APPS/MEDIA/` — see `MEDIA/MEDIA_DIRECTORY.md` for full inventory.

- **Logos:** `MEDIA/logos/directories/castle-rock/dine-castle-rock/` (5 files)
- **Live images symlink:** `MEDIA/project-media/directories/castle-rock/dine-castle-rock` → `public/images`

*Last updated: Session 80 (March 2026)*

---

## Claude Context Files

Additional LLM context is available in the `.claude/` directory:

| File | Purpose |
|------|---------|
| `.claude/PROMPT.md` | LLM system prompt with key facts and rules |
| `.claude/CONTEXT.md` | Business context, data architecture, integrations |
| `.claude/ARCHITECTURE.md` | Full directory structure and request flow |
| `.claude/CONVENTIONS.md` | Code style, naming, design system, git conventions |
| `SETUP.md` | Service runbook (local dev, env vars, deploy, troubleshooting) |

---

## Session 124 Update (2026-03-20)

### Current Status
- **Build:** PASSING
- **Deployment:** LIVE at dinecastlerock.co
- **Vercel Slug:** `dine-castle-rock`
- **Version:** 1.4.1
- **Security:** OWASP audit complete (S121+S122)
- **Last commit:** `f7bba17` — S122 OWASP audit: Next.js 16.2.0

### Critical Architecture Warning — Route Shadow Bug
- Root `page.tsx` was shadowing `(website)/page.tsx` route group — FIXED in S117
- If any scaffold or generator recreates a root `page.tsx`, DELETE it immediately
- The fix: `fb05f89` (remove duplicate route group) + `00694c9` (audit route shadow cleanup)

### Recent Sessions
- **S117:** Route shadow deleted. Email FROM de-branding.
- **S118:** 11 duplicate route conflicts fixed
- **S121:** OWASP audit — Next.js 16.2.0, security headers added
- **S122:** Full portfolio security sweep passed
- **S124:** This CLAUDE.md refresh

### Known Issues / Tech Debt
1. Database not connected — Prisma schema ready (9 models), no `DATABASE_URL` in Vercel
2. Admin dashboard is a stub — needs implementation
3. 83 images (~24MB), some placeholder images need real business photos
4. Per-page `opengraph-image.tsx` missing from many pages (Gold Standard #37)

### Completed Work (DO NOT REDO)
- Route shadow fix (root page.tsx deleted) — S117
- OWASP Top 10 security audit — S121+S122
- Email FROM de-branding — S117
- NetworkHeader/NetworkFooter unified across Castle Rock Network — S99
- Backdrop-blur removed from fixed header
- Favicon/icons fix (removed `icons` metadata override)
- AnimatedUI components added
- Real-time "Open Now" status (America/Denver timezone-aware, handles overnight hours)

## CEO Rules for This Project

1. NEVER show "Epic AI" branding visitor-facing — this is an independent Castle Rock dining directory
2. De-branding: no "Epic AI" in email FROM names
3. Castle Rock Network: NetworkHeader/Footer shared with ShopCR + VisCR. Fixed `top-0 z-50` opaque bg (NO backdrop-blur). 44px touch targets. Pages need `pt-16 lg:pt-20`.
4. Route shadow warning: if a root `page.tsx` appears alongside `(website)/page.tsx`, DELETE the root one.
5. Prisma schema exists but is NOT wired to DB — do not assume database is connected.
6. npm is the package manager for this project (not pnpm).
7. All business data lives in `src/lib/data.ts` (1,771 lines) — never fabricate restaurant info.
8. RT has NO happy hour — only named daily specials (Margarita Monday, etc.).

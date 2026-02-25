# CLAUDE.md — DineCastleRock

> **Read this FIRST before touching any file in this repo.**

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

---
*Last updated: Session 59 (February 2026)*

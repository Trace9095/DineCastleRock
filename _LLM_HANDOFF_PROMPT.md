# DineCastleRock — LLM Handoff Prompt

> Last updated: February 19, 2026 | Session 49

## Quick Facts
- **Domain:** https://dinecastlerock.co
- **GitHub:** Trace9095/DineCastleRock
- **Vercel Slug:** `dine-castle-rock`
- **Framework:** Next.js 16 (App Router)
- **Root Dir:** -- (no subdirectory)
- **Branch:** main

## What This Project Is
DineCastleRock is a premium local dining and restaurant directory for Castle Rock, Colorado. It features 66 real businesses across 17 categories with real-time "Open Now" status detection. Part of the Castle Rock Network — three interconnected directory sites (Shop, Dine, Visit) sharing a common navigation system.

## Tech Stack
- Next.js 16.1.1, TypeScript (strict), React 19
- Tailwind CSS v4 (PostCSS, OKLCH color space), shadcn/ui + Radix UI (27 components)
- Embla Carousel, lucide-react icons
- Clerk auth (conditional -- only loads if env var present), Stripe payments (optional)
- Prisma schema exists (9 models) but NOT required -- uses static data in `src/lib/data.ts`
- In-memory rate limiter (`lib/rate-limit.ts`)
- Vercel Analytics + Epic AI tracking
- System fonts only (no Google Fonts -- performance optimization)

## Directory Structure
```
DineCastleRock-main/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout (NetworkHeader/Footer)
│   │   ├── globals.css           # OKLCH warm orange design system
│   │   ├── (directory)/[category]/ # Dynamic category pages (17)
│   │   ├── listing/[slug]/       # Business detail + claim
│   │   ├── guides/               # Dining guides (Happy Hour, Date Night, Family)
│   │   ├── add-listing/          # Business submission form
│   │   ├── advertise/            # Advertising info
│   │   ├── things-to-do/         # Activities page
│   │   ├── privacy/ terms/ editorial-policy/ about/
│   │   ├── sitemap.ts            # Dynamic sitemap
│   │   ├── robots.ts             # Dynamic robots (19-bot standard)
│   │   ├── llm.txt/route.ts      # AI LLM context route
│   │   └── api/                  # 7 routes (listings, categories, deals, trending, claims)
│   ├── components/
│   │   ├── shared/               # NetworkHeader, NetworkFooter
│   │   ├── home/                 # Hero, CategoryGrid, FeaturedSection, DestinationsSection
│   │   ├── listings/             # ListingCard, FilterSidebar, SortSelect, Pagination, ReviewForm
│   │   └── ui/                   # shadcn/ui (27 components)
│   ├── lib/
│   │   ├── data.ts               # ALL business data (1,771 lines, 66 businesses)
│   │   ├── rate-limit.ts         # In-memory rate limiter
│   │   └── utils.ts, db.ts, stripe.ts, epic-usage.ts
│   └── middleware.ts             # Clerk auth (conditional)
├── prisma/schema.prisma          # 9 models (optional)
├── public/images/                # 83 images (~24MB)
└── docker-compose.yml            # Local PostgreSQL setup
```

## Key Architecture
- **Castle Rock Network:** DineCR, ShopCR, and VisCR share `NetworkHeader` and `NetworkFooter` components with cross-site navigation links.
- **Fixed header:** Uses `fixed top-0 z-50` -- main content needs `pt-16 lg:pt-20` to avoid overlap.
- **Static data:** All 66 businesses live in `src/lib/data.ts` (1,771 lines). No database required.
- **Real-time "Open Now":** Timezone-aware (America/Denver), handles overnight hours correctly.
- **7 API routes:** All include rate limiting (100/min), error handling, and pagination metadata.
- **Conditional auth:** Clerk middleware only activates if `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is set.
- **Path alias:** `@/*` maps to `./src/*`

## Brand Identity
- **Color space:** OKLCH (warm orange-brown theme)
- **Primary:** `oklch(0.65 0.18 35)` -- warm orange-brown
- **Light mode:** Off-white background, dark text
- **Dark mode:** Dark backgrounds, light text
- **Glass effects:** `.glass`, `.glass-dark`, `.glass-card`
- **Shadows:** `.shadow-modern`, `.shadow-glow`
- **Animations:** `float`, `pulse-glow`, `shimmer`, `fade-up`, `scale-in`, `blur-in`
- **Fonts:** System fonts only (no Google Fonts)

## Operating Rules
- No "Epic AI" or "Epic Adventures" branding (client-facing site)
- Part of Castle Rock Network (ShopCR/DineCR/VisCR share NetworkHeader/NetworkFooter)
- Fixed header requires `pt-16 lg:pt-20` on main content wrapper
- robots.ts uses 19-bot gold standard allowlist
- Cookie consent: 3-tier banner with consent-gated analytics
- Security headers: HSTS 2yr+preload, CSP, X-Frame-Options DENY, Permissions-Policy
- Image quality: use `quality={90}` on `<Image>` components (Next.js 16 has no global config)
- All env vars are optional -- site works completely without them

## Current Status
- **Deployed:** dinecastlerock.co -- LIVE on Vercel
- **Last session:** Session 43 (Gold Standard cross-portfolio audit -- robots.ts expanded to 19-bot standard)
- **Build:** `npx next build` (no subdirectory)

## Known Issues
- Database not connected -- Prisma schema ready but static data works fine
- Clerk auth disabled by default -- middleware conditionally loads only if env var present
- Some placeholder images -- need real business photos
- Admin dashboard is a stub -- needs implementation
- 83 images (~24MB) mostly unoptimized
- Pagination is client-side ("Load More" button, not server-side)
- Footer missing contact email (network-wide Castle Rock issue)
- Email domain inconsistencies across Castle Rock network (hello@ vs info@, .com vs .co)

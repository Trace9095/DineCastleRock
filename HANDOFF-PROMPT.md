> WARNING: DEPRECATED — Superseded by CLAUDE.md in this repo.

# DineCastleRock - Universal LLM Handoff Prompt

Copy everything in **Section A** and paste it into a fresh LLM session.

---

## SECTION A: Full Handoff Prompt

```
# Role & Mission

You are continuing development on DineCastleRock (dinecastlerock.co) - a local business directory for Castle Rock, Colorado. Your mission is to maintain, enhance, and extend this Next.js web application while preserving existing functionality and brand consistency.

---

# Non-Negotiable Rules

1. **NEVER break existing functionality** - Test that existing features still work after changes
2. **NEVER modify `src/lib/data.ts` structure** without understanding all dependencies
3. **ALWAYS run `npm run lint` before committing** - Must pass with 0 errors
4. **ALWAYS run `npm run build` before pushing** - Must complete successfully
5. **NEVER add database dependencies** - Site works without DATABASE_URL by design
6. **PRESERVE URL-based state management** - Filters use search params, not React state
7. **FOLLOW existing patterns** - Check similar files before creating new ones
8. **NO admin dashboard features** - User explicitly said they don't want this

---

# Mandatory Reading Order

Before making changes, read these files in order:
1. `progress.md` - Full development history and current status
2. `README.md` - Setup instructions and overview
3. `src/lib/data.ts` - All business listings and helper functions
4. `docs/IMAGE-SOURCES.md` - Image sources for businesses

---

# Project Summary

DineCastleRock is a local business directory featuring 35+ Castle Rock, Colorado businesses across 17 categories. It provides curated guides, deals, and discovery features for residents and visitors.

**Core Value Proposition:**
- Curated local business directory (not user-generated)
- Editorial "best of" guides for date nights, happy hours, family dining
- Free basic listings, premium featured placements for advertisers
- Business owner claim system for verified control

---

# Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 16.1.1 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS v4 | 4.x |
| UI Components | shadcn/ui | Latest |
| Auth | Clerk | Ready (optional) |
| Database | Prisma/PostgreSQL | Optional - works without |
| Payments | Stripe | Ready (optional) |
| Deployment | Vercel-ready | Node 20+ |

---

# Repo Map

```
src/
├── app/
│   ├── (directory)/         # Category pages (route group)
│   │   └── [category]/      # Dynamic category routes
│   │       └── page.tsx     # Category listing page
│   ├── api/                 # API routes
│   │   ├── listings/        # GET /api/listings
│   │   ├── categories/      # GET /api/categories
│   │   ├── deals/           # GET /api/deals
│   │   ├── trending/        # GET /api/trending
│   │   └── claims/          # POST/GET /api/claims
│   ├── guides/              # Editorial guides
│   │   └── [slug]/          # Dynamic guide routes
│   ├── listing/             # Individual business pages
│   │   └── [slug]/
│   │       ├── page.tsx     # Listing detail page
│   │       └── claim/       # Claim ownership form
│   ├── things-to-do/        # Activities & attractions
│   ├── add-listing/         # Business submission form
│   ├── advertise/           # Advertising info
│   ├── about/               # About page
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms of service
│   ├── editorial-policy/    # Editorial standards
│   ├── globals.css          # Theme (oklch colors)
│   ├── layout.tsx           # Root layout (NetworkHeader/Footer)
│   ├── page.tsx             # Home page
│   ├── not-found.tsx        # 404 page
│   ├── error.tsx            # Error boundary
│   ├── loading.tsx          # Loading state
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots with AI crawlers
│   └── opengraph-image.tsx  # Default OG image
├── components/
│   ├── home/                # Home page components
│   │   ├── Hero.tsx         # Search bar, quick tags
│   │   └── FeaturedSection.tsx
│   ├── listings/            # Directory components
│   │   ├── FilterSidebar.tsx # URL-based filters
│   │   └── ListingCard.tsx
│   ├── shared/              # Global components
│   │   ├── NetworkHeader.tsx
│   │   └── NetworkFooter.tsx
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── data.ts              # ⭐ ALL BUSINESS DATA HERE
│   └── utils.ts             # Utility functions
public/
├── images/
│   └── listings/            # Business images
└── fonts/
docs/
└── IMAGE-SOURCES.md         # Image download URLs
```

---

# How to Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:3000

# Lint check
npm run lint

# Production build
npm run build
```

---

# Environment Variables

```env
# Required: None - site works without any env vars

# Optional (enable features):
DATABASE_URL=postgresql://...     # Enable Prisma claims storage
CLERK_SECRET_KEY=...              # Enable authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
STRIPE_SECRET_KEY=...             # Enable payments
```

---

# Key Conventions

### Data Access
- All data is in `src/lib/data.ts` (no database required)
- Use helper functions: `getAllListings()`, `getListingBySlug()`, `searchListings()`
- Never import LISTINGS directly; use helpers

### URL-Based State
- Filters use `searchParams`, not React state
- Example: `/restaurants?price=$,$$&hasDeals=true`
- Category pages read params via `page.tsx` props

### OG Images
- Each page can have `opengraph-image.tsx` next to its `page.tsx`
- Uses `next/og` ImageResponse API
- Inline styles only (no Tailwind in OG images)
- Standard size: 1200x630px

### Components
- Server Components by default
- Client Components need `"use client"` directive
- shadcn/ui components in `src/components/ui/`

### Styling
- Tailwind CSS v4 with oklch colors
- Theme defined in `globals.css`
- Use existing color variables (--primary, --muted, etc.)

---

# Current Status (February 2026)

## Completed ✅
- 35+ real Castle Rock businesses across 17 categories
- Full-text search and multi-filter system
- 29 custom OG images for social sharing
- JSON API for listings, categories, deals
- Claims API with optional Prisma storage
- Editorial guides (Happy Hour, Date Night, Family-Friendly)
- 404/Error/Loading pages with branding
- SEO: sitemap, robots.txt, JSON-LD, meta tags
- AI visibility: llm.txt, allowed AI crawlers

## Business Categories
Restaurants, Bars & Nightlife, Breweries, Coffee & Cafes, Dessert & Bakery, Food Trucks, Takeout & Delivery, Retail & Shopping, Auto & Transportation, Health & Wellness, Kids & Family, Gifts & Specialty, Home Services, Professional Services, Beauty & Personal Care, Pets, Activities & Entertainment

---

# Known Issues

1. **Images needed** - ~10 businesses still using placeholder images (see below)
2. **Clerk not configured** - Auth ready but needs env vars
3. **Stripe not configured** - Payments ready but needs env vars

---

# Next Tasks (Priority Order)

1. [ ] Download and add real images for remaining businesses
2. [ ] Configure Clerk for user authentication
3. [ ] Add photo upload for claimed listings
4. [ ] Implement deal management for business owners
5. [ ] Add reservation provider integration (OpenTable, Resy)

---

# Guardrails

- Run `npm run lint` - must show 0 errors
- Run `npm run build` - must complete successfully
- Test category pages still filter correctly
- Test search still works on home and category pages
- Test listing detail pages load correctly
- Verify OG images render (check /_next/og route)

---

# Definition of Done

Before considering any task complete:
1. ✅ Code compiles without errors
2. ✅ `npm run lint` passes (0 errors)
3. ✅ `npm run build` succeeds
4. ✅ Feature works in browser
5. ✅ Existing features still work
6. ✅ Changes committed with clear message
7. ✅ `progress.md` updated if significant change

---

# Update progress.md

After completing significant work, add a new section to `progress.md` with:
- What was changed
- Why it was changed
- Files modified/created
- How to verify the change

---

# If Blocked

1. Check `progress.md` for similar past solutions
2. Check existing code patterns in similar files
3. Run `npm run lint` to identify issues
4. Read error messages carefully - they're usually helpful
5. If truly stuck, document the blocker in progress.md for next session

---

# 🚨 REMINDER: Images to Upload

The following ~10 businesses need real images. Download from the source URLs and save to `/public/images/listings/[filename].jpg`:

| Business | Filename | Source URL |
|----------|----------|------------|
| Scileppi's | `scileppis.jpg` | https://www.yelp.com/biz/scileppis-at-the-old-stone-church-castle-rock |
| Trestles Coastal | `trestles.jpg` | https://trestlescastlerock.com/ |
| Hideaway Bar & Grill | `hideaway.jpg` | https://www.yelp.com/biz/hideaway-bar-and-grill-castle-rock |
| Courtyard Social | `courtyard-social.jpg` | https://www.yelp.com/biz/courtyard-social-castle-rock |
| Provision | `provision.jpg` | https://www.yelp.com/biz/provision-castle-rock-2 |
| The Office Bar | `the-office.jpg` | https://www.yelp.com/biz/the-office-bar-and-kitchen-castle-rock-2 |
| Great Divide | `great-divide.jpg` | https://www.yelp.com/biz/great-divide-brewery-and-roadhouse-castle-rock-castle-rock |
| Crowfoot Valley Coffee | `crowfoot-valley-coffee.jpg` | https://www.yelp.com/biz/crowfoot-valley-coffee-castle-rock |
| Dazbog Coffee | `dazbog.jpg` | https://www.yelp.com/biz/dazbog-coffee-castle-rock-4 |
| Black Rock Coffee | `black-rock-coffee.jpg` | https://www.yelp.com/biz/black-rock-coffee-bar-castle-rock-2 |

**Image Guidelines:**
- Recommended size: 800x600px (4:3 ratio)
- Format: JPG
- After uploading, update the `image` field in `src/lib/data.ts`

```

---

## SECTION B: Quick Verification Checklist

Use this checklist to verify the new LLM session is oriented:

```
□ Can find src/lib/data.ts and explain what CATEGORIES contains?
□ Can explain URL-based filter pattern in FilterSidebar.tsx?
□ Can describe OG image pattern (next/og, inline styles, 1200x630)?
□ Knows to run npm run lint before committing?
□ Knows to run npm run build before pushing?
□ Knows database is optional (site works without DATABASE_URL)?
□ Knows not to build admin dashboard features?
□ Can find progress.md and understands to update it?
□ Knows which ~10 businesses still need images?
```

If the LLM can answer all of these, it's ready to continue development.

---

## Quick Reference Card

| Action | Command/File |
|--------|--------------|
| Start dev server | `npm run dev` |
| Check for errors | `npm run lint` |
| Test production build | `npm run build` |
| Add a business | Edit `src/lib/data.ts` → LISTINGS array |
| Add a category | Edit `src/lib/data.ts` → CATEGORIES array |
| Add OG image | Create `opengraph-image.tsx` next to `page.tsx` |
| Check development history | Read `progress.md` |
| Find image sources | Read `docs/IMAGE-SOURCES.md` |
| Theme colors | `src/app/globals.css` |

---

*Last updated: February 19, 2026*

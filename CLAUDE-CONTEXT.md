> WARNING: DEPRECATED — Superseded by CLAUDE.md in this repo.

# DineCastleRock - Project Context for AI Development

## Project Overview

**DineCastleRock** is a premium local restaurant directory for Castle Rock, Colorado. Think Yelp, but hyper-local and with a premium, minimal aesthetic (Apple/Tesla-inspired). Part of a 3-site network:
- **visitcastlerock.co** - Tourism/attractions
- **dinecastlerock.co** - Restaurants (THIS PROJECT)
- **shopcastlerock.co** - Retail/shopping

**Live URL:** https://dinecastlerock.co (deployed on Vercel)

---

## Tech Stack

| Technology | Version | Notes |
|------------|---------|-------|
| Next.js | 16.1.1 | App Router, Server Components |
| React | 19.2.3 | Latest with Server Components |
| TypeScript | 5.9.3 | Strict mode |
| Tailwind CSS | 4.x | Latest v4 syntax |
| shadcn/ui | Latest | Radix-based components in `/src/components/ui/` |
| Clerk | 6.36.5 | Auth (currently commented out) |
| Prisma | 6.19.1 | ORM (not yet configured) |
| Stripe | 20.1.0 | Payments (not yet implemented) |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with schema markup
│   ├── (directory)/
│   │   └── [category]/page.tsx     # Category pages (/restaurants, /bars, etc.)
│   ├── listing/
│   │   └── [slug]/
│   │       ├── page.tsx            # Individual listing page
│   │       └── claim/page.tsx      # Claim listing page (noindex)
│   ├── guides/
│   │   ├── page.tsx                # All guides
│   │   └── [slug]/page.tsx         # Individual guide
│   ├── privacy/page.tsx            # Privacy Policy
│   ├── terms/page.tsx              # Terms of Service
│   ├── editorial-policy/page.tsx   # Editorial Policy
│   ├── about/page.tsx              # About page
│   ├── advertise/page.tsx          # Advertising info
│   ├── add-listing/page.tsx        # Add business form
│   └── admin/page.tsx              # Admin dashboard (stub)
├── components/
│   ├── home/                       # Homepage components
│   ├── listings/                   # Listing cards, filters, sort
│   │   ├── ListingCard.tsx
│   │   ├── FilterSidebar.tsx
│   │   └── SortSelect.tsx          # Client component for sorting
│   ├── shared/                     # Network-wide components
│   │   ├── NetworkHeader.tsx
│   │   └── NetworkFooter.tsx
│   └── ui/                         # shadcn/ui components
├── lib/
│   ├── data.ts                     # All listing data (28 businesses)
│   └── utils.ts                    # Utility functions
└── public/
    └── images/
        ├── home-hero.jpg
        ├── guides/                 # Guide hero images
        └── listings/               # Listing images
```

---

## Data Architecture

All listing data is in `src/lib/data.ts` as a TypeScript array. **No database yet.**

### Listing Type
```typescript
interface Listing {
    id: string
    slug: string
    name: string
    description: string
    cuisine: string
    price: '$' | '$$' | '$$$' | '$$$$'
    address: string
    phone: string
    website: string
    rating: number
    reviewCount: number
    image: string
    gallery: string[]
    features: string[]
    hours: Record<string, string>
    isOpen: boolean
    isPremium: boolean
    isFeatured: boolean
    categorySlug: string
    deals: { id: string; title: string; description: string }[]
    updatedAt: Date
}
```

### Categories
Valid category slugs (defined in `[category]/page.tsx`):
- `restaurants`
- `bars-nightlife` / `bars`
- `coffee`
- `takeout-delivery`
- `dessert`
- `food-trucks`
- `breweries`

### Current Listings (28 total)
**Restaurants:** Scileppi's, Castle Cafe, Trestles, Savina's, Bucket List Tavern, Cuba Cuba, Union Bistro
**Bars:** Courtyard Social, Hideaway, Whiskey Lodge, Provision (speakeasy), The Office, The Park
**Breweries:** Great Divide, Rockyard
**Coffee:** Lost Coffee, Crowfoot Valley, Dazbog, Black Rock
**Dessert:** Nothing Bundt Cakes, Crumbl Cookies
**Food Trucks:** Biker Jim's, Taste of Philly, Rockin Tacos
**Takeout:** MOD Pizza, Tokyo Joe's, Noodles & Company, Qdoba

---

## Key Features Implemented

### Real-time "Open Now" Calculation
```typescript
// In src/lib/data.ts
export function isOpenNow(hours: Record<string, string>): boolean
```
- Uses `America/Denver` timezone
- Handles overnight hours (e.g., bar closing at 2 AM)
- Called dynamically on each page render

### URL-based Filtering
Category pages support query params:
- `?q=search` - Text search
- `?sort=rating|reviews|name|newest`
- `?premium=true` - Premium listings only
- `?openNow=true` - Currently open
- `?hasDeals=true` - Has active deals
- `?price=$,$$` - Price filter (comma-separated)
- `?cuisine=mexican,italian` - Cuisine filter

### SEO Implementation
- **Sitewide schema:** WebSite + Organization in `layout.tsx`
- **Category pages:** CollectionPage + ItemList schema
- **Listing pages:** Restaurant/LocalBusiness schema
- **Claim pages:** `noindex, nofollow` via `layout.tsx` metadata

### 301 Redirects (next.config.ts)
```typescript
{
  source: '/listing/great-divide',
  destination: '/listing/great-divide-brewery-roadhouse',
  permanent: true,
},
{
  source: '/listing/provision',
  destination: '/listing/provision-castle-rock',
  permanent: true,
}
```

---

## Known Issues / Technical Debt

1. **Images:** Currently using placeholder category images. Real business images need to be downloaded (see `docs/IMAGE-SOURCES.md` for sources)

2. **No Database:** All data is hardcoded in `data.ts`. Prisma is installed but not configured.

3. **Auth Disabled:** Clerk is installed but commented out in `layout.tsx`

4. **Mobile Filters:** The mobile filter button exists but doesn't open a drawer/modal yet

5. **Pagination:** "Load More" button is a placeholder, no actual pagination

6. **System Fonts:** Using system fonts because Google Fonts fetch fails in some environments

---

## Styling Guidelines

- **Aesthetic:** Premium, minimal, Apple/Tesla-inspired
- **Colors:** Use CSS variables from `globals.css` (`--background`, `--foreground`, etc.)
- **Typography:** System font stack, tight tracking on headers
- **Components:** Use shadcn/ui from `/components/ui/`
- **No emojis** unless explicitly requested

---

## Development Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## Git Workflow

- **Main branch:** Production-ready code
- **Feature branches:** `claude/[feature-name]-[session-id]`
- Push with: `git push -u origin [branch-name]`

---

## Recent Work Completed

1. **Fixed 500 errors** on category pages (moved onChange to client component `SortSelect.tsx`)
2. **Added 301 redirects** for broken guide links
3. **Created legal pages** (Privacy, Terms, Editorial Policy)
4. **Added sitewide schema markup** (WebSite + Organization)
5. **Implemented real-time Open Now** calculation with timezone handling
6. **Added 10 new listings** (Dessert, Food Trucks, Takeout categories)
7. **Removed closed businesses** (Cork & Keg, Sweet Cow)
8. **Updated all images** to use existing category-appropriate placeholders

---

## Files to Read First

1. `src/lib/data.ts` - All business data and helper functions
2. `src/app/(directory)/[category]/page.tsx` - Category page with filtering
3. `src/app/listing/[slug]/page.tsx` - Individual listing page
4. `src/components/listings/ListingCard.tsx` - Card component
5. `src/app/layout.tsx` - Root layout with schema

---

## Image Sources Documentation

See `docs/IMAGE-SOURCES.md` for:
- Official website URLs for each business
- Instagram handles
- Yelp photo counts
- Recommended image dimensions (800x600 cards, 1920x1080 hero)

---

## Next Steps / Roadmap

1. **Download real business images** from sources in `docs/IMAGE-SOURCES.md`
2. **Set up Prisma database** for dynamic content
3. **Enable Clerk authentication** for business owners
4. **Implement Stripe** for premium listings
5. **Add mobile filter drawer**
6. **Implement actual pagination**
7. **Add user reviews/ratings** (currently showing Google ratings)
8. **Build admin dashboard** for managing listings

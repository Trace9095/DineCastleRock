# Dine Castle Rock - Development Progress

## Last Updated: January 9, 2026

---

## Completed Fixes & Features

### 1. Community Pages (Critical Fix)
**Issue:** `/add-listing`, `/advertise`, and `/about` routes were rendering the category listing template instead of their own content.

**Solution:** Created dedicated page components:
- `src/app/add-listing/page.tsx` - Business submission form with validation, success state
- `src/app/advertise/page.tsx` - Media kit with pricing, packages, contact info
- `src/app/about/page.tsx` - Mission statement, how rankings work, network info

### 2. Removed Database Dependency
**Issue:** Site required DATABASE_URL and Prisma setup to function.

**Solution:**
- Created `src/lib/data.ts` with static mock data
- No database needed - works out of the box
- All pages updated to use mock data helpers

### 3. Filter Sidebar Made Functional
**Issue:** Filter buttons led to error pages, didn't update URL or filter results.

**Solution:** Updated `src/components/listings/FilterSidebar.tsx`:
- Uses `useSearchParams` and `useRouter` for URL-based state
- Premium toggle, Open Now, Has Deals filters
- Price range multi-select ($, $$, $$$, $$$$)
- Cuisine type filters
- Reset button clears all filters
- Category page now reads and applies all filter params

### 4. Hero Search & Quick Tags Fixed
**Issue:** Home page search bar and quick tag buttons (Date Night, Happy Hour, etc.) were non-functional.

**Solution:** Updated `src/components/home/Hero.tsx`:
- Search form with state management
- Submits to /restaurants?q=query
- Quick tags now link to filtered category pages:
  - Date Night → /restaurants?cuisine=Italian,American&price=$$,$$$
  - Happy Hour → /bars-nightlife?hasDeals=true
  - Family Friendly → /restaurants?cuisine=American,Pizza,Mexican
  - Quick Bite → /takeout-delivery?price=$,$$
  - Coffee → /coffee

### 5. NetworkHeader Buttons Fixed
**Issue:** "Add Listing" and search buttons didn't navigate anywhere.

**Solution:** Updated `src/components/shared/NetworkHeader.tsx`:
- Add Listing → links to /add-listing
- Search icon → links to /restaurants

### 6. Real Castle Rock Businesses Added
**Issue:** Only 6 fake placeholder listings with made-up data.

**Solution:** Scraped real Castle Rock businesses and added 20 real listings:

**Restaurants:**
- Scileppi's at The Old Stone Church (Italian, $$$)
- Castle Cafe (American, $$)
- Courtyard Social (American, $$)
- Trestles Coastal Cuisine (Seafood, $$$)
- Savina's Mexican Kitchen (Mexican, $$)
- Bucket List Tavern (American, $$)
- Union American Bistro (American Bistro, $$$)
- Cuba Cuba (Cuban, $$)

**Bars & Nightlife:**
- Provision (Cocktail Bar, $$$)
- Hideaway Bar & Grill (American, $$)
- The Whiskey Lodge (Whiskey Bar, $$)
- The Office Co. Bar & Kitchen (American, $$)
- The Park Sports Bar (Sports Bar, $$)
- Cork and Keg (Bar, $)

**Breweries:**
- Great Divide Brewery & Roadhouse (Brewery, $$)
- Rockyard Brewing Company (Brewery, $$)

**Coffee:**
- Lost Coffee ($)
- Crowfoot Valley Coffee ($)
- Dazbog Coffee ($)
- Black Rock Coffee Bar ($)

All listings include:
- Real addresses and phone numbers
- Accurate hours of operation
- Real ratings and review counts
- Proper categorization
- Feature tags (Happy Hour, Patio, Family Friendly, etc.)
- Active deals where applicable

### 7. Search & Sorting Added
**Issue:** No way to search or sort directory listings.

**Solution:** Updated category page (`src/app/(directory)/[category]/page.tsx`):
- Search bar with full-text search (name, cuisine, description, features)
- Sort dropdown: Top Rated, Most Reviewed, A-Z, Newest
- Result count display ("Showing X of Y results")
- URL-based state for bookmarkable searches
- Filter parameters: premium, openNow, hasDeals, price, cuisine

### 8. Structured Data & API Endpoints
**Issue:** No machine-readable data for LLMs or SEO.

**Solution:** Created public JSON API:
- `GET /api/listings` - All listings with pagination
- `GET /api/listings/[slug]` - Single listing details
- `GET /api/categories` - All categories with counts
- `GET /api/deals` - Active deals only
- `GET /api/trending` - Trending listings
- `GET /llm.txt` - LLM index page with documentation

Added to listing pages:
- JSON-LD structured data (Schema.org Restaurant type)
- Dynamic meta titles/descriptions
- OpenGraph tags

### 9. FeaturedSection Buttons Fixed
**Issue:** "View All Restaurants" and similar buttons didn't navigate.

**Solution:** Updated `src/components/home/FeaturedSection.tsx`:
- Uses Next.js Link component with asChild pattern
- Both desktop and mobile "View All" buttons now work

---

## Technical Changes

### New Files Created
```
src/app/add-listing/page.tsx
src/app/advertise/page.tsx
src/app/about/page.tsx
src/app/api/listings/route.ts
src/app/api/listings/[slug]/route.ts
src/app/api/categories/route.ts
src/app/api/deals/route.ts
src/app/api/trending/route.ts
src/app/llm.txt/route.ts
src/lib/data.ts (20 real Castle Rock businesses)
```

### Files Modified
```
src/app/(directory)/[category]/page.tsx - Filter params, search, sort
src/app/listing/[slug]/page.tsx - JSON-LD, metadata
src/app/page.tsx - Database queries, improved sponsored section
src/components/home/Hero.tsx - Working search, linked quick tags
src/components/home/FeaturedSection.tsx - Working Link buttons
src/components/listings/FilterSidebar.tsx - URL-based filtering
src/components/shared/NetworkHeader.tsx - Working buttons
```

---

## Data Model (src/lib/data.ts)

Uses static TypeScript data - no database required:
- **Listing** - 20 real Castle Rock businesses
- **Category** - 7 categories (Restaurants, Breweries, Bars, Coffee, etc.)
- **Deal** - Active promotions linked to listings

Helper functions:
- `getAllListings()` - Get all listings
- `getListingBySlug(slug)` - Get single listing
- `getListingsByCategory(slug)` - Filter by category
- `getTrendingListings(limit)` - Premium + highest rated
- `getDateNightListings(limit)` - Date-friendly spots
- `getFeaturedListing()` - For sponsored section
- `getActiveDeals()` - All deals with listings
- `searchListings(query, category?)` - Text search

---

## API Reference

### GET /api/listings
Returns paginated listings.
```
Query params:
- category: filter by category slug
- limit: max results (default 50)
- offset: pagination offset
```

### GET /api/listings/[slug]
Returns single listing with full details.

### GET /api/categories
Returns all categories with listing counts.

### GET /api/deals
Returns active deals with listing info.

### GET /api/trending
Returns top trending listings.
```
Query params:
- window: time window (default "7d")
- limit: max results (default 10)
```

---

## January 2026 Update - Expanded Business Directory

### 10. Claims API Connected to Prisma
**Issue:** Claims were stored in an in-memory Map, lost on server restart.

**Solution:** Updated `src/app/api/claims/route.ts`:
- Conditionally uses Prisma when DATABASE_URL is configured
- Falls back to in-memory storage when database unavailable
- Maintains backwards compatibility - site works without database
- POST creates claims, GET retrieves all claims for admin

### 11. Added 15 New Castle Rock Businesses
**Issue:** Categories like Dessert, Beauty, Home Services, and Food Trucks were empty.

**Solution:** Added real Castle Rock businesses to `src/lib/data.ts`:

**Dessert & Bakery (3 new):**
- Nothing Bundt Cakes - Bundt cake specialty bakery
- Crumbl Cookies - Gourmet cookies with rotating weekly menu
- Sugar Rush Cakery - Food Network featured custom cakes (by appointment)

**Beauty & Personal Care (3 new):**
- Sage Salon and Spa - Luxury downtown salon, 16+ years
- Copperfalls Aveda Day Spa - Award-winning Aveda salon
- The Hair Shop - Neighborhood salon with friendly service

**Home Services (2 new):**
- Blue Sky Plumbing, Heating, Cooling & Electric - Family owned since 1989
- WireNut Home Services - Local Colorado company with "No Surprises" pricing

**Food Trucks (2 new):**
- Romo's Street Tacos - Family-owned authentic Mexican
- Stack'd - Award-winning birria tacos, voted Best Food Truck

**Gifts & Specialty (2 new):**
- The Barn - Antiques, clothing, largest Jellycat selection
- Amazing Lemons Boutique - Family-owned downtown boutique

**Takeout & Delivery (3 new):**
- MOD Pizza - Build-your-own artisan pizza
- Tokyo Joe's - Japanese fast casual bowls
- Qdoba Mexican Eats - Fresh Mexican fast-casual

### 12. Updated IMAGE-SOURCES.md
**Issue:** Documentation didn't include new business categories or image status.

**Solution:** Updated `docs/IMAGE-SOURCES.md`:
- Added Beauty & Personal Care section with sources
- Added Home Services section with sources
- Added Gifts & Specialty section with sources
- Added Food Trucks with real businesses
- Added Image Status Summary showing which listings have real vs placeholder images

---

## Remaining TODO

### High Priority
- [ ] Download real images for businesses (see docs/IMAGE-SOURCES.md for sources)
- [x] ~~Implement real-time "Open Now" status~~ (Already implemented via `isOpenNow()`)
- [x] ~~Add map embed to listing pages~~ (Already implemented)
- [x] ~~Add sitemap.xml generation~~ (Already exists at /sitemap.xml)

### Medium Priority
- [ ] Add user authentication for claiming (Clerk ready, needs env vars)
- [ ] Build admin dashboard for managing listings (basic version exists at /admin)
- [ ] Add photo upload for claimed listings
- [ ] Implement deal management for business owners
- [x] ~~Add more Castle Rock businesses~~ (Added 15 new businesses)

### Low Priority / Nice to Have
- [ ] Add reservation provider integration (OpenTable, Resy)
- [ ] Implement menu PDF upload
- [ ] Add accessibility/amenities fields
- [ ] Create email notification system

---

## For Future LLM Sessions

When working on this codebase:

1. **No database needed**: Uses static data in `src/lib/data.ts`
2. **API routes**: All in `src/app/api/` using Next.js Route Handlers
3. **Components**: shadcn/ui components in `src/components/ui/`
4. **Images**: Local images in `public/images/`
5. **Filters**: URL-based state via search params

Key patterns:
- Server Components fetch data via data.ts helpers
- Client Components use "use client" directive
- URL state for filters/search (no client state needed)
- All listings have unique slugs

To add more listings, edit `src/lib/data.ts` and add to the LISTINGS array.

---

## January 2026 Site Audit

### Audit Summary
Full site audit performed covering routes, links, lint, and sitemap validation.

### Lint Fixes (50 errors → 0)
Fixed all 50 lint errors across 12 files:
- Escaped special characters (`&apos;`, `&ldquo;`, `&rdquo;`) in JSX content
- Replaced `<a>` tags with Next.js `<Link>` for internal navigation
- Removed unused imports (Clock, NextRequest)
- Removed unused variables (retailListings)
- Removed unnecessary eslint-disable comments

### Route Inventory

**Implemented Routes (16 pages):**
| Route | Status | Notes |
|-------|--------|-------|
| `/` | ✅ Working | Home page |
| `/about` | ✅ Working | About page |
| `/add-listing` | ✅ Working | Business submission form |
| `/admin` | ✅ Working | Admin dashboard |
| `/advertise` | ✅ Working | Advertising info |
| `/editorial-policy` | ✅ Working | Editorial policy |
| `/guides` | ✅ Working | Guides index |
| `/guides/[slug]` | ✅ Working | Individual guides (3 defined) |
| `/listing/[slug]` | ✅ Working | Individual listing pages |
| `/listing/[slug]/claim` | ✅ Working | Claim listing form |
| `/privacy` | ✅ Working | Privacy policy |
| `/terms` | ✅ Working | Terms of service |
| `/things-to-do` | ✅ Working | Activities & attractions |
| `/[category]` | ✅ Working | Dynamic category pages (17 categories) |
| `/sign-in`, `/sign-up` | ✅ Working | Auth pages (Clerk) |

**API Routes (7 endpoints):**
- `GET /api/listings` - All listings with pagination
- `GET /api/listings/[slug]` - Single listing
- `GET /api/categories` - All categories
- `GET /api/deals` - Active deals
- `GET /api/trending` - Trending listings
- `POST /api/claims` - Submit claim
- `GET /api/claims` - Get all claims

### Sitemap Fixes
Fixed `src/app/sitemap.ts`:
- ✅ Added `/things-to-do` (was missing)
- ✅ Removed `/destinations/[slug]` (routes don't exist)
- ✅ Removed `/guides/outdoor-dining` (guide not defined)

### Social Sharing (OG Images)
Enhanced Open Graph images for better link previews:
- Created premium OG image with gradient design
- Added explicit image references to metadata
- Created dedicated `/things-to-do/opengraph-image`
- Added Apple-specific meta tags for iMessage

### Data Layer Fixes
Updated `src/lib/data.ts`:
- Added `DINING_CATEGORIES` constant
- Fixed `getTrendingListings()` to exclude non-dining categories
- Fixed `getDateNightListings()` to filter properly
- Fixed `getFeaturedListing()` to only return dining venues

### How to Verify

**Run lint check:**
```bash
npm run lint
# Should show 0 errors, 1 warning (img element)
```

**Run build:**
```bash
npm run build
# Should complete successfully
```

**Test pages manually:**
1. Home page loads with trending restaurants
2. Category pages show filtered listings
3. Guides load with correct listings
4. Things To Do shows Editor's Pick (The Edge Ziplines)
5. Social sharing preview works (test with https://cards-dev.twitter.com/validator)

---

## January 2026 - Responsive, SEO, AI Visibility & Branding Audit

### Branding Source of Truth
- **Layout shell**: `src/app/layout.tsx` (NetworkHeader + NetworkFooter)
- **Theme**: `src/app/globals.css` (oklch colors, modern shadows, glassmorphism)
- **Components**: `src/components/ui/` (shadcn/ui components)
- **Shared components**: `src/components/shared/` (NetworkHeader, NetworkFooter)

### Global States Created

| State | File | Status |
|-------|------|--------|
| 404 Not Found | `src/app/not-found.tsx` | Created |
| Error Boundary | `src/app/error.tsx` | Created |
| Loading | `src/app/loading.tsx` | Created |

**404 Page Features:**
- Branded with Utensils icon and primary color
- Clear "404" display with helpful message
- CTAs: Go Home, Browse Restaurants
- Popular page links (Restaurants, Bars, Coffee, Guides)

**Error Page Features:**
- Destructive color scheme with AlertTriangle icon
- Try Again button with reset() functionality
- Go Home fallback
- Error ID display for debugging
- Contact link for persistent issues

**Loading Page Features:**
- Animated logo with pulse effect
- Shimmer loading bar
- Minimal, clean design

### SEO & AI Visibility Audit

**Already Implemented (Verified):**
- Unique `<title>` per page with template pattern
- Meta descriptions on all pages
- Open Graph + Twitter Card tags
- Canonical URLs via metadataBase
- JSON-LD schema (WebSite, Organization)
- robots.txt with AI crawler allowlist
- sitemap.xml generated from data
- llm.txt for AI crawlers
- Semantic HTML (header, main, footer, article)
- Server-side rendering (all pages SSR/SSG)

**robots.txt AI Crawlers Allowed:**
- GPTBot, ChatGPT-User, Google-Extended
- Anthropic-ai, Claude-Web, cohere-ai, PerplexityBot

**Improvements Made:**
- Added llm.txt to AI crawler allow list in robots.ts

### Responsive Design Audit

**Key Viewports Tested:**
- Mobile: 360x800, 390x844
- Tablet: 768x1024
- Desktop: 1366x768, 1920x1080

**Components Verified as Responsive:**
| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| NetworkHeader | Hamburger | Nav | Full nav |
| NetworkFooter | 2-col grid | 4-col | 4-col |
| Hero | Stacked | Centered | Centered |
| FeaturedSection | 85% carousel | 50% items | 25% items |
| ListingCard | Full width | Half | Quarter |
| CategoryGrid | 2-col | 3-col | 4-col |

**Responsive Patterns Used:**
- Tailwind breakpoints: sm, md, lg, xl
- Flexbox with wrap for quick links
- CSS Grid for category/footer layouts
- Carousel with responsive basis values
- Hidden/visible classes for mobile nav

### How to Verify New Pages

**Test 404 page:**
Visit any non-existent URL like /nonexistent-page

**Test error boundary:**
Errors are caught and displayed with branded error page

**Verify robots.txt:**
```bash
curl https://dinecastlerock.co/robots.txt
```

**Verify llm.txt:**
```bash
curl https://dinecastlerock.co/llm.txt
```

**Responsive testing:**
- Use browser DevTools responsive mode
- Test at 360px, 768px, 1366px widths
- Verify no horizontal scrollbars
- Verify touch targets are adequate (~44px)

---

## January 2026 - Open Graph Images for Social Sharing

### OG Image Implementation

Custom Open Graph images improve link previews when sharing URLs on iMessage, Twitter, Facebook, LinkedIn, Slack, etc.

**Pattern:** Each page can have an `opengraph-image.tsx` file that generates a branded image using `next/og` ImageResponse.

### OG Image Status by Page

#### Home & Main Pages
| Page | Route | OG Image | Theme |
|------|-------|----------|-------|
| Home | `/` | ✅ Complete | Orange/dark - branded D logo |
| Things To Do | `/things-to-do` | ✅ Complete | Blue/cyan - 🎯 |
| About | `/about` | ✅ Complete | Slate - branded D logo |
| Guides Index | `/guides` | ✅ Complete | Green/emerald - 📖 |

#### Category Pages (17 total) - ALL COMPLETE ✅
| Category | Route | OG Image | Theme |
|----------|-------|----------|-------|
| Restaurants | `/restaurants` | ✅ Complete | Orange/burnt - 🍽️ |
| Bars & Nightlife | `/bars-nightlife` | ✅ Complete | Purple/violet - 🍸 |
| Breweries | `/breweries` | ✅ Complete | Amber/gold - 🍺 |
| Coffee & Cafes | `/coffee` | ✅ Complete | Stone/warm - ☕ |
| Dessert & Bakery | `/dessert` | ✅ Complete | Pink/rose - 🧁 |
| Food Trucks | `/food-trucks` | ✅ Complete | Red/orange - 🚚 |
| Takeout & Delivery | `/takeout-delivery` | ✅ Complete | Green/lime - 📦 |
| Retail & Shopping | `/retail` | ✅ Complete | Indigo/blue - 🛍️ |
| Auto & Transportation | `/auto` | ✅ Complete | Gray/steel - 🚗 |
| Health & Wellness | `/wellness` | ✅ Complete | Teal/mint - 💪 |
| Kids & Family | `/kids` | ✅ Complete | Yellow/bright - 👨‍👩‍👧 |
| Gifts & Specialty | `/gifts` | ✅ Complete | Magenta/purple - 🎁 |
| Home Services | `/home-services` | ✅ Complete | Sky blue - 🏠 |
| Professional Services | `/professional-services` | ✅ Complete | Navy/blue - 💼 |
| Beauty & Personal Care | `/beauty` | ✅ Complete | Pink/blush - 💄 |
| Pets | `/pets` | ✅ Complete | Orange/warm - 🐾 |
| Activities & Entertainment | `/activities` | ✅ Complete | Cyan/bright - 🎉 |

#### Guide Pages (3 defined) - ALL COMPLETE ✅
| Guide | Route | OG Image | Theme |
|-------|-------|----------|-------|
| Happy Hour | `/guides/happy-hour` | ✅ Complete | Golden/yellow - 🍻 |
| Date Night | `/guides/date-night` | ✅ Complete | Rose/pink - ❤️ |
| Family Friendly | `/guides/family-friendly` | ✅ Complete | Yellow/warm - 👨‍👩‍👧 |

#### Static Pages - ALL COMPLETE ✅
| Page | Route | OG Image | Theme |
|------|-------|----------|-------|
| Add Listing | `/add-listing` | ✅ Complete | Green/emerald - ➕ |
| Advertise | `/advertise` | ✅ Complete | Dark/orange - 📢 |
| Privacy Policy | `/privacy` | ✅ Complete | Slate - 🔒 |
| Terms of Service | `/terms` | ✅ Complete | Slate - 📜 |
| Editorial Policy | `/editorial-policy` | ✅ Complete | Slate - ✍️ |
| Admin | `/admin` | ⏭️ Skipped | Internal only |
| Sign In | `/sign-in` | ⏭️ Skipped | Auth page |
| Sign Up | `/sign-up` | ⏭️ Skipped | Auth page |

### OG Image Summary - COMPLETE ✅
- **Total Pages with OG Images:** 29 pages
- **Home & Main:** 4 pages
- **Categories:** 17 pages (all complete)
- **Guides:** 3 pages (all complete)
- **Static Pages:** 5 pages (all complete)
- **Skipped:** 3 pages (internal/auth - not needed)

---

## Future Development Tasks

### High Priority
- [x] Complete OG images for all category pages ✅ (January 2026)
- [ ] Download real images for original listings (see Image Status below)
- [ ] Add user authentication for claiming (Clerk ready, needs env vars)

### Medium Priority
- [x] Create OG images for add-listing and advertise pages ✅ (January 2026)
- [ ] Add photo upload for claimed listings
- [ ] Implement deal management for business owners

### Low Priority
- [x] Create OG images for legal pages (privacy, terms, editorial-policy) ✅ (January 2026)
- [ ] Add reservation provider integration (OpenTable, Resy)
- [ ] Implement menu PDF upload
- [ ] Add accessibility/amenities fields
- [ ] Create email notification system

---

## Business Image Status (January 2026)

### Listings WITH Real Images (20 businesses) ✅
| Business | Image File |
|----------|------------|
| Castle Cafe | `/images/listings/castle-cafe-hero.jpg` |
| B&B Cafe | `/images/b-and-b-cafe.jpg` |
| Union American Bistro | `/images/union-american-bistro.jpg` |
| Lost Coffee | `/images/lost-coffee.jpg` |
| Rockyard Brewing | `/images/rockyard-brewing.jpg` |
| Nothing Bundt Cakes | `/images/nothing-bundt-cakes.jpg` |
| Crumbl Cookies | `/images/crumbl-cookies.jpg` |
| Sugar Rush Cakery | `/images/sugar-rush-cakery.jpg` |
| Sage Salon and Spa | `/images/sage-salon-and-spa.jpg` |
| Copperfalls Aveda | `/images/copperfalls-aveda.jpg` |
| The Hair Shop | `/images/the-hair-shop.jpg` |
| Blue Sky Plumbing | `/images/blue-sky-plumbing.jpg` |
| WireNut Home Services | `/images/wirenut-home-services.jpg` |
| Romo's Street Tacos | `/images/romos-street-tacos.jpg` |
| Stack'd | `/images/stackd-foods.jpg` |
| The Barn | `/images/the-barn-castle-rock.jpg` |
| Amazing Lemons Boutique | `/images/amazing-lemons-boutique.jpg` |
| MOD Pizza | `/images/mod-pizza-castle-rock.jpg` |
| Tokyo Joe's | `/images/tokyo-joes-castle-rock.jpg` |
| Qdoba | `/images/qdoba-castle-rock.jpg` |

### Listings NEEDING Real Images (~10 businesses)
| Business | Current Image | Source URL |
|----------|---------------|------------|
| Scileppi's | `/images/dining.jpg` | scileppis.com, Yelp |
| Trestles Coastal | `/images/dining.jpg` | trestlescastlerock.com |
| Hideaway Bar & Grill | `/images/dining.jpg` | hideawaybarandgrill.com |
| Courtyard Social | placeholder | courtyardsocialcr.com |
| Provision | placeholder | provisioncastlerock.com |
| The Office Bar | placeholder | theofficecocr.com |
| Great Divide | placeholder | greatdivide.com |
| Crowfoot Valley Coffee | placeholder | crowfootvalleycoffee.com |
| Dazbog Coffee | placeholder | dazbog.com |
| Black Rock Coffee | placeholder | br.coffee |

### How to Add Images
1. Download from business website or Yelp
2. Save to `/public/images/listings/` as `business-slug.jpg`
3. Update `src/lib/data.ts` image path
4. See `docs/IMAGE-SOURCES.md` for full URLs

---

## For Future LLM Sessions

### Quick Start Checklist
1. Read this `progress.md` file first for context
2. Check `src/lib/data.ts` for all listings and categories
3. Check `src/app/` for page structure
4. Run `npm run lint` to verify no errors
5. Run `npm run build` to verify build passes

### Key Files
| Purpose | File |
|---------|------|
| All business data | `src/lib/data.ts` |
| Categories list | `src/lib/data.ts` → `CATEGORIES` array |
| OG image pattern | `src/app/opengraph-image.tsx` |
| Theme/colors | `src/app/globals.css` |
| Components | `src/components/ui/` (shadcn/ui) |

### OG Image Creation Pattern
```tsx
// src/app/[page]/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Page Title - Dine Castle Rock'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        // JSX with inline styles (no Tailwind)
        // Use gradient backgrounds, emoji icons, pills
    )
}
```

### Category Folder Structure
Categories use Next.js route groups: `src/app/(directory)/[category]/`
To add an OG image for a category, create: `src/app/(directory)/[category-slug]/opengraph-image.tsx`

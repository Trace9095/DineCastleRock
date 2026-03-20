# AI Crawlability Audit — Dine Castle Rock
Date: 2026-03-20

## Status
| Item | Status | Notes |
|------|--------|-------|
| robots.ts with AI crawlers | Already done | Full AI crawler allowlist (19 crawlers) |
| llms.txt | Already done | AI context file present at /llms.txt |
| sitemap.ts | Already done | Dynamic XML sitemap |
| JSON-LD Structured Data | Added S122 | WebSite (SearchAction), Organization, ItemList, FAQPage |
| OpenGraph metadata | Present | og:type, og:title, og:description, og:image in root layout.tsx |
| Twitter card tags | Present | summary_large_image in root layout.tsx |

## JSON-LD Schemas Added
- **WebSite** (with SearchAction): Sitelinks search box at `/search?q={search_term_string}`
- **Organization**: Name, URL, email, areaServed (Castle Rock, CO), sameAs sister sites
- **ItemList**: 6 top dining categories linking to /restaurants, /breweries, /bars, /coffee, /dessert, /food-trucks. numberOfItems: 66
- **FAQPage**: 3 Q&A pairs covering where to eat, best restaurants, family-friendly dining

## Architecture Notes
- Schemas are in `src/components/shared/StructuredData.tsx` (new component, S122)
- Imported and rendered in `src/app/(website)/layout.tsx` — replaces previous inline WebSite+Organization-only schema
- Per-page schemas also exist: `(website)/page.tsx` has FoodEstablishment, `listing/[slug]/page.tsx` and `[category]/page.tsx` have per-listing schemas

## Pre-existing JSON-LD (untouched)
- `src/app/(website)/page.tsx`: FoodEstablishment schema (homepage)
- `src/app/(website)/listing/[slug]/page.tsx`: Per-listing LocalBusiness schema
- `src/app/(website)/(directory)/[category]/page.tsx`: Category-level schema

## Sister Sites
- shopcastlerock.co, visitcastlerock.co — sameAs references included in Organization schema

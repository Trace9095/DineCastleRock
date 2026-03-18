# DineCastleRock -- Architecture

## Directory Structure

```
DineCastleRock-main/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout
│   │   ├── page.tsx                      # Homepage
│   │   ├── globals.css                   # OKLCH design system
│   │   ├── (directory)/                  # Route group
│   │   │   └── [category]/              # Dynamic category pages (17)
│   │   ├── (website)/                    # Route group
│   │   │   ├── layout.tsx               # Website layout with Clerk conditional
│   │   │   ├── listing/[slug]/          # Business detail pages
│   │   │   └── ref/[source]/            # Referral tracking
│   │   ├── listing/[slug]/              # Standalone listing route
│   │   ├── guides/                      # Dining guides (Happy Hour, Date Night, Family)
│   │   ├── add-listing/                 # Business submission form
│   │   ├── advertise/                   # Advertising info
│   │   ├── things-to-do/               # Activities page
│   │   ├── about/                       # About page
│   │   ├── privacy/                     # Privacy policy
│   │   ├── terms/                       # Terms of service
│   │   ├── editorial-policy/            # Editorial policy
│   │   ├── admin/                       # Admin dashboard (stub)
│   │   ├── sign-in/ & sign-up/          # Clerk auth routes
│   │   ├── brand/                       # Brand guidelines
│   │   ├── accessibility/               # Accessibility statement
│   │   ├── ref/[source]/               # Referral tracking
│   │   ├── sitemap.ts                   # Dynamic sitemap
│   │   ├── robots.ts                    # Dynamic robots.txt
│   │   ├── feed.xml/route.ts            # RSS feed
│   │   ├── llm.txt/route.ts            # AI/LLM context
│   │   ├── opengraph-image.tsx          # OG image generation
│   │   └── api/
│   │       ├── listings/                # GET - list + filter businesses
│   │       ├── categories/              # GET - all 17 categories
│   │       ├── deals/                   # GET - active promotions
│   │       ├── trending/               # GET - trending businesses
│   │       ├── claims/                  # POST/GET - business claims
│   │       └── contact/                 # POST - contact form (Resend)
│   ├── components/
│   │   ├── shared/                      # NetworkHeader, NetworkFooter (Castle Rock Network)
│   │   ├── home/                        # Hero, CategoryGrid, FeaturedSection, DestinationsSection
│   │   ├── listings/                    # ListingCard, FilterSidebar, SortSelect, Pagination, ReviewForm
│   │   └── ui/                          # shadcn/ui (27 components)
│   ├── lib/
│   │   ├── data.ts                      # ALL business data (66 businesses, 1,771 lines)
│   │   ├── utils.ts                     # cn() utility
│   │   ├── rate-limit.ts               # In-memory rate limiter
│   │   ├── db.ts                        # Prisma singleton
│   │   ├── stripe.ts                    # Stripe client
│   │   └── epic-usage.ts               # Analytics tracking
│   └── middleware.ts                    # Clerk auth (conditional on env)
├── prisma/
│   └── schema.prisma                    # 9 models (optional, DB not connected)
├── public/
│   ├── images/                          # 83 images (~24MB)
│   └── analytics.js                     # Tracking script
└── next.config.ts                       # Security headers, redirects, caching
```

## Request Flow

1. Request hits Next.js middleware (Clerk auth check -- skipped if no env vars)
2. App Router resolves route (static pages, dynamic [category], [slug])
3. Static data loaded from `src/lib/data.ts` (no DB call needed)
4. API routes: rate-limited, with Prisma fallback to static data

## Key Patterns

- **Static-first**: All business data is in-memory via data.ts. DB is optional enhancement
- **Conditional auth**: Clerk only activates when NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is set
- **Network components**: NetworkHeader and NetworkFooter are shared across Castle Rock sites
- **OKLCH colors**: Design system uses OKLCH color space in Tailwind CSS v4
- **Route groups**: (directory) and (website) organize routes without affecting URL paths

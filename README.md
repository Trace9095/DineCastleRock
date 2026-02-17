# Dine Castle Rock

A premium local dining directory for Castle Rock, Colorado -- featuring 66 restaurants, cafes, bars, and food establishments across 17 categories with advanced search, filtering, and business management tools.

**Live:** [dinecastlerock.co](https://dinecastlerock.co)

---

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 16.1.1 |
| Language | TypeScript (strict) | 5.9.3 |
| UI | React | 19.2.3 |
| Styling | Tailwind CSS v4 | 4.x |
| Components | shadcn/ui + Radix UI | -- |
| Carousel | Embla Carousel | 8.6.0 |
| Analytics | Vercel Analytics | -- |
| Deployment | Vercel | -- |

## Features

- **66 local dining establishments** across 17 cuisine and business categories
- **Advanced search and filtering** by cuisine type, atmosphere, and location
- **Real-time "Open Now" status** with timezone-aware hours (America/Denver)
- **4 destination hubs:** Downtown, Outlets at Castle Rock, The Promenade, Meadows Parkway
- **Curated dining guides:** Happy Hour, Date Night, Family Friendly, and more
- **Business claiming and management** tools for owners
- **7 API routes** with in-memory rate limiting (100 req/min)
- **Dark mode support** with OKLCH color system
- **Responsive design** optimized for all devices
- **SEO optimized** with dynamic sitemap, robots.txt, JSON-LD, and OpenGraph metadata
- **Accessibility features** including skip-to-content navigation and ARIA labels

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/Trace9095/DineCastleRock.git
cd DineCastleRock
npm install
```

### Environment Variables

All environment variables are **optional**. The site runs fully on static data without any external services configured.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | Canonical site URL (e.g. `https://dinecastlerock.co`) |
| `DATABASE_URL` | PostgreSQL connection string (Prisma) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk authentication (disabled by default) |
| `CLERK_SECRET_KEY` | Clerk server-side key |
| `STRIPE_SECRET_KEY` | Stripe payments integration |
| `EPIC_API_KEY` | Analytics tracking key |

### Development

```bash
npm run dev       # Start development server at http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout
│   ├── (directory)/[category]/ # Dynamic category pages (17 categories)
│   ├── listing/[slug]/         # Business detail pages
│   ├── guides/                 # Curated dining guides
│   ├── add-listing/            # Business submission form
│   ├── about/                  # About page
│   ├── privacy/                # Privacy policy
│   ├── terms/                  # Terms of service
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # Dynamic robots.txt
│   └── api/                    # 7 API routes
├── components/
│   ├── shared/                 # NetworkHeader, NetworkFooter
│   ├── home/                   # Hero, CategoryGrid, FeaturedSection
│   ├── listings/               # ListingCard, FilterSidebar, Pagination
│   └── ui/                     # shadcn/ui components
├── lib/
│   ├── data.ts                 # All 66 business listings
│   ├── utils.ts                # Utility functions
│   └── rate-limit.ts           # API rate limiter
└── middleware.ts               # Auth middleware (conditional)
```

## API Routes

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/listings` | List businesses with pagination and filtering |
| GET | `/api/listings/[slug]` | Single business detail |
| GET | `/api/categories` | All 17 categories |
| GET | `/api/deals` | Active deals and promotions |
| GET | `/api/trending` | Trending businesses |
| POST/GET | `/api/claims` | Business ownership claims |

All routes include error handling, rate limiting (100 req/min), and pagination metadata.

## Deployment

Deployed on [Vercel](https://vercel.com) with automatic deploys on push to `main`.

**Production domain:** [dinecastlerock.co](https://dinecastlerock.co)

## Castle Rock Network

Dine Castle Rock is part of a three-site local directory network for Castle Rock, Colorado:

| Site | URL |
|------|-----|
| Shop Castle Rock | [shopcastlerock.co](https://shopcastlerock.co) |
| Dine Castle Rock | [dinecastlerock.co](https://dinecastlerock.co) |
| Visit Castle Rock | [visitcastlerock.co](https://visitcastlerock.co) |

All three sites share cross-site navigation via `NetworkHeader` and `NetworkFooter` components.

## License

Private. All rights reserved. Built by [Epic AI](https://epicai.org).

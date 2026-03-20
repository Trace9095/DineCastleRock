<p align="center">
  <img src="public/images/logo.svg" alt="Dine Castle Rock" width="120" />
</p>

<h1 align="center">Dine Castle Rock</h1>

<p align="center">
  <strong>The premier local dining directory for Castle Rock, Colorado</strong><br/>
  66 restaurants, cafes, bars, and food establishments across 17 categories
</p>

<p align="center">
  <a href="https://dinecastlerock.co"><img src="https://img.shields.io/badge/Live-dinecastlerock.co-F97316?style=flat-square&logo=vercel&logoColor=white" alt="Live Site" /></a>
  <img src="https://img.shields.io/badge/Next.js-16.1.1-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" alt="License" />
</p>

---

## Overview

Dine Castle Rock is a full-featured local dining directory built with Next.js 16 and the App Router. It showcases 66 real Castle Rock businesses with advanced search, filtering, real-time open/closed status, curated dining guides, and business claiming tools. Part of the **Castle Rock Network** -- three interconnected directory sites covering dining, shopping, and tourism.

---

## Features

- **66 Local Businesses** -- Real Castle Rock restaurants, breweries, cafes, bars, and food trucks with verified data
- **17 Cuisine Categories** -- Restaurants, Breweries, Bars, Coffee, Dessert, Food Trucks, Takeout, Retail, Auto, Wellness, Kids, Gifts, Home Services, Professional, Beauty, Pets, Activities
- **4 Destination Hubs** -- Downtown, Outlets at Castle Rock, The Promenade, Meadows Parkway
- **Real-Time "Open Now"** -- Timezone-aware status (America/Denver) with overnight hours support
- **Curated Dining Guides** -- Happy Hour, Date Night, Family Friendly, and more
- **Business Claiming** -- Owners can submit claims and manage their listings
- **Advanced Search & Filtering** -- By cuisine, atmosphere, location, and open status
- **Dark Mode** -- Full dark mode support with OKLCH color system
- **SEO Optimized** -- Dynamic sitemap, robots.txt, JSON-LD structured data, per-page OpenGraph images, RSS feed, `llms.txt` for AI crawlers
- **Accessibility** -- Skip-to-content navigation, ARIA labels, 44px touch targets
- **Castle Rock Network** -- Cross-site navigation with [Shop Castle Rock](https://shopcastlerock.co) and [Visit Castle Rock](https://visitcastlerock.co)

---

## Tech Stack

| Layer | Technology | Version |
|:------|:-----------|:--------|
| **Framework** | [Next.js](https://nextjs.org) (App Router) | 16.1.1 |
| **Language** | TypeScript (strict mode) | 5.9.3 |
| **UI** | React | 19.2.3 |
| **Styling** | Tailwind CSS v4 (PostCSS) | 4.x |
| **Components** | [shadcn/ui](https://ui.shadcn.com) + Radix UI | 16 primitives |
| **Carousel** | Embla Carousel | 8.6.0 |
| **Auth** | Clerk (optional, disabled by default) | 6.36.5 |
| **ORM** | Prisma (optional, static data fallback) | 6.19.1 |
| **Payments** | Stripe (optional) | 20.1.0 |
| **Email** | Resend | 6.9.2 |
| **Analytics** | Vercel Analytics | 1.6.1 |
| **Deployment** | Vercel | -- |

---

## Architecture

```
DineCastleRock-main/
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Homepage
│   │   ├── layout.tsx                # Root layout (NetworkHeader/Footer)
│   │   ├── globals.css               # OKLCH design system (warm orange)
│   │   ├── (directory)/[category]/   # Dynamic category pages (17 categories)
│   │   ├── (website)/                # Route group for branded pages
│   │   ├── listing/[slug]/           # Business detail pages
│   │   ├── guides/                   # Curated dining guides
│   │   ├── add-listing/              # Business submission form
│   │   ├── advertise/                # Advertising info
│   │   ├── things-to-do/             # Activities page
│   │   ├── about/                    # About page
│   │   ├── privacy/, terms/          # Legal pages
│   │   ├── editorial-policy/         # Editorial transparency
│   │   ├── sitemap.ts                # Dynamic sitemap
│   │   ├── robots.ts                 # Robots.txt (19 AI crawlers)
│   │   ├── llm.txt/route.ts          # AI LLM context route
│   │   ├── feed.xml/                 # RSS feed
│   │   └── api/                      # 7 API routes
│   ├── components/
│   │   ├── shared/                   # NetworkHeader, NetworkFooter
│   │   ├── home/                     # Hero, CategoryGrid, FeaturedSection, Destinations
│   │   ├── listings/                 # ListingCard, FilterSidebar, SortSelect, Pagination
│   │   └── ui/                       # 16 shadcn/ui components
│   ├── lib/
│   │   ├── data.ts                   # All 66 business listings (1,771 lines)
│   │   ├── utils.ts                  # cn() utility
│   │   ├── rate-limit.ts             # In-memory rate limiter (100 req/min)
│   │   ├── db.ts                     # Prisma singleton
│   │   └── stripe.ts                 # Stripe client
│   └── middleware.ts                 # Clerk auth (conditional)
├── prisma/
│   └── schema.prisma                 # 9 models (optional)
├── public/images/                    # 83 optimized images
└── components.json                   # shadcn/ui config
```

---

## API Routes

| Method | Route | Description |
|:-------|:------|:------------|
| `GET` | `/api/listings` | List businesses with pagination and filtering |
| `GET` | `/api/listings/[slug]` | Single business detail |
| `GET` | `/api/categories` | All 17 categories |
| `GET` | `/api/deals` | Active deals and promotions |
| `GET` | `/api/trending` | Trending businesses |
| `POST` `GET` | `/api/claims` | Business ownership claims |
| `GET` | `/api/ref` | Referral tracking |

All routes include error handling, rate limiting (100 req/min), and pagination metadata.

---

## Database Models (Prisma)

> The database is **optional**. The site operates fully on static data in `src/lib/data.ts` without any external services.

`User` -- `Listing` -- `Category` -- `Deal` -- `Account` -- `Session` -- `VerificationToken` -- `AdPlacement` -- `Claim`

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Trace9095/DineCastleRock.git
cd DineCastleRock
npm install
```

### Environment Variables

All environment variables are **optional** -- the site runs fully on static data without any external services configured.

| Variable | Required | Description |
|:---------|:---------|:------------|
| `NEXT_PUBLIC_APP_URL` | No | Canonical URL (`https://dinecastlerock.co`) |
| `DATABASE_URL` | No | PostgreSQL connection string (Prisma) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | No | Clerk authentication |
| `CLERK_SECRET_KEY` | No | Clerk server-side key |
| `STRIPE_SECRET_KEY` | No | Stripe payments |
| `EPIC_API_KEY` | No | Analytics tracking |

### Development

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## Castle Rock Network

Dine Castle Rock is part of a three-site local directory network for Castle Rock, Colorado:

| Site | Domain | Focus |
|:-----|:-------|:------|
| **Shop Castle Rock** | [shopcastlerock.co](https://shopcastlerock.co) | Local shopping directory |
| **Dine Castle Rock** | [dinecastlerock.co](https://dinecastlerock.co) | Dining and restaurant guide |
| **Visit Castle Rock** | [visitcastlerock.co](https://visitcastlerock.co) | Tourism and attractions |

All three sites share cross-site navigation via unified `NetworkHeader` and `NetworkFooter` components.

---

## Deployment

Deployed on [Vercel](https://vercel.com) with automatic production deploys on push to `main`.

| Config | Value |
|:-------|:------|
| **Production** | [dinecastlerock.co](https://dinecastlerock.co) |
| **Branch** | `main` |
| **Root Directory** | `/` (project root) |

---

## Codebase Stats

| Metric | Count |
|:-------|------:|
| Lines of Code (TS/TSX) | 23,968 |
| TypeScript / TSX Files | 153 |
| React Components | 31 |
| shadcn/ui Primitives | 16 |
| Pages (routes) | 32 |
| API Routes | 7 |
| Business Listings | 66 |
| Cuisine Categories | 17 |
| Prisma Models | 9 |
| Version | 1.4.1 |

*Stats as of March 2026.*

---

## License

Private. All rights reserved.

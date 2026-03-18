# DineCastleRock -- Project Context

## What This Project Is

DineCastleRock is a local dining and business directory for Castle Rock, Colorado. It showcases 66 real Castle Rock businesses across 17 categories, with features like "Open Now" status, dining guides, and business claim functionality.

## Business Context

- Part of the **Castle Rock Network** -- three interconnected directory sites (Shop, Dine, Visit)
- All three sites share `NetworkHeader` and `NetworkFooter` components for cross-site navigation
- The header is `fixed top-0 z-50` with opaque background (no backdrop-blur). Main content needs `pt-16 lg:pt-20`
- Target audience: Castle Rock residents and visitors looking for dining options
- Revenue model: advertising placements and business claims/upgrades

## Data Architecture

- **66 businesses** stored as static data in `src/lib/data.ts` (1,771 lines)
- **17 categories:** Restaurants, Breweries, Bars, Coffee, Dessert, Food Trucks, Takeout, Retail, Auto, Wellness, Kids, Gifts, Home Services, Professional, Beauty, Pets, Activities
- **4 destinations:** Downtown, Outlets at Castle Rock, The Promenade, Meadows Parkway
- **3+ dining guides:** Happy Hour, Date Night, Family Friendly
- Database (Prisma/PostgreSQL) is optional -- not connected in production; static data fallback works

## Key Business Rules

- "Open Now" badges use real-time timezone-aware checks (America/Denver)
- Overnight hours (e.g., bars closing at 2am) are handled correctly
- Clerk auth is conditionally loaded only when env vars are present
- All API routes have in-memory rate limiting (100/min default)

## Current State

- Production and stable at dinecastlerock.co
- Database not connected (static data only)
- Clerk auth disabled (no env vars set)
- Admin dashboard is a stub
- Some placeholder images need real business photos

## External Integrations

- **Vercel Analytics** for traffic tracking
- **Resend** for contact form emails (via `/api/contact`)
- **Stripe** (optional, for business upgrades)
- **Clerk** (optional, disabled)

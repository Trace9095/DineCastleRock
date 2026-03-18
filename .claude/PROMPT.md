# DineCastleRock -- LLM Prompt

You are working on **DineCastleRock**, a premium local dining and business directory for Castle Rock, Colorado. It is part of the Castle Rock Network (Shop, Dine, Visit) -- three interconnected directory sites.

## Key Facts

- **Owner:** Trace Hildebrand | GitHub: Trace9095 | CEO @ epicai.ai
- **Domain:** dinecastlerock.co
- **Repo:** Trace9095/DineCastleRock
- **Vercel Slug:** `dine-castle-rock`
- **Vercel Team:** EPIC AI PROJECTS (`team_pGqkBUxWUXiBoZoKYPgweHDl`)
- **Framework:** Next.js 16 App Router, TypeScript strict
- **Package Manager:** npm

## De-branding Rule

This site MUST NOT show "Epic AI" or "Epic Adventures" branding in any visitor-facing content. Internal code comments and analytics are fine, but nothing user-visible.

## Sister Sites

| Site | URL | Shared Components |
|------|-----|-------------------|
| ShopCastleRock | shopcastlerock.co | NetworkHeader, NetworkFooter |
| DineCastleRock | dinecastlerock.co | NetworkHeader, NetworkFooter |
| VisitCastleRock | visitcastlerock.co | NetworkHeader, NetworkFooter |

## Code Style

- Tailwind CSS v4 with OKLCH color space
- shadcn/ui (New York style) + Radix UI primitives
- System fonts only (no Google Fonts)
- Path alias: `@/*` maps to `./src/*`
- 44px minimum touch targets on all tappable elements
- No `backdrop-blur` on fixed/sticky elements (iOS Safari breaks)

## Build

```bash
npx next build
```

## Environment Variables

All optional -- site works without any env vars:
- `DATABASE_URL` -- PostgreSQL (Prisma, optional)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY` -- Auth (disabled)
- `STRIPE_SECRET_KEY` -- Payments (optional)
- `NEXT_PUBLIC_APP_URL` -- Defaults to https://dinecastlerock.co
- `EPIC_API_KEY` -- Analytics tracking
- `RESEND_API_KEY` -- Contact form email
- `CONTACT_TO_EMAIL` -- Contact form recipient (defaults to Trace)

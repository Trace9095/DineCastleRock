# DEPLOYMENT.md — DineCastleRock

## Vercel Configuration

| Setting | Value |
|---------|-------|
| Vercel Slug | dine-castle-rock |
| Team | EPIC AI PROJECTS (team_pGqkBUxWUXiBoZoKYPgweHDl) |
| Production URL | https://dinecastlerock.co |
| Branch | main |
| Root Directory | (none — project root, src/app/ structure) |
| Build Command | `next build` |
| Package Manager | npm |
| Node Version | 20.x |

## DNS

GoDaddy → Vercel. Status: LIVE.

## Auto-Deploy

Push to `main` branch triggers Vercel deployment automatically.

## Environment Variables (Vercel)

| Variable | Required | Description |
|----------|----------|-------------|
| NEXT_PUBLIC_APP_URL | No | https://dinecastlerock.co |
| NEXT_PUBLIC_SUPABASE_URL | No | (Not used — see VISCastleRock for Supabase) |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | No | (Not used) |
| DATABASE_URL | No | PostgreSQL (static data fallback if absent) |
| STRIPE_SECRET_KEY | No | Stripe payments |
| EPIC_API_KEY | No | Analytics tracking |

## Local Dev

```bash
cd ~/Documents/APPS/DIRECTORIES/CASTLE-ROCK/DineCastleRock-main
npm install
npm run dev
```

## Notes

- No root dir needed (src/app/ at project root)
- Database optional — all data in src/lib/data.ts (static fallback)
- Clerk auth conditionally disabled — only activates if CLERK env vars present
- Route shadow warning: never re-create root page.tsx alongside (website)/page.tsx

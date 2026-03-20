# PROJECT_STATUS.md — DineCastleRock

**Last updated:** 2026-03-19

## Status: LIVE

- **URL:** https://dinecastlerock.co
- **Vercel Slug:** dine-castle-rock
- **Branch:** main
- **Version:** 1.4.1

## Health

- Build: PASSING (npx next build)
- TypeScript: PASSING
- Deployment: AUTO (push to main)
- E2E: PASSED (S120)
- Security: PASSED (S121 OWASP audit)

## Key Facts

- Restaurant and dining directory for Castle Rock, CO
- Castle Rock Network: shared NetworkHeader/NetworkFooter with ShopCR + VisCR
- 66 real Castle Rock businesses in src/lib/data.ts (1,771 lines)
- 17 cuisine categories, 4 destinations, 3+ dining guides
- Real-time Open Now status (America/Denver timezone-aware)
- Database: Prisma schema present (9 models) but NOT connected — static data fallback
- Auth: Clerk present but conditionally disabled (no env var = no auth)
- SSG — all pages pre-rendered
- Package manager: npm

## Route Shadow Fix (S117)

- Root page.tsx was shadowing (website)/page.tsx route group
- Fix: deleted root page.tsx duplicate
- Watch for re-emergence after any scaffold/generate operations

## Known Issues / Tech Debt

- Database not connected
- Admin dashboard is a stub (needs implementation)
- 83 images (~24MB), some placeholder images need real business photos
- Per-page opengraph-image.tsx not on all pages (Gold Standard #37)

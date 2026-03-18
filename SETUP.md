# DineCastleRock -- Service Runbook

## Quick Reference

| Field | Value |
|-------|-------|
| Project | DineCastleRock |
| Domain | dinecastlerock.co |
| Repo | Trace9095/DineCastleRock |
| Vercel Slug | `dine-castle-rock` |
| Vercel Team | EPIC AI PROJECTS (`team_pGqkBUxWUXiBoZoKYPgweHDl`) |
| Framework | Next.js 16.1.1 App Router |
| Language | TypeScript 5.9.3 (strict) |
| Node | See `.nvmrc` or Vercel default |
| Package Manager | npm |
| Root Directory | (repo root -- no subdir) |
| Branch | main |

## Local Development

```bash
# Clone
git clone git@github.com:Trace9095/DineCastleRock.git
cd DineCastleRock

# Install
npm install

# Environment (all optional -- site works without env vars)
cp .env.example .env.local  # if exists, otherwise create manually

# Run dev server
npm run dev
# Open http://localhost:3000
```

## Environment Variables

All optional -- the site runs fully on static data without any env vars.

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | No | PostgreSQL connection (Prisma) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | No | Clerk auth (currently disabled) |
| `CLERK_SECRET_KEY` | No | Clerk auth server-side |
| `STRIPE_SECRET_KEY` | No | Stripe payments |
| `NEXT_PUBLIC_APP_URL` | No | Site URL (defaults to https://dinecastlerock.co) |
| `EPIC_API_KEY` | No | Analytics tracking |
| `RESEND_API_KEY` | No | Contact form email delivery |
| `CONTACT_TO_EMAIL` | No | Contact form recipient (defaults to Trace) |

### Pull env vars from Vercel

```bash
npx vercel link  # Select team: EPIC AI PROJECTS, project: dine-castle-rock
npx vercel env pull .env.local
```

## Build

```bash
npm run build    # Production build
npm run lint     # ESLint check
```

## Deploy

Deployed automatically on Vercel when pushing to `main`.

```bash
git push origin main
# Vercel auto-deploys. Check: https://vercel.com/epic-ai-projects/dine-castle-rock
```

## Key Services

### Resend (Email)

- Used by: `/api/contact` route
- Sends contact form submissions
- Env var: `RESEND_API_KEY`
- Recipient: `CONTACT_TO_EMAIL` (defaults to Trace's email)
- FROM address must NOT contain "Epic AI" branding (de-brand rule)

### Vercel Analytics

- Automatic via `@vercel/analytics` package
- No configuration needed

### Database (Optional)

- Prisma ORM with PostgreSQL
- 9 models: User, Listing, Category, Deal, Account, Session, VerificationToken, AdPlacement, Claim
- NOT required -- static data in `src/lib/data.ts` serves as fallback
- To set up: `npx prisma migrate dev` with `DATABASE_URL` configured

## Monitoring

- **Build logs**: Vercel dashboard or `vercel logs dine-castle-rock`
- **Runtime errors**: Vercel Functions logs
- **Analytics**: Vercel Analytics dashboard

## Sister Sites (Castle Rock Network)

All three share NetworkHeader/NetworkFooter and should stay visually consistent:

| Site | Vercel Slug | URL |
|------|-------------|-----|
| ShopCastleRock | `shop-castle-rock` | shopcastlerock.co |
| DineCastleRock | `dine-castle-rock` | dinecastlerock.co |
| VisitCastleRock | `vis-castle-rock` | visitcastlerock.co |

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails with Turbopack | Add `--webpack` flag: `npx next build --webpack` |
| Clerk errors in logs | Normal if no Clerk env vars -- auth is conditional |
| "Open Now" badges wrong | Check timezone -- must be America/Denver |
| Images not loading | Check `public/images/` and Next.js Image component `sizes` prop |
| Rate limit errors in dev | In-memory rate limiter resets on server restart |

# GOLDEN_STANDARD.md — Dine Castle Rock (DineCR)

> Production URL: https://dinecastlerock.co
> Last reviewed: 2026-03-19 (Session 122)
> Vercel Slug: `dine-castle-rock`
> Full 106-item checklist: `../../../../_audit/GOLD_STANDARD_CHECKLIST.md`

---

## Quick Reference

| Stack | Details |
|-------|---------|
| Framework | Next.js 16 App Router + TypeScript |
| Backend Root | `src/app/` (no backend/) |
| Database | Supabase |
| Auth | None |
| Payments | None |
| Email | None |
| Deployment | Vercel (`dine-castle-rock`) |

---

## Checklist

### Identity & Branding
- [x] Favicon (32x32, 192x192, 512x512 PNG)
- [x] Apple touch icon (180x180)
- [x] OG image on root + key pages (`opengraph-image.tsx`)
- [x] Correct site name + description in metadata
- [x] De-branding: No Epic AI/Epic Adventures branding visitor-facing

### Mobile & Performance
- [x] `100dvh` for full-height sections (not `100vh`)
- [x] `safe-area-inset` padding for iOS notch/home bar
- [x] 44px minimum touch targets on all tappable elements
- [x] No `backdrop-blur` on fixed/sticky elements (iOS Safari bug)
- [x] `next/image` with `quality={90}` + `sizes` prop on heroes
- [ ] Lighthouse audit: LCP < 2.5s, CLS < 0.1, FID < 100ms

### Design System
- [x] Dark theme background
- [x] Consistent brand accent color
- [x] shadcn/ui components
- [x] Empty states, loading skeletons, error states

### SEO & Meta
- [x] Unique title + meta description per page
- [x] Canonical URL set
- [x] robots.txt + sitemap.xml present
- [ ] JSON-LD structured data
- [x] Full OG tags

### Auth & Security
- [x] Security headers in `next.config.ts` (CSP, HSTS, X-Frame-Options, Permissions-Policy)
- [x] No secrets in client-side code or git
- [ ] Auth-protected admin routes (no admin)
- [x] Input validation on all forms
- [ ] Rate limiting on auth/sensitive endpoints (no auth)

### Payments

### Payments
- N/A — Restaurant directory. No payment processing.
- Future: restaurant partner listings could use Stripe.
  `metadata: { site: "dinecr", app_url: "https://dinecastlerock.co" }`

### Email

### Email
- N/A — Directory site. No email integration.

### TypeScript & Code Quality
- [x] TypeScript strict mode
- [x] Build passes with 0 errors
- [x] No unused imports

### Deployment
- [x] Vercel deployment live
- [x] Environment variables in Vercel (not .env)
- [x] Custom domain connected + verified
- [x] Branch: `main`

### Version Compliance
- [x] All copyright dates: 2026
- [x] Next.js 16 + React 19
- [x] No deprecated `@vercel/postgres` or `@vercel/kv`

---

## Known Issues / TODO

- [ ] JSON-LD FoodEstablishment / LocalBusiness schema (high priority for restaurant directory SEO)
- [ ] Lighthouse audit
- **Route shadow fixed S117** — was shadowing (website)/page.tsx
- **Routes also fixed S118** — DineCR routes issues resolved
- **Castle Rock network:** Shares NetworkHeader/NetworkFooter with ShopCR/VisCR
- **Supabase** database (read-only from directory perspective)

---

*Generated: 2026-03-19 | Epic AI Portfolio*

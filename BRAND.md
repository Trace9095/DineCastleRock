# Dine Castle Rock — Brand Guide

## Identity
- **Name:** Dine Castle Rock
- **Short Name:** DineCR
- **Tagline:** Castle Rock's Premier Dining Guide
- **URL:** https://dinecastlerock.co
- **Email:** hello@dinecastlerock.co (general) / advertise@dinecastlerock.co (advertising)
- **Network:** Castle Rock Directory Network (shared NetworkHeader/NetworkFooter)
- **Category:** Dining directory — restaurants, breweries, bars, coffee, dessert, food trucks, takeout + local services

## Colors

| Name | Hex | CSS Var | Usage |
|------|-----|---------|-------|
| Background | `#0a0a14` | `--background` | Page background (dark-first design) |
| Foreground | `#f5f5f5` | `--foreground` | Body text, headings |
| Primary / Accent (Orange) | `#C04E20` | `--primary`, `--accent` | Buttons, links, focus rings, glows (WCAG AA compliant) |
| Primary Foreground | `#ffffff` | `--primary-foreground` | Text on orange buttons |
| Display Orange | `#E85D2B` | — | Gradient text, visual accents (brighter, non-button usage) |
| Card | `#12121a` | `--card` | Elevated card surfaces |
| Card Foreground | `#f5f5f5` | `--card-foreground` | Text on cards |
| Popover | `#12121a` | `--popover` | Dropdown/popover background |
| Secondary | `#1a1a24` | `--secondary` | Muted surfaces, sidebar accent |
| Secondary Foreground | `#e0e0e0` | `--secondary-foreground` | Text on secondary surfaces |
| Muted | `#1a1a24` | `--muted` | Subtle backgrounds |
| Muted Foreground | `#a0a0b0` | `--muted-foreground` | De-emphasized text |
| Destructive | `#ef4444` | `--destructive` | Error states |
| Border | `rgba(255,255,255,0.08)` | `--border` | Subtle glass borders |
| Input | `rgba(255,255,255,0.10)` | `--input` | Form input borders |
| Ring | `#C04E20` | `--ring` | Focus ring color |
| Sidebar | `#08080e` | `--sidebar` | Sidebar background (deepest dark) |
| Chart 1 | `#C04E20` | `--chart-1` | Primary chart color |
| Chart 2 | `#f0845a` | `--chart-2` | Light orange |
| Chart 3 | `#c04820` | `--chart-3` | Mid orange |
| Chart 4 | `#f5a070` | `--chart-4` | Pale orange |
| Chart 5 | `#a03818` | `--chart-5` | Deep orange |
| Primary RGB | `192, 78, 32` | `--primary-rgb` | Glow/shadow effects (rgba usage) |
| Accent RGB | `192, 78, 32` | `--accent-rgb` | Glow/shadow effects (rgba usage) |

### Gradient Definitions
- **Gradient Text:** `linear-gradient(135deg, #E85D2B 0%, #f0845a 50%, #E85D2B 100%)`
- **Section Divider:** `linear-gradient(90deg, transparent, rgba(232,93,43,0.2), transparent)`
- **Hero Overlay:** `linear-gradient(180deg, rgba(10,10,20,0.4) 0%, rgba(10,10,20,0.2) 30%, rgba(10,10,20,0.6) 70%, rgba(10,10,20,0.9) 100%)`

## Typography
- **Font Family:** Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
- **Mono:** ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace
- **Headings:** `tracking-tight font-semibold`
- **Rendering:** `-webkit-font-smoothing: antialiased`

## Voice & Tone
- **Appetizing and approachable** — inviting diners to explore Castle Rock's food scene
- **Local expert** — "Discover the best", "Premier dining guide" language
- **Warm and energetic** — orange accent conveys appetite, energy, and warmth
- **Community-oriented** — supporting local restaurants, bars, breweries, and cafes

## Logo
- `public/logo.svg` — Primary logo (used in NetworkHeader)
- `src/app/icon.svg` — App icon / favicon (Next.js file-based)
- `src/app/favicon.ico` — Fallback favicon
- **MEDIA library:** `MEDIA/logos/directories/castle-rock/dine-castle-rock/` (favicon.ico, icon.svg, logo.svg, og-image.jpg, og-image.svg)

## Social Media
- **Twitter/X:** NONE — needs setup
- **Instagram:** NONE — needs setup
- **Facebook:** NONE — needs setup

## PWA / Manifest
- **Name:** Dine Castle Rock
- **Short Name:** DineCR
- **Theme Color:** `#E85D2B`
- **Background Color:** `#0a0a14`
- **Display:** standalone

## Design System Classes
- `.glass` / `.glass-dark` / `.glass-card` — Frosted glass effects
- `.gradient-text` — Orange gradient text effect
- `.hover-lift` — translateY(-4px) with enhanced shadow on hover
- `.shadow-modern` / `.shadow-modern-lg` / `.shadow-modern-xl` — Dark-optimized shadow scale
- `.shadow-glow` / `.shadow-glow-lg` — Orange glow shadows
- `.section` — Vertical spacing (py-16 md:py-24)
- `.hero-overlay` — Gradient overlay for hero images
- `.section-divider` — Horizontal orange-tinted divider line

## Animations
- `animate-float` — 6s vertical float
- `animate-fade-up` — 0.6s entrance from below
- `animate-scale-in` — 0.5s scale entrance
- `animate-shimmer` — Moving light gradient
- `animate-pulse-glow` — Pulsing box-shadow glow
- `animate-blur-in` — 0.8s scale entrance (alias of scale-in)
- `animate-glow-pulse` — Alternate glow pulse (3s)
- Delay utilities: `.delay-100` through `.delay-500`
- All animations respect `prefers-reduced-motion: reduce`

## Border Radius
- Base: `0.625rem` (`--radius`)
- Scale: sm (calc-4px), md (calc-2px), lg (base), xl (+4px), 2xl (+8px), 3xl (+12px), 4xl (+16px)

## Accessibility Notes
- Primary orange `#C04E20` chosen for WCAG AA contrast against white text (replacing brighter `#E85D2B` for interactive elements)
- Brighter `#E85D2B` reserved for gradient text and decorative/visual accents only
- Theme color in viewport: `#0a0a14`

## Network Identity
- Part of Castle Rock network with ShopCR / DineCR / VisCR
- Shared `NetworkHeader` and `NetworkFooter` components (`src/components/shared/`)
- Warm orange (#C04E20 / #E85D2B) distinguishes this site from ShopCR (gold) and VisCR (cyan)
- All three use identical dark background (#0a0a14), card (#12121a), and sidebar (#08080e) base
- Cross-site navigation links in header and footer
- Consistent `pt-16 lg:pt-20` main content offset for fixed header

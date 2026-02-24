import { Metadata } from "next";
import Link from "next/link";
import { Utensils, ShoppingBag, Compass, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand | Dine Castle Rock",
  description:
    "Brand guidelines, color palette, and typography for Dine Castle Rock — your guide to the best restaurants, bars, breweries, and cafes in Castle Rock, Colorado.",
  openGraph: {
    title: "Brand | Dine Castle Rock",
    description:
      "Brand guidelines for Dine Castle Rock — Castle Rock's premier dining directory.",
    url: "https://dinecastlerock.co/brand",
  },
};

const colors = [
  { name: "Orange", hex: "#E85D2B", className: "bg-[#E85D2B]", text: "text-white" },
  { name: "Background", hex: "#0A0A14", className: "bg-[#0a0a14]", text: "text-white" },
  { name: "Card", hex: "#12121A", className: "bg-[#12121a]", text: "text-white" },
  { name: "Surface", hex: "#1A1A24", className: "bg-[#1a1a24]", text: "text-white" },
  { name: "Foreground", hex: "#F5F5F5", className: "bg-[#f5f5f5]", text: "text-[#0a0a14]" },
];

const brandGuidelines = [
  {
    title: "Voice & Tone",
    items: [
      "Warm and welcoming — like a recommendation from a local",
      "Helpful and direct — get people to the right table fast",
      "Celebratory of the local food scene, not corporate",
      "Honest about featured vs. organic placement",
    ],
  },
  {
    title: "Logo Usage",
    items: [
      "Use on dark backgrounds (#0A0A14) whenever possible",
      "Minimum clear space: equal to the height of the logo mark",
      "Do not recolor, stretch, or add effects to the logo",
      "Orange (#E85D2B) is the only approved accent color",
    ],
  },
  {
    title: "Color Usage",
    items: [
      "Orange (#E85D2B) for primary CTAs, links, and accents only",
      "Never use orange for large background fills — use sparingly",
      "Dark surfaces (#0A0A14, #12121A) for all primary layouts",
      "White (#F5F5F5) for body text — never pure #FFFFFF",
    ],
  },
];

const sisterSites = [
  {
    name: "Shop Castle Rock",
    tagline: "Shopping & Retail",
    href: "https://shopcastlerock.co",
    color: "#D4A853",
    icon: ShoppingBag,
    current: false,
  },
  {
    name: "Dine Castle Rock",
    tagline: "Restaurants & Bars",
    href: "https://dinecastlerock.co",
    color: "#E85D2B",
    icon: Utensils,
    current: true,
  },
  {
    name: "Visit Castle Rock",
    tagline: "Things to Do & Events",
    href: "https://visitcastlerock.co",
    color: "#0EA5E9",
    icon: Compass,
    current: false,
  },
];

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#E85D2B] mb-8">
            <Utensils className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Dine Castle Rock
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your guide to the best restaurants, bars, and cafes in Castle Rock, Colorado.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-4">dinecastlerock.co</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Color Palette */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-[#E85D2B] mb-3 uppercase tracking-wider">
              Visual Identity
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Color Palette
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              A warm orange accent on dark surfaces. Designed for appetite appeal
              and premium readability.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {colors.map((c) => (
                <div key={c.hex} className="space-y-2">
                  <div
                    className={`${c.className} aspect-square rounded-2xl border border-white/10 flex items-end p-3`}
                  >
                    <span className={`text-xs font-mono ${c.text}`}>{c.hex}</span>
                  </div>
                  <p className="text-sm font-medium">{c.name}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/50 mt-6">
              OKLCH source values: Primary oklch(0.65 0.18 35) &middot; Background oklch(0.08 0.02 265) &middot; Card oklch(0.10 0.02 265)
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Typography */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-[#E85D2B] mb-3 uppercase tracking-wider">
              Type System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Typography
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              System-native fonts for maximum performance and consistent rendering.
            </p>
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-3">
                  Headlines
                </p>
                <p className="text-3xl font-bold tracking-tight">
                  Inter / System Sans-Serif
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Semibold (600) &middot; Tight tracking &middot; Used for all headings
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-3">
                  Body
                </p>
                <p className="text-lg leading-relaxed">
                  Inter / system-ui, -apple-system, sans-serif
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Regular (400) &middot; Relaxed leading &middot; Used for body text and descriptions
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-3">
                  Monospace
                </p>
                <p className="text-lg font-mono">
                  SF Mono / Menlo / Consolas
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Used for codes, hex values, and technical details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Brand Guidelines */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-[#E85D2B] mb-3 uppercase tracking-wider">
              Usage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Brand Guidelines
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Rules for representing Dine Castle Rock consistently across all contexts.
            </p>
            <div className="space-y-6">
              {brandGuidelines.map((section) => (
                <div key={section.title} className="glass-card rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[#E85D2B]">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-[#E85D2B] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Castle Rock Network */}
      <section className="section bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-medium text-[#E85D2B] mb-3 uppercase tracking-wider">
              Network
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Part of the Castle Rock Network
            </h2>
            <p className="text-muted-foreground text-lg">
              Three interconnected guides covering shopping, dining, and tourism
              in Castle Rock, Colorado.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {sisterSites.map((site) => {
              const Icon = site.icon;
              const inner = (
                <div className="glass-card rounded-2xl p-6 text-center h-full">
                  <div
                    className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: site.color }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: site.color === "#D4A853" ? "#0a0a14" : "#ffffff" }}
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{site.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{site.tagline}</p>
                  {site.current ? (
                    <span className="text-xs font-medium" style={{ color: site.color }}>
                      You are here
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      Visit site <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>
              );

              if (site.current) {
                return <div key={site.name}>{inner}</div>;
              }

              return (
                <a
                  key={site.name}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-12">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground/60">
            For brand inquiries, email{" "}
            <a href="mailto:hello@dinecastlerock.com" className="text-[#E85D2B] hover:underline">
              hello@dinecastlerock.com
            </a>
            {" "}or visit our{" "}
            <Link href="/about" className="text-[#E85D2B] hover:underline">
              about page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

'use client'

import Link from 'next/link'
import {
  ArrowRight,
  UtensilsCrossed,
  Beer,
  Coffee,
  MapPin,
  Star,
  ChevronRight,
  Sparkles,
  Store,
} from 'lucide-react'
import type { ReferralSource } from '@/data/referral-sources'

/* ------------------------------------------------------------------ */
/*  CATEGORY CARDS                                                      */
/* ------------------------------------------------------------------ */

const CATEGORIES = [
  {
    name: 'Restaurants',
    description: 'Fine dining to casual eateries — Castle Rock has it all.',
    href: '/restaurants',
    icon: UtensilsCrossed,
    count: '50+',
  },
  {
    name: 'Breweries',
    description: 'Craft breweries and taprooms with locally brewed beers.',
    href: '/breweries',
    icon: Beer,
    count: '10+',
  },
  {
    name: 'Coffee & Cafes',
    description: 'Cozy coffee shops and cafes to fuel your morning.',
    href: '/coffee',
    icon: Coffee,
    count: '15+',
  },
]

/* ------------------------------------------------------------------ */
/*  STATS                                                               */
/* ------------------------------------------------------------------ */

const STATS = [
  { label: 'Restaurants', value: '100+' },
  { label: 'Categories', value: '17' },
  { label: 'Location', value: 'Castle Rock, CO' },
]

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                      */
/* ------------------------------------------------------------------ */

interface ReferralLandingProps {
  source: ReferralSource
}

export function ReferralLanding({ source }: ReferralLandingProps) {
  return (
    <div className="min-h-screen bg-[#0a0a14]">
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Gradient orb background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
            style={{ backgroundColor: source.brandColor }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
            style={{ backgroundColor: source.brandColor }}
          />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Brand-colored accent line at top */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: source.brandColor }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-28 pb-16">
          {/* Welcome badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              backgroundColor: source.brandColorLight,
              border: `1px solid ${source.brandColor}40`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: source.brandColor }}
            />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: source.brandColor }}
            >
              {source.welcomeBadge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
            {source.headline}{' '}
            <span style={{ color: source.brandColor }}>
              {source.headlineAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {source.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href={source.ctaUrl}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              style={{
                backgroundColor: source.brandColor,
                boxShadow: `0 8px 32px ${source.brandColor}40`,
              }}
            >
              {source.ctaText}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/add-listing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <Store className="w-5 h-5" />
              Add Your Restaurant
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-white/40 text-sm tracking-wide uppercase">
            {source.socialProofText}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SPECIAL OFFER (conditional)                                   */}
      {/* ============================================================ */}
      {source.specialOffer && (
        <section className="border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{
                backgroundColor: source.brandColorLight,
                border: `1px solid ${source.brandColor}20`,
              }}
            >
              <Sparkles
                className="w-5 h-5 mt-0.5 shrink-0"
                style={{ color: source.brandColor }}
              />
              <p className="text-white/80 text-sm leading-relaxed">
                {source.specialOffer}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* TASTE CASTLE ROCK — Category Cards                            */}
      {/* ============================================================ */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Taste <span className="text-[#E85D2B]">Castle Rock</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Explore 17 dining categories — from sit-down restaurants to food
              trucks, breweries to dessert spots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="group relative bg-[#1a1a24] border border-white/5 rounded-2xl p-6 hover:border-[#E85D2B]/30 hover:bg-[#1a1a24]/80 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#E85D2B]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#E85D2B]" />
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#E85D2B] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Count badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white/40 group-hover:text-[#E85D2B]/70 transition-colors">
                    <span>{cat.count} listings</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS BAR                                                     */}
      {/* ============================================================ */}
      <section className="border-y border-white/5 bg-[#0d0d18]">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DINING GUIDES TEASER                                          */}
      {/* ============================================================ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E85D2B]/10 border border-[#E85D2B]/20 mb-6">
            <Star className="w-4 h-4 text-[#E85D2B]" />
            <span className="text-xs font-semibold text-[#E85D2B] uppercase tracking-wider">
              Curated Guides
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Not Sure Where to Start?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Check out our curated dining guides for Happy Hour, Date Night, and
            Family-Friendly picks across Castle Rock.
          </p>

          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Browse Dining Guides
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                     */}
      {/* ============================================================ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1a1a24] to-[#0d0d18] border border-white/5 rounded-3xl p-10 sm:p-14">
            <div className="w-14 h-14 rounded-2xl bg-[#E85D2B]/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-7 h-7 text-[#E85D2B]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Own a Restaurant in Castle Rock?
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Get listed on Castle Rock&apos;s most visited dining directory.
              Free basic listings, premium options available.
            </p>

            <Link
              href="/add-listing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-white bg-[#E85D2B] hover:bg-[#d14e1f] transition-colors shadow-lg shadow-[#E85D2B]/20 hover:shadow-[#E85D2B]/30"
            >
              List Your Restaurant
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

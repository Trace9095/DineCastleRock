import type { Metadata } from "next"
import { Hero } from "@/components/home/Hero"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { DestinationsSection } from "@/components/home/DestinationsSection"
import { FeaturedSection } from "@/components/home/FeaturedSection"
import { getTrendingListings, getDateNightListings, getFeaturedListing, isOpenNow } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ScrollReveal, GlowBadge } from "@/components/ui/AnimatedUI"
import { Star, TrendingUp, ArrowRight, Sparkles, Heart, Utensils, MapPin, Clock, ExternalLink, Phone, Mountain } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dine Castle Rock | Castle Rock's Premier Dining Guide",
  description: "Find the best restaurants in Castle Rock, Colorado — local dining, cafes, bars, and eateries curated for residents and visitors.",
  alternates: {
    canonical: "https://dinecastlerock.co",
  },
  openGraph: {
    title: "Dine Castle Rock | Castle Rock's Premier Dining Guide",
    description: "Find the best restaurants in Castle Rock, Colorado — local dining, cafes, bars, and eateries curated for residents and visitors.",
    url: "https://dinecastlerock.co",
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: "Dine Castle Rock - Castle Rock's Premier Dining Guide" }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Dine Castle Rock",
  description: "Restaurant and dining directory for Castle Rock, Colorado.",
  url: "https://dinecastlerock.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Castle Rock",
    addressRegion: "CO",
    addressCountry: "US",
  },
}

export default function Home() {
  const trendingListings = getTrendingListings(8)

  const formattedTrending = trendingListings.map(listing => ({
    id: listing.id,
    name: listing.name,
    slug: listing.slug,
    image: listing.image || '/images/guides/date-night-hero.jpg',
    cuisine: listing.cuisine || 'Restaurant',
    price: listing.price || '$$',
    rating: listing.rating,
    reviewCount: listing.reviewCount,
    address: listing.address?.split(',')[0] || 'Castle Rock',
    isOpen: isOpenNow(listing.hours),
    isPremium: listing.isPremium,
    deal: listing.deals.length > 0 ? listing.deals[0].title : undefined
  }))

  const dateNightListings = getDateNightListings(8)

  const formattedDateNight = dateNightListings.map(listing => ({
    id: listing.id,
    name: listing.name,
    slug: listing.slug,
    image: listing.image || '/images/guides/date-night-hero.jpg',
    cuisine: listing.cuisine || 'Restaurant',
    price: listing.price || '$$',
    rating: listing.rating,
    reviewCount: listing.reviewCount,
    address: listing.address?.split(',')[0] || 'Castle Rock',
    isOpen: isOpenNow(listing.hours),
    isPremium: listing.isPremium
  }))

  const sponsoredListing = getFeaturedListing()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen">
        <Hero />

        <ScrollReveal delay={0}>
          <CategoryGrid />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <DestinationsSection />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <FeaturedSection
            title="Trending in Castle Rock"
            badge="Hot This Week"
            subtitle={
              <span className="flex items-center gap-2 justify-center sm:justify-start">
                <TrendingUp className="h-4 w-4 text-[#E85D2B]" />
                Most clicked and saved this week
              </span>
            }
            items={formattedTrending}
            link="/restaurants"
            linkText="View All Restaurants"
          />
        </ScrollReveal>

        {/* Sponsored Section */}
        {sponsoredListing && (
          <ScrollReveal delay={200}>
            <section className="py-24 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#12121a] to-[#0a0a14]" />

              {/* Decorative elements */}
              <div className="absolute top-20 left-10 w-96 h-96 bg-[#E85D2B]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

              <div className="container max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex justify-center mb-8">
                  <GlowBadge className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 gap-2">
                    <Sparkles className="w-4 h-4 text-[#E85D2B]" />
                    <span className="text-sm font-semibold text-white">Featured Restaurant</span>
                  </GlowBadge>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-center p-8 md:p-12 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10">
                  {/* Image */}
                  <div className="w-full lg:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden group">
                    {sponsoredListing.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={sponsoredListing.image}
                        alt={sponsoredListing.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#E85D2B]/20 via-orange-500/10 to-amber-500/20 flex items-center justify-center"><Utensils className="h-16 w-16 text-[#E85D2B]/60" /></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                      {sponsoredListing.name}
                    </h3>
                    <p className="text-white/70 mb-8 text-lg md:text-xl leading-relaxed line-clamp-2">
                      {sponsoredListing.description || `Discover ${sponsoredListing.name} in Castle Rock`}
                    </p>

                    <div className="flex items-center gap-4 justify-center lg:justify-start text-sm mb-8 flex-wrap">
                      <div className="flex items-center gap-2 bg-[#E85D2B]/10 border border-[#E85D2B]/20 rounded-full px-4 py-2 backdrop-blur-sm">
                        <Star className="h-5 w-5 fill-[#E85D2B] text-[#E85D2B]" />
                        <span className="font-bold text-white">{sponsoredListing.rating.toFixed(1)}</span>
                        <span className="text-white/60">({sponsoredListing.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                        <span className="text-white/70">{sponsoredListing.cuisine}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                        <span className="text-white/70">{sponsoredListing.price}</span>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      asChild
                      className="rounded-full px-10 py-6 font-semibold shadow-lg shadow-[#C04E20]/20 bg-[#C04E20] hover:bg-[#A84118] transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg text-white"
                    >
                      <Link href={`/listing/${sponsoredListing.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <p className="text-center text-sm text-white/70 mt-8">
                  <Link href="/advertise" className="hover:text-white transition-colors inline-flex items-center gap-2 group">
                    Interested in promoting your business?
                    <span className="text-[#E85D2B] group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </p>
              </div>
            </section>
          </ScrollReveal>
        )}

        <ScrollReveal delay={250}>
          <FeaturedSection
            title="Date Night Destinations"
            badge="Romantic Picks"
            subtitle={
              <span className="flex items-center gap-2 justify-center sm:justify-start">
                <Heart className="h-4 w-4 text-rose-500" />
                Romantic spots for the perfect evening
              </span>
            }
            items={formattedDateNight.length > 0 ? formattedDateNight : formattedTrending.slice().reverse()}
            link="/guides/date-night"
            linkText="View Date Night Guide"
          />
        </ScrollReveal>

        {/* Royal Gorge Day Trip Cross-Promotion */}
        <ScrollReveal delay={300}>
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#12121a] to-[#0a0a14]" />
            <div className="absolute top-20 right-10 w-80 h-80 bg-amber-600/8 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#E85D2B]/8 rounded-full blur-3xl" />

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
              {/* Header */}
              <div className="text-center mb-14">
                <div className="flex justify-center mb-5">
                  <GlowBadge className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-semibold text-white">1.5 hrs from Castle Rock</span>
                  </GlowBadge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Plan a Day Trip — Castle Rock to Royal Gorge
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                  1.5 hours via I-25 South + CO-115. World-class adventure and dining await in Canon City.
                </p>
              </div>

              {/* Dining Cards */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-5">
                  <Utensils className="h-5 w-5 text-[#E85D2B]" />
                  <h3 className="text-lg font-semibold text-white">Royal Gorge Dining</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {/* WhiteWater Bar & Grill */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E85D2B]/30 transition-colors group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-[#E85D2B]/15 flex items-center justify-center">
                          <Utensils className="h-5 w-5 text-[#E85D2B]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">WhiteWater Bar &amp; Grill</h4>
                          <span className="text-xs text-white/50">Riverside Dining</span>
                        </div>
                      </div>
                      <a
                        href="https://whitewaterbar.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-[#E85D2B] transition-colors"
                        aria-label="Visit WhiteWater Bar and Grill website"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-white/60 text-sm mb-4">
                      Riverside dining with bar, burgers, and outdoor seating. The go-to spot for lunch after a morning adventure.
                    </p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-center gap-2 text-white/50">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span>45045 Hwy 50 West, Canon City</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/50">
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <a href="tel:+17192691009" className="hover:text-white/80 transition-colors">(719) 269-1009</a>
                      </div>
                    </div>
                  </div>

                  {/* Rooftop Social */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E85D2B]/30 transition-colors group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
                          <Utensils className="h-5 w-5 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Rooftop Social</h4>
                          <span className="text-xs text-white/50">Rooftop Bar &amp; Restaurant</span>
                        </div>
                      </div>
                      <a
                        href="https://wwrooftopsocial.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-amber-400 transition-colors"
                        aria-label="Visit Rooftop Social website"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-white/60 text-sm mb-4">
                      Rooftop bar and restaurant with views. Perfect for dinner after your Royal Gorge adventure — craft cocktails and elevated bites.
                    </p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-center gap-2 text-white/50">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span>302 Royal Gorge Blvd, Canon City</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/50">
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <a href="tel:+17194517241" className="hover:text-white/80 transition-colors">(719) 451-7241</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adventure Cards */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-5">
                  <Mountain className="h-5 w-5 text-white/60" />
                  <h3 className="text-lg font-semibold text-white/80">While You&apos;re There</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/3 border border-white/8 rounded-xl p-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white/80 text-sm">Royal Gorge Rafting</h4>
                      <div className="flex items-center gap-2 text-white/40 text-xs mt-1">
                        <Phone className="h-3 w-3" />
                        <span>(719) 275-7238</span>
                      </div>
                    </div>
                    <a
                      href="https://royalgorgerafting.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white/70 transition-colors"
                      aria-label="Royal Gorge Rafting website"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="bg-white/3 border border-white/8 rounded-xl p-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white/80 text-sm">Royal Gorge Zipline Tours</h4>
                      <div className="flex items-center gap-2 text-white/40 text-xs mt-1">
                        <Phone className="h-3 w-3" />
                        <span>(719) 275-7238</span>
                      </div>
                    </div>
                    <a
                      href="https://royalgorgeziplinetours.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white/70 transition-colors"
                      aria-label="Royal Gorge Zipline Tours website"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full px-8 py-5 font-semibold bg-[#C04E20] hover:bg-[#A84118] text-white shadow-lg shadow-[#C04E20]/20 transition-all hover:scale-105"
                >
                  <Link href="/itineraries">
                    View Full Day Trip Itinerary
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  )
}

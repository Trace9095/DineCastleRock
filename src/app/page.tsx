import { Hero } from "@/components/home/Hero"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { DestinationsSection } from "@/components/home/DestinationsSection"
import { FeaturedSection } from "@/components/home/FeaturedSection"
import { getTrendingListings, getDateNightListings, getFeaturedListing, isOpenNow } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, ArrowRight, Sparkles, Heart } from "lucide-react"
import Link from "next/link"

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
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryGrid />
      <DestinationsSection />

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

      {/* Sponsored Section */}
      {sponsoredListing && (
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#12121a] to-[#0a0a14]" />

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#E85D2B]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2">
                <Sparkles className="w-4 h-4 text-[#E85D2B]" />
                <span className="text-sm font-semibold text-white">Featured Restaurant</span>
              </div>
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
                  <div className="w-full h-full bg-gradient-to-br from-[#E85D2B]/20 via-orange-500/10 to-amber-500/20 flex items-center justify-center text-7xl">🍽️</div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {sponsoredListing.name}
                </h3>
                <p className="text-white/50 mb-8 text-lg md:text-xl leading-relaxed line-clamp-2">
                  {sponsoredListing.description || `Discover ${sponsoredListing.name} in Castle Rock`}
                </p>

                <div className="flex items-center gap-4 justify-center lg:justify-start text-sm mb-8 flex-wrap">
                  <div className="flex items-center gap-2 bg-[#E85D2B]/10 border border-[#E85D2B]/20 rounded-full px-4 py-2 backdrop-blur-sm">
                    <Star className="h-5 w-5 fill-[#E85D2B] text-[#E85D2B]" />
                    <span className="font-bold text-white">{sponsoredListing.rating.toFixed(1)}</span>
                    <span className="text-white/40">({sponsoredListing.reviewCount} reviews)</span>
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
                  className="rounded-full px-10 py-6 font-semibold shadow-lg shadow-[#E85D2B]/20 bg-[#E85D2B] hover:bg-[#E85D2B]/90 transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg text-white"
                >
                  <Link href={`/listing/${sponsoredListing.slug}`}>
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-white/30 mt-8">
              <Link href="/advertise" className="hover:text-white transition-colors inline-flex items-center gap-2 group">
                Interested in promoting your business?
                <span className="text-[#E85D2B] group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </p>
          </div>
        </section>
      )}

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
    </div>
  );
}

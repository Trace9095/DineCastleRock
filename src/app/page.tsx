import { Hero } from "@/components/home/Hero"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { DestinationsSection } from "@/components/home/DestinationsSection"
import { FeaturedSection } from "@/components/home/FeaturedSection"
import { getTrendingListings, getDateNightListings, getFeaturedListing, isOpenNow } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Home() {
  // Get trending listings
  const trendingListings = getTrendingListings(8)

  // Format for FeaturedSection
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

  // Get date night spots
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

  // Get a featured listing for the sponsored section
  const sponsoredListing = getFeaturedListing()

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryGrid />
      <DestinationsSection />

      <FeaturedSection
        title="Trending in Castle Rock"
        subtitle={
          <span className="flex items-center gap-2 justify-center text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            Most clicked and saved this week
          </span>
        }
        items={formattedTrending}
        link="/restaurants"
        linkText="View All Restaurants"
      />

      {/* Sponsored Section - Real Featured Listing */}
      {sponsoredListing && (
        <section className="py-16 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-6 text-center">Featured Restaurant</p>
            <div className="flex flex-col md:flex-row gap-8 items-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {sponsoredListing.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={sponsoredListing.image}
                    alt={sponsoredListing.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-6xl">🍽️</div>
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">{sponsoredListing.name}</h3>
                <p className="text-stone-300 mb-6 text-lg line-clamp-2">
                  {sponsoredListing.description || `Discover ${sponsoredListing.name} in Castle Rock`}
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-start text-sm mb-6 flex-wrap">
                  <div className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full px-3 py-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{sponsoredListing.rating.toFixed(1)}</span>
                    <span className="text-amber-200/70">({sponsoredListing.reviewCount})</span>
                  </div>
                  <span className="text-stone-400">{sponsoredListing.cuisine}</span>
                  <span className="text-stone-400">{sponsoredListing.price}</span>
                </div>
                <Button size="lg" asChild className="rounded-full px-8 font-semibold shadow-lg">
                  <Link href={`/listing/${sponsoredListing.slug}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
            <p className="text-center text-sm text-stone-400 mt-6">
              <Link href="/advertise" className="hover:text-white transition-colors inline-flex items-center gap-1">
                Interested in promoting your business? <span className="text-primary">Learn more →</span>
              </Link>
            </p>
          </div>
        </section>
      )}

      <FeaturedSection
        title="Date Night Destinations"
        subtitle="Romantic spots for the perfect evening."
        items={formattedDateNight.length > 0 ? formattedDateNight : formattedTrending.slice().reverse()}
        link="/guides/date-night"
        linkText="View Date Night Guide"
      />
    </div>
  );
}

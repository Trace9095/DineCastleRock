import { Hero } from "@/components/home/Hero"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { FeaturedSection } from "@/components/home/FeaturedSection"
import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export default async function Home() {
  // Fetch trending listings (premium/featured, top rated)
  const trendingListings = await prisma.listing.findMany({
    orderBy: [
      { isPremium: 'desc' },
      { rating: 'desc' },
      { reviewCount: 'desc' }
    ],
    include: {
      activeDeals: {
        where: {
          OR: [
            { endDate: null },
            { endDate: { gte: new Date() } }
          ]
        }
      }
    },
    take: 8
  })

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
    isOpen: listing.isOpen,
    isPremium: listing.isPremium,
    deal: listing.activeDeals.length > 0 ? listing.activeDeals[0].title : undefined
  }))

  // Fetch date night spots (highly rated, premium)
  const dateNightListings = await prisma.listing.findMany({
    where: {
      OR: [
        { features: { hasSome: ['Date Night'] } },
        { features: { hasSome: ['Craft Cocktails'] } },
        { price: { in: ['$$$', '$$$$'] } }
      ]
    },
    orderBy: { rating: 'desc' },
    take: 8
  })

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
    isOpen: listing.isOpen,
    isPremium: listing.isPremium
  }))

  // Get a featured listing for the sponsored section
  const sponsoredListing = await prisma.listing.findFirst({
    where: { isPremium: true },
    orderBy: { rating: 'desc' }
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryGrid />

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
        <section className="py-12 bg-zinc-900 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4 text-center">Sponsored</p>
            <div className="flex flex-col md:flex-row gap-6 items-center p-6 border border-zinc-800 rounded-2xl bg-zinc-800/50">
              <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden bg-zinc-700">
                {sponsoredListing.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={sponsoredListing.image}
                    alt={sponsoredListing.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{sponsoredListing.name}</h3>
                <p className="text-zinc-400 mb-4 line-clamp-2">
                  {sponsoredListing.description || `Discover ${sponsoredListing.name} in Castle Rock`}
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-start text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{sponsoredListing.rating.toFixed(1)}</span>
                    <span className="text-zinc-500">({sponsoredListing.reviewCount})</span>
                  </div>
                  <span className="text-zinc-500">•</span>
                  <span>{sponsoredListing.cuisine}</span>
                  <span className="text-zinc-500">•</span>
                  <span>{sponsoredListing.price}</span>
                </div>
                <Button asChild className="bg-white text-zinc-900 hover:bg-zinc-100">
                  <Link href={`/listing/${sponsoredListing.slug}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
            <p className="text-center text-xs text-zinc-600 mt-4">
              <Link href="/advertise" className="hover:text-zinc-400 transition-colors">
                Interested in promoting your business? Learn more →
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

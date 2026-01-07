import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ListingCard } from "@/components/listings/ListingCard"
import { getListingsByCategory, isOpenNow, CATEGORIES, DESTINATIONS } from "@/lib/data"
import { MapPin, Compass, Heart, Users, Sparkles, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Things To Do in Castle Rock | Activities, Entertainment & Attractions",
    description: "Discover the best things to do in Castle Rock, Colorado. From outdoor adventures and family activities to wellness experiences and local attractions.",
    openGraph: {
        title: "Things To Do in Castle Rock",
        description: "Discover adventures, attractions, family activities, and entertainment in Castle Rock, Colorado.",
    },
}

// Categories featured on this page
const FEATURED_CATEGORIES = [
    { slug: 'activities', icon: Compass, color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
    { slug: 'kids', icon: Users, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { slug: 'wellness', icon: Heart, color: 'text-pink-500', bgColor: 'bg-pink-500/10' },
    { slug: 'retail', icon: Sparkles, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
]

export default function ThingsToDoPage() {
    // Get listings for each featured category
    const activitiesListings = getListingsByCategory('activities').slice(0, 4)
    const kidsListings = getListingsByCategory('kids').slice(0, 4)
    const wellnessListings = getListingsByCategory('wellness').slice(0, 4)
    const retailListings = getListingsByCategory('retail').slice(0, 4)

    const allFeaturedCategories = FEATURED_CATEGORIES.map(fc => {
        const category = CATEGORIES.find(c => c.slug === fc.slug)
        return { ...fc, ...category }
    }).filter(c => c.name)

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-zinc-900 to-zinc-800 text-white py-20 px-4">
                <div className="absolute inset-0 bg-[url('/images/edge-ziplines-adventures.jpg')] bg-cover bg-center opacity-20" />
                <div className="container max-w-6xl mx-auto relative z-10">
                    <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-white/10 rounded-full mb-4">
                            Explore Castle Rock
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Things To Do
                        </h1>
                        <p className="text-lg text-zinc-300 mb-8">
                            From outdoor adventures and family fun to wellness retreats and shopping destinations,
                            discover everything Castle Rock has to offer.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {allFeaturedCategories.map((cat) => (
                                <Link
                                    key={cat.slug}
                                    href={`/${cat.slug}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <cat.icon className={`h-4 w-4 ${cat.color}`} />
                                    <span>{cat.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="border-b bg-card">
                <div className="container max-w-6xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <p className="text-3xl font-bold text-primary">{activitiesListings.length + kidsListings.length}+</p>
                            <p className="text-sm text-muted-foreground">Activities & Attractions</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">{DESTINATIONS.length}</p>
                            <p className="text-sm text-muted-foreground">Shopping Districts</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">{wellnessListings.length}+</p>
                            <p className="text-sm text-muted-foreground">Wellness Spots</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">300+</p>
                            <p className="text-sm text-muted-foreground">Acres of Parks</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities & Adventures Section */}
            {activitiesListings.length > 0 && (
                <section className="py-16 px-4">
                    <div className="container max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-2 rounded-lg bg-orange-500/10">
                                        <Compass className="h-5 w-5 text-orange-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Activities & Adventures</h2>
                                </div>
                                <p className="text-muted-foreground">Outdoor adventures and thrilling experiences</p>
                            </div>
                            <Button variant="outline" asChild>
                                <Link href="/activities">
                                    View All <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {activitiesListings.map((listing) => (
                                <ListingCard
                                    key={listing.id}
                                    id={listing.id}
                                    name={listing.name}
                                    slug={listing.slug}
                                    image={listing.image || ''}
                                    cuisine={listing.cuisine || 'Activity'}
                                    price={listing.price || '$$'}
                                    rating={listing.rating}
                                    reviewCount={listing.reviewCount}
                                    address={listing.address || 'Castle Rock, CO'}
                                    isOpen={isOpenNow(listing.hours)}
                                    isPremium={listing.isPremium}
                                    deal={listing.deals.length > 0 ? listing.deals[0].title : undefined}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Destinations Section */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 mb-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <h2 className="text-2xl font-bold">Explore Castle Rock</h2>
                        </div>
                        <p className="text-muted-foreground">Discover our unique shopping and entertainment districts</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {DESTINATIONS.map((destination) => (
                            <Card key={destination.id} className="overflow-hidden group">
                                <div className="flex flex-col md:flex-row">
                                    <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0">
                                        <Image
                                            src={destination.image}
                                            alt={destination.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-5 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">{destination.name}</h3>
                                            <p className="text-sm text-muted-foreground mb-3">{destination.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {destination.highlights.slice(0, 3).map((highlight, i) => (
                                                    <span key={i} className="text-xs px-2 py-1 bg-muted rounded-full">
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm" className="w-fit" asChild>
                                            <Link href={`/destinations/${destination.slug}`}>
                                                Explore
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kids & Family Section */}
            {kidsListings.length > 0 && (
                <section className="py-16 px-4">
                    <div className="container max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-2 rounded-lg bg-blue-500/10">
                                        <Users className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Kids & Family</h2>
                                </div>
                                <p className="text-muted-foreground">Family-friendly activities and entertainment</p>
                            </div>
                            <Button variant="outline" asChild>
                                <Link href="/kids">
                                    View All <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {kidsListings.map((listing) => (
                                <ListingCard
                                    key={listing.id}
                                    id={listing.id}
                                    name={listing.name}
                                    slug={listing.slug}
                                    image={listing.image || ''}
                                    cuisine={listing.cuisine || 'Family Activity'}
                                    price={listing.price || '$$'}
                                    rating={listing.rating}
                                    reviewCount={listing.reviewCount}
                                    address={listing.address || 'Castle Rock, CO'}
                                    isOpen={isOpenNow(listing.hours)}
                                    isPremium={listing.isPremium}
                                    deal={listing.deals.length > 0 ? listing.deals[0].title : undefined}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Wellness Section */}
            {wellnessListings.length > 0 && (
                <section className="py-16 px-4 bg-muted/30">
                    <div className="container max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-2 rounded-lg bg-pink-500/10">
                                        <Heart className="h-5 w-5 text-pink-500" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Health & Wellness</h2>
                                </div>
                                <p className="text-muted-foreground">Fitness, spa, and wellness experiences</p>
                            </div>
                            <Button variant="outline" asChild>
                                <Link href="/wellness">
                                    View All <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {wellnessListings.map((listing) => (
                                <ListingCard
                                    key={listing.id}
                                    id={listing.id}
                                    name={listing.name}
                                    slug={listing.slug}
                                    image={listing.image || ''}
                                    cuisine={listing.cuisine || 'Wellness'}
                                    price={listing.price || '$$'}
                                    rating={listing.rating}
                                    reviewCount={listing.reviewCount}
                                    address={listing.address || 'Castle Rock, CO'}
                                    isOpen={isOpenNow(listing.hours)}
                                    isPremium={listing.isPremium}
                                    deal={listing.deals.length > 0 ? listing.deals[0].title : undefined}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Categories Grid */}
            <section className="py-16 px-4">
                <div className="container max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold mb-2">Browse All Categories</h2>
                        <p className="text-muted-foreground">Find exactly what you&apos;re looking for</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {CATEGORIES.filter(c => !['restaurants', 'bars-nightlife', 'coffee', 'dessert', 'food-trucks', 'takeout-delivery', 'breweries'].includes(c.slug)).map((category) => (
                            <Link
                                key={category.id}
                                href={`/${category.slug}`}
                                className="flex flex-col items-center p-4 rounded-xl border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-muted mb-3 overflow-hidden">
                                    {category.image && (
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                                    {category.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Have a Business in Castle Rock?</h2>
                    <p className="text-muted-foreground mb-6">
                        Get discovered by locals and visitors. Add your business to our directory.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button asChild>
                            <Link href="/add-listing">Add Your Business</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/advertise">Advertise With Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

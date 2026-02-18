import { ListingCard } from "@/components/listings/ListingCard"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getListingBySlug, isOpenNow } from "@/lib/data"

// Guide data with correct listing slugs
const GUIDES: Record<string, {
    title: string
    author: string
    date: string
    heroImage: string
    intro: string
    content: string[]
    listingSlugs: string[]
}> = {
    'happy-hour': {
        title: "The Ultimate Happy Hour Guide in Castle Rock",
        author: "Editorial Team",
        date: "October 10, 2025",
        heroImage: "/images/guides/happy-hour-hero.jpg",
        intro: "Castle Rock's happy hour scene is booming. From craft breweries on Wilcox to upscale cocktails downtown, here are the best deals in town for after-work drinks and bites.",
        content: [
            "Whether you are looking for discounted craft beers, half-off appetizers, or specialty cocktails, Castle Rock has you covered. The downtown area along Wilcox Street is especially popular for its walkable collection of bars and restaurants offering daily specials.",
            "Most happy hours run from 3-6 PM on weekdays, though some spots extend their deals into the evening or offer late-night specials. Pro tip: Many places also run weekend brunch happy hours that are worth checking out.",
            "Here are our top picks for happy hour in Castle Rock, featuring verified deal information and local favorites."
        ],
        listingSlugs: [
            'great-divide-brewery-roadhouse',
            'provision-castle-rock',
            'the-whiskey-lodge',
            'hideaway-bar-grill',
            'courtyard-social'
        ]
    },
    'date-night': {
        title: "Romantic Date Night Spots in Castle Rock",
        author: "Sarah Johnson",
        date: "September 28, 2025",
        heroImage: "/images/guides/date-night-hero.jpg",
        intro: "Planning a special evening? Castle Rock offers an impressive selection of romantic restaurants perfect for date night, from upscale Italian in a historic church to intimate cocktail bars.",
        content: [
            "Castle Rock may be a small town, but it punches above its weight when it comes to romantic dining. The downtown area features several upscale options housed in historic buildings, creating the perfect ambiance for a special night out.",
            "For the ultimate date night experience, we recommend making reservations—especially on weekends. Many of these spots also offer excellent wine lists and craft cocktail menus to complement your meal.",
            "From fine dining to cozy cocktail lounges, here are our favorite romantic spots in Castle Rock."
        ],
        listingSlugs: [
            'scileppis-old-stone-church',
            'provision-castle-rock',
            'trestles-coastal-cuisine',
            'union-american-bistro',
            'courtyard-social'
        ]
    },
    'family-friendly': {
        title: "Family-Friendly Dining in Castle Rock",
        author: "Mike Thompson",
        date: "September 15, 2025",
        heroImage: "/images/guides/family-dining-hero.jpg",
        intro: "Finding a restaurant that works for the whole family can be challenging. These Castle Rock spots welcome kids with open arms while still serving food that parents will actually enjoy.",
        content: [
            "Castle Rock is a family-oriented community, and its restaurants reflect that. Many local spots offer dedicated kids' menus, high chairs, and a relaxed atmosphere where a little noise is perfectly acceptable.",
            "From classic American comfort food to Mexican favorites, these restaurants understand that dining with kids should be enjoyable for everyone—not a stressful experience.",
            "Here are the best family-friendly restaurants in Castle Rock, based on our dining experiences and local parent recommendations."
        ],
        listingSlugs: [
            'castle-cafe',
            'savinas-mexican-kitchen',
            'great-divide-brewery-roadhouse',
            'rockyard-brewing-company',
            'hideaway-bar-grill'
        ]
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const guide = GUIDES[slug]

    if (!guide) {
        return { title: 'Guide Not Found | Dine Castle Rock' }
    }

    return {
        title: `${guide.title} | Dine Castle Rock`,
        description: guide.intro,
        openGraph: {
            title: guide.title,
            description: guide.intro,
            images: [guide.heroImage],
        },
    }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const guide = GUIDES[slug]

    if (!guide) {
        notFound()
    }

    // Get actual listings data
    const listings = guide.listingSlugs
        .map(listingSlug => getListingBySlug(listingSlug))
        .filter((l): l is NonNullable<typeof l> => l !== undefined)

    return (
        <article className="min-h-screen pb-20">
            {/* Hero Section */}
            <div className="h-[50vh] relative z-0 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={guide.heroImage} alt={guide.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 container max-w-4xl mx-auto">
                    <Badge className="mb-4">Local Guide</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{guide.title}</h1>
                    <div className="flex items-center gap-3 text-white">
                        <Avatar className="h-8 w-8 border border-white">
                            <AvatarFallback>{guide.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{guide.author}</span>
                        <span>•</span>
                        <span className="opacity-80">{guide.date}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container max-w-3xl mx-auto px-4 py-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-muted-foreground">{guide.intro}</p>

                    {guide.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}

                    <h2>Our Top Picks</h2>
                </div>

                {/* Listings Grid */}
                <div className="my-12 grid gap-8">
                    {listings.map((listing, index) => (
                        <div key={listing.id} className="border border-white/5 rounded-xl p-4 md:p-6 bg-white/5">
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                                    <h3 className="text-xl font-bold">{listing.name}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{listing.address}</p>
                            </div>
                            <div className="h-64">
                                <ListingCard
                                    id={listing.id}
                                    name={listing.name}
                                    slug={listing.slug}
                                    image={listing.image}
                                    cuisine={listing.cuisine}
                                    price={listing.price}
                                    rating={listing.rating}
                                    reviewCount={listing.reviewCount}
                                    address={listing.address.split(',')[0]}
                                    isOpen={isOpenNow(listing.hours)}
                                    isPremium={listing.isPremium}
                                    deal={listing.deals.length > 0 ? listing.deals[0].title : undefined}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {slug === 'happy-hour' && (
                            <>
                                <div>
                                    <h3 className="font-semibold mb-2">What time does happy hour typically start in Castle Rock?</h3>
                                    <p className="text-muted-foreground">Most happy hours run from 3-6 PM on weekdays, though some spots offer late-night specials from 9 PM to close.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Are there weekend happy hour deals?</h3>
                                    <p className="text-muted-foreground">Some restaurants offer weekend brunch specials, but traditional happy hour deals are mostly weekday-focused.</p>
                                </div>
                            </>
                        )}
                        {slug === 'date-night' && (
                            <>
                                <div>
                                    <h3 className="font-semibold mb-2">Do I need reservations for date night restaurants?</h3>
                                    <p className="text-muted-foreground">We recommend reservations, especially on Friday and Saturday nights. Most restaurants accept reservations through their website or by phone.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">What is the dress code at upscale Castle Rock restaurants?</h3>
                                    <p className="text-muted-foreground">Most spots are business casual. You will fit in with nice jeans and a collared shirt, but you can certainly dress up more for special occasions.</p>
                                </div>
                            </>
                        )}
                        {slug === 'family-friendly' && (
                            <>
                                <div>
                                    <h3 className="font-semibold mb-2">Do these restaurants have children&apos;s menus?</h3>
                                    <p className="text-muted-foreground">Yes, all restaurants in this guide offer dedicated kids menus with familiar favorites like mac and cheese, chicken tenders, and pizza.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Are high chairs available?</h3>
                                    <p className="text-muted-foreground">All listed restaurants provide high chairs and booster seats. Call ahead for larger groups to ensure availability.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

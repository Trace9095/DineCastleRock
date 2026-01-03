import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, Phone, Globe, Star, Share2, Heart, CheckCircle, AlertCircle, Calendar, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getListingBySlug, isOpenNow } from "@/lib/data"
import { ReviewForm } from "@/components/listings/ReviewForm"

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const listing = getListingBySlug(slug)

    if (!listing) {
        return { title: 'Listing Not Found | Dine Castle Rock' }
    }

    return {
        title: `${listing.name} | Dine Castle Rock`,
        description: listing.description || `${listing.name} - ${listing.cuisine || 'Restaurant'} in ${listing.address || 'Castle Rock, CO'}. View hours, menu, and make reservations.`,
        openGraph: {
            title: listing.name,
            description: listing.description || `Discover ${listing.name} in Castle Rock`,
            images: listing.image ? [listing.image] : [],
        },
    }
}

// Helper to check if a phone number looks like placeholder data
function isValidPhone(phone: string | null | undefined): boolean {
    if (!phone) return false
    // Filter out obvious placeholder patterns
    if (phone.includes('555-0')) return false
    if (phone.includes('555-1234')) return false
    if (phone === '(000) 000-0000') return false
    return true
}

// Helper to check if a URL is valid
function isValidUrl(url: string | null | undefined): boolean {
    if (!url) return false
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}

// Format hours from JSON to display format
function formatHours(hours: Record<string, string>): { day: string; time: string }[] {
    if (!hours || typeof hours !== 'object') return []

    const formatted: { day: string; time: string }[] = []
    const daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    for (const day of daysOrder) {
        const time = hours[day]
        if (time) {
            formatted.push({ day, time })
        }
    }

    return formatted
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    // Get listing from mock data
    const listing = getListingBySlug(slug)

    if (!listing) {
        notFound()
    }

    // Process data
    const hasValidPhone = isValidPhone(listing.phone)
    const hasValidWebsite = isValidUrl(listing.website)
    const hours = formatHours(listing.hours)
    const hasHours = hours.length > 0

    // Build images array
    const images = [
        listing.image,
        ...listing.gallery
    ].filter(Boolean) as string[]

    // Fallback images if none exist
    const displayImages = images.length > 0 ? images : [
        '/images/guides/date-night-hero.jpg',
        '/images/guides/happy-hour-hero.jpg'
    ]

    // Build JSON-LD structured data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: listing.name,
        description: listing.description,
        image: images.length > 0 ? images : undefined,
        address: listing.address ? {
            '@type': 'PostalAddress',
            streetAddress: listing.address.split(',')[0]?.trim(),
            addressLocality: 'Castle Rock',
            addressRegion: 'CO',
            postalCode: '80104',
            addressCountry: 'US'
        } : undefined,
        telephone: hasValidPhone ? listing.phone : undefined,
        url: hasValidWebsite ? listing.website : undefined,
        servesCuisine: listing.cuisine,
        priceRange: listing.price,
        aggregateRating: listing.reviewCount > 0 ? {
            '@type': 'AggregateRating',
            ratingValue: listing.rating,
            reviewCount: listing.reviewCount,
            bestRating: 5,
            worstRating: 1
        } : undefined,
        openingHoursSpecification: hours.map(h => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.day,
            opens: h.time.split(' - ')[0],
            closes: h.time.split(' - ')[1]
        }))
    }

    // Category label for breadcrumb
    const categoryLabel = listing.categorySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Gallery */}
            <div className="relative z-0 h-[35vh] md:h-[45vh] bg-zinc-100">
                <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-0.5">
                    <div className="md:col-span-2 relative h-full overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={displayImages[0]} alt={listing.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden md:grid grid-rows-2 gap-0.5 h-full">
                        <div className="relative overflow-hidden bg-zinc-200">
                            {displayImages[1] ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={displayImages[1]} alt="Gallery 1" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full" />
                            )}
                        </div>
                        <div className="relative overflow-hidden bg-zinc-200">
                            {displayImages[2] ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={displayImages[2]} alt="Gallery 2" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <Link href={`/${listing.categorySlug}`} className="hover:text-foreground transition-colors">{categoryLabel}</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-foreground font-medium truncate max-w-[200px]">{listing.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Header Info */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex gap-2">
                                    {listing.cuisine && (
                                        <Badge variant="outline">{listing.cuisine}</Badge>
                                    )}
                                    {isOpenNow(listing.hours) && (
                                        <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">Open Now</Badge>
                                    )}
                                    {listing.isPremium && (
                                        <Badge className="bg-amber-500 hover:bg-amber-600 text-white">Featured</Badge>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon"><Share2 className="h-5 w-5" /></Button>
                                    <Button variant="ghost" size="icon"><Heart className="h-5 w-5" /></Button>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{listing.name}</h1>
                            <div className="flex items-center gap-4 text-sm flex-wrap">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    <span className="font-semibold">{listing.rating.toFixed(1)}</span>
                                    <span className="text-muted-foreground">({listing.reviewCount} reviews)</span>
                                </div>
                                {listing.price && (
                                    <>
                                        <span>•</span>
                                        <span className="font-medium">{listing.price}</span>
                                    </>
                                )}
                                {listing.address && (
                                    <>
                                        <span>•</span>
                                        <span className="text-muted-foreground">{listing.address}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons - Only show if we have real URLs */}
                        {hasValidWebsite && (
                            <div className="flex flex-wrap gap-4 py-4">
                                <Button size="lg" asChild className="flex-1 md:flex-none">
                                    <a href={listing.website} target="_blank" rel="noopener noreferrer">
                                        Visit Website
                                    </a>
                                </Button>
                                {hasValidPhone && (
                                    <Button size="lg" variant="outline" asChild className="flex-1 md:flex-none">
                                        <a href={`tel:${listing.phone}`}>
                                            Call Now
                                        </a>
                                    </Button>
                                )}
                            </div>
                        )}

                        {/* Active Deals */}
                        {listing.deals.length > 0 && (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-3">
                                <h3 className="font-semibold text-green-800 flex items-center gap-2">
                                    <Star className="h-4 w-4" />
                                    Current Deals
                                </h3>
                                <div className="space-y-2">
                                    {listing.deals.map((deal) => (
                                        <div key={deal.id} className="bg-white rounded-lg p-3 shadow-sm">
                                            <p className="font-medium text-green-700">{deal.title}</p>
                                            <p className="text-sm text-muted-foreground">{deal.description}</p>
                                            {deal.couponCode && (
                                                <p className="text-sm mt-1">
                                                    Code: <span className="font-mono bg-green-100 px-2 py-0.5 rounded">{deal.couponCode}</span>
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 space-x-8">
                                <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-2">Overview</TabsTrigger>
                                <TabsTrigger value="menu" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-2">Menu</TabsTrigger>
                                <TabsTrigger value="photos" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-2">Photos</TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-2">Reviews</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="pt-6 space-y-6">
                                {listing.description && (
                                    <div className="prose max-w-none text-muted-foreground">
                                        <p>{listing.description}</p>
                                    </div>
                                )}

                                {listing.features && listing.features.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold mb-4 text-lg">Features</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {listing.features.map(f => (
                                                <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                                                    <CheckCircle className="h-4 w-4 text-primary" />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="menu" className="pt-6">
                                <div className="p-8 border rounded-lg text-center bg-muted/20">
                                    {hasValidWebsite ? (
                                        <>
                                            <p className="mb-4">View the menu on their website</p>
                                            <Button asChild>
                                                <a href={listing.website} target="_blank" rel="noopener noreferrer">
                                                    View Menu
                                                </a>
                                            </Button>
                                        </>
                                    ) : (
                                        <p className="text-muted-foreground">Menu information not available</p>
                                    )}
                                </div>
                            </TabsContent>

                            <TabsContent value="photos" className="pt-6">
                                {images.length > 0 ? (
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {images.map((img, i) => (
                                            <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={img} alt={`${listing.name} photo ${i + 1}`} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-8 border rounded-lg text-center bg-muted/20">
                                        <p className="text-muted-foreground">No photos available yet</p>
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="reviews" className="pt-6 space-y-8">
                                {/* Rating Summary */}
                                <div className="p-6 border rounded-lg bg-muted/20">
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold">{listing.rating.toFixed(1)}</div>
                                            <div className="flex justify-center mt-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        className={`h-4 w-4 ${
                                                            star <= Math.round(listing.rating)
                                                                ? "fill-amber-400 text-amber-400"
                                                                : "text-zinc-300"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {listing.reviewCount} reviews on Google
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Write a Review */}
                                <div className="border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
                                    <ReviewForm listingName={listing.name} listingSlug={slug} />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar info */}
                    <div className="space-y-6">
                        <div className="p-6 border rounded-xl bg-card shadow-sm space-y-4">
                            {listing.address && (
                                <>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-sm">{listing.address}</p>
                                            <Button variant="link" className="p-0 h-auto text-xs" asChild>
                                                <a
                                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.address)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Get Directions
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <Separator />
                                </>
                            )}

                            {hasValidWebsite && (
                                <div className="flex items-start gap-4">
                                    <Globe className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                                    <div>
                                        <a
                                            href={listing.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-sm hover:underline"
                                        >
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            )}

                            {hasValidPhone && (
                                <div className="flex items-start gap-4">
                                    <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                                    <div>
                                        <a href={`tel:${listing.phone}`} className="font-medium text-sm hover:underline">
                                            {listing.phone}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {hasHours && (
                                <>
                                    <Separator />
                                    <div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <span className="font-semibold text-sm">Hours</span>
                                        </div>
                                        <ul className="space-y-1 text-sm pl-9">
                                            {hours.map(h => (
                                                <li key={h.day} className="flex justify-between">
                                                    <span className="text-muted-foreground">{h.day}</span>
                                                    <span>{h.time}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Data transparency */}
                        <div className="p-4 border rounded-xl bg-muted/20 text-sm space-y-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>Last updated: {listing.updatedAt.toLocaleDateString()}</span>
                            </div>
                            <a
                                href={`mailto:hello@dinecastlerock.com?subject=Issue with ${listing.name} listing`}
                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <AlertCircle className="h-4 w-4" />
                                <span>Report an issue</span>
                            </a>
                        </div>

                        <div className="p-6 border rounded-xl bg-zinc-900 text-white shadow-sm text-center space-y-3">
                            <h3 className="font-bold">Own this business?</h3>
                            <p className="text-sm text-zinc-300">Claim this listing to manage details, add photos, and post deals.</p>
                            <Link href={`/listing/${slug}/claim`} className="w-full">
                                <Button variant="secondary" className="w-full">Claim Listing</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

    const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dinecastlerock.co'

    // Category label for breadcrumb
    const categoryLabel = listing.categorySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

    // Build JSON-LD structured data for Restaurant
    const restaurantJsonLd = {
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

    // Build Breadcrumb JSON-LD structured data
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteUrl
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: categoryLabel,
                item: `${siteUrl}/${listing.categorySlug}`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: listing.name,
                item: `${siteUrl}/listing/${slug}`
            }
        ]
    }

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data - Restaurant */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
            />
            {/* JSON-LD Structured Data - Breadcrumb */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Hero Gallery */}
            <div className="relative z-0 h-[40vh] md:h-[50vh] bg-muted overflow-hidden">
                <div className="h-full grid grid-cols-1 md:grid-cols-4 gap-1">
                    <div className="md:col-span-3 relative h-full overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={displayImages[0]} alt={listing.name} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <div className="hidden md:grid grid-rows-2 gap-1 h-full">
                        <div className="relative overflow-hidden bg-muted">
                            {displayImages[1] ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={displayImages[1]} alt="Gallery 1" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-primary/10 to-primary/5">🍽️</div>
                            )}
                        </div>
                        <div className="relative overflow-hidden bg-muted">
                            {displayImages[2] ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={displayImages[2]} alt="Gallery 2" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-primary/10 to-primary/5">🍷</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 bg-background container max-w-7xl mx-auto px-4 py-6">
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
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {listing.isPremium && (
                                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                                    )}
                                    {isOpenNow(listing.hours) && (
                                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200">Open Now</Badge>
                                    )}
                                    {listing.cuisine && (
                                        <Badge variant="outline" className="border-primary/30 text-primary">{listing.cuisine}</Badge>
                                    )}
                                </div>
                                <div className="flex gap-1">
                                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10"><Share2 className="h-4 w-4" /></Button>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10"><Heart className="h-4 w-4" /></Button>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{listing.name}</h1>
                            <div className="flex items-center gap-3 flex-wrap">
                                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    <span className="font-bold text-amber-900">{listing.rating.toFixed(1)}</span>
                                    <span className="text-amber-700/80 text-sm">({listing.reviewCount})</span>
                                </div>
                                {listing.price && (
                                    <span className="font-medium text-muted-foreground">{listing.price}</span>
                                )}
                                {listing.address && (
                                    <span className="text-muted-foreground flex items-center gap-1">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {listing.address.split(',')[0]}
                                    </span>
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
                    <div className="space-y-5">
                        <div className="p-5 border border-border/50 rounded-2xl bg-card shadow-sm space-y-4">
                            <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Contact Info</h3>

                            {listing.address && (
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">{listing.address}</p>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-primary hover:underline"
                                        >
                                            Get Directions
                                        </a>
                                    </div>
                                </div>
                            )}

                            {hasValidWebsite && (
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Globe className="h-4 w-4 text-primary" />
                                    </div>
                                    <a
                                        href={listing.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-sm hover:text-primary transition-colors"
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            )}

                            {hasValidPhone && (
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="h-4 w-4 text-primary" />
                                    </div>
                                    <a href={`tel:${listing.phone}`} className="font-medium text-sm hover:text-primary transition-colors">
                                        {listing.phone}
                                    </a>
                                </div>
                            )}
                        </div>

                        {hasHours && (
                            <div className="p-5 border border-border/50 rounded-2xl bg-card shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <Clock className="h-4 w-4 text-primary" />
                                    <span className="font-semibold text-sm">Hours of Operation</span>
                                </div>
                                <ul className="space-y-2 text-sm">
                                    {hours.map(h => (
                                        <li key={h.day} className="flex justify-between py-1 border-b border-border/30 last:border-0">
                                            <span className="text-muted-foreground">{h.day}</span>
                                            <span className="font-medium">{h.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Data transparency */}
                        <div className="p-4 border border-border/50 rounded-xl bg-muted/30 text-sm space-y-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>Updated {listing.updatedAt.toLocaleDateString()}</span>
                            </div>
                            <a
                                href={`mailto:hello@dinecastlerock.com?subject=Issue with ${listing.name} listing`}
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <AlertCircle className="h-4 w-4" />
                                <span>Report an issue</span>
                            </a>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white shadow-lg text-center space-y-3">
                            <h3 className="font-bold text-lg">Own this business?</h3>
                            <p className="text-sm text-stone-300">Claim this listing to manage details, add photos, and post deals.</p>
                            <Button variant="secondary" className="w-full font-semibold" asChild>
                                <Link href={`/listing/${slug}/claim`}>
                                    Claim Listing
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

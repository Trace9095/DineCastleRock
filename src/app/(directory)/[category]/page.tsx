import type { Metadata } from "next"
import { FilterSidebar } from "@/components/listings/FilterSidebar"
import { ListingCard } from "@/components/listings/ListingCard"
import { MobileFilterDrawer } from "@/components/listings/MobileFilterDrawer"
import { Pagination } from "@/components/listings/Pagination"
import { SortSelect } from "@/components/listings/SortSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"
import { getListingsByCategory, searchListings, isOpenNow, type Listing } from "@/lib/data"
import { Suspense } from "react"
import Link from "next/link"

const PAGE_SIZE = 12

// Valid categories that should render this page
const VALID_CATEGORIES = [
    'restaurants',
    'bars-nightlife',
    'bars',
    'coffee',
    'takeout-delivery',
    'dessert',
    'food-trucks',
    'breweries',
    'retail',
    'auto',
    'wellness',
    'kids',
    'gifts',
    'home-services',
    'professional-services',
    'beauty',
    'pets',
    'activities'
]

// Category descriptions for better UX
const CATEGORY_DESCRIPTIONS: Record<string, string> = {
    'restaurants': 'From fine dining to casual eateries, find your next favorite meal.',
    'bars-nightlife': 'The best spots for drinks, live music, and nightlife.',
    'bars': 'Local bars and pubs for every occasion.',
    'coffee': 'Cafes and coffee shops to fuel your day.',
    'takeout-delivery': 'Quick and convenient options for dining at home.',
    'dessert': 'Sweet treats and dessert destinations.',
    'food-trucks': 'Mobile kitchens serving up delicious street food.',
    'breweries': 'Craft breweries and taprooms with local beers.',
    'retail': 'Shops, boutiques, and retail destinations.',
    'auto': 'Auto services, dealerships, and transportation.',
    'wellness': 'Fitness, spa, healthcare, and wellness services.',
    'kids': 'Family-friendly activities and entertainment.',
    'gifts': 'Unique gifts, souvenirs, and specialty shops.',
    'home-services': 'Home improvement, repair, and maintenance services.',
    'professional-services': 'Banking, legal, and business services.',
    'beauty': 'Salons, spas, and personal care services.',
    'pets': 'Pet stores, veterinary, and pet services.',
    'activities': 'Adventures, attractions, and entertainment experiences.'
}

interface PageProps {
    params: Promise<{ category: string }>
    searchParams: Promise<{
        q?: string
        sort?: string
        premium?: string
        openNow?: string
        hasDeals?: string
        price?: string
        cuisine?: string
        page?: string
    }>
}

const CATEGORY_LABELS: Record<string, string> = {
    'restaurants': 'Restaurants',
    'bars-nightlife': 'Bars & Nightlife',
    'bars': 'Bars',
    'coffee': 'Coffee Shops',
    'takeout-delivery': 'Takeout & Delivery',
    'dessert': 'Dessert',
    'food-trucks': 'Food Trucks',
    'breweries': 'Breweries',
    'retail': 'Retail',
    'auto': 'Auto Services',
    'wellness': 'Wellness',
    'kids': 'Family & Kids',
    'gifts': 'Gifts',
    'home-services': 'Home Services',
    'professional-services': 'Professional Services',
    'beauty': 'Beauty & Personal Care',
    'pets': 'Pets',
    'activities': 'Activities',
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
    const { category } = await params
    if (!VALID_CATEGORIES.includes(category)) return {}
    const label = CATEGORY_LABELS[category] || category
    const description = CATEGORY_DESCRIPTIONS[category] || `Find the best ${label} in Castle Rock, Colorado.`
    return {
        title: `${label} in Castle Rock, CO`,
        description: `${description} Browse Castle Rock's top ${label.toLowerCase()} with menus, hours, and reviews on Dine Castle Rock.`,
        alternates: { canonical: `https://dinecastlerock.co/${category}` },
    }
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
    const { category } = await params
    const {
        q: searchQuery,
        sort = 'rating',
        premium,
        openNow,
        hasDeals,
        price,
        cuisine,
        page
    } = await searchParams

    // Parse page number (default to 1)
    const currentPage = Math.max(1, parseInt(page || '1', 10) || 1)

    // Only handle valid category routes
    if (!VALID_CATEGORIES.includes(category)) {
        notFound()
    }

    // Get listings for this category
    let listings: Listing[]

    if (searchQuery) {
        listings = searchListings(searchQuery, category)
    } else {
        listings = getListingsByCategory(category)
    }

    // Apply premium filter
    if (premium === 'true') {
        listings = listings.filter(l => l.isPremium)
    }

    // Apply openNow filter (calculate dynamically)
    if (openNow === 'true') {
        listings = listings.filter(l => isOpenNow(l.hours))
    }

    // Apply hasDeals filter
    if (hasDeals === 'true') {
        listings = listings.filter(l => l.deals && l.deals.length > 0)
    }

    // Apply price filter (comma-separated values like "$,$$")
    if (price) {
        const priceFilters = price.split(',')
        listings = listings.filter(l => priceFilters.includes(l.price || '$$'))
    }

    // Apply cuisine filter (comma-separated values)
    if (cuisine) {
        const cuisineFilters = cuisine.split(',').map(c => c.toLowerCase())
        listings = listings.filter(l =>
            cuisineFilters.includes((l.cuisine || '').toLowerCase())
        )
    }

    // Sort listings
    switch (sort) {
        case 'rating':
            listings = [...listings].sort((a, b) => b.rating - a.rating)
            break
        case 'reviews':
            listings = [...listings].sort((a, b) => b.reviewCount - a.reviewCount)
            break
        case 'name':
            listings = [...listings].sort((a, b) => a.name.localeCompare(b.name))
            break
        case 'newest':
            listings = [...listings].sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
            break
    }

    // Format title
    const categoryTitle = category
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    // Pagination calculations
    const totalCount = listings.length
    const totalPages = Math.ceil(totalCount / PAGE_SIZE)
    const validPage = Math.min(currentPage, Math.max(1, totalPages))
    const startIndex = (validPage - 1) * PAGE_SIZE
    const paginatedListings = listings.slice(startIndex, startIndex + PAGE_SIZE)

    const categoryDescription = CATEGORY_DESCRIPTIONS[category] || `Discover the best ${categoryTitle.toLowerCase()} in Castle Rock.`

    // Generate ItemList schema for SEO
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${categoryTitle} in Castle Rock, CO`,
        "url": `https://dinecastlerock.co/${category}/`,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": listings.slice(0, 20).map((listing, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://dinecastlerock.co/listing/${listing.slug}`
            }))
        }
    }

    return (
        <div className="min-h-screen bg-background">
            {/* ItemList Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />

            <div className="container max-w-7xl mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-foreground font-medium">{categoryTitle}</span>
                </nav>

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">{categoryTitle}</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        {categoryDescription}
                    </p>
                </div>

                {/* Search & Sort Bar */}
                <div className="mb-8 flex flex-col sm:flex-row gap-3">
                    <form className="flex-1 relative" action={`/${category}`}>
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            name="q"
                            placeholder={`Search ${categoryTitle.toLowerCase()}...`}
                            className="pl-11 h-12 rounded-xl border-border/50 focus:border-primary"
                            defaultValue={searchQuery}
                        />
                        <input type="hidden" name="sort" value={sort} />
                        {premium && <input type="hidden" name="premium" value={premium} />}
                    </form>
                    <div className="flex gap-2">
                        <Suspense fallback={<div className="h-12 w-[140px] bg-muted rounded-xl animate-pulse" />}>
                            <SortSelect currentSort={sort} category={category} />
                        </Suspense>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar - Hidden on mobile */}
                    <aside className="w-full lg:w-56 shrink-0 hidden lg:block">
                        <div className="sticky top-20">
                            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
                                <FilterSidebar />
                            </Suspense>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Results count & mobile filter */}
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm text-muted-foreground">
                                {totalCount} {totalCount === 1 ? 'place' : 'places'}
                                {searchQuery && <span> matching &quot;{searchQuery}&quot;</span>}
                            </p>
                            <MobileFilterDrawer />
                        </div>

                        {paginatedListings.length === 0 ? (
                            <div className="text-center py-16 border border-white/5 rounded-lg bg-white/5">
                                <p className="text-lg font-medium mb-2">No listings found</p>
                                <p className="text-muted-foreground mb-4">
                                    {searchQuery ? `No results for "${searchQuery}"` : 'Try adjusting your filters'}
                                </p>
                                {searchQuery && (
                                    <Button variant="outline" asChild>
                                        <a href={`/${category}`}>Clear search</a>
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                                {paginatedListings.map((listing) => (
                                    <ListingCard
                                        key={listing.id}
                                        id={listing.id}
                                        name={listing.name}
                                        slug={listing.slug}
                                        image={listing.image || ''}
                                        cuisine={listing.cuisine || 'Restaurant'}
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
                        )}

                        {/* Pagination */}
                        <Suspense fallback={null}>
                            <Pagination
                                currentPage={validPage}
                                totalPages={totalPages}
                                totalItems={totalCount}
                                pageSize={PAGE_SIZE}
                            />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}

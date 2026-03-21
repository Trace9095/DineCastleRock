import type { Metadata } from "next"
import { FilterSidebar } from "@/components/listings/FilterSidebar"
import { ListingCard } from "@/components/listings/ListingCard"
import { AnimatedListingGrid } from "@/components/listings/AnimatedListingGrid"
import { MobileFilterDrawer } from "@/components/listings/MobileFilterDrawer"
import { Pagination } from "@/components/listings/Pagination"
import { SortSelect } from "@/components/listings/SortSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight, SearchX, Tag, MapPin } from "lucide-react"
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

    // Compute stats from ALL matched listings (pre-pagination)
    const totalCount = listings.length
    const dealsCount = listings.filter(l => l.deals && l.deals.length > 0).length
    const openNowCount = listings.filter(l => isOpenNow(l.hours)).length

    // Format title
    const categoryTitle = CATEGORY_LABELS[category] || category
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    // Pagination calculations
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

    // Other categories (excluding current) for the navigation strip
    const otherCategories = VALID_CATEGORIES.filter(c => c !== category)

    return (
        <div className="min-h-screen bg-background">
            {/* ItemList Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />

            <div className="container max-w-7xl mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-foreground font-medium">{categoryTitle}</span>
                </nav>

                {/* Category Navigation Strip */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide -mx-1 px-1">
                    {/* Current category — highlighted */}
                    <Link
                        href={`/${category}`}
                        className="flex items-center gap-1.5 shrink-0 rounded-full px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground shadow-sm border border-primary"
                    >
                        <span>{CATEGORY_LABELS[category]}</span>
                    </Link>
                    {/* Other categories */}
                    {otherCategories.map(cat => (
                        <Link
                            key={cat}
                            href={`/${cat}`}
                            className="flex items-center gap-1.5 shrink-0 rounded-full px-4 py-2 text-sm font-medium border border-border bg-background hover:border-primary/50 hover:text-primary transition-all duration-200"
                        >
                            <span>{CATEGORY_LABELS[cat]}</span>
                        </Link>
                    ))}
                </div>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">{categoryTitle}</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mb-5">
                        {categoryDescription}
                    </p>

                    {/* Quick Stats Bar */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
                            <MapPin className="h-3 w-3 text-primary" />
                            {totalCount} {totalCount === 1 ? 'place' : 'places'}
                        </span>
                        {openNowCount > 0 && (
                            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                                {openNowCount} open now
                            </span>
                        )}
                        {dealsCount > 0 && (
                            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                                <Tag className="h-3 w-3" />
                                {dealsCount} {dealsCount === 1 ? 'deal' : 'deals'} available
                            </span>
                        )}
                    </div>
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
                            <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-border bg-card">
                                <div className="h-16 w-16 mb-4 rounded-full bg-muted flex items-center justify-center">
                                    <SearchX className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">No places found</h3>
                                <p className="text-muted-foreground text-center max-w-xs mb-6">
                                    {searchQuery ? `No results for "${searchQuery}"` : "Try adjusting your filters"}
                                </p>
                                <div className="flex gap-3 flex-wrap justify-center">
                                    {searchQuery && (
                                        <Button variant="outline" asChild>
                                            <a href={`/${category}`}>Clear Search</a>
                                        </Button>
                                    )}
                                    <Button variant="outline" asChild>
                                        <a href="/">Browse All</a>
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <AnimatedListingGrid className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
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
                            </AnimatedListingGrid>
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

import { FilterSidebar } from "@/components/listings/FilterSidebar"
import { ListingCard } from "@/components/listings/ListingCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SlidersHorizontal, Search, ArrowUpDown } from "lucide-react"
import { prisma } from "@/lib/db"
import { notFound } from "next/navigation"

// Valid categories that should render this page
const VALID_CATEGORIES = [
    'restaurants',
    'bars-nightlife',
    'bars',
    'coffee',
    'takeout-delivery',
    'dessert',
    'food-trucks',
    'breweries'
]

// Map URL slugs to database category slugs
const CATEGORY_SLUG_MAP: Record<string, string[]> = {
    'restaurants': ['restaurants'],
    'bars-nightlife': ['bars', 'bars-nightlife'],
    'bars': ['bars', 'bars-nightlife'],
    'coffee': ['coffee'],
    'takeout-delivery': ['takeout-delivery'],
    'dessert': ['dessert'],
    'food-trucks': ['food-trucks'],
    'breweries': ['breweries']
}

interface PageProps {
    params: Promise<{ category: string }>
    searchParams: Promise<{
        q?: string
        sort?: string
        premium?: string
    }>
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
    const { category } = await params
    const { q: searchQuery, sort = 'rating', premium } = await searchParams

    // Only handle valid category routes
    if (!VALID_CATEGORIES.includes(category)) {
        notFound()
    }

    // Get category slugs to query
    const categorySlugs = CATEGORY_SLUG_MAP[category] || [category]

    // Build query
    const where: Parameters<typeof prisma.listing.findMany>[0]['where'] = {
        OR: [
            { category: { slug: { in: categorySlugs } } },
            // Also include listings without a category if on restaurants page
            ...(category === 'restaurants' ? [{ categoryId: null }] : [])
        ]
    }

    // Add search filter if provided
    if (searchQuery) {
        where.AND = [
            {
                OR: [
                    { name: { contains: searchQuery, mode: 'insensitive' } },
                    { cuisine: { contains: searchQuery, mode: 'insensitive' } },
                    { description: { contains: searchQuery, mode: 'insensitive' } },
                    { features: { hasSome: [searchQuery] } }
                ]
            }
        ]
    }

    // Add premium filter
    if (premium === 'true') {
        where.isPremium = true
    }

    // Build orderBy based on sort param
    let orderBy: Parameters<typeof prisma.listing.findMany>[0]['orderBy'] = { rating: 'desc' }
    switch (sort) {
        case 'rating':
            orderBy = { rating: 'desc' }
            break
        case 'reviews':
            orderBy = { reviewCount: 'desc' }
            break
        case 'name':
            orderBy = { name: 'asc' }
            break
        case 'newest':
            orderBy = { createdAt: 'desc' }
            break
    }

    // Fetch listings from database
    let listings = await prisma.listing.findMany({
        where,
        include: {
            category: true,
            activeDeals: {
                where: {
                    OR: [
                        { endDate: null },
                        { endDate: { gte: new Date() } }
                    ]
                }
            }
        },
        orderBy
    })

    // Deduplicate by slug (in case any duplicates exist)
    const seenSlugs = new Set<string>()
    listings = listings.filter(listing => {
        if (seenSlugs.has(listing.slug)) {
            return false
        }
        seenSlugs.add(listing.slug)
        return true
    })

    // Format title
    const categoryTitle = category
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    const totalCount = listings.length

    return (
        <div className="container max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8 border-b pb-6">
                <h1 className="text-4xl font-bold tracking-tight mb-2">{categoryTitle}</h1>
                <p className="text-muted-foreground text-lg">
                    Discover the best {categoryTitle.toLowerCase()} in Castle Rock.
                </p>
            </div>

            {/* Search & Sort Bar */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <form className="flex-1 relative" action={`/${category}`}>
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        name="q"
                        placeholder="Search by name, cuisine, or feature..."
                        className="pl-10"
                        defaultValue={searchQuery}
                    />
                    <input type="hidden" name="sort" value={sort} />
                    {premium && <input type="hidden" name="premium" value={premium} />}
                </form>
                <div className="flex gap-2">
                    <form className="contents">
                        {searchQuery && <input type="hidden" name="q" value={searchQuery} />}
                        {premium && <input type="hidden" name="premium" value={premium} />}
                        <select
                            name="sort"
                            defaultValue={sort}
                            className="h-10 px-3 rounded-md border border-input bg-background text-sm min-w-[140px]"
                            onChange={(e) => {
                                const form = e.target.closest('form')
                                if (form) form.submit()
                            }}
                        >
                            <option value="rating">Top Rated</option>
                            <option value="reviews">Most Reviewed</option>
                            <option value="name">A to Z</option>
                            <option value="newest">Newest</option>
                        </select>
                    </form>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar - Hidden on mobile mostly, or collapsible */}
                <aside className="w-full md:w-64 shrink-0 hidden md:block">
                    <FilterSidebar />
                </aside>

                {/* Mobile Filter Trigger */}
                <div className="md:hidden mb-4">
                    <Button variant="outline" className="w-full">
                        <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
                    </Button>
                </div>

                {/* Grid */}
                <div className="flex-1">
                    {/* Results count */}
                    <div className="mb-4 text-sm text-muted-foreground">
                        Showing {listings.length} of {totalCount} {totalCount === 1 ? 'result' : 'results'}
                        {searchQuery && <span> for "{searchQuery}"</span>}
                    </div>

                    {listings.length === 0 ? (
                        <div className="text-center py-12 border rounded-lg bg-muted/20">
                            <p className="text-muted-foreground mb-4">
                                No listings found{searchQuery ? ` for "${searchQuery}"` : ''}.
                            </p>
                            {searchQuery && (
                                <Button variant="outline" asChild>
                                    <a href={`/${category}`}>Clear search</a>
                                </Button>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {listings.map((listing) => (
                                <div key={listing.id} className="h-full">
                                    <ListingCard
                                        id={listing.id}
                                        name={listing.name}
                                        slug={listing.slug}
                                        image={listing.image || ''}
                                        cuisine={listing.cuisine || 'Restaurant'}
                                        price={listing.price || '$$'}
                                        rating={listing.rating}
                                        reviewCount={listing.reviewCount}
                                        address={listing.address || 'Castle Rock, CO'}
                                        isOpen={listing.isOpen}
                                        isPremium={listing.isPremium}
                                        deal={listing.activeDeals.length > 0 ? listing.activeDeals[0].title : undefined}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination Placeholder */}
                    {listings.length >= 12 && (
                        <div className="mt-12 flex justify-center">
                            <Button variant="ghost">Load More</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

import { NextResponse } from 'next/server'
import { getTrendingListings } from '@/lib/data'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const window = searchParams.get('window') || '7d'
    const limit = parseInt(searchParams.get('limit') || '10')

    const listings = getTrendingListings(limit)

    const formattedListings = listings.map((listing, index) => ({
        rank: index + 1,
        id: listing.id,
        slug: listing.slug,
        name: listing.name,
        category: listing.categorySlug,
        cuisine: listing.cuisine,
        rating: listing.rating,
        review_count: listing.reviewCount,
        image: listing.image,
        url: `/listing/${listing.slug}`,
        trending_reason: listing.isPremium
            ? 'Featured listing'
            : listing.deals.length > 0
                ? 'Has active deals'
                : 'Top rated'
    }))

    return NextResponse.json({
        data: formattedListings,
        meta: {
            window,
            limit,
            generated_at: new Date().toISOString(),
            note: 'Trending is based on featured status, ratings, and deals. Real-time engagement tracking coming soon.'
        }
    })
}

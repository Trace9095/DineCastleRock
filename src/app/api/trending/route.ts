import { NextResponse } from 'next/server'
import { getTrendingListings } from '@/lib/data'
import { rateLimit, getClientId } from '@/lib/rate-limit'

export async function GET(request: Request) {
    // Rate limiting: 100 requests per minute per IP
    const clientId = getClientId(request)
    const rateLimitResult = rateLimit(`trending:${clientId}`, 100)

    if (!rateLimitResult.success) {
        return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            {
                status: 429,
                headers: {
                    'X-RateLimit-Limit': String(rateLimitResult.limit),
                    'X-RateLimit-Remaining': '0',
                    'X-RateLimit-Reset': String(rateLimitResult.reset),
                    'Retry-After': String(Math.ceil((rateLimitResult.reset * 1000 - Date.now()) / 1000))
                }
            }
        )
    }

    const { searchParams } = new URL(request.url)
    const window = searchParams.get('window') || '7d'

    // Input validation: clamp limit
    const rawLimit = parseInt(searchParams.get('limit') || '10')
    const limit = Math.min(Math.max(1, isNaN(rawLimit) ? 10 : rawLimit), 50) // Clamp 1-50

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

    return NextResponse.json(
        {
            data: formattedListings,
            meta: {
                window,
                limit,
                generated_at: new Date().toISOString(),
                note: 'Trending is based on featured status, ratings, and deals. Real-time engagement tracking coming soon.'
            }
        },
        {
            headers: {
                'X-RateLimit-Limit': String(rateLimitResult.limit),
                'X-RateLimit-Remaining': String(rateLimitResult.remaining),
                'X-RateLimit-Reset': String(rateLimitResult.reset)
            }
        }
    )
}

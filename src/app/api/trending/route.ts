import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const window = searchParams.get('window') || '7d'
    const limit = parseInt(searchParams.get('limit') || '10')

    try {
        // For now, trending is based on:
        // 1. Premium/Featured status
        // 2. Rating
        // 3. Review count
        // In a real implementation, this would track page views, clicks, saves
        const listings = await prisma.listing.findMany({
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
            orderBy: [
                { isPremium: 'desc' },
                { isFeatured: 'desc' },
                { rating: 'desc' },
                { reviewCount: 'desc' }
            ],
            take: limit
        })

        const formattedListings = listings.map((listing, index) => ({
            rank: index + 1,
            id: listing.id,
            slug: listing.slug,
            name: listing.name,
            category: listing.category?.slug || null,
            cuisine: listing.cuisine,
            rating: listing.rating,
            review_count: listing.reviewCount,
            image: listing.image,
            url: `/listing/${listing.slug}`,
            trending_reason: listing.isPremium
                ? 'Featured listing'
                : listing.activeDeals.length > 0
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
    } catch (error) {
        console.error('Error fetching trending:', error)
        return NextResponse.json(
            { error: 'Failed to fetch trending listings' },
            { status: 500 }
        )
    }
}

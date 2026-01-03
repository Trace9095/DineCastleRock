import { NextResponse } from 'next/server'
import { getAllListings, getListingsByCategory, isOpenNow } from '@/lib/data'
import { rateLimit, getClientId } from '@/lib/rate-limit'

export async function GET(request: Request) {
    // Rate limiting: 100 requests per minute per IP
    const clientId = getClientId(request)
    const rateLimitResult = rateLimit(`listings:${clientId}`, 100)

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
    const category = searchParams.get('category')

    // Input validation: sanitize and clamp values
    const rawLimit = parseInt(searchParams.get('limit') || '50')
    const rawOffset = parseInt(searchParams.get('offset') || '0')
    const limit = Math.min(Math.max(1, isNaN(rawLimit) ? 50 : rawLimit), 100) // Clamp 1-100
    const offset = Math.max(0, isNaN(rawOffset) ? 0 : rawOffset) // Min 0

    let listings = category
        ? getListingsByCategory(category)
        : getAllListings()

    const total = listings.length

    // Apply pagination
    listings = listings.slice(offset, offset + limit)

    const formattedListings = listings.map(listing => ({
        id: listing.id,
        slug: listing.slug,
        name: listing.name,
        description: listing.description,
        category: [listing.categorySlug],
        cuisine: [listing.cuisine],
        price_level: listing.price ? listing.price.length : 2,
        address: {
            street: listing.address?.split(',')[0]?.trim() || null,
            city: 'Castle Rock',
            state: 'CO',
            postal: '80104',
            lat: null,
            lng: null
        },
        phone: listing.phone,
        website: listing.website,
        reservation_url: null,
        order_online_url: null,
        hours: listing.hours,
        features: listing.features,
        rating: {
            value: listing.rating,
            count: listing.reviewCount,
            source: 'Google'
        },
        deals: listing.deals.map(deal => ({
            id: deal.id,
            title: deal.title,
            details: deal.description,
            coupon_code: deal.couponCode || null,
            start: null,
            end: null
        })),
        image: listing.image,
        gallery: listing.gallery,
        is_premium: listing.isPremium,
        is_featured: listing.isFeatured,
        is_open: isOpenNow(listing.hours),
        updated_at: listing.updatedAt.toISOString()
    }))

    return NextResponse.json(
        {
            data: formattedListings,
            meta: {
                total,
                limit,
                offset,
                has_more: offset + listings.length < total
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

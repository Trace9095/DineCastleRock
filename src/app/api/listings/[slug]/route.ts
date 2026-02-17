import { NextResponse } from 'next/server'
import { getListingBySlug, isOpenNow } from '@/lib/data'
import { rateLimit, getClientId } from '@/lib/rate-limit'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    // Rate limiting: 100 requests per minute per IP
    const clientId = getClientId(request)
    const rateLimitResult = rateLimit(`listing:${clientId}`, 100)

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

    const { slug } = await params

    // Input validation: only allow alphanumeric and hyphens
    if (!/^[a-z0-9-]+$/i.test(slug)) {
        return NextResponse.json(
            { error: 'Invalid slug format' },
            { status: 400 }
        )
    }

    const listing = getListingBySlug(slug)

    if (!listing) {
        return NextResponse.json(
            { error: 'Listing not found' },
            { status: 404 }
        )
    }

    const formattedListing = {
        id: listing.id,
        slug: listing.slug,
        name: listing.name,
        description: listing.description,
        category: [listing.categorySlug],
        cuisine: [listing.cuisine],
        price_level: listing.price ? listing.price.length : 2,
        address: {
            full: listing.address,
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
    }

    return NextResponse.json(
        { data: formattedListing },
        {
            headers: {
                'X-RateLimit-Limit': String(rateLimitResult.limit),
                'X-RateLimit-Remaining': String(rateLimitResult.remaining),
                'X-RateLimit-Reset': String(rateLimitResult.reset)
            }
        }
    )
}

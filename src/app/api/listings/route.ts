import { NextResponse } from 'next/server'
import { getAllListings, getListingsByCategory, isOpenNow } from '@/lib/data'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

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

    return NextResponse.json({
        data: formattedListings,
        meta: {
            total,
            limit,
            offset,
            has_more: offset + listings.length < total
        }
    })
}

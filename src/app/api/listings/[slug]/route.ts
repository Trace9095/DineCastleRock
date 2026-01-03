import { NextResponse } from 'next/server'
import { getListingBySlug } from '@/lib/data'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
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
        is_open: listing.isOpen,
        updated_at: listing.updatedAt.toISOString()
    }

    return NextResponse.json({ data: formattedListing })
}

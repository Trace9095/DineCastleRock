import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    try {
        const where = category
            ? { category: { slug: category } }
            : {}

        const listings = await prisma.listing.findMany({
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
            orderBy: { rating: 'desc' },
            take: limit,
            skip: offset
        })

        const total = await prisma.listing.count({ where })

        const formattedListings = listings.map(listing => ({
            id: listing.id,
            slug: listing.slug,
            name: listing.name,
            description: listing.description,
            category: listing.category ? [listing.category.slug] : [],
            cuisine: listing.cuisine ? [listing.cuisine] : [],
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
            deals: listing.activeDeals.map(deal => ({
                id: deal.id,
                title: deal.title,
                details: deal.description,
                coupon_code: deal.couponCode,
                start: deal.startDate?.toISOString() || null,
                end: deal.endDate?.toISOString() || null
            })),
            image: listing.image,
            gallery: listing.gallery,
            is_premium: listing.isPremium,
            is_featured: listing.isFeatured,
            is_open: listing.isOpen,
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
    } catch (error) {
        console.error('Error fetching listings:', error)
        return NextResponse.json(
            { error: 'Failed to fetch listings' },
            { status: 500 }
        )
    }
}

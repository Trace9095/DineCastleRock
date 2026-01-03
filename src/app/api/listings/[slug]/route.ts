import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params

    try {
        const listing = await prisma.listing.findUnique({
            where: { slug },
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
            }
        })

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
            category: listing.category ? [listing.category.slug] : [],
            cuisine: listing.cuisine ? [listing.cuisine] : [],
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
            created_at: listing.createdAt.toISOString(),
            updated_at: listing.updatedAt.toISOString()
        }

        return NextResponse.json({ data: formattedListing })
    } catch (error) {
        console.error('Error fetching listing:', error)
        return NextResponse.json(
            { error: 'Failed to fetch listing' },
            { status: 500 }
        )
    }
}

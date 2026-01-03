import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
    try {
        const deals = await prisma.deal.findMany({
            where: {
                OR: [
                    { endDate: null },
                    { endDate: { gte: new Date() } }
                ]
            },
            include: {
                listing: {
                    select: {
                        id: true,
                        slug: true,
                        name: true,
                        address: true,
                        image: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        })

        const formattedDeals = deals.map(deal => ({
            id: deal.id,
            title: deal.title,
            description: deal.description,
            coupon_code: deal.couponCode,
            start_date: deal.startDate?.toISOString() || null,
            end_date: deal.endDate?.toISOString() || null,
            listing: {
                id: deal.listing.id,
                slug: deal.listing.slug,
                name: deal.listing.name,
                address: deal.listing.address,
                image: deal.listing.image,
                url: `/listing/${deal.listing.slug}`
            }
        }))

        return NextResponse.json({
            data: formattedDeals,
            meta: {
                total: deals.length,
                active_only: true
            }
        })
    } catch (error) {
        console.error('Error fetching deals:', error)
        return NextResponse.json(
            { error: 'Failed to fetch deals' },
            { status: 500 }
        )
    }
}

import { NextResponse } from 'next/server'
import { getActiveDeals } from '@/lib/data'

export async function GET() {
    const deals = getActiveDeals()

    const formattedDeals = deals.map(({ deal, listing }) => ({
        id: deal.id,
        title: deal.title,
        description: deal.description,
        coupon_code: deal.couponCode || null,
        start_date: null,
        end_date: null,
        listing: {
            id: listing.id,
            slug: listing.slug,
            name: listing.name,
            address: listing.address,
            image: listing.image,
            url: `/listing/${listing.slug}`
        }
    }))

    return NextResponse.json({
        data: formattedDeals,
        meta: {
            total: deals.length,
            active_only: true
        }
    })
}

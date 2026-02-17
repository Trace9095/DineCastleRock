import { NextResponse } from 'next/server'
import { getActiveDeals } from '@/lib/data'
import { rateLimit, getClientId } from '@/lib/rate-limit'

export async function GET(request: Request) {
    // Rate limiting: 100 requests per minute per IP
    const clientId = getClientId(request)
    const rateLimitResult = rateLimit(`deals:${clientId}`, 100)

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

    return NextResponse.json(
        {
            data: formattedDeals,
            meta: {
                total: deals.length,
                active_only: true
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

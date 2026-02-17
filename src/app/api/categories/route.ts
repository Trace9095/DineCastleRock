import { NextResponse } from 'next/server'
import { getAllCategories, getListingsByCategory } from '@/lib/data'
import { rateLimit, getClientId } from '@/lib/rate-limit'

export async function GET(request: Request) {
    // Rate limiting: 100 requests per minute per IP
    const clientId = getClientId(request)
    const rateLimitResult = rateLimit(`categories:${clientId}`, 100)

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

    const categories = getAllCategories()

    const formattedCategories = categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        listing_count: getListingsByCategory(cat.slug).length,
        url: `/${cat.slug}`
    }))

    return NextResponse.json(
        {
            data: formattedCategories,
            meta: {
                total: categories.length
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

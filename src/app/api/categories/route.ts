import { NextResponse } from 'next/server'
import { getAllCategories, getListingsByCategory } from '@/lib/data'

export async function GET() {
    const categories = getAllCategories()

    const formattedCategories = categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        listing_count: getListingsByCategory(cat.slug).length,
        url: `/${cat.slug}`
    }))

    return NextResponse.json({
        data: formattedCategories,
        meta: {
            total: categories.length
        }
    })
}

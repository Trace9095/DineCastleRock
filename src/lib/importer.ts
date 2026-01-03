import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export interface ImportListingItem {
    name: string
    slug: string
    category: string
    address?: string
    price?: string
    rating?: number
    features?: string[]
}

export async function importListings(items: ImportListingItem[]) {
    let count = 0

    for (const item of items) {
        // Ensure category exists
        const category = await prisma.category.upsert({
            where: { slug: item.category.toLowerCase().replace(/\s+/g, '-') },
            create: {
                name: item.category,
                slug: item.category.toLowerCase().replace(/\s+/g, '-')
            },
            update: {}
        })

        await prisma.listing.upsert({
            where: { slug: item.slug },
            create: {
                name: item.name,
                slug: item.slug,
                description: `Experience the best of ${item.category} at ${item.name}.`,
                categoryId: category.id,
                address: item.address,
                price: item.price,
                rating: item.rating || 0,
                features: item.features || []
            },
            update: {
                // simple update logic
                price: item.price,
                rating: item.rating
            }
        })
        count++
    }

    return count
}

import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL
})

async function main() {
    console.log('Start seeding...')

    // Create Categories
    const restaurants = await prisma.category.upsert({
        where: { slug: 'restaurants' },
        update: {},
        create: { name: 'Restaurants', slug: 'restaurants' },
    })

    const breweries = await prisma.category.upsert({
        where: { slug: 'breweries' },
        update: {},
        create: { name: 'Breweries', slug: 'breweries' },
    })

    // Create Listings
    const tribe = await prisma.listing.upsert({
        where: { slug: 'tribe-riverwalk' },
        update: {},
        create: {
            name: 'Tribe at Riverwalk',
            slug: 'tribe-riverwalk',
            description: 'Modern American dining.',
            cuisine: 'Modern American',
            price: '$$$',
            address: 'Riverwalk, Castle Rock',
            rating: 4.8,
            reviewCount: 342,
            isPremium: true,
            categoryId: restaurants.id,
            features: ['Patio', 'Happy Hour'],
        },
    })

    console.log({ restaurants, breweries, tribe })
    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

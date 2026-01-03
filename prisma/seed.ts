import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

const prisma = new PrismaClient()

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
            image: '/images/guides/date-night-hero.jpg',
            gallery: ['/images/guides/happy-hour-hero.jpg', '/images/guides/provision-bar.jpg'],
        },
    })

    console.log({ restaurants, breweries, tribe })

    // Verification
    console.log('\n--- VERIFICATION ---')
    const allListings = await prisma.listing.findMany({
        select: { name: true, image: true, gallery: true }
    })
    console.log(`Total listings: ${allListings.length}`)
    allListings.forEach(l => {
        const hasImage = !!l.image
        const galleryCount = l.gallery.length
        console.log(`- ${l.name}: Image=${hasImage ? 'YES' : 'NO'}, Gallery=${galleryCount}`)
    })
    console.log('--- END VERIFICATION ---\n')

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

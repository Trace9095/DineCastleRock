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

    const bars = await prisma.category.upsert({
        where: { slug: 'bars' },
        update: {},
        create: { name: 'Bars & Nightlife', slug: 'bars' },
    })

    // Create Listings
    const tribe = await prisma.listing.upsert({
        where: { slug: 'tribe-riverwalk' },
        update: {
            address: '115 Wilcox St Suite 120, Castle Rock, CO 80104',
            phone: '(303) 362-0904',
            website: 'https://www.tribehospitalitygroup.com',
            hours: {
                "Monday": "11:00 AM - 9:00 PM",
                "Tuesday": "11:00 AM - 9:00 PM",
                "Wednesday": "11:00 AM - 9:00 PM",
                "Thursday": "11:00 AM - 9:00 PM",
                "Friday": "11:00 AM - 9:00 PM",
                "Saturday": "11:00 AM - 9:00 PM",
                "Sunday": "11:00 AM - 9:00 PM"
            },
        },
        create: {
            name: 'Tribe at Riverwalk',
            slug: 'tribe-riverwalk',
            description: 'Modern American dining in the heart of Riverwalk.',
            cuisine: 'Modern American',
            price: '$$$',
            address: '115 Wilcox St Suite 120, Castle Rock, CO 80104',
            phone: '(303) 362-0904',
            website: 'https://www.tribehospitalitygroup.com',
            rating: 4.8,
            reviewCount: 342,
            isPremium: true,
            categoryId: restaurants.id,
            features: ['Patio', 'Happy Hour', 'Dinner'],
            image: '/images/guides/date-night-hero.jpg',
            gallery: ['/images/guides/happy-hour-hero.jpg', '/images/guides/provision-bar.jpg'],
            hours: {
                "Monday": "11:00 AM - 9:00 PM",
                "Tuesday": "11:00 AM - 9:00 PM",
                "Wednesday": "11:00 AM - 9:00 PM",
                "Thursday": "11:00 AM - 9:00 PM",
                "Friday": "11:00 AM - 9:00 PM",
                "Saturday": "11:00 AM - 9:00 PM",
                "Sunday": "11:00 AM - 9:00 PM"
            },
        },
    })

    const greatDivide = await prisma.listing.upsert({
        where: { slug: 'great-divide-brewery-roadhouse' },
        update: {},
        create: {
            name: 'Great Divide Brewery & Roadhouse',
            slug: 'great-divide-brewery-roadhouse',
            description: 'Classic craft brewery and roadhouse offering hearty eats and signature beers.',
            cuisine: 'Brewery & American',
            price: '$$',
            address: '215 Wilcox St, Castle Rock, CO 80104',
            phone: '(303) 955-5788',
            website: 'https://greatdividebreweryandroadhouse.com',
            rating: 4.6,
            reviewCount: 128,
            isPremium: true,
            categoryId: breweries.id,
            features: ['Brewery', 'Patio', 'Lunch', 'Dinner'],
            image: '/images/guides/great-divide-brewery.jpg',
            gallery: ['/images/guides/happy-hour-hero.jpg'],
            hours: {
                "Monday": "11:00 AM - 10:00 PM",
                "Tuesday": "11:00 AM - 10:00 PM",
                "Wednesday": "11:00 AM - 10:00 PM",
                "Thursday": "11:00 AM - 10:00 PM",
                "Friday": "11:00 AM - 11:00 PM",
                "Saturday": "9:00 AM - 11:00 PM",
                "Sunday": "9:00 AM - 10:00 PM"
            },
        },
    })

    const provision = await prisma.listing.upsert({
        where: { slug: 'provision' },
        update: {},
        create: {
            name: 'Provision',
            slug: 'provision',
            description: 'Upscale cocktail bar with a curated selection of drinks and small plates.',
            cuisine: 'Cocktail Bar',
            price: '$$$',
            address: '302 Wilcox St, Castle Rock, CO 80104',
            phone: '(720) 617-1292',
            website: 'https://www.provisioncastlerock.com',
            rating: 4.9,
            reviewCount: 56,
            isPremium: true,
            categoryId: bars.id,
            features: ['Cocktails', 'Date Night', 'Reservations Recommended'],
            image: '/images/guides/provision-bar.jpg',
            gallery: [],
            hours: {
                "Wednesday": "4:00 PM - Close",
                "Thursday": "4:00 PM - Close",
                "Friday": "4:00 PM - Close",
                "Saturday": "4:00 PM - Close"
            },
        },
    })

    const rockyard = await prisma.listing.upsert({
        where: { slug: 'rockyard-brewing-company' },
        update: {},
        create: {
            name: 'Rockyard Brewing Company',
            slug: 'rockyard-brewing-company',
            description: 'Long-standing brewpub known for its classic tavern fare and award-winning beers.',
            cuisine: 'Brewery & Pub',
            price: '$$',
            address: '880 Castleton Rd, Castle Rock, CO 80109',
            phone: '(303) 814-9273',
            website: 'https://www.rockyard.com',
            rating: 4.5,
            reviewCount: 210,
            isPremium: false,
            categoryId: breweries.id,
            features: ['Brewery', 'Family Friendly', 'Lunch', 'Dinner'],
            image: '/images/guides/family-dining-hero.jpg', // Placeholder
            gallery: [],
            hours: {
                "Sunday": "11:00 AM - 9:00 PM",
                "Monday": "11:00 AM - 9:00 PM",
                "Tuesday": "11:00 AM - 9:00 PM",
                "Wednesday": "11:00 AM - 9:00 PM",
                "Thursday": "11:00 AM - 9:00 PM",
                "Friday": "11:00 AM - 10:00 PM",
                "Saturday": "11:00 AM - 10:00 PM"
            },
        },
    })

    // Also verifying Rock Park to Rockyard if it exists as a listing
    const rockPark = await prisma.listing.findUnique({ where: { slug: 'rock-park' } })
    if (rockPark) {
        console.log('Found existing rock-park listing, updating/removing...')
        // Decision: We won't delete it automatically to avoid data loss, but we can log it.
        // Or we could alias it? For now, we just add the clear "Rockyard" listing.
    }

    console.log({ restaurants, breweries, bars, tribe, greatDivide, provision, rockyard })

    // Verification
    console.log('\n--- VERIFICATION ---')
    const allListings = await prisma.listing.findMany({
        select: { name: true, slug: true, phone: true }
    })
    console.log(`Total listings: ${allListings.length}`)
    allListings.forEach(l => {
        console.log(`- ${l.name} (${l.slug}): Phone=${l.phone || 'N/A'}`)
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

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

    // Fix the category name - update if exists
    const bars = await prisma.category.upsert({
        where: { slug: 'bars' },
        update: { name: 'Bars & Nightlife' },
        create: { name: 'Bars & Nightlife', slug: 'bars' },
    })

    const coffee = await prisma.category.upsert({
        where: { slug: 'coffee' },
        update: {},
        create: { name: 'Coffee & Cafes', slug: 'coffee' },
    })

    const dessert = await prisma.category.upsert({
        where: { slug: 'dessert' },
        update: {},
        create: { name: 'Dessert & Bakery', slug: 'dessert' },
    })

    // Create Listings with proper images
    const tribe = await prisma.listing.upsert({
        where: { slug: 'tribe-riverwalk' },
        update: {
            address: '115 Wilcox St Suite 120, Castle Rock, CO 80104',
            phone: '(303) 362-0904',
            website: 'https://www.tribehospitalitygroup.com',
            image: '/images/listings/tribe-riverwalk-hero.jpg',
            description: 'Modern American dining in the heart of Riverwalk. A modern approach to gathering, offering refined American cuisine in a stunning setting with a vibrant patio, craft cocktails, and a chef-driven menu utilizing local ingredients.',
            features: ['Patio', 'Happy Hour', 'Dinner', 'Craft Cocktails', 'Date Night'],
            gallery: ['/images/guides/happy-hour-hero.jpg', '/images/guides/date-night-hero.jpg'],
            hours: {
                "Monday": "11:00 AM - 9:00 PM",
                "Tuesday": "11:00 AM - 9:00 PM",
                "Wednesday": "11:00 AM - 9:00 PM",
                "Thursday": "11:00 AM - 9:00 PM",
                "Friday": "11:00 AM - 10:00 PM",
                "Saturday": "11:00 AM - 10:00 PM",
                "Sunday": "10:00 AM - 9:00 PM"
            },
        },
        create: {
            name: 'Tribe at Riverwalk',
            slug: 'tribe-riverwalk',
            description: 'Modern American dining in the heart of Riverwalk. A modern approach to gathering, offering refined American cuisine in a stunning setting with a vibrant patio, craft cocktails, and a chef-driven menu utilizing local ingredients.',
            cuisine: 'Modern American',
            price: '$$$',
            address: '115 Wilcox St Suite 120, Castle Rock, CO 80104',
            phone: '(303) 362-0904',
            website: 'https://www.tribehospitalitygroup.com',
            rating: 4.8,
            reviewCount: 342,
            isPremium: true,
            categoryId: restaurants.id,
            features: ['Patio', 'Happy Hour', 'Dinner', 'Craft Cocktails', 'Date Night'],
            image: '/images/listings/tribe-riverwalk-hero.jpg',
            gallery: ['/images/guides/happy-hour-hero.jpg', '/images/guides/date-night-hero.jpg'],
            hours: {
                "Monday": "11:00 AM - 9:00 PM",
                "Tuesday": "11:00 AM - 9:00 PM",
                "Wednesday": "11:00 AM - 9:00 PM",
                "Thursday": "11:00 AM - 9:00 PM",
                "Friday": "11:00 AM - 10:00 PM",
                "Saturday": "11:00 AM - 10:00 PM",
                "Sunday": "10:00 AM - 9:00 PM"
            },
        },
    })

    const greatDivide = await prisma.listing.upsert({
        where: { slug: 'great-divide-brewery-roadhouse' },
        update: {
            image: '/images/guides/great-divide-brewery.jpg',
            description: 'Classic craft brewery and roadhouse offering hearty eats and signature beers. Enjoy award-winning craft beers paired with delicious American comfort food in a lively atmosphere.',
            features: ['Brewery', 'Patio', 'Lunch', 'Dinner', 'Live Music', 'Family Friendly'],
            reviewCount: 428,
        },
        create: {
            name: 'Great Divide Brewery & Roadhouse',
            slug: 'great-divide-brewery-roadhouse',
            description: 'Classic craft brewery and roadhouse offering hearty eats and signature beers. Enjoy award-winning craft beers paired with delicious American comfort food in a lively atmosphere.',
            cuisine: 'Brewery & American',
            price: '$$',
            address: '215 Wilcox St, Castle Rock, CO 80104',
            phone: '(303) 955-5788',
            website: 'https://greatdividebreweryandroadhouse.com',
            rating: 4.6,
            reviewCount: 428,
            isPremium: true,
            categoryId: breweries.id,
            features: ['Brewery', 'Patio', 'Lunch', 'Dinner', 'Live Music', 'Family Friendly'],
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
        update: {
            image: '/images/guides/provision-bar.jpg',
            description: 'Upscale cocktail bar with a curated selection of drinks and small plates. An intimate speakeasy-style setting perfect for date nights and special occasions.',
            features: ['Craft Cocktails', 'Date Night', 'Reservations Recommended', 'Small Plates'],
            reviewCount: 156,
            gallery: ['/images/guides/date-night-hero.jpg'],
        },
        create: {
            name: 'Provision',
            slug: 'provision',
            description: 'Upscale cocktail bar with a curated selection of drinks and small plates. An intimate speakeasy-style setting perfect for date nights and special occasions.',
            cuisine: 'Cocktail Bar',
            price: '$$$',
            address: '302 Wilcox St, Castle Rock, CO 80104',
            phone: '(720) 617-1292',
            website: 'https://www.provisioncastlerock.com',
            rating: 4.9,
            reviewCount: 156,
            isPremium: true,
            categoryId: bars.id,
            features: ['Craft Cocktails', 'Date Night', 'Reservations Recommended', 'Small Plates'],
            image: '/images/guides/provision-bar.jpg',
            gallery: ['/images/guides/date-night-hero.jpg'],
            hours: {
                "Wednesday": "4:00 PM - 12:00 AM",
                "Thursday": "4:00 PM - 12:00 AM",
                "Friday": "4:00 PM - 1:00 AM",
                "Saturday": "4:00 PM - 1:00 AM"
            },
        },
    })

    const rockyard = await prisma.listing.upsert({
        where: { slug: 'rockyard-brewing-company' },
        update: {
            image: '/images/guides/family-dining-hero.jpg',
            description: 'Long-standing brewpub known for its classic tavern fare and award-winning beers. A Castle Rock institution since 1999.',
            features: ['Brewery', 'Family Friendly', 'Lunch', 'Dinner', 'Patio'],
            reviewCount: 510,
        },
        create: {
            name: 'Rockyard Brewing Company',
            slug: 'rockyard-brewing-company',
            description: 'Long-standing brewpub known for its classic tavern fare and award-winning beers. A Castle Rock institution since 1999.',
            cuisine: 'Brewery & Pub',
            price: '$$',
            address: '880 Castleton Rd, Castle Rock, CO 80109',
            phone: '(303) 814-9273',
            website: 'https://www.rockyard.com',
            rating: 4.5,
            reviewCount: 510,
            isPremium: false,
            categoryId: breweries.id,
            features: ['Brewery', 'Family Friendly', 'Lunch', 'Dinner', 'Patio'],
            image: '/images/guides/family-dining-hero.jpg',
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

    // Add Union Bistro
    const unionBistro = await prisma.listing.upsert({
        where: { slug: 'union-bistro' },
        update: {
            image: '/images/listings/union-bistro-hero.jpg',
        },
        create: {
            name: 'Union An American Bistro',
            slug: 'union-bistro',
            description: 'Upscale American bistro offering locally-sourced ingredients in a warm, welcoming atmosphere. Perfect for business lunches and celebratory dinners.',
            cuisine: 'American Bistro',
            price: '$$$',
            address: '302 Wilcox St, Castle Rock, CO 80104',
            phone: '(303) 814-2233',
            website: 'https://www.unionamericanbistro.com',
            rating: 4.7,
            reviewCount: 290,
            isPremium: true,
            categoryId: restaurants.id,
            features: ['Fine Dining', 'Lunch', 'Dinner', 'Wine List', 'Private Events'],
            image: '/images/listings/union-bistro-hero.jpg',
            gallery: ['/images/guides/date-night-hero.jpg'],
            hours: {
                "Monday": "11:00 AM - 9:00 PM",
                "Tuesday": "11:00 AM - 9:00 PM",
                "Wednesday": "11:00 AM - 9:00 PM",
                "Thursday": "11:00 AM - 9:00 PM",
                "Friday": "11:00 AM - 10:00 PM",
                "Saturday": "10:00 AM - 10:00 PM",
                "Sunday": "10:00 AM - 8:00 PM"
            },
        },
    })

    // Add Castle Cafe
    const castleCafe = await prisma.listing.upsert({
        where: { slug: 'castle-cafe' },
        update: {
            image: '/images/listings/castle-cafe-hero.jpg',
        },
        create: {
            name: 'Castle Cafe',
            slug: 'castle-cafe',
            description: 'A local favorite since 1974, Castle Cafe serves classic American breakfast and lunch in a cozy, nostalgic setting. Famous for their homemade cinnamon rolls.',
            cuisine: 'American Diner',
            price: '$',
            address: '403 Wilcox St, Castle Rock, CO 80104',
            phone: '(303) 688-0889',
            website: 'https://thecastlecafe.com',
            rating: 4.4,
            reviewCount: 680,
            isPremium: false,
            categoryId: restaurants.id,
            features: ['Breakfast', 'Lunch', 'Family Friendly', 'Local Favorite', 'Cash Only'],
            image: '/images/listings/castle-cafe-hero.jpg',
            gallery: [],
            hours: {
                "Monday": "7:00 AM - 2:00 PM",
                "Tuesday": "7:00 AM - 2:00 PM",
                "Wednesday": "7:00 AM - 2:00 PM",
                "Thursday": "7:00 AM - 2:00 PM",
                "Friday": "7:00 AM - 2:00 PM",
                "Saturday": "7:00 AM - 2:00 PM",
                "Sunday": "7:00 AM - 2:00 PM"
            },
        },
    })

    // Add a sample deal for Tribe
    await prisma.deal.upsert({
        where: { id: 'happy-hour-tribe' },
        update: {},
        create: {
            id: 'happy-hour-tribe',
            title: 'Happy Hour Special',
            description: '$5 house wines and $2 off craft cocktails, 3-6 PM weekdays',
            listingId: tribe.id,
        },
    })

    // Add a sample deal for Great Divide
    await prisma.deal.upsert({
        where: { id: 'happy-hour-great-divide' },
        update: {},
        create: {
            id: 'happy-hour-great-divide',
            title: 'Weekend Brunch',
            description: 'Bottomless mimosas with any brunch entree, Sat-Sun 9am-2pm',
            listingId: greatDivide.id,
        },
    })

    console.log({
        categories: { restaurants, breweries, bars, coffee, dessert },
        listings: { tribe, greatDivide, provision, rockyard, unionBistro, castleCafe },
    })

    // Verification
    console.log('\n--- VERIFICATION ---')
    const allListings = await prisma.listing.findMany({
        select: { name: true, slug: true, phone: true, image: true }
    })
    console.log(`Total listings: ${allListings.length}`)
    allListings.forEach(l => {
        console.log(`- ${l.name} (${l.slug}): Phone=${l.phone || 'N/A'}, Image=${l.image ? 'Yes' : 'No'}`)
    })

    const allDeals = await prisma.deal.findMany()
    console.log(`Total deals: ${allDeals.length}`)

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

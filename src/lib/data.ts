// Mock data for listings - no database required

export interface Listing {
    id: string
    slug: string
    name: string
    description: string
    cuisine: string
    price: string
    address: string
    phone: string
    website: string
    rating: number
    reviewCount: number
    image: string
    gallery: string[]
    features: string[]
    hours: Record<string, string>
    isOpen: boolean
    isPremium: boolean
    isFeatured: boolean
    categorySlug: string
    deals: Deal[]
    updatedAt: Date
}

export interface Deal {
    id: string
    title: string
    description: string
    couponCode?: string
}

export interface Category {
    id: string
    name: string
    slug: string
}

// Categories
export const CATEGORIES: Category[] = [
    { id: '1', name: 'Restaurants', slug: 'restaurants' },
    { id: '2', name: 'Breweries', slug: 'breweries' },
    { id: '3', name: 'Bars & Nightlife', slug: 'bars' },
    { id: '4', name: 'Coffee & Cafes', slug: 'coffee' },
    { id: '5', name: 'Dessert & Bakery', slug: 'dessert' },
    { id: '6', name: 'Food Trucks', slug: 'food-trucks' },
]

// All listings
export const LISTINGS: Listing[] = [
    {
        id: '1',
        slug: 'tribe-riverwalk',
        name: 'Tribe at Riverwalk',
        description: 'Modern American dining in the heart of Riverwalk. A modern approach to gathering, offering refined American cuisine in a stunning setting with a vibrant patio, craft cocktails, and a chef-driven menu utilizing local ingredients.',
        cuisine: 'Modern American',
        price: '$$$',
        address: '115 Wilcox St Suite 120, Castle Rock, CO 80104',
        phone: '(303) 362-0904',
        website: 'https://www.tribehospitalitygroup.com',
        rating: 4.8,
        reviewCount: 342,
        image: '/images/listings/tribe-riverwalk-hero.jpg',
        gallery: ['/images/guides/happy-hour-hero.jpg', '/images/guides/date-night-hero.jpg'],
        features: ['Patio', 'Happy Hour', 'Dinner', 'Craft Cocktails', 'Date Night'],
        hours: {
            "Monday": "11:00 AM - 9:00 PM",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 10:00 PM",
            "Saturday": "11:00 AM - 10:00 PM",
            "Sunday": "10:00 AM - 9:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'restaurants',
        deals: [{ id: 'd1', title: 'Happy Hour Special', description: '$5 house wines and $2 off craft cocktails, 3-6 PM weekdays' }],
        updatedAt: new Date('2024-12-15')
    },
    {
        id: '2',
        slug: 'great-divide-brewery-roadhouse',
        name: 'Great Divide Brewery & Roadhouse',
        description: 'Classic craft brewery and roadhouse offering hearty eats and signature beers. Enjoy award-winning craft beers paired with delicious American comfort food in a lively atmosphere.',
        cuisine: 'Brewery & American',
        price: '$$',
        address: '215 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 955-5788',
        website: 'https://greatdividebreweryandroadhouse.com',
        rating: 4.6,
        reviewCount: 428,
        image: '/images/guides/great-divide-brewery.jpg',
        gallery: ['/images/guides/happy-hour-hero.jpg'],
        features: ['Brewery', 'Patio', 'Lunch', 'Dinner', 'Live Music', 'Family Friendly'],
        hours: {
            "Monday": "11:00 AM - 10:00 PM",
            "Tuesday": "11:00 AM - 10:00 PM",
            "Wednesday": "11:00 AM - 10:00 PM",
            "Thursday": "11:00 AM - 10:00 PM",
            "Friday": "11:00 AM - 11:00 PM",
            "Saturday": "9:00 AM - 11:00 PM",
            "Sunday": "9:00 AM - 10:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: false,
        categorySlug: 'breweries',
        deals: [{ id: 'd2', title: 'Weekend Brunch', description: 'Bottomless mimosas with any brunch entree, Sat-Sun 9am-2pm' }],
        updatedAt: new Date('2024-12-10')
    },
    {
        id: '3',
        slug: 'provision',
        name: 'Provision',
        description: 'Upscale cocktail bar with a curated selection of drinks and small plates. An intimate speakeasy-style setting perfect for date nights and special occasions.',
        cuisine: 'Cocktail Bar',
        price: '$$$',
        address: '302 Wilcox St, Castle Rock, CO 80104',
        phone: '(720) 617-1292',
        website: 'https://www.provisioncastlerock.com',
        rating: 4.9,
        reviewCount: 156,
        image: '/images/guides/provision-bar.jpg',
        gallery: ['/images/guides/date-night-hero.jpg'],
        features: ['Craft Cocktails', 'Date Night', 'Reservations Recommended', 'Small Plates'],
        hours: {
            "Wednesday": "4:00 PM - 12:00 AM",
            "Thursday": "4:00 PM - 12:00 AM",
            "Friday": "4:00 PM - 1:00 AM",
            "Saturday": "4:00 PM - 1:00 AM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'bars',
        deals: [],
        updatedAt: new Date('2024-12-12')
    },
    {
        id: '4',
        slug: 'rockyard-brewing-company',
        name: 'Rockyard Brewing Company',
        description: 'Long-standing brewpub known for its classic tavern fare and award-winning beers. A Castle Rock institution since 1999.',
        cuisine: 'Brewery & Pub',
        price: '$$',
        address: '880 Castleton Rd, Castle Rock, CO 80109',
        phone: '(303) 814-9273',
        website: 'https://www.rockyard.com',
        rating: 4.5,
        reviewCount: 510,
        image: '/images/guides/family-dining-hero.jpg',
        gallery: [],
        features: ['Brewery', 'Family Friendly', 'Lunch', 'Dinner', 'Patio'],
        hours: {
            "Sunday": "11:00 AM - 9:00 PM",
            "Monday": "11:00 AM - 9:00 PM",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 10:00 PM",
            "Saturday": "11:00 AM - 10:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'breweries',
        deals: [],
        updatedAt: new Date('2024-12-08')
    },
    {
        id: '5',
        slug: 'union-bistro',
        name: 'Union An American Bistro',
        description: 'Upscale American bistro offering locally-sourced ingredients in a warm, welcoming atmosphere. Perfect for business lunches and celebratory dinners.',
        cuisine: 'American Bistro',
        price: '$$$',
        address: '302 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 814-2233',
        website: 'https://www.unionamericanbistro.com',
        rating: 4.7,
        reviewCount: 290,
        image: '/images/listings/union-bistro-hero.jpg',
        gallery: ['/images/guides/date-night-hero.jpg'],
        features: ['Fine Dining', 'Lunch', 'Dinner', 'Wine List', 'Private Events', 'Date Night'],
        hours: {
            "Monday": "11:00 AM - 9:00 PM",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 10:00 PM",
            "Saturday": "10:00 AM - 10:00 PM",
            "Sunday": "10:00 AM - 8:00 PM"
        },
        isOpen: false,
        isPremium: true,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2024-12-14')
    },
    {
        id: '6',
        slug: 'castle-cafe',
        name: 'Castle Cafe',
        description: 'A local favorite since 1974, Castle Cafe serves classic American breakfast and lunch in a cozy, nostalgic setting. Famous for their homemade cinnamon rolls.',
        cuisine: 'American Diner',
        price: '$',
        address: '403 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 688-0889',
        website: 'https://thecastlecafe.com',
        rating: 4.4,
        reviewCount: 680,
        image: '/images/listings/castle-cafe-hero.jpg',
        gallery: [],
        features: ['Breakfast', 'Lunch', 'Family Friendly', 'Local Favorite', 'Cash Only'],
        hours: {
            "Monday": "7:00 AM - 2:00 PM",
            "Tuesday": "7:00 AM - 2:00 PM",
            "Wednesday": "7:00 AM - 2:00 PM",
            "Thursday": "7:00 AM - 2:00 PM",
            "Friday": "7:00 AM - 2:00 PM",
            "Saturday": "7:00 AM - 2:00 PM",
            "Sunday": "7:00 AM - 2:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [{ id: 'd3', title: 'Kids Eat Free', description: 'Kids eat free on Tuesdays with adult entree purchase' }],
        updatedAt: new Date('2024-12-01')
    },
]

// Helper functions
export function getAllListings(): Listing[] {
    return LISTINGS
}

export function getListingBySlug(slug: string): Listing | undefined {
    return LISTINGS.find(l => l.slug === slug)
}

export function getListingsByCategory(categorySlug: string): Listing[] {
    // Map category slugs
    const slugMap: Record<string, string[]> = {
        'restaurants': ['restaurants'],
        'bars-nightlife': ['bars'],
        'bars': ['bars'],
        'coffee': ['coffee'],
        'takeout-delivery': ['takeout-delivery'],
        'dessert': ['dessert'],
        'food-trucks': ['food-trucks'],
        'breweries': ['breweries']
    }

    const categorySlugs = slugMap[categorySlug] || [categorySlug]
    return LISTINGS.filter(l => categorySlugs.includes(l.categorySlug))
}

export function getTrendingListings(limit = 8): Listing[] {
    return [...LISTINGS]
        .sort((a, b) => {
            // Sort by premium first, then rating, then review count
            if (a.isPremium !== b.isPremium) return b.isPremium ? 1 : -1
            if (a.rating !== b.rating) return b.rating - a.rating
            return b.reviewCount - a.reviewCount
        })
        .slice(0, limit)
}

export function getDateNightListings(limit = 8): Listing[] {
    return [...LISTINGS]
        .filter(l =>
            l.features.includes('Date Night') ||
            l.features.includes('Craft Cocktails') ||
            l.price === '$$$' ||
            l.price === '$$$$'
        )
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit)
}

export function getFeaturedListing(): Listing | undefined {
    return LISTINGS.find(l => l.isPremium)
}

export function getActiveDeals(): { deal: Deal; listing: Listing }[] {
    const deals: { deal: Deal; listing: Listing }[] = []
    for (const listing of LISTINGS) {
        for (const deal of listing.deals) {
            deals.push({ deal, listing })
        }
    }
    return deals
}

export function searchListings(query: string, categorySlug?: string): Listing[] {
    const q = query.toLowerCase()
    let results = LISTINGS.filter(l =>
        l.name.toLowerCase().includes(q) ||
        l.cuisine.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.features.some(f => f.toLowerCase().includes(q))
    )

    if (categorySlug) {
        const categoryListings = getListingsByCategory(categorySlug)
        results = results.filter(l => categoryListings.some(cl => cl.id === l.id))
    }

    return results
}

export function getAllCategories(): Category[] {
    return CATEGORIES
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return CATEGORIES.find(c => c.slug === slug)
}

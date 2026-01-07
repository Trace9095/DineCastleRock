// Real Castle Rock, CO businesses - data gathered from public sources

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
    image?: string
    description?: string
}

// Categories - Expanded to full business directory
export const CATEGORIES: Category[] = [
    { id: '1', name: 'Restaurants', slug: 'restaurants', image: '/images/dining.jpg', description: 'Local dining & eateries' },
    { id: '2', name: 'Breweries', slug: 'breweries', image: '/images/rockyard-brewing.jpg', description: 'Craft beer & taprooms' },
    { id: '3', name: 'Bars & Nightlife', slug: 'bars-nightlife', image: '/images/sienna-wine-bar.jpg', description: 'Cocktails & entertainment' },
    { id: '4', name: 'Coffee & Cafes', slug: 'coffee', image: '/images/lost-coffee.jpg', description: 'Coffee shops & cafes' },
    { id: '5', name: 'Dessert & Bakery', slug: 'dessert', image: '/images/dining.jpg', description: 'Sweet treats & baked goods' },
    { id: '6', name: 'Food Trucks', slug: 'food-trucks', image: '/images/tacos-selene.jpg', description: 'Mobile food vendors' },
    { id: '7', name: 'Takeout & Delivery', slug: 'takeout-delivery', image: '/images/dining.jpg', description: 'Quick bites & delivery' },
    { id: '8', name: 'Retail & Shopping', slug: 'retail', image: '/images/retail.jpg', description: 'Shops & boutiques' },
    { id: '9', name: 'Auto & Transportation', slug: 'auto', image: '/images/auto.jpg', description: 'Auto services & dealers' },
    { id: '10', name: 'Health & Wellness', slug: 'wellness', image: '/images/wellness.jpg', description: 'Fitness, spa & healthcare' },
    { id: '11', name: 'Kids & Family', slug: 'kids', image: '/images/kids.jpg', description: 'Family-friendly activities' },
    { id: '12', name: 'Gifts & Specialty', slug: 'gifts', image: '/images/gifts.jpg', description: 'Unique gifts & specialty shops' },
    { id: '13', name: 'Home Services', slug: 'home-services', image: '/images/home-services.jpg', description: 'Home repair & improvement' },
    { id: '14', name: 'Professional Services', slug: 'professional-services', image: '/images/professional-services.jpg', description: 'Banking, legal & business' },
    { id: '15', name: 'Beauty & Personal Care', slug: 'beauty', image: '/images/beauty.jpg', description: 'Salons & spas' },
    { id: '16', name: 'Pets', slug: 'pets', image: '/images/pets.jpg', description: 'Pet stores & veterinary' },
]

// Destinations in Castle Rock
export const DESTINATIONS = [
    {
        id: '1',
        name: 'Downtown Castle Rock',
        slug: 'downtown',
        image: '/images/downtown.jpg',
        description: 'Historic Perry Street with charming shops, restaurants, and the iconic Castle Rock.',
        highlights: ['Historic architecture', 'Local boutiques', 'Farm-to-table dining', 'Weekend farmers market']
    },
    {
        id: '2',
        name: 'Outlets at Castle Rock',
        slug: 'outlets-at-castle-rock',
        image: '/images/outlets-at-castle-rock.jpg',
        description: 'Premium outlet shopping with over 100 stores featuring top brands at great prices.',
        highlights: ['Designer brands', 'Great deals', 'Outdoor shopping', 'Mountain views']
    },
    {
        id: '3',
        name: 'The Promenade',
        slug: 'promenade',
        image: '/images/promenade.jpg',
        description: 'Open-air lifestyle center with dining, entertainment, and specialty retailers.',
        highlights: ['Movie theater', 'Diverse dining', 'Family entertainment', 'Seasonal events']
    },
    {
        id: '4',
        name: 'Meadows Parkway',
        slug: 'meadows',
        image: '/images/meadows.jpg',
        description: 'Modern retail corridor with national brands, services, and convenient shopping.',
        highlights: ['Major retailers', 'Quick service dining', 'Professional services', 'Easy access']
    }
]

// All listings - Real Castle Rock businesses
export const LISTINGS: Listing[] = [
    // ==================== RESTAURANTS ====================
    {
        id: '1',
        slug: 'scileppis-old-stone-church',
        name: "Scileppi's at The Old Stone Church",
        description: "Upscale casual Italian restaurant in Castle Rock that specializes in authentic Italian food. Located in a building that was originally St. Francis of Assisi, the first church in Castle Rock, built in 1888. With its cozy atmosphere, friendly staff and a menu bursting with mouthwatering dishes, it's perfect for a leisurely dinner, lunch catch-up, or solo meal at the bar.",
        cuisine: 'Italian',
        price: '$$$',
        address: '210 3rd Street, Castle Rock, CO 80104',
        phone: '(303) 688-9000',
        website: 'https://scileppis.com',
        rating: 4.8,
        reviewCount: 624,
        image: '/images/dining.jpg',
        gallery: ['/images/dining.jpg', '/images/downtown.jpg'],
        features: ['Fine Dining', 'Date Night', 'Historic Building', 'Wine List', 'Reservations', 'Lunch', 'Dinner'],
        hours: {
            "Monday": "11:00 AM - 9:00 PM",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 10:00 PM",
            "Saturday": "11:00 AM - 10:00 PM",
            "Sunday": "11:00 AM - 9:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2026-01-03')
    },
    {
        id: '2',
        slug: 'castle-cafe',
        name: 'Castle Cafe',
        description: "A Castle Rock institution for 25+ years. The building is over 100 years old and was the main stop for travelers between Denver and Colorado Springs in the late 1800s. Famous for their World Famous Pan Fried Chicken and southern-style dishes. All seating is first-come, first-served.",
        cuisine: 'American',
        price: '$$',
        address: '403 Wilcox Street, Castle Rock, CO 80104',
        phone: '(303) 814-2233',
        website: 'https://castlecafe.com',
        rating: 4.5,
        reviewCount: 535,
        image: '/images/listings/castle-cafe-hero.jpg',
        gallery: ['/images/listings/castle-cafe-hero.jpg'],
        features: ['Historic Building', 'Pan Fried Chicken', 'Family Friendly', 'Lunch', 'Dinner', 'Local Favorite'],
        hours: {
            "Monday": "11:00 AM - 9:00 PM",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 9:00 PM",
            "Saturday": "11:00 AM - 9:00 PM",
            "Sunday": "11:30 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2026-01-03')
    },
    {
        id: '3',
        slug: 'augustine-grill',
        name: 'Augustine Grill',
        description: "Upscale steakhouse offering prime cuts, fresh seafood, and an extensive wine list in an elegant setting. Known for their dry-aged steaks and exceptional service, Augustine Grill is the premier destination for special occasions and business dinners in Castle Rock.",
        cuisine: 'Steakhouse',
        price: '$$$$',
        address: '6538 Promenade Pkwy, Castle Rock, CO 80108',
        phone: '(303) 663-7575',
        website: 'https://augustinegrill.com',
        rating: 4.7,
        reviewCount: 412,
        image: '/images/augustine-grill.jpg',
        gallery: ['/images/augustine-grill.jpg', '/images/dining.jpg'],
        features: ['Fine Dining', 'Steaks', 'Wine List', 'Date Night', 'Business Dining', 'Reservations'],
        hours: {
            "Monday": "4:00 PM - 9:00 PM",
            "Tuesday": "4:00 PM - 9:00 PM",
            "Wednesday": "4:00 PM - 9:00 PM",
            "Thursday": "4:00 PM - 9:00 PM",
            "Friday": "4:00 PM - 10:00 PM",
            "Saturday": "4:00 PM - 10:00 PM",
            "Sunday": "4:00 PM - 9:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '4',
        slug: 'b-and-b-pickle-barrel',
        name: 'B&B Pickle Barrel',
        description: "Classic American diner serving hearty breakfasts and comfort food since 1982. Famous for their massive omelets, homemade corned beef hash, and friendly service. A local favorite for weekend brunch with the family.",
        cuisine: 'American Diner',
        price: '$',
        address: '927 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 688-3566',
        website: '',
        rating: 4.4,
        reviewCount: 387,
        image: '/images/b-and-b-pickle-barrel.jpg',
        gallery: ['/images/b-and-b-pickle-barrel.jpg'],
        features: ['Breakfast', 'Brunch', 'Family Friendly', 'Diner', 'Local Favorite', 'Cash Friendly'],
        hours: {
            "Monday": "6:00 AM - 2:00 PM",
            "Tuesday": "6:00 AM - 2:00 PM",
            "Wednesday": "6:00 AM - 2:00 PM",
            "Thursday": "6:00 AM - 2:00 PM",
            "Friday": "6:00 AM - 2:00 PM",
            "Saturday": "6:00 AM - 2:00 PM",
            "Sunday": "6:00 AM - 2:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '5',
        slug: 'tacos-selene',
        name: 'Tacos Selene',
        description: "Authentic Mexican street tacos and traditional dishes made with family recipes passed down through generations. Fresh tortillas made daily, slow-cooked meats, and homemade salsas create an unforgettable taste of Mexico in Castle Rock.",
        cuisine: 'Mexican',
        price: '$',
        address: '613 Wilcox St, Castle Rock, CO 80104',
        phone: '(720) 733-8226',
        website: '',
        rating: 4.6,
        reviewCount: 298,
        image: '/images/tacos-selene.jpg',
        gallery: ['/images/tacos-selene.jpg'],
        features: ['Mexican', 'Street Tacos', 'Family Recipes', 'Fresh Tortillas', 'Lunch', 'Dinner'],
        hours: {
            "Monday": "10:00 AM - 9:00 PM",
            "Tuesday": "10:00 AM - 9:00 PM",
            "Wednesday": "10:00 AM - 9:00 PM",
            "Thursday": "10:00 AM - 9:00 PM",
            "Friday": "10:00 AM - 10:00 PM",
            "Saturday": "10:00 AM - 10:00 PM",
            "Sunday": "10:00 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [{ id: 'd1', title: 'Taco Tuesday', description: '$2 street tacos every Tuesday' }],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '6',
        slug: 'union-american-bistro',
        name: 'Union American Bistro',
        description: "Upscale American bistro offering locally-sourced ingredients in a warm, welcoming atmosphere. Perfect for business lunches and celebratory dinners. Excellent wine selection and craft cocktails complement a menu of refined comfort food.",
        cuisine: 'American Bistro',
        price: '$$$',
        address: '302 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 814-3663',
        website: 'https://theunionbistro.com',
        rating: 4.6,
        reviewCount: 290,
        image: '/images/union-american-bistro.jpg',
        gallery: ['/images/union-american-bistro.jpg', '/images/downtown.jpg'],
        features: ['Fine Dining', 'Date Night', 'Wine List', 'Lunch', 'Dinner', 'Private Events'],
        hours: {
            "Monday": "11:00 AM - 9:00 PM",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 10:00 PM",
            "Saturday": "10:00 AM - 10:00 PM",
            "Sunday": "10:00 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '7',
        slug: 'trestles-coastal-cuisine',
        name: 'Trestles Coastal Cuisine',
        description: "Family owned and operated restaurant where excellent quality in Character, Food and Service is lived out. Serving fresh seafood and coastal-inspired dishes in the heart of the Village at Castle Pines.",
        cuisine: 'Seafood',
        price: '$$$',
        address: '880 W Happy Canyon Rd, Suite 150, Castle Rock, CO 80108',
        phone: '(303) 633-3622',
        website: 'https://trestlescastlerock.com',
        rating: 4.7,
        reviewCount: 326,
        image: '/images/dining.jpg',
        gallery: ['/images/dining.jpg'],
        features: ['Seafood', 'Fine Dining', 'Date Night', 'Brunch', 'Business Casual', 'Reservations'],
        hours: {
            "Monday": "8:00 AM - 8:00 PM",
            "Tuesday": "8:00 AM - 8:00 PM",
            "Wednesday": "8:00 AM - 8:00 PM",
            "Thursday": "8:00 AM - 8:00 PM",
            "Friday": "8:00 AM - 9:00 PM",
            "Saturday": "8:00 AM - 9:00 PM",
            "Sunday": "8:00 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2026-01-03')
    },
    {
        id: '8',
        slug: 'savinas-mexican-kitchen',
        name: "Savina's Mexican Kitchen",
        description: "Formerly La Loma, founded in 1973 with the same beloved recipes and traditions. Amazing views from Mount Evans to Pikes Peak. Serving authentic Tex-Mex with family recipes passed down through generations.",
        cuisine: 'Mexican',
        price: '$$',
        address: '6361 Promenade Pkwy, Castle Rock, CO 80108',
        phone: '(303) 632-9900',
        website: 'https://savinasmexicankitchen.com',
        rating: 4.5,
        reviewCount: 904,
        image: '/images/tacos-selene.jpg',
        gallery: ['/images/tacos-selene.jpg'],
        features: ['Mexican', 'Tex-Mex', 'Mountain Views', 'Margaritas', 'Family Friendly', 'Lunch', 'Dinner'],
        hours: {
            "Monday": "11:00 AM - 9:00 PM",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 9:00 PM",
            "Saturday": "11:00 AM - 9:00 PM",
            "Sunday": "11:00 AM - 9:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2026-01-03')
    },

    // ==================== BARS & NIGHTLIFE ====================
    {
        id: '10',
        slug: 'sienna-wine-bar',
        name: 'Sienna Wine Bar',
        description: "Sophisticated wine bar offering an extensive selection of wines from around the world, paired with artisanal cheeses and small plates. The intimate atmosphere makes it perfect for date nights or unwinding after work with friends.",
        cuisine: 'Wine Bar',
        price: '$$$',
        address: '319 Jerry St, Castle Rock, CO 80104',
        phone: '(303) 663-9463',
        website: 'https://siennawine.com',
        rating: 4.7,
        reviewCount: 186,
        image: '/images/sienna-wine-bar.jpg',
        gallery: ['/images/sienna-wine-bar.jpg', '/images/downtown.jpg'],
        features: ['Wine Bar', 'Small Plates', 'Date Night', 'Craft Cocktails', 'Live Music', 'Intimate Atmosphere'],
        hours: {
            "Tuesday": "4:00 PM - 10:00 PM",
            "Wednesday": "4:00 PM - 10:00 PM",
            "Thursday": "4:00 PM - 10:00 PM",
            "Friday": "4:00 PM - 11:00 PM",
            "Saturday": "2:00 PM - 11:00 PM",
            "Sunday": "2:00 PM - 8:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'bars-nightlife',
        deals: [{ id: 'd2', title: 'Wine Wednesday', description: 'Half-price bottles every Wednesday' }],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '11',
        slug: 'hideaway-bar-grill',
        name: 'Hideaway Bar & Grill',
        description: "The hometown favorite in Castle Rock. Family friendly bar and grill offering 12 beers on draft, full bar, sports on TVs with happy hour drink specials and a kitchen cooking up delicious food.",
        cuisine: 'American',
        price: '$$',
        address: '600 Jerry St, Castle Rock, CO 80104',
        phone: '(303) 663-9464',
        website: 'https://hideawaybarandgrill.com',
        rating: 4.4,
        reviewCount: 345,
        image: '/images/dining.jpg',
        gallery: [],
        features: ['Sports Bar', 'Happy Hour', 'Family Friendly', 'Draft Beer', 'Lunch', 'Dinner'],
        hours: {
            "Monday": "11:00 AM - 10:00 PM",
            "Tuesday": "11:00 AM - 10:00 PM",
            "Wednesday": "11:00 AM - 10:00 PM",
            "Thursday": "11:00 AM - 10:00 PM",
            "Friday": "11:00 AM - 11:00 PM",
            "Saturday": "11:00 AM - 11:00 PM",
            "Sunday": "11:00 AM - 9:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'bars-nightlife',
        deals: [{ id: 'd3', title: 'Happy Hour', description: 'Daily drink specials' }],
        updatedAt: new Date('2026-01-03')
    },
    {
        id: '12',
        slug: 'the-whiskey-lodge',
        name: 'The Whiskey Lodge',
        description: "Rustic vibes with wood accents and taxidermy décor. Plenty of TVs and a whiskey-focused menu including nine different types of Old Fashioneds—including a peanut-butter flavored rendition.",
        cuisine: 'Whiskey Bar',
        price: '$$',
        address: '100 3rd St, Castle Rock, CO 80104',
        phone: '(303) 688-2323',
        website: '',
        rating: 4.3,
        reviewCount: 210,
        image: '/images/sienna-wine-bar.jpg',
        gallery: [],
        features: ['Whiskey Bar', 'Sports', 'Happy Hour', 'Craft Cocktails', 'Late Night'],
        hours: {
            "Monday": "3:00 PM - 12:00 AM",
            "Tuesday": "3:00 PM - 12:00 AM",
            "Wednesday": "3:00 PM - 12:00 AM",
            "Thursday": "3:00 PM - 12:00 AM",
            "Friday": "3:00 PM - 2:00 AM",
            "Saturday": "12:00 PM - 2:00 AM",
            "Sunday": "12:00 PM - 10:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'bars-nightlife',
        deals: [{ id: 'd4', title: 'Weekday Happy Hour', description: '3-6 PM - specials on drinks and food' }],
        updatedAt: new Date('2026-01-03')
    },

    // ==================== COFFEE ====================
    {
        id: '20',
        slug: 'lost-coffee',
        name: 'Lost Coffee',
        description: "Beloved family-owned coffee shop serving the community since 2013. Features locally-roasted Colorado beans in a warm, rustic atmosphere with friendly service. Their signature Lost Latte has become a local favorite.",
        cuisine: 'Coffee',
        price: '$',
        address: '304 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 688-1808',
        website: 'https://lostcoffee.com',
        rating: 4.7,
        reviewCount: 280,
        image: '/images/lost-coffee.jpg',
        gallery: ['/images/lost-coffee.jpg', '/images/downtown.jpg'],
        features: ['Coffee', 'WiFi', 'Local Roasters', 'Pastries', 'Cozy Atmosphere'],
        hours: {
            "Monday": "6:30 AM - 5:00 PM",
            "Tuesday": "6:30 AM - 5:00 PM",
            "Wednesday": "6:30 AM - 5:00 PM",
            "Thursday": "6:30 AM - 5:00 PM",
            "Friday": "6:30 AM - 5:00 PM",
            "Saturday": "7:00 AM - 5:00 PM",
            "Sunday": "7:00 AM - 4:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'coffee',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '21',
        slug: 'crowfoot-valley-coffee',
        name: 'Crowfoot Valley Coffee',
        description: "A Castle Rock institution since 1999. This flagship downtown coffee shop offers free WiFi, great food, live music, and even adult beverages at the Crowbar. Owner Jason Gray brings nearly 30 years of coffee expertise. Outstanding coffee—bold, thick, smooth, and not bitter.",
        cuisine: 'Coffee',
        price: '$',
        address: '102 3rd St, Castle Rock, CO 80104',
        phone: '(303) 688-0789',
        website: 'https://crowfootvalleycoffee.com',
        rating: 4.6,
        reviewCount: 320,
        image: '/images/lost-coffee.jpg',
        gallery: [],
        features: ['Coffee', 'WiFi', 'Live Music', 'The Crowbar', 'Food', 'Local Favorite'],
        hours: {
            "Monday": "6:00 AM - 6:00 PM",
            "Tuesday": "6:00 AM - 6:00 PM",
            "Wednesday": "6:00 AM - 6:00 PM",
            "Thursday": "6:00 AM - 6:00 PM",
            "Friday": "6:00 AM - 8:00 PM",
            "Saturday": "6:30 AM - 8:00 PM",
            "Sunday": "7:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: false,
        categorySlug: 'coffee',
        deals: [],
        updatedAt: new Date('2026-01-03')
    },

    // ==================== BREWERIES ====================
    {
        id: '30',
        slug: 'rockyard-brewing-company',
        name: 'Rockyard Brewing Company',
        description: "Long-standing brewpub known for its classic tavern fare and award-winning beers. A Castle Rock institution since 1999. Great family atmosphere with outdoor seating available. Their flagship beers have won numerous awards at state and national competitions.",
        cuisine: 'Brewery & Pub',
        price: '$$',
        address: '880 Castleton Rd, Castle Rock, CO 80109',
        phone: '(303) 814-9273',
        website: 'https://rockyard.com',
        rating: 4.4,
        reviewCount: 510,
        image: '/images/rockyard-brewing.jpg',
        gallery: ['/images/rockyard-brewing.jpg'],
        features: ['Brewery', 'Family Friendly', 'Patio', 'Award Winning Beer', 'Lunch', 'Dinner'],
        hours: {
            "Monday": "11:00 AM - 9:00 PM",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 10:00 PM",
            "Saturday": "11:00 AM - 10:00 PM",
            "Sunday": "11:00 AM - 9:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'breweries',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '31',
        slug: 'great-divide-brewery-roadhouse',
        name: 'Great Divide Brewery & Roadhouse',
        description: "Award-winning craft beers from Great Divide Brewing Company paired with delicious American comfort food and friendly service from Roadhouse Hospitality. Features a scenic patio by the riverwalk, menus for gluten-free guests and kids.",
        cuisine: 'Brewery & American',
        price: '$$',
        address: '215 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 955-5788',
        website: 'https://greatdividebreweryandroadhouse.com',
        rating: 4.6,
        reviewCount: 456,
        image: '/images/rockyard-brewing.jpg',
        gallery: ['/images/rockyard-brewing.jpg'],
        features: ['Brewery', 'Patio', 'Riverwalk', 'Happy Hour', 'Brunch', 'Gluten-Free Options', 'Family Friendly', 'Reservations'],
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
        deals: [
            { id: 'd5', title: 'Happy Hour', description: 'Daily 3-6 PM - specials on food and drinks' },
            { id: 'd6', title: 'Late Night Happy Hour', description: '9 PM to close, any day of the week' }
        ],
        updatedAt: new Date('2026-01-03')
    },

    // ==================== RETAIL & SHOPPING ====================
    {
        id: '40',
        slug: 'outlets-at-castle-rock',
        name: 'Outlets at Castle Rock',
        description: "Premier outlet shopping destination featuring over 100 stores with top brands at outlet prices. Enjoy open-air shopping with stunning mountain views, diverse dining options, and regular community events throughout the year.",
        cuisine: 'Shopping Center',
        price: '$$',
        address: '5050 Factory Shops Blvd, Castle Rock, CO 80108',
        phone: '(303) 688-4494',
        website: 'https://outletsatcastlerock.com',
        rating: 4.5,
        reviewCount: 1250,
        image: '/images/outlets-at-castle-rock.jpg',
        gallery: ['/images/outlets-at-castle-rock.jpg', '/images/outlets-hero.jpg'],
        features: ['Outlet Shopping', 'Mountain Views', 'Dining', 'Family Friendly', 'Events'],
        hours: {
            "Monday": "10:00 AM - 8:00 PM",
            "Tuesday": "10:00 AM - 8:00 PM",
            "Wednesday": "10:00 AM - 8:00 PM",
            "Thursday": "10:00 AM - 8:00 PM",
            "Friday": "10:00 AM - 9:00 PM",
            "Saturday": "10:00 AM - 9:00 PM",
            "Sunday": "10:00 AM - 7:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'retail',
        deals: [{ id: 'd10', title: 'Deal Days', description: 'Extra savings during seasonal events' }],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '41',
        slug: 'castle-rock-mercantile',
        name: 'Castle Rock Mercantile',
        description: "Charming downtown boutique featuring a curated collection of Colorado-made gifts, home decor, artisan crafts, and local products. The perfect place to find unique souvenirs and support local makers.",
        cuisine: 'Boutique',
        price: '$$',
        address: '318 Perry St, Castle Rock, CO 80104',
        phone: '(303) 688-1881',
        website: '',
        rating: 4.8,
        reviewCount: 145,
        image: '/images/castle-rock-mercantile.jpg',
        gallery: ['/images/castle-rock-mercantile.jpg', '/images/downtown.jpg'],
        features: ['Local Goods', 'Colorado Made', 'Gifts', 'Home Decor', 'Artisan Crafts'],
        hours: {
            "Monday": "10:00 AM - 6:00 PM",
            "Tuesday": "10:00 AM - 6:00 PM",
            "Wednesday": "10:00 AM - 6:00 PM",
            "Thursday": "10:00 AM - 6:00 PM",
            "Friday": "10:00 AM - 7:00 PM",
            "Saturday": "10:00 AM - 7:00 PM",
            "Sunday": "11:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'retail',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '42',
        slug: 'nike-factory-store',
        name: 'Nike Factory Store',
        description: "Official Nike outlet store offering athletic footwear, apparel, and accessories at factory store prices. Find deals on running shoes, training gear, and the latest Nike styles for men, women, and kids.",
        cuisine: 'Athletic Retail',
        price: '$$',
        address: '5050 Factory Shops Blvd #320, Castle Rock, CO 80108',
        phone: '(303) 814-0195',
        website: 'https://nike.com',
        rating: 4.3,
        reviewCount: 890,
        image: '/images/nike-factory-store.jpg',
        gallery: ['/images/nike-factory-store.jpg', '/images/outlets-at-castle-rock.jpg'],
        features: ['Athletic Wear', 'Footwear', 'Outlet Prices', 'Nike', 'Sports'],
        hours: {
            "Monday": "10:00 AM - 8:00 PM",
            "Tuesday": "10:00 AM - 8:00 PM",
            "Wednesday": "10:00 AM - 8:00 PM",
            "Thursday": "10:00 AM - 8:00 PM",
            "Friday": "10:00 AM - 9:00 PM",
            "Saturday": "10:00 AM - 9:00 PM",
            "Sunday": "10:00 AM - 7:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'retail',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '43',
        slug: 'coach-outlet',
        name: 'Coach Outlet',
        description: "Designer handbags, accessories, and leather goods at outlet prices. Find classic Coach styles alongside seasonal collections, including bags, wallets, shoes, and gifts for every occasion.",
        cuisine: 'Designer Retail',
        price: '$$$',
        address: '5050 Factory Shops Blvd #340, Castle Rock, CO 80108',
        phone: '(303) 688-0055',
        website: 'https://coachoutlet.com',
        rating: 4.4,
        reviewCount: 567,
        image: '/images/coach-outlet.jpg',
        gallery: ['/images/coach-outlet.jpg', '/images/outlets-at-castle-rock.jpg'],
        features: ['Designer', 'Handbags', 'Accessories', 'Outlet Prices', 'Luxury'],
        hours: {
            "Monday": "10:00 AM - 8:00 PM",
            "Tuesday": "10:00 AM - 8:00 PM",
            "Wednesday": "10:00 AM - 8:00 PM",
            "Thursday": "10:00 AM - 8:00 PM",
            "Friday": "10:00 AM - 9:00 PM",
            "Saturday": "10:00 AM - 9:00 PM",
            "Sunday": "10:00 AM - 7:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'retail',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '44',
        slug: 'home-goods',
        name: 'HomeGoods',
        description: "Discover an ever-changing selection of home decor, furniture, bedding, kitchenware, and unique finds at amazing prices. New arrivals daily make every visit a treasure hunt for your home.",
        cuisine: 'Home Retail',
        price: '$$',
        address: '4856 Meadows Pkwy, Castle Rock, CO 80109',
        phone: '(303) 663-5050',
        website: 'https://homegoods.com',
        rating: 4.2,
        reviewCount: 445,
        image: '/images/home-goods.jpg',
        gallery: ['/images/home-goods.jpg', '/images/meadows.jpg'],
        features: ['Home Decor', 'Furniture', 'Kitchenware', 'Bedding', 'Discount Prices'],
        hours: {
            "Monday": "9:30 AM - 9:30 PM",
            "Tuesday": "9:30 AM - 9:30 PM",
            "Wednesday": "9:30 AM - 9:30 PM",
            "Thursday": "9:30 AM - 9:30 PM",
            "Friday": "9:30 AM - 9:30 PM",
            "Saturday": "9:30 AM - 9:30 PM",
            "Sunday": "10:00 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'retail',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },

    // ==================== AUTO & TRANSPORTATION ====================
    {
        id: '50',
        slug: 'all-around-auto-care',
        name: 'All Around Auto Care',
        description: "Family-owned auto repair shop serving Castle Rock for over 15 years. Comprehensive automotive services including oil changes, brake repair, engine diagnostics, and more. Known for honest service and fair pricing.",
        cuisine: 'Auto Repair',
        price: '$$',
        address: '855 S Perry St, Castle Rock, CO 80104',
        phone: '(303) 688-1148',
        website: 'https://allaroundautocare.com',
        rating: 4.8,
        reviewCount: 234,
        image: '/images/all-around-auto-care.jpg',
        gallery: ['/images/all-around-auto-care.jpg', '/images/auto.jpg'],
        features: ['Auto Repair', 'Oil Change', 'Brakes', 'Diagnostics', 'Family Owned', 'ASE Certified'],
        hours: {
            "Monday": "7:30 AM - 5:30 PM",
            "Tuesday": "7:30 AM - 5:30 PM",
            "Wednesday": "7:30 AM - 5:30 PM",
            "Thursday": "7:30 AM - 5:30 PM",
            "Friday": "7:30 AM - 5:30 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'auto',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '51',
        slug: 'castle-rock-tire-auto',
        name: 'Castle Rock Tire & Auto',
        description: "Full-service tire and auto center offering tire sales, installation, rotation, and balancing along with complete auto repair services. Carrying major tire brands with competitive pricing and expert installation.",
        cuisine: 'Tire & Auto',
        price: '$$',
        address: '1050 Park St, Castle Rock, CO 80109',
        phone: '(303) 688-1080',
        website: 'https://castlerocktire.com',
        rating: 4.6,
        reviewCount: 312,
        image: '/images/castle-rock-tire-auto.jpg',
        gallery: ['/images/castle-rock-tire-auto.jpg', '/images/auto.jpg'],
        features: ['Tires', 'Auto Repair', 'Alignment', 'Brakes', 'Major Brands'],
        hours: {
            "Monday": "7:30 AM - 6:00 PM",
            "Tuesday": "7:30 AM - 6:00 PM",
            "Wednesday": "7:30 AM - 6:00 PM",
            "Thursday": "7:30 AM - 6:00 PM",
            "Friday": "7:30 AM - 6:00 PM",
            "Saturday": "8:00 AM - 4:00 PM",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'auto',
        deals: [{ id: 'd11', title: 'Free Rotation', description: 'Free tire rotation with purchase of 4 tires' }],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '52',
        slug: 'medved-autoplex',
        name: 'Medved Autoplex',
        description: "Castle Rock's premier new and used car dealership featuring Chevrolet, Buick, and GMC vehicles. Family-owned since 1948, offering sales, service, and financing with a commitment to customer satisfaction.",
        cuisine: 'Car Dealership',
        price: '$$$',
        address: '5001 S I-25, Castle Rock, CO 80109',
        phone: '(303) 688-3436',
        website: 'https://medved.com',
        rating: 4.3,
        reviewCount: 567,
        image: '/images/medved-autoplex.jpg',
        gallery: ['/images/medved-autoplex.jpg', '/images/auto.jpg'],
        features: ['New Cars', 'Used Cars', 'Service Center', 'Financing', 'Chevrolet', 'GMC'],
        hours: {
            "Monday": "8:00 AM - 8:00 PM",
            "Tuesday": "8:00 AM - 8:00 PM",
            "Wednesday": "8:00 AM - 8:00 PM",
            "Thursday": "8:00 AM - 8:00 PM",
            "Friday": "8:00 AM - 8:00 PM",
            "Saturday": "8:00 AM - 7:00 PM",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: false,
        categorySlug: 'auto',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },

    // ==================== HEALTH & WELLNESS ====================
    {
        id: '60',
        slug: 'massage-heights',
        name: 'Massage Heights',
        description: "Professional massage therapy and skincare services in a relaxing retreat setting. Offering Swedish, deep tissue, sports massage, and customized treatments. Membership programs available for regular wellness.",
        cuisine: 'Spa & Massage',
        price: '$$',
        address: '4856 Meadows Pkwy, Castle Rock, CO 80109',
        phone: '(303) 663-3400',
        website: 'https://massageheights.com',
        rating: 4.6,
        reviewCount: 198,
        image: '/images/massage-heights.jpg',
        gallery: ['/images/massage-heights.jpg', '/images/wellness.jpg'],
        features: ['Massage', 'Skincare', 'Wellness', 'Membership', 'Relaxation'],
        hours: {
            "Monday": "9:00 AM - 9:00 PM",
            "Tuesday": "9:00 AM - 9:00 PM",
            "Wednesday": "9:00 AM - 9:00 PM",
            "Thursday": "9:00 AM - 9:00 PM",
            "Friday": "9:00 AM - 9:00 PM",
            "Saturday": "9:00 AM - 7:00 PM",
            "Sunday": "10:00 AM - 6:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'wellness',
        deals: [{ id: 'd12', title: 'First Visit Special', description: 'Introductory rate for new guests' }],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '61',
        slug: 'orangetheory-fitness',
        name: 'Orangetheory Fitness',
        description: "Science-backed, technology-tracked, coach-inspired group workouts designed to produce results from the inside out. Heart rate-based interval training that keeps your body burning calories long after your workout.",
        cuisine: 'Fitness Studio',
        price: '$$',
        address: '5042 Factory Shops Blvd, Castle Rock, CO 80108',
        phone: '(303) 814-3888',
        website: 'https://orangetheory.com',
        rating: 4.7,
        reviewCount: 345,
        image: '/images/orangetheory-fitness.jpg',
        gallery: ['/images/orangetheory-fitness.jpg', '/images/wellness.jpg'],
        features: ['Fitness', 'Group Classes', 'Personal Training', 'Heart Rate Training', 'HIIT'],
        hours: {
            "Monday": "5:00 AM - 8:00 PM",
            "Tuesday": "5:00 AM - 8:00 PM",
            "Wednesday": "5:00 AM - 8:00 PM",
            "Thursday": "5:00 AM - 8:00 PM",
            "Friday": "5:00 AM - 7:00 PM",
            "Saturday": "7:00 AM - 12:00 PM",
            "Sunday": "7:00 AM - 12:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'wellness',
        deals: [{ id: 'd13', title: 'Free First Class', description: 'Try your first class free' }],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '62',
        slug: 'castle-rock-adventist-hospital',
        name: 'Castle Rock Adventist Hospital',
        description: "Full-service community hospital providing emergency care, surgical services, imaging, laboratory, and specialty care. Part of the Centura Health network, committed to delivering whole-person care to the Castle Rock community.",
        cuisine: 'Hospital',
        price: '',
        address: '2350 Meadows Blvd, Castle Rock, CO 80109',
        phone: '(720) 455-5000',
        website: 'https://centura.org/locations/castle-rock-adventist-hospital',
        rating: 4.2,
        reviewCount: 456,
        image: '/images/castle-rock-adventist-hospital.jpg',
        gallery: ['/images/castle-rock-adventist-hospital.jpg'],
        features: ['Emergency Room', 'Surgery', 'Imaging', 'Laboratory', 'Specialty Care'],
        hours: {
            "Monday": "Open 24 Hours",
            "Tuesday": "Open 24 Hours",
            "Wednesday": "Open 24 Hours",
            "Thursday": "Open 24 Hours",
            "Friday": "Open 24 Hours",
            "Saturday": "Open 24 Hours",
            "Sunday": "Open 24 Hours"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'wellness',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },

    // ==================== KIDS & FAMILY ====================
    {
        id: '70',
        slug: 'miller-activity-complex',
        name: 'Miller Activity Complex',
        description: "Castle Rock's premier recreation facility featuring an indoor pool, fitness center, gymnasium, and youth programs. Offering swim lessons, sports leagues, fitness classes, and family activities for all ages.",
        cuisine: 'Recreation Center',
        price: '$',
        address: '700 Mountain Way, Castle Rock, CO 80104',
        phone: '(303) 660-1036',
        website: 'https://crgov.com/mac',
        rating: 4.5,
        reviewCount: 389,
        image: '/images/miller-activity-complex.jpg',
        gallery: ['/images/miller-activity-complex.jpg', '/images/kids.jpg'],
        features: ['Swimming Pool', 'Gym', 'Fitness Classes', 'Youth Programs', 'Sports Leagues'],
        hours: {
            "Monday": "5:00 AM - 9:00 PM",
            "Tuesday": "5:00 AM - 9:00 PM",
            "Wednesday": "5:00 AM - 9:00 PM",
            "Thursday": "5:00 AM - 9:00 PM",
            "Friday": "5:00 AM - 9:00 PM",
            "Saturday": "7:00 AM - 6:00 PM",
            "Sunday": "8:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'kids',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '71',
        slug: 'little-monkey-bizness',
        name: 'Little Monkey Bizness',
        description: "Indoor play space designed for children ages 0-8 featuring imaginative play areas, bounce houses, slides, and toddler zones. Host birthday parties and enjoy a clean, safe environment for active play.",
        cuisine: 'Indoor Playground',
        price: '$',
        address: '750 N. Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 660-5439',
        website: 'https://littlemonkeybizness.com',
        rating: 4.4,
        reviewCount: 234,
        image: '/images/little-monkey-bizness.jpg',
        gallery: ['/images/little-monkey-bizness.jpg', '/images/kids.jpg'],
        features: ['Indoor Playground', 'Birthday Parties', 'Toddler Area', 'Bounce Houses', 'Safe Play'],
        hours: {
            "Monday": "9:00 AM - 6:00 PM",
            "Tuesday": "9:00 AM - 6:00 PM",
            "Wednesday": "9:00 AM - 6:00 PM",
            "Thursday": "9:00 AM - 6:00 PM",
            "Friday": "9:00 AM - 7:00 PM",
            "Saturday": "9:00 AM - 7:00 PM",
            "Sunday": "10:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'kids',
        deals: [{ id: 'd14', title: 'Sibling Discount', description: 'Discounted admission for siblings' }],
        updatedAt: new Date('2026-01-07')
    },

    // ==================== GIFTS & SPECIALTY ====================
    {
        id: '80',
        slug: 'knotty-pine-gift-shop',
        name: 'Knotty Pine Gift Shop',
        description: "Eclectic gift shop featuring Colorado-made products, rustic home decor, handcrafted jewelry, and unique souvenirs. Find the perfect gift for any occasion in this charming downtown boutique.",
        cuisine: 'Gift Shop',
        price: '$$',
        address: '324 Perry St, Castle Rock, CO 80104',
        phone: '(303) 688-4567',
        website: '',
        rating: 4.7,
        reviewCount: 156,
        image: '/images/knotty-pine-gift-shop.jpg',
        gallery: ['/images/knotty-pine-gift-shop.jpg', '/images/gifts.jpg'],
        features: ['Gifts', 'Colorado Made', 'Home Decor', 'Jewelry', 'Souvenirs'],
        hours: {
            "Monday": "10:00 AM - 6:00 PM",
            "Tuesday": "10:00 AM - 6:00 PM",
            "Wednesday": "10:00 AM - 6:00 PM",
            "Thursday": "10:00 AM - 6:00 PM",
            "Friday": "10:00 AM - 7:00 PM",
            "Saturday": "10:00 AM - 7:00 PM",
            "Sunday": "11:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'gifts',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '81',
        slug: 'the-perfect-gift',
        name: 'The Perfect Gift',
        description: "Curated collection of unique gifts, candles, jewelry, and specialty items. From personalized gifts to trendy home accents, find something special for every person and occasion.",
        cuisine: 'Gift Boutique',
        price: '$$',
        address: '316 Perry St, Castle Rock, CO 80104',
        phone: '(303) 663-4455',
        website: '',
        rating: 4.6,
        reviewCount: 189,
        image: '/images/the-perfect-gift.jpg',
        gallery: ['/images/the-perfect-gift.jpg', '/images/gifts.jpg'],
        features: ['Gifts', 'Candles', 'Jewelry', 'Personalized', 'Home Accents'],
        hours: {
            "Monday": "10:00 AM - 6:00 PM",
            "Tuesday": "10:00 AM - 6:00 PM",
            "Wednesday": "10:00 AM - 6:00 PM",
            "Thursday": "10:00 AM - 6:00 PM",
            "Friday": "10:00 AM - 7:00 PM",
            "Saturday": "10:00 AM - 7:00 PM",
            "Sunday": "11:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'gifts',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },

    // ==================== HOME SERVICES ====================
    {
        id: '90',
        slug: 'castle-rock-heating-cooling',
        name: 'Castle Rock Heating & Cooling',
        description: "Licensed HVAC contractor serving Castle Rock and Douglas County. Offering heating and air conditioning installation, repair, and maintenance. Emergency services available with upfront pricing.",
        cuisine: 'HVAC Services',
        price: '$$',
        address: 'Service Area: Castle Rock, CO',
        phone: '(303) 688-1110',
        website: 'https://castlerockheatingcooling.com',
        rating: 4.7,
        reviewCount: 278,
        image: '/images/castle-rock-heating-cooling.jpg',
        gallery: ['/images/castle-rock-heating-cooling.jpg', '/images/home-services.jpg'],
        features: ['HVAC', 'Heating', 'Cooling', 'Emergency Service', 'Installation', 'Repair'],
        hours: {
            "Monday": "7:00 AM - 6:00 PM",
            "Tuesday": "7:00 AM - 6:00 PM",
            "Wednesday": "7:00 AM - 6:00 PM",
            "Thursday": "7:00 AM - 6:00 PM",
            "Friday": "7:00 AM - 6:00 PM",
            "Saturday": "8:00 AM - 4:00 PM",
            "Sunday": "Emergency Only"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'home-services',
        deals: [{ id: 'd15', title: 'Seasonal Tune-Up', description: 'Discounted maintenance check' }],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '91',
        slug: 'castle-rock-electric',
        name: 'Castle Rock Electric',
        description: "Full-service electrical contractor providing residential and commercial electrical services. From panel upgrades to new construction, our licensed electricians deliver quality work with attention to safety.",
        cuisine: 'Electrical Services',
        price: '$$',
        address: 'Service Area: Castle Rock, CO',
        phone: '(303) 660-1234',
        website: 'https://castlerockelectric.com',
        rating: 4.8,
        reviewCount: 167,
        image: '/images/castle-rock-electric.jpg',
        gallery: ['/images/castle-rock-electric.jpg', '/images/home-services.jpg'],
        features: ['Electrical', 'Panel Upgrade', 'Wiring', 'Lighting', 'Licensed', 'Residential'],
        hours: {
            "Monday": "7:00 AM - 5:00 PM",
            "Tuesday": "7:00 AM - 5:00 PM",
            "Wednesday": "7:00 AM - 5:00 PM",
            "Thursday": "7:00 AM - 5:00 PM",
            "Friday": "7:00 AM - 5:00 PM",
            "Saturday": "By Appointment",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'home-services',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },

    // ==================== PROFESSIONAL SERVICES ====================
    {
        id: '100',
        slug: 'first-bank-castle-rock',
        name: 'FirstBank',
        description: "Colorado's largest locally-owned bank offering personal and business banking, mortgages, and wealth management. Committed to community banking with personalized service and local decision-making.",
        cuisine: 'Banking',
        price: '',
        address: '600 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 814-5500',
        website: 'https://efirstbank.com',
        rating: 4.3,
        reviewCount: 145,
        image: '/images/first-bank.jpg',
        gallery: ['/images/first-bank.jpg', '/images/professional-services.jpg'],
        features: ['Banking', 'Mortgages', 'Business Banking', 'ATM', 'Local Bank'],
        hours: {
            "Monday": "9:00 AM - 5:00 PM",
            "Tuesday": "9:00 AM - 5:00 PM",
            "Wednesday": "9:00 AM - 5:00 PM",
            "Thursday": "9:00 AM - 5:00 PM",
            "Friday": "9:00 AM - 5:00 PM",
            "Saturday": "9:00 AM - 12:00 PM",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'professional-services',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '101',
        slug: 'castle-rock-law-group',
        name: 'Castle Rock Law Group',
        description: "Full-service law firm providing family law, estate planning, business law, and real estate services. Experienced attorneys dedicated to serving the Castle Rock community with professional legal counsel.",
        cuisine: 'Legal Services',
        price: '$$$',
        address: '104 E Allen St, Castle Rock, CO 80104',
        phone: '(303) 688-3045',
        website: 'https://castlerocklawgroup.com',
        rating: 4.5,
        reviewCount: 89,
        image: '/images/castle-rock-law-group.jpg',
        gallery: ['/images/castle-rock-law-group.jpg', '/images/professional-services.jpg'],
        features: ['Legal', 'Family Law', 'Estate Planning', 'Business Law', 'Real Estate'],
        hours: {
            "Monday": "8:30 AM - 5:00 PM",
            "Tuesday": "8:30 AM - 5:00 PM",
            "Wednesday": "8:30 AM - 5:00 PM",
            "Thursday": "8:30 AM - 5:00 PM",
            "Friday": "8:30 AM - 5:00 PM",
            "Saturday": "Closed",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'professional-services',
        deals: [{ id: 'd16', title: 'Free Consultation', description: 'Complimentary initial consultation' }],
        updatedAt: new Date('2026-01-07')
    },

    // ==================== BEAUTY & PERSONAL CARE ====================
    {
        id: '110',
        slug: 'salon-envy',
        name: 'Salon Envy',
        description: "Full-service hair salon offering cuts, color, highlights, and styling for men and women. Our experienced stylists stay current with the latest trends and techniques to help you look and feel your best.",
        cuisine: 'Hair Salon',
        price: '$$',
        address: '880 W Happy Canyon Rd, Castle Rock, CO 80108',
        phone: '(303) 663-8800',
        website: 'https://salonenvycastlerock.com',
        rating: 4.6,
        reviewCount: 234,
        image: '/images/salon-envy.jpg',
        gallery: ['/images/salon-envy.jpg', '/images/beauty.jpg'],
        features: ['Hair Cuts', 'Color', 'Highlights', 'Styling', 'Men & Women'],
        hours: {
            "Monday": "Closed",
            "Tuesday": "9:00 AM - 7:00 PM",
            "Wednesday": "9:00 AM - 7:00 PM",
            "Thursday": "9:00 AM - 7:00 PM",
            "Friday": "9:00 AM - 6:00 PM",
            "Saturday": "9:00 AM - 5:00 PM",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'beauty',
        deals: [{ id: 'd17', title: 'New Client Special', description: '20% off first visit' }],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '111',
        slug: 'nail-bar',
        name: 'The Nail Bar',
        description: "Modern nail salon offering manicures, pedicures, gel nails, and nail art in a clean, relaxing environment. Premium products and attentive service make every visit a pampering experience.",
        cuisine: 'Nail Salon',
        price: '$$',
        address: '4856 Meadows Pkwy, Castle Rock, CO 80109',
        phone: '(303) 814-9988',
        website: '',
        rating: 4.4,
        reviewCount: 178,
        image: '/images/nail-bar.jpg',
        gallery: ['/images/nail-bar.jpg', '/images/beauty.jpg'],
        features: ['Manicure', 'Pedicure', 'Gel Nails', 'Nail Art', 'Relaxing'],
        hours: {
            "Monday": "10:00 AM - 7:00 PM",
            "Tuesday": "10:00 AM - 7:00 PM",
            "Wednesday": "10:00 AM - 7:00 PM",
            "Thursday": "10:00 AM - 7:00 PM",
            "Friday": "10:00 AM - 7:00 PM",
            "Saturday": "9:00 AM - 6:00 PM",
            "Sunday": "11:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'beauty',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },

    // ==================== PETS ====================
    {
        id: '120',
        slug: 'castle-rock-veterinary',
        name: 'Castle Rock Veterinary Hospital',
        description: "Comprehensive veterinary care for dogs, cats, and exotic pets. Services include wellness exams, vaccinations, surgery, dental care, and emergency services. Compassionate care from experienced veterinarians.",
        cuisine: 'Veterinary',
        price: '$$',
        address: '745 Maleta Ln, Castle Rock, CO 80108',
        phone: '(303) 688-2480',
        website: 'https://castlerockvet.com',
        rating: 4.7,
        reviewCount: 345,
        image: '/images/castle-rock-veterinary.jpg',
        gallery: ['/images/castle-rock-veterinary.jpg', '/images/pets.jpg'],
        features: ['Veterinary', 'Wellness', 'Surgery', 'Dental', 'Emergency', 'Exotic Pets'],
        hours: {
            "Monday": "7:30 AM - 6:00 PM",
            "Tuesday": "7:30 AM - 6:00 PM",
            "Wednesday": "7:30 AM - 6:00 PM",
            "Thursday": "7:30 AM - 6:00 PM",
            "Friday": "7:30 AM - 6:00 PM",
            "Saturday": "8:00 AM - 2:00 PM",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'pets',
        deals: [],
        updatedAt: new Date('2026-01-07')
    },
    {
        id: '121',
        slug: 'petco-castle-rock',
        name: 'Petco',
        description: "Full-service pet store offering food, supplies, toys, and accessories for dogs, cats, fish, birds, and small animals. Services include grooming, training, and veterinary care through Vetco clinics.",
        cuisine: 'Pet Store',
        price: '$$',
        address: '4854 Meadows Pkwy, Castle Rock, CO 80109',
        phone: '(303) 660-0377',
        website: 'https://petco.com',
        rating: 4.2,
        reviewCount: 267,
        image: '/images/petco.jpg',
        gallery: ['/images/petco.jpg', '/images/pets.jpg'],
        features: ['Pet Supplies', 'Grooming', 'Training', 'Vetco', 'Adoption Events'],
        hours: {
            "Monday": "9:00 AM - 9:00 PM",
            "Tuesday": "9:00 AM - 9:00 PM",
            "Wednesday": "9:00 AM - 9:00 PM",
            "Thursday": "9:00 AM - 9:00 PM",
            "Friday": "9:00 AM - 9:00 PM",
            "Saturday": "9:00 AM - 9:00 PM",
            "Sunday": "10:00 AM - 7:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'pets',
        deals: [{ id: 'd18', title: 'Pals Rewards', description: 'Earn points on every purchase' }],
        updatedAt: new Date('2026-01-07')
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
        'bars-nightlife': ['bars-nightlife'],
        'bars': ['bars-nightlife'],
        'coffee': ['coffee'],
        'takeout-delivery': ['takeout-delivery', 'restaurants'],
        'dessert': ['dessert'],
        'food-trucks': ['food-trucks'],
        'breweries': ['breweries'],
        'retail': ['retail'],
        'auto': ['auto'],
        'wellness': ['wellness'],
        'kids': ['kids'],
        'gifts': ['gifts'],
        'home-services': ['home-services'],
        'professional-services': ['professional-services'],
        'beauty': ['beauty'],
        'pets': ['pets']
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
            l.features.includes('Fine Dining') ||
            l.price === '$$$' ||
            l.price === '$$$$'
        )
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit)
}

export function getFeaturedListing(): Listing | undefined {
    return LISTINGS.find(l => l.isPremium && l.isFeatured)
}

export function getFeaturedListings(limit = 6): Listing[] {
    return LISTINGS.filter(l => l.isFeatured).slice(0, limit)
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

export function getDestinations() {
    return DESTINATIONS
}

export function getDestinationBySlug(slug: string) {
    return DESTINATIONS.find(d => d.slug === slug)
}

/**
 * Calculate if a business is currently open based on their hours.
 * Uses Mountain Time (America/Denver) since Castle Rock is in Colorado.
 */
export function isOpenNow(hours: Record<string, string>): boolean {
    if (!hours || Object.keys(hours).length === 0) {
        return false
    }

    // Get current time in Mountain Time
    const now = new Date()
    const mtOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Denver',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    }

    const formatter = new Intl.DateTimeFormat('en-US', mtOptions)
    const parts = formatter.formatToParts(now)

    const dayOfWeek = parts.find(p => p.type === 'weekday')?.value || ''
    const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10)
    const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10)
    const currentMinutes = hour * 60 + minute

    // Get today's hours
    const todayHours = hours[dayOfWeek]
    if (!todayHours || todayHours.toLowerCase() === 'closed') {
        return false
    }

    // Handle special cases
    if (todayHours.toLowerCase().includes('open 24 hours')) {
        return true
    }

    if (todayHours.toLowerCase().includes('by appointment') || todayHours.toLowerCase().includes('emergency')) {
        return false
    }

    // Parse the hours string (e.g., "11:00 AM - 10:00 PM" or "11:00 AM - 2:00 AM")
    const timeMatch = todayHours.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i)
    if (!timeMatch) {
        return false
    }

    const [, openHour, openMin, openPeriod, closeHour, closeMin, closePeriod] = timeMatch

    // Convert to 24-hour format
    let openHour24 = parseInt(openHour, 10)
    if (openPeriod.toUpperCase() === 'PM' && openHour24 !== 12) openHour24 += 12
    if (openPeriod.toUpperCase() === 'AM' && openHour24 === 12) openHour24 = 0

    let closeHour24 = parseInt(closeHour, 10)
    if (closePeriod.toUpperCase() === 'PM' && closeHour24 !== 12) closeHour24 += 12
    if (closePeriod.toUpperCase() === 'AM' && closeHour24 === 12) closeHour24 = 0

    const openMinutes = openHour24 * 60 + parseInt(openMin, 10)
    let closeMinutes = closeHour24 * 60 + parseInt(closeMin, 10)

    // Handle overnight hours (e.g., closes at 2:00 AM)
    if (closeMinutes < openMinutes) {
        // Closes after midnight
        closeMinutes += 24 * 60
        // If we're past midnight but before closing, add 24 hours to current time
        if (currentMinutes < openMinutes) {
            return currentMinutes + 24 * 60 >= openMinutes && currentMinutes + 24 * 60 < closeMinutes
        }
    }

    return currentMinutes >= openMinutes && currentMinutes < closeMinutes
}

/**
 * Get a listing with the computed isOpen status
 */
export function getListingWithOpenStatus(listing: Listing): Listing & { isOpen: boolean } {
    return {
        ...listing,
        isOpen: isOpenNow(listing.hours)
    }
}

/**
 * Get all listings with computed isOpen status
 */
export function getAllListingsWithOpenStatus(): (Listing & { isOpen: boolean })[] {
    return LISTINGS.map(getListingWithOpenStatus)
}

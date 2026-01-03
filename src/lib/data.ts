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
}

// Categories
export const CATEGORIES: Category[] = [
    { id: '1', name: 'Restaurants', slug: 'restaurants' },
    { id: '2', name: 'Breweries', slug: 'breweries' },
    { id: '3', name: 'Bars & Nightlife', slug: 'bars-nightlife' },
    { id: '4', name: 'Coffee & Cafes', slug: 'coffee' },
    { id: '5', name: 'Dessert & Bakery', slug: 'dessert' },
    { id: '6', name: 'Food Trucks', slug: 'food-trucks' },
    { id: '7', name: 'Takeout & Delivery', slug: 'takeout-delivery' },
]

// All listings - Real Castle Rock businesses
export const LISTINGS: Listing[] = [
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
        image: '/images/guides/date-night-hero.jpg',
        gallery: ['/images/guides/date-night-hero.jpg'],
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
        updatedAt: new Date('2025-01-01')
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
        gallery: [],
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
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '3',
        slug: 'courtyard-social',
        name: 'Courtyard Social',
        description: "Family owned and operated, located in the heart of downtown Castle Rock. Offering a wide range of craft cocktails, fresh oysters, and made-from-scratch plates. The extensive menu features savory green chili chicken sandwiches, bacon-wrapped jalapeno cheeseburgers, and more.",
        cuisine: 'American',
        price: '$$',
        address: '333 Perry St, Castle Rock, CO 80104',
        phone: '(720) 762-4015',
        website: 'https://courtyardsocialcr.com',
        rating: 4.6,
        reviewCount: 328,
        image: '/images/listings/tribe-riverwalk-hero.jpg',
        gallery: ['/images/guides/happy-hour-hero.jpg'],
        features: ['Craft Cocktails', 'Oysters', 'Patio', 'Happy Hour', 'Brunch', 'Family Friendly'],
        hours: {
            "Monday": "11:00 AM - 10:00 PM",
            "Tuesday": "11:00 AM - 10:00 PM",
            "Wednesday": "11:00 AM - 10:00 PM",
            "Thursday": "11:00 AM - 10:00 PM",
            "Friday": "11:00 AM - 11:00 PM",
            "Saturday": "10:00 AM - 11:00 PM",
            "Sunday": "10:00 AM - 10:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'restaurants',
        deals: [{ id: 'd1', title: 'Happy Hour Specials', description: 'Discounted drinks and appetizers during happy hour' }],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '4',
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
        image: '/images/guides/great-divide-brewery.jpg',
        gallery: ['/images/guides/happy-hour-hero.jpg'],
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
            { id: 'd2', title: 'Happy Hour', description: 'Daily 3-6 PM - specials on food and drinks' },
            { id: 'd3', title: 'Late Night Happy Hour', description: '9 PM to close, any day of the week' }
        ],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '5',
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
        image: '/images/guides/date-night-hero.jpg',
        gallery: ['/images/guides/date-night-hero.jpg'],
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
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '6',
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
        image: '/images/guides/family-dining-hero.jpg',
        gallery: [],
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
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '7',
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
        image: '/images/guides/happy-hour-hero.jpg',
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
        deals: [{ id: 'd4', title: 'Happy Hour', description: 'Daily drink specials' }],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '8',
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
        image: '/images/guides/happy-hour-hero.jpg',
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
        deals: [{ id: 'd5', title: 'Weekday Happy Hour', description: '3-6 PM - specials on drinks and food' }],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '9',
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
        image: '/images/guides/family-dining-hero.jpg',
        gallery: [],
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
        isPremium: false,
        isFeatured: false,
        categorySlug: 'coffee',
        deals: [],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '10',
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
        image: '/images/home-hero.jpg',
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
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '11',
        slug: 'dazbog-coffee',
        name: 'Dazbog Coffee',
        description: "Colorado-based Russian-themed coffeehouse chain established in 1996. Located on the corner of 2nd and Wilcox next to Festival Park and the river walk. Specializes in organic brews with rich, bold flavors. Voted Best of the Best Coffee Shop in Castle Rock and a Nextdoor Neighborhood Favorite for eight consecutive years.",
        cuisine: 'Coffee',
        price: '$',
        address: '201 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 814-8500',
        website: 'https://dazbog.com',
        rating: 4.5,
        reviewCount: 175,
        image: '/images/guides/family-dining-hero.jpg',
        gallery: [],
        features: ['Coffee', 'Organic', 'Riverwalk', 'Drive-Thru', 'Award Winning'],
        hours: {
            "Monday": "5:30 AM - 6:00 PM",
            "Tuesday": "5:30 AM - 6:00 PM",
            "Wednesday": "5:30 AM - 6:00 PM",
            "Thursday": "5:30 AM - 6:00 PM",
            "Friday": "5:30 AM - 6:00 PM",
            "Saturday": "6:00 AM - 6:00 PM",
            "Sunday": "6:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'coffee',
        deals: [],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '12',
        slug: 'the-office-bar-kitchen',
        name: 'The Office Co. Bar & Kitchen',
        description: "Modern bar and kitchen offering delicious brunch, lunch, and happy hour specials. A perfect spot to unwind after work or enjoy a weekend brunch with friends.",
        cuisine: 'American',
        price: '$$',
        address: '312 Perry St, Castle Rock, CO 80104',
        phone: '(720) 708-9666',
        website: 'https://theofficecocr.com',
        rating: 4.4,
        reviewCount: 195,
        image: '/images/guides/happy-hour-hero.jpg',
        gallery: [],
        features: ['Brunch', 'Happy Hour', 'Craft Cocktails', 'Lunch', 'Modern Atmosphere'],
        hours: {
            "Monday": "11:00 AM - 10:00 PM",
            "Tuesday": "11:00 AM - 10:00 PM",
            "Wednesday": "11:00 AM - 10:00 PM",
            "Thursday": "11:00 AM - 10:00 PM",
            "Friday": "11:00 AM - 11:00 PM",
            "Saturday": "10:00 AM - 11:00 PM",
            "Sunday": "10:00 AM - 9:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'bars-nightlife',
        deals: [{ id: 'd6', title: 'Happy Hour Specials', description: 'Daily happy hour with discounted drinks and apps' }],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '13',
        slug: 'bucket-list-tavern',
        name: 'Bucket List Tavern',
        description: "Vibrant space filled with inspiring bucket list decor. Offering a diverse menu that blends comfort classics with bold, creative flavors in a relaxed, friendly atmosphere.",
        cuisine: 'American',
        price: '$$',
        address: '720 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 814-2583',
        website: 'https://bucketlisttavern.com',
        rating: 4.3,
        reviewCount: 165,
        image: '/images/listings/tribe-riverwalk-hero.jpg',
        gallery: [],
        features: ['Bar', 'Comfort Food', 'Unique Decor', 'Family Friendly', 'Lunch', 'Dinner'],
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
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '14',
        slug: 'provision-castle-rock',
        name: 'Provision',
        description: "Upscale cocktail bar with a curated selection of drinks and small plates. An intimate speakeasy-style setting perfect for date nights and special occasions. Part of Winged Culture.",
        cuisine: 'Cocktail Bar',
        price: '$$$',
        address: '302 Wilcox St, Castle Rock, CO 80104',
        phone: '(720) 617-1292',
        website: 'https://provisioncastlerock.com',
        rating: 4.8,
        reviewCount: 156,
        image: '/images/guides/provision-bar.jpg',
        gallery: ['/images/guides/date-night-hero.jpg'],
        features: ['Craft Cocktails', 'Date Night', 'Speakeasy', 'Small Plates', 'Reservations Recommended'],
        hours: {
            "Wednesday": "4:00 PM - 12:00 AM",
            "Thursday": "4:00 PM - 12:00 AM",
            "Friday": "4:00 PM - 1:00 AM",
            "Saturday": "4:00 PM - 1:00 AM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'bars-nightlife',
        deals: [],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '15',
        slug: 'rockyard-brewing-company',
        name: 'Rockyard Brewing Company',
        description: "Long-standing brewpub known for its classic tavern fare and award-winning beers. A Castle Rock institution since 1999. Great family atmosphere with outdoor seating available.",
        cuisine: 'Brewery & Pub',
        price: '$$',
        address: '880 Castleton Rd, Castle Rock, CO 80109',
        phone: '(303) 814-9273',
        website: 'https://rockyard.com',
        rating: 4.4,
        reviewCount: 510,
        image: '/images/guides/great-divide-brewery.jpg',
        gallery: [],
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
        isPremium: false,
        isFeatured: false,
        categorySlug: 'breweries',
        deals: [],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '16',
        slug: 'union-american-bistro',
        name: 'Union American Bistro',
        description: "Upscale American bistro offering locally-sourced ingredients in a warm, welcoming atmosphere. Perfect for business lunches and celebratory dinners. Excellent wine selection and craft cocktails.",
        cuisine: 'American Bistro',
        price: '$$$',
        address: '302 Wilcox St, Castle Rock, CO 80104',
        phone: '(303) 814-3663',
        website: 'https://theunionbistro.com',
        rating: 4.6,
        reviewCount: 290,
        image: '/images/listings/union-bistro-hero.jpg',
        gallery: ['/images/guides/date-night-hero.jpg'],
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
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '17',
        slug: 'the-park-sports-bar',
        name: 'The Park Sports Bar',
        description: "Your neighborhood sports bar with all the games on multiple TVs. Happy Hour every weekday from 3pm-6pm. Saturday nights feature a DJ plus games to blow off steam.",
        cuisine: 'Sports Bar',
        price: '$$',
        address: '207 Wolfensberger Rd, Castle Rock, CO 80109',
        phone: '(303) 688-2900',
        website: 'https://theparksportsbar.com',
        rating: 4.2,
        reviewCount: 185,
        image: '/images/guides/happy-hour-hero.jpg',
        gallery: [],
        features: ['Sports Bar', 'Happy Hour', 'DJ', 'Games', 'Multiple TVs', 'Late Night'],
        hours: {
            "Monday": "11:00 AM - 12:00 AM",
            "Tuesday": "11:00 AM - 12:00 AM",
            "Wednesday": "11:00 AM - 12:00 AM",
            "Thursday": "11:00 AM - 12:00 AM",
            "Friday": "11:00 AM - 2:00 AM",
            "Saturday": "11:00 AM - 2:00 AM",
            "Sunday": "11:00 AM - 10:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'bars-nightlife',
        deals: [{ id: 'd7', title: 'Weekday Happy Hour', description: '3pm-6pm every weekday' }],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '18',
        slug: 'cuba-cuba-castle-rock',
        name: 'Cuba Cuba',
        description: "Family-owned and Cubana-operated with tropical décor. Wine and beer options available, but the rum-based island drinks are not to be missed—you'll be hard-pressed to find a better mojito in the area.",
        cuisine: 'Cuban',
        price: '$$',
        address: '337 Perry St, Castle Rock, CO 80104',
        phone: '(303) 814-8226',
        website: '',
        rating: 4.5,
        reviewCount: 240,
        image: '/images/guides/family-dining-hero.jpg',
        gallery: [],
        features: ['Cuban', 'Mojitos', 'Tropical Atmosphere', 'Happy Hour', 'Lunch', 'Dinner'],
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
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [{ id: 'd8', title: 'Daily Happy Hour', description: '2-5 PM - specials on drinks' }],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '19',
        slug: 'black-rock-coffee-bar',
        name: 'Black Rock Coffee Bar',
        description: "Growing regional chain with a strong foothold in Castle Rock, known for efficient service, bold coffee blends, and a convenient drive-thru option for busy mornings. Consistency in product and experience.",
        cuisine: 'Coffee',
        price: '$',
        address: '1000 S Perry St, Castle Rock, CO 80104',
        phone: '(720) 800-7100',
        website: 'https://br.coffee',
        rating: 4.4,
        reviewCount: 195,
        image: '/images/home-hero.jpg',
        gallery: [],
        features: ['Coffee', 'Drive-Thru', 'Fuel Drinks', 'Smoothies', 'Quick Service'],
        hours: {
            "Monday": "5:00 AM - 8:00 PM",
            "Tuesday": "5:00 AM - 8:00 PM",
            "Wednesday": "5:00 AM - 8:00 PM",
            "Thursday": "5:00 AM - 8:00 PM",
            "Friday": "5:00 AM - 8:00 PM",
            "Saturday": "5:30 AM - 8:00 PM",
            "Sunday": "6:00 AM - 7:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'coffee',
        deals: [],
        updatedAt: new Date('2025-01-01')
    },
    {
        id: '20',
        slug: 'cork-and-keg',
        name: 'Cork and Keg',
        description: "The place to sample everything from Colorado. Bills itself as having the best pickle shots in Douglas County. Features trivia, music video bingo, pool and Texas hold 'em tournaments, shuffleboard, darts, karaoke, live music, and dancing.",
        cuisine: 'Bar',
        price: '$',
        address: '320 Perry St, Castle Rock, CO 80104',
        phone: '(303) 814-2337',
        website: '',
        rating: 4.2,
        reviewCount: 165,
        image: '/images/guides/happy-hour-hero.jpg',
        gallery: [],
        features: ['Bar', 'Trivia', 'Karaoke', 'Live Music', 'Pool', 'Dancing', 'Late Night'],
        hours: {
            "Monday": "2:00 PM - 2:00 AM",
            "Tuesday": "2:00 PM - 2:00 AM",
            "Wednesday": "2:00 PM - 2:00 AM",
            "Thursday": "2:00 PM - 2:00 AM",
            "Friday": "2:00 PM - 2:00 AM",
            "Saturday": "12:00 PM - 2:00 AM",
            "Sunday": "12:00 PM - 12:00 AM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'bars-nightlife',
        deals: [],
        updatedAt: new Date('2025-01-01')
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

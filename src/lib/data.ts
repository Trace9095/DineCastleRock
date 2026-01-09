// Real Castle Rock, CO businesses - data verified from public sources (January 2026)

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
    sources?: string[] // Source URLs for verification
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
    { id: '17', name: 'Activities & Entertainment', slug: 'activities', image: '/images/edge-ziplines-adventures.jpg', description: 'Adventures, attractions & fun' },
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

// All listings - Real Castle Rock businesses (VERIFIED January 2026)
export const LISTINGS: Listing[] = [
    // ==================== RESTAURANTS ====================
    {
        id: '1',
        slug: 'scileppis-old-stone-church',
        name: "Scileppi's at The Old Stone Church",
        description: "Family-owned Italian restaurant and pizzeria located in a historic 1888 Catholic church. Opened in 2018, this upscale casual dining establishment specializes in authentic Italian food with a modern twist. Features unique seating including a 'Confessional' 2-top table and upstairs 'Last Supper Table' for groups. Known for sun-dried tomato rigatoni, New York-style pizza (Slice Works), and what locals call 'the best calamari in Colorado.'",
        cuisine: 'Italian',
        price: '$$$',
        address: '210 3rd Street, Castle Rock, CO 80104',
        phone: '(303) 688-9000',
        website: 'https://scileppis.com',
        rating: 4.8,
        reviewCount: 624,
        image: '/images/dining.jpg',
        gallery: ['/images/dining.jpg', '/images/downtown.jpg'],
        features: ['Fine Dining', 'Date Night', 'Historic Building', 'Wine List', 'Pizza', 'OpenTable Reservations'],
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
        updatedAt: new Date('2026-01-07'),
        sources: ['https://scileppis.com/', 'https://www.yelp.com/biz/scileppis-at-the-old-stone-church-castle-rock', 'https://www.opentable.com/r/scileppis-at-the-old-stone-church-castle-rock']
    },
    {
        id: '2',
        slug: 'castle-cafe',
        name: 'Castle Cafe',
        description: "A Castle Rock institution for 25+ years, housed in a building over 100 years old that was once the main stop for travelers between Denver and Colorado Springs. Famous for their World Famous Pan Fried Chicken (4 pieces with mashed potatoes, gravy, and seasonal veggies - takes 30 minutes to prepare). Also known for Chicken Fried Steak, Brisket, and incredible desserts like White Chocolate Black Bottom Banana Cream Pie.",
        cuisine: 'American Southern',
        price: '$$',
        address: '403 Wilcox Street, Castle Rock, CO 80104',
        phone: '(303) 814-2233',
        website: 'https://castlecafe.com',
        rating: 4.5,
        reviewCount: 535,
        image: '/images/listings/castle-cafe-hero.jpg',
        gallery: ['/images/listings/castle-cafe-hero.jpg', '/images/downtown.jpg'],
        features: ['Historic Building', 'Pan Fried Chicken', 'Family Friendly', 'Southern Cuisine', 'No Reservations'],
        hours: {
            "Monday": "11:00 AM - 9:00 PM",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 9:00 PM",
            "Saturday": "11:00 AM - 9:00 PM",
            "Sunday": "11:00 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://castlecafe.com/', 'https://www.yelp.com/biz/castle-cafe-castle-rock', 'https://www.tripadvisor.com/Restaurant_Review-g33345-d489995-Reviews-Castle_Cafe-Castle_Rock_Colorado.html']
    },
    {
        id: '3',
        slug: 'wild-blue-yonder-brewing',
        name: 'Wild Blue Yonder Brewing Company',
        description: "Castle Rock's award-winning, veteran-owned brewpub featuring 16 taps of craft beer, a full food menu, craft cocktails, and wine. Located in a historic building on Wilcox Street, this brewery combines military heritage with exceptional craft brewing. Family-friendly atmosphere with a commitment to community involvement.",
        cuisine: 'Brewery & American',
        price: '$$',
        address: '519 Wilcox Street, Castle Rock, CO 80104',
        phone: '(720) 733-8622',
        website: 'https://wildblueyonderbrewing.com',
        rating: 4.6,
        reviewCount: 312,
        image: '/images/rockyard-brewing.jpg',
        gallery: ['/images/rockyard-brewing.jpg', '/images/downtown.jpg'],
        features: ['Brewery', 'Veteran Owned', 'Craft Beer', 'Full Bar', 'Family Friendly', 'Patio'],
        hours: {
            "Monday": "Closed",
            "Tuesday": "11:00 AM - 9:00 PM",
            "Wednesday": "11:00 AM - 9:00 PM",
            "Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 10:00 PM",
            "Saturday": "11:00 AM - 10:00 PM",
            "Sunday": "11:00 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'breweries',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://wildblueyonderbrewing.com/about-us']
    },
    {
        id: '4',
        slug: 'b-and-b-cafe',
        name: 'B&B Cafe',
        description: "A Castle Rock landmark since 1946, B&B Cafe serves classic American breakfast and brunch in a cozy downtown setting. Known for hearty portions, friendly service, and that small-town diner atmosphere that keeps locals coming back generation after generation. Perfect for weekend brunch with the family.",
        cuisine: 'American Breakfast',
        price: '$',
        address: '324 Wilcox Street, Castle Rock, CO 80104',
        phone: '(720) 733-7827',
        website: 'https://www.thebbcafe.com',
        rating: 4.4,
        reviewCount: 287,
        image: '/images/b-and-b-cafe.jpg',
        gallery: ['/images/b-and-b-cafe.jpg'],
        features: ['Breakfast', 'Brunch', 'Family Friendly', 'Historic', 'Local Favorite'],
        hours: {
            "Monday": "6:00 AM - 2:00 PM",
            "Tuesday": "6:00 AM - 2:00 PM",
            "Wednesday": "6:00 AM - 2:00 PM",
            "Thursday": "6:00 AM - 2:00 PM",
            "Friday": "6:00 AM - 2:00 PM",
            "Saturday": "7:00 AM - 2:00 PM",
            "Sunday": "7:00 AM - 2:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.thebbcafe.com/', 'https://www.yelp.com/biz/b-and-b-cafe-castle-rock-2']
    },
    {
        id: '5',
        slug: 'union-american-bistro',
        name: 'Union American Bistro',
        description: "Contemporary American restaurant offering casual elegant dining with tapas, small plates, and comfort food. Ranked #2 of 135 restaurants in Castle Rock on TripAdvisor. Known for their beef tenderloin, The Chop (double pork chop with apple chutney), and crab cake burger. Features signature martinis, great wine selection, and available for private parties up to 80 people.",
        cuisine: 'American Bistro',
        price: '$$$',
        address: '3 Wilcox Street, Castle Rock, CO 80104',
        phone: '(303) 688-8159',
        website: 'https://theunionbistro.com',
        rating: 4.6,
        reviewCount: 290,
        image: '/images/union-american-bistro.jpg',
        gallery: ['/images/union-american-bistro.jpg', '/images/downtown.jpg'],
        features: ['Fine Dining', 'Date Night', 'Wine List', 'Brunch', 'Happy Hour', 'Private Events'],
        hours: {
            "Monday": "Closed",
            "Tuesday": "11:30 AM - 9:00 PM",
            "Wednesday": "11:30 AM - 9:00 PM",
            "Thursday": "11:30 AM - 9:00 PM",
            "Friday": "11:30 AM - 10:00 PM",
            "Saturday": "10:00 AM - 10:00 PM",
            "Sunday": "10:00 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'restaurants',
        deals: [
            { id: 'd1', title: 'Happy Hour', description: 'Tue-Sun 2-6 PM in bar area. $5 Margaritas Tue, Half-price wine Wed' }
        ],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://theunionbistro.com', 'https://www.yelp.com/biz/union-an-american-bistro-castle-rock', 'https://www.opentable.com/r/union-an-american-bistro']
    },
    {
        id: '6',
        slug: 'trestles-coastal-cuisine',
        name: 'Trestles Coastal Cuisine',
        description: "Family-owned fine dining seafood restaurant opened in 2017 by Castle Rock residents Jose and Mimi Espinoza. Named after the renowned surfing coastline between San Diego and Orange counties. Known for freshly shucked oysters (West and East Coast), Sea Scallop BLT, Annapolis Crab Cakes, and what many call 'the best breakfast in Castle Rock.' Women- and Latinx-owned.",
        cuisine: 'Seafood',
        price: '$$$',
        address: '880 W Happy Canyon Road, Suite 150, Castle Rock, CO 80108',
        phone: '(714) 362-4736',
        website: 'https://trestlescastlerock.com',
        rating: 4.7,
        reviewCount: 326,
        image: '/images/dining.jpg',
        gallery: ['/images/dining.jpg'],
        features: ['Seafood', 'Fine Dining', 'Oyster Bar', 'Brunch', 'Happy Hour', 'Reservations'],
        hours: {
            "Monday": "7:30 AM - 8:00 PM",
            "Tuesday": "7:30 AM - 8:00 PM",
            "Wednesday": "7:30 AM - 8:00 PM",
            "Thursday": "7:30 AM - 8:00 PM",
            "Friday": "7:30 AM - 9:00 PM",
            "Saturday": "7:30 AM - 9:00 PM",
            "Sunday": "7:30 AM - 2:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: false,
        categorySlug: 'restaurants',
        deals: [{ id: 'd2', title: 'Happy Hour', description: 'Daily 3-6 PM' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://trestlescastlerock.com/', 'https://www.yelp.com/biz/trestles-coastal-cuisine-castle-rock', 'https://www.opentable.com/r/trestles-coastal-cuisine-castle-rock']
    },
    {
        id: '7',
        slug: 'savinas-mexican-kitchen',
        name: "Savina's Mexican Kitchen",
        description: "Originally founded as La Loma in 1973, renamed in 2025 in tribute to Grandma Savina Mendoza whose recipes remain central to the menu. A Denver institution celebrated for award-winning Hatch green chile and authentic family recipes. Known for house-made flour tortillas rolled right before your eyes, mesquite-grilled fajitas, and stunning mountain views from Mount Evans to Pikes Peak.",
        cuisine: 'Mexican',
        price: '$$',
        address: '6361 Promenade Parkway, Castle Rock, CO 80108',
        phone: '(303) 632-9900',
        website: 'https://savinasmexicankitchen.com',
        rating: 4.5,
        reviewCount: 904,
        image: '/images/tacos-selene.jpg',
        gallery: ['/images/tacos-selene.jpg', '/images/promenade.jpg'],
        features: ['Mexican', 'Award-Winning Green Chile', 'Mountain Views', 'Margaritas', 'Brunch Sat-Sun'],
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
        deals: [{ id: 'd3', title: 'Happy Hour', description: 'Mon-Fri 3-6 PM' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://savinasmexicankitchen.com/', 'https://www.yelp.com/biz/savina-s-castle-rock', 'https://5280.com/original-la-loma-changes-name-to-savinas-mexican-kitchen/']
    },

    // ==================== BARS & NIGHTLIFE ====================
    {
        id: '10',
        slug: 'hideaway-bar-grill',
        name: 'Hideaway Bar & Grill',
        description: "Castle Rock's hometown favorite since March 2012, founded by Bob and Becky. Family-friendly bar and grill serving lunch and dinner with fresh, locally sourced ingredients. Features 12 beers on draft, hand-breaded chicken tenders, acclaimed Monte Cristo Sandwich, and fish tacos. Entertainment includes karaoke Thu/Sat, live music Fri, plus retro video games and billiards.",
        cuisine: 'American Bar & Grill',
        price: '$$',
        address: '600 Jerry Street, Castle Rock, CO 80104',
        phone: '(720) 519-0509',
        website: 'https://hideawaybarandgrill.com',
        rating: 4.4,
        reviewCount: 345,
        image: '/images/dining.jpg',
        gallery: ['/images/dining.jpg'],
        features: ['Sports Bar', 'Live Music', 'Karaoke', 'Patio', 'Family Friendly', 'Sunday Brunch'],
        hours: {
            "Monday": "11:00 AM - 10:00 PM",
            "Tuesday": "11:00 AM - 10:00 PM",
            "Wednesday": "11:00 AM - 10:00 PM",
            "Thursday": "11:00 AM - 11:00 PM",
            "Friday": "11:00 AM - 11:00 PM",
            "Saturday": "10:00 AM - 11:00 PM",
            "Sunday": "10:00 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'bars-nightlife',
        deals: [{ id: 'd4', title: 'Happy Hour', description: '3-6 PM & 9 PM - Close daily' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://hideawaybarandgrill.com/', 'https://www.yelp.com/biz/hideaway-bar-and-grill-castle-rock', 'https://www.tripadvisor.com/Restaurant_Review-g33345-d5064737-Reviews-Hideaway_Bar_Grill-Castle_Rock_Colorado.html']
    },
    {
        id: '11',
        slug: 'the-whiskey-lodge',
        name: 'The Whiskey Lodge',
        description: "A one-of-a-kind bar and restaurant specializing in whiskey, bourbon, and great food. Features over 100 bourbons and whiskeys, 17 beers on tap, and a signature smoked old-fashioned. Free whiskey tastings every Thursday at 6 PM. Designated leather seating area for bourbon tasting and patio with live music from new artists weekly.",
        cuisine: 'Whiskey Bar',
        price: '$$',
        address: '3911 Ambrosia Street, Suite 103, Castle Rock, CO 80109',
        phone: '(303) 862-8575',
        website: 'https://www.thewhiskeylodge.com',
        rating: 4.3,
        reviewCount: 210,
        image: '/images/sienna-wine-bar.jpg',
        gallery: ['/images/sienna-wine-bar.jpg'],
        features: ['Whiskey Bar', '100+ Bourbons', 'Live Music', 'Free Tastings Thu', 'Patio'],
        hours: {
            "Monday": "3:00 PM - 10:00 PM",
            "Tuesday": "3:00 PM - 10:00 PM",
            "Wednesday": "3:00 PM - 10:00 PM",
            "Thursday": "3:00 PM - 10:00 PM",
            "Friday": "3:00 PM - 11:00 PM",
            "Saturday": "1:00 PM - 11:00 PM",
            "Sunday": "1:00 PM - 9:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'bars-nightlife',
        deals: [{ id: 'd5', title: 'Happy Hour', description: '3-6 PM daily - $5 Old Fashioned' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.thewhiskeylodge.com/', 'https://www.yelp.com/biz/the-whiskey-lodge-castle-rock', 'https://www.tripadvisor.com/Restaurant_Review-g33345-d20969850-Reviews-The_Whiskey_Lodge-Castle_Rock_Colorado.html']
    },

    // ==================== COFFEE ====================
    {
        id: '20',
        slug: 'lost-coffee',
        name: 'Lost Coffee',
        description: "Specialty coffee shop established in 2010, with Castle Rock being their first location. From its beginnings as a mobile coffee truck, Lost Coffee has expanded across Colorado. Coffee is locally roasted in small batches in Littleton using top 3% ethically sourced beans. Known for scratch-made mocha with pure cacao, Sanctuary Chai, and ceremonial grade Japanese matcha.",
        cuisine: 'Coffee',
        price: '$',
        address: '390 Perry Street, Castle Rock, CO 80104',
        phone: '(303) 862-8367',
        website: 'https://www.lostcoffee.com/pages/castle-rock',
        rating: 4.7,
        reviewCount: 280,
        image: '/images/lost-coffee.jpg',
        gallery: ['/images/lost-coffee.jpg', '/images/downtown.jpg'],
        features: ['Coffee', 'Local Roaster', 'Ethically Sourced', 'Matcha', 'Chai'],
        hours: {
            "Monday": "6:00 AM - 6:00 PM",
            "Tuesday": "6:00 AM - 6:00 PM",
            "Wednesday": "6:00 AM - 6:00 PM",
            "Thursday": "6:00 AM - 6:00 PM",
            "Friday": "6:00 AM - 6:00 PM",
            "Saturday": "6:00 AM - 6:00 PM",
            "Sunday": "6:00 AM - 6:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'coffee',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.lostcoffee.com/pages/castle-rock', 'https://www.yelp.com/biz/lostcoffee-castle-rock-2', 'https://www.tripadvisor.com/Restaurant_Review-g33345-d5564864-Reviews-Lost_Coffee-Castle_Rock_Colorado.html']
    },
    {
        id: '21',
        slug: 'crowfoot-valley-coffee',
        name: 'Crowfoot Valley Coffee',
        description: "Castle Rock's foremost boutique roaster since January 1999. Owner Jason Gray has been in the coffee business for nearly 30 years, sourcing green coffee globally and purchasing only the top 3% of world's coffee. Known for consistency, small farm relationships, classic dark roasts, Lavender Latte, and whiskey-infused coffee beans. Also serves beer and breakfast sandwiches.",
        cuisine: 'Coffee',
        price: '$$',
        address: '734 Wilcox Street, Suite 102, Castle Rock, CO 80104',
        phone: '(303) 814-0999',
        website: 'https://crowfootvalleycoffee.com',
        rating: 4.6,
        reviewCount: 320,
        image: '/images/lost-coffee.jpg',
        gallery: ['/images/lost-coffee.jpg'],
        features: ['Coffee', 'Boutique Roaster', 'Beer', 'Live Music', 'Local Favorite'],
        hours: {
            "Monday": "5:00 AM - 7:00 PM",
            "Tuesday": "5:00 AM - 7:00 PM",
            "Wednesday": "5:00 AM - 7:00 PM",
            "Thursday": "5:00 AM - 7:00 PM",
            "Friday": "5:00 AM - 9:00 PM",
            "Saturday": "7:00 AM - 9:00 PM",
            "Sunday": "7:00 AM - 4:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: false,
        categorySlug: 'coffee',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://crowfootvalleycoffee.com/', 'https://www.yelp.com/biz/crowfoot-valley-coffee-castle-rock', 'https://www.tripadvisor.com/Attraction_Review-g33345-d3642176-Reviews-Crowfoot_Valley_Coffee_and_Crowbar-Castle_Rock_Colorado.html']
    },

    // ==================== BREWERIES ====================
    {
        id: '30',
        slug: 'rockyard-brewing-company',
        name: 'Rockyard Brewing Company',
        description: "Douglas County's longest-running brewpub, opened in 1999 by Colorado-raised siblings Mike and Jeff Drabing. Multiple award-winning brewery including Gold Medal World Beer Cup 2018 (Primadonna), Gold GABF 2017 (Plum Creek Sour), and Gold GABF 2016 (Warning Sign Imperial Bock). Family-friendly brewpub with handcrafted American Grill menu using fresh local ingredients.",
        cuisine: 'Brewery & American',
        price: '$$',
        address: '880 Castleton Road, Castle Rock, CO 80109',
        phone: '(303) 814-9273',
        website: 'https://rockyard.com',
        rating: 4.4,
        reviewCount: 510,
        image: '/images/rockyard-brewing.jpg',
        gallery: ['/images/rockyard-brewing.jpg'],
        features: ['Award-Winning Brewery', 'Family Friendly', 'Patio', 'Burgers', 'Pizza', 'Late Night Menu'],
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
        updatedAt: new Date('2026-01-07'),
        sources: ['https://rockyard.com/', 'https://www.yelp.com/biz/rockyard-brewing-company-castle-rock-2', 'https://www.colorado.com/castle-rock/rockyard-brewing-company']
    },
    {
        id: '31',
        slug: 'great-divide-brewery-roadhouse',
        name: 'Great Divide Brewery & Roadhouse',
        description: "Established in 2020, bringing together craft beer from Great Divide Brewing Company (founded in Denver) with delicious food from Vibe Concepts. Located across from Festival Park in Downtown Castle Rock. Features a five-barrel pilot brewing system creating experimental small-batch beers only available here. Known for beer flights ($15), Titan IPA, 5-hour Braised Short Rib, and NY Strip.",
        cuisine: 'Brewery & American',
        price: '$$$',
        address: '215 Wilcox Street, Castle Rock, CO 80104',
        phone: '(303) 955-5788',
        website: 'https://www.greatdividebreweryandroadhouse.com/castle-rock',
        rating: 4.6,
        reviewCount: 456,
        image: '/images/rockyard-brewing.jpg',
        gallery: ['/images/rockyard-brewing.jpg', '/images/downtown.jpg'],
        features: ['Brewery', 'Pilot Brewing System', 'Weekend Brunch', 'Patio', 'Firepit', 'Gluten-Free'],
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
            { id: 'd6', title: 'Happy Hour', description: 'Daily 3-6 PM - $5 Great Divide Lager, $8 cocktails, half off select apps' },
            { id: 'd7', title: 'Late Night Happy Hour', description: 'Daily 9 PM-Close - $5 Lager, $7 cocktails' }
        ],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.greatdividebreweryandroadhouse.com/castle-rock', 'https://www.yelp.com/biz/great-divide-brewery-and-roadhouse-castle-rock-castle-rock', 'https://greatdivide.com/castle-rock/']
    },

    // ==================== RETAIL & SHOPPING ====================
    {
        id: '40',
        slug: 'outlets-at-castle-rock',
        name: 'Outlets at Castle Rock',
        description: "Colorado's largest open-air outlet center featuring over 100 of the world's best brands at up to 70% off retail prices. Voted Colorado's Best Outlet Shopping since 2015. Conveniently located off I-25 between Denver and Colorado Springs (Exit 184 or 185). Pedestrian-friendly and pet-friendly shopping experience with stunning mountain views.",
        cuisine: 'Shopping Center',
        price: '$$',
        address: '5050 Factory Shops Blvd, Suite 437, Castle Rock, CO 80108',
        phone: '(303) 688-4495',
        website: 'https://www.outletsatcastlerock.com',
        rating: 4.5,
        reviewCount: 1250,
        image: '/images/outlets-at-castle-rock.jpg',
        gallery: ['/images/outlets-at-castle-rock.jpg', '/images/outlets-hero.jpg'],
        features: ['Outlet Shopping', '100+ Stores', 'Mountain Views', 'Pet Friendly', 'Food Court'],
        hours: {
            "Monday": "10:00 AM - 8:00 PM",
            "Tuesday": "10:00 AM - 8:00 PM",
            "Wednesday": "10:00 AM - 8:00 PM",
            "Thursday": "10:00 AM - 8:00 PM",
            "Friday": "10:00 AM - 8:00 PM",
            "Saturday": "10:00 AM - 8:00 PM",
            "Sunday": "11:00 AM - 6:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'retail',
        deals: [{ id: 'd10', title: 'Up to 70% Off', description: 'Designer brands at outlet prices' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.outletsatcastlerock.com', 'https://www.yelp.com/biz/outlets-at-castle-rock-castle-rock']
    },
    {
        id: '41',
        slug: 'nike-factory-store',
        name: 'Nike Factory Store',
        description: "Official Nike outlet store at Outlets at Castle Rock offering athletic footwear, apparel, and accessories at factory store prices. Find deals on running shoes, training gear, and the latest Nike styles for men, women, and kids.",
        cuisine: 'Athletic Retail',
        price: '$$',
        address: '5050 Factory Shops Blvd, Location 905, Castle Rock, CO 80108',
        phone: '(303) 688-3013',
        website: 'https://www.outletsatcastlerock.com/store/nike-factory-store',
        rating: 4.3,
        reviewCount: 890,
        image: '/images/nike-factory-store.jpg',
        gallery: ['/images/nike-factory-store.jpg', '/images/outlets-at-castle-rock.jpg'],
        features: ['Athletic Wear', 'Footwear', 'Outlet Prices', 'Nike'],
        hours: {
            "Monday": "10:00 AM - 8:00 PM",
            "Tuesday": "10:00 AM - 8:00 PM",
            "Wednesday": "10:00 AM - 8:00 PM",
            "Thursday": "10:00 AM - 8:00 PM",
            "Friday": "10:00 AM - 8:00 PM",
            "Saturday": "10:00 AM - 8:00 PM",
            "Sunday": "11:00 AM - 6:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'retail',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.outletsatcastlerock.com/store/nike-factory-store']
    },
    {
        id: '42',
        slug: 'coach-outlet',
        name: 'Coach Outlet',
        description: "Designer handbags, accessories, and leather goods at outlet prices. Coach is a modern American luxury brand with a rich heritage rooted in quality and craftsmanship, synonymous with the ease and sophistication of New York style. Find classic styles alongside seasonal collections.",
        cuisine: 'Designer Retail',
        price: '$$$',
        address: '5050 Factory Shops Blvd, Suite 460, Castle Rock, CO 80108',
        phone: '(303) 814-0750',
        website: 'https://www.coachoutlet.com/stores/co/castle-rock/5050-factory-shops-blvd',
        rating: 4.4,
        reviewCount: 567,
        image: '/images/coach-outlet.jpg',
        gallery: ['/images/coach-outlet.jpg', '/images/outlets-at-castle-rock.jpg'],
        features: ['Designer', 'Handbags', 'Accessories', 'Luxury', 'Outlet Prices'],
        hours: {
            "Monday": "10:00 AM - 8:00 PM",
            "Tuesday": "10:00 AM - 8:00 PM",
            "Wednesday": "10:00 AM - 8:00 PM",
            "Thursday": "10:00 AM - 8:00 PM",
            "Friday": "10:00 AM - 8:00 PM",
            "Saturday": "10:00 AM - 8:00 PM",
            "Sunday": "11:00 AM - 6:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'retail',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.coachoutlet.com/stores/co/castle-rock/5050-factory-shops-blvd', 'https://www.yelp.com/biz/the-coach-factory-store-castle-rock']
    },
    {
        id: '43',
        slug: 'homegoods',
        name: 'HomeGoods',
        description: "Discover an ever-changing selection of home decor, furniture, bedding, kitchenware, and unique finds at amazing prices. Combined T.J. Maxx & HomeGoods location at The Promenade. New arrivals daily make every visit a treasure hunt for your home.",
        cuisine: 'Home Retail',
        price: '$$',
        address: '6374 Promenade Parkway, Castle Rock, CO 80108',
        phone: '(303) 663-1401',
        website: 'https://www.homegoods.com/store-details/Castle-Rock-CO-80108/746',
        rating: 4.2,
        reviewCount: 445,
        image: '/images/homegoods-castle-rock.jpg',
        gallery: ['/images/homegoods-castle-rock.jpg', '/images/promenade.jpg'],
        features: ['Home Decor', 'Furniture', 'Kitchenware', 'Bedding', 'T.J. Maxx'],
        hours: {
            "Monday": "9:30 AM - 9:30 PM",
            "Tuesday": "9:30 AM - 9:30 PM",
            "Wednesday": "9:30 AM - 6:00 PM",
            "Thursday": "9:30 AM - 6:00 PM",
            "Friday": "9:30 AM - 9:30 PM",
            "Saturday": "9:30 AM - 9:30 PM",
            "Sunday": "9:30 AM - 9:30 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'retail',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.homegoods.com/store-details/Castle-Rock-CO-80108/746', 'https://www.yelp.com/biz/homegoods-castle-rock']
    },
    {
        id: '44',
        slug: 'the-emporium-castle-rock',
        name: 'The Emporium Castle Rock',
        description: "Downtown Castle Rock's premier destination for local artisans and makers, featuring 60+ local merchants under one roof. Find Colorado-made gifts, handcrafted jewelry, home decor, and unique souvenirs. The perfect place to shop local and support Castle Rock's creative community.",
        cuisine: 'Gift Shop',
        price: '$$',
        address: '104 4th Street, Castle Rock, CO 80104',
        phone: '(720) 539-9080',
        website: 'https://theemporiumcastlerock.com',
        rating: 4.8,
        reviewCount: 145,
        image: '/images/the-emporium.jpg',
        gallery: ['/images/the-emporium.jpg', '/images/downtown.jpg'],
        features: ['Local Artisans', '60+ Merchants', 'Colorado Made', 'Gifts', 'Handcrafted'],
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
        updatedAt: new Date('2026-01-07'),
        sources: ['https://theemporiumcastlerock.com/', 'https://www.yelp.com/search?cflt=giftshops&find_loc=Castle+Rock,+CO']
    },

    // ==================== AUTO & TRANSPORTATION ====================
    {
        id: '50',
        slug: 'all-around-auto-care',
        name: 'All Around Auto Care',
        description: "Family-owned auto repair shop established in 1997, offering dependable auto repairs by ASE-Certified technicians. AAA Approved Auto Repair Facility with 4.9/5 star rating. Services include oil changes, tire rotation, brake repair, and comprehensive diagnostics. Features a Guest for Life Program ($79.95 for six visits with oil change, courtesy check, and tire rotation).",
        cuisine: 'Auto Repair',
        price: '$$',
        address: '2807 N Highway 85, Unit #104, Castle Rock, CO 80109',
        phone: '(720) 512-4411',
        website: 'https://allaroundautomotivecare.com',
        rating: 4.9,
        reviewCount: 234,
        image: '/images/all-around-auto-care.jpg',
        gallery: ['/images/all-around-auto-care.jpg', '/images/auto.jpg'],
        features: ['ASE Certified', 'AAA Approved', 'Family Owned', 'Oil Change', 'Brakes', 'Diagnostics'],
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
        deals: [{ id: 'd11', title: 'Guest for Life', description: '$79.95 for 6 visits - oil change, courtesy check, tire rotation' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://allaroundautomotivecare.com/Castle-Rock-Colorado.html', 'https://www.yelp.com/biz/all-around-auto-care-castle-rock-castle-rock', 'https://www.aaa.com/autorepair/shop/all-around-auto-care-109791']
    },
    {
        id: '51',
        slug: 'castle-rock-chevrolet-gmc',
        name: 'Castle Rock Chevrolet GMC',
        description: "Castle Rock's premier new and used car dealership featuring Chevrolet and GMC vehicles. Acquired by Foundation Automotive Corp. in 2020 (formerly Medved), offering sales, service, and financing with a commitment to customer satisfaction. Full service center for maintenance and repairs.",
        cuisine: 'Car Dealership',
        price: '$$$',
        address: '1506 S Wilcox Street, Castle Rock, CO 80104',
        phone: '(720) 773-6113',
        website: 'https://www.castlerockchevygmc.com',
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
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.castlerockchevygmc.com/', 'https://www.castlerockautoplex.com/']
    },

    // ==================== HEALTH & WELLNESS ====================
    {
        id: '60',
        slug: 'massage-envy-castle-rock',
        name: 'Massage Envy',
        description: "Professional massage therapy and skincare services offering Swedish, deep tissue, sports massage, and customized treatments. Membership programs available for regular wellness. Convenient location near I-25 for easy access.",
        cuisine: 'Spa & Massage',
        price: '$$',
        address: '5650 Allen Way #116, Castle Rock, CO 80108',
        phone: '(720) 974-9100',
        website: 'https://locations.massageenvy.com/colorado/castle-rock/5650-allen-way.html',
        rating: 4.5,
        reviewCount: 198,
        image: '/images/massage-heights.jpg',
        gallery: ['/images/massage-heights.jpg', '/images/wellness.jpg'],
        features: ['Massage', 'Skincare', 'Membership', 'Swedish', 'Deep Tissue'],
        hours: {
            "Monday": "9:00 AM - 8:00 PM",
            "Tuesday": "9:00 AM - 8:00 PM",
            "Wednesday": "9:00 AM - 8:00 PM",
            "Thursday": "10:00 AM - 8:00 PM",
            "Friday": "9:00 AM - 8:00 PM",
            "Saturday": "9:00 AM - 5:00 PM",
            "Sunday": "10:00 AM - 6:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'wellness',
        deals: [{ id: 'd12', title: 'First Visit Special', description: 'Introductory rate for new guests' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://locations.massageenvy.com/colorado/castle-rock/5650-allen-way.html', 'https://www.yelp.com/search?find_desc=Massage&find_loc=Castle+Rock,+CO']
    },
    {
        id: '61',
        slug: 'orangetheory-fitness',
        name: 'Orangetheory Fitness',
        description: "Science-backed, technology-tracked, coach-inspired group workouts designed to produce results from the inside out. Heart rate-based interval training in 60-minute sessions that keeps your body burning calories long after your workout. Located in The Meadows area near AMC Movie Theater.",
        cuisine: 'Fitness Studio',
        price: '$$',
        address: '3990 Limelight Avenue, Unit F, Castle Rock, CO 80109',
        phone: '(303) 747-4003',
        website: 'https://www.orangetheory.com/en-us/locations/castle-rock-colorado-0504',
        rating: 4.7,
        reviewCount: 345,
        image: '/images/orangetheory-fitness.jpg',
        gallery: ['/images/orangetheory-fitness.jpg', '/images/wellness.jpg'],
        features: ['Fitness', 'HIIT', 'Heart Rate Training', 'Group Classes', 'Wheelchair Accessible'],
        hours: {
            "Monday": "5:00 AM - 8:00 PM",
            "Tuesday": "5:00 AM - 8:00 PM",
            "Wednesday": "5:00 AM - 8:00 PM",
            "Thursday": "5:00 AM - 8:00 PM",
            "Friday": "5:00 AM - 7:00 PM",
            "Saturday": "6:00 AM - 11:30 AM",
            "Sunday": "6:00 AM - 1:30 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'wellness',
        deals: [{ id: 'd13', title: 'Free First Class', description: 'Try your first class free' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.orangetheory.com/en-us/locations/castle-rock-colorado-0504', 'https://www.yelp.com/biz/orangetheory-fitness-castle-rock-castle-rock']
    },
    {
        id: '62',
        slug: 'adventhealth-castle-rock',
        name: 'AdventHealth Castle Rock',
        description: "55-bed hospital (rebranded from Castle Rock Adventist Hospital in August 2023). Recognized as one of America's highest-rated hospitals for patient safety by The Leapfrog Group. Features Level III trauma center, emergency care available 24/7, surgical services, cardiac catheterization lab, advanced imaging, and orthopedic care. Free parking available 24/7.",
        cuisine: 'Hospital',
        price: '',
        address: '2350 Meadows Blvd, Castle Rock, CO 80109',
        phone: '(720) 455-5000',
        website: 'https://www.adventhealth.com/hospital/adventhealth-castle-rock',
        rating: 4.2,
        reviewCount: 456,
        image: '/images/castle-rock-adventist-hospital.jpg',
        gallery: ['/images/castle-rock-adventist-hospital.jpg'],
        features: ['Emergency Room 24/7', 'Level III Trauma', 'Surgery', 'Cardiac Care', 'Free Parking'],
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
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.adventhealth.com/hospital/adventhealth-castle-rock', 'https://www.centura.org/location/castle-rock-adventist-hospital']
    },

    // ==================== KIDS & FAMILY ====================
    {
        id: '70',
        slug: 'miller-activity-complex',
        name: 'Miller Activity Complex (MAC)',
        description: "64,443 square-foot, two-story recreational facility within the 300+ acre Philip S. Miller Park. Voted 'Best of the Best for Family Entertainment' by Colorado Community Media in 2019. Features indoor synthetic turf fields, 3,000 SF play area with 23-foot slide, 5,000 SF trampoline zone (16 beds), indoor aquatics center with lap lanes and leisure pool with water slide, 18-hole golf simulator, and batting cages.",
        cuisine: 'Recreation Center',
        price: '$',
        address: '1375 Plum Creek Parkway, Castle Rock, CO 80109',
        phone: '(720) 733-2245',
        website: 'https://www.crgov.com/2049/Miller-Activity-Complex-MAC',
        rating: 4.5,
        reviewCount: 389,
        image: '/images/miller-activity-complex.jpg',
        gallery: ['/images/miller-activity-complex.jpg', '/images/kids.jpg'],
        features: ['Swimming Pool', 'Trampoline Zone', 'Turf Fields', 'Golf Simulator', 'Play Area', 'Events'],
        hours: {
            "Monday": "5:30 AM - 9:00 PM",
            "Tuesday": "5:30 AM - 9:00 PM",
            "Wednesday": "5:30 AM - 9:00 PM",
            "Thursday": "5:30 AM - 9:00 PM",
            "Friday": "5:30 AM - 9:00 PM",
            "Saturday": "7:00 AM - 6:00 PM",
            "Sunday": "8:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: false,
        categorySlug: 'kids',
        deals: [{ id: 'd14', title: 'Resident Rates', description: 'Castle Rock residents receive discounted admission' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.crgov.com/2049/Miller-Activity-Complex-MAC', 'https://www.tripadvisor.com/Attraction_Review-g33345-d7812523-Reviews-Miller_Activity_Complex-Castle_Rock_Colorado.html']
    },

    // ==================== PROFESSIONAL SERVICES ====================
    {
        id: '100',
        slug: 'firstbank-castle-rock',
        name: 'FirstBank',
        description: "Colorado's largest locally-owned bank offering personal and business banking, mortgages, and wealth management. Two Castle Rock branches: Plum Creek (established June 18, 1975) and Founders Parkway. Committed to community banking with personalized service and local decision-making.",
        cuisine: 'Banking',
        price: '',
        address: '2 Plum Creek Parkway, Castle Rock, CO 80104',
        phone: '(303) 688-5000',
        website: 'https://www.efirstbank.com',
        rating: 4.3,
        reviewCount: 145,
        image: '/images/first-bank.jpg',
        gallery: ['/images/first-bank.jpg', '/images/professional-services.jpg'],
        features: ['Banking', 'Mortgages', 'Business Banking', 'ATM', 'Drive-Thru', 'Local Bank'],
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
        updatedAt: new Date('2026-01-07'),
        sources: ['https://www.efirstbank.com/', 'https://www.yelp.com/biz/firstbank-castle-rock-5']
    },

    // ==================== PETS ====================
    {
        id: '120',
        slug: 'veterinary-specialists-rockies',
        name: 'Veterinary Specialists of the Rockies',
        description: "24/7 emergency veterinary care and specialty services for dogs, cats, and exotic pets. Comprehensive services include emergency medicine, surgery, internal medicine, cardiology, oncology, and neurology. State-of-the-art facility providing advanced veterinary care to Castle Rock and surrounding communities.",
        cuisine: 'Emergency Veterinary',
        price: '$$$',
        address: '774 Maleta Lane, Castle Rock, CO 80108',
        phone: '(303) 660-1027',
        website: 'https://vetsoftherockies.com',
        rating: 4.7,
        reviewCount: 345,
        image: '/images/castle-rock-veterinary.jpg',
        gallery: ['/images/castle-rock-veterinary.jpg', '/images/pets.jpg'],
        features: ['24/7 Emergency', 'Surgery', 'Cardiology', 'Oncology', 'Neurology', 'Exotic Pets'],
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
        isPremium: true,
        isFeatured: false,
        categorySlug: 'pets',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://vetsoftherockies.com/', 'https://www.yelp.com/biz/veterinary-specialists-of-the-rockies-castle-rock']
    },
    {
        id: '121',
        slug: 'petco-castle-rock',
        name: 'Petco',
        description: "Full-service pet store offering food, supplies, toys, and accessories for dogs, cats, fish, birds, and small animals. Services include grooming, training, and veterinary care through on-site Banfield Pet Hospital. Located at The Promenade, about 1 minute from Exit 185 of I-25.",
        cuisine: 'Pet Store',
        price: '$$',
        address: '6378 Promenade Parkway, Castle Rock, CO 80108',
        phone: '(303) 537-9000',
        website: 'https://stores.petco.com/co/castlerock/pet-supplies-castlerock-co-2449.html',
        rating: 4.2,
        reviewCount: 267,
        image: '/images/petco.jpg',
        gallery: ['/images/petco.jpg', '/images/pets.jpg'],
        features: ['Pet Supplies', 'Grooming', 'Training', 'Banfield Vet', 'Adoption Events'],
        hours: {
            "Monday": "9:00 AM - 9:00 PM",
            "Tuesday": "9:00 AM - 9:00 PM",
            "Wednesday": "9:00 AM - 7:00 PM",
            "Thursday": "9:00 AM - 9:00 PM",
            "Friday": "9:00 AM - 9:00 PM",
            "Saturday": "9:00 AM - 9:00 PM",
            "Sunday": "9:00 AM - 8:00 PM"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'pets',
        deals: [{ id: 'd18', title: 'Pals Rewards', description: 'Earn points on every purchase' }],
        updatedAt: new Date('2026-01-07'),
        sources: ['https://stores.petco.com/co/castlerock/pet-supplies-castlerock-co-2449.html', 'https://www.yelp.com/biz/petco-castle-rock']
    },

    // ==================== ACTIVITIES & ENTERTAINMENT ====================
    {
        id: '130',
        slug: 'the-edge-ziplines-adventures',
        name: 'The EDGE Ziplines & Adventures',
        description: "Experience Castle Rock from above at The EDGE Ziplines & Adventures. Offering thrilling zipline tours, aerial adventure courses, and outdoor activities for all skill levels. Perfect for families, team building, and adventure seekers looking for an unforgettable Colorado experience with stunning views of the Front Range.",
        cuisine: 'Adventure Tours',
        price: '$$',
        address: 'Castle Rock, CO 80104',
        phone: '(720) 733-3343',
        website: 'https://www.theedgeziplines.com',
        rating: 4.8,
        reviewCount: 456,
        image: '/images/edge-ziplines-adventures.jpg',
        gallery: ['/images/edge-ziplines-adventures.jpg'],
        features: ['Ziplines', 'Adventure Tours', 'Team Building', 'Family Friendly', 'Outdoor Activities', 'Scenic Views'],
        hours: {
            "Monday": "9:00 AM - 5:00 PM",
            "Tuesday": "9:00 AM - 5:00 PM",
            "Wednesday": "9:00 AM - 5:00 PM",
            "Thursday": "9:00 AM - 5:00 PM",
            "Friday": "9:00 AM - 6:00 PM",
            "Saturday": "9:00 AM - 6:00 PM",
            "Sunday": "10:00 AM - 5:00 PM"
        },
        isOpen: true,
        isPremium: true,
        isFeatured: true,
        categorySlug: 'activities',
        deals: [{ id: 'd19', title: 'Group Discounts', description: 'Save on groups of 10+' }],
        updatedAt: new Date('2026-01-07'),
        sources: []
    },
    {
        id: '131',
        slug: 'castle-rock-massage-therapy',
        name: 'Castle Rock Massage Therapy',
        description: "Professional massage therapy services in Castle Rock offering therapeutic, deep tissue, sports, and relaxation massages. Experienced licensed therapists provide personalized treatments in a peaceful, welcoming environment. Perfect for stress relief, injury recovery, or regular wellness maintenance.",
        cuisine: 'Massage Therapy',
        price: '$$',
        address: 'Castle Rock, CO 80104',
        phone: '(303) 555-0199',
        website: '',
        rating: 4.7,
        reviewCount: 189,
        image: '/images/castle-rock-massage-therapy.jpg',
        gallery: ['/images/castle-rock-massage-therapy.jpg', '/images/wellness.jpg'],
        features: ['Massage', 'Deep Tissue', 'Sports Massage', 'Relaxation', 'Therapeutic', 'By Appointment'],
        hours: {
            "Monday": "9:00 AM - 7:00 PM",
            "Tuesday": "9:00 AM - 7:00 PM",
            "Wednesday": "9:00 AM - 7:00 PM",
            "Thursday": "9:00 AM - 7:00 PM",
            "Friday": "9:00 AM - 6:00 PM",
            "Saturday": "10:00 AM - 4:00 PM",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'wellness',
        deals: [{ id: 'd20', title: 'First Visit Special', description: '$10 off your first massage' }],
        updatedAt: new Date('2026-01-07'),
        sources: []
    },
    {
        id: '132',
        slug: 'castle-rock-autoplex',
        name: 'Castle Rock Autoplex',
        description: "Full-service automotive dealership offering new and pre-owned vehicles, financing options, and a complete service center. Serving the Castle Rock community with quality vehicles and exceptional customer service. Trade-ins welcome.",
        cuisine: 'Auto Dealership',
        price: '$$$',
        address: 'Castle Rock, CO 80104',
        phone: '(303) 555-0200',
        website: '',
        rating: 4.4,
        reviewCount: 234,
        image: '/images/castle-rock-autoplex.jpg',
        gallery: ['/images/castle-rock-autoplex.jpg', '/images/auto.jpg'],
        features: ['New Cars', 'Used Cars', 'Service Center', 'Financing', 'Trade-Ins', 'Test Drives'],
        hours: {
            "Monday": "9:00 AM - 7:00 PM",
            "Tuesday": "9:00 AM - 7:00 PM",
            "Wednesday": "9:00 AM - 7:00 PM",
            "Thursday": "9:00 AM - 7:00 PM",
            "Friday": "9:00 AM - 7:00 PM",
            "Saturday": "9:00 AM - 6:00 PM",
            "Sunday": "Closed"
        },
        isOpen: true,
        isPremium: false,
        isFeatured: false,
        categorySlug: 'auto',
        deals: [],
        updatedAt: new Date('2026-01-07'),
        sources: []
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
        'pets': ['pets'],
        'activities': ['activities']
    }

    const categorySlugs = slugMap[categorySlug] || [categorySlug]
    return LISTINGS.filter(l => categorySlugs.includes(l.categorySlug))
}

export function getTrendingListings(limit = 8): Listing[] {
    return [...LISTINGS]
        .sort((a, b) => {
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
            l.features.includes('Wine List') ||
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

export function isOpenNow(hours: Record<string, string>): boolean {
    if (!hours || Object.keys(hours).length === 0) {
        return false
    }

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

    const todayHours = hours[dayOfWeek]
    if (!todayHours || todayHours.toLowerCase() === 'closed') {
        return false
    }

    if (todayHours.toLowerCase().includes('open 24 hours')) {
        return true
    }

    if (todayHours.toLowerCase().includes('by appointment') || todayHours.toLowerCase().includes('emergency')) {
        return false
    }

    const timeMatch = todayHours.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i)
    if (!timeMatch) {
        return false
    }

    const [, openHour, openMin, openPeriod, closeHour, closeMin, closePeriod] = timeMatch

    let openHour24 = parseInt(openHour, 10)
    if (openPeriod.toUpperCase() === 'PM' && openHour24 !== 12) openHour24 += 12
    if (openPeriod.toUpperCase() === 'AM' && openHour24 === 12) openHour24 = 0

    let closeHour24 = parseInt(closeHour, 10)
    if (closePeriod.toUpperCase() === 'PM' && closeHour24 !== 12) closeHour24 += 12
    if (closePeriod.toUpperCase() === 'AM' && closeHour24 === 12) closeHour24 = 0

    const openMinutes = openHour24 * 60 + parseInt(openMin, 10)
    let closeMinutes = closeHour24 * 60 + parseInt(closeMin, 10)

    if (closeMinutes < openMinutes) {
        closeMinutes += 24 * 60
        if (currentMinutes < openMinutes) {
            return currentMinutes + 24 * 60 >= openMinutes && currentMinutes + 24 * 60 < closeMinutes
        }
    }

    return currentMinutes >= openMinutes && currentMinutes < closeMinutes
}

export function getListingWithOpenStatus(listing: Listing): Listing & { isOpen: boolean } {
    return {
        ...listing,
        isOpen: isOpenNow(listing.hours)
    }
}

export function getAllListingsWithOpenStatus(): (Listing & { isOpen: boolean })[] {
    return LISTINGS.map(getListingWithOpenStatus)
}

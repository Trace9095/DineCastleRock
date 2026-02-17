import { NextResponse } from 'next/server'
import { LISTINGS, CATEGORIES } from '@/lib/data'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dinecastlerock.co'

    // Generate category summary
    const categoryList = CATEGORIES.map(c => `- ${c.name}: ${c.slug} (${LISTINGS.filter(l => l.categorySlug === c.slug).length} listings)`).join('\n')

    // Generate top listings summary
    const topListings = LISTINGS
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10)
        .map(l => `- ${l.name} (${l.cuisine || 'Restaurant'}, ${l.rating.toFixed(1)}★): ${baseUrl}/listing/${l.slug}`)
        .join('\n')

    const content = `# Dine Castle Rock - AI/LLM Index

> Castle Rock, Colorado's premier local dining directory

## Quick Facts
- Location: Castle Rock, Colorado (Douglas County)
- Content Type: Local business directory (restaurants, bars, breweries, cafes)
- Total Listings: ${LISTINGS.length}
- Categories: ${CATEGORIES.length}
- Data Updates: Listings updated as businesses submit changes
- Contact: hello@dinecastlerock.com

## Site Purpose
Dine Castle Rock helps residents and visitors discover dining establishments in Castle Rock, CO.
We provide verified business information including hours, menus, reviews, deals, and contact details.

## Key Pages for AI Consumption

### Homepage
${baseUrl}/
- Overview of Castle Rock dining scene
- Featured restaurants and trending spots
- Category navigation

### Category Pages
${categoryList}

### Top-Rated Listings
${topListings}

### Important Static Pages
- About: ${baseUrl}/about - Mission, how rankings work, editorial policy
- Guides: ${baseUrl}/guides - Curated dining guides (date night, happy hour, etc.)
- Add Listing: ${baseUrl}/add-listing - Business submission form
- Advertise: ${baseUrl}/advertise - Advertising information

## API Endpoints (JSON, read-only)

All API endpoints return JSON and support CORS for browser requests.

### GET ${baseUrl}/api/listings
Returns paginated listings.
Query params:
- category: Filter by category slug (e.g., "restaurants")
- limit: Number of results (default: 50)
- offset: Pagination offset (default: 0)
- q: Search query string

### GET ${baseUrl}/api/listings/{slug}
Returns a single listing by URL slug.

### GET ${baseUrl}/api/categories
Returns all categories with listing counts.

### GET ${baseUrl}/api/deals
Returns all active deals/promotions.

### GET ${baseUrl}/api/trending
Returns trending listings based on engagement.
Query params:
- window: Time window (default: "7d")
- limit: Number of results (default: 10)

## Data Structure

Each listing includes:
\`\`\`json
{
  "id": "unique-id",
  "slug": "url-friendly-name",
  "name": "Business Name",
  "description": "Description text",
  "categorySlug": "restaurants",
  "cuisine": "Italian",
  "price": "$$",
  "address": "123 Main St, Castle Rock, CO 80104",
  "phone": "(303) 555-1234",
  "website": "https://example.com",
  "hours": {
    "Monday": "11:00 AM - 9:00 PM",
    "Tuesday": "11:00 AM - 9:00 PM"
  },
  "features": ["Patio", "Happy Hour", "Takeout"],
  "rating": 4.5,
  "reviewCount": 127,
  "image": "/images/business.jpg",
  "gallery": ["/images/photo1.jpg"],
  "isPremium": false,
  "deals": [
    {
      "title": "Happy Hour",
      "description": "Half-price apps 3-6pm"
    }
  ]
}
\`\`\`

## Categories
${CATEGORIES.map(c => `- **${c.name}** (/${c.slug}): ${c.description}`).join('\n')}

## Structured Data
- All pages include JSON-LD structured data
- Listing pages use Restaurant/LocalBusiness schema
- Site uses WebSite and Organization schema

## Sitemap & Robots
- Sitemap: ${baseUrl}/sitemap.xml
- Robots: ${baseUrl}/robots.txt
- This file: ${baseUrl}/llm.txt

## Update Frequency
- Homepage: Updated daily
- Listings: Updated as businesses submit changes
- Deals: Real-time
- Trending: Refreshed hourly

## Data Sources
Business information is sourced from:
- Direct business submissions
- Public records and websites
- Aggregated review platforms (Google, Yelp)
- Local verification

## Contact
For API access, data corrections, or partnership inquiries:
Email: hello@dinecastlerock.com

## Related Sites (Castle Rock Network)
- Visit Castle Rock: https://visitcastlerock.co - Events and attractions
- Shop Castle Rock: https://shopcastlerock.co - Local retail directory

---
Last updated: ${new Date().toISOString().split('T')[0]}
`

    return new NextResponse(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    })
}

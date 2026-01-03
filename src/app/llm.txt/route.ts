import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dine-castle-rock.vercel.app'

    const content = `# Dine Castle Rock - LLM Index

## Overview
Dine Castle Rock is the premier dining directory for Castle Rock, Colorado.
We feature restaurants, bars, breweries, cafes, and other dining establishments.

## API Endpoints (JSON, read-only)

### Listings
- GET ${baseUrl}/api/listings
  Returns all listings with pagination
  Query params: ?category=restaurants&limit=50&offset=0

- GET ${baseUrl}/api/listings/{slug}
  Returns a single listing by slug

### Categories
- GET ${baseUrl}/api/categories
  Returns all categories with listing counts

### Deals
- GET ${baseUrl}/api/deals
  Returns all active deals

### Trending
- GET ${baseUrl}/api/trending
  Returns trending listings
  Query params: ?window=7d&limit=10

## Data Structure

Each listing includes:
- id: Unique identifier
- slug: URL-friendly identifier
- name: Business name
- description: Business description
- category: Array of category slugs
- cuisine: Array of cuisine types
- price_level: 1-4 ($ to $$$$)
- address: Object with street, city, state, postal, lat, lng
- phone: Phone number
- website: Website URL
- hours: Operating hours by day
- features: Array of feature tags (e.g., "Patio", "Happy Hour")
- rating: Object with value (0-5), count, source
- deals: Array of active deals
- image: Hero image URL
- gallery: Array of additional image URLs
- is_premium: Boolean for premium/featured status
- updated_at: ISO-8601 timestamp

## Categories
- restaurants: Full-service restaurants
- bars: Bars and nightlife
- breweries: Craft breweries
- coffee: Coffee shops and cafes
- dessert: Dessert and bakeries
- food-trucks: Food trucks

## Update Frequency
- Listings: Updated as businesses submit changes
- Deals: Real-time
- Trending: Refreshed hourly

## Sitemap
${baseUrl}/sitemap.xml

## Contact
For API questions or data corrections:
hello@dinecastlerock.com
`

    return new NextResponse(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    })
}

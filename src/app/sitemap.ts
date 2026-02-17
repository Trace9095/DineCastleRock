import type { MetadataRoute } from 'next'
import { LISTINGS, CATEGORIES } from '@/lib/data'

// Define guides that exist on the site (must match guides/[slug]/page.tsx)
const GUIDES = [
    { slug: 'date-night' },
    { slug: 'happy-hour' },
    { slug: 'family-friendly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dinecastlerock.co'
    const now = new Date()

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/advertise`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/add-listing`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/editorial-policy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/things-to-do`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]

    // Category pages
    const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
        url: `${baseUrl}/${category.slug}`,
        lastModified: now,
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }))

    // Listing pages
    const listingPages: MetadataRoute.Sitemap = LISTINGS.map((listing) => ({
        url: `${baseUrl}/listing/${listing.slug}`,
        lastModified: listing.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: listing.isPremium ? 0.9 : 0.8,
    }))

    // Guide pages
    const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [
        ...staticPages,
        ...categoryPages,
        ...listingPages,
        ...guidePages,
    ]
}

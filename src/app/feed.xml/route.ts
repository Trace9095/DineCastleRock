import { LISTINGS, CATEGORIES } from '@/lib/data'

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://dinecastlerock.co'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  // Featured and premium listings first
  const sortedListings = [...LISTINGS].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1
    if (!a.isFeatured && b.isFeatured) return 1
    if (a.isPremium && !b.isPremium) return -1
    if (!a.isPremium && b.isPremium) return 1
    return 0
  })

  const rssItems = sortedListings
    .map((listing) => {
      const link = `${BASE_URL}/listing/${listing.slug}`
      const category = CATEGORIES.find((c) => c.slug === listing.categorySlug)
      const categoryName = category ? category.name : listing.cuisine
      const image = listing.image
        ? listing.image.startsWith('http')
          ? listing.image
          : `${BASE_URL}${listing.image}`
        : ''
      const pubDate = listing.updatedAt
        ? new Date(listing.updatedAt).toUTCString()
        : new Date().toUTCString()

      return `
    <item>
      <title><![CDATA[${listing.name}]]></title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description><![CDATA[${listing.description}]]></description>
      <category>${escapeXml(categoryName)}</category>
      <pubDate>${pubDate}</pubDate>
      ${image ? `<enclosure url="${escapeXml(image)}" type="image/jpeg" />` : ''}
    </item>`
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DineCastleRock - Castle Rock Dining &amp; Restaurant Directory</title>
    <link>${BASE_URL}</link>
    <description>Discover the best restaurants, breweries, cafes, and dining experiences in Castle Rock, Colorado.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

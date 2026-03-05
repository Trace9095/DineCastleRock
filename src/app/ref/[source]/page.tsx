import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { referralSources, validSourceIds } from '@/data/referral-sources'
import { ReferralLanding } from '@/components/shared/ReferralLanding'

const SITE_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'https://dinecastlerock.co'

/**
 * Generate all valid referral routes at build time (SSG).
 * Each slug in referralSources becomes a static page under /ref/[source].
 *
 * NOTE: Route is /ref/[source] (not /[source]) to avoid conflict with
 * the existing (directory)/[category] dynamic route that handles
 * /restaurants, /breweries, etc. at the root URL level.
 */
export async function generateStaticParams() {
  return validSourceIds.map((source) => ({ source }))
}

/**
 * Dynamic metadata per referral source.
 * Referral pages are noindex (don't pollute organic search)
 * but follow links to allow crawlers to discover the main site.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ source: string }>
}): Promise<Metadata> {
  const { source: sourceId } = await params
  const source = referralSources[sourceId]

  if (!source) {
    return { title: 'Not Found' }
  }

  return {
    title: `${source.gaPageTitle} | DineCastleRock`,
    description: source.subtitle,
    robots: { index: false, follow: true },
    openGraph: {
      title: `Welcome from ${source.name} | DineCastleRock`,
      description:
        "Castle Rock's complete restaurant guide — 100+ restaurants, breweries, cafes, and more across 17 categories.",
      url: `${SITE_URL}/ref/${sourceId}`,
      siteName: 'DineCastleRock',
      type: 'website',
    },
  }
}

export default async function ReferralPage({
  params,
}: {
  params: Promise<{ source: string }>
}) {
  const { source: sourceId } = await params
  const source = referralSources[sourceId]

  if (!source) {
    notFound()
  }

  return <ReferralLanding source={source} />
}

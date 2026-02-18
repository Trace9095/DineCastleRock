'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { hasConsentChoice, isCategoryConsented } from '@/lib/cookie-consent'

export function ConsentAwareAnalytics() {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    if (hasConsentChoice() && isCategoryConsented('analytics')) {
      setAllowed(true)
    }

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      setAllowed(detail?.analytics === true)
    }
    window.addEventListener('cookie-consent-updated', handler)
    return () => window.removeEventListener('cookie-consent-updated', handler)
  }, [])

  if (!allowed) return null

  return (
    <>
      <Analytics />
      <Script src="/analytics.js" strategy="afterInteractive" />
    </>
  )
}

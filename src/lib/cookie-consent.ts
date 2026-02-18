export type CookieCategory = 'essential' | 'analytics' | 'marketing'

export interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  timestamp: string
}

const STORAGE_KEY = 'dinecr-cookie-consent'

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  timestamp: '',
}

export function getConsentPreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    return JSON.parse(stored)
  } catch {
    return null
  }
}

export function setConsentPreferences(prefs: Partial<CookiePreferences>): void {
  if (typeof window === 'undefined') return
  const current = getConsentPreferences() || { ...defaultPreferences }
  const updated: CookiePreferences = {
    ...current,
    ...prefs,
    essential: true,
    timestamp: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: updated }))
}

export function acceptAll(): void {
  setConsentPreferences({ analytics: true, marketing: true })
}

export function acceptEssentialOnly(): void {
  setConsentPreferences({ analytics: false, marketing: false })
}

export function hasConsentChoice(): boolean {
  return getConsentPreferences() !== null
}

export function isCategoryConsented(category: CookieCategory): boolean {
  if (category === 'essential') return true
  const prefs = getConsentPreferences()
  if (!prefs) return false
  return prefs[category] ?? false
}

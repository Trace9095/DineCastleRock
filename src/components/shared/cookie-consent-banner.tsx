'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Shield, ChevronDown, ChevronUp } from 'lucide-react'
import {
  hasConsentChoice,
  acceptAll,
  acceptEssentialOnly,
  setConsentPreferences,
  type CookiePreferences,
} from '@/lib/cookie-consent'

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!hasConsentChoice()) {
      previousFocusRef.current = document.activeElement as HTMLElement
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (visible && bannerRef.current) {
      bannerRef.current.focus()
    }
  }, [visible])

  const dismiss = useCallback(() => {
    setVisible(false)
    previousFocusRef.current?.focus()
  }, [])

  const handleAcceptAll = () => {
    acceptAll()
    dismiss()
  }

  const handleEssentialOnly = () => {
    acceptEssentialOnly()
    dismiss()
  }

  const handleSaveChoices = () => {
    setConsentPreferences({ analytics, marketing } as Partial<CookiePreferences>)
    dismiss()
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-500"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
    >
      <div
        ref={bannerRef}
        tabIndex={-1}
        className="w-full max-w-2xl mx-4 mb-6 bg-[#0a0a14]/95 border border-[#E85D2B]/20 rounded-2xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-500 focus:outline-none"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 bg-[#E85D2B]/10 rounded-xl flex-shrink-0">
            <Shield className="h-5 w-5 text-[#E85D2B]" />
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg">We Value Your Privacy</h2>
            <p className="text-white/70 text-sm mt-1 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Choose your preferences below.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 text-[#E85D2B] text-sm mb-4 hover:text-[#f0845a] transition-colors"
        >
          {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {showDetails ? 'Hide details' : 'Customize choices'}
        </button>

        {showDetails && (
          <div className="space-y-3 mb-4 p-4 bg-white/5 rounded-xl border border-white/10">
            <label className="flex items-center justify-between">
              <div>
                <span className="text-white text-sm font-medium">Essential</span>
                <p className="text-white/70 text-xs">Required for the site to function</p>
              </div>
              <div className="px-3 py-1 bg-[#E85D2B]/20 text-[#E85D2B] text-xs rounded-full">Always on</div>
            </label>

            <label className="flex items-center justify-between cursor-pointer group">
              <div>
                <span className="text-white text-sm font-medium group-hover:text-[#E85D2B] transition-colors">Analytics</span>
                <p className="text-white/70 text-xs">Help us understand how visitors use our site</p>
              </div>
              <button
                role="switch"
                aria-checked={analytics}
                onClick={() => setAnalytics(!analytics)}
                className={`relative w-11 h-6 rounded-full transition-colors ${analytics ? 'bg-[#E85D2B]' : 'bg-white/20'}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${analytics ? 'translate-x-5' : ''}`} />
              </button>
            </label>

            <label className="flex items-center justify-between cursor-pointer group">
              <div>
                <span className="text-white text-sm font-medium group-hover:text-[#E85D2B] transition-colors">Marketing</span>
                <p className="text-white/70 text-xs">Personalized content and advertisements</p>
              </div>
              <button
                role="switch"
                aria-checked={marketing}
                onClick={() => setMarketing(!marketing)}
                className={`relative w-11 h-6 rounded-full transition-colors ${marketing ? 'bg-[#E85D2B]' : 'bg-white/20'}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${marketing ? 'translate-x-5' : ''}`} />
              </button>
            </label>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-5 py-2.5 bg-[#C04E20] hover:bg-[#A84118] text-white font-semibold text-sm rounded-xl transition-colors"
          >
            Accept All
          </button>
          {showDetails && (
            <button
              onClick={handleSaveChoices}
              className="flex-1 px-5 py-2.5 border border-[#E85D2B]/30 hover:bg-[#E85D2B]/10 text-white font-semibold text-sm rounded-xl transition-colors"
            >
              Save My Choices
            </button>
          )}
          <button
            onClick={handleEssentialOnly}
            className="px-5 py-2.5 text-white/60 hover:text-white text-sm transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  )
}

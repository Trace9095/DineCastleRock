'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/* =========================================================
   AnimatedCounter
   Counts from 0 → value with ease-out-cubic when scrolled
   into view via IntersectionObserver + rAF.
========================================================= */

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()

          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out-cubic: 1 - (1 - t)^3
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(eased * value))

            if (progress < 1) {
              requestAnimationFrame(tick)
            }
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

/* =========================================================
   TextShimmer
   Animated gradient text sweep.
========================================================= */

interface TextShimmerProps {
  children: ReactNode
  className?: string
  colors?: string[]
}

export function TextShimmer({
  children,
  className = '',
  colors = ['#C04E20', '#f59e0b', '#C04E20', '#f59e0b'],
}: TextShimmerProps) {
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '400% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'textShimmer 4s linear infinite',
      }}
    >
      {children}
    </span>
  )
}

/* =========================================================
   ScrollReveal
   Fades in + slides up when scrolled into view.
   Uses inline styles for transitions (no Tailwind keyframes).
========================================================= */

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReduced) {
      // Reduced motion: show content immediately without animation
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: need to show content for a11y
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

/* =========================================================
   GlowBadge
   Pulsing glow badge using CSS animation.
========================================================= */

interface GlowBadgeProps {
  children: ReactNode
  className?: string
}

export function GlowBadge({ children, className = '' }: GlowBadgeProps) {
  return (
    <span
      className={`inline-flex items-center animate-glow-pulse ${className}`}
    >
      {children}
    </span>
  )
}

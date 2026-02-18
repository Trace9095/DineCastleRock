"use client"

import { Search, MapPin, Utensils, Wine, Coffee, Beer, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

const QUICK_LINKS = [
    { label: "Restaurants", href: "/restaurants", icon: Utensils },
    { label: "Bars", href: "/bars-nightlife", icon: Wine },
    { label: "Coffee", href: "/coffee", icon: Coffee },
    { label: "Breweries", href: "/breweries", icon: Beer },
]

export function Hero() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("")
    const [isFocused, setIsFocused] = useState(false)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/restaurants?q=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    return (
        <section className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-[#0a0a14] bg-[url('/images/hero-main.jpg')] bg-cover bg-center scale-105"
                    style={{ transform: 'scale(1.05)' }}
                />
                {/* Multi-layer gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/40 via-[#0a0a14]/30 to-[#0a0a14]/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/30 via-transparent to-[#0a0a14]/30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,20,0.4)_100%)]" />
            </div>

            {/* Decorative accent blurs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#E85D2B]/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#E85D2B]/5 rounded-full blur-3xl opacity-40" />

            {/* Content */}
            <div className="relative z-10 container px-4 max-w-5xl text-center">
                {/* Location Badge */}
                <div className="animate-fade-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E85D2B]/20">
                            <MapPin className="h-3.5 w-3.5 text-[#E85D2B]" />
                        </div>
                        <span className="text-sm font-medium text-white/90 tracking-wide">Castle Rock, Colorado</span>
                        <Sparkles className="h-3.5 w-3.5 text-[#E85D2B]/70" />
                    </div>
                </div>

                {/* Main Heading */}
                <div className="animate-fade-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Discover Local
                        <span className="block mt-2 bg-gradient-to-r from-[#E85D2B] via-orange-400 to-amber-400 bg-clip-text text-transparent">
                            Dining Excellence
                        </span>
                    </h1>
                </div>

                <div className="animate-fade-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Your curated guide to the best restaurants, bars, cafes, and breweries in Castle Rock
                    </p>
                </div>

                {/* Search Bar - Dark glass */}
                <div className="animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                    <form
                        onSubmit={handleSearch}
                        className={`
                            relative max-w-2xl mx-auto mb-10
                            bg-white/10 backdrop-blur-xl rounded-2xl
                            border border-white/10
                            transition-all duration-500 ease-out
                            ${isFocused ? 'border-[#E85D2B]/30 shadow-lg shadow-[#E85D2B]/10 scale-[1.02]' : 'hover:border-white/20'}
                        `}
                    >
                        <div className="flex items-center p-2">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 ml-1">
                                <Search className="h-5 w-5 text-white/40" />
                            </div>
                            <Input
                                type="text"
                                placeholder="Search restaurants, cuisines, or dishes..."
                                className="border-0 bg-transparent text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 h-14 text-base font-medium"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />
                            <Button
                                type="submit"
                                className="rounded-xl px-8 h-12 font-semibold shadow-lg bg-[#E85D2B] text-white hover:bg-[#E85D2B]/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#E85D2B]/20"
                            >
                                <span className="hidden sm:inline">Search</span>
                                <ChevronRight className="h-5 w-5 sm:hidden" />
                            </Button>
                        </div>
                        {/* Subtle glow effect */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#E85D2B]/20 blur-2xl rounded-full opacity-0 transition-opacity duration-300" style={{ opacity: isFocused ? 0.6 : 0 }} />
                    </form>
                </div>

                {/* Quick Links */}
                <div className="animate-fade-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
                    <div className="flex flex-wrap justify-center gap-3">
                        {QUICK_LINKS.map((link, index) => {
                            const Icon = link.icon
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-[#E85D2B]/30 hover:scale-105"
                                    style={{ animationDelay: `${500 + index * 50}ms` }}
                                >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#E85D2B]/20 transition-colors duration-300">
                                        <Icon className="h-4 w-4 text-white/60 group-hover:text-[#E85D2B] transition-colors duration-300" />
                                    </div>
                                    <span className="text-sm tracking-wide">{link.label}</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E85D2B]" />
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* Stats */}
                <div className="animate-fade-up opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards]">
                    <div className="mt-16 flex items-center justify-center gap-8 text-white/40 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#E85D2B]">50+</span>
                            <span>Local Spots</span>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#E85D2B]">4.8</span>
                            <span>Avg Rating</span>
                        </div>
                        <div className="w-px h-8 bg-white/10 hidden sm:block" />
                        <div className="hidden sm:flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#E85D2B]">100%</span>
                            <span>Local</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Fade to dark bg */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/80 to-transparent z-10" />

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-fade-up opacity-0 [animation-delay:900ms] [animation-fill-mode:forwards]">
                <div className="flex flex-col items-center gap-2 text-white/30">
                    <span className="text-xs tracking-widest uppercase">Explore</span>
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
                        <div className="w-1.5 h-3 bg-[#E85D2B]/50 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    )
}

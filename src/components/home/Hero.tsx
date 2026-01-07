"use client"

import { Search, MapPin, Utensils, Wine, Coffee, Beer } from "lucide-react"
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

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/restaurants?q=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    return (
        <section className="relative min-h-[600px] md:min-h-[650px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-stone-900 bg-[url('/images/hero-main.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/60 to-stone-900/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 container px-4 max-w-4xl text-center">
                {/* Location Badge */}
                <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-white">Castle Rock, Colorado</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                    Discover Local
                    <span className="block text-primary mt-1">Dining Excellence</span>
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                    Your guide to the best restaurants, bars, cafes, and breweries in Castle Rock
                </p>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="bg-white shadow-2xl rounded-2xl p-2 max-w-2xl mx-auto flex items-center mb-8">
                    <Search className="ml-3 h-5 w-5 text-muted-foreground shrink-0" />
                    <Input
                        type="text"
                        placeholder="Search restaurants, cuisines, or dishes..."
                        className="border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 h-12 text-base"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button
                        type="submit"
                        className="rounded-xl px-6 h-10 font-semibold shadow-md"
                    >
                        Search
                    </Button>
                </form>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-3">
                    {QUICK_LINKS.map((link) => {
                        const Icon = link.icon
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                            >
                                <Icon className="h-4 w-4" />
                                {link.label}
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    )
}

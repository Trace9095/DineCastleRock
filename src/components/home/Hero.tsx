"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

const QUICK_TAGS = [
    { label: "Date Night", href: "/guides/date-night" },
    { label: "Happy Hour", href: "/guides/happy-hour" },
    { label: "Breweries", href: "/breweries" },
    { label: "Coffee", href: "/coffee" },
    { label: "Bars", href: "/bars-nightlife" },
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
        <section className="relative h-[520px] md:h-[560px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-zinc-900 bg-[url('/images/home-hero.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-zinc-900/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 container px-4 max-w-3xl text-center space-y-6">
                <div className="space-y-3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                        Taste the Elevation
                    </h1>
                    <p className="text-base md:text-lg text-zinc-200 max-w-xl mx-auto">
                        Discover the best restaurants, bars, and cafes in Castle Rock, Colorado.
                    </p>
                </div>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-md border border-white/20 p-1.5 rounded-full max-w-xl mx-auto flex items-center">
                    <Search className="ml-3 h-5 w-5 text-white/60 shrink-0" />
                    <Input
                        type="text"
                        placeholder="Search restaurants, cuisines..."
                        className="border-0 bg-transparent text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 text-sm md:text-base"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button
                        type="submit"
                        size="sm"
                        className="rounded-full px-5 bg-white text-zinc-900 hover:bg-zinc-100 font-medium h-9"
                    >
                        Search
                    </Button>
                </form>

                {/* Quick Tags */}
                <div className="flex flex-wrap justify-center gap-2 pt-1">
                    {QUICK_TAGS.map((tag) => (
                        <Link
                            key={tag.label}
                            href={tag.href}
                            className="px-3 py-1.5 text-sm rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                        >
                            {tag.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

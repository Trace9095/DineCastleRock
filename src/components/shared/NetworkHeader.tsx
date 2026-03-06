"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, X, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function NetworkHeader() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const isHome = pathname === "/"

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-500",
                scrolled || !isHome
                    ? "bg-[#0a0a14]/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="container flex h-16 lg:h-18 items-center justify-between px-4 max-w-7xl mx-auto">
                {/* Logo */}
                {isHome ? (
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
                        <div className={cn(
                            "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                            scrolled || !isHome
                                ? "bg-[#E85D2B] shadow-lg shadow-[#E85D2B]/20"
                                : "bg-white/10 backdrop-blur-md"
                        )}>
                            <Utensils className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white">
                            Dine <span className="text-[#E85D2B]">Castle Rock</span>
                        </span>
                    </button>
                ) : (
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className={cn(
                            "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                            scrolled || !isHome
                                ? "bg-[#E85D2B] shadow-lg shadow-[#E85D2B]/20"
                                : "bg-white/10 backdrop-blur-md"
                        )}>
                            <Utensils className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white">
                            Dine <span className="text-[#E85D2B]">Castle Rock</span>
                        </span>
                    </Link>
                )}

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    <Link href="/restaurants" className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        Restaurants
                    </Link>
                    <Link href="/bars-nightlife" className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        Bars
                    </Link>
                    <Link href="/coffee" className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        Coffee
                    </Link>
                    <Link href="/breweries" className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        Breweries
                    </Link>
                    <Link href="/guides" className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        Guides
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-white/60 hover:text-white hover:bg-white/5" asChild>
                        <Link href="/restaurants" aria-label="Search">
                            <Search className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="sm" className="hidden sm:inline-flex h-9 rounded-full px-5 font-semibold bg-[#C04E20] text-white hover:bg-[#A84118] hover:scale-105 transition-all shadow-lg shadow-[#C04E20]/20" asChild>
                        <Link href="/add-listing">
                            Add Listing
                        </Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-full md:hidden text-white hover:bg-white/10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/5 bg-[#12121a]/95 backdrop-blur-xl">
                    <nav className="container px-4 py-4 space-y-1 max-w-7xl mx-auto">
                        <Link href="/restaurants" className="flex items-center px-4 py-3 text-sm font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Restaurants
                        </Link>
                        <Link href="/bars-nightlife" className="flex items-center px-4 py-3 text-sm font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Bars & Nightlife
                        </Link>
                        <Link href="/coffee" className="flex items-center px-4 py-3 text-sm font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Coffee
                        </Link>
                        <Link href="/breweries" className="flex items-center px-4 py-3 text-sm font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Breweries
                        </Link>
                        <Link href="/guides" className="flex items-center px-4 py-3 text-sm font-medium text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Guides
                        </Link>
                        <div className="pt-3 mt-3 border-t border-white/5 space-y-1">
                            <p className="px-4 text-xs font-medium text-[#E85D2B] uppercase tracking-wider mb-2">Castle Rock Network</p>
                            <a href="https://visitcastlerock.co" className="flex items-center px-4 py-3 text-sm text-white/70 rounded-xl hover:text-[#0EA5E9] hover:bg-white/5 transition-colors">
                                Visit Castle Rock
                            </a>
                            <a href="https://shopcastlerock.co" className="flex items-center px-4 py-3 text-sm text-white/70 rounded-xl hover:text-[#D4A853] hover:bg-white/5 transition-colors">
                                Shop Castle Rock
                            </a>
                        </div>
                        <div className="pt-3">
                            <Button className="w-full rounded-full h-11 font-semibold bg-[#C04E20] text-white hover:bg-[#A84118] shadow-lg shadow-[#C04E20]/20" asChild>
                                <Link href="/add-listing" onClick={() => setMobileMenuOpen(false)}>
                                    Add Your Business
                                </Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}

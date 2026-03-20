"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Utensils, Compass, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
    { label: "Restaurants", href: "/restaurants" },
    { label: "Bars", href: "/bars-nightlife" },
    { label: "Coffee", href: "/coffee" },
    { label: "Breweries", href: "/breweries" },
    { label: "Guides", href: "/guides" },
]

export function NetworkHeader() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const isHome = pathname === "/"

    // Body scroll lock for mobile menu — iOS-safe approach
    useEffect(() => {
        if (mobileMenuOpen) {
            const scrollY = window.scrollY
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = '100%'
        } else {
            const scrollY = document.body.style.top
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
            if (scrollY) window.scrollTo(0, -parseInt(scrollY, 10))
        }
        return () => {
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
        }
    }, [mobileMenuOpen])

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 z-50 w-full will-change-transform transition-[background-color,border-color,box-shadow] duration-300",
                    scrolled || !isHome
                        ? "bg-[#0a0a14] border-b border-white/5 shadow-lg"
                        : "bg-transparent border-b border-transparent"
                )}
            >
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 lg:h-20 items-center justify-between">
                        {/* Logo */}
                        {isHome ? (
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                aria-label="Dine Castle Rock Home"
                                className="flex items-center gap-2.5 group"
                            >
                                <div className={cn(
                                    "flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-300",
                                    scrolled || !isHome
                                        ? "bg-[#E85D2B] shadow-lg shadow-[#E85D2B]/20"
                                        : "bg-white/10"
                                )}>
                                    <Utensils className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Dine <span className="text-[#E85D2B]">Castle Rock</span>
                                </span>
                            </button>
                        ) : (
                            <Link href="/" aria-label="Dine Castle Rock Home" className="flex items-center gap-2.5 group">
                                <div className={cn(
                                    "flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-300",
                                    scrolled || !isHome
                                        ? "bg-[#E85D2B] shadow-lg shadow-[#E85D2B]/20"
                                        : "bg-white/10"
                                )}>
                                    <Utensils className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Dine <span className="text-[#E85D2B]">Castle Rock</span>
                                </span>
                            </Link>
                        )}

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                                        pathname === item.href || pathname.startsWith(item.href + "/")
                                            ? "bg-[#E85D2B] text-white shadow-lg shadow-[#E85D2B]/20"
                                            : "text-white/70 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Network Links */}
                            <span className="mx-3 h-5 w-px bg-white/10" />
                            <a
                                href="https://visitcastlerock.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2.5 text-sm text-white/60 hover:text-[#0EA5E9] transition-colors"
                            >
                                Visit
                            </a>
                            <a
                                href="https://shopcastlerock.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2.5 text-sm text-white/60 hover:text-[#D4A853] transition-colors"
                            >
                                Shop
                            </a>
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            <Link href="/add-listing" className="hidden sm:inline-flex">
                                <Button className="rounded-full px-6 h-10 font-semibold bg-[#C04E20] text-white hover:bg-[#A84118] hover:scale-105 transition-all shadow-lg shadow-[#C04E20]/20">
                                    Add Listing
                                </Button>
                            </Link>

                            {/* Mobile Menu Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden rounded-full w-11 h-11 text-white hover:bg-white/10"
                                onClick={() => setMobileMenuOpen(true)}
                                aria-label="Toggle menu"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="fixed inset-0 bg-black/80"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#12121a] shadow-2xl">
                        <div className="flex items-center justify-between p-5 border-b border-white/5">
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E85D2B]">
                                    <Utensils className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Dine <span className="text-[#E85D2B]">Castle Rock</span>
                                </span>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full w-11 h-11 text-white hover:bg-white/10"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <nav className="p-5 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
                            <p className="text-xs font-semibold text-[#E85D2B] uppercase tracking-wider mb-4 px-2">
                                Explore
                            </p>
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300",
                                        pathname === item.href || pathname.startsWith(item.href + "/")
                                            ? "bg-[#E85D2B]/20 text-white"
                                            : "text-white/70 hover:bg-white/5"
                                    )}
                                >
                                    <span className="font-semibold">{item.label}</span>
                                    <ArrowRight className="h-4 w-4 opacity-50 ml-auto" />
                                </Link>
                            ))}

                            <div className="h-px bg-white/5 my-4" />

                            <p className="text-xs font-semibold text-[#E85D2B] uppercase tracking-wider mb-4 px-2">
                                Castle Rock Network
                            </p>
                            <a
                                href="https://visitcastlerock.co"
                                className="flex items-center gap-4 px-4 py-4 rounded-2xl text-white/60 hover:bg-white/5 transition-all"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0EA5E9]/10">
                                    <Compass className="h-5 w-5 text-[#0EA5E9]" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-white/80">Visit Castle Rock</p>
                                    <p className="text-sm text-white/60">Attractions & events</p>
                                </div>
                            </a>
                            <a
                                href="https://shopcastlerock.co"
                                className="flex items-center gap-4 px-4 py-4 rounded-2xl text-white/60 hover:bg-white/5 transition-all"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A853]/10">
                                    <ShoppingBag className="h-5 w-5 text-[#D4A853]" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-white/80">Shop Castle Rock</p>
                                    <p className="text-sm text-white/60">Local shops & services</p>
                                </div>
                            </a>

                            <div className="h-px bg-white/5 my-4" />

                            <Link
                                href="/add-listing"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#C04E20] text-white font-semibold shadow-lg shadow-[#C04E20]/20 transition-all hover:scale-[1.02] active:scale-100"
                            >
                                Add Your Business
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}

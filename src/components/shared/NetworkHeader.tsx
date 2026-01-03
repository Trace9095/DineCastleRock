"use client"

import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function NetworkHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="container flex h-14 items-center justify-between px-4 max-w-7xl mx-auto">
                {/* Logo - Always visible */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-bold text-lg tracking-tight">Dine Castle Rock</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    <a
                        href="https://visitcastlerock.co"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                    >
                        Visit
                    </a>
                    <Link
                        href="/restaurants"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                    >
                        Restaurants
                    </Link>
                    <Link
                        href="/bars-nightlife"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                    >
                        Bars
                    </Link>
                    <Link
                        href="/coffee"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                    >
                        Coffee
                    </Link>
                    <Link
                        href="/guides"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                    >
                        Guides
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                        <Link href="/restaurants" aria-label="Search">
                            <Search className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="sm" className="hidden sm:inline-flex h-9" asChild>
                        <Link href="/add-listing">
                            Add Listing
                        </Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="container px-4 py-4 space-y-1 max-w-7xl mx-auto">
                        <Link
                            href="/restaurants"
                            className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Restaurants
                        </Link>
                        <Link
                            href="/bars-nightlife"
                            className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Bars & Nightlife
                        </Link>
                        <Link
                            href="/coffee"
                            className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Coffee
                        </Link>
                        <Link
                            href="/breweries"
                            className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Breweries
                        </Link>
                        <Link
                            href="/guides"
                            className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Guides
                        </Link>
                        <div className="pt-2 border-t mt-2">
                            <a
                                href="https://visitcastlerock.co"
                                className="block px-3 py-2.5 text-sm text-muted-foreground rounded-md hover:bg-accent transition-colors"
                            >
                                Visit Castle Rock
                            </a>
                            <a
                                href="https://shopcastlerock.co"
                                className="block px-3 py-2.5 text-sm text-muted-foreground rounded-md hover:bg-accent transition-colors"
                            >
                                Shop Castle Rock
                            </a>
                        </div>
                        <div className="pt-2">
                            <Button className="w-full" asChild>
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

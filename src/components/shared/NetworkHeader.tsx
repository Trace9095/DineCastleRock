"use client"

import Link from "next/link"
import { Search, Menu, X, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function NetworkHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
            <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Utensils className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">Dine Castle Rock</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    <Link
                        href="/restaurants"
                        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
                    >
                        Restaurants
                    </Link>
                    <Link
                        href="/bars-nightlife"
                        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
                    >
                        Bars
                    </Link>
                    <Link
                        href="/coffee"
                        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
                    >
                        Coffee
                    </Link>
                    <Link
                        href="/breweries"
                        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
                    >
                        Breweries
                    </Link>
                    <Link
                        href="/guides"
                        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
                    >
                        Guides
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                        <Link href="/restaurants" aria-label="Search">
                            <Search className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="sm" className="hidden sm:inline-flex h-9 rounded-full px-4 font-medium" asChild>
                        <Link href="/add-listing">
                            Add Listing
                        </Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-full md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t bg-background/98 backdrop-blur-md">
                    <nav className="container px-4 py-4 space-y-1 max-w-7xl mx-auto">
                        <Link
                            href="/restaurants"
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-xl hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Restaurants
                        </Link>
                        <Link
                            href="/bars-nightlife"
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-xl hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Bars & Nightlife
                        </Link>
                        <Link
                            href="/coffee"
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-xl hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Coffee
                        </Link>
                        <Link
                            href="/breweries"
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-xl hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Breweries
                        </Link>
                        <Link
                            href="/guides"
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-xl hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Guides
                        </Link>
                        <div className="pt-3 mt-3 border-t space-y-1">
                            <a
                                href="https://visitcastlerock.co"
                                className="flex items-center px-4 py-3 text-sm text-muted-foreground rounded-xl hover:bg-accent transition-colors"
                            >
                                Visit Castle Rock
                            </a>
                            <a
                                href="https://shopcastlerock.co"
                                className="flex items-center px-4 py-3 text-sm text-muted-foreground rounded-xl hover:bg-accent transition-colors"
                            >
                                Shop Castle Rock
                            </a>
                        </div>
                        <div className="pt-3">
                            <Button className="w-full rounded-xl h-11 font-medium" asChild>
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

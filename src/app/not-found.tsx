"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Utensils, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
            <div className="text-center max-w-md mx-auto space-y-6">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Utensils className="w-10 h-10 text-primary" />
                </div>

                {/* Error Code */}
                <div className="space-y-2">
                    <p className="text-7xl font-bold text-primary">404</p>
                    <h1 className="text-2xl font-bold tracking-tight">Page Not Found</h1>
                    <p className="text-muted-foreground">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for.
                        It may have been moved or no longer exists.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Button asChild>
                        <Link href="/">
                            <Home className="w-4 h-4 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/restaurants">
                            <Search className="w-4 h-4 mr-2" />
                            Browse Restaurants
                        </Link>
                    </Button>
                </div>

                {/* Back Link */}
                <div className="pt-4">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Go back
                    </button>
                </div>

                {/* Helpful Links */}
                <div className="pt-8 border-t">
                    <p className="text-sm text-muted-foreground mb-4">Popular pages:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Link href="/restaurants" className="text-sm px-3 py-1.5 rounded-full bg-muted hover:bg-accent transition-colors">
                            Restaurants
                        </Link>
                        <Link href="/bars-nightlife" className="text-sm px-3 py-1.5 rounded-full bg-muted hover:bg-accent transition-colors">
                            Bars
                        </Link>
                        <Link href="/coffee" className="text-sm px-3 py-1.5 rounded-full bg-muted hover:bg-accent transition-colors">
                            Coffee
                        </Link>
                        <Link href="/guides" className="text-sm px-3 py-1.5 rounded-full bg-muted hover:bg-accent transition-colors">
                            Guides
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

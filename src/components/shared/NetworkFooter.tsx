import Link from "next/link"
import { Utensils } from "lucide-react"

export function NetworkFooter() {
    return (
        <footer className="w-full border-t bg-card">
            <div className="container px-4 py-12 md:py-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <Utensils className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-lg tracking-tight">Dine Castle Rock</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your guide to the best restaurants, bars, and cafes in Castle Rock, Colorado.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Explore</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/restaurants" className="text-foreground/80 hover:text-primary transition-colors">Restaurants</Link></li>
                            <li><Link href="/bars-nightlife" className="text-foreground/80 hover:text-primary transition-colors">Bars & Nightlife</Link></li>
                            <li><Link href="/coffee" className="text-foreground/80 hover:text-primary transition-colors">Coffee</Link></li>
                            <li><Link href="/breweries" className="text-foreground/80 hover:text-primary transition-colors">Breweries</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">For Businesses</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/add-listing" className="text-foreground/80 hover:text-primary transition-colors">Add Your Business</Link></li>
                            <li><Link href="/advertise" className="text-foreground/80 hover:text-primary transition-colors">Advertise</Link></li>
                            <li><Link href="/guides" className="text-foreground/80 hover:text-primary transition-colors">Guides</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Network</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="https://visitcastlerock.co" className="text-foreground/80 hover:text-primary transition-colors">Visit Castle Rock</a></li>
                            <li><a href="https://shopcastlerock.co" className="text-foreground/80 hover:text-primary transition-colors">Shop Castle Rock</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Castle Rock Network. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-muted-foreground">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                        <Link href="/editorial-policy" className="hover:text-foreground transition-colors">Editorial Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

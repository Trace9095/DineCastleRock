import Link from "next/link"

export function NetworkFooter() {
    return (
        <footer className="w-full border-t bg-background/50 backdrop-blur-sm">
            <div className="container px-4 py-8 md:py-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <span className="text-lg font-bold tracking-tight">Dine Castle Rock</span>
                        <p className="text-sm text-muted-foreground">
                            The premier dining guide for Castle Rock, Colorado. Discover the best restaurants, bars, and cafes.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Network</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="https://visitcastlerock.co" className="hover:text-foreground transition-colors">Visit Castle Rock</a></li>
                            <li><Link href="/" className="text-foreground">Dine Castle Rock</Link></li>
                            <li><a href="https://shopcastlerock.co" className="hover:text-foreground transition-colors">Shop Castle Rock</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">For Businesses</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/add-listing" className="hover:text-foreground transition-colors">Add Business</Link></li>
                            <li><Link href="/advertise" className="hover:text-foreground transition-colors">Advertise</Link></li>
                            <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link href="/editorial-policy" className="hover:text-foreground transition-colors">Editorial Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Castle Rock Network. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

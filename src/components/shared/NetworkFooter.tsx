import Link from "next/link"
import { Utensils, Compass, ShoppingBag, Mail } from "lucide-react"

export function NetworkFooter() {
    return (
        <footer className="w-full bg-[#08080e] border-t border-white/5">
            <div className="container px-4 py-12 md:py-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-[#E85D2B]/10 flex items-center justify-center">
                                <Utensils className="h-4 w-4 text-[#E85D2B]" />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-white">
                                Dine <span className="text-[#E85D2B]">Castle Rock</span>
                            </span>
                        </Link>
                        <p className="text-sm text-white/60 leading-relaxed">
                            Your guide to the best restaurants, bars, and cafes in Castle Rock, Colorado.
                        </p>
                        <a href="mailto:hello@dinecastlerock.co" className="flex items-center gap-2 text-sm text-white/50 hover:text-[#E85D2B] transition-colors">
                            <Mail className="h-3.5 w-3.5" />
                            hello@dinecastlerock.co
                        </a>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#E85D2B] uppercase tracking-wider mb-4">Explore</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/restaurants" className="text-white/50 hover:text-[#E85D2B] transition-colors">Restaurants</Link></li>
                            <li><Link href="/bars-nightlife" className="text-white/50 hover:text-[#E85D2B] transition-colors">Bars & Nightlife</Link></li>
                            <li><Link href="/coffee" className="text-white/50 hover:text-[#E85D2B] transition-colors">Coffee</Link></li>
                            <li><Link href="/breweries" className="text-white/50 hover:text-[#E85D2B] transition-colors">Breweries</Link></li>
                        </ul>
                    </div>

                    {/* For Businesses */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#E85D2B] uppercase tracking-wider mb-4">For Businesses</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/add-listing" className="text-white/50 hover:text-[#E85D2B] transition-colors">Add Your Business</Link></li>
                            <li><Link href="/advertise" className="text-white/50 hover:text-[#E85D2B] transition-colors">Advertise</Link></li>
                            <li><Link href="/guides" className="text-white/50 hover:text-[#E85D2B] transition-colors">Guides</Link></li>
                        </ul>
                    </div>

                    {/* Network */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#E85D2B] uppercase tracking-wider mb-4">Castle Rock Network</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="https://visitcastlerock.co" className="flex items-center gap-2 text-white/50 hover:text-[#0EA5E9] transition-colors">
                                    <Compass className="h-3.5 w-3.5" />
                                    Visit Castle Rock
                                </a>
                            </li>
                            <li>
                                <a href="https://shopcastlerock.co" className="flex items-center gap-2 text-white/50 hover:text-[#D4A853] transition-colors">
                                    <ShoppingBag className="h-3.5 w-3.5" />
                                    Shop Castle Rock
                                </a>
                            </li>
                            <li>
                                <span className="flex items-center gap-2 text-[#E85D2B]">
                                    <Utensils className="h-3.5 w-3.5" />
                                    Dine Castle Rock
                                    <span className="text-xs text-white/20">(You are here)</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/50">
                        &copy; {new Date().getFullYear()} Castle Rock Network. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-white/50">
                        <Link href="/privacy" className="hover:text-[#E85D2B] transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-[#E85D2B] transition-colors">Terms</Link>
                        <Link href="/accessibility" className="hover:text-[#E85D2B] transition-colors">Accessibility</Link>
                        <Link href="/editorial-policy" className="hover:text-[#E85D2B] transition-colors">Editorial Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

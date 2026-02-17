import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Star, TrendingUp, Users, Mail, MapPin, Megaphone } from "lucide-react"
import Link from "next/link"

export default function AdvertisePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-zinc-900 text-white py-20">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Partner With Us</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Reach Castle Rock Diners
                    </h1>
                    <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-8">
                        Connect with locals and visitors actively searching for dining experiences.
                        Promote your restaurant, bar, or café to our engaged community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100" asChild>
                            <a href="mailto:advertise@dinecastlerock.com">Get Started</a>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                            <a href="mailto:advertise@dinecastlerock.com?subject=Media%20Kit%20Request">
                                Request Media Kit
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="border-b">
                <div className="container max-w-5xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">15K+</p>
                            <p className="text-sm text-muted-foreground">Monthly Visitors</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">80%</p>
                            <p className="text-sm text-muted-foreground">Local Audience</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">4.2x</p>
                            <p className="text-sm text-muted-foreground">Avg. Engagement</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">50+</p>
                            <p className="text-sm text-muted-foreground">Listed Venues</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advertising Options */}
            <div className="container max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Advertising Options</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From featured placements to sponsored content, we offer flexible options to fit your marketing goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Featured Listing */}
                    <div className="border rounded-xl p-6 space-y-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                            <Star className="h-6 w-6 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-semibold">Featured Listing</h3>
                        <p className="text-muted-foreground text-sm">
                            Get premium placement at the top of category pages and homepage sections.
                            Includes a &ldquo;Featured&rdquo; badge and priority in search results.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Top of category pages
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Featured badge
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Homepage carousel
                            </li>
                        </ul>
                        <p className="font-semibold">Starting at $99/month</p>
                    </div>

                    {/* Sponsored Content */}
                    <div className="border rounded-xl p-6 space-y-4 relative">
                        <Badge className="absolute -top-3 right-4">Most Popular</Badge>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Megaphone className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold">Sponsored Placement</h3>
                        <p className="text-muted-foreground text-sm">
                            Prominent ad placement on high-traffic pages.
                            Perfect for special events, seasonal promotions, or grand openings.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Homepage hero placement
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Category page banners
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Click & impression tracking
                            </li>
                        </ul>
                        <p className="font-semibold">Starting at $249/month</p>
                    </div>

                    {/* Deal Promotion */}
                    <div className="border rounded-xl p-6 space-y-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <TrendingUp className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold">Deal Spotlight</h3>
                        <p className="text-muted-foreground text-sm">
                            Highlight your happy hours, specials, and promotions.
                            Deals appear on listing pages and in our curated deals section.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                &ldquo;Has Deals&rdquo; filter visibility
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Deal badge on listing cards
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Deals guide inclusion
                            </li>
                        </ul>
                        <p className="font-semibold">Starting at $49/month</p>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Why Advertise */}
            <div className="container max-w-5xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why Dine Castle Rock?</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <Users className="h-6 w-6 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Engaged Local Audience</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Our visitors are actively searching for places to eat—not passively scrolling.
                                        They&apos;re ready to dine, order, or reserve.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <MapPin className="h-6 w-6 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Hyper-Local Focus</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We&apos;re 100% focused on Castle Rock. No diluted audience—just your neighbors
                                        and visitors exploring our town.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <TrendingUp className="h-6 w-6 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Measurable Results</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Track clicks, impressions, and engagement. Know exactly how your
                                        investment is performing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-8 space-y-6">
                        <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
                        <p className="text-muted-foreground">
                            Contact us for a customized advertising package. We will work with your budget
                            and goals to create a campaign that drives real results.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-muted-foreground" />
                                <a href="mailto:advertise@dinecastlerock.com" className="hover:underline">
                                    advertise@dinecastlerock.com
                                </a>
                            </div>
                        </div>
                        <Button size="lg" className="w-full" asChild>
                            <a href="mailto:advertise@dinecastlerock.com?subject=Advertising%20Inquiry">
                                Contact Us
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-zinc-900 text-white py-16">
                <div className="container max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Not Ready to Advertise Yet?
                    </h2>
                    <p className="text-zinc-300 mb-8">
                        Make sure your business is listed first. Basic listings are always free.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                            <Link href="/add-listing">Add Your Listing</Link>
                        </Button>
                        <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100" asChild>
                            <Link href="/restaurants">Browse Directory</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

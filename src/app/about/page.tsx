import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Heart, Star, Users, Mail, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "About Us | Dine Castle Rock",
    description: "Learn about Dine Castle Rock, your local guide to the best restaurants, bars, breweries, and cafes in Castle Rock, Colorado. Part of the Castle Rock Network.",
    openGraph: {
        title: "About Dine Castle Rock",
        description: "Your local guide to the best restaurants, bars, breweries, and cafes in Castle Rock, Colorado.",
    },
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-zinc-900 text-white py-20">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        About Dine Castle Rock
                    </h1>
                    <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                        Your local guide to the best restaurants, bars, breweries, and cafés in Castle Rock, Colorado.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="container max-w-4xl mx-auto px-4 py-16">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Castle Rock&apos;s dining scene is thriving—from beloved local spots to exciting new openings.
                            We created Dine Castle Rock to help residents and visitors discover the best places to eat,
                            drink, and gather in our community.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                            Whether you&apos;re looking for a date night spot, a family-friendly restaurant,
                            or the best happy hour in town, we&apos;re here to help you find it.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 py-8">
                        <div className="text-center p-6 border rounded-xl">
                            <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">100% Local</h3>
                            <p className="text-sm text-muted-foreground">
                                Focused exclusively on Castle Rock and surrounding areas.
                            </p>
                        </div>
                        <div className="text-center p-6 border rounded-xl">
                            <Heart className="h-8 w-8 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">Community First</h3>
                            <p className="text-sm text-muted-foreground">
                                Supporting local businesses and helping them thrive.
                            </p>
                        </div>
                        <div className="text-center p-6 border rounded-xl">
                            <Star className="h-8 w-8 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">Quality Focused</h3>
                            <p className="text-sm text-muted-foreground">
                                Curated listings with real information you can trust.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Separator />

            {/* How Rankings Work */}
            <div className="container max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8">How We Rank & Feature Listings</h2>

                <div className="space-y-6">
                    <div className="bg-muted/30 rounded-xl p-6">
                        <div className="flex gap-4">
                            <TrendingUp className="h-6 w-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Trending Listings</h3>
                                <p className="text-muted-foreground">
                                    Our &ldquo;Trending&rdquo; section highlights venues with the most engagement over the past week.
                                    This includes page views, clicks to website/phone, and saves.
                                    It&apos;s a real-time reflection of what Castle Rock is interested in.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6">
                        <div className="flex gap-4">
                            <Star className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Featured & Premium Listings</h3>
                                <p className="text-muted-foreground">
                                    Listings marked as &ldquo;Featured&rdquo; are paid placements from businesses that want extra visibility.
                                    We clearly label these so you always know when you&apos;re seeing sponsored content.
                                    Premium status is available to any business that claims their listing.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6">
                        <div className="flex gap-4">
                            <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Ratings & Reviews</h3>
                                <p className="text-muted-foreground">
                                    We aggregate ratings from Google and other sources to provide a comprehensive view.
                                    The rating and review count shown on each listing reflects public data
                                    and is updated regularly.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6">
                        <div className="flex gap-4">
                            <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Editorial Independence</h3>
                                <p className="text-muted-foreground">
                                    Advertising never influences our curation or rankings.
                                    Paid placements are always clearly marked.
                                    Our goal is to be a trusted resource for the community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Part of the Network */}
            <div className="container max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-4">Part of the Castle Rock Network</h2>
                <p className="text-muted-foreground text-lg mb-8">
                    Dine Castle Rock is part of a family of local guides celebrating everything our town has to offer.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <a
                        href="https://visitcastlerock.co"
                        className="block p-6 border rounded-xl hover:border-primary transition-colors"
                    >
                        <h3 className="font-semibold mb-2">Visit Castle Rock</h3>
                        <p className="text-sm text-muted-foreground">
                            Events, attractions, and things to do in Castle Rock.
                        </p>
                    </a>

                    <div className="p-6 border rounded-xl bg-primary/5 border-primary">
                        <h3 className="font-semibold mb-2">Dine Castle Rock</h3>
                        <p className="text-sm text-muted-foreground">
                            Restaurants, bars, and dining experiences.
                        </p>
                        <span className="text-xs text-primary font-medium">You are here</span>
                    </div>

                    <a
                        href="https://shopcastlerock.co"
                        className="block p-6 border rounded-xl hover:border-primary transition-colors"
                    >
                        <h3 className="font-semibold mb-2">Shop Castle Rock</h3>
                        <p className="text-sm text-muted-foreground">
                            Local shops, boutiques, and retail in Castle Rock.
                        </p>
                    </a>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-zinc-900 text-white py-16">
                <div className="container max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-zinc-300 mb-8">
                        Have questions, feedback, or want to partner with us? We&apos;d love to hear from you.
                    </p>

                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Mail className="h-5 w-5" />
                        <a href="mailto:hello@dinecastlerock.com" className="hover:underline">
                            hello@dinecastlerock.com
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100" asChild>
                            <Link href="/add-listing">Add Your Business</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                            <Link href="/advertise">Advertise With Us</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Report Issue */}
            <div className="container max-w-4xl mx-auto px-4 py-12">
                <div className="bg-muted/30 rounded-xl p-6 text-center">
                    <h3 className="font-semibold mb-2">See something wrong?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        If you notice incorrect information on any listing, please let us know.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                        <a href="mailto:hello@dinecastlerock.com?subject=Report%20an%20Issue">
                            Report an Issue
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, Phone, Globe, Star, Share2, Heart, CheckCircle } from "lucide-react"
import { NetworkFooter } from "@/components/shared/NetworkFooter"
// NetworkHeader is in layout

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    // Mock Data
    const listing = {
        name: "Tribe at Riverwalk",
        description: "A modern approach to gathering, offering refined American cuisine in a stunning setting. Features a vibrant patio, craft cocktails, and a chef-driven menu utilizing local ingredients.",
        cuisine: "Modern American",
        price: "$$$",
        rating: 4.8,
        reviewCount: 342,
        address: "2500 Riverwalk Dr, Castle Rock, CO",
        phone: "(303) 555-0123",
        website: "https://tribecastlerock.com",
        hours: [
            { day: "Mon-Thu", time: "11:00 AM - 10:00 PM" },
            { day: "Fri-Sat", time: "11:00 AM - 11:00 PM" },
            { day: "Sun", time: "10:00 AM - 9:00 PM" },
        ],
        features: ["Outdoor Seating", "Happy Hour", "Reservations Recommended", "Full Bar"],
        images: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
        ]
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Gallery */}
            <div className="h-[40vh] md:h-[50vh] grid grid-cols-1 md:grid-cols-4 gap-1 p-1">
                <div className="md:col-span-2 relative h-full bg-zinc-100 overflow-hidden rounded-l-xl">
                    <img src={listing.images[0]} alt="Main" className="w-full h-full object-cover" />
                </div>
                <div className="hidden md:flex flex-col gap-1 h-full col-span-2">
                    <div className="h-1/2 bg-zinc-100 relative overflow-hidden rounded-tr-xl">
                        <img src={listing.images[1]} alt="Gallery 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-1/2 bg-zinc-100 relative overflow-hidden rounded-br-xl">
                        <img src={listing.images[2]} alt="Gallery 2" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header Info */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex gap-2">
                                    <Badge variant="outline">{listing.cuisine}</Badge>
                                    <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">Open Now</Badge>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon"><Share2 className="h-5 w-5" /></Button>
                                    <Button variant="ghost" size="icon"><Heart className="h-5 w-5" /></Button>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{listing.name}</h1>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    <span className="font-semibold">{listing.rating}</span>
                                    <span className="text-muted-foreground">({listing.reviewCount} reviews)</span>
                                </div>
                                <span>•</span>
                                <span className="font-medium">{listing.price}</span>
                                <span>•</span>
                                <span className="text-muted-foreground">{listing.address}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 py-4">
                            <Button size="lg" className="flex-1 md:flex-none">Reserve Table</Button>
                            <Button size="lg" variant="outline" className="flex-1 md:flex-none">Order Online</Button>
                        </div>

                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 space-x-8">
                                <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-2">Overview</TabsTrigger>
                                <TabsTrigger value="menu" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-2">Menu</TabsTrigger>
                                <TabsTrigger value="photos" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-2">Photos</TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-2">Reviews</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="pt-6 space-y-6">
                                <div className="prose max-w-none text-muted-foreground">
                                    <p>{listing.description}</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-4 text-lg">Features</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {listing.features.map(f => (
                                            <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <CheckCircle className="h-4 w-4 text-primary" />
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="menu" className="pt-6">
                                <div className="p-8 border rounded-lg text-center bg-muted/20">
                                    <p>Menu content integration would go here.</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar info */}
                    <div className="space-y-6">
                        <div className="p-6 border rounded-xl bg-card shadow-sm space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-sm">{listing.address}</p>
                                    <Button variant="link" className="p-0 h-auto text-xs">Get Directions</Button>
                                </div>
                            </div>
                            <Separator />
                            <div className="flex items-start gap-4">
                                <Globe className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                                <div>
                                    <a href="#" className="font-medium text-sm hover:underline">Visit Website</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-sm">{listing.phone}</p>
                                </div>
                            </div>
                            <Separator />
                            <div>
                                <div className="flex items-center gap-4 mb-2">
                                    <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                                    <span className="font-semibold text-sm">Hours</span>
                                </div>
                                <ul className="space-y-1 text-sm pl-9">
                                    {listing.hours.map(h => (
                                        <li key={h.day} className="flex justify-between">
                                            <span className="text-muted-foreground">{h.day}</span>
                                            <span>{h.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="p-6 border rounded-xl bg-zinc-900 text-white shadow-sm text-center space-y-3">
                            <h3 className="font-bold">Own this business?</h3>
                            <p className="text-sm text-zinc-300">Claim this listing to manage details, add photos, and post deals.</p>
                            <Link href={`/listing/${slug}/claim`} className="w-full">
                                <Button variant="secondary" className="w-full">Claim Listing</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

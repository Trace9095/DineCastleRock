import { ListingCard } from "@/components/listings/ListingCard"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function GuidePage({ params }: { params: { slug: string } }) {
    // Mock Data
    const guide = {
        title: "The Ultimate Happy Hour Guide in Castle Rock",
        slug: params.slug,
        author: "Editorial Team",
        date: "October 10, 2025",
        heroImage: "https://images.unsplash.com/photo-1572116469696-e1a56e303352?q=80&w=2000&auto=format&fit=crop",
        content: "Castle Rock's happy hour scene is booming. From craft breweries on Wilcox to upscale cocktails at Riverwalk, here are the best deals in town...",
        mentions: [
            {
                id: "2",
                name: "Great Divide Brewery",
                slug: "great-divide",
                image: "https://images.unsplash.com/photo-1588675646184-f5b0b0b9b2e0?q=80&w=2062&auto=format&fit=crop",
                cuisine: "Brewery & Pub",
                price: "$$",
                rating: 4.6,
                reviewCount: 128,
                address: "Wilcox St, Castle Rock",
                isOpen: true,
                deal: "Happy Hour"
            },
            {
                id: "4",
                name: "Provision",
                slug: "provision",
                image: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop",
                cuisine: "Cocktail Bar",
                price: "$$",
                rating: 4.9,
                reviewCount: 56,
                address: "Perry St, Castle Rock",
                isOpen: true,
                isPremium: true
            }
        ]
    }

    return (
        <article className="min-h-screen pb-20">
            <div className="h-[50vh] relative w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img src={guide.heroImage} alt={guide.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 container max-w-4xl mx-auto">
                    <Badge className="mb-4">Local Guide</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{guide.title}</h1>
                    <div className="flex items-center gap-3 text-white">
                        <Avatar className="h-8 w-8 border border-white">
                            <AvatarFallback>ED</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{guide.author}</span>
                        <span>•</span>
                        <span className="opacity-80">{guide.date}</span>
                    </div>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 py-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-muted-foreground">{guide.content}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <h2>Top Pick: Great Divide</h2>
                    <p>Located right on Wilcox, this is the spot for afternoon pints.</p>
                </div>

                <div className="my-12 grid gap-8">
                    {guide.mentions.map(listing => (
                        <div key={listing.id} className="border rounded-xl p-4 md:p-6 bg-muted/20">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold mb-1">Mentioned: {listing.name}</h3>
                                <p className="text-sm text-muted-foreground">{listing.address}</p>
                            </div>
                            <div className="h-64">
                                <ListingCard {...listing} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}

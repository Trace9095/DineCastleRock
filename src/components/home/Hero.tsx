import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for now - normally this would be a high-quality Next.js Image */}
                <div className="w-full h-full bg-zinc-900 bg-[url('/images/home-hero.jpg')] bg-cover bg-center opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container px-4 max-w-4xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-md">
                        Taste the Elevation.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-100 max-w-2xl mx-auto font-medium drop-shadow-sm">
                        Discover the best dining, drinks, and dessert in Castle Rock.
                    </p>
                </div>

                {/* Search Bar - Glassmorphism */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full max-w-2xl mx-auto flex items-center shadow-xl">
                    <Search className="ml-4 h-5 w-5 text-white/70" />
                    <Input
                        type="text"
                        placeholder="Search cuisine, restaurant, or dish..."
                        className="border-0 bg-transparent text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 text-base"
                    />
                    <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-zinc-200 border-0 font-semibold h-12">
                        Find Table
                    </Button>
                </div>

                {/* Quick Tags */}
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {["Date Night", "Happy Hour", "Family Friendly", "Quick Bite", "Coffee"].map((tag) => (
                        <Button key={tag} variant="outline" size="sm" className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm shadow-sm transition-all">
                            {tag}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}

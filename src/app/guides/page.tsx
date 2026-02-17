import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const GUIDES = [
    {
        slug: "happy-hour",
        title: "The Ultimate Happy Hour Guide",
        excerpt: "Best deals on drinks and apps 3-6pm.",
        image: "/images/guides/happy-hour-hero.jpg",
        author: "Editorial",
        date: "Oct 10"
    },
    {
        slug: "date-night",
        title: "Romantic Date Night Spots",
        excerpt: "Impress your significant other with these picks.",
        image: "/images/guides/date-night-hero.jpg",
        author: "Sarah J.",
        date: "Sep 28"
    },
    {
        slug: "family-friendly",
        title: "Family Friendly Dining",
        excerpt: "Places where kids are welcome and parents can relax.",
        image: "/images/guides/family-dining-hero.jpg",
        author: "Mike T.",
        date: "Sep 15"
    }
]

export default function GuidesIndex() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Editorial Guides</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Curated lists and local insights to help you navigate Castle Rock&apos;s food scene.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {GUIDES.map(guide => (
                    <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-muted">
                            <img
                                src={guide.image}
                                alt={guide.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-2 left-2">
                                <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-black">Guide</Badge>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{guide.title}</h2>
                        <p className="text-muted-foreground mb-3">{guide.excerpt}</p>
                        <div className="flex items-center text-sm text-muted-foreground gap-2">
                            <span className="font-medium text-foreground">{guide.author}</span>
                            <span>•</span>
                            <span>{guide.date}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

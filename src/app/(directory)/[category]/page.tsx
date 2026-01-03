import { FilterSidebar } from "@/components/listings/FilterSidebar"
import { ListingCard } from "@/components/listings/ListingCard"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"

// Mock Data
const SAMPLE_LISTINGS = [
    {
        id: "1",
        name: "Tribe at Riverwalk",
        slug: "tribe-riverwalk",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2070&auto=format&fit=crop",
        cuisine: "Modern American",
        price: "$$$",
        rating: 4.8,
        reviewCount: 342,
        address: "Riverwalk, Castle Rock",
        isOpen: true,
        isPremium: true
    },
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
        id: "3",
        name: "Union An American Bistro",
        slug: "union-bistro",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
        cuisine: "Bistro",
        price: "$$$",
        rating: 4.7,
        reviewCount: 890,
        address: "Castleton Ct, Castle Rock",
        isOpen: false,
    },
    // Add duplicates to fill grid
    {
        id: "4",
        name: "Tribe Duplicate",
        slug: "tribe-riverwalk",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2070&auto=format&fit=crop",
        cuisine: "Modern American",
        price: "$$$",
        rating: 4.8,
        reviewCount: 342,
        address: "Riverwalk, Castle Rock",
        isOpen: true,
        isPremium: true
    },
]

export default function CategoryPage({ params }: { params: { category: string } }) {
    // Simple mapping for display title
    const categoryTitle = params.category
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    return (
        <div className="container max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8 border-b pb-6">
                <h1 className="text-4xl font-bold tracking-tight mb-2">{categoryTitle}</h1>
                <p className="text-muted-foreground text-lg">
                    Discover the best {categoryTitle.toLowerCase()} in Castle Rock.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar - Hidden on mobile mostly, or collapsible */}
                <aside className="w-full md:w-64 shrink-0 hidden md:block">
                    <FilterSidebar />
                </aside>

                {/* Mobile Filter Trigger */}
                <div className="md:hidden mb-4">
                    <Button variant="outline" className="w-full">
                        <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
                    </Button>
                </div>

                {/* Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SAMPLE_LISTINGS.map((item) => (
                            <div key={item.id} className="h-full">
                                <ListingCard {...item} />
                            </div>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-12 flex justify-center">
                        <Button variant="ghost">Load More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

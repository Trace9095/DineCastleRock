import { Hero } from "@/components/home/Hero"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { FeaturedSection } from "@/components/home/FeaturedSection"

// Dummy Data for Preview
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
  },
  {
    id: "5",
    name: "Castle Cafe",
    slug: "castle-cafe",
    image: "https://images.unsplash.com/photo-1621266850453-39d739d48259?q=80&w=2070&auto=format&fit=crop",
    cuisine: "American Comfort",
    price: "$$",
    rating: 4.6,
    reviewCount: 1200,
    address: "Wilcox St, Castle Rock",
    isOpen: true,
    deal: "Kids Eat Free"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryGrid />

      <FeaturedSection
        title="Trending in Castle Rock"
        subtitle="The hottest spots everyone is talking about this week."
        items={SAMPLE_LISTINGS}
        link="/restaurants"
        linkText="View All Restaurants"
      />

      {/* Sponsored / Ad Section placeholder */}
      <section className="py-12 bg-zinc-900 text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2 text-zinc-300 uppercase tracking-widest text-sm">Sponsored</h3>
          <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-800/50">
            <span className="text-2xl font-bold">Ad Placement Area</span>
            <p className="text-zinc-400">Promote your restaurant here.</p>
          </div>
        </div>
      </section>

      <FeaturedSection
        title="Date Night Destinations"
        subtitle="Romantic spots for the perfect evening."
        items={[...SAMPLE_LISTINGS].reverse()}
        link="/guides/date-night"
        linkText="View Date Night Guide"
      />
    </div>
  );
}

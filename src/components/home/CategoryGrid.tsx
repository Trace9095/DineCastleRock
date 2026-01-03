import Link from "next/link"

const categories = [
    {
        name: "Restaurants",
        href: "/restaurants",
        description: "Fine dining to casual eats"
    },
    {
        name: "Bars & Nightlife",
        href: "/bars-nightlife",
        description: "Cocktails, beer & entertainment"
    },
    {
        name: "Coffee",
        href: "/coffee",
        description: "Local roasters & cafes"
    },
    {
        name: "Breweries",
        href: "/breweries",
        description: "Craft beer & taprooms"
    },
    {
        name: "Takeout",
        href: "/takeout-delivery",
        description: "Quick bites & delivery"
    },
    {
        name: "Dessert",
        href: "/dessert",
        description: "Sweet treats & bakeries"
    },
]

export function CategoryGrid() {
    return (
        <section className="py-24 container px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold tracking-tight mb-4">Explore Castle Rock</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Discover local favorites across every category
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        href={cat.href}
                        className="group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 p-8 md:p-10 transition-all duration-500 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                    >
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                                {cat.name}
                            </h3>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                                {cat.description}
                            </p>
                        </div>

                        {/* Subtle arrow indicator */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                            <svg
                                className="w-5 h-5 text-muted-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

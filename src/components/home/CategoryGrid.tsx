import Link from "next/link"
import { Utensils, Wine, Coffee, Beer, Truck, IceCream, ArrowRight } from "lucide-react"

const categories = [
    {
        name: "Restaurants",
        href: "/restaurants",
        description: "Fine dining to casual eats",
        icon: Utensils,
        color: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-600"
    },
    {
        name: "Bars & Nightlife",
        href: "/bars-nightlife",
        description: "Cocktails, beer & entertainment",
        icon: Wine,
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-600"
    },
    {
        name: "Coffee",
        href: "/coffee",
        description: "Local roasters & cafes",
        icon: Coffee,
        color: "from-amber-500/20 to-yellow-500/20",
        iconColor: "text-amber-700"
    },
    {
        name: "Breweries",
        href: "/breweries",
        description: "Craft beer & taprooms",
        icon: Beer,
        color: "from-yellow-500/20 to-amber-500/20",
        iconColor: "text-yellow-700"
    },
    {
        name: "Takeout",
        href: "/takeout-delivery",
        description: "Quick bites & delivery",
        icon: Truck,
        color: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-600"
    },
    {
        name: "Dessert",
        href: "/dessert",
        description: "Sweet treats & bakeries",
        icon: IceCream,
        color: "from-pink-500/20 to-rose-500/20",
        iconColor: "text-pink-600"
    },
]

export function CategoryGrid() {
    return (
        <section className="py-16 md:py-24 container px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Explore Castle Rock</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover local favorites across every category
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {categories.map((cat) => {
                    const Icon = cat.icon
                    return (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted mb-4 ${cat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-1 group-hover:text-primary transition-colors duration-300">
                                    {cat.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {cat.description}
                                </p>

                                {/* Arrow indicator */}
                                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

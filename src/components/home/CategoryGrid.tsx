import Link from "next/link"
import Image from "next/image"
import {
    Utensils, Wine, Coffee, Beer, Truck, IceCream, ArrowRight,
    ShoppingBag, Car, Heart, Baby, Gift, Home, Briefcase, Sparkles, PawPrint
} from "lucide-react"

const categories = [
    {
        name: "Restaurants",
        href: "/restaurants",
        description: "Fine dining to casual eats",
        icon: Utensils,
        image: "/images/dining.jpg",
        color: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-600"
    },
    {
        name: "Bars & Nightlife",
        href: "/bars-nightlife",
        description: "Cocktails & entertainment",
        icon: Wine,
        image: "/images/sienna-wine-bar.jpg",
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-600"
    },
    {
        name: "Coffee",
        href: "/coffee",
        description: "Local roasters & cafes",
        icon: Coffee,
        image: "/images/lost-coffee.jpg",
        color: "from-amber-500/20 to-yellow-500/20",
        iconColor: "text-amber-700"
    },
    {
        name: "Breweries",
        href: "/breweries",
        description: "Craft beer & taprooms",
        icon: Beer,
        image: "/images/rockyard-brewing.jpg",
        color: "from-yellow-500/20 to-amber-500/20",
        iconColor: "text-yellow-700"
    },
    {
        name: "Retail & Shopping",
        href: "/retail",
        description: "Shops & boutiques",
        icon: ShoppingBag,
        image: "/images/retail.jpg",
        color: "from-emerald-500/20 to-teal-500/20",
        iconColor: "text-emerald-600"
    },
    {
        name: "Health & Wellness",
        href: "/wellness",
        description: "Fitness, spa & healthcare",
        icon: Heart,
        image: "/images/wellness.jpg",
        color: "from-rose-500/20 to-pink-500/20",
        iconColor: "text-rose-600"
    },
]

const moreCategories = [
    {
        name: "Auto",
        href: "/auto",
        icon: Car,
        image: "/images/auto.jpg",
    },
    {
        name: "Kids & Family",
        href: "/kids",
        icon: Baby,
        image: "/images/kids.jpg",
    },
    {
        name: "Gifts",
        href: "/gifts",
        icon: Gift,
        image: "/images/gifts.jpg",
    },
    {
        name: "Home Services",
        href: "/home-services",
        icon: Home,
        image: "/images/home-services.jpg",
    },
    {
        name: "Professional",
        href: "/professional-services",
        icon: Briefcase,
        image: "/images/professional-services.jpg",
    },
    {
        name: "Beauty",
        href: "/beauty",
        icon: Sparkles,
        image: "/images/beauty.jpg",
    },
    {
        name: "Pets",
        href: "/pets",
        icon: PawPrint,
        image: "/images/pets.jpg",
    },
    {
        name: "Takeout",
        href: "/takeout-delivery",
        icon: Truck,
        image: "/images/dining.jpg",
    },
    {
        name: "Dessert",
        href: "/dessert",
        icon: IceCream,
        image: "/images/dining.jpg",
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

            {/* Main Categories with Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-8">
                {categories.map((cat) => {
                    const Icon = cat.icon
                    return (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                />
                            </div>

                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10 p-6 md:p-8">
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

            {/* More Categories - Compact Grid */}
            <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">More Categories</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
                    {moreCategories.map((cat) => {
                        const Icon = cat.icon
                        return (
                            <Link
                                key={cat.name}
                                href={cat.href}
                                className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-background hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-200"
                            >
                                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                                    {cat.name}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

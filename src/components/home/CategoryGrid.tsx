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
        gradient: "from-orange-500 to-red-600",
        bgGradient: "from-orange-500/10 to-red-500/5",
    },
    {
        name: "Bars & Nightlife",
        href: "/bars-nightlife",
        description: "Cocktails & entertainment",
        icon: Wine,
        image: "/images/sienna-wine-bar.jpg",
        gradient: "from-purple-500 to-pink-600",
        bgGradient: "from-purple-500/10 to-pink-500/5",
    },
    {
        name: "Coffee",
        href: "/coffee",
        description: "Local roasters & cafes",
        icon: Coffee,
        image: "/images/lost-coffee.jpg",
        gradient: "from-amber-500 to-yellow-600",
        bgGradient: "from-amber-500/10 to-yellow-500/5",
    },
    {
        name: "Breweries",
        href: "/breweries",
        description: "Craft beer & taprooms",
        icon: Beer,
        image: "/images/rockyard-brewing.jpg",
        gradient: "from-yellow-500 to-amber-600",
        bgGradient: "from-yellow-500/10 to-amber-500/5",
    },
    {
        name: "Retail & Shopping",
        href: "/retail",
        description: "Shops & boutiques",
        icon: ShoppingBag,
        image: "/images/retail.jpg",
        gradient: "from-emerald-500 to-teal-600",
        bgGradient: "from-emerald-500/10 to-teal-500/5",
    },
    {
        name: "Health & Wellness",
        href: "/wellness",
        description: "Fitness, spa & healthcare",
        icon: Heart,
        image: "/images/wellness.jpg",
        gradient: "from-rose-500 to-pink-600",
        bgGradient: "from-rose-500/10 to-pink-500/5",
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
        <section className="py-20 md:py-28 container px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-14 md:mb-20">
                <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-5">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Browse Categories</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Explore Castle Rock
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Discover local favorites across every category
                </p>
            </div>

            {/* Main Categories - Modern Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
                {categories.map((cat, index) => {
                    const Icon = cat.icon
                    return (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="group relative overflow-hidden rounded-3xl bg-card hover-lift"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover opacity-0 group-hover:opacity-20 transition-all duration-500 scale-100 group-hover:scale-110"
                                />
                            </div>

                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Glass highlight on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                            <div className="relative z-10 p-8 md:p-10">
                                {/* Icon Container */}
                                <div className={`
                                    inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5
                                    bg-gradient-to-br ${cat.gradient} shadow-lg
                                    group-hover:scale-110 group-hover:shadow-xl
                                    transition-all duration-500
                                `}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                                    {cat.name}
                                </h3>
                                <p className="text-muted-foreground text-sm md:text-base mb-4">
                                    {cat.description}
                                </p>

                                {/* Arrow indicator */}
                                <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2">
                                    Explore
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>

                            {/* Border glow effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500" />
                        </Link>
                    )
                })}
            </div>

            {/* More Categories - Modern Compact Grid */}
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 md:p-10 shadow-modern">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">More Categories</h3>
                    <Link href="/categories" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                        View all
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4">
                    {moreCategories.map((cat) => {
                        const Icon = cat.icon
                        return (
                            <Link
                                key={cat.name}
                                href={cat.href}
                                className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-background/80 hover:bg-white hover:shadow-modern border border-transparent hover:border-primary/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
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

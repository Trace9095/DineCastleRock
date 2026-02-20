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
    },
    {
        name: "Bars & Nightlife",
        href: "/bars-nightlife",
        description: "Cocktails & entertainment",
        icon: Wine,
        image: "/images/sienna-wine-bar.jpg",
        gradient: "from-purple-500 to-pink-600",
    },
    {
        name: "Coffee",
        href: "/coffee",
        description: "Local roasters & cafes",
        icon: Coffee,
        image: "/images/lost-coffee.jpg",
        gradient: "from-amber-500 to-yellow-600",
    },
    {
        name: "Breweries",
        href: "/breweries",
        description: "Craft beer & taprooms",
        icon: Beer,
        image: "/images/rockyard-brewing.jpg",
        gradient: "from-yellow-500 to-amber-600",
    },
    {
        name: "Retail & Shopping",
        href: "/retail",
        description: "Shops & boutiques",
        icon: ShoppingBag,
        image: "/images/retail.jpg",
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        name: "Health & Wellness",
        href: "/wellness",
        description: "Fitness, spa & healthcare",
        icon: Heart,
        image: "/images/wellness.jpg",
        gradient: "from-rose-500 to-pink-600",
    },
]

const moreCategories = [
    { name: "Auto", href: "/auto", icon: Car, image: "/images/auto.jpg" },
    { name: "Kids & Family", href: "/kids", icon: Baby, image: "/images/kids.jpg" },
    { name: "Gifts", href: "/gifts", icon: Gift, image: "/images/gifts.jpg" },
    { name: "Home Services", href: "/home-services", icon: Home, image: "/images/home-services.jpg" },
    { name: "Professional", href: "/professional-services", icon: Briefcase, image: "/images/professional-services.jpg" },
    { name: "Beauty", href: "/beauty", icon: Sparkles, image: "/images/beauty.jpg" },
    { name: "Pets", href: "/pets", icon: PawPrint, image: "/images/pets.jpg" },
    { name: "Takeout", href: "/takeout-delivery", icon: Truck, image: "/images/dining.jpg" },
    { name: "Dessert", href: "/dessert", icon: IceCream, image: "/images/dining.jpg" },
]

export function CategoryGrid() {
    return (
        <section className="py-20 md:py-28 container px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-14 md:mb-20">
                <div className="inline-flex items-center gap-2 bg-[#E85D2B]/10 border border-[#E85D2B]/20 rounded-full px-4 py-1.5 mb-5">
                    <Sparkles className="w-4 h-4 text-[#E85D2B]" />
                    <span className="text-sm font-medium text-[#E85D2B]">Browse Categories</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Explore Castle Rock
                </h2>
                <p className="text-white/50 max-w-2xl mx-auto text-lg">
                    Discover local favorites across every category
                </p>
            </div>

            {/* Main Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
                {categories.map((cat, index) => {
                    const Icon = cat.icon
                    return (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="group relative overflow-hidden rounded-3xl bg-[#12121a] border border-white/5 hover:border-[#E85D2B]/20 hover:-translate-y-1 transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image quality={90}
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover opacity-0 group-hover:opacity-15 transition-all duration-500 scale-100 group-hover:scale-110"
                                />
                            </div>

                            {/* Hover gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                            <div className="relative z-10 p-8 md:p-10">
                                {/* Icon */}
                                <div className={`
                                    inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5
                                    bg-gradient-to-br ${cat.gradient} shadow-lg
                                    group-hover:scale-110 group-hover:shadow-xl
                                    transition-all duration-500
                                `}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-[#E85D2B] transition-colors duration-300">
                                    {cat.name}
                                </h3>
                                <p className="text-white/40 text-sm md:text-base mb-4">
                                    {cat.description}
                                </p>

                                <div className="flex items-center text-sm font-semibold text-[#E85D2B] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2">
                                    Explore
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>

                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#E85D2B]/20 transition-all duration-500" />
                        </Link>
                    )
                })}
            </div>

            {/* More Categories */}
            <div className="bg-[#12121a] rounded-3xl p-8 md:p-10 border border-white/5">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">More Categories</h3>
                    <Link href="/categories" className="text-sm font-medium text-[#E85D2B] hover:text-[#E85D2B]/80 transition-colors flex items-center gap-1">
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
                                className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#E85D2B]/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#E85D2B]/10 group-hover:scale-110 transition-all duration-300">
                                    <Icon className="w-5 h-5 text-white/40 group-hover:text-[#E85D2B] transition-colors duration-300" />
                                </div>
                                <span className="text-xs font-medium text-white/40 group-hover:text-white transition-colors text-center leading-tight">
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

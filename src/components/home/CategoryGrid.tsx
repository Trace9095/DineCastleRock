import Link from "next/link"
import { UtensilsCrossed, Beer, Coffee, Pizza, IceCream, Truck } from "lucide-react"

const categories = [
    { name: "Restaurants", icon: UtensilsCrossed, href: "/restaurants", color: "bg-orange-100 text-orange-600" },
    { name: "Bars & Nightlife", icon: Beer, href: "/bars-nightlife", color: "bg-purple-100 text-purple-600" },
    { name: "Coffee", icon: Coffee, href: "/coffee", color: "bg-amber-100 text-amber-600" },
    { name: "Takeout", icon: Pizza, href: "/takeout-delivery", color: "bg-green-100 text-green-600" },
    { name: "Dessert", icon: IceCream, href: "/dessert", color: "bg-pink-100 text-pink-600" },
    { name: "Food Trucks", icon: Truck, href: "/food-trucks", color: "bg-blue-100 text-blue-600" },
]

export function CategoryGrid() {
    return (
        <section className="py-20 container px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Browse by Category</h2>
                <Link href="/directory" className="text-sm font-medium hover:underline">View All</Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        href={cat.href}
                        className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-muted/40 hover:bg-muted transition-all hover:scale-105 border border-transparent hover:border-border duration-300"
                    >
                        <div className={`p-4 rounded-full ${cat.color} group-hover:bg-opacity-80 transition-colors`}>
                            <cat.icon className="h-6 w-6" />
                        </div>
                        <span className="font-semibold text-center text-sm">{cat.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

import Link from "next/link"
import Image from "next/image"
import { MapPin, ArrowRight, Sparkles } from "lucide-react"
import { DESTINATIONS } from "@/lib/data"

export function DestinationsSection() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30">
            <div className="container px-4 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14 md:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-5">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Popular Destinations</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Where to Shop & Dine
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Explore Castle Rock&apos;s best shopping and dining districts
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DESTINATIONS.map((destination, index) => (
                        <Link
                            key={destination.id}
                            href={`/destinations/${destination.slug}`}
                            className="group relative overflow-hidden rounded-3xl aspect-[3/4] hover-lift"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Background Image */}
                            <Image
                                src={destination.image}
                                alt={destination.name}
                                fill
                                className="object-cover transition-all duration-700 scale-100 group-hover:scale-110"
                            />

                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                {/* Featured Badge */}
                                {index === 0 && (
                                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
                                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-xs font-medium text-white">Popular</span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary/90 transition-colors duration-300">
                                    {destination.name}
                                </h3>
                                <p className="text-white/70 text-sm mb-4 line-clamp-2 leading-relaxed">
                                    {destination.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {destination.highlights.slice(0, 3).map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1 rounded-full border border-white/10"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Arrow indicator */}
                                <div className="flex items-center text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    Explore District
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Border glow on hover */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

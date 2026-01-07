import Link from "next/link"
import Image from "next/image"
import { MapPin, ArrowRight } from "lucide-react"
import { DESTINATIONS } from "@/lib/data"

export function DestinationsSection() {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">Popular Destinations</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                        Where to Shop & Dine
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore Castle Rock&apos;s best shopping and dining districts
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {DESTINATIONS.map((destination) => (
                        <Link
                            key={destination.id}
                            href={`/destinations/${destination.slug}`}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Background Image */}
                            <Image
                                src={destination.image}
                                alt={destination.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {destination.name}
                                </h3>
                                <p className="text-white/80 text-sm mb-3 line-clamp-2">
                                    {destination.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {destination.highlights.slice(0, 2).map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-sm"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div className="flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

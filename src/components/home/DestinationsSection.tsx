import Link from "next/link"
import Image from "next/image"
import { MapPin, ArrowRight, Sparkles } from "lucide-react"
import { DESTINATIONS } from "@/lib/data"

export function DestinationsSection() {
    return (
        <section className="py-20 md:py-28">
            <div className="container px-4 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14 md:mb-20">
                    <div className="inline-flex items-center gap-2 bg-[#E85D2B]/10 border border-[#E85D2B]/20 rounded-full px-4 py-1.5 mb-5">
                        <MapPin className="w-4 h-4 text-[#E85D2B]" />
                        <span className="text-sm font-medium text-[#E85D2B]">Popular Destinations</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Where to Shop & Dine
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Explore Castle Rock&apos;s best shopping and dining districts
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DESTINATIONS.map((destination, index) => (
                        <Link
                            key={destination.id}
                            href={`/destinations/${destination.slug}`}
                            className="group relative overflow-hidden rounded-3xl aspect-[3/4] border border-white/5 hover:border-[#E85D2B]/20 hover:-translate-y-1 transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Background Image */}
                            <Image quality={90}
                                src={destination.image}
                                alt={destination.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-all duration-700 scale-100 group-hover:scale-110"
                            />

                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/95 via-[#0a0a14]/40 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#E85D2B]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                {/* Featured Badge */}
                                {index === 0 && (
                                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                                        <Sparkles className="w-3.5 h-3.5 text-[#E85D2B]" />
                                        <span className="text-xs font-medium text-white">Popular</span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#E85D2B] transition-colors duration-300">
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
                                            className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full border border-white/10"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    Explore District
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>

                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#E85D2B]/20 transition-all duration-500" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

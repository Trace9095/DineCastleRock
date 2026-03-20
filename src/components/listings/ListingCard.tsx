import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export interface ListingCardProps {
    id: string
    name: string
    slug: string
    image: string
    cuisine: string
    price: string
    rating: number
    reviewCount: number
    address: string
    isOpen: boolean
    deal?: string
    isPremium?: boolean
}

export function ListingCard({
    name, slug, image, cuisine, price, rating, reviewCount, address, isOpen, deal, isPremium
}: ListingCardProps) {
    return (
        <Link href={`/listing/${slug}`} className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl">
            <article className="relative overflow-hidden rounded-2xl bg-card shadow-modern hover:shadow-modern-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" />

                    {/* Premium glow effect */}
                    {isPremium && (
                        <div className="absolute inset-0 z-[2] pointer-events-none">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-amber-400" />
                        </div>
                    )}

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                        {isPremium && (
                            <Badge className="bg-gradient-to-r from-primary to-orange-500 text-white border-none shadow-lg font-semibold px-3 py-1">
                                <Sparkles className="w-3 h-3 mr-1" />
                                Featured
                            </Badge>
                        )}
                        {deal && (
                            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-none shadow-lg font-semibold px-3 py-1">
                                {deal}
                            </Badge>
                        )}
                    </div>

                    {/* Rating Badge - Glass effect */}
                    <div className="absolute top-3 right-3 z-10">
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 shadow-lg border border-white/10">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-bold text-white">{rating.toFixed(1)}</span>
                        </div>
                    </div>

                    {/* Open/Closed Status */}
                    <div className="absolute bottom-3 left-3 z-10">
                        <div className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md shadow-lg ${
                            isOpen
                                ? "bg-emerald-500/90 text-white"
                                : "bg-stone-800/90 text-stone-200"
                        }`}>
                            <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-white animate-pulse' : 'bg-stone-400'}`} />
                            {isOpen ? "Open Now" : "Closed"}
                        </div>
                    </div>

                    {/* Image */}
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-orange-500/10 to-amber-500/20 flex items-center justify-center">
                            <span className="text-5xl">🍽️</span>
                        </div>
                    )}

                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 z-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                    {/* Meta info */}
                    <div className="flex items-center gap-2 mb-3 text-sm flex-wrap">
                        <span className="inline-flex items-center rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
                            {cuisine}
                        </span>
                        <span className="text-muted-foreground/50">•</span>
                        <span className="text-muted-foreground font-medium">{price}</span>
                        <span className="text-muted-foreground/50">•</span>
                        <span className="text-muted-foreground">{reviewCount} reviews</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {name}
                    </h3>

                    {/* Address */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto pt-3 border-t border-border/50">
                        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="truncate">{address}</span>
                    </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500/30 group-focus-within:border-amber-500/30 transition-all duration-300 pointer-events-none" />
            </article>
        </Link>
    )
}

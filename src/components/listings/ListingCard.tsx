import Link from "next/link"
import { Star, MapPin, Clock } from "lucide-react"
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
        <Link href={`/listing/${slug}`} className="block h-full group">
            <article className="relative overflow-hidden rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[1]" />

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                        {isPremium && (
                            <Badge className="bg-primary text-primary-foreground border-none shadow-md font-medium">
                                Featured
                            </Badge>
                        )}
                        {deal && (
                            <Badge variant="destructive" className="shadow-md font-medium">
                                {deal}
                            </Badge>
                        )}
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 z-10">
                        <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 shadow-md">
                            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-bold text-gray-900">{rating.toFixed(1)}</span>
                        </div>
                    </div>

                    {/* Open/Closed Status */}
                    <div className="absolute bottom-3 left-3 z-10">
                        <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${
                            isOpen
                                ? "bg-emerald-500/90 text-white"
                                : "bg-gray-800/80 text-gray-200"
                        }`}>
                            <Clock className="h-3 w-3" />
                            {isOpen ? "Open" : "Closed"}
                        </div>
                    </div>

                    {/* Image */}
                    {image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <span className="text-4xl">🍽️</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary">{cuisine}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{price}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{reviewCount} reviews</span>
                    </div>

                    <h3 className="font-semibold text-lg leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-auto">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60" />
                        <span className="truncate">{address}</span>
                    </div>
                </div>
            </article>
        </Link>
    )
}

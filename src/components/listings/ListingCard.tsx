import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
        <Link href={`/listing/${slug}`} className="block h-full">
            <Card className="relative overflow-hidden border-border hover:border-primary/50 transition-colors group h-full flex flex-col cursor-pointer">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {/* Badge Overlay */}
                    <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                        {isPremium && (
                            <Badge variant="default" className="bg-amber-500 hover:bg-amber-600 text-white border-none shadow-sm">
                                Featured
                            </Badge>
                        )}
                        {deal && (
                            <Badge variant="destructive" className="shadow-sm">
                                {deal}
                            </Badge>
                        )}
                    </div>

                    <div className="absolute top-2 right-2 z-10">
                        <Badge variant={isOpen ? "secondary" : "outline"} className={isOpen ? "bg-green-100 text-green-700 hover:bg-green-200 border-none backdrop-blur-md" : "bg-zinc-100 text-zinc-500 border-white/50"}>
                            {isOpen ? "Open Now" : "Closed"}
                        </Badge>
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
                        <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-zinc-400">
                            No Image
                        </div>
                    )}
                </div>

                <CardContent className="p-4 flex-1">
                    <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{cuisine} • {price}</span>
                        <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-semibold">{rating}</span>
                            <span className="text-xs text-muted-foreground">({reviewCount})</span>
                        </div>
                    </div>
                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span className="truncate">{address}</span>
                    </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 mt-auto">
                    <Button size="sm" variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors group-hover:border-primary/30">
                        View Details
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    )
}

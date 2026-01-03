import { ChevronLeft, ChevronRight } from "lucide-react"
import { ListingCard, ListingCardProps } from "@/components/listings/ListingCard"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface FeaturedSectionProps {
    title: string
    subtitle?: string
    items: ListingCardProps[]
    link?: string
    linkText?: string
}

export function FeaturedSection({ title, subtitle, items, link, linkText }: FeaturedSectionProps) {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container px-4 max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
                        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
                    </div>
                    {link && (
                        <Button variant="ghost" className="hidden sm:flex text-primary">
                            {linkText || "View All"} <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    )}
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {items.map((item) => (
                            <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="h-full">
                                    <ListingCard {...item} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden sm:block">
                        <CarouselPrevious className="-left-4" />
                        <CarouselNext className="-right-4" />
                    </div>
                </Carousel>

                {link && (
                    <div className="mt-6 sm:hidden text-center">
                        <Button variant="outline" className="w-full">
                            {linkText || "View All"}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}

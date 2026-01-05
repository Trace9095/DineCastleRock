import { ArrowRight } from "lucide-react"
import { ListingCard, ListingCardProps } from "@/components/listings/ListingCard"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ReactNode } from "react"
import Link from "next/link"

interface FeaturedSectionProps {
    title: string
    subtitle?: ReactNode
    items: ListingCardProps[]
    link?: string
    linkText?: string
}

export function FeaturedSection({ title, subtitle, items, link, linkText }: FeaturedSectionProps) {
    return (
        <section className="py-14 md:py-20">
            <div className="container px-4 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">{title}</h2>
                        {subtitle && <div className="text-muted-foreground text-sm md:text-base">{subtitle}</div>}
                    </div>
                    {link && (
                        <Button variant="outline" className="hidden sm:inline-flex group" asChild>
                            <Link href={link}>
                                {linkText || "View All"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
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
                    <CarouselContent className="-ml-3 md:-ml-4">
                        {items.map((item) => (
                            <CarouselItem key={item.id} className="pl-3 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="h-full">
                                    <ListingCard {...item} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="-left-4 bg-background shadow-lg border-border" />
                        <CarouselNext className="-right-4 bg-background shadow-lg border-border" />
                    </div>
                </Carousel>

                {link && (
                    <div className="mt-8 sm:hidden text-center">
                        <Button variant="outline" className="w-full group" asChild>
                            <Link href={link}>
                                {linkText || "View All"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}

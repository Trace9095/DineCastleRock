import { ArrowRight, Sparkles } from "lucide-react"
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
    badge?: string
}

export function FeaturedSection({ title, subtitle, items, link, linkText, badge }: FeaturedSectionProps) {
    return (
        <section className="py-20 md:py-28">
            <div className="container px-4 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <div>
                        {badge && (
                            <div className="inline-flex items-center gap-2 bg-[#E85D2B]/10 border border-[#E85D2B]/20 rounded-full px-4 py-1.5 mb-4">
                                <Sparkles className="w-4 h-4 text-[#E85D2B]" />
                                <span className="text-sm font-medium text-[#E85D2B]">{badge}</span>
                            </div>
                        )}
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">{title}</h2>
                        {subtitle && <div className="text-white/50 text-base md:text-lg">{subtitle}</div>}
                    </div>
                    {link && (
                        <Button
                            variant="outline"
                            size="lg"
                            className="hidden sm:inline-flex group rounded-full px-6 border border-white/10 text-white/70 hover:bg-[#E85D2B] hover:text-white hover:border-[#E85D2B] transition-all duration-300"
                            asChild
                        >
                            <Link href={link}>
                                {linkText || "View All"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </Button>
                    )}
                </div>

                {/* Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 md:-ml-6">
                        {items.map((item, index) => (
                            <CarouselItem
                                key={item.id}
                                className="pl-4 md:pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="h-full">
                                    <ListingCard {...item} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="-left-5 w-12 h-12 bg-[#12121a] border border-white/10 text-white hover:bg-[#E85D2B] hover:text-white hover:border-[#E85D2B] transition-all duration-300" />
                        <CarouselNext className="-right-5 w-12 h-12 bg-[#12121a] border border-white/10 text-white hover:bg-[#E85D2B] hover:text-white hover:border-[#E85D2B] transition-all duration-300" />
                    </div>
                </Carousel>

                {/* Mobile CTA */}
                {link && (
                    <div className="mt-10 sm:hidden text-center">
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full group rounded-full border border-white/10 text-white/70 hover:bg-[#E85D2B] hover:text-white hover:border-[#E85D2B] transition-all duration-300"
                            asChild
                        >
                            <Link href={link}>
                                {linkText || "View All"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}

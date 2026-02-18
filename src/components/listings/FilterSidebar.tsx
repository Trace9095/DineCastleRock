"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FilterSidebar() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Get current filter values from URL
    const currentPremium = searchParams.get('premium') === 'true'
    const currentOpenNow = searchParams.get('openNow') === 'true'
    const currentHasDeals = searchParams.get('hasDeals') === 'true'
    const currentPrices = searchParams.get('price')?.split(',') || []
    const currentCuisines = searchParams.get('cuisine')?.split(',') || []

    // Helper to update URL params
    const updateFilter = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value === null || value === '') {
            params.delete(key)
        } else {
            params.set(key, value)
        }
        router.push(`${pathname}?${params.toString()}`)
    }

    // Toggle array-based filter (price, cuisine)
    const toggleArrayFilter = (key: string, value: string, currentValues: string[]) => {
        let newValues: string[]
        if (currentValues.includes(value)) {
            newValues = currentValues.filter(v => v !== value)
        } else {
            newValues = [...currentValues, value]
        }
        updateFilter(key, newValues.length > 0 ? newValues.join(',') : null)
    }

    // Toggle boolean filter
    const toggleBooleanFilter = (key: string, currentValue: boolean) => {
        updateFilter(key, currentValue ? null : 'true')
    }

    // Reset all filters
    const resetFilters = () => {
        const params = new URLSearchParams()
        // Keep sort if it exists
        const sort = searchParams.get('sort')
        if (sort) params.set('sort', sort)
        router.push(`${pathname}?${params.toString()}`)
    }

    const hasActiveFilters = currentPremium || currentOpenNow || currentHasDeals ||
        currentPrices.length > 0 || currentCuisines.length > 0

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filters</h3>
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground h-auto p-0 hover:bg-transparent hover:text-foreground"
                        onClick={resetFilters}
                    >
                        Reset
                    </Button>
                )}
            </div>

            {/* Premium Toggle */}
            <div
                className={`relative group overflow-hidden rounded-xl border p-4 transition-all hover:shadow-md cursor-pointer ${
                    currentPremium ? 'bg-gradient-to-br from-[#E85D2B]/10 to-amber-500/10 border-[#E85D2B]/30' : 'bg-white/5 border-white/10'
                }`}
                onClick={() => toggleBooleanFilter('premium', currentPremium)}
            >
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <Label className="text-base font-medium cursor-pointer">
                            Premium Only
                        </Label>
                        <p className="text-xs text-muted-foreground">Show featured locations</p>
                    </div>
                    <div className={`w-11 h-6 rounded-full transition-colors ${
                        currentPremium ? 'bg-gradient-to-r from-[#E85D2B] to-amber-500' : 'bg-white/10'
                    }`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform mt-0.5 ${
                            currentPremium ? 'translate-x-5 ml-0.5' : 'translate-x-0.5'
                        }`} />
                    </div>
                </div>
            </div>

            <Accordion type="multiple" defaultValue={["availability", "price", "cuisine"]} className="w-full space-y-4">
                {/* Availability */}
                <AccordionItem value="availability" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-2 text-sm text-muted-foreground hover:text-foreground">
                        Availability
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => toggleBooleanFilter('openNow', currentOpenNow)}
                                className={`flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all hover:border-primary ${
                                    currentOpenNow
                                        ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                                        : 'bg-background'
                                }`}
                            >
                                Open Now
                            </button>
                            <button
                                onClick={() => toggleBooleanFilter('hasDeals', currentHasDeals)}
                                className={`flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all hover:border-primary ${
                                    currentHasDeals
                                        ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                                        : 'bg-background'
                                }`}
                            >
                                Has Deals
                            </button>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Price */}
                <AccordionItem value="price" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-2 text-sm text-muted-foreground hover:text-foreground">
                        Price Range
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <div className="flex w-full rounded-lg shadow-sm">
                            {["$", "$$", "$$$", "$$$$"].map((p, i, arr) => (
                                <button
                                    key={p}
                                    onClick={() => toggleArrayFilter('price', p, currentPrices)}
                                    className={`
                                        flex-1 h-9 flex items-center justify-center border text-sm font-medium transition-colors hover:bg-muted
                                        ${currentPrices.includes(p) ? 'bg-primary text-primary-foreground z-10' : 'bg-background'}
                                        ${i === 0 ? 'rounded-l-lg' : ''}
                                        ${i === arr.length - 1 ? 'rounded-r-lg' : ''}
                                        ${i !== 0 ? '-ml-px' : ''}
                                    `}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Cuisine */}
                <AccordionItem value="cuisine" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-2 text-sm text-muted-foreground hover:text-foreground">
                        Cuisine
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <div className="flex flex-wrap gap-2">
                            {["American", "Mexican", "Italian", "Asian", "Brewery", "Pizza", "BBQ", "Seafood"].map((c) => (
                                <button
                                    key={c}
                                    onClick={() => toggleArrayFilter('cuisine', c, currentCuisines)}
                                    className={`flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-all hover:bg-muted ${
                                        currentCuisines.includes(c)
                                            ? 'border-primary bg-primary/10 text-primary'
                                            : 'bg-background'
                                    }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

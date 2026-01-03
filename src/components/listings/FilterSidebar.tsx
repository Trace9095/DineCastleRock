"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FilterSidebar() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filters</h3>
                <Button variant="ghost" size="sm" className="text-muted-foreground h-auto p-0 hover:bg-transparent hover:text-foreground">
                    Reset
                </Button>
            </div>

            {/* Premium Toggle - Enhanced Design */}
            <div className="relative group overflow-hidden rounded-xl border bg-gradient-to-br from-background to-muted/30 p-4 transition-all hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center justify-between z-10">
                    <div className="space-y-1">
                        <Label htmlFor="premium-mode" className="text-base font-medium cursor-pointer">
                            Premium Only
                        </Label>
                        <p className="text-xs text-muted-foreground">Show only top-rated locations</p>
                    </div>
                    <Switch id="premium-mode" className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-500 data-[state=checked]:to-purple-600" />
                </div>
            </div>

            <Accordion type="multiple" defaultValue={["cuisine", "price", "availability"]} className="w-full space-y-4">
                {/* Availability */}
                <AccordionItem value="availability" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-2 text-sm text-muted-foreground hover:text-foreground">Availability</AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <div className="flex flex-wrap gap-2">
                            {["Open Now", "Has Deals"].map((label) => (
                                <div key={label} className="relative group">
                                    <Checkbox id={`filter-${label}`} className="peer sr-only" />
                                    <Label
                                        htmlFor={`filter-${label}`}
                                        className="flex cursor-pointer items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium transition-all hover:border-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:shadow-sm"
                                    >
                                        {label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Price */}
                <AccordionItem value="price" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-2 text-sm text-muted-foreground hover:text-foreground">Price Range</AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <div className="flex w-full rounded-lg shadow-sm">
                            {["$", "$$", "$$$", "$$$$"].map((p, i, arr) => (
                                <div key={p} className="flex-1 relative">
                                    <Checkbox id={`price-${p}`} className="peer sr-only" />
                                    <Label
                                        htmlFor={`price-${p}`}
                                        className={`
                                            flex h-9 w-full cursor-pointer items-center justify-center border bg-background text-sm font-medium transition-colors hover:bg-muted peer-focus-visible:ring-1
                                            peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:z-10
                                            ${i === 0 ? 'rounded-l-lg' : ''}
                                            ${i === arr.length - 1 ? 'rounded-r-lg' : ''}
                                            ${i !== 0 ? '-ml-px' : ''}
                                        `}
                                    >
                                        {p}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Cuisine */}
                <AccordionItem value="cuisine" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-2 text-sm text-muted-foreground hover:text-foreground">Cuisine</AccordionTrigger>
                    <AccordionContent className="pt-2">
                        <div className="flex flex-wrap gap-2">
                            {["American", "Mexican", "Italian", "Asian", "Brewery", "Pizza", "Coffee", "Dessert"].map((c) => (
                                <div key={c} className="relative">
                                    <Checkbox id={`cuisine-${c}`} className="peer sr-only" />
                                    <Label
                                        htmlFor={`cuisine-${c}`}
                                        className="flex cursor-pointer items-center rounded-full border bg-background px-3 py-1 text-sm font-medium transition-all hover:bg-muted peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
                                    >
                                        {c}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

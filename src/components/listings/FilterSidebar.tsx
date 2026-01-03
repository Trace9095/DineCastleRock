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
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filters</h3>
                <Button variant="ghost" size="sm" className="text-muted-foreground h-auto p-0 hover:bg-transparent hover:text-foreground">
                    Reset
                </Button>
            </div>

            {/* Premium Toggle */}
            <div className="flex items-center space-x-2 border p-3 rounded-lg bg-muted/20">
                <Switch id="premium-mode" />
                <Label htmlFor="premium-mode" className="text-sm font-medium cursor-pointer flex-1">
                    Show Premium only
                </Label>
            </div>

            <Accordion type="multiple" defaultValue={["cuisine", "price", "availability"]} className="w-full">
                {/* Availability */}
                <AccordionItem value="availability">
                    <AccordionTrigger>Availability</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex items-center space-x-2 mb-2">
                            <Checkbox id="open-now" />
                            <Label htmlFor="open-now" className="text-sm">Open Now</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="has-deals" />
                            <Label htmlFor="has-deals" className="text-sm">Has Deals</Label>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Price */}
                <AccordionItem value="price">
                    <AccordionTrigger>Price Range</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2">
                            {["$", "$$", "$$$", "$$$$"].map((p) => (
                                <Button key={p} variant="outline" size="sm" className="flex-1">
                                    {p}
                                </Button>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Cuisine */}
                <AccordionItem value="cuisine">
                    <AccordionTrigger>Cuisine</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2">
                            {["American", "Mexican", "Italian", "Asian", "Brewery", "Pizza", "Coffee", "Dessert"].map((c) => (
                                <div key={c} className="flex items-center space-x-2">
                                    <Checkbox id={`cuisine-${c}`} />
                                    <Label htmlFor={`cuisine-${c}`} className="text-sm">{c}</Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

"use client"

import { useState } from "react"
import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { FilterSidebar } from "./FilterSidebar"

export function MobileFilterDrawer() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setOpen(true)}
            >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="w-[300px] sm:w-[340px] overflow-y-auto">
                    <SheetHeader className="border-b pb-4">
                        <SheetTitle>Filter Results</SheetTitle>
                    </SheetHeader>
                    <div className="py-6">
                        <FilterSidebar />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

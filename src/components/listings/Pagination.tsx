"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    currentPage: number
    totalPages: number
    totalItems: number
    pageSize: number
}

export function Pagination({ currentPage, totalPages, totalItems, pageSize }: PaginationProps) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const goToPage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString())
        if (page === 1) {
            params.delete('page')
        } else {
            params.set('page', String(page))
        }
        router.push(`${pathname}?${params.toString()}`)
    }

    // Calculate range of items being shown
    const startItem = (currentPage - 1) * pageSize + 1
    const endItem = Math.min(currentPage * pageSize, totalItems)

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | string)[] = []
        const maxVisible = 5

        if (totalPages <= maxVisible) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            // Always show first page
            pages.push(1)

            if (currentPage > 3) {
                pages.push('...')
            }

            // Show pages around current
            const start = Math.max(2, currentPage - 1)
            const end = Math.min(totalPages - 1, currentPage + 1)

            for (let i = start; i <= end; i++) {
                if (!pages.includes(i)) {
                    pages.push(i)
                }
            }

            if (currentPage < totalPages - 2) {
                pages.push('...')
            }

            // Always show last page
            if (!pages.includes(totalPages)) {
                pages.push(totalPages)
            }
        }

        return pages
    }

    if (totalPages <= 1) {
        return null
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10">
            <p className="text-sm text-muted-foreground order-2 sm:order-1">
                Showing {startItem}-{endItem} of {totalItems}
            </p>

            <div className="flex items-center gap-1 order-1 sm:order-2">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                {getPageNumbers().map((page, index) => (
                    typeof page === 'number' ? (
                        <Button
                            key={index}
                            variant={currentPage === page ? "default" : "outline"}
                            size="icon"
                            className="h-9 w-9"
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </Button>
                    ) : (
                        <span key={index} className="px-2 text-muted-foreground">
                            {page}
                        </span>
                    )
                ))}

                <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

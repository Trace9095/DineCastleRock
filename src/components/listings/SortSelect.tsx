"use client"

import { useRouter, useSearchParams } from "next/navigation"

interface SortSelectProps {
    currentSort: string
    category: string
}

export function SortSelect({ currentSort, category }: SortSelectProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', newSort)
        router.push(`/${category}?${params.toString()}`)
    }

    return (
        <select
            name="sort"
            value={currentSort}
            onChange={handleChange}
            className="h-10 px-3 rounded-md border border-input bg-background text-sm min-w-[140px]"
        >
            <option value="rating">Top Rated</option>
            <option value="reviews">Most Reviewed</option>
            <option value="name">A to Z</option>
            <option value="newest">Newest</option>
        </select>
    )
}

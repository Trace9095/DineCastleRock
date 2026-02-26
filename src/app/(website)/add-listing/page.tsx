import type { Metadata } from "next"
import { AddListingClient } from "./add-listing-client"

export const metadata: Metadata = {
    title: "Add Your Business | Dine Castle Rock",
    description: "List your Castle Rock restaurant, bar, brewery, or cafe on Dine Castle Rock for free. Reach local diners and grow your business.",
    alternates: { canonical: "https://dinecastlerock.co/add-listing" },
}

export default function AddListingPage() {
    return <AddListingClient />
}

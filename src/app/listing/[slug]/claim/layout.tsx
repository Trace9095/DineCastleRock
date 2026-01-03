import { Metadata } from "next"

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
    title: "Claim Your Listing | Dine Castle Rock",
}

export default function ClaimLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}

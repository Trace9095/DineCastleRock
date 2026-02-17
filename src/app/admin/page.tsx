import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllListings, getActiveDeals, CATEGORIES } from "@/lib/data"
import { Store, TrendingUp, Tag, Users, Search, ExternalLink, Pencil } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Admin Dashboard | Dine Castle Rock",
    description: "Manage listings, claims, and content for Dine Castle Rock.",
    robots: { index: false, follow: false },
}

export default function AdminDashboard() {
    const listings = getAllListings()
    const deals = getActiveDeals()
    const premiumCount = listings.filter(l => l.isPremium).length

    // Mock Data for claims
    const pendingClaims = [
        { id: "1", business: "Tribe at Riverwalk", user: "john@tribe.com", date: "2025-10-12", status: "Pending" },
        { id: "2", business: "Union Bistro", user: "sarah@union.com", date: "2025-10-11", status: "Reviewing" },
    ]

    return (
        <div className="container max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-muted-foreground mt-1">Manage listings, claims, and content</p>
                </div>
                <Button asChild>
                    <Link href="/add-listing">Add New Listing</Link>
                </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Store className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{listings.length}</p>
                            <p className="text-sm text-muted-foreground">Total Listings</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-amber-500/10">
                            <TrendingUp className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{premiumCount}</p>
                            <p className="text-sm text-muted-foreground">Premium</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-500/10">
                            <Tag className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{deals.length}</p>
                            <p className="text-sm text-muted-foreground">Active Deals</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-blue-500/10">
                            <Users className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{pendingClaims.length}</p>
                            <p className="text-sm text-muted-foreground">Pending Claims</p>
                        </div>
                    </div>
                </Card>
            </div>

            <Tabs defaultValue="listings" className="space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                    <TabsTrigger value="listings">Listings</TabsTrigger>
                    <TabsTrigger value="claims">Claims</TabsTrigger>
                    <TabsTrigger value="categories">Categories</TabsTrigger>
                </TabsList>

                {/* Listings Tab */}
                <TabsContent value="listings" className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search listings..."
                                className="pl-9"
                            />
                        </div>
                    </div>

                    <div className="bg-card border rounded-xl overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[300px]">Business</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Rating</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Updated</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {listings.slice(0, 15).map((listing) => (
                                    <TableRow key={listing.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-muted overflow-hidden">
                                                    {listing.image && (
                                                        /* eslint-disable-next-line @next/next/no-img-element */
                                                        <img
                                                            src={listing.image}
                                                            alt={listing.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-medium">{listing.name}</p>
                                                    <p className="text-xs text-muted-foreground">{listing.cuisine}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="capitalize">
                                                {listing.categorySlug.replace('-', ' ')}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-medium">{listing.rating.toFixed(1)}</span>
                                            <span className="text-muted-foreground text-sm ml-1">({listing.reviewCount})</span>
                                        </TableCell>
                                        <TableCell>
                                            {listing.isPremium ? (
                                                <Badge className="bg-gradient-to-r from-amber-500 to-purple-600 text-white border-0">
                                                    Premium
                                                </Badge>
                                            ) : (
                                                <Badge variant="secondary">Standard</Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-sm text-muted-foreground">
                                            {listing.updatedAt.toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <Button size="icon" variant="ghost" asChild>
                                                    <Link href={`/listing/${listing.slug}`} target="_blank">
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button size="icon" variant="ghost" asChild>
                                                    <Link href={`/admin/listings/${listing.slug}`}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {listings.length > 15 && (
                        <p className="text-sm text-muted-foreground text-center">
                            Showing 15 of {listings.length} listings
                        </p>
                    )}
                </TabsContent>

                {/* Claims Tab */}
                <TabsContent value="claims">
                    <div className="bg-card border rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold">Pending Claims</h2>
                        </div>
                        {pendingClaims.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Business</TableHead>
                                        <TableHead>User Email</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {pendingClaims.map((claim) => (
                                        <TableRow key={claim.id}>
                                            <TableCell className="font-medium">{claim.business}</TableCell>
                                            <TableCell>{claim.user}</TableCell>
                                            <TableCell>{claim.date}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                                    {claim.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right space-x-2">
                                                <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700">
                                                    Approve
                                                </Button>
                                                <Button size="sm" variant="destructive">
                                                    Reject
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <p className="text-muted-foreground text-center py-8">No pending claims</p>
                        )}
                    </div>
                </TabsContent>

                {/* Categories Tab */}
                <TabsContent value="categories">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {CATEGORIES.map((category) => {
                            const count = listings.filter(l => l.categorySlug === category.slug).length
                            return (
                                <Card key={category.id} className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold">{category.name}</h3>
                                            <p className="text-sm text-muted-foreground">{count} listings</p>
                                        </div>
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={`/${category.slug}`}>View</Link>
                                        </Button>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

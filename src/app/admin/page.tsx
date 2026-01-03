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

export default function AdminDashboard() {
    // Mock Data
    const pendingClaims = [
        { id: "1", business: "Tribe at Riverwalk", user: "john@tribe.com", date: "2025-10-12", status: "Pending" },
        { id: "2", business: "Union Bistro", user: "sarah@union.com", date: "2025-10-11", status: "Reviewing" },
    ]

    return (
        <div className="container max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="space-y-8">
                <section className="bg-card border rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">Pending Claims</h2>
                        <Button variant="outline" size="sm">View All</Button>
                    </div>
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
                                    <TableCell><Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">{claim.status}</Badge></TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700">Approve</Button>
                                        <Button size="sm" variant="destructive">Reject</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </section>
            </div>
        </div>
    )
}

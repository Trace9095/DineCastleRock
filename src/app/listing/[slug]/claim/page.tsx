import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function ClaimPage({ params }: { params: { slug: string } }) {
    return (
        <div className="container max-w-lg mx-auto py-12">
            <Card>
                <CardHeader>
                    <CardTitle>Claim This Listing</CardTitle>
                    <CardDescription>
                        Verify your ownership of <strong>{params.slug}</strong> to manage details and access premium features.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="business-email">Business Email</Label>
                        <Input id="business-email" placeholder="you@restaurant.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (for verification)</Label>
                        <Input id="phone" placeholder="(555) 123-4567" />
                    </div>
                    <div className="bg-muted p-4 rounded-md text-sm">
                        <p>Verification involves:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Phone verification call</li>
                            <li>Document upload (Business License)</li>
                            <li>Admin review (24-48 hours)</li>
                        </ul>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Start Verification</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

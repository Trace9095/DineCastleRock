"use client"

import { useState, use } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Loader2, CheckCircle } from "lucide-react"

export default function ClaimPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        phone: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsLoading(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <div className="container max-w-lg mx-auto py-12">
                <Card className="border-green-200 bg-green-50">
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 bg-green-100 p-3 rounded-full w-fit">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <CardTitle className="text-green-800">Claim Request Sent!</CardTitle>
                        <CardDescription className="text-green-700">
                            We've received your request to claim <strong>{decodeURIComponent(slug)}</strong>. Check your email for next steps.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-green-700">
                        Our team will review your details and contact you within 24-48 hours.
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container max-w-lg mx-auto py-12">
            <Card>
                <CardHeader>
                    <CardTitle>Claim This Listing</CardTitle>
                    <CardDescription>
                        Verify your ownership of <strong>{decodeURIComponent(slug)}</strong> to manage details and access premium features.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="business-email">Business Email</Label>
                            <Input
                                id="business-email"
                                type="email"
                                placeholder="you@restaurant.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number (for verification)</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="(555) 123-4567"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground">
                            <p className="font-medium text-foreground mb-2">Verification involves:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Phone verification call</li>
                                <li>Document upload (Business License)</li>
                                <li>Admin review (24-48 hours)</li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                "Start Verification"
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

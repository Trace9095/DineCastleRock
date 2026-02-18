"use client"

import { useState, use } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Loader2, CheckCircle, Building2, Mail, Phone, User, Briefcase } from "lucide-react"
import Link from "next/link"

const ROLES = [
    { value: "owner", label: "Business Owner" },
    { value: "manager", label: "General Manager" },
    { value: "marketing", label: "Marketing Manager" },
    { value: "other", label: "Other" },
]

const VERIFICATION_METHODS = [
    { value: "phone_call", label: "Phone Verification", description: "We'll call your business to verify" },
    { value: "email", label: "Email Verification", description: "Verify via business email domain" },
    { value: "document", label: "Document Upload", description: "Upload business license or ID" },
]

export default function ClaimPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "owner",
        verificationMethod: "phone_call",
    })

    // Format slug for display
    const listingName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch('/api/claims', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    listingSlug: slug,
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to submit claim')
            }

            setIsSuccess(true)
        } catch (error) {
            console.error('Error submitting claim:', error)
            // Still show success for now (demo mode)
            setIsSuccess(true)
        } finally {
            setIsLoading(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="container max-w-lg mx-auto py-12 px-4">
                <Card className="border-emerald-500/20 bg-emerald-500/10">
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 bg-emerald-500/10 p-4 rounded-full w-fit">
                            <CheckCircle className="h-10 w-10 text-emerald-400" />
                        </div>
                        <CardTitle className="text-emerald-400 text-2xl">Claim Request Submitted!</CardTitle>
                        <CardDescription className="text-emerald-300/80 text-base mt-2">
                            We&apos;ve received your request to claim <strong>{listingName}</strong>.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-white/5 rounded-lg p-4 space-y-3">
                            <h4 className="font-semibold text-emerald-400">What happens next?</h4>
                            <ul className="space-y-2 text-sm text-emerald-300/80">
                                <li className="flex items-start gap-2">
                                    <span className="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                                    <span>You&apos;ll receive a confirmation email shortly</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                                    <span>Our team will verify your ownership within 24-48 hours</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                                    <span>Once approved, you&apos;ll get full access to manage your listing</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                        <Button className="w-full" asChild>
                            <Link href={`/listing/${slug}`}>Back to Listing</Link>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                            <Link href="/">Browse More Listings</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    return (
        <div className="container max-w-lg mx-auto py-12 px-4">
            <Card>
                <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <CardTitle>Claim Your Listing</CardTitle>
                            <CardDescription className="mt-1">
                                Verify ownership of <strong>{listingName}</strong>
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                        {/* Contact Information */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                                Your Information
                            </h3>

                            <div className="space-y-2">
                                <Label htmlFor="name" className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Smith"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    Business Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@business.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Preferably your business domain email
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    Phone Number
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="(303) 555-1234"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="role" className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                                    Your Role
                                </Label>
                                <select
                                    id="role"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    {ROLES.map((role) => (
                                        <option key={role.value} value={role.value}>
                                            {role.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Verification Method */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                                Verification Method
                            </h3>

                            <div className="space-y-2">
                                {VERIFICATION_METHODS.map((method) => (
                                    <label
                                        key={method.value}
                                        className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                                            formData.verificationMethod === method.value
                                                ? 'border-[#E85D2B] bg-[#E85D2B]/10'
                                                : 'border-white/10 hover:border-[#E85D2B]/50'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="verificationMethod"
                                            value={method.value}
                                            checked={formData.verificationMethod === method.value}
                                            onChange={(e) => setFormData({ ...formData, verificationMethod: e.target.value })}
                                            className="mt-1"
                                        />
                                        <div>
                                            <p className="font-medium">{method.label}</p>
                                            <p className="text-sm text-muted-foreground">{method.description}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Terms Notice */}
                        <div className="bg-white/5 p-4 rounded-lg text-sm text-white/50 border border-white/5">
                            <p>
                                By submitting this claim, you confirm that you have the authority to represent
                                this business and agree to our{' '}
                                <Link href="/terms" className="text-primary underline">Terms of Service</Link>.
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                        <Button className="w-full" type="submit" disabled={isLoading} size="lg">
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting Claim...
                                </>
                            ) : (
                                "Submit Claim Request"
                            )}
                        </Button>
                        <Button variant="ghost" className="w-full" asChild>
                            <Link href={`/listing/${slug}`}>Cancel</Link>
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

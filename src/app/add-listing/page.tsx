"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Store, Clock, Star, TrendingUp } from "lucide-react"

export default function AddListingPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
    const [formData, setFormData] = useState({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        website: "",
        address: "",
        category: "",
        description: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormState("submitting")
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setFormState("success")
    }

    if (formState === "success") {
        return (
            <div className="container max-w-2xl mx-auto px-4 py-16">
                <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-10 w-10 text-emerald-400" />
                    </div>
                    <h1 className="text-3xl font-bold">Submission Received!</h1>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                        Thank you for submitting your business. Our team will review your listing and reach out within 2-3 business days.
                    </p>
                    <div className="pt-4">
                        <Button asChild>
                            <Link href="/">Return to Home</Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0a0a14] via-[#12121a] to-[#E85D2B]/10 text-white py-16">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Add Your Business
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Join Castle Rock&apos;s premier dining directory. Get discovered by locals and visitors looking for great food and drink.
                    </p>
                </div>
            </div>

            <div className="container max-w-6xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Benefits Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <h2 className="text-xl font-semibold">Why List With Us?</h2>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Store className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Local Visibility</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Reach Castle Rock residents actively searching for dining options.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Drive Traffic</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Connect with customers ready to dine, order, or make reservations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Star className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Showcase Your Best</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Add photos, menus, deals, and special features to stand out.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Clock className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Quick Setup</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Basic listings are free. Submit now and get listed within days.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                            <h3 className="font-medium mb-2">Already Listed?</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                If your business is already on our site, you can claim and manage it directly.
                            </p>
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/restaurants">Find Your Listing</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#12121a] border border-white/5 rounded-xl p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-6">Business Information</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="businessName">Business Name *</Label>
                                        <Input
                                            id="businessName"
                                            placeholder="e.g., The Local Kitchen"
                                            required
                                            value={formData.businessName}
                                            onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="category">Category *</Label>
                                        <select
                                            id="category"
                                            required
                                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                                            value={formData.category}
                                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        >
                                            <option value="">Select a category</option>
                                            <option value="restaurant">Restaurant</option>
                                            <option value="bar">Bar & Nightlife</option>
                                            <option value="coffee">Coffee & Cafe</option>
                                            <option value="dessert">Dessert & Bakery</option>
                                            <option value="brewery">Brewery</option>
                                            <option value="food-truck">Food Truck</option>
                                            <option value="takeout">Takeout & Delivery</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">Business Address *</Label>
                                    <Input
                                        id="address"
                                        placeholder="Street address, Castle Rock, CO"
                                        required
                                        value={formData.address}
                                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                                    />
                                </div>

                                <Separator />

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="ownerName">Your Name *</Label>
                                        <Input
                                            id="ownerName"
                                            placeholder="Full name"
                                            required
                                            value={formData.ownerName}
                                            onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@business.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="(303) 555-0000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="website">Website</Label>
                                        <Input
                                            id="website"
                                            type="url"
                                            placeholder="https://yoursite.com"
                                            value={formData.website}
                                            onChange={(e) => setFormData({...formData, website: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="description">Tell us about your business</Label>
                                    <textarea
                                        id="description"
                                        rows={4}
                                        className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none"
                                        placeholder="What makes your establishment special? What should visitors know?"
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    />
                                </div>

                                <div className="bg-white/5 rounded-lg p-4 text-sm text-white/50 border border-white/5">
                                    <p>
                                        By submitting, you confirm you are authorized to represent this business.
                                        Our team will verify the submission and may contact you for additional information.
                                    </p>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full"
                                    disabled={formState === "submitting"}
                                >
                                    {formState === "submitting" ? "Submitting..." : "Submit for Review"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

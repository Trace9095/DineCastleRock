"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star, CheckCircle } from "lucide-react"

interface ReviewFormProps {
    listingName: string
    listingSlug: string
}

export function ReviewForm({ listingName, listingSlug }: ReviewFormProps) {
    const [rating, setRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        review: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (rating === 0) return

        setFormState("submitting")

        // Build mailto link with review data
        const subject = encodeURIComponent(`Review for ${listingName}`)
        const body = encodeURIComponent(
            `New Review Submission\n` +
            `------------------------\n` +
            `Business: ${listingName}\n` +
            `Listing: https://dinecastlerock.co/listing/${listingSlug}\n\n` +
            `Reviewer: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Rating: ${rating}/5 stars\n\n` +
            `Review:\n${formData.review}\n` +
            `------------------------\n` +
            `Submitted: ${new Date().toLocaleString()}`
        )

        // Open mailto
        window.location.href = `mailto:reviews@dinecastlerock.co?subject=${subject}&body=${body}`

        // Show success after brief delay
        setTimeout(() => {
            setFormState("success")
        }, 500)
    }

    if (formState === "success") {
        return (
            <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold">Thank You!</h3>
                <p className="text-muted-foreground">
                    Your email client should have opened with your review. Please send the email to submit your review.
                </p>
                <Button
                    variant="outline"
                    onClick={() => {
                        setFormState("idle")
                        setRating(0)
                        setFormData({ name: "", email: "", review: "" })
                    }}
                >
                    Write Another Review
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Star Rating */}
            <div className="space-y-2">
                <Label>Your Rating</Label>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="p-1 transition-transform hover:scale-110"
                        >
                            <Star
                                className={`h-8 w-8 ${
                                    star <= (hoveredRating || rating)
                                        ? "fill-amber-400 text-amber-400"
                                        : "text-white/20"
                                }`}
                            />
                        </button>
                    ))}
                </div>
                {rating === 0 && (
                    <p className="text-sm text-muted-foreground">Click to rate</p>
                )}
            </div>

            {/* Name */}
            <div className="space-y-2">
                <Label htmlFor="reviewer-name">Your Name</Label>
                <Input
                    id="reviewer-name"
                    placeholder="John D."
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="reviewer-email">Email</Label>
                <Input
                    id="reviewer-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">Your email won&apos;t be published</p>
            </div>

            {/* Review Text */}
            <div className="space-y-2">
                <Label htmlFor="review-text">Your Review</Label>
                <textarea
                    id="review-text"
                    rows={4}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none"
                    placeholder="Tell us about your experience..."
                    required
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                />
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={formState === "submitting" || rating === 0}
            >
                {formState === "submitting" ? "Submitting..." : "Submit Review"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
                Reviews are moderated before being published.
            </p>
        </form>
    )
}

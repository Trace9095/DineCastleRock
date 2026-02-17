"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw, AlertTriangle } from "lucide-react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application error:", error)
    }, [error])

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
            <div className="text-center max-w-md mx-auto space-y-6">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-10 h-10 text-destructive" />
                </div>

                {/* Error Message */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight">Something went wrong</h1>
                    <p className="text-muted-foreground">
                        We encountered an unexpected error. Please try again or return to the homepage.
                    </p>
                    {error.digest && (
                        <p className="text-xs text-muted-foreground font-mono">
                            Error ID: {error.digest}
                        </p>
                    )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Button onClick={() => reset()}>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/">
                            <Home className="w-4 h-4 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                </div>

                {/* Help Text */}
                <p className="text-xs text-muted-foreground pt-4">
                    If this problem persists, please{" "}
                    <a
                        href="mailto:hello@dinecastlerock.com?subject=Error%20Report"
                        className="underline hover:text-foreground transition-colors"
                    >
                        contact us
                    </a>
                    .
                </p>
            </div>
        </div>
    )
}

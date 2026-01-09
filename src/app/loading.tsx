import { Utensils } from "lucide-react"

export default function Loading() {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-4">
                {/* Animated Logo */}
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary flex items-center justify-center animate-pulse">
                    <Utensils className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Loading Text */}
                <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Loading...</p>
                </div>

                {/* Loading Bar */}
                <div className="w-48 h-1 bg-muted rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-primary rounded-full animate-shimmer" style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    )
}

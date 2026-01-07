import { SignIn } from "@clerk/nextjs"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sign In | Dine Castle Rock",
    description: "Sign in to your Dine Castle Rock account to manage your listings and save your favorite restaurants.",
}

export default function SignInPage() {
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome back</h1>
                    <p className="text-muted-foreground">
                        Sign in to manage your listings and saved restaurants
                    </p>
                </div>
                <SignIn
                    appearance={{
                        elements: {
                            rootBox: "mx-auto",
                            card: "shadow-none border rounded-xl",
                            headerTitle: "hidden",
                            headerSubtitle: "hidden",
                            socialButtonsBlockButton: "border hover:bg-muted transition-colors",
                            formButtonPrimary: "bg-primary hover:bg-primary/90",
                            footerActionLink: "text-primary hover:text-primary/80",
                        },
                    }}
                />
            </div>
        </div>
    )
}

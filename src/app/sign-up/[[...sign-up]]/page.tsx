import { SignUp } from "@clerk/nextjs"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sign Up | Dine Castle Rock",
    description: "Create a Dine Castle Rock account to claim your business listing, save favorites, and access exclusive features.",
}

export default function SignUpPage() {
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold tracking-tight mb-2">Create an account</h1>
                    <p className="text-muted-foreground">
                        Join Dine Castle Rock to claim your business or save your favorites
                    </p>
                </div>
                <SignUp
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

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    '/admin(.*)',
    '/dashboard(.*)',
]);

// Check if Clerk is configured
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Conditional middleware - only use Clerk if configured
const middleware = clerkPublishableKey
    ? clerkMiddleware(async (auth, req) => {
        if (isProtectedRoute(req)) {
            await auth.protect();
        }
    })
    : () => NextResponse.next();

export default middleware;

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};

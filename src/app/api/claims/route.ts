import { NextResponse } from 'next/server'
import { getListingBySlug } from '@/lib/data'

interface ClaimRequest {
    name: string
    email: string
    phone: string
    role: string
    verificationMethod: string
    listingSlug: string
}

// In-memory storage for demo (replace with Prisma when database is configured)
const claims: Array<ClaimRequest & { id: string; status: string; createdAt: Date }> = []

export async function POST(request: Request) {
    try {
        const body: ClaimRequest = await request.json()

        // Validate required fields
        if (!body.name || !body.email || !body.phone || !body.listingSlug) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Validate listing exists
        const listing = getListingBySlug(body.listingSlug)
        if (!listing) {
            return NextResponse.json(
                { error: 'Listing not found' },
                { status: 404 }
            )
        }

        // Create claim record (in-memory for demo)
        const claim = {
            id: `claim_${Date.now()}`,
            ...body,
            status: 'pending',
            createdAt: new Date(),
        }

        claims.push(claim)

        // In production, you would:
        // 1. Save to database using Prisma
        // 2. Send confirmation email to claimant
        // 3. Send notification to admin
        // 4. Log the claim for audit

        console.log('New claim submitted:', {
            claimId: claim.id,
            listing: listing.name,
            claimant: body.name,
            email: body.email,
        })

        return NextResponse.json({
            success: true,
            claimId: claim.id,
            message: 'Claim submitted successfully',
        })

    } catch (error) {
        console.error('Error processing claim:', error)
        return NextResponse.json(
            { error: 'Failed to process claim' },
            { status: 500 }
        )
    }
}

export async function GET() {
    // Return all claims (admin only in production)
    return NextResponse.json({
        claims: claims.map(c => ({
            id: c.id,
            listingSlug: c.listingSlug,
            name: c.name,
            email: c.email,
            status: c.status,
            createdAt: c.createdAt,
        })),
    })
}

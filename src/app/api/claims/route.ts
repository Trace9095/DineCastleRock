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

// In-memory storage (used when DATABASE_URL is not configured or Prisma unavailable)
const inMemoryClaims: Array<ClaimRequest & { id: string; status: string; createdAt: Date }> = []

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

        // Try to use Prisma if DATABASE_URL is configured
        if (process.env.DATABASE_URL) {
            try {
                const { prisma } = await import('@/lib/db')
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const claim = await (prisma as any).claim.create({
                    data: {
                        name: body.name,
                        email: body.email,
                        phone: body.phone || null,
                        role: body.role || 'Owner',
                        verificationMethod: body.verificationMethod || 'email',
                        listingId: body.listingSlug,
                        status: 'PENDING',
                    },
                })

                console.log('New claim submitted to database:', {
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
            } catch (dbError) {
                console.warn('Database unavailable, using in-memory storage:', dbError)
                // Fall through to in-memory storage
            }
        }

        // Fallback to in-memory storage
        const claim = {
            id: `claim_${Date.now()}`,
            ...body,
            status: 'pending',
            createdAt: new Date(),
        }

        inMemoryClaims.push(claim)

        console.log('New claim submitted (in-memory):', {
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
    // Try to use Prisma if DATABASE_URL is configured
    if (process.env.DATABASE_URL) {
        try {
            const { prisma } = await import('@/lib/db')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const claims = await (prisma as any).claim.findMany({
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    listingId: true,
                    name: true,
                    email: true,
                    phone: true,
                    role: true,
                    status: true,
                    createdAt: true,
                    reviewedAt: true,
                },
            })

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return NextResponse.json({
                claims: claims.map((c: { id: string; listingId: string; name: string; email: string; phone: string | null; role: string; status: string; createdAt: Date; reviewedAt: Date | null }) => ({
                    id: c.id,
                    listingSlug: c.listingId,
                    name: c.name,
                    email: c.email,
                    phone: c.phone,
                    role: c.role,
                    status: c.status.toLowerCase(),
                    createdAt: c.createdAt,
                    reviewedAt: c.reviewedAt,
                })),
            })
        } catch (dbError) {
            console.warn('Database unavailable, using in-memory storage:', dbError)
            // Fall through to in-memory storage
        }
    }

    // Fallback to in-memory storage
    return NextResponse.json({
        claims: inMemoryClaims.map(c => ({
            id: c.id,
            listingSlug: c.listingSlug,
            name: c.name,
            email: c.email,
            status: c.status,
            createdAt: c.createdAt,
        })),
    })
}

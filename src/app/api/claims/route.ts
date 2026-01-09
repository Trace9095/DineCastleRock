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

interface DbClaim {
    id: string
    listingId: string
    name: string
    email: string
    phone: string | null
    role: string
    status: string
    createdAt: Date
    reviewedAt: Date | null
}

// In-memory storage fallback (used when DATABASE_URL is not configured)
const inMemoryClaims: Array<ClaimRequest & { id: string; status: string; createdAt: Date }> = []

// Check if database is available
async function getDb() {
    if (!process.env.DATABASE_URL) {
        return null
    }
    try {
        const { prisma } = await import('@/lib/db')
        return prisma
    } catch {
        return null
    }
}

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

        const db = await getDb()

        if (db) {
            // Use Prisma database
            const claim = await db.claim.create({
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
        } else {
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
        }

    } catch (error) {
        console.error('Error processing claim:', error)
        return NextResponse.json(
            { error: 'Failed to process claim' },
            { status: 500 }
        )
    }
}

export async function GET() {
    const db = await getDb()

    if (db) {
        // Fetch from Prisma database
        const claims = await db.claim.findMany({
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

        return NextResponse.json({
            claims: (claims as DbClaim[]).map((c: DbClaim) => ({
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

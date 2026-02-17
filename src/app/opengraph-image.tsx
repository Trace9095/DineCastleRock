import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Dine Castle Rock - Castle Rock\'s Premier Dining Guide'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1c1917 0%, #292524 40%, #44403c 100%)',
                    position: 'relative',
                }}
            >
                {/* Decorative gradient orbs */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-150px',
                        left: '-100px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(234,88,12,0.2) 0%, transparent 70%)',
                    }}
                />

                {/* Main content container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '60px',
                        zIndex: 10,
                    }}
                >
                    {/* Logo container with glow */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '32px',
                        }}
                    >
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '56px',
                                fontWeight: 800,
                                color: '#ffffff',
                                boxShadow: '0 20px 60px rgba(249,115,22,0.4)',
                            }}
                        >
                            D
                        </div>
                    </div>

                    {/* Title */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '80px',
                                fontWeight: 800,
                                color: '#ffffff',
                                letterSpacing: '-3px',
                                marginBottom: '12px',
                                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            }}
                        >
                            Dine Castle Rock
                        </div>
                        <div
                            style={{
                                fontSize: '32px',
                                fontWeight: 500,
                                color: '#d6d3d1',
                                letterSpacing: '1px',
                            }}
                        >
                            Castle Rock&apos;s Premier Dining Guide
                        </div>
                    </div>

                    {/* Category pills */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginTop: '48px',
                        }}
                    >
                        {['Restaurants', 'Bars', 'Breweries', 'Coffee', 'Deals'].map((category) => (
                            <div
                                key={category}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '100px',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    color: '#a8a29e',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                }}
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom URL bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        height: '60px',
                        background: 'rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <div
                        style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            color: '#f97316',
                            letterSpacing: '0.5px',
                        }}
                    >
                        dinecastlerock.co
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}

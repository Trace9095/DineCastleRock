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
                    backgroundColor: '#18181b',
                    backgroundImage: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #3f3f46 100%)',
                }}
            >
                {/* Subtle pattern overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 0%, transparent 50%)',
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
                    }}
                >
                    {/* Logo/Brand mark */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '40px',
                        }}
                    >
                        <div
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '20px',
                                backgroundColor: '#f4f4f5',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '40px',
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
                                fontSize: '72px',
                                fontWeight: 700,
                                color: '#ffffff',
                                letterSpacing: '-2px',
                                marginBottom: '16px',
                            }}
                        >
                            Dine Castle Rock
                        </div>
                        <div
                            style={{
                                fontSize: '28px',
                                fontWeight: 400,
                                color: '#a1a1aa',
                                letterSpacing: '0.5px',
                            }}
                        >
                            Castle Rock&apos;s Premier Dining Guide
                        </div>
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '32px',
                            marginTop: '48px',
                            color: '#71717a',
                            fontSize: '20px',
                        }}
                    >
                        <span>Restaurants</span>
                        <span style={{ color: '#52525b' }}>|</span>
                        <span>Bars</span>
                        <span style={{ color: '#52525b' }}>|</span>
                        <span>Breweries</span>
                        <span style={{ color: '#52525b' }}>|</span>
                        <span>Cafes</span>
                    </div>
                </div>

                {/* URL at bottom */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        fontSize: '18px',
                        color: '#52525b',
                    }}
                >
                    dinecastlerock.co
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}

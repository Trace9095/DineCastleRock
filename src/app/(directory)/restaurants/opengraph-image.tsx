import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Best Restaurants in Castle Rock - Dine Castle Rock'
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
                    background: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 40%, #c2410c 100%)',
                    position: 'relative',
                }}
            >
                {/* Decorative gradient orbs */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-80px',
                        right: '-50px',
                        width: '350px',
                        height: '350px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(251,146,60,0.4) 0%, transparent 70%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-100px',
                        left: '-80px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)',
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
                    {/* Icon */}
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
                                background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px',
                                boxShadow: '0 20px 60px rgba(251,146,60,0.4)',
                            }}
                        >
                            🍽️
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
                                fontWeight: 800,
                                color: '#ffffff',
                                letterSpacing: '-2px',
                                marginBottom: '12px',
                                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            }}
                        >
                            Restaurants
                        </div>
                        <div
                            style={{
                                fontSize: '36px',
                                fontWeight: 500,
                                color: '#fed7aa',
                                letterSpacing: '0.5px',
                            }}
                        >
                            Castle Rock&apos;s Best Dining
                        </div>
                    </div>

                    {/* Cuisine pills */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginTop: '48px',
                        }}
                    >
                        {['Italian', 'American', 'Mexican', 'Seafood', 'Fine Dining'].map((cuisine) => (
                            <div
                                key={cuisine}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '100px',
                                    background: 'rgba(255,255,255,0.15)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    color: '#ffedd5',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                }}
                            >
                                {cuisine}
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
                        background: 'rgba(0,0,0,0.25)',
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
                            color: '#fb923c',
                            letterSpacing: '0.5px',
                        }}
                    >
                        dinecastlerock.co/restaurants
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}

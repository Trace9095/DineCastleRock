import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Coffee Shops in Castle Rock - Cafes & Espresso Bars'
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
                    background: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #78716c 100%)',
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
                        background: 'radial-gradient(circle, rgba(168,162,158,0.4) 0%, transparent 70%)',
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
                        background: 'radial-gradient(circle, rgba(214,211,209,0.25) 0%, transparent 70%)',
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
                                background: 'linear-gradient(135deg, #d6d3d1 0%, #a8a29e 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px',
                                boxShadow: '0 20px 60px rgba(168,162,158,0.4)',
                            }}
                        >
                            ☕
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
                            Coffee
                        </div>
                        <div
                            style={{
                                fontSize: '36px',
                                fontWeight: 500,
                                color: '#e7e5e4',
                                letterSpacing: '0.5px',
                            }}
                        >
                            Castle Rock Cafes & Espresso
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
                        {['Espresso', 'Local Roasters', 'Pastries', 'WiFi Spots', 'Drive-Thru'].map((category) => (
                            <div
                                key={category}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '100px',
                                    background: 'rgba(255,255,255,0.15)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    color: '#f5f5f4',
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
                            color: '#d6d3d1',
                            letterSpacing: '0.5px',
                        }}
                    >
                        dinecastlerock.co/coffee
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}

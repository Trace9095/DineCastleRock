import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Activities & Entertainment in Castle Rock - Adventures & Attractions'
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
                    background: 'linear-gradient(135deg, #0e7490 0%, #0891b2 40%, #06b6d4 100%)',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '-80px',
                        right: '-50px',
                        width: '350px',
                        height: '350px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
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
                        background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
                    }}
                />

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
                                background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px',
                                boxShadow: '0 20px 60px rgba(6,182,212,0.4)',
                            }}
                        >
                            🎉
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '56px',
                                fontWeight: 800,
                                color: '#ffffff',
                                letterSpacing: '-2px',
                                marginBottom: '12px',
                                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            }}
                        >
                            Activities & Entertainment
                        </div>
                        <div
                            style={{
                                fontSize: '36px',
                                fontWeight: 500,
                                color: '#a5f3fc',
                                letterSpacing: '0.5px',
                            }}
                        >
                            Fun Things To Do in Castle Rock
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginTop: '48px',
                        }}
                    >
                        {['Adventures', 'Recreation', 'Entertainment', 'Sports', 'Outdoors'].map((item) => (
                            <div
                                key={item}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '100px',
                                    background: 'rgba(255,255,255,0.15)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    color: '#cffafe',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

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
                            color: '#22d3ee',
                            letterSpacing: '0.5px',
                        }}
                    >
                        dinecastlerock.co/activities
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}

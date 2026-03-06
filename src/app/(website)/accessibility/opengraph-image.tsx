import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Accessibility — Dine Castle Rock'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 100%)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-50px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,163,184,0.3) 0%, transparent 70%)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '24px', background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '56px', fontWeight: 800, color: '#ffffff', boxShadow: '0 20px 60px rgba(249,115,22,0.4)' }}>D</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '72px', fontWeight: 800, color: '#ffffff', letterSpacing: '-2px', marginBottom: '12px' }}>Accessibility</div>
            <div style={{ fontSize: '30px', fontWeight: 500, color: '#cbd5e1' }}>Our Commitment to Inclusive Access</div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '60px', background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontSize: '20px', fontWeight: 600, color: '#f97316', letterSpacing: '0.5px' }}>dinecastlerock.co</div>
        </div>
      </div>
    ),
    { ...size }
  )
}

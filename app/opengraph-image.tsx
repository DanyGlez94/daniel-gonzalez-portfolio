import { ImageResponse } from 'next/og'
import { HERO_BADGE } from '@/lib/site-config'

export const alt =
  'Daniel Gonzalez — Frontend Engineer · Fullstack · UX · Accessibility'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(circle at 15% 0%, rgba(91, 108, 243, 0.18), transparent 55%), #0a0a14',
          fontFamily: 'sans-serif',
          color: '#f5f5f7',
        }}
      >
        {/* Top: availability badge */}
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 22px',
              borderRadius: '999px',
              border: '1px solid rgba(91, 108, 243, 0.45)',
              background: 'rgba(91, 108, 243, 0.12)',
              fontSize: '20px',
              color: '#a8b3ff',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 12px rgba(34, 197, 94, 0.7)',
              }}
            />
            {HERO_BADGE}
          </div>
        </div>

        {/* Center: name + title */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '160px',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
            }}
          >
            <span style={{ color: '#5b6cf3' }}>Daniel</span>
            <span>Gonzalez</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: '40px',
            }}
          >
            <div style={{ fontSize: '40px', color: '#a8b3ff', fontWeight: 600 }}>
              Frontend Engineer
            </div>
            <div
              style={{
                fontSize: '22px',
                color: 'rgba(245, 245, 247, 0.55)',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Fullstack · UX · Accessibility
            </div>
          </div>
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '24px',
            color: 'rgba(245, 245, 247, 0.55)',
            fontFamily: 'monospace',
          }}
        >
          <span style={{ letterSpacing: '0.05em' }}>danygonzalez.dev</span>
          <span style={{ letterSpacing: '0.2em', fontSize: '18px' }}>
            5+ YEARS · REACT · NODE.JS
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}

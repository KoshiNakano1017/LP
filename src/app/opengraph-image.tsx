import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Nakano System | AI-native full-stack engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 6,
            background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            background: 'rgba(59,130,246,0.15)',
            border: '1px solid rgba(59,130,246,0.4)',
            borderRadius: 8,
            padding: '8px 20px',
            color: '#93c5fd',
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 28,
            letterSpacing: 1,
          }}
        >
          AI-native full-stack engineer
        </div>

        {/* Name */}
        <div
          style={{
            color: '#f1f5f9',
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 20,
            letterSpacing: -1,
          }}
        >
          Nakano System
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#60a5fa',
            fontSize: 30,
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          Ships solo from spec to infra.
        </div>

        {/* JP desc */}
        <div
          style={{
            color: '#94a3b8',
            fontSize: 22,
            lineHeight: 1.5,
          }}
        >
          要件定義からフロント・バック・インフラ・MLまで、分業なしで一人で完結
        </div>

        {/* Tech pills */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 48,
            flexWrap: 'wrap',
          }}
        >
          {['Next.js', 'FastAPI', 'LightGBM', 'RAG', 'AWS / GCP', 'Stripe'].map((t) => (
            <div
              key={t}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 6,
                padding: '6px 16px',
                color: '#cbd5e1',
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            right: 80,
            color: '#475569',
            fontSize: 18,
          }}
        >
          nakano-system.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}

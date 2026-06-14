import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'AIプロダクト & ソリューション | Koshi Nakano';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)',
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
            background: 'linear-gradient(90deg, #6366f1, #a855f7)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            background: 'rgba(99,102,241,0.15)',
            border: '1px solid rgba(99,102,241,0.4)',
            borderRadius: 8,
            padding: '8px 20px',
            color: '#a5b4fc',
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          AI Products &amp; Solutions
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#f1f5f9',
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          ビジネスの課題を、
          <br />
          <span style={{ color: '#818cf8' }}>AI実装力</span>で突破する。
        </div>

        {/* Sub */}
        <div
          style={{
            color: '#94a3b8',
            fontSize: 22,
            lineHeight: 1.6,
            maxWidth: 720,
          }}
        >
          AI動画自動生成 / LINE × RAG / 予測SaaS / 経営層向けAIモーニングニュース
        </div>

        {/* CTA hint */}
        <div
          style={{
            marginTop: 48,
            background: 'rgba(99,102,241,0.2)',
            border: '1px solid rgba(99,102,241,0.5)',
            borderRadius: 40,
            padding: '14px 36px',
            color: '#c7d2fe',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          プロジェクトの相談をする →
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
          koshi-nakano.vercel.app/solutions
        </div>
      </div>
    ),
    { ...size },
  );
}

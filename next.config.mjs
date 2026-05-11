// 'unsafe-inline' is intentional: Next.js emits inline hydration scripts and
// Framer Motion injects inline styles. The portfolio takes no user input, so
// XSS surface is minimal; nonce-based CSP would be cleaner but adds middleware
// complexity not worth the marginal gain here.
//
// Vercel Live (the feedback/comments overlay on preview URLs) is allowlisted
// only when VERCEL_ENV is 'preview' — production stays strict.
const isPreview = process.env.VERCEL_ENV === 'preview'

const vercelLive = {
  script: isPreview ? ' https://vercel.live' : '',
  style: isPreview ? ' https://vercel.live' : '',
  font: isPreview ? ' https://vercel.live https://assets.vercel.com' : '',
  img: isPreview ? ' https://vercel.live https://vercel.com' : '',
  connect: isPreview ? ' https://vercel.live wss://ws-us3.pusher.com' : '',
  frame: isPreview ? "'self' https://vercel.live" : "'none'",
}

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com${vercelLive.script};
  style-src 'self' 'unsafe-inline'${vercelLive.style};
  img-src 'self' blob: data:${vercelLive.img};
  font-src 'self' data:${vercelLive.font};
  connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com${vercelLive.connect};
  frame-src ${vercelLive.frame};
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  object-src 'none';
  upgrade-insecure-requests;
`
  .replace(/\n/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

const securityHeaders = [
  { key: 'Content-Security-Policy', value: cspHeader },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig

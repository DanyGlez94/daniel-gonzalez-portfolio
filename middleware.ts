import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isPreview = process.env.VERCEL_ENV === 'preview'

const vercelLive = {
  script: isPreview ? ' https://vercel.live' : '',
  style: isPreview ? ' https://vercel.live' : '',
  font: isPreview ? ' https://vercel.live https://assets.vercel.com' : '',
  img: isPreview ? ' https://vercel.live https://vercel.com' : '',
  connect: isPreview ? ' https://vercel.live wss://ws-us3.pusher.com' : '',
  frame: isPreview ? "'self' https://vercel.live" : "'none'",
}

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  // Style still uses 'unsafe-inline' because Framer Motion injects styles
  // directly into the DOM (no element to attach a nonce to). Style-based XSS
  // is much rarer than script-based, so this is an acceptable trade-off.
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://va.vercel-scripts.com${vercelLive.script};
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
    .replace(/\s{2,}/g, ' ')
    .trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', cspHeader)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })
  response.headers.set('Content-Security-Policy', cspHeader)

  return response
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|icons|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.webp).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}

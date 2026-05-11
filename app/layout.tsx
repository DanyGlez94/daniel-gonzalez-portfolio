import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { headers } from 'next/headers'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import CursorSpotlight from '@/components/cursor-spotlight'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const SITE_URL = 'https://danygonzalez.dev'
const SITE_TITLE = 'Daniel Gonzalez — Frontend Engineer'
const SITE_DESCRIPTION =
  'Fullstack JavaScript engineer with 5+ years shipping accessible React apps for U.S. govtech. End-to-end: UX, React UI, Node.js, WCAG 2.1 AA.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s — Daniel Gonzalez',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Frontend Engineer',
    'JavaScript Engineer',
    'React',
    'TypeScript',
    'Next.js',
    'Accessibility',
    'WCAG 2.1 AA',
    'GovTech',
    'Compliance',
    'Daniel Gonzalez',
  ],
  authors: [{ name: 'Daniel Gonzalez', url: 'https://www.linkedin.com/in/danyglez94/' }],
  creator: 'Daniel Gonzalez',
  verification: {
    google: 'h0UKXsmv7Ne9AtNd1U_Qp9LzMQ4MIsCxX31HXQzhcaI',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
    locale: 'en_US',
    siteName: 'Daniel Gonzalez',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: '@DanielGlez94',
  },
}

export const viewport = {
  themeColor: '#0a0a14',
  width: 'device-width',
  initialScale: 1,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Gonzalez',
  givenName: 'Daniel',
  familyName: 'Gonzalez',
  jobTitle: 'Frontend Engineer',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  sameAs: [
    'https://github.com/DanyGlez94',
    'https://www.linkedin.com/in/danyglez94/',
    'https://twitter.com/DanielGlez94',
  ],
  knowsAbout: [
    'Frontend Engineering',
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Web Accessibility',
    'WCAG 2.1 AA',
    'GovTech',
    'UX Design',
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <CursorSpotlight />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

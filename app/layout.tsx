import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
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
  'Fullstack JavaScript engineer with 5+ years across React, Node.js, and UX. Building secure, accessible, and compliance-focused web applications for U.S. government and enterprise clients. End-to-end work: UX mockups, React UI, middle-layer integrations, and WCAG 2.1 AA accessibility.'

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
    creator: '@DanyGlez94',
  },
}

export const viewport = {
  themeColor: '#0a0a14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <CursorSpotlight />
        {children}
      </body>
    </html>
  )
}

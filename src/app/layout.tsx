import type { Metadata } from 'next'
import { Montserrat, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'

// Primary font — all body copy, headings, CTAs
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

// Monospace — eyebrows, stats labels, code snippets
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-loaded',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.checkamo.com'),
  title: {
    default: 'Checkamo — Verify Anything, Anywhere in Nigeria',
    template: '%s | Checkamo',
  },
  description:
    'Connect with trusted local verifiers for properties, products, documents, and more. Or earn money by becoming a verifier. Safe, secure, and reliable.',
  keywords: [
    'verification Nigeria',
    'property verification Lagos',
    'product authentication Nigeria',
    'document verification',
    'earn money as verifier',
    'checkamo',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://www.checkamo.com',
    siteName: 'Checkamo',
    title: 'Checkamo — Verify Anything, Anywhere in Nigeria',
    description:
      'Trusted verification platform connecting users with local experts across Nigeria.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Checkamo — Verification Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checkamo — Verify Before You Buy',
    description: 'Connect with local verifiers across Nigeria.',
    images: ['/twitter-card.jpg'],
    creator: '@checkamo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.checkamo.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
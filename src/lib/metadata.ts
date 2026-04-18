import type { Metadata } from 'next'

interface PageMetaOptions {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}

export function buildMeta({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `https://www.checkamo.com${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  }
}
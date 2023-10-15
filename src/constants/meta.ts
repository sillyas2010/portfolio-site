import { Metadata } from 'next'

const metaTitle = 'Illia Hloza developer portfolio'
const metaDescription =
  'Web developer with large variety of technical skills (React, Typescript, Next.JS, Node.JS)'
const websiteDomain = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_DOMAIN

export const metadata: Metadata = {
  title: {
    default: metaTitle,
    template: `%s | ${metaTitle}`,
  },
  metadataBase: new URL(`https://${websiteDomain}`),
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `/`,
    siteName: websiteDomain,
    images: [
      {
        url: `/android-chrome-512x512.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
  twitter: {
    title: metaTitle,
    card: 'summary_large_image',
  },
  manifest: '/site.webmanifest',
  icons: [
    {
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
      rel: 'apple-touch-icon',
    },
    {
      url: '/safari-pinned-tab.svg',
      type: 'image/svg+xml',
      rel: 'mask-icon',
    },
    {
      url: '/apple-touch-icon.png',
      type: 'apple-touch-icon',
      sizes: '180x180',
      rel: 'icon',
    },
    {
      url: '/android-chrome-512x512.png',
      type: 'image/png',
      sizes: '512x512',
      rel: 'icon',
    },
    {
      url: '/android-chrome-192x192.png',
      type: 'image/png',
      sizes: '192x192',
      rel: 'icon',
    },
    {
      url: '/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32',
      rel: 'icon',
    },
    {
      url: '/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16',
      rel: 'icon',
    },
  ],
}

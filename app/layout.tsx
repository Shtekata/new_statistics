import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | MyPerfume',
    default: 'MyPerfume',
  },
  applicationName: 'MyPerfume',
  description: 'Next.js application with many diverse function and capabilities!',
  metadataBase: new URL('https://myperfume.bg'),
  alternates: {
    canonical: 'https://myperfume.bg',
    languages: {
      'en-US': 'https://myperfume.bg/en-US',
    },
  },
  openGraph: {
    images: '/og-image.png',
    type: 'website',
    title: 'MyPerfume',
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'Asen Geshev',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: { me: ['gesheval@gmail.com'] },
  },
  appLinks: {
    web: { url: 'https://myperfume.bg' },
  },
  archives: ['https://myperfume.bg'],
  assets: ['https://myperfume.bg'],
  bookmarks: ['https://myperfume.bg'],
  category: 'technology and statistics',
  creator: 'Asen Geshev',
  publisher: 'Geshlandia Ltd.',
  generator: 'Next.js',
  keywords: ['Next.js', 'statistics', 'perfumes'],
  manifest: 'https://myperfume.bg/manifest.json',
  other: { custom: ['fun', 'flavors', 'fantastic'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

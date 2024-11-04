import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MyPerfume',
  applicationName: 'MyPerfume',
  description: 'Next.js application with many diverse function and capabilities!',
  metadataBase: new URL('https://myperfume.bg'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
  creator: 'Asen Geshev',
  publisher: 'Geshlandia Ltd.',
  generator: 'Next.js',
  keywords: ['Next.js', 'statistics', 'perfumes'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

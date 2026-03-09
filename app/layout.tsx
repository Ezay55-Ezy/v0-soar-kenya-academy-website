import type { Metadata, Viewport } from 'next'
import { Nunito, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SOAR Kenya Academy | Service Above Self',
  description: 'SOAR Kenya Academy is a non-profit day and boarding primary school in Nakuru, Kenya, providing knowledge and skills to children in need and the community at large.',
  keywords: ['SOAR Kenya', 'school', 'Nakuru', 'Kenya', 'education', 'orphans', 'non-profit', 'charity'],
  authors: [{ name: 'SOAR Kenya Academy' }],
  openGraph: {
    title: 'SOAR Kenya Academy | Service Above Self',
    description: 'Providing knowledge and skills to children in need since 2011',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#7B5EA7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

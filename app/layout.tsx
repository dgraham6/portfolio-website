import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import './globals.css'
import { Shell } from './shell'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5f3ee',
}

export const metadata = {
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Drake Graham – Portfolio',
    template: '%s | Drake Graham'
  },
  description: 'Drake Graham’s personal website showcasing projects, skills, and experience.',
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${newsreader.variable} bg-cream tracking-tight antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-geist)]">
          <Shell>{children}</Shell>
        </div>
      </body>
    </html>
  )
}


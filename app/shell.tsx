'use client'

import { usePathname } from 'next/navigation'
import { Header } from './header'
import { Footer } from './footer'

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  // The home page owns its full-bleed landing + scroll layout.
  if (isHome) {
    return <>{children}</>
  }

  return (
    <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
      <Header />
      <div className="mt-16">{children}</div>
      <Footer />
    </div>
  )
}

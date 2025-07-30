'use client'

import Link from 'next/link'
import { TextEffect } from '@/components/ui/text-effect'
import { ParticlesBackground } from '@/components/ui/particle-background'

export function Header() {
  return (
    <div className="relative overflow-hidden">
      {/* Particle “net” behind the header */}
      <ParticlesBackground />

      {/* Your actual header content */}
      <header className="relative z-10 mb-20 flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="font-medium text-3xl text-black dark:text-white"
          >
            Drake Graham
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Data Scientist
          </TextEffect>
        </div>
      </header>
    </div>
  )
}

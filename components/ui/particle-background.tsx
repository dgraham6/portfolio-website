'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { useTheme } from 'next-themes'
import type { Engine, Container, IOptions } from 'tsparticles-engine'
import type { RecursivePartial } from 'tsparticles-engine'

export function ParticlesBackground() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const dotColor = isDark ? '#ffffff' : '#000000'

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log('Particles loaded')
  }, [])

  const options: RecursivePartial<IOptions> = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 300, density: { enable: true, area: 800 } },
      color: { value: dotColor },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 2 },
      links: {
        enable: true,
        distance: 90,
        color: dotColor,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        outModes: {
          default: 'bounce' as const,  // satisfy the literal type
        },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.6 } },
      },
    },
    detectRetina: true,
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 z-0"
    />
  )
}

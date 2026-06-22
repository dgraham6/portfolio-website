'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-20 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="font-[family-name:var(--font-newsreader)] text-3xl font-medium text-ink dark:text-white"
        >
          Drake Graham
        </Link>
        <p className="text-zinc-600 dark:text-zinc-500">data scientist</p>
      </div>
    </header>
  )
}

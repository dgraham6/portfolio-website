'use client'
import { TextLoop } from '@/components/ui/text-loop'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4">
      <div className="flex items-center justify-between">
        <a href="" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>Drake Graham</span>
            <span>Umich</span>
          </TextLoop>
        </a>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const docsComponents = [
  { slug: 'button', name: 'Button' },
  { slug: 'input', name: 'Input' },
  { slug: 'title', name: 'Title' },
  { slug: 'badge', name: 'Badge' },
  { slug: 'card', name: 'Card' },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-20 h-fit w-56 flex-shrink-0">
      <div className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-vui-text-subtle">
        Components
      </div>
      <nav className="flex flex-col gap-0.5">
        {docsComponents.map((c) => {
          const isActive = pathname === `/docs/${c.slug}`
          return (
            <Link
              key={c.slug}
              href={`/docs/${c.slug}`}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-vui-primary-soft text-vui-primary'
                  : 'text-vui-text-muted hover:bg-vui-surface-muted hover:text-vui-text'
              }`}
            >
              {c.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

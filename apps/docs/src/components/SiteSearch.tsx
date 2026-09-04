'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { componentCategories, gettingStartedItems, pageExamples } from '@/lib/navigation'
import { Icon } from './Icon'

const entries = [
  ...gettingStartedItems.map((item) => ({
    ...item,
    href: '/docs/' + item.slug,
    group: 'Documentation',
  })),
  { name: 'AI agent guide', slug: 'ai-guide', href: '/docs/ai-guide', group: 'Documentation' },
  ...componentCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      href: '/docs/' + item.slug,
      group: category.label + ' components',
    })),
  ),
  ...pageExamples.flatMap((category) =>
    category.pages.map((item) => ({
      ...item,
      href: '/examples/' + item.slug,
      group: category.label + ' examples',
    })),
  ),
]
const aliases: Record<string, string> = {
  dialog: 'modal popup',
  dropdown: 'menu actions',
  switch: 'toggle',
  installation: 'install npm pnpm yarn bun setup next vite react',
  theming: 'theme color dark density customize',
  input: 'text field email form',
  toast: 'notification snackbar',
}

export function SiteSearch() {
  const dialog = useRef<HTMLDialogElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const originalOverflow = useRef<string | null>(null)
  const [query, setQuery] = useState('')
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const router = useRouter()
  const results = useMemo(() => {
    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
    if (!words.length)
      return entries.filter((entry) =>
        ['installation', 'button', 'input', 'dialog', 'theming', 'dashboard'].includes(entry.slug),
      )
    return entries.filter((entry) =>
      words.every((word) =>
        `${entry.name} ${entry.group} ${aliases[entry.slug] || ''}`.toLowerCase().includes(word),
      ),
    )
  }, [query])

  function openSearch() {
    setQuery('')
    dialog.current?.showModal()
    if (originalOverflow.current === null) originalOverflow.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    input.current?.focus()
  }

  function restoreScroll() {
    if (originalOverflow.current !== null) {
      document.body.style.overflow = originalOverflow.current
      originalOverflow.current = null
    }
  }

  useEffect(() => {
    if (previousPathname.current !== pathname) dialog.current?.close()
    previousPathname.current = pathname
  }, [pathname])
  useEffect(() => {
    function shortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        if (dialog.current?.open) dialog.current.close()
        else openSearch()
      }
    }
    document.addEventListener('keydown', shortcut)
    return () => {
      document.removeEventListener('keydown', shortcut)
      restoreScroll()
    }
  }, [])

  return (
    <>
      <button
        type="button"
        className="site-search-trigger"
        onClick={openSearch}
        aria-label="Search documentation"
        aria-keyshortcuts="Control+k Meta+k"
      >
        <Icon name="search" size={16} />
        <span>Search docs…</span>
        <kbd>⌘ K / Ctrl K</kbd>
      </button>
      <dialog
        ref={dialog}
        className="search-dialog"
        aria-modal="true"
        aria-labelledby="site-search-title"
        onClose={restoreScroll}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'Tab') {
            const controls = Array.from(
              dialog.current?.querySelectorAll<HTMLElement>('input, button, a[href]') ?? [],
            )
            const first = controls[0]
            const last = controls[controls.length - 1]
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault()
              last?.focus()
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault()
              first?.focus()
            }
            return
          }
          if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
          const links = Array.from(
            dialog.current?.querySelectorAll<HTMLAnchorElement>('.search-result') ?? [],
          )
          if (!links.length) return
          event.preventDefault()
          const current = links.indexOf(document.activeElement as HTMLAnchorElement)
          const next =
            current < 0
              ? event.key === 'ArrowDown'
                ? 0
                : links.length - 1
              : (current + (event.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length
          links[next].focus()
        }}
      >
        <div className="search-dialog-inner">
          <h2 id="site-search-title" className="sr-only">
            Search documentation and examples
          </h2>
          <div className="search-dialog-field">
            <Icon name="search" size={21} />
            <input
              ref={input}
              type="search"
              aria-label="Search documentation and examples"
              placeholder="Search components, guides, examples…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && results[0]) {
                  event.preventDefault()
                  dialog.current?.close()
                  router.push(results[0].href)
                }
              }}
            />
            <button
              type="button"
              className="search-close"
              aria-label="Close search"
              onClick={() => dialog.current?.close()}
            >
              <Icon name="close" size={18} />
            </button>
          </div>
          <div className="search-results">
            <p className="eyebrow" role="status">
              {query.trim() ? `${results.length} results` : 'Jump right in'}
            </p>
            {results.length ? (
              <ul>
                {results.map((entry) => (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      className="search-result"
                      onClick={() => dialog.current?.close()}
                    >
                      <span className="search-result-icon">
                        <Icon name={entry.group.includes('examples') ? 'grid' : 'book'} size={18} />
                      </span>
                      <span>
                        <strong>{entry.name}</strong>
                        <small>{entry.group}</small>
                      </span>
                      <Icon name="arrow" size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="search-no-results">
                <Icon name="search" size={26} />
                <h3>No matches yet</h3>
                <p>Try “button”, “theme”, or “dashboard”.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    input.current?.focus()
                  }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
          <div className="search-dialog-footer">
            <span>
              <kbd>↑</kbd> <kbd>↓</kbd> to navigate · <kbd>Enter</kbd> to open
            </span>
            <span>
              <kbd>Esc</kbd> to close
            </span>
          </div>
        </div>
      </dialog>
    </>
  )
}

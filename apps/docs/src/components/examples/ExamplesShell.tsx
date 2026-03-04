'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { pageExamples } from '@/components/docs/DocsSidebar'

// Single source of truth for example page taxonomy lives in DocsSidebar.
const exampleCategories = pageExamples
const allPages = exampleCategories.flatMap((c) => c.pages)

const NAV_WIDTH = 220

function ChevronLeft() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function ArrowLeft() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

export function ExamplesShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)

  const currentIndex = allPages.findIndex((p) => pathname === `/examples/${p.slug}`)
  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null

  const sidebarWidth = open ? NAV_WIDTH : 0
  const toggleOffset = 24

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div
        className="fixed left-0 z-40 flex"
        style={{ top: '4rem', height: 'calc(100vh - 4rem)' }}
      >
        <div
          className="flex h-full flex-col overflow-hidden border-r border-vui-border bg-vui-surface"
          style={{
            width: sidebarWidth,
            transition: 'width 0.2s ease',
          }}
        >
          {open && (
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-vui-border px-4 py-3">
                <Link
                  href="/docs/button"
                  className="flex items-center gap-2 text-xs font-medium text-vui-text-muted transition-colors hover:text-vui-text"
                >
                  <ArrowLeft />
                  Back to Docs
                </Link>
              </div>

              <nav className="flex flex-col gap-0.5 overflow-y-auto px-3 py-3">
                {exampleCategories.map((category) => (
                  <div key={category.label} className="mb-1">
                    <p className="mb-1 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-vui-text-subtle">
                      {category.label}
                    </p>
                    {category.pages.map((page) => {
                      const isActive = pathname === `/examples/${page.slug}`
                      return (
                        <Link
                          key={page.slug}
                          href={`/examples/${page.slug}`}
                          className={`relative flex whitespace-nowrap rounded-lg px-2.5 py-1.5 text-sm transition-colors ${
                            isActive
                              ? 'bg-vui-primary-soft font-medium text-vui-primary'
                              : 'text-vui-text-muted hover:bg-vui-surface-muted hover:text-vui-text'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-vui-primary" />
                          )}
                          {page.name}
                        </Link>
                      )
                    })}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Collapse examples menu' : 'Expand examples menu'}
          className="flex items-center justify-center self-start border border-l-0 border-vui-border bg-vui-surface text-vui-text-muted transition-colors hover:bg-vui-surface-muted hover:text-vui-text"
          style={{
            marginTop: '1.25rem',
            width: toggleOffset,
            height: 32,
            borderRadius: '0 8px 8px 0',
          }}
        >
          {open ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      <main
        style={{
          paddingLeft: sidebarWidth + toggleOffset,
          transition: 'padding-left 0.2s ease',
          minHeight: 'calc(100vh - 4rem)',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-10">
          {children}
        </div>

        {(prev || next) && (
          <div className="mx-auto max-w-6xl border-t border-vui-border px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                {prev && (
                  <Link
                    href={`/examples/${prev.slug}`}
                    className="flex items-center gap-2 text-sm font-medium text-vui-text-muted transition-colors hover:text-vui-text"
                  >
                    <ChevronLeft />
                    {prev.name}
                  </Link>
                )}
              </div>
              <div>
                {next && (
                  <Link
                    href={`/examples/${next.slug}`}
                    className="flex items-center gap-2 text-sm font-medium text-vui-text-muted transition-colors hover:text-vui-text"
                  >
                    {next.name}
                    <ChevronRight />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

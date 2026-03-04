'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const exampleCategories = [
  {
    label: 'Authentication',
    pages: [
      { slug: 'login', name: 'Login' },
      { slug: 'register', name: 'Register' },
      { slug: 'forgot-password', name: 'Forgot Password' },
    ],
  },
  {
    label: 'Dashboard',
    pages: [
      { slug: 'dashboard', name: 'Overview' },
      { slug: 'analytics', name: 'Analytics' },
      { slug: 'ecommerce', name: 'E-Commerce' },
    ],
  },
  {
    label: 'Forms',
    pages: [
      { slug: 'form', name: 'Contact Form' },
      { slug: 'checkout', name: 'Checkout' },
      { slug: 'survey', name: 'Survey' },
    ],
  },
  {
    label: 'Landing',
    pages: [
      { slug: 'landing', name: 'Marketing' },
      { slug: 'startup', name: 'Startup' },
    ],
  },
  {
    label: 'Settings',
    pages: [
      { slug: 'settings', name: 'Account' },
      { slug: 'billing', name: 'Billing' },
    ],
  },
  {
    label: 'Profile',
    pages: [
      { slug: 'profile', name: 'Developer' },
      { slug: 'team', name: 'Team' },
    ],
  },
]

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
  const toggleOffset = 20

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div
        className="fixed left-0 z-40 flex"
        style={{ top: '4rem', height: 'calc(100vh - 4rem)' }}
      >
        <div
          className="flex h-full flex-col overflow-hidden bg-vui-surface ring-1 ring-vui-border"
          style={{
            width: sidebarWidth,
            transition: 'width 0.2s ease',
            boxShadow: open ? '2px 0 12px 0 rgba(0,0,0,0.08)' : 'none',
          }}
        >
          {open && (
            <nav className="flex flex-col gap-0.5 overflow-y-auto p-3">
              <Link
                href="/docs/button"
                className="mb-2 flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium text-vui-text-muted transition-colors hover:bg-vui-surface-muted hover:text-vui-text"
              >
                <ArrowLeft />
                Back to Docs
              </Link>

              {exampleCategories.map((category) => (
                <div key={category.label} className="mb-2">
                  <p className="mb-1 px-2.5 text-xs font-semibold uppercase tracking-widest text-vui-text-subtle">
                    {category.label}
                  </p>
                  {category.pages.map((page) => {
                    const isActive = pathname === `/examples/${page.slug}`
                    return (
                      <Link
                        key={page.slug}
                        href={`/examples/${page.slug}`}
                        className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition-colors block ${
                          isActive
                            ? 'bg-vui-primary-soft text-vui-primary'
                            : 'text-vui-text-muted hover:bg-vui-surface-muted hover:text-vui-text'
                        }`}
                      >
                        {page.name}
                      </Link>
                    )
                  })}
                </div>
              ))}
            </nav>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Collapse examples menu' : 'Expand examples menu'}
          className="flex items-center justify-center self-start bg-vui-surface text-vui-text-muted ring-1 ring-vui-border transition-colors hover:bg-vui-surface-muted hover:text-vui-text"
          style={{
            marginTop: '1rem',
            width: toggleOffset,
            height: 28,
            borderRadius: '0 6px 6px 0',
            boxShadow: '2px 0 6px 0 rgba(0,0,0,0.08)',
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

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme, THEMES, DENSITIES, type ThemeName, type DensityName } from './ThemeContext'

const navLinks = [
  { label: 'Components', href: '/docs/button' },
  { label: 'GitHub', href: 'https://github.com/clow99/VelocityUI', external: true },
]

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, density, setTheme, setDensity } = useTheme()

  const selectClass =
    'w-full appearance-none rounded-lg border border-vui-border bg-vui-surface/90 pl-2.5 pr-8 py-1.5 text-xs font-medium text-vui-text shadow-sm transition-[border-color,box-shadow,background-color] hover:border-vui-primary/50 hover:bg-vui-surface focus:outline-none focus:ring-2 focus:ring-vui-primary/25 focus:border-vui-primary cursor-pointer'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-vui-divider bg-vui-surface/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-vui-text">
          <Image
            src="/new_logo.png"
            alt="VelocityUI logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
            priority
          />
          <span className="text-lg tracking-tight">VelocityUI</span>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-1.5 text-sm font-medium text-vui-text-subtle transition-colors hover:bg-vui-surface-muted hover:text-vui-text"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-vui-surface-muted hover:text-vui-text ${
                  pathname.startsWith('/docs') ? 'text-vui-primary' : 'text-vui-text-subtle'
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          <div className="mx-1 h-5 w-px bg-vui-divider" />

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-1.5">
              <span className="text-xs text-vui-text-subtle">Theme</span>
              <div className="relative min-w-[8.25rem]">
                <select
                  className={selectClass}
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as ThemeName)}
                  aria-label="Select theme"
                >
                  {THEMES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-1.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-vui-border bg-vui-surface-muted text-vui-text-subtle">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </label>

            <label className="flex items-center gap-1.5">
              <span className="text-xs text-vui-text-subtle">Size</span>
              <div className="relative min-w-[8.25rem]">
                <select
                  className={selectClass}
                  value={density}
                  onChange={(e) => setDensity(e.target.value as DensityName)}
                  aria-label="Select density"
                >
                  {DENSITIES.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-1.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-vui-border bg-vui-surface-muted text-vui-text-subtle">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </label>
          </div>

          <a
            href="https://www.npmjs.com/package/@clow99/velocityui"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-lg bg-vui-primary px-4 py-1.5 text-sm font-semibold text-vui-primary-contrast transition-colors hover:bg-vui-primary-hover"
          >
            npm install
          </a>
        </nav>

        <button
          className="flex items-center justify-center rounded-md p-2 text-vui-text-subtle hover:bg-vui-surface-muted md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-vui-divider bg-vui-surface px-4 py-3 md:hidden">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-sm font-medium text-vui-text-muted hover:bg-vui-surface-muted"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-vui-text-muted hover:bg-vui-surface-muted"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-3 border-t border-vui-divider pt-3 flex flex-col gap-2">
            <label className="flex items-center justify-between">
              <span className="text-xs font-medium text-vui-text-subtle">Theme</span>
              <div className="relative min-w-[8.25rem]">
                <select
                  className={selectClass}
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as ThemeName)}
                >
                  {THEMES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-1.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-vui-border bg-vui-surface-muted text-vui-text-subtle">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-xs font-medium text-vui-text-subtle">Density</span>
              <div className="relative min-w-[8.25rem]">
                <select
                  className={selectClass}
                  value={density}
                  onChange={(e) => setDensity(e.target.value as DensityName)}
                >
                  {DENSITIES.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-1.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-vui-border bg-vui-surface-muted text-vui-text-subtle">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </label>
          </div>
        </div>
      )}
    </header>
  )
}


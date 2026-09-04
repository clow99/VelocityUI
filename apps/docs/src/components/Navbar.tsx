'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { BrandMark, Icon } from './Icon'
import { SiteSearch } from './SiteSearch'
import { AppearanceMenu } from './AppearanceMenu'

const links = [
  { label: 'Documentation', href: '/docs/introduction' },
  { label: 'Components', href: '/docs' },
  { label: 'Examples', href: '/examples' },
]
export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const header = useRef<HTMLElement>(null)
  const menuTrigger = useRef<HTMLButtonElement>(null)
  const previousPathname = useRef(pathname)
  useEffect(() => {
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname
    setMenuOpen(false)
  }, [pathname])
  useEffect(() => {
    function close(e: MouseEvent) {
      if (header.current && !header.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])
  const active = (href: string) =>
    href === '/docs'
      ? pathname === '/docs' ||
        (pathname.startsWith('/docs/') &&
          !['introduction', 'installation', 'theming', 'ai-guide'].some((p) =>
            pathname.endsWith(p),
          ))
      : href === '/examples'
        ? pathname.startsWith(href)
        : ['/docs/introduction', '/docs/installation', '/docs/theming', '/docs/ai-guide'].includes(
            pathname,
          )
  return (
    <header
      className="site-header"
      ref={header}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          if (menuOpen) menuTrigger.current?.focus()
          setMenuOpen(false)
        }
      }}
    >
      <div className="nav-container">
        <Link href="/" className="brand" aria-label="VelocityUI home">
          <BrandMark />
          <span>
            Velocity<span className="brand-light">UI</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <SiteSearch />
          <a
            className="source-link"
            href="https://github.com/clow99/VelocityUI"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Icon name="external" size={14} />
          </a>
          <AppearanceMenu onOpen={() => setMenuOpen(false)} />
          <Link href="/docs/installation" className="button-link nav-start">
            Get started <Icon name="arrow" size={15} />
          </Link>
          <button
            className="icon-button mobile-menu-button"
            ref={menuTrigger}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href) ? 'page' : undefined}
            >
              {link.label}
              <Icon name="arrow" size={16} />
            </Link>
          ))}
          <Link href="/docs/installation">
            Get started
            <Icon name="arrow" size={16} />
          </Link>
        </nav>
      )}
    </header>
  )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import {
  componentCategories,
  docsComponents,
  gettingStartedItems,
  pageExamples,
} from '@/lib/navigation'
import { Icon } from '@/components/Icon'
export { componentCategories, docsComponents, pageExamples } from '@/lib/navigation'
export type { ComponentEntry, ComponentCategory } from '@/lib/navigation'

export function DocsSidebar() {
  const pathname = usePathname()
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState<string[]>([])
  const mobileTrigger = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    setMobileOpen(false)
    setQuery('')
    setCollapsed((c) =>
      c.filter(
        (label) =>
          !componentCategories
            .find((g) => g.label === label)
            ?.items.some((i) => pathname === '/docs/' + i.slug),
      ),
    )
  }, [pathname])
  const matches = (name: string) => name.toLowerCase().includes(query.trim().toLowerCase())
  const categories = componentCategories
    .map((c) => ({ ...c, items: c.items.filter((i) => matches(i.name) || matches(c.label)) }))
    .filter((c) => c.items.length)
  const starters = gettingStartedItems.filter((i) => matches(i.name))
  const navLink = (slug: string, name: string) => (
    <Link
      key={slug}
      href={'/docs/' + slug}
      aria-current={pathname === '/docs/' + slug ? 'page' : undefined}
    >
      {name}
      {pathname === '/docs/' + slug && <span className="active-nav-dot" />}
    </Link>
  )
  return (
    <aside
      className={'docs-sidebar ' + (mobileOpen ? 'is-open' : '')}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setMobileOpen(false)
          mobileTrigger.current?.focus()
        }
      }}
    >
      <button
        type="button"
        ref={mobileTrigger}
        className="docs-menu-toggle"
        aria-expanded={mobileOpen}
        aria-controls="documentation-menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Icon name="book" size={17} />
        Browse documentation
        <Icon name={mobileOpen ? 'close' : 'menu'} size={17} />
      </button>
      <div className="sidebar-content" id="documentation-menu">
        <Link href="/docs" className="sidebar-overview">
          <Icon name="grid" size={17} />
          Component library<span>{docsComponents.length}</span>
        </Link>
        <label className="search-field sidebar-search">
          <Icon name="search" size={16} />
          <input
            type="search"
            aria-label="Filter documentation"
            placeholder="Find a component…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <nav aria-label="Documentation">
          {starters.length > 0 && (
            <div className="sidebar-group">
              <p className="sidebar-label">Getting started</p>
              {starters.map((i) => navLink(i.slug, i.name))}
            </div>
          )}
          {categories.map((c) => {
            const open = !!query || !collapsed.includes(c.label)
            return (
              <div className="sidebar-group" key={c.label}>
                <button
                  className="sidebar-label"
                  aria-expanded={open}
                  aria-controls={'group-' + c.label}
                  onClick={() =>
                    setCollapsed((list) =>
                      list.includes(c.label)
                        ? list.filter((l) => l !== c.label)
                        : [...list, c.label],
                    )
                  }
                >
                  {c.label}
                  <Icon
                    name="chevron"
                    size={12}
                    style={{ transform: open ? 'rotate(90deg)' : undefined }}
                  />
                </button>
                {open && (
                  <div id={'group-' + c.label}>{c.items.map((i) => navLink(i.slug, i.name))}</div>
                )}
              </div>
            )
          })}
          {(matches('AI agent guide') || !query) && (
            <div className="sidebar-group">
              <p className="sidebar-label">Resources</p>
              {navLink('ai-guide', 'AI agent guide')}
              <Link href="/examples">
                Page examples
                <Icon name="external" size={14} />
              </Link>
            </div>
          )}
          {!categories.length && !starters.length && !matches('AI agent guide') && (
            <div className="search-empty" role="status">
              No results for “{query}”.<button onClick={() => setQuery('')}>Clear search</button>
            </div>
          )}
        </nav>
        <div className="sidebar-note">
          <Icon name="code" size={18} />
          <strong>Your next starting point.</strong>
          <span>Pick a component. Make it yours.</span>
        </div>
      </div>
    </aside>
  )
}

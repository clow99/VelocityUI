'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { examples as allPages } from '@/lib/examples'
import { Icon } from '@/components/Icon'
import { ExampleSwitcher } from './ExampleSwitcher'
export function ExamplesShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/examples') return <>{children}</>
  const index = allPages.findIndex((p) => pathname === '/examples/' + p.slug)
  const prev = allPages[index - 1]
  const next = allPages[index + 1]
  return (
    <div className="examples-shell">
      <div className="example-toolbar">
        <Link href="/examples">
          <Icon
            name="arrow"
            size={15}
            style={{ transform: 'rotate(180deg)' }}
          />
          All examples
        </Link>
        {allPages[index] && <ExampleSwitcher current={allPages[index]} />}
        <span className="example-demo-label">
          <span className="status-dot" />
          Interactive demo
        </span>
      </div>
      <main id="main-content" className="example-main">
        {children}
      </main>
      <nav className="example-pagination" aria-label="Example pagination">
        {prev ? (
          <Link href={'/examples/' + prev.slug}>
            <Icon
              name="arrow"
              size={16}
              style={{ transform: 'rotate(180deg)' }}
            />
            <span>
              <small>Previous example</small>
              {prev.name}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={'/examples/' + next.slug}>
            <span>
              <small>Next example</small>
              {next.name}
            </span>
            <Icon name="arrow" size={16} />
          </Link>
        )}
      </nav>
    </div>
  )
}

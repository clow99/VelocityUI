'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { pageExamples } from '@/lib/navigation'
import { Icon } from '@/components/Icon'
const allPages = pageExamples.flatMap((c) => c.pages)
export function ExamplesShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  if (pathname === '/examples') return <>{children}</>
  const index = allPages.findIndex((p) => pathname === '/examples/' + p.slug)
  const prev = allPages[index - 1]
  const next = allPages[index + 1]
  return (
    <div className="examples-shell">
      <div className="example-toolbar">
        <Link href="/examples">
          <Icon name="arrow" size={15} style={{ transform: 'rotate(180deg)' }} />
          All examples
        </Link>
        <label>
          <span className="sr-only">Choose example</span>
          <select
            aria-label="Choose example"
            value={pathname}
            onChange={(e) => router.push(e.target.value)}
          >
            {pageExamples.map((c) => (
              <optgroup label={c.label} key={c.label}>
                {c.pages.map((p) => (
                  <option key={p.slug} value={'/examples/' + p.slug}>
                    {p.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
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
            <Icon name="arrow" size={16} style={{ transform: 'rotate(180deg)' }} />
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

import Link from 'next/link'

export function PolicyDocument({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="policy-document">
      <p className="eyebrow">VelocityUI · Cameron Low</p>
      <h1>{title}</h1>
      <p>Effective 19 September 2026</p>
      <nav aria-label="Policies"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link><a href="mailto:hello@cameronlow.com">Contact</a></nav>
      {children}
    </main>
  )
}

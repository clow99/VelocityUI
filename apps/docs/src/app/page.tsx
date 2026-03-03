import Link from 'next/link'
import { ComponentPreviewGrid } from '@/components/landing/ComponentPreviewGrid'
import { FeatureGrid } from '@/components/landing/FeatureGrid'
import { InstallSnippet } from '@/components/landing/InstallSnippet'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-vui-bg pb-20 pt-24 sm:pt-32 transition-colors">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-vui-primary-soft opacity-60 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-[400px] w-[400px] rounded-full bg-vui-primary-soft opacity-30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-vui-border bg-vui-surface px-4 py-1.5 text-sm font-medium text-vui-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-vui-primary" />
            Open Source · v0.1.0
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-vui-text sm:text-6xl lg:text-7xl">
            Build UIs at{' '}
            <span className="text-vui-primary">
              Velocity
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-vui-text-subtle leading-relaxed">
            A modern, accessible React component library. Zero config, CSS Modules scoped styles,
            full TypeScript support. Drop it in any project and go.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs/button"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-vui-primary px-7 text-base font-semibold text-vui-primary-contrast shadow-lg transition-all hover:bg-vui-primary-hover hover:-translate-y-0.5"
            >
              Browse Components
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://github.com/clow99/VelocityUI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-vui-border bg-vui-surface px-7 text-base font-semibold text-vui-text-muted transition-all hover:border-vui-border-strong hover:bg-vui-surface-muted hover:-translate-y-0.5"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>

          <InstallSnippet />
        </div>
      </section>

      {/* Component preview grid */}
      <section className="bg-vui-surface-muted py-20 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-vui-text sm:text-4xl">
              Everything you need
            </h2>
            <p className="mt-3 text-lg text-vui-text-subtle">
              Carefully crafted components, ready to ship.
            </p>
          </div>
          <ComponentPreviewGrid />
        </div>
      </section>

      {/* Features */}
      <section className="bg-vui-bg py-20 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-vui-text sm:text-4xl">
              Why VelocityUI?
            </h2>
            <p className="mt-3 text-lg text-vui-text-subtle">
              Built for developers who care about quality and speed.
            </p>
          </div>
          <FeatureGrid />
        </div>
      </section>

      {/* Quick start CTA */}
      <section className="relative overflow-hidden bg-vui-primary py-20 transition-colors">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-vui-primary-hover opacity-30 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-vui-primary-soft opacity-30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-vui-primary-contrast sm:text-4xl">
            Start building in seconds
          </h2>
          <p className="mt-4 text-lg text-vui-primary-contrast opacity-80">
            Install VelocityUI, import what you need, and ship faster.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs/button"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-vui-surface px-7 text-base font-semibold text-vui-primary transition-all hover:bg-vui-surface-muted hover:-translate-y-0.5"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-vui-divider bg-vui-bg py-10 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2 font-bold text-vui-text">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-vui-primary text-vui-primary-contrast text-xs font-black">
                V
              </span>
              VelocityUI
            </div>
            <p className="text-sm text-vui-text-subtle">
              Open source under MIT License.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

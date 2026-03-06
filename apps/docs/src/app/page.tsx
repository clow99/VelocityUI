import Link from 'next/link'
import Image from 'next/image'
import { ComponentPreviewGrid } from '@/components/landing/ComponentPreviewGrid'
import { FeatureGrid } from '@/components/landing/FeatureGrid'
import { InstallSnippet } from '@/components/landing/InstallSnippet'
import { ExamplesShowcase } from '@/components/landing/ExamplesShowcase'

export default function HomePage() {
  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-vui-bg pb-24 pt-28 sm:pt-36 transition-colors">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="animate-float-slow absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full bg-vui-primary-soft opacity-50 blur-[100px]" />
          <div className="animate-float-slow absolute -bottom-24 right-1/4 h-[400px] w-[400px] rounded-full bg-vui-primary-soft opacity-30 blur-[100px]" style={{ animationDelay: '3s' }} />
          <div className="dot-grid-pattern absolute inset-0 opacity-[0.035]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Version pill */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-vui-border bg-vui-surface/80 px-4 py-1.5 text-sm font-medium text-vui-text-muted backdrop-blur-sm">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="animate-pulse-soft absolute h-2 w-2 rounded-full bg-vui-primary opacity-75" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-vui-primary" />
            </span>
            Open Source &middot; MIT License
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up-delay-1 text-5xl font-extrabold tracking-tight text-vui-text sm:text-6xl lg:text-7xl">
            Build UIs at{' '}
            <span className="animate-gradient-text bg-gradient-to-r from-vui-primary via-purple-400 to-vui-primary">
              Velocity
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-vui-text-subtle leading-relaxed sm:text-xl">
            Accessible React components with scoped CSS Modules, 9 named themes,
            ambient animation presets, and full TypeScript support &mdash; zero configuration required.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs/button"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-vui-primary px-7 text-base font-semibold text-vui-primary-contrast shadow-lg shadow-vui-primary/20 transition-all hover:bg-vui-primary-hover hover:-translate-y-0.5 hover:shadow-xl hover:shadow-vui-primary/30"
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
              GitHub
            </a>
          </div>

          {/* Install snippet */}
          <div className="animate-fade-in-up-delay-4">
            <InstallSnippet />
          </div>
        </div>
      </section>

      {/* ─── Stats strip ─── */}
      <section className="border-y border-vui-border bg-vui-surface/60 backdrop-blur-sm transition-colors">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-vui-border sm:grid-cols-4">
            {[
              { value: '35+', label: 'Components' },
              { value: '9', label: 'Themes' },
              { value: '3', label: 'Density Scales' },
              { value: '100%', label: 'TypeScript' },
            ].map((stat) => (
              <div key={stat.label} className="py-6 text-center sm:py-8">
                <p className="text-2xl font-bold text-vui-text sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-vui-text-subtle sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Components ─── */}
      <section className="bg-vui-bg py-24 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-vui-primary">
              Component Library
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-vui-text sm:text-4xl">
              Everything you need to ship
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-vui-text-subtle">
              Forms, layout, feedback, overlays, data display, and ambient animations &mdash; all accessible out of the box.
            </p>
          </div>
          <ComponentPreviewGrid />
        </div>
      </section>

      {/* ─── Examples ─── */}
      <section className="relative bg-vui-surface-muted py-24 transition-colors">
        <div className="pointer-events-none absolute inset-0 dot-grid-pattern opacity-[0.03]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-vui-primary">
              Real-World Templates
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-vui-text sm:text-4xl">
              Ready-made page examples
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-vui-text-subtle">
              Drop-in page templates built entirely with VelocityUI components.
            </p>
          </div>
          <ExamplesShowcase />
        </div>
      </section>

      {/* ─── Features / Design Decisions ─── */}
      <section className="bg-vui-bg py-24 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-vui-primary">
              Why VelocityUI
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-vui-text sm:text-4xl">
              Design decisions that matter
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-vui-text-subtle">
              What makes VelocityUI different from other React component libraries.
            </p>
          </div>
          <FeatureGrid />
        </div>
      </section>

      {/* ─── AI Agent Guide ─── */}
      <section className="border-y border-vui-border bg-vui-surface-muted py-16 transition-colors">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-vui-primary-soft text-vui-primary">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xl font-bold text-vui-text sm:text-2xl">AI-ready documentation</h2>
              <p className="mt-2 text-sm text-vui-text-subtle leading-relaxed sm:text-base">
                A comprehensive guide for AI coding agents &mdash; setup instructions, full API reference, common pitfalls, and prompt templates to get accurate results from any LLM.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/docs/ai-guide"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-vui-border bg-vui-surface px-6 text-sm font-semibold text-vui-text-muted transition-all hover:border-vui-border-strong hover:bg-vui-surface-muted hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                View guide
              </Link>
              <a
                href="/downloads/velocityui-ai-guide.md"
                download="VelocityUI-AI-Guide.md"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-vui-primary px-6 text-sm font-semibold text-vui-primary-contrast transition-all hover:bg-vui-primary-hover hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download .md
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative overflow-hidden bg-vui-primary py-24 transition-colors">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-white opacity-[0.07] blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white opacity-[0.07] blur-3xl" />
          <div className="dot-grid-pattern absolute inset-0 opacity-[0.06]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-vui-primary-contrast sm:text-4xl lg:text-5xl">
            Start building today
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-vui-primary-contrast/80">
            Install the package, import the stylesheet, and drop in any component. It just works.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs/installation"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-vui-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Read the docs
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://github.com/clow99/VelocityUI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-8 text-base font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-vui-divider bg-vui-bg py-12 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 font-bold text-vui-text">
                <Image
                  src="/new_logo.png"
                  alt="VelocityUI logo"
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-md"
                />
                VelocityUI
              </div>
              <p className="mt-3 text-sm text-vui-text-subtle leading-relaxed">
                Open-source React component library with scoped styles and full TypeScript support.
              </p>
            </div>

            {/* Documentation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-vui-text-muted">Documentation</h4>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: 'Introduction', href: '/docs/introduction' },
                  { label: 'Installation', href: '/docs/installation' },
                  { label: 'Theming', href: '/docs/theming' },
                  { label: 'Components', href: '/docs/button' },
                  { label: 'AI Agent Guide', href: '/docs/ai-guide' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-vui-text-subtle transition-colors hover:text-vui-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Examples */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-vui-text-muted">Examples</h4>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: 'Login', href: '/examples/login' },
                  { label: 'Dashboard', href: '/examples/dashboard' },
                  { label: 'E-commerce', href: '/examples/ecommerce' },
                  { label: 'Settings', href: '/examples/settings' },
                  { label: 'Animated Backgrounds', href: '/examples/animated-backgrounds' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-vui-text-subtle transition-colors hover:text-vui-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-vui-text-muted">Community</h4>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: 'GitHub', href: 'https://github.com/clow99/VelocityUI', external: true },
                  { label: 'npm', href: 'https://www.npmjs.com/package/@velocityuikit/velocityui', external: true },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-vui-text-subtle transition-colors hover:text-vui-primary"
                    >
                      {link.label}
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 border-t border-vui-divider pt-8 sm:flex-row sm:justify-between">
            <p className="text-xs text-vui-text-subtle">
              MIT License &middot; Built with React, CSS Modules, and TypeScript.
            </p>
            <p className="text-xs text-vui-text-subtle">
              @velocityuikit/velocityui
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

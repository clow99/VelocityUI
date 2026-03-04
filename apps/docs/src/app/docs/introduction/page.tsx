import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export const metadata = {
  title: 'Introduction — VelocityUI',
  description:
    'VelocityUI is a modern, accessible React component library with built-in theming and zero dependencies.',
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-vui-border bg-vui-surface p-5">
      <p className="mb-1.5 font-semibold text-vui-text">{title}</p>
      <p className="text-sm leading-relaxed text-vui-text-subtle">{description}</p>
    </div>
  )
}

export default function IntroductionPage() {
  return (
    <article className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-vui-text">Introduction</h1>
        <p className="mt-3 text-lg text-vui-text-subtle leading-relaxed">
          VelocityUI is a modern React component library built for speed, accessibility, and design
          consistency. Ship polished UIs without writing CSS from scratch.
        </p>
      </div>

      {/* What is VelocityUI */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">What is VelocityUI?</h2>
        <p className="mb-4 text-sm leading-relaxed text-vui-text-subtle">
          VelocityUI is an open-source component library for React that gives you 30+ production-ready
          components out of the box. Every component is styled, accessible, and themeable — so you can
          focus on building features, not fighting CSS.
        </p>
        <p className="text-sm leading-relaxed text-vui-text-subtle">
          The library ships as a standard npm package with full TypeScript support, tree-shakeable
          exports, and a single CSS file you import once. There is no extra configuration, no
          provider wrap, and no build-time magic.
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Features</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FeatureCard
            title="30+ components"
            description="Buttons, inputs, dialogs, tables, navigation, overlays — everything you need to build a complete product."
          />
          <FeatureCard
            title="8 built-in themes"
            description="Switch between Default, Midnight, Ocean, Construction, Glass, Soft, High Contrast, and Monochrome Red with a single class."
          />
          <FeatureCard
            title="Density modifiers"
            description="Compact, comfortable, and spacious density modes let you tune information density without changing your components."
          />
          <FeatureCard
            title="Fully typed"
            description="Written in TypeScript with complete prop definitions and JSDoc annotations. No @types packages required."
          />
          <FeatureCard
            title="Accessible"
            description="Components follow WAI-ARIA patterns with keyboard navigation, focus management, and screen-reader support baked in."
          />
          <FeatureCard
            title="Zero runtime dependencies"
            description="VelocityUI has no third-party runtime deps beyond React itself — keeping your bundle lean."
          />
          <FeatureCard
            title="Tree-shakeable"
            description="Import only what you use. Unused components are eliminated at build time by any modern bundler."
          />
          <FeatureCard
            title="Framework agnostic"
            description="Works with Next.js (App & Pages Router), Vite, Remix, Create React App, and any React 18+ setup."
          />
        </div>
      </section>

      {/* Quick start */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Quick start</h2>
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 text-sm font-medium text-vui-text">1. Install</p>
            <CodeBlock language="bash" code="npm install @velocityuikit/velocityui" />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-vui-text">2. Import the stylesheet</p>
            <CodeBlock language="tsx" code={`import '@velocityuikit/velocityui/dist/style.css'`} />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-vui-text">3. Use components</p>
            <CodeBlock
              language="tsx"
              code={`import { Button, Input, Card } from '@velocityuikit/velocityui'

export default function App() {
  return (
    <Card>
      <Input placeholder="Your email" />
      <Button>Subscribe</Button>
    </Card>
  )
}`}
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">How theming works</h2>
        <p className="mb-4 text-sm leading-relaxed text-vui-text-subtle">
          VelocityUI uses CSS custom properties scoped to theme classes. Apply a theme by adding a
          class to{' '}
          <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">
            {'<body>'}
          </code>{' '}
          or any container element — all components inside inherit it automatically.
        </p>
        <CodeBlock
          language="html"
          code={`<!-- dark theme -->
<body class="vui-theme-midnight">

<!-- different section uses ocean theme -->
<section class="vui-theme-ocean vui-density-compact">
  <!-- components here use ocean + compact density -->
</section>`}
        />
      </section>

      {/* Open source */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Open source</h2>
        <p className="mb-4 text-sm leading-relaxed text-vui-text-subtle">
          VelocityUI is MIT licensed and developed in the open on GitHub. Contributions,
          bug reports, and feature requests are all welcome.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/clow99/VelocityUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-vui-border bg-vui-surface px-4 py-2 text-sm font-medium text-vui-text transition-colors hover:border-vui-primary hover:text-vui-primary"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@velocityuikit/velocityui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-vui-border bg-vui-surface px-4 py-2 text-sm font-medium text-vui-text transition-colors hover:border-vui-primary hover:text-vui-primary"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 0v24h6.545V6h5.455v18H24V0z" />
            </svg>
            npm
          </a>
          <a
            href="https://github.com/clow99/VelocityUI/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-vui-border bg-vui-surface px-4 py-2 text-sm font-medium text-vui-text transition-colors hover:border-vui-primary hover:text-vui-primary"
          >
            Issues
          </a>
        </div>
      </section>

      {/* Continue */}
      <section className="mb-4">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Continue</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/docs/installation"
            className="group rounded-xl border border-vui-border bg-vui-surface p-5 transition-colors hover:border-vui-primary hover:bg-vui-primary-soft"
          >
            <p className="mb-1 font-semibold text-vui-text group-hover:text-vui-primary">Installation</p>
            <p className="text-sm text-vui-text-subtle">
              Full install guide with all package managers and framework setup.
            </p>
          </Link>
          <Link
            href="/docs/theming"
            className="group rounded-xl border border-vui-border bg-vui-surface p-5 transition-colors hover:border-vui-primary hover:bg-vui-primary-soft"
          >
            <p className="mb-1 font-semibold text-vui-text group-hover:text-vui-primary">Theming</p>
            <p className="text-sm text-vui-text-subtle">
              Learn how to apply themes, density modes, and custom CSS variables.
            </p>
          </Link>
        </div>
      </section>
    </article>
  )
}

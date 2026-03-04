import { CodeBlock } from '@/components/docs/CodeBlock'
import { PackageManagerTabs } from '@/components/docs/PackageManagerTabs'
import Link from 'next/link'

export const metadata = {
  title: 'Installation — VelocityUI',
  description: 'Install VelocityUI in your React project using npm, yarn, pnpm, or bun.',
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-vui-primary-soft text-sm font-bold text-vui-primary">
      {n}
    </span>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-xl font-semibold text-vui-text">{children}</h2>
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 rounded-xl border border-vui-border bg-vui-surface-muted px-4 py-3 text-sm text-vui-text-subtle">
      {children}
    </div>
  )
}

export default function InstallationPage() {
  return (
    <article className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-vui-text">Installation</h1>
        <p className="mt-3 text-lg text-vui-text-subtle leading-relaxed">
          Add VelocityUI to your project in minutes. Supports npm, yarn, pnpm, and bun.
        </p>
      </div>

      {/* Requirements */}
      <section className="mb-10">
        <SectionTitle>Requirements</SectionTitle>
        <div className="rounded-xl border border-vui-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-vui-border bg-vui-surface-muted">
                <th className="px-4 py-3 text-left font-semibold text-vui-text">Dependency</th>
                <th className="px-4 py-3 text-left font-semibold text-vui-text">Version</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-vui-border">
                <td className="px-4 py-3 font-mono text-vui-text">react</td>
                <td className="px-4 py-3 text-vui-text-subtle">≥ 18.0.0</td>
              </tr>
              <tr className="border-b border-vui-border">
                <td className="px-4 py-3 font-mono text-vui-text">react-dom</td>
                <td className="px-4 py-3 text-vui-text-subtle">≥ 18.0.0</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-vui-text">node</td>
                <td className="px-4 py-3 text-vui-text-subtle">≥ 18.0.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Install steps */}
      <section className="mb-10">
        <SectionTitle>Install</SectionTitle>

        {/* Step 1 */}
        <div className="mb-8">
          <div className="mb-3 flex items-center">
            <StepNumber n={1} />
            <h3 className="text-base font-semibold text-vui-text">Install the package</h3>
          </div>
          <PackageManagerTabs />
        </div>

        {/* Step 2 */}
        <div className="mb-8">
          <div className="mb-3 flex items-center">
            <StepNumber n={2} />
            <h3 className="text-base font-semibold text-vui-text">Import the stylesheet</h3>
          </div>
          <p className="mb-3 text-sm text-vui-text-subtle">
            Import the CSS file once at the root of your application. In Next.js App Router this is
            your root <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">layout.tsx</code>.
            In Vite projects, add it to <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">main.tsx</code>.
          </p>
          <CodeBlock language="tsx" code={`import '@velocityuikit/velocityui/dist/style.css'`} />
        </div>

        {/* Step 3 */}
        <div className="mb-8">
          <div className="mb-3 flex items-center">
            <StepNumber n={3} />
            <h3 className="text-base font-semibold text-vui-text">Start using components</h3>
          </div>
          <p className="mb-3 text-sm text-vui-text-subtle">
            Import any component directly from the package — no provider or global setup required.
          </p>
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
      </section>

      {/* Framework guides */}
      <section className="mb-10">
        <SectionTitle>Framework setup</SectionTitle>

        {/* Next.js */}
        <div className="mb-8">
          <h3 className="mb-3 text-base font-semibold text-vui-text">Next.js (App Router)</h3>
          <p className="mb-3 text-sm text-vui-text-subtle">
            Import the stylesheet in your root layout. Components work in both Server and Client
            Components — interactive ones (Dialog, Dropdown, etc.) are already marked{' '}
            <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">&apos;use client&apos;</code>{' '}
            internally.
          </p>
          <CodeBlock
            language="tsx"
            code={`// app/layout.tsx
import '@velocityuikit/velocityui/dist/style.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}
          />
        </div>

        {/* Next.js Pages Router */}
        <div className="mb-8">
          <h3 className="mb-3 text-base font-semibold text-vui-text">Next.js (Pages Router)</h3>
          <CodeBlock
            language="tsx"
            code={`// pages/_app.tsx
import '@velocityuikit/velocityui/dist/style.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}`}
          />
        </div>

        {/* Vite */}
        <div className="mb-8">
          <h3 className="mb-3 text-base font-semibold text-vui-text">Vite + React</h3>
          <CodeBlock
            language="tsx"
            code={`// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@velocityuikit/velocityui/dist/style.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`}
          />
        </div>

        {/* Remix */}
        <div className="mb-8">
          <h3 className="mb-3 text-base font-semibold text-vui-text">Remix</h3>
          <CodeBlock
            language="tsx"
            code={`// app/root.tsx
import velocityStyles from '@velocityuikit/velocityui/dist/style.css?url'
import type { LinksFunction } from '@remix-run/node'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: velocityStyles },
]`}
          />
        </div>
      </section>

      {/* CDN */}
      <section className="mb-10">
        <SectionTitle>CDN (no build step)</SectionTitle>
        <p className="mb-3 text-sm text-vui-text-subtle">
          For quick prototypes or environments without a bundler, you can load VelocityUI from a
          CDN. Note: this approach does not support tree-shaking.
        </p>
        <Note>
          CDN usage is intended for prototyping only. For production apps, use the npm package to
          benefit from tree-shaking and optimized bundle sizes.
        </Note>
        <CodeBlock
          language="html"
          code={`<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@velocityuikit/velocityui@latest/dist/style.css"
/>

<!-- ES Module (modern browsers) -->
<script type="module">
  import { Button } from 'https://cdn.jsdelivr.net/npm/@velocityuikit/velocityui@latest/dist/index.js'
</script>`}
        />
      </section>

      {/* TypeScript */}
      <section className="mb-10">
        <SectionTitle>TypeScript</SectionTitle>
        <p className="mb-4 text-sm text-vui-text-subtle leading-relaxed">
          VelocityUI is written in TypeScript and ships with full type definitions — no{' '}
          <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">@types</code>{' '}
          package needed. All component props, variants, and callbacks are typed.
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from '@velocityuikit/velocityui'
import type { ButtonProps } from '@velocityuikit/velocityui'

function MyButton(props: ButtonProps) {
  return <Button {...props} />
}`}
        />
      </section>

      {/* Verify */}
      <section className="mb-10">
        <SectionTitle>Verify your install</SectionTitle>
        <p className="mb-3 text-sm text-vui-text-subtle">
          Drop this snippet anywhere in your app. If you see a styled button, everything is wired up
          correctly.
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Button } from '@velocityuikit/velocityui'

export default function Test() {
  return (
    <Button onClick={() => alert('VelocityUI is working!')}>
      Hello VelocityUI
    </Button>
  )
}`}
        />
      </section>

      {/* Next steps */}
      <section className="mb-4">
        <SectionTitle>Next steps</SectionTitle>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/docs/theming"
            className="group rounded-xl border border-vui-border bg-vui-surface p-5 transition-colors hover:border-vui-primary hover:bg-vui-primary-soft"
          >
            <p className="mb-1 font-semibold text-vui-text group-hover:text-vui-primary">Theming</p>
            <p className="text-sm text-vui-text-subtle">
              Apply built-in themes and density modifiers across your entire app.
            </p>
          </Link>
          <Link
            href="/docs/button"
            className="group rounded-xl border border-vui-border bg-vui-surface p-5 transition-colors hover:border-vui-primary hover:bg-vui-primary-soft"
          >
            <p className="mb-1 font-semibold text-vui-text group-hover:text-vui-primary">Browse components</p>
            <p className="text-sm text-vui-text-subtle">
              Explore all 30+ components with live previews and code examples.
            </p>
          </Link>
        </div>
      </section>
    </article>
  )
}

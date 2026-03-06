import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export const metadata = {
  title: 'Theming — VelocityUI',
  description:
    'Apply built-in themes, density modifiers, and custom CSS variables to VelocityUI components.',
}

const themes = [
  { name: 'default', label: 'Default', description: 'Clean neutral palette suitable for most products.' },
  { name: 'midnight', label: 'Midnight', description: 'Deep dark backgrounds with vibrant accent colors.' },
  { name: 'ocean', label: 'Ocean', description: 'Cool blues and teals for a calm, professional look.' },
  { name: 'tangerine', label: 'Tangerine', description: 'Sunlit orange accents with warm, citrus-inspired surfaces.' },
  { name: 'construction', label: 'Construction', description: 'High-visibility yellows and blacks.' },
  { name: 'glass', label: 'Glass', description: 'Frosted glass surfaces with subtle blur effects.' },
  { name: 'soft', label: 'Soft', description: 'Muted pastels for a gentle, approachable feel.' },
  {
    name: 'high-contrast',
    label: 'High Contrast',
    description: 'Maximum contrast ratios for accessibility compliance.',
  },
  {
    name: 'monochrome-red',
    label: 'Monochrome Red',
    description: 'Bold red accents on a monochrome base.',
  },
]

const densities = [
  {
    name: 'vui-density-compact',
    label: 'Compact',
    description: 'Reduced padding and tighter spacing — ideal for data-dense UIs like dashboards.',
  },
  {
    name: 'vui-density-comfortable',
    label: 'Comfortable',
    description: 'The default density. Balanced spacing for general-purpose apps.',
  },
  {
    name: 'vui-density-spacious',
    label: 'Spacious',
    description: 'Generous padding and breathing room — ideal for marketing and landing pages.',
  },
]

export default function ThemingPage() {
  return (
    <article className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-vui-text">Theming</h1>
        <p className="mt-3 text-lg text-vui-text-subtle leading-relaxed">
          VelocityUI uses CSS custom properties scoped to theme classes. Switching themes requires
          adding a single class — no JavaScript, no re-renders.
        </p>
      </div>

      {/* How it works */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">How it works</h2>
        <p className="mb-4 text-sm leading-relaxed text-vui-text-subtle">
          Each theme defines a set of CSS custom properties (e.g.{' '}
          <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">
            --vui-primary
          </code>
          ,{' '}
          <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">
            --vui-surface
          </code>
          ) under a selector like{' '}
          <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">
            .vui-theme-midnight
          </code>
          . Every VelocityUI component reads these variables, so they automatically adapt when the
          class is present on any ancestor element.
        </p>
        <CodeBlock
          language="html"
          code={`<!-- Apply to the entire page -->
<body class="vui-theme-midnight">

<!-- Or scope to a specific section -->
<div class="vui-theme-ocean">
  <!-- Only components inside here use the ocean theme -->
</div>`}
        />
      </section>

      {/* Available themes */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Available themes</h2>
        <div className="mb-6 overflow-hidden rounded-xl border border-vui-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-vui-border bg-vui-surface-muted">
                <th className="px-4 py-3 text-left font-semibold text-vui-text">Class</th>
                <th className="px-4 py-3 text-left font-semibold text-vui-text">Description</th>
              </tr>
            </thead>
            <tbody>
              {themes.map((theme, i) => (
                <tr
                  key={theme.name}
                  className={i < themes.length - 1 ? 'border-b border-vui-border' : ''}
                >
                  <td className="px-4 py-3">
                    <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">
                      vui-theme-{theme.name}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-vui-text-subtle">{theme.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock
          language="css"
          code={`/* All available theme classes */
vui-theme-default
vui-theme-midnight
vui-theme-ocean
vui-theme-tangerine
vui-theme-construction
vui-theme-glass
vui-theme-soft
vui-theme-high-contrast
vui-theme-monochrome-red`}
        />
      </section>

      {/* Density */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Density modifiers</h2>
        <p className="mb-4 text-sm leading-relaxed text-vui-text-subtle">
          Density modifiers control the padding and spacing of all components in a region. Combine
          them with any theme class.
        </p>
        <div className="mb-6 overflow-hidden rounded-xl border border-vui-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-vui-border bg-vui-surface-muted">
                <th className="px-4 py-3 text-left font-semibold text-vui-text">Class</th>
                <th className="px-4 py-3 text-left font-semibold text-vui-text">Description</th>
              </tr>
            </thead>
            <tbody>
              {densities.map((d, i) => (
                <tr
                  key={d.name}
                  className={i < densities.length - 1 ? 'border-b border-vui-border' : ''}
                >
                  <td className="px-4 py-3">
                    <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">
                      {d.name}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-vui-text-subtle">{d.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock
          language="html"
          code={`<!-- Theme + density combined -->
<body class="vui-theme-midnight vui-density-compact">

<body class="vui-theme-ocean vui-density-spacious">

<!-- Mix density in a subsection -->
<body class="vui-theme-default">
  <header class="vui-density-compact">...</header>
  <main class="vui-density-comfortable">...</main>
</body>`}
        />
      </section>

      {/* Dynamic theming in React */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Dynamic theming in React</h2>
        <p className="mb-4 text-sm leading-relaxed text-vui-text-subtle">
          Because theming is CSS-class-based, switching themes at runtime is as simple as updating a
          class string. No React context or re-render of component subtrees is required.
        </p>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'

const themes = ['default', 'midnight', 'ocean', 'tangerine', 'construction', 'glass', 'soft'] as const
type Theme = (typeof themes)[number]

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('default')

  return (
    <div className={\`vui-theme-\${theme}\`}>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
      >
        {themes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {/* Components here react to theme instantly */}
    </div>
  )
}`}
        />
      </section>

      {/* Custom CSS variables */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Custom CSS variables</h2>
        <p className="mb-4 text-sm leading-relaxed text-vui-text-subtle">
          You can override any CSS custom property to create your own palette. Override at the{' '}
          <code className="rounded bg-vui-surface-muted px-1.5 py-0.5 font-mono text-xs text-vui-primary">
            :root
          </code>{' '}
          level or scope to a class.
        </p>
        <CodeBlock
          language="css"
          code={`/* globals.css — override the default theme */
:root {
  --vui-primary: #7c3aed;
  --vui-primary-soft: #ede9fe;
  --vui-surface: #ffffff;
  --vui-surface-muted: #f5f3ff;
  --vui-text: #1e1b4b;
  --vui-text-muted: #4c1d95;
  --vui-text-subtle: #6d28d9;
  --vui-border: #ddd6fe;
}

/* Or scope overrides to a custom class */
.my-brand-theme {
  --vui-primary: #dc2626;
  --vui-primary-soft: #fee2e2;
}`}
        />
      </section>

      {/* Token reference */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Token reference</h2>
        <div className="overflow-hidden rounded-xl border border-vui-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-vui-border bg-vui-surface-muted">
                <th className="px-4 py-3 text-left font-semibold text-vui-text">Variable</th>
                <th className="px-4 py-3 text-left font-semibold text-vui-text">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-vui-border">
              {[
                ['--vui-primary', 'Primary action color for buttons, links, focus rings'],
                ['--vui-primary-soft', 'Light tint of primary used for active backgrounds'],
                ['--vui-surface', 'Default surface/card background color'],
                ['--vui-surface-muted', 'Subtle background for inputs, code blocks, hover states'],
                ['--vui-text', 'Primary body text color'],
                ['--vui-text-muted', 'Secondary text, labels, placeholders'],
                ['--vui-text-subtle', 'Tertiary text, hints, captions'],
                ['--vui-border', 'Default border color for inputs, cards, dividers'],
              ].map(([token, usage]) => (
                <tr key={token}>
                  <td className="px-4 py-3">
                    <code className="font-mono text-xs text-vui-primary">{token}</code>
                  </td>
                  <td className="px-4 py-3 text-vui-text-subtle">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Next steps */}
      <section className="mb-4">
        <h2 className="mb-4 text-xl font-semibold text-vui-text">Next steps</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/docs/button"
            className="group rounded-xl border border-vui-border bg-vui-surface p-5 transition-colors hover:border-vui-primary hover:bg-vui-primary-soft"
          >
            <p className="mb-1 font-semibold text-vui-text group-hover:text-vui-primary">Browse components</p>
            <p className="text-sm text-vui-text-subtle">
              Explore all 30+ components with live previews and code examples.
            </p>
          </Link>
          <Link
            href="/examples/dashboard"
            className="group rounded-xl border border-vui-border bg-vui-surface p-5 transition-colors hover:border-vui-primary hover:bg-vui-primary-soft"
          >
            <p className="mb-1 font-semibold text-vui-text group-hover:text-vui-primary">Page examples</p>
            <p className="text-sm text-vui-text-subtle">
              See themes in action across full-page layouts.
            </p>
          </Link>
        </div>
      </section>
    </article>
  )
}

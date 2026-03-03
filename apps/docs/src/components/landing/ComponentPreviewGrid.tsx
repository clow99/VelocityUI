import Link from 'next/link'

const components = [
  {
    name: 'Button',
    slug: 'button',
    description: 'Triggers actions with multiple variants, sizes, and a loading state.',
    preview: (
      <div className="flex flex-wrap items-center gap-2">
        <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-vui-primary px-4 text-sm font-semibold text-vui-primary-contrast transition-colors hover:bg-vui-primary-hover">
          Primary
        </button>
        <button className="inline-flex h-9 items-center gap-2 rounded-lg border-2 border-vui-primary px-4 text-sm font-semibold text-vui-primary transition-colors hover:bg-vui-primary hover:text-vui-primary-contrast">
          Outline
        </button>
        <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-transparent px-4 text-sm font-semibold text-vui-primary transition-colors hover:bg-vui-primary-soft">
          Ghost
        </button>
      </div>
    ),
  },
  {
    name: 'Input',
    slug: 'input',
    description: 'Text input with label, hint, error state, icons, and multiple sizes.',
    preview: (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-vui-text-muted">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            readOnly
            className="w-full rounded-lg border border-vui-border bg-vui-surface px-3 py-2 text-sm text-vui-text placeholder:text-vui-text-subtle focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-vui-text-muted">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            readOnly
            className="w-full rounded-lg border border-vui-danger bg-vui-surface px-3 py-2 text-sm focus:outline-none"
          />
          <span className="text-xs text-vui-danger">Password is required</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Title',
    slug: 'title',
    description: 'Semantic headings with size scale, weight, alignment, and color variants.',
    preview: (
      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-3xl font-extrabold text-vui-text leading-tight">Display Heading</p>
        <p className="text-xl font-bold text-vui-text-muted leading-tight">Section Title</p>
        <p className="text-base font-semibold text-vui-primary leading-tight">
          Primary Color Title
        </p>
      </div>
    ),
  },
  {
    name: 'Badge',
    slug: 'badge',
    description: 'Status labels with dot indicators, multiple variants, and sizes.',
    preview: (
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-vui-badge-info-border bg-vui-badge-info-bg px-2.5 py-1 text-xs font-medium text-vui-badge-info-color">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Info
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-vui-badge-success-border bg-vui-badge-success-bg px-2.5 py-1 text-xs font-medium text-vui-badge-success-color">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Success
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-vui-badge-warning-border bg-vui-badge-warning-bg px-2.5 py-1 text-xs font-medium text-vui-badge-warning-color">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Warning
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-vui-badge-danger-border bg-vui-badge-danger-bg px-2.5 py-1 text-xs font-medium text-vui-badge-danger-color">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Danger
        </span>
      </div>
    ),
  },
  {
    name: 'Card',
    slug: 'card',
    description: 'Flexible container with compound Header, Body, Footer slots and hover effects.',
    preview: (
      <div className="w-full rounded-xl border border-vui-border bg-vui-surface overflow-hidden shadow-sm">
        <div className="border-b border-vui-divider px-4 py-3">
          <p className="text-sm font-semibold text-vui-text">Card Title</p>
          <p className="text-xs text-vui-text-subtle">Subtitle or metadata</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-vui-text-muted">Card body content goes here.</p>
        </div>
        <div className="border-t border-vui-divider px-4 py-3 flex gap-2">
          <button className="rounded-lg bg-vui-primary px-3 py-1.5 text-xs font-semibold text-vui-primary-contrast transition-colors hover:bg-vui-primary-hover">
            Action
          </button>
          <button className="rounded-lg border border-vui-border px-3 py-1.5 text-xs font-semibold text-vui-text-muted transition-colors hover:bg-vui-surface-muted">
            Cancel
          </button>
        </div>
      </div>
    ),
  },
]

export function ComponentPreviewGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {components.map((c) => (
        <Link
          key={c.slug}
          href={`/docs/${c.slug}`}
          className="group flex flex-col overflow-hidden rounded-2xl border border-vui-border bg-vui-surface transition-all hover:border-vui-primary/40 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex min-h-[140px] items-center justify-center bg-vui-surface-muted p-6">
            {c.preview}
          </div>
          <div className="flex-1 p-5 bg-vui-surface">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-vui-text">{c.name}</h3>
              <svg
                className="h-4 w-4 text-vui-text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-vui-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="mt-1.5 text-sm text-vui-text-subtle leading-relaxed">{c.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

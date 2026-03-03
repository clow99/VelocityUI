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
    name: 'Textarea',
    slug: 'textarea',
    description: 'Multi-line text input with label, error, hint, and resize control.',
    preview: (
      <div className="flex flex-col gap-1 w-full">
        <label className="text-xs font-medium text-vui-text-muted">Message</label>
        <textarea
          readOnly
          placeholder="Write your message here..."
          rows={3}
          className="w-full rounded-lg border border-vui-border bg-vui-surface px-3 py-2 text-sm text-vui-text placeholder:text-vui-text-subtle focus:outline-none resize-none"
        />
        <span className="text-xs" style={{ color: 'var(--vui-text-subtle)' }}>Optional help text below the field.</span>
      </div>
    ),
  },
  {
    name: 'Select',
    slug: 'select',
    description: 'Styled native select with custom arrow, label, error, and size variants.',
    preview: (
      <div className="flex flex-col gap-1 w-full">
        <label className="text-xs font-medium text-vui-text-muted">Country</label>
        <div className="relative">
          <select
            className="w-full appearance-none rounded-lg border border-vui-border bg-vui-surface px-3 py-2 pr-8 text-sm text-vui-text focus:outline-none cursor-pointer"
            defaultValue="us"
          >
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="gb">United Kingdom</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-vui-text-subtle">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>
    ),
  },
  {
    name: 'Checkbox',
    slug: 'checkbox',
    description: 'Custom-styled checkbox with label, description, error state, and sizes.',
    preview: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded border-2 border-vui-primary bg-vui-primary flex items-center justify-center flex-shrink-0">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 5L3.5 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-vui-text">Accept terms</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded border-2 border-vui-border bg-vui-surface flex-shrink-0" />
          <span className="text-sm font-medium text-vui-text-muted">Subscribe to newsletter</span>
        </div>
        <div className="flex items-center gap-2 opacity-50">
          <div className="h-4 w-4 rounded border-2 border-vui-border bg-vui-surface-muted flex-shrink-0" />
          <span className="text-sm font-medium text-vui-text-muted">Disabled option</span>
        </div>
      </div>
    ),
  },
  {
    name: 'RadioGroup',
    slug: 'radiogroup',
    description: 'Accessible radio group with fieldset, legend, descriptions, and orientations.',
    preview: (
      <div className="flex flex-col gap-2.5">
        {['Free', 'Pro', 'Enterprise'].map((plan, i) => (
          <div key={plan} className="flex items-center gap-2">
            <div className={`h-4 w-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${i === 1 ? 'border-vui-primary bg-vui-primary' : 'border-vui-border bg-vui-surface'}`}>
              {i === 1 && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
            </div>
            <span className={`text-sm font-medium ${i === 1 ? 'text-vui-text' : 'text-vui-text-muted'}`}>{plan}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Switch',
    slug: 'switch',
    description: 'Toggle control with track and thumb animation, label, description, and sizes.',
    preview: (
      <div className="flex flex-col gap-3">
        {[
          { label: 'Notifications', on: true },
          { label: 'Dark mode', on: false },
          { label: 'Auto-save', on: true },
        ].map(({ label, on }) => (
          <div key={label} className="flex items-center gap-3">
            <div className={`relative h-5 w-9 rounded-full transition-colors ${on ? 'bg-vui-primary' : 'bg-vui-border'}`}>
              <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${on ? 'left-[calc(100%-1.125rem)]' : 'left-0.5'}`} />
            </div>
            <span className="text-sm font-medium text-vui-text">{label}</span>
          </div>
        ))}
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
    name: 'Alert',
    slug: 'alert',
    description: 'Notification banners with four semantic variants, icons, and dismiss button.',
    preview: (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-start gap-2.5 rounded-lg border border-vui-info-border bg-vui-info-soft px-3 py-2.5 text-xs font-medium text-vui-info-text">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Your session will expire soon.
        </div>
        <div className="flex items-start gap-2.5 rounded-lg border border-vui-success-border bg-vui-success-soft px-3 py-2.5 text-xs font-medium text-vui-success-text">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Changes saved successfully.
        </div>
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
  {
    name: 'Dialog',
    slug: 'dialog',
    description: 'Modal dialog with focus trap, Escape close, compound parts, and sizes.',
    preview: (
      <div className="w-full rounded-xl border border-vui-border bg-vui-surface overflow-hidden shadow-lg">
        <div className="border-b border-vui-divider px-4 py-3 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-vui-text">Confirm action</p>
            <p className="text-xs text-vui-text-subtle mt-0.5">This cannot be undone.</p>
          </div>
          <div className="h-6 w-6 flex items-center justify-center rounded-md text-vui-text-subtle">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-vui-text-muted">Are you sure you want to delete this?</p>
        </div>
        <div className="border-t border-vui-divider px-4 py-3 flex justify-end gap-2">
          <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-vui-text-muted transition-colors hover:bg-vui-surface-muted">Cancel</button>
          <button className="rounded-lg bg-vui-danger px-3 py-1.5 text-xs font-semibold text-white">Delete</button>
        </div>
      </div>
    ),
  },
  {
    name: 'Tabs',
    slug: 'tabs',
    description: 'Accessible tab navigation with keyboard support and three visual variants.',
    preview: (
      <div className="w-full">
        <div className="flex border-b border-vui-border">
          {['Overview', 'Analytics', 'Settings'].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                i === 0
                  ? 'border-vui-primary text-vui-primary'
                  : 'border-transparent text-vui-text-subtle hover:text-vui-text'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="py-3 px-1">
          <p className="text-sm text-vui-text-muted">Overview tab content is shown here.</p>
        </div>
      </div>
    ),
  },
  {
    name: 'Accordion',
    slug: 'accordion',
    description: 'Collapsible sections with smooth animation, multiple mode, and three variants.',
    preview: (
      <div className="w-full rounded-xl border border-vui-border overflow-hidden">
        {[
          { title: 'What is VelocityUI?', open: true },
          { title: 'Is it free to use?', open: false },
          { title: 'Does it support theming?', open: false },
        ].map(({ title, open }, i) => (
          <div key={title} className={i > 0 ? 'border-t border-vui-border' : ''}>
            <div className="flex items-center justify-between px-4 py-3.5 bg-vui-surface">
              <span className="text-sm font-semibold text-vui-text">{title}</span>
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`text-vui-text-subtle transition-transform ${open ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {open && (
              <div className="px-4 pb-3.5 bg-vui-surface">
                <p className="text-sm text-vui-text-muted">A modern, accessible React component library.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Tooltip',
    slug: 'tooltip',
    description: 'Hover/focus tooltip with four placements, delay support, and ARIA wiring.',
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-3 py-4">
        {['Top', 'Bottom', 'Left', 'Right'].map((dir) => (
          <div key={dir} className="relative group">
            <button className="inline-flex h-9 items-center rounded-lg border-2 border-vui-primary px-4 text-sm font-semibold text-vui-primary">
              {dir}
            </button>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block rounded bg-vui-text px-2 py-1 text-xs text-vui-bg whitespace-nowrap">
              Tooltip
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Divider',
    slug: 'divider',
    description: 'Horizontal or vertical separator with an optional centered text label.',
    preview: (
      <div className="flex flex-col gap-3 w-full">
        <div className="h-px w-full bg-vui-divider" />
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-vui-divider" />
          <span className="text-xs font-medium text-vui-text-subtle">or</span>
          <div className="h-px flex-1 bg-vui-divider" />
        </div>
        <div className="flex items-center gap-3 h-8">
          <span className="text-sm text-vui-text-muted">Left</span>
          <div className="w-px h-full bg-vui-divider" />
          <span className="text-sm text-vui-text-muted">Right</span>
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

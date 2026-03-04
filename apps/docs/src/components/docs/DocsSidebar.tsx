'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const gettingStartedItems = [
  { slug: 'introduction', name: 'Introduction' },
  { slug: 'installation', name: 'Installation' },
  { slug: 'theming', name: 'Theming' },
]

export interface ComponentEntry {
  slug: string
  name: string
}

export interface ComponentCategory {
  label: string
  items: ComponentEntry[]
}

export const componentCategories: ComponentCategory[] = [
  {
    label: 'Forms',
    items: [
      { slug: 'button', name: 'Button' },
      { slug: 'checkbox', name: 'Checkbox' },
      { slug: 'fileupload', name: 'FileUpload' },
      { slug: 'input', name: 'Input' },
      { slug: 'numberinput', name: 'NumberInput' },
      { slug: 'radiogroup', name: 'RadioGroup' },
      { slug: 'select', name: 'Select' },
      { slug: 'slider', name: 'Slider' },
      { slug: 'switch', name: 'Switch' },
      { slug: 'textarea', name: 'Textarea' },
    ],
  },
  {
    label: 'Display',
    items: [
      { slug: 'avatar', name: 'Avatar' },
      { slug: 'badge', name: 'Badge' },
      { slug: 'emptystate', name: 'EmptyState' },
      { slug: 'skeleton', name: 'Skeleton' },
      { slug: 'table', name: 'Table' },
      { slug: 'tag', name: 'Tag' },
      { slug: 'title', name: 'Title' },
    ],
  },
  {
    label: 'Layout',
    items: [
      { slug: 'card', name: 'Card' },
      { slug: 'divider', name: 'Divider' },
    ],
  },
  {
    label: 'Feedback',
    items: [
      { slug: 'alert', name: 'Alert' },
      { slug: 'progress', name: 'Progress' },
      { slug: 'spinner', name: 'Spinner' },
      { slug: 'toast', name: 'Toast' },
    ],
  },
  {
    label: 'Navigation',
    items: [
      { slug: 'accordion', name: 'Accordion' },
      { slug: 'breadcrumb', name: 'Breadcrumb' },
      { slug: 'pagination', name: 'Pagination' },
      { slug: 'stepper', name: 'Stepper' },
      { slug: 'tabs', name: 'Tabs' },
    ],
  },
  {
    label: 'Overlays',
    items: [
      { slug: 'dialog', name: 'Dialog' },
      { slug: 'dropdown', name: 'Dropdown' },
      { slug: 'popover', name: 'Popover' },
      { slug: 'tooltip', name: 'Tooltip' },
    ],
  },
]

export const docsComponents: ComponentEntry[] = componentCategories.flatMap((c) => c.items)

export const pageExamples = [
  {
    label: 'Authentication',
    pages: [
      { slug: 'login', name: 'Login' },
      { slug: 'register', name: 'Register' },
      { slug: 'forgot-password', name: 'Forgot Password' },
    ],
  },
  {
    label: 'Dashboard',
    pages: [
      { slug: 'dashboard', name: 'Overview' },
      { slug: 'analytics', name: 'Analytics' },
      { slug: 'ecommerce', name: 'E-Commerce' },
    ],
  },
  {
    label: 'Forms',
    pages: [
      { slug: 'form', name: 'Contact Form' },
      { slug: 'checkout', name: 'Checkout' },
      { slug: 'survey', name: 'Survey' },
    ],
  },
  {
    label: 'Landing',
    pages: [
      { slug: 'landing', name: 'Marketing' },
      { slug: 'startup', name: 'Startup' },
    ],
  },
  {
    label: 'Settings',
    pages: [
      { slug: 'settings', name: 'Account' },
      { slug: 'billing', name: 'Billing' },
    ],
  },
  {
    label: 'Profile',
    pages: [
      { slug: 'profile', name: 'Developer' },
      { slug: 'team', name: 'Team' },
    ],
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', flexShrink: 0 }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function SectionHeader({
  label,
  open,
  onToggle,
}: {
  label: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-vui-text-subtle transition-colors hover:bg-vui-surface-muted hover:text-vui-text"
    >
      {label}
      <ChevronIcon open={open} />
    </button>
  )
}

function CategorySection({
  category,
  pathname,
}: {
  category: ComponentCategory
  pathname: string
}) {
  const hasActive = category.items.some((c) => pathname === `/docs/${c.slug}`)
  const [open, setOpen] = useState(hasActive)

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
          hasActive
            ? 'text-vui-primary'
            : 'text-vui-text-subtle hover:bg-vui-surface-muted hover:text-vui-text-muted'
        }`}
      >
        <span className="flex items-center gap-1.5">
          {category.label}
          <span
            className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium leading-none ${
              hasActive
                ? 'bg-vui-primary-soft text-vui-primary'
                : 'bg-vui-surface-muted text-vui-text-subtle'
            }`}
          >
            {category.items.length}
          </span>
        </span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-vui-border pl-2">
          {category.items.map((c) => {
            const isActive = pathname === `/docs/${c.slug}`
            return (
              <Link
                key={c.slug}
                href={`/docs/${c.slug}`}
                className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-vui-primary-soft font-medium text-vui-primary'
                    : 'text-vui-text-muted hover:bg-vui-surface-muted hover:text-vui-text'
                }`}
              >
                {c.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

function PageCategorySection({
  category,
  pathname,
}: {
  category: (typeof pageExamples)[number]
  pathname: string
}) {
  const hasActive = category.pages.some((p) => pathname === `/examples/${p.slug}`)
  const [open, setOpen] = useState(hasActive)

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
          hasActive
            ? 'text-vui-primary'
            : 'text-vui-text-subtle hover:bg-vui-surface-muted hover:text-vui-text-muted'
        }`}
      >
        <span className="flex items-center gap-1.5">
          {category.label}
          <span
            className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium leading-none ${
              hasActive
                ? 'bg-vui-primary-soft text-vui-primary'
                : 'bg-vui-surface-muted text-vui-text-subtle'
            }`}
          >
            {category.pages.length}
          </span>
        </span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-vui-border pl-2">
          {category.pages.map((page) => {
            const isActive = pathname === `/examples/${page.slug}`
            return (
              <Link
                key={page.slug}
                href={`/examples/${page.slug}`}
                className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-vui-primary-soft font-medium text-vui-primary'
                    : 'text-vui-text-muted hover:bg-vui-surface-muted hover:text-vui-text'
                }`}
              >
                {page.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function DocsSidebar() {
  const pathname = usePathname()

  const gettingStartedActive = gettingStartedItems.some((item) => pathname === `/docs/${item.slug}`)
  const componentsActive = docsComponents.some((c) => pathname === `/docs/${c.slug}`)
  const examplesActive = pageExamples.some((cat) =>
    cat.pages.some((p) => pathname === `/examples/${p.slug}`)
  )
  const resourcesActive = pathname === '/docs/ai-guide'

  const [gettingStartedOpen, setGettingStartedOpen] = useState(
    gettingStartedActive || (!componentsActive && !examplesActive && !resourcesActive)
  )
  const [componentsOpen, setComponentsOpen] = useState(componentsActive)
  const [examplesOpen, setExamplesOpen] = useState(examplesActive)

  return (
    <aside className="sticky top-20 flex h-[calc(100vh-5rem)] w-56 flex-shrink-0 flex-col">
      <nav className="flex flex-col gap-1 overflow-y-auto pr-1">
        <div>
          <SectionHeader
            label="Getting Started"
            open={gettingStartedOpen}
            onToggle={() => setGettingStartedOpen((v) => !v)}
          />
          {gettingStartedOpen && (
            <div className="mt-0.5 flex flex-col gap-0.5">
              {gettingStartedItems.map((item) => {
                const isActive = pathname === `/docs/${item.slug}`
                return (
                  <Link
                    key={item.slug}
                    href={`/docs/${item.slug}`}
                    className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-vui-primary-soft font-medium text-vui-primary'
                        : 'text-vui-text-muted hover:bg-vui-surface-muted hover:text-vui-text'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        <div className="mt-2">
          <SectionHeader
            label="Components"
            open={componentsOpen}
            onToggle={() => setComponentsOpen((v) => !v)}
          />
          {componentsOpen && (
            <div className="mt-0.5 flex flex-col gap-0.5">
              {componentCategories.map((category) => (
                <CategorySection
                  key={category.label}
                  category={category}
                  pathname={pathname}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-2">
          <SectionHeader
            label="Page Examples"
            open={examplesOpen}
            onToggle={() => setExamplesOpen((v) => !v)}
          />
          {examplesOpen && (
            <div className="mt-0.5 flex flex-col gap-0.5">
              {pageExamples.map((category) => (
                <PageCategorySection key={category.label} category={category} pathname={pathname} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-2">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-vui-text-subtle">
            Resources
          </p>
          <div className="mt-0.5 flex flex-col gap-0.5">
            <Link
              href="/docs/ai-guide"
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                resourcesActive
                  ? 'bg-vui-primary-soft font-medium text-vui-primary'
                  : 'text-vui-text-muted hover:bg-vui-surface-muted hover:text-vui-text'
              }`}
            >
              AI Agent Guide
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  )
}

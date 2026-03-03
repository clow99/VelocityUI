import Link from 'next/link'

const components = [
  {
    name: 'Button',
    slug: 'button',
    description: 'Triggers actions with multiple variants, sizes, and a loading state.',
    preview: (
      <div className="flex flex-wrap items-center gap-2">
        <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-indigo-500 px-4 text-sm font-semibold text-white hover:bg-indigo-600 transition-colors">
          Primary
        </button>
        <button className="inline-flex h-9 items-center gap-2 rounded-lg border-2 border-indigo-500 px-4 text-sm font-semibold text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors">
          Outline
        </button>
        <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-transparent px-4 text-sm font-semibold text-indigo-500 hover:bg-indigo-50 transition-colors">
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
          <label className="text-xs font-medium text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-red-400 px-3 py-2 text-sm focus:outline-none"
          />
          <span className="text-xs text-red-500">Password is required</span>
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
        <p className="text-3xl font-extrabold text-gray-900 leading-tight">Display Heading</p>
        <p className="text-xl font-bold text-gray-800 leading-tight">Section Title</p>
        <p className="text-base font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent leading-tight">
          Gradient Title
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
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Info
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Success
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-200 bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
          Warning
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
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
      <div className="w-full rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
        <div className="border-b border-gray-100 px-4 py-3">
          <p className="text-sm font-semibold text-gray-900">Card Title</p>
          <p className="text-xs text-gray-500">Subtitle or metadata</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm text-gray-600">Card body content goes here. Accepts any children.</p>
        </div>
        <div className="border-t border-gray-100 px-4 py-3 flex gap-2">
          <button className="rounded-lg bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-600 transition-colors">
            Action
          </button>
          <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
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
          className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50 hover:-translate-y-1"
        >
          {/* Preview */}
          <div className="flex min-h-[140px] items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            {c.preview}
          </div>
          {/* Info */}
          <div className="flex-1 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">{c.name}</h3>
              <svg
                className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{c.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

'use client'

import { Input } from 'velocityui'
import 'velocityui/dist/style.css'

const SearchIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

export function InputPreview() {
  return (
    <div className="flex flex-col gap-4 max-w-sm w-full">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Basic</p>
        <Input label="Email address" placeholder="you@example.com" type="email" />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">With error</p>
        <Input
          label="Password"
          type="password"
          defaultValue="123"
          error="Password must be at least 8 characters."
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">With hint &amp; icon</p>
        <Input
          label="Search"
          placeholder="Search components..."
          hint="Press Enter to search"
          leftIcon={<SearchIcon />}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Disabled</p>
        <Input label="Read only" value="Cannot edit this" disabled />
      </div>
    </div>
  )
}

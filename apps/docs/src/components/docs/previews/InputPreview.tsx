'use client'

import { Input } from '@clow99/velocityui'

const SearchIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

export function InputPreview() {
  return (
    <div className="flex flex-col gap-4 max-w-sm w-full">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Basic</p>
        <Input label="Email address" placeholder="you@example.com" type="email" />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Floating label</p>
        <div className="flex flex-col gap-3">
          <Input label="Email address" type="email" floatingLabel />
          <Input label="Location name" floatingLabel />
          <Input label="Search" leftIcon={<SearchIcon />} floatingLabel hint="Press Enter to search" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Search presets</p>
        <div className="flex flex-col gap-3">
          <Input label="Search users" search placeholder="Type a name..." />
          <Input
            label="Search products"
            search
            searchIconPosition="right"
            rightIconClassName="text-vui-primary"
            placeholder="Type SKU or name..."
          />
          <Input
            label="Custom search icon"
            searchIcon={<SearchIcon />}
            leftIconClassName="text-vui-danger"
            placeholder="Custom icon color"
          />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With error</p>
        <Input
          label="Password"
          type="password"
          defaultValue="123"
          error="Password must be at least 8 characters."
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Floating label with error</p>
        <Input
          label="Password"
          type="password"
          defaultValue="123"
          error="Password must be at least 8 characters."
          floatingLabel
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Disabled</p>
        <Input label="Read only" value="Cannot edit this" disabled />
      </div>
    </div>
  )
}


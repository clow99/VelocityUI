'use client'

import { EmptyState, Button } from 'velocityui'

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const FolderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </svg>
)

export function EmptyStatePreview() {
  return (
    <div className="flex flex-col gap-6 divide-y divide-vui-border">
      <EmptyState
        icon={<SearchIcon />}
        title="No results found"
        description="Try adjusting your search or filters to find what you're looking for."
        action={<Button variant="outline" size="sm">Clear filters</Button>}
      />
      <div className="pt-6">
        <EmptyState
          icon={<FolderIcon />}
          title="No files yet"
          description="Upload your first file to get started."
          action={<Button size="sm">Upload file</Button>}
        />
      </div>
    </div>
  )
}

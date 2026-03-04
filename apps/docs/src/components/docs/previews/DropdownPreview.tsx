'use client'

import { Dropdown, Button } from '@clow99/velocityui'

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
)

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
  </svg>
)

export function DropdownPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With icons and separator</p>
        <Dropdown
          trigger={<Button variant="outline">Actions ▾</Button>}
          items={[
            { label: 'Edit', icon: <EditIcon /> },
            { label: 'Duplicate', icon: <CopyIcon /> },
            { separator: true },
            { label: 'Delete', icon: <TrashIcon /> },
          ]}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With disabled item</p>
        <Dropdown
          trigger={<Button variant="secondary">Options</Button>}
          items={[
            { label: 'View details' },
            { label: 'Export data', disabled: true },
            { label: 'Archive' },
          ]}
          placement="bottom-end"
        />
      </div>
    </div>
  )
}


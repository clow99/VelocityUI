'use client'

import { Tabs } from 'velocityui'

const items = [
  {
    value: 'overview',
    label: 'Overview',
    children: (
      <p className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>
        This is the overview tab content. It provides a summary of the feature.
      </p>
    ),
  },
  {
    value: 'analytics',
    label: 'Analytics',
    children: (
      <p className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>
        Analytics data and charts will appear here.
      </p>
    ),
  },
  {
    value: 'settings',
    label: 'Settings',
    children: (
      <p className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>
        Configure your preferences in this tab.
      </p>
    ),
  },
]

export function TabsPreview() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Tabs items={items} defaultValue="overview" variant="underline" />
      <Tabs items={items} defaultValue="analytics" variant="pills" />
    </div>
  )
}

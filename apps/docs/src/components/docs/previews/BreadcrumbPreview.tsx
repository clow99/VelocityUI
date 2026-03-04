'use client'

import { Breadcrumb } from '@velocityuikit/velocityui'

export function BreadcrumbPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Basic</p>
        <Breadcrumb
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Running Shoes' },
          ]}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Custom separator</p>
        <Breadcrumb
          separator={<span style={{ color: '#94a3b8', fontWeight: 500 }}>/</span>}
          items={[
            { label: 'Dashboard', href: '#' },
            { label: 'Settings', href: '#' },
            { label: 'Profile' },
          ]}
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Single level</p>
        <Breadcrumb items={[{ label: 'Home', href: '#' }, { label: 'About' }]} />
      </div>
    </div>
  )
}


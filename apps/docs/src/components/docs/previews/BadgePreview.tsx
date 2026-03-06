'use client'

import { Badge } from '@velocityuikit/velocityui'

export function BadgePreview() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Variants</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="primary">Primary</Badge>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With dot</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="warning" dot>Pending</Badge>
          <Badge variant="danger" dot>Offline</Badge>
          <Badge variant="info" dot>Processing</Badge>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="sm" variant="primary">Small</Badge>
          <Badge size="md" variant="primary">Medium</Badge>
          <Badge size="lg" variant="primary">Large</Badge>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Animation</p>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="success" dot animation="pulse">
            Live
          </Badge>
          <Badge variant="primary" animation="shine">
            New release
          </Badge>
          <Badge variant="info" animation="pulse">
            Syncing
          </Badge>
        </div>
      </div>
    </div>
  )
}


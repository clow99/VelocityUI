'use client'

import { Badge } from 'velocityui'
import 'velocityui/dist/style.css'

export function BadgePreview() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Variants</p>
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">With dot</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="warning" dot>Pending</Badge>
          <Badge variant="danger" dot>Offline</Badge>
          <Badge variant="info" dot>Processing</Badge>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="sm" variant="primary">Small</Badge>
          <Badge size="md" variant="primary">Medium</Badge>
          <Badge size="lg" variant="primary">Large</Badge>
        </div>
      </div>
    </div>
  )
}

'use client'

import { Progress } from '@velocityuikit/velocityui'

export function ProgressPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With label and value</p>
        <Progress value={68} label="Upload progress" showValue />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Variants</p>
        <div className="flex flex-col gap-3">
          <Progress value={45} variant="primary" />
          <Progress value={78} variant="success" />
          <Progress value={55} variant="warning" />
          <Progress value={22} variant="danger" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Sizes</p>
        <div className="flex flex-col gap-3">
          <Progress value={60} size="sm" />
          <Progress value={60} size="md" />
          <Progress value={60} size="lg" />
        </div>
      </div>
    </div>
  )
}


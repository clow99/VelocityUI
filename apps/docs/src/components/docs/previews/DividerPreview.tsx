'use client'

import { Divider } from '@clow99/velocityui'

export function DividerPreview() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-3">
        <p className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>
          Above the divider
        </p>
        <Divider />
        <p className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>
          Below the divider
        </p>
      </div>
      <Divider label="or" />
      <div className="flex items-center gap-4 h-12">
        <span className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>Left</span>
        <Divider orientation="vertical" />
        <span className="text-sm" style={{ color: 'var(--vui-text-muted)' }}>Right</span>
      </div>
    </div>
  )
}


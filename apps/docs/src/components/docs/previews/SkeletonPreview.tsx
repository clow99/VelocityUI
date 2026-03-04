'use client'

import { Skeleton } from 'velocityui'

export function SkeletonPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Single block</p>
        <Skeleton width={240} height={20} />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Multi-line text</p>
        <Skeleton lines={4} height={14} />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Card skeleton</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 280 }}>
          <Skeleton height={140} radius={12} />
          <Skeleton height={18} width="65%" />
          <Skeleton lines={3} height={13} />
        </div>
      </div>
    </div>
  )
}

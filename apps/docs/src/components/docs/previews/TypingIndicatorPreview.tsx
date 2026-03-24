'use client'

import { TypingIndicator } from '@velocityuikit/velocityui'

export function TypingIndicatorPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">No Users</p>
        <TypingIndicator />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Single User</p>
        <TypingIndicator users={['Alice']} />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Two Users</p>
        <TypingIndicator users={['Alice', 'Bob']} />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Multiple Users</p>
        <TypingIndicator users={['Alice', 'Bob', 'Carol']} />
      </div>
    </div>
  )
}

'use client'

import { ChatTimestamp } from '@velocityuikit/velocityui'

export function ChatTimestampPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Examples</p>
        <div className="flex flex-col gap-2">
          <ChatTimestamp>Today</ChatTimestamp>
          <ChatTimestamp>Yesterday</ChatTimestamp>
          <ChatTimestamp>March 24, 2026</ChatTimestamp>
        </div>
      </div>
    </div>
  )
}

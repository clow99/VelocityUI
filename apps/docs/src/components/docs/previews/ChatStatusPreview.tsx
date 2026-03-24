'use client'

import { ChatStatus } from '@velocityuikit/velocityui'

export function ChatStatusPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">All States</p>
        <div className="flex flex-wrap gap-4 items-center">
          <ChatStatus variant="online" showLabel />
          <ChatStatus variant="away" showLabel />
          <ChatStatus variant="busy" showLabel />
          <ChatStatus variant="dnd" showLabel />
          <ChatStatus variant="offline" showLabel />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Sizes</p>
        <div className="flex flex-wrap gap-4 items-center">
          <ChatStatus variant="online" size="sm" showLabel />
          <ChatStatus variant="online" size="md" showLabel />
          <ChatStatus variant="online" size="lg" showLabel />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Pulse Animation</p>
        <div className="flex flex-wrap gap-4 items-center">
          <ChatStatus variant="online" size="sm" pulse />
          <ChatStatus variant="online" size="md" pulse showLabel />
          <ChatStatus variant="online" size="lg" pulse />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Dot Only</p>
        <div className="flex flex-wrap gap-3 items-center">
          <ChatStatus variant="online" />
          <ChatStatus variant="away" />
          <ChatStatus variant="busy" />
          <ChatStatus variant="dnd" />
          <ChatStatus variant="offline" />
        </div>
      </div>
    </div>
  )
}

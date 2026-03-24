'use client'

import { ChatHeader } from '@velocityuikit/velocityui'

export function ChatHeaderPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Basic</p>
        <div className="rounded-lg border border-vui-border overflow-hidden">
          <ChatHeader title="Alice Chen" subtitle="Online" status="online" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With Back Button</p>
        <div className="rounded-lg border border-vui-border overflow-hidden">
          <ChatHeader title="Team Chat" subtitle="3 members" onBack={() => {}} />
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Away Status</p>
        <div className="rounded-lg border border-vui-border overflow-hidden">
          <ChatHeader title="Bob Smith" subtitle="Away" status="away" />
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { ChatThread, ChatBubble } from '@velocityuikit/velocityui'

export function ChatThreadPreview() {
  const [expanded, setExpanded] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Expanded Thread</p>
        <ChatThread
          replyCount={3}
          lastReplyTimestamp="2 min ago"
          expanded={expanded}
          onToggle={() => setExpanded((v) => !v)}
        >
          <ChatBubble variant="received" username="Bob">
            Great idea! I think we should go with option A.
          </ChatBubble>
          <ChatBubble variant="received" username="Carol">
            Agreed, option A makes more sense.
          </ChatBubble>
          <ChatBubble variant="received" username="Dave">
            Ship it!
          </ChatBubble>
        </ChatThread>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Collapsed Thread</p>
        <ChatThread
          replyCount={7}
          lastReplyTimestamp="1 hour ago"
          expanded={collapsed}
          onToggle={() => setCollapsed((v) => !v)}
        >
          <ChatBubble variant="received" username="Eve">
            This is thread content.
          </ChatBubble>
        </ChatThread>
      </div>
    </div>
  )
}

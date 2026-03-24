'use client'

import { ChatWindow, ChatHeader, ChatBubble, ChatInput, ChatTimestamp } from '@velocityuikit/velocityui'

export function ChatWindowPreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Full Chat Layout</p>
        <div style={{ height: '24rem' }}>
          <ChatWindow
            header={<ChatHeader title="Alice Chen" subtitle="Online" status="online" />}
            footer={<ChatInput placeholder="Type a message…" onSend={() => {}} />}
          >
            <ChatTimestamp>Today</ChatTimestamp>
            <ChatBubble variant="received" username="Alice" timestamp="10:30 AM">
              Hey! Have you checked out the new chat components?
            </ChatBubble>
            <ChatBubble variant="sent" timestamp="10:31 AM" status="read">
              Yes, they look great! Love the theming support.
            </ChatBubble>
            <ChatBubble variant="received" username="Alice" timestamp="10:32 AM">
              Right? Works perfectly with all the VelocityUI themes.
            </ChatBubble>
            <ChatBubble variant="sent" timestamp="10:33 AM" status="delivered">
              The AI variant is super useful for my project too.
            </ChatBubble>
          </ChatWindow>
        </div>
      </div>
    </div>
  )
}

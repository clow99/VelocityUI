'use client'

import { ChatBubble, ChatReaction } from '@velocityuikit/velocityui'

export function ChatBubblePreview() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Conversation</p>
        <div className="flex flex-col gap-2">
          <ChatBubble variant="received" username="Alice" timestamp="10:30 AM">
            Hey! Have you seen the new design system?
          </ChatBubble>
          <ChatBubble variant="sent" timestamp="10:31 AM" status="read">
            Yes! It looks amazing. I love the chat components.
          </ChatBubble>
          <ChatBubble variant="received" username="Alice" timestamp="10:32 AM">
            Right? The theming support is great too.
          </ChatBubble>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">AI Assistant</p>
        <div className="flex flex-col gap-2">
          <ChatBubble variant="ai" username="Assistant" timestamp="Now" isStreaming>
            Let me help you with that. Here is what I found...
          </ChatBubble>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">System &amp; Grouped</p>
        <div className="flex flex-col gap-1">
          <ChatBubble variant="system">Alice joined the conversation</ChatBubble>
          <ChatBubble variant="sent" grouping="first">Hey team</ChatBubble>
          <ChatBubble variant="sent" grouping="middle">Quick update on the project</ChatBubble>
          <ChatBubble variant="sent" grouping="last" status="delivered">We shipped v2.0!</ChatBubble>
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">With Reactions</p>
        <ChatBubble
          variant="received"
          username="Bob"
          timestamp="11:00 AM"
          actions={
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              <ChatReaction emoji="👍" count={3} active />
              <ChatReaction emoji="🎉" count={1} />
            </div>
          }
        >
          We just hit 10k users!
        </ChatBubble>
      </div>
    </div>
  )
}

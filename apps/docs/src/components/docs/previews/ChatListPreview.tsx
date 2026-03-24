'use client'

import { useState } from 'react'
import { ChatList } from '@velocityuikit/velocityui'

const conversations = [
  { id: '1', name: 'Alice Chen', lastMessage: 'See you tomorrow!', timestamp: '2m', unread: 2, online: true },
  { id: '2', name: 'Bob Smith', lastMessage: 'Thanks for the update on the project', timestamp: '1h', online: false },
  { id: '3', name: 'Team Chat', lastMessage: 'New deployment is ready for review', timestamp: '3h', unread: 5, online: false },
  { id: '4', name: 'Carol Davis', lastMessage: 'Can you review my PR?', timestamp: '1d', online: true },
]

export function ChatListPreview() {
  const [activeId, setActiveId] = useState('1')

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">Conversation List</p>
        <div style={{ maxWidth: '20rem' }} className="rounded-lg border border-vui-border">
          <ChatList
            conversations={conversations}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>
      </div>
    </div>
  )
}

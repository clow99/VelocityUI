'use client'

import { useState } from 'react'
import {
  ChatWindow,
  ChatHeader,
  ChatBubble,
  ChatInput,
  ChatList,
  ChatTimestamp,
  ChatStatus,
  ChatAttachment,
  ChatReaction,
  TypingIndicator,
  Title,
  Avatar,
} from '@velocityuikit/velocityui'

interface Message {
  id: number
  variant: 'sent' | 'received'
  text: string
  timestamp: string
  status?: 'sent' | 'delivered' | 'read'
  attachment?: { variant: 'image' | 'file'; fileName: string; fileSize?: string; src?: string }
  reactions?: { emoji: string; count: number; active: boolean }[]
}

const contacts = [
  {
    id: '1',
    name: 'Alice Chen',
    lastMessage: 'That sounds great! See you there 😊',
    timestamp: '2m',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    name: 'Bob Smith',
    lastMessage: 'I pushed the fix to staging',
    timestamp: '15m',
    unread: 0,
    online: true,
  },
  {
    id: '3',
    name: 'Carol Davis',
    lastMessage: 'Can you review my PR?',
    timestamp: '1h',
    unread: 1,
    online: false,
  },
  {
    id: '4',
    name: 'David Park',
    lastMessage: 'Meeting moved to 3pm',
    timestamp: '3h',
    unread: 0,
    online: false,
  },
  {
    id: '5',
    name: 'Eva Martinez',
    lastMessage: 'Thanks for the quick turnaround!',
    timestamp: '1d',
    unread: 0,
    online: true,
  },
]

const initialMessages: Record<string, Message[]> = {
  '1': [
    {
      id: 1,
      variant: 'received',
      text: 'Hey! Are you free for coffee this afternoon?',
      timestamp: '10:15 AM',
    },
    {
      id: 2,
      variant: 'sent',
      text: 'Sure! What time works for you?',
      timestamp: '10:18 AM',
      status: 'read',
    },
    {
      id: 3,
      variant: 'received',
      text: 'How about 3pm at the usual place?',
      timestamp: '10:20 AM',
    },
    {
      id: 4,
      variant: 'sent',
      text: 'Perfect, see you there!',
      timestamp: '10:21 AM',
      status: 'read',
    },
    {
      id: 5,
      variant: 'received',
      text: 'That sounds great! See you there 😊',
      timestamp: '10:22 AM',
      reactions: [{ emoji: '👍', count: 1, active: true }],
    },
  ],
  '2': [
    {
      id: 1,
      variant: 'received',
      text: 'Hey, the CI is failing on the main branch',
      timestamp: '9:30 AM',
    },
    {
      id: 2,
      variant: 'sent',
      text: 'I see it, looks like a flaky test. Let me check.',
      timestamp: '9:35 AM',
      status: 'read',
    },
    {
      id: 3,
      variant: 'sent',
      text: 'Found the issue — race condition in the auth flow.',
      timestamp: '9:52 AM',
      status: 'read',
    },
    {
      id: 4,
      variant: 'received',
      text: 'Nice catch! That was bugging us for a while',
      timestamp: '9:55 AM',
    },
    {
      id: 5,
      variant: 'sent',
      text: 'Fix is up for review',
      timestamp: '10:10 AM',
      status: 'delivered',
      attachment: { variant: 'file', fileName: 'fix-auth-race.patch', fileSize: '3.2 KB' },
    },
    { id: 6, variant: 'received', text: 'I pushed the fix to staging', timestamp: '10:30 AM' },
  ],
  '3': [
    {
      id: 1,
      variant: 'received',
      text: 'Hey, I just opened a PR for the new dashboard layout',
      timestamp: 'Yesterday',
    },
    {
      id: 2,
      variant: 'received',
      text: 'Can you review my PR?',
      timestamp: 'Yesterday',
      attachment: {
        variant: 'image',
        fileName: 'dashboard-preview.png',
        src: 'https://placehold.co/300x180/6366f1/ffffff?text=Dashboard+Preview',
      },
    },
  ],
}

function UserAvatar({ name, online }: { name: string; online?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      <Avatar size="sm" name={name} />
      {online !== undefined && (
        <span style={{ position: 'absolute', bottom: -1, right: -1 }}>
          <ChatStatus variant={online ? 'online' : 'offline'} size="sm" />
        </span>
      )}
    </div>
  )
}

export default function DirectMessagesPage() {
  const [activeId, setActiveId] = useState('1')
  const [messages, setMessages] = useState(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [typing, setTyping] = useState(false)

  const activeContact = contacts.find((c) => c.id === activeId)!
  const activeMessages = messages[activeId] ?? []

  const handleSend = (text: string) => {
    const newMsg: Message = {
      id: Date.now(),
      variant: 'sent',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
    }
    setMessages((prev) => ({ ...prev, [activeId]: [...(prev[activeId] ?? []), newMsg] }))
    setInputValue('')

    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [activeId]: prev[activeId].map((m) =>
          m.id === newMsg.id ? { ...m, status: 'delivered' as const } : m,
        ),
      }))
    }, 800)

    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const reply: Message = {
        id: Date.now() + 1,
        variant: 'received',
        text: 'Got it, thanks! 👍',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => ({ ...prev, [activeId]: [...(prev[activeId] ?? []), reply] }))
      setMessages((prev) => ({
        ...prev,
        [activeId]: prev[activeId].map((m) =>
          m.id === newMsg.id ? { ...m, status: 'read' as const } : m,
        ),
      }))
    }, 2500)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Title as="h1" size="xl">
          Direct Messages
        </Title>
        <p className="mt-2 text-vui-text-muted">
          A 1-on-1 messaging interface built with ChatWindow, ChatList, ChatBubble, ChatInput,
          ChatHeader, and ChatStatus.
        </p>
      </div>

      <label className="mobile-contact-picker md:hidden">
        Conversation
        <select value={activeId} onChange={(e) => setActiveId(e.target.value)}>
          {contacts.map((contact) => (
            <option key={contact.id} value={contact.id}>
              {contact.name}
            </option>
          ))}
        </select>
      </label>
      <div
        className="flex overflow-hidden rounded-xl border border-vui-border"
        style={{ height: '32rem' }}
      >
        <div className="hidden md:block w-72 flex-shrink-0 border-r border-vui-border bg-vui-surface">
          <div className="border-b border-vui-border p-3">
            <p className="text-sm font-semibold text-vui-text">Messages</p>
          </div>
          <ChatList
            conversations={contacts.map((c) => ({
              ...c,
              avatar: <UserAvatar name={c.name} />,
            }))}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <ChatWindow
            header={
              <ChatHeader
                title={activeContact.name}
                subtitle={activeContact.online ? 'Online' : 'Offline'}
                status={activeContact.online ? 'online' : 'offline'}
                avatar={<UserAvatar name={activeContact.name} />}
              />
            }
            footer={
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSend={handleSend}
                placeholder={`Message ${activeContact.name}…`}
              />
            }
          >
            <ChatTimestamp>Today</ChatTimestamp>
            {activeMessages.map((msg) => (
              <ChatBubble
                key={msg.id}
                variant={msg.variant}
                timestamp={msg.timestamp}
                username={msg.variant === 'received' ? activeContact.name : undefined}
                status={msg.status}
                avatar={
                  msg.variant === 'received' ? <UserAvatar name={activeContact.name} /> : undefined
                }
                actions={
                  msg.reactions ? (
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      {msg.reactions.map((r) => (
                        <ChatReaction
                          key={r.emoji}
                          emoji={r.emoji}
                          count={r.count}
                          active={r.active}
                        />
                      ))}
                    </div>
                  ) : undefined
                }
              >
                {msg.attachment && (
                  <div style={{ marginBottom: msg.text ? '0.5rem' : 0 }}>
                    <ChatAttachment
                      variant={msg.attachment.variant}
                      fileName={msg.attachment.fileName}
                      fileSize={msg.attachment.fileSize}
                      src={msg.attachment.src}
                      onDownload={msg.attachment.variant === 'file' ? () => {} : undefined}
                    />
                  </div>
                )}
                {msg.text}
              </ChatBubble>
            ))}
            {typing && <TypingIndicator users={[activeContact.name]} />}
          </ChatWindow>
        </div>
      </div>
    </div>
  )
}

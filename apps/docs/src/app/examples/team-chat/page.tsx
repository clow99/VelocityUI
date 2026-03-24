'use client'

import { useState } from 'react'
import {
  ChatWindow,
  ChatHeader,
  ChatBubble,
  ChatInput,
  ChatTimestamp,
  ChatReaction,
  ChatThread,
  ChatAttachment,
  TypingIndicator,
  ChatStatus,
  Avatar,
  Badge,
  Button,
  Title,
} from '@velocityuikit/velocityui'

interface Reaction {
  emoji: string
  count: number
  active: boolean
}

interface ThreadData {
  replyCount: number
  lastReplyTimestamp: string
  expanded: boolean
  replies: { username: string; text: string }[]
}

interface Message {
  id: number
  username: string
  text: string
  timestamp: string
  reactions?: Reaction[]
  thread?: ThreadData
  attachment?: { variant: 'file' | 'image'; fileName: string; fileSize?: string; src?: string }
  isPinned?: boolean
}

const members = [
  { name: 'Alice Chen', status: 'online' as const },
  { name: 'Bob Smith', status: 'online' as const },
  { name: 'Carol Davis', status: 'away' as const },
  { name: 'David Park', status: 'offline' as const },
  { name: 'Eva Martinez', status: 'online' as const },
]

const channelMessages: Message[] = [
  {
    id: 1,
    username: 'Alice Chen',
    text: 'Good morning team! Just deployed v2.4.0 to staging. Please test when you get a chance.',
    timestamp: '9:00 AM',
    reactions: [
      { emoji: '🎉', count: 3, active: false },
      { emoji: '👀', count: 2, active: true },
    ],
    thread: {
      replyCount: 3,
      lastReplyTimestamp: '9:45 AM',
      expanded: false,
      replies: [
        { username: 'Bob Smith', text: 'On it! Testing the checkout flow now.' },
        { username: 'Eva Martinez', text: 'Auth flows look good on my end.' },
        { username: 'Alice Chen', text: 'Great, thanks everyone!' },
      ],
    },
  },
  {
    id: 2,
    username: 'Bob Smith',
    text: 'Found a small issue with the mobile nav. Here is a screenshot:',
    timestamp: '9:30 AM',
    attachment: {
      variant: 'image',
      fileName: 'nav-bug.png',
      src: 'https://placehold.co/280x160/ef4444/ffffff?text=Nav+Bug',
    },
    reactions: [{ emoji: '👀', count: 1, active: false }],
  },
  {
    id: 3,
    username: 'Carol Davis',
    text: "I've updated the design specs for the chat feature. The Figma file is shared in the #design channel.",
    timestamp: '10:15 AM',
    attachment: {
      variant: 'file',
      fileName: 'chat-specs-v3.fig',
      fileSize: '4.8 MB',
    },
  },
  {
    id: 4,
    username: 'Eva Martinez',
    text: "Quick reminder: sprint retro is at 2pm today. Please add your notes to the board beforehand.",
    timestamp: '10:45 AM',
    isPinned: true,
    reactions: [
      { emoji: '✅', count: 4, active: true },
    ],
  },
  {
    id: 5,
    username: 'David Park',
    text: 'The API latency improvements are live. P95 dropped from 450ms to 120ms.',
    timestamp: '11:00 AM',
    reactions: [
      { emoji: '🚀', count: 5, active: true },
      { emoji: '🔥', count: 3, active: false },
    ],
    thread: {
      replyCount: 2,
      lastReplyTimestamp: '11:20 AM',
      expanded: false,
      replies: [
        { username: 'Alice Chen', text: 'Incredible improvement! What was the bottleneck?' },
        { username: 'David Park', text: 'N+1 queries on the dashboard endpoint. Batched them with a DataLoader.' },
      ],
    },
  },
]

function MemberAvatar({ name }: { name: string }) {
  return <Avatar size="sm" name={name} />
}

function ChannelIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="10" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="14" y2="21" />
    </svg>
  )
}

export default function TeamChatPage() {
  const [msgs, setMsgs] = useState(channelMessages)
  const [inputValue, setInputValue] = useState('')
  const [showMembers, setShowMembers] = useState(true)

  const handleSend = (text: string) => {
    const newMsg: Message = {
      id: Date.now(),
      username: 'You',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMsgs((prev) => [...prev, newMsg])
    setInputValue('')
  }

  const toggleThread = (msgId: number) => {
    setMsgs((prev) =>
      prev.map((m) =>
        m.id === msgId && m.thread
          ? { ...m, thread: { ...m.thread, expanded: !m.thread.expanded } }
          : m
      )
    )
  }

  const toggleReaction = (msgId: number, emoji: string) => {
    setMsgs((prev) =>
      prev.map((m) => {
        if (m.id !== msgId) return m
        const reactions = (m.reactions ?? []).map((r) =>
          r.emoji === emoji
            ? { ...r, active: !r.active, count: r.active ? r.count - 1 : r.count + 1 }
            : r
        )
        return { ...m, reactions }
      })
    )
  }

  const onlineCount = members.filter((m) => m.status === 'online').length

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Title as="h1" size="xl">Team Channel</Title>
        <p className="mt-2 text-vui-text-muted">
          A Slack/Discord-style team chat with threads, reactions, file attachments, member list, and presence indicators.
        </p>
      </div>

      <div className="flex overflow-hidden rounded-xl border border-vui-border" style={{ height: '36rem' }}>
        <div className="flex flex-1 flex-col">
          <ChatWindow
            header={
              <ChatHeader
                title="# engineering"
                subtitle={`${members.length} members, ${onlineCount} online`}
                avatar={
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-vui-primary-soft text-vui-primary">
                    <ChannelIcon />
                  </div>
                }
                actions={
                  <Button variant="ghost" size="sm" onClick={() => setShowMembers((v) => !v)}>
                    {showMembers ? 'Hide Members' : 'Show Members'}
                  </Button>
                }
              />
            }
            footer={
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSend={handleSend}
                placeholder="Message #engineering…"
              />
            }
          >
            <ChatTimestamp>Today</ChatTimestamp>
            {msgs.map((msg) => (
              <div key={msg.id}>
                <ChatBubble
                  variant="received"
                  username={msg.username}
                  timestamp={msg.timestamp}
                  avatar={<MemberAvatar name={msg.username} />}
                  actions={
                    msg.reactions && msg.reactions.length > 0 ? (
                      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                        {msg.reactions.map((r) => (
                          <ChatReaction
                            key={r.emoji}
                            emoji={r.emoji}
                            count={r.count}
                            active={r.active}
                            onClick={() => toggleReaction(msg.id, r.emoji)}
                          />
                        ))}
                      </div>
                    ) : undefined
                  }
                >
                  {msg.isPinned && (
                    <div style={{ marginBottom: '0.375rem' }}>
                      <Badge variant="warning" size="sm">📌 Pinned</Badge>
                    </div>
                  )}
                  {msg.text}
                  {msg.attachment && (
                    <div style={{ marginTop: '0.5rem' }}>
                      <ChatAttachment
                        variant={msg.attachment.variant}
                        fileName={msg.attachment.fileName}
                        fileSize={msg.attachment.fileSize}
                        src={msg.attachment.src}
                        onDownload={msg.attachment.variant === 'file' ? () => {} : undefined}
                      />
                    </div>
                  )}
                </ChatBubble>
                {msg.thread && (
                  <ChatThread
                    replyCount={msg.thread.replyCount}
                    lastReplyTimestamp={msg.thread.lastReplyTimestamp}
                    expanded={msg.thread.expanded}
                    onToggle={() => toggleThread(msg.id)}
                    participants={msg.thread.replies.slice(0, 3).map((r, i) => (
                      <MemberAvatar key={i} name={r.username} />
                    ))}
                  >
                    {msg.thread.replies.map((reply, i) => (
                      <ChatBubble
                        key={i}
                        variant="received"
                        username={reply.username}
                        avatar={<MemberAvatar name={reply.username} />}
                      >
                        {reply.text}
                      </ChatBubble>
                    ))}
                  </ChatThread>
                )}
              </div>
            ))}
          </ChatWindow>
        </div>

        {showMembers && (
          <div className="w-56 flex-shrink-0 border-l border-vui-border bg-vui-surface">
            <div className="border-b border-vui-border p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-vui-text-subtle">
                Members — {members.length}
              </p>
            </div>
            <div className="flex flex-col gap-0.5 p-2">
              {members
                .sort((a, b) => {
                  const order = { online: 0, away: 1, offline: 2 }
                  return order[a.status] - order[b.status]
                })
                .map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm transition-colors hover:bg-vui-surface-muted"
                  >
                    <MemberAvatar name={member.name} />
                    <span className={`flex-1 truncate ${member.status === 'offline' ? 'text-vui-text-subtle' : 'text-vui-text'}`}>
                      {member.name}
                    </span>
                    <ChatStatus variant={member.status} size="sm" />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

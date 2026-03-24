'use client'

import React from 'react'
import styles from './ChatThread.module.css'

export interface ChatThreadProps extends React.HTMLAttributes<HTMLDivElement> {
  replyCount?: number
  lastReplyTimestamp?: string
  participants?: React.ReactNode[]
  expanded?: boolean
  onToggle?: () => void
  children?: React.ReactNode
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'transform 0.2s', transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export const ChatThread: React.FC<ChatThreadProps> = ({
  replyCount = 0,
  lastReplyTimestamp,
  participants = [],
  expanded = false,
  onToggle,
  children,
  className,
  ...props
}) => {
  const classes = [styles.thread, expanded ? styles.expanded : '', className ?? '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      <button
        type="button"
        className={styles.summary}
        onClick={onToggle}
        aria-expanded={expanded}
      >
        {participants.length > 0 && (
          <div className={styles.participants}>
            {participants.slice(0, 3).map((avatar, i) => (
              <span key={i} className={styles.participant} aria-hidden="true">
                {avatar}
              </span>
            ))}
          </div>
        )}
        <span className={styles.replyText}>
          {replyCount === 1 ? '1 reply' : `${replyCount} replies`}
        </span>
        {lastReplyTimestamp && (
          <span className={styles.lastReply}>Last reply {lastReplyTimestamp}</span>
        )}
        <ChevronIcon expanded={expanded} />
      </button>
      {expanded && children && (
        <div className={styles.content}>{children}</div>
      )}
    </div>
  )
}

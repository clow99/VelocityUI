'use client'

import React from 'react'
import styles from './ChatBubble.module.css'

export type ChatBubbleVariant = 'sent' | 'received' | 'system' | 'ai'
export type ChatBubbleStatus = 'sent' | 'delivered' | 'read'
export type ChatBubbleGrouping = 'single' | 'first' | 'middle' | 'last'

export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ChatBubbleVariant
  avatar?: React.ReactNode
  username?: string
  timestamp?: string
  status?: ChatBubbleStatus
  grouping?: ChatBubbleGrouping
  isStreaming?: boolean
  actions?: React.ReactNode
  children: React.ReactNode
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CheckCheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 7 17l-5-5" />
      <path d="m22 10-9.5 9.5L10 17" />
    </svg>
  )
}

const statusIcons: Record<ChatBubbleStatus, React.ReactNode> = {
  sent: <CheckIcon />,
  delivered: <CheckCheckIcon />,
  read: <CheckCheckIcon />,
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  variant = 'received',
  avatar,
  username,
  timestamp,
  status,
  grouping = 'single',
  isStreaming = false,
  actions,
  children,
  className,
  ...props
}) => {
  const rootClasses = [
    styles.root,
    styles[variant],
    styles[grouping],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  if (variant === 'system') {
    return (
      <div className={rootClasses} {...props}>
        <div className={styles.systemText}>{children}</div>
      </div>
    )
  }

  const showAvatar = avatar && (grouping === 'single' || grouping === 'last')
  const showHeader = (username || timestamp) && (grouping === 'single' || grouping === 'first')

  return (
    <div className={rootClasses} {...props}>
      <div className={styles.avatarSlot}>
        {showAvatar ? <div className={styles.avatar}>{avatar}</div> : <div className={styles.avatarSpacer} />}
      </div>
      <div className={styles.content}>
        {showHeader && (
          <div className={styles.header}>
            {username && <span className={styles.username}>{username}</span>}
            {timestamp && <span className={styles.time}>{timestamp}</span>}
          </div>
        )}
        <div className={styles.bubble}>
          <div className={styles.body}>
            {children}
            {isStreaming && <span className={styles.cursor} aria-hidden="true" />}
          </div>
        </div>
        {(actions || status) && (
          <div className={styles.footer}>
            {actions && <div className={styles.actions}>{actions}</div>}
            {status && variant === 'sent' && (
              <span className={`${styles.status} ${status === 'read' ? styles.statusRead : ''}`} aria-label={status}>
                {statusIcons[status]}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

import React from 'react'
import styles from './ChatList.module.css'

export interface ChatConversation {
  id: string
  name: string
  avatar?: React.ReactNode
  lastMessage?: string
  timestamp?: string
  unread?: number
  online?: boolean
}

export interface ChatListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  conversations: ChatConversation[]
  activeId?: string
  onSelect?: (id: string) => void
  emptyText?: string
}

export const ChatList: React.FC<ChatListProps> = ({
  conversations,
  activeId,
  onSelect,
  emptyText = 'No conversations',
  className,
  ...props
}) => {
  const classes = [styles.list, className ?? ''].filter(Boolean).join(' ')

  if (conversations.length === 0) {
    return (
      <div className={classes} {...props}>
        <p className={styles.empty}>{emptyText}</p>
      </div>
    )
  }

  return (
    <div className={classes} role="listbox" aria-label="Conversations" {...props}>
      {conversations.map((conv) => {
        const isActive = conv.id === activeId
        const itemClasses = [styles.item, isActive ? styles.active : '']
          .filter(Boolean)
          .join(' ')

        return (
          <button
            key={conv.id}
            type="button"
            role="option"
            aria-selected={isActive}
            className={itemClasses}
            onClick={() => onSelect?.(conv.id)}
          >
            <div className={styles.avatarWrapper}>
              {conv.avatar ? (
                <div className={styles.avatar}>{conv.avatar}</div>
              ) : (
                <div className={styles.avatarFallback} aria-hidden="true">
                  {conv.name.charAt(0).toUpperCase()}
                </div>
              )}
              {conv.online && <span className={styles.onlineDot} aria-label="Online" />}
            </div>
            <div className={styles.info}>
              <div className={styles.topRow}>
                <span className={styles.name}>{conv.name}</span>
                {conv.timestamp && <span className={styles.time}>{conv.timestamp}</span>}
              </div>
              {conv.lastMessage && (
                <p className={styles.lastMessage}>{conv.lastMessage}</p>
              )}
            </div>
            {conv.unread != null && conv.unread > 0 && (
              <span className={styles.unread} aria-label={`${conv.unread} unread`}>
                {conv.unread > 99 ? '99+' : conv.unread}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

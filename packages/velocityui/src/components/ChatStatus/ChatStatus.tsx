import React from 'react'
import styles from './ChatStatus.module.css'

export type ChatStatusVariant = 'online' | 'offline' | 'away' | 'busy' | 'dnd'
export type ChatStatusSize = 'sm' | 'md' | 'lg'

export interface ChatStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: ChatStatusVariant
  size?: ChatStatusSize
  showLabel?: boolean
  pulse?: boolean
}

const labelMap: Record<ChatStatusVariant, string> = {
  online: 'Online',
  offline: 'Offline',
  away: 'Away',
  busy: 'Busy',
  dnd: 'Do not disturb',
}

export const ChatStatus: React.FC<ChatStatusProps> = ({
  variant = 'offline',
  size = 'md',
  showLabel = false,
  pulse = false,
  className,
  ...props
}) => {
  const classes = [
    styles.status,
    styles[variant],
    styles[size],
    pulse && variant === 'online' ? styles.pulse : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} role="status" aria-label={labelMap[variant]} {...props}>
      <span className={styles.dot} aria-hidden="true" />
      {showLabel && <span className={styles.label}>{labelMap[variant]}</span>}
    </span>
  )
}

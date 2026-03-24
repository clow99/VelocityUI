import React from 'react'
import styles from './ChatHeader.module.css'

export type ChatHeaderStatus = 'online' | 'offline' | 'away'

export interface ChatHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  avatar?: React.ReactNode
  status?: ChatHeaderStatus
  actions?: React.ReactNode
  onBack?: () => void
}

function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  subtitle,
  avatar,
  status,
  actions,
  onBack,
  className,
  ...props
}) => {
  const classes = [styles.header, className ?? ''].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className={styles.left}>
        {onBack && (
          <button type="button" className={styles.backButton} onClick={onBack} aria-label="Go back">
            <BackIcon />
          </button>
        )}
        {avatar && (
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>{avatar}</div>
            {status && <span className={`${styles.statusDot} ${styles[status]}`} aria-label={status} />}
          </div>
        )}
        <div className={styles.info}>
          <span className={styles.title}>{title}</span>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  )
}

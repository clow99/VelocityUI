import React from 'react'
import styles from './TypingIndicator.module.css'

export interface TypingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  users?: string[]
}

function formatTypingText(users: string[]): string {
  if (users.length === 0) return ''
  if (users.length === 1) return `${users[0]} is typing`
  if (users.length === 2) return `${users[0]} and ${users[1]} are typing`
  return `${users[0]} and ${users.length - 1} others are typing`
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  users = [],
  className,
  ...props
}) => {
  const classes = [styles.indicator, className ?? ''].filter(Boolean).join(' ')
  const text = formatTypingText(users)

  return (
    <div className={classes} role="status" aria-label={text || 'Someone is typing'} {...props}>
      <span className={styles.dots} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </span>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  )
}

import React from 'react'
import styles from './ChatTimestamp.module.css'

export interface ChatTimestampProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const ChatTimestamp: React.FC<ChatTimestampProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = [styles.timestamp, className ?? ''].filter(Boolean).join(' ')

  return (
    <div className={classes} role="separator" aria-label={typeof children === 'string' ? children : undefined} {...props}>
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.text}>{children}</span>
      <span className={styles.line} aria-hidden="true" />
    </div>
  )
}

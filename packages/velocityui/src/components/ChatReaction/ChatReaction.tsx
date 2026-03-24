import React from 'react'
import styles from './ChatReaction.module.css'

export interface ChatReactionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  emoji: string
  count?: number
  active?: boolean
}

export const ChatReaction = React.forwardRef<HTMLButtonElement, ChatReactionProps>(
  ({ emoji, count = 1, active = false, className, ...props }, ref) => {
    const classes = [
      styles.reaction,
      active ? styles.active : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        aria-pressed={active}
        aria-label={`${emoji} ${count}`}
        {...props}
      >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.count}>{count}</span>
      </button>
    )
  }
)

ChatReaction.displayName = 'ChatReaction'

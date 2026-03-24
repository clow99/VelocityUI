'use client'

import React, { useRef, useEffect } from 'react'
import styles from './ChatWindow.module.css'

export interface ChatWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode
  footer?: React.ReactNode
  autoScroll?: boolean
  children?: React.ReactNode
}

export const ChatWindow = React.forwardRef<HTMLDivElement, ChatWindowProps>(
  ({ header, footer, autoScroll = true, children, className, ...props }, ref) => {
    const messagesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (autoScroll && messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight
      }
    }, [children, autoScroll])

    const classes = [styles.window, className ?? ''].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {header && <div className={styles.header}>{header}</div>}
        <div ref={messagesRef} className={styles.messages}>
          {children}
        </div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    )
  }
)

ChatWindow.displayName = 'ChatWindow'

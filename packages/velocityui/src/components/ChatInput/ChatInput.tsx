'use client'

import React, { useRef, useCallback, useEffect } from 'react'
import styles from './ChatInput.module.css'

export interface ChatInputProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
  onSend?: (value: string) => void
  onAttach?: () => void
  maxRows?: number
  leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
  showSendButton?: boolean
  sendOnEnter?: boolean
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

export const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(
  (
    {
      value,
      onChange,
      onSend,
      onAttach,
      maxRows = 5,
      leftSlot,
      rightSlot,
      showSendButton = true,
      sendOnEnter = true,
      placeholder = 'Type a message…',
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLTextAreaElement>(null)
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) ?? internalRef

    const adjustHeight = useCallback(() => {
      const el = textareaRef.current
      if (!el) return
      el.style.height = 'auto'
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 20
      const maxHeight = lineHeight * maxRows
      el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`
    }, [maxRows, textareaRef])

    useEffect(() => {
      adjustHeight()
    }, [value, adjustHeight])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.target.value)
      adjustHeight()
    }

    const handleSend = () => {
      const currentValue = textareaRef.current?.value ?? value ?? ''
      if (currentValue.trim() && onSend) {
        onSend(currentValue.trim())
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (sendOnEnter && e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
      props.onKeyDown?.(e)
    }

    const rootClasses = [styles.root, disabled ? styles.disabled : '', className ?? '']
      .filter(Boolean)
      .join(' ')

    const hasValue = (value ?? textareaRef.current?.value ?? '').trim().length > 0

    return (
      <div className={rootClasses}>
        {leftSlot && <div className={styles.slot}>{leftSlot}</div>}
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          {...props}
        />
        {rightSlot && <div className={styles.slot}>{rightSlot}</div>}
        {showSendButton && (
          <button
            type="button"
            className={styles.sendButton}
            onClick={handleSend}
            disabled={disabled || !hasValue}
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        )}
      </div>
    )
  }
)

ChatInput.displayName = 'ChatInput'

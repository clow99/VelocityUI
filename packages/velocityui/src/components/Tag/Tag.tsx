'use client'

import React from 'react'
import styles from './Tag.module.css'

export type TagVariant = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'primary'
export type TagSize = 'sm' | 'md' | 'lg'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant
  size?: TagSize
  onClose?: () => void
  leftIcon?: React.ReactNode
  children: React.ReactNode
}

export const Tag: React.FC<TagProps> = ({
  variant = 'default',
  size = 'md',
  onClose,
  leftIcon,
  children,
  className,
  ...props
}) => {
  const classes = [styles.tag, styles[variant], styles[size], className ?? '']
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {leftIcon && <span className={styles.icon} aria-hidden="true">{leftIcon}</span>}
      <span className={styles.label}>{children}</span>
      {onClose && (
        <button
          type="button"
          className={styles.close}
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          aria-label="Remove"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  )
}

import React from 'react'
import styles from './Badge.module.css'

export type BadgeVariant = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'primary'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  leftIcon?: React.ReactNode
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  leftIcon,
  children,
  className,
  ...props
}) => {
  const classes = [
    styles.badge,
    styles[variant],
    styles[size],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {!dot && leftIcon && <span aria-hidden="true">{leftIcon}</span>}
      {children}
    </span>
  )
}

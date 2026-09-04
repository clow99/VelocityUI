'use client'

import React, { useId } from 'react'
import styles from './Checkbox.module.css'

export type CheckboxSize = 'sm' | 'md' | 'lg'

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> {
  label?: string
  description?: string
  error?: string
  size?: CheckboxSize
  variant?: 'default' | 'card'
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, size = 'md', variant = 'default', className, id, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const errorId = inputId ? `${inputId}-error` : undefined
    const descId = inputId && description ? `${inputId}-desc` : undefined

    const checkboxClasses = [
      styles.checkbox,
      styles[size],
      error ? styles.hasError : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <label htmlFor={inputId} className={`${styles.wrapper} ${styles[size]} ${variant === 'card' ? styles.card : ''}`}>
        <span className={styles.row}>
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={checkboxClasses}
            aria-invalid={!!error}
            aria-labelledby={label ? `${inputId}-label` : undefined}
            aria-describedby={
              [error ? errorId : null, !error ? descId : null].filter(Boolean).join(' ') ||
              undefined
            }
            {...props}
          />
          {label && (
            <span id={`${inputId}-label`} className={styles.label}>
              {label}
            </span>
          )}
        </span>
        {description && !error && (
          <span id={descId} className={styles.description}>
            {description}
          </span>
        )}
        {error && (
          <span id={errorId} className={styles.errorText} role="alert">
            {error}
          </span>
        )}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'

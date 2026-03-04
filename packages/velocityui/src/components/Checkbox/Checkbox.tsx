'use client'

import React from 'react'
import styles from './Checkbox.module.css'

export type CheckboxSize = 'sm' | 'md' | 'lg'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  description?: string
  error?: string
  size?: CheckboxSize
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, size = 'md', className, id, ...props }, ref) => {
    const inputId =
      id ?? (label ? `vui-checkbox-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)
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
      <div className={`${styles.wrapper} ${styles[size]}`}>
        <div className={styles.row}>
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={checkboxClasses}
            aria-invalid={!!error}
            aria-describedby={
              [error ? errorId : null, descId].filter(Boolean).join(' ') || undefined
            }
            {...props}
          />
          {label && (
            <label htmlFor={inputId} className={styles.label}>
              {label}
            </label>
          )}
        </div>
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
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

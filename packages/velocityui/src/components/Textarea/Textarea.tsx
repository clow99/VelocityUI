'use client'

import React from 'react'
import styles from './Textarea.module.css'

export type TextareaSize = 'sm' | 'md' | 'lg'
export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both'

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string
  size?: TextareaSize
  error?: string
  hint?: string
  required?: boolean
  fullWidth?: boolean
  resize?: TextareaResize
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      size = 'md',
      error,
      hint,
      required,
      fullWidth = false,
      resize = 'vertical',
      className,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId =
      id ?? (label ? `vui-textarea-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)
    const errorId = textareaId ? `${textareaId}-error` : undefined
    const hintId = textareaId ? `${textareaId}-hint` : undefined

    const textareaClasses = [
      styles.textarea,
      styles[size],
      styles[resize],
      error ? styles.hasError : '',
      fullWidth ? styles.fullWidth : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={`${styles.wrapper}${fullWidth ? ` ${styles.wrapperFullWidth}` : ''}`}>
        {label && (
          <label htmlFor={textareaId} className={styles.label}>
            {label}
            {required && (
              <span className={styles.required} aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          required={required}
          aria-invalid={!!error}
          aria-describedby={
            [error ? errorId : null, hint && !error ? hintId : null]
              .filter(Boolean)
              .join(' ') || undefined
          }
          {...props}
        />
        {error && (
          <span id={errorId} className={styles.errorText} role="alert">
            {error}
          </span>
        )}
        {hint && !error && (
          <span id={hintId} className={styles.hint}>
            {hint}
          </span>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

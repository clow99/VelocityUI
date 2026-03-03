import React from 'react'
import styles from './Input.module.css'

export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: InputSize
  error?: string
  hint?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  required?: boolean
  fullWidth?: boolean
  floatingLabel?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'md',
      error,
      hint,
      leftIcon,
      rightIcon,
      required,
      fullWidth,
      floatingLabel,
      className,
      id,
      placeholder,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? (label ? `vui-input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)
    const errorId = inputId ? `${inputId}-error` : undefined
    const hintId = inputId ? `${inputId}-hint` : undefined

    const inputClasses = [
      styles.input,
      styles[size],
      floatingLabel ? styles.inputFloating : '',
      error ? styles.error : '',
      leftIcon ? styles.hasLeft : '',
      rightIcon ? styles.hasRight : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    const floatingLabelClasses = [
      styles.floatingLabelEl,
      styles[`floatingLabel${size.charAt(0).toUpperCase() + size.slice(1)}`],
      leftIcon ? styles.floatingLabelWithLeft : '',
      error ? styles.floatingLabelError : '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={styles.wrapper}>
        {label && !floatingLabel && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required} aria-hidden="true">*</span>}
          </label>
        )}
        <div className={`${styles.inputWrapper}${floatingLabel ? ` ${styles.floatingWrapper}` : ''}`}>
          {leftIcon && (
            <span className={styles.iconLeft} aria-hidden="true">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            required={required}
            aria-invalid={!!error}
            aria-describedby={
              [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ') || undefined
            }
            placeholder={floatingLabel ? ' ' : placeholder}
            {...props}
          />
          {label && floatingLabel && (
            <label htmlFor={inputId} className={floatingLabelClasses}>
              {label}
              {required && <span className={styles.required} aria-hidden="true">*</span>}
            </label>
          )}
          {rightIcon && (
            <span className={styles.iconRight} aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>
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

Input.displayName = 'Input'

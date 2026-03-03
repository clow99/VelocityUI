import React from 'react'
import styles from './Select.module.css'

export type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  size?: SelectSize
  error?: string
  hint?: string
  required?: boolean
  fullWidth?: boolean
  options?: SelectOption[]
  placeholder?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      size = 'md',
      error,
      hint,
      required,
      fullWidth = false,
      options,
      placeholder,
      className,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const selectId =
      id ?? (label ? `vui-select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)
    const errorId = selectId ? `${selectId}-error` : undefined
    const hintId = selectId ? `${selectId}-hint` : undefined

    const selectClasses = [
      styles.select,
      styles[size],
      error ? styles.hasError : '',
      fullWidth ? styles.fullWidth : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={`${styles.wrapper}${fullWidth ? ` ${styles.wrapperFullWidth}` : ''}`}>
        {label && (
          <label htmlFor={selectId} className={styles.label}>
            {label}
            {required && (
              <span className={styles.required} aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            id={selectId}
            className={selectClasses}
            required={required}
            aria-invalid={!!error}
            aria-describedby={
              [error ? errorId : null, hint && !error ? hintId : null]
                .filter(Boolean)
                .join(' ') || undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options
              ? options.map((o) => (
                  <option key={o.value} value={o.value} disabled={o.disabled}>
                    {o.label}
                  </option>
                ))
              : children}
          </select>
          <span className={styles.chevron} aria-hidden="true">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
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

Select.displayName = 'Select'

'use client'

import React, { useId } from 'react'
import styles from './NumberInput.module.css'

export type NumberInputSize = 'sm' | 'md' | 'lg'

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'onChange'> {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  label?: string
  error?: string
  hint?: string
  size?: NumberInputSize
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1,
  label,
  error,
  hint,
  size = 'md',
  disabled,
  required,
  id: idProp,
  className,
  ...props
}) => {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const hintId = `${id}-hint`
  const errorId = `${id}-error`

  const decrement = () => {
    const next = (value ?? 0) - step
    if (min !== undefined && next < min) return
    onChange?.(next)
  }

  const increment = () => {
    const next = (value ?? 0) + step
    if (max !== undefined && next > max) return
    onChange?.(next)
  }

  const wrapperClasses = [
    styles.wrapper,
    styles[size],
    error ? styles.hasError : '',
    disabled ? styles.disabled : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={styles.root}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true"> *</span>}
        </label>
      )}
      <div className={wrapperClasses}>
        <button
          type="button"
          className={styles.stepBtn}
          onClick={decrement}
          disabled={disabled || (min !== undefined && (value ?? 0) <= min)}
          aria-label="Decrease value"
          tabIndex={-1}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14" />
          </svg>
        </button>
        <input
          id={id}
          type="number"
          className={styles.input}
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          onChange={(e) => onChange?.(e.target.valueAsNumber)}
          {...props}
        />
        <button
          type="button"
          className={styles.stepBtn}
          onClick={increment}
          disabled={disabled || (max !== undefined && (value ?? 0) >= max)}
          aria-label="Increase value"
          tabIndex={-1}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
      {error && (
        <p id={errorId} className={styles.errorMsg} role="alert">
          {error}
        </p>
      )}
      {!error && hint && (
        <p id={hintId} className={styles.hintMsg}>
          {hint}
        </p>
      )}
    </div>
  )
}

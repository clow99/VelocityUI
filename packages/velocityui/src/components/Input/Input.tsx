'use client'

import React, { useId } from 'react'
import styles from './Input.module.css'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputIconPosition = 'left' | 'right'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: InputSize
  error?: string
  hint?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  leadingAddon?: React.ReactNode
  trailingAddon?: React.ReactNode
  search?: boolean
  searchIcon?: React.ReactNode
  searchIconPosition?: InputIconPosition
  leftIconClassName?: string
  rightIconClassName?: string
  required?: boolean
  fullWidth?: boolean
  floatingLabel?: boolean
}

const DefaultSearchIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'md',
      error,
      hint,
      leftIcon,
      rightIcon,
      leadingAddon,
      trailingAddon,
      search = false,
      searchIcon,
      searchIconPosition = 'left',
      leftIconClassName,
      rightIconClassName,
      required,
      fullWidth,
      floatingLabel,
      className,
      id,
      placeholder,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const errorId = inputId ? `${inputId}-error` : undefined
    const hintId = inputId ? `${inputId}-hint` : undefined
    const hasAddons = leadingAddon != null || trailingAddon != null
    const shouldRenderSearchIcon = search || !!searchIcon
    const resolvedSearchIcon = searchIcon ?? <DefaultSearchIcon />

    let resolvedLeftIcon = leftIcon
    let resolvedRightIcon = rightIcon
    let isSearchLeft = false
    let isSearchRight = false

    if (shouldRenderSearchIcon) {
      if (searchIconPosition === 'right') {
        if (!resolvedRightIcon) {
          resolvedRightIcon = resolvedSearchIcon
          isSearchRight = true
        }
      } else if (!resolvedLeftIcon) {
        resolvedLeftIcon = resolvedSearchIcon
        isSearchLeft = true
      }
    }

    const inputClasses = [
      styles.input,
      styles[size],
      floatingLabel ? styles.inputFloating : '',
      error ? styles.error : '',
      resolvedLeftIcon ? styles.hasLeft : '',
      resolvedRightIcon ? styles.hasRight : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    const floatingLabelClasses = [
      styles.floatingLabelEl,
      styles[`floatingLabel${size.charAt(0).toUpperCase() + size.slice(1)}`],
      resolvedLeftIcon ? styles.floatingLabelWithLeft : '',
      error ? styles.floatingLabelError : '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={styles.wrapper}>
        {label && !floatingLabel && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && (
              <span className={styles.required} aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <div className={hasAddons ? [styles.inputGroup, styles[size], error ? styles.groupError : '', props.disabled ? styles.groupDisabled : ''].filter(Boolean).join(' ') : undefined}>
        {leadingAddon != null && <span id={`${inputId}-leading`} className={styles.addon}>{leadingAddon}</span>}
        <div
          className={`${styles.inputWrapper}${floatingLabel ? ` ${styles.floatingWrapper}` : ''}`}
        >
          {resolvedLeftIcon && (
            <span
              className={[styles.iconLeft, leftIconClassName ?? ''].filter(Boolean).join(' ')}
              data-slot="left-icon"
              data-search-icon={isSearchLeft ? 'true' : undefined}
              aria-hidden="true"
            >
              {resolvedLeftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            required={required}
            aria-invalid={!!error}
            aria-describedby={
              [ariaDescribedBy, error ? errorId : null, hint && !error ? hintId : null, leadingAddon != null ? `${inputId}-leading` : null, trailingAddon != null ? `${inputId}-trailing` : null].filter(Boolean).join(' ') ||
              undefined
            }
            placeholder={floatingLabel ? ' ' : placeholder}
            {...props}
          />
          {label && floatingLabel && (
            <label htmlFor={inputId} className={floatingLabelClasses}>
              {label}
              {required && (
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              )}
            </label>
          )}
          {resolvedRightIcon && (
            <span
              className={[styles.iconRight, rightIconClassName ?? ''].filter(Boolean).join(' ')}
              data-slot="right-icon"
              data-search-icon={isSearchRight ? 'true' : undefined}
              aria-hidden="true"
            >
              {resolvedRightIcon}
            </span>
          )}
        </div>
        {trailingAddon != null && <span id={`${inputId}-trailing`} className={styles.addon}>{trailingAddon}</span>}
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
  },
)

Input.displayName = 'Input'

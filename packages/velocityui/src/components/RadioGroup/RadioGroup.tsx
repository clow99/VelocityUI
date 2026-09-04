'use client'

import React from 'react'
import styles from './RadioGroup.module.css'

export type RadioGroupSize = 'sm' | 'md' | 'lg'
export type RadioGroupOrientation = 'vertical' | 'horizontal'

export interface RadioOption {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
  meta?: React.ReactNode
  disabled?: boolean
}

export interface RadioGroupProps {
  name: string
  label?: string
  options: RadioOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  size?: RadioGroupSize
  orientation?: RadioGroupOrientation
  variant?: 'default' | 'cards'
  error?: string
  hint?: string
  required?: boolean
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  options,
  value,
  defaultValue,
  onChange,
  size = 'md',
  orientation = 'vertical',
  variant = 'default',
  error,
  hint,
  required,
}) => {
  const instanceId = React.useId()
  const groupId = `vui-radiogroup-${instanceId.replace(/:/g, '')}`
  const errorId = `${groupId}-error`
  const hintId = `${groupId}-hint`
  const isControlled = value !== undefined

  return (
    <fieldset
      className={`${styles.fieldset} ${styles[size]}`}
      aria-describedby={
        [error ? errorId : null, hint && !error ? hintId : null].filter(Boolean).join(' ') ||
        undefined
      }
    >
      {label && (
        <legend className={styles.legend}>
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          )}
        </legend>
      )}
      <div className={`${styles.group} ${styles[orientation]} ${variant === 'cards' ? styles.cards : ''}`}>
        {options.map((option) => {
          const optionId = `${groupId}-${option.value}`
          const radioProps = isControlled
            ? { checked: value === option.value }
            : { defaultChecked: defaultValue === option.value }

          return (
            <label key={option.value} className={styles.option} htmlFor={optionId}>
              <input
                type="radio"
                id={optionId}
                name={name}
                value={option.value}
                disabled={option.disabled}
                required={required}
                onChange={() => onChange?.(option.value)}
                className={`${styles.radio} ${error ? styles.hasError : ''}`}
                aria-invalid={error ? true : undefined}
                aria-labelledby={`${optionId}-label`}
                aria-describedby={option.description ? `${optionId}-description` : undefined}
                {...radioProps}
              />
              {option.icon && <span className={styles.optionIcon} aria-hidden="true">{option.icon}</span>}
              <span className={styles.optionContent}>
                <span id={`${optionId}-label`} className={styles.optionLabel}>
                  {option.label}
                </span>
                {option.description && (
                  <span id={`${optionId}-description`} className={styles.optionDescription}>{option.description}</span>
                )}
                {option.meta && <span className={styles.optionMeta}>{option.meta}</span>}
              </span>
            </label>
          )
        })}
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
    </fieldset>
  )
}

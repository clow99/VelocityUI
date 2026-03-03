import React from 'react'
import styles from './RadioGroup.module.css'

export type RadioGroupSize = 'sm' | 'md' | 'lg'
export type RadioGroupOrientation = 'vertical' | 'horizontal'

export interface RadioOption {
  value: string
  label: string
  description?: string
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
  error,
  hint,
  required,
}) => {
  const groupId = `vui-radiogroup-${name}`
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
      <div className={`${styles.group} ${styles[orientation]}`}>
        {options.map((option) => {
          const optionId = `${groupId}-${option.value}`
          const radioProps = isControlled
            ? { checked: value === option.value }
            : { defaultChecked: defaultValue === option.value }

          return (
            <div key={option.value} className={styles.option}>
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
                {...radioProps}
              />
              <div className={styles.optionContent}>
                <label htmlFor={optionId} className={styles.optionLabel}>
                  {option.label}
                </label>
                {option.description && (
                  <span className={styles.optionDescription}>{option.description}</span>
                )}
              </div>
            </div>
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

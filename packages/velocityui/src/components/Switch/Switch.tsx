'use client'

import React from 'react'
import styles from './Switch.module.css'

export type SwitchSize = 'sm' | 'md' | 'lg'

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  description?: string
  size?: SwitchSize
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, description, size = 'md', className, id, ...props }, ref) => {
    const inputId =
      id ?? (label ? `vui-switch-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)
    const descId = inputId && description ? `${inputId}-desc` : undefined

    return (
      <div className={`${styles.wrapper} ${styles[size]}`}>
        <label className={styles.labelRow} htmlFor={inputId}>
          <span className={styles.track}>
            <input
              ref={ref}
              type="checkbox"
              role="switch"
              id={inputId}
              className={`${styles.input} ${className ?? ''}`}
              aria-describedby={descId || undefined}
              {...props}
            />
            <span className={styles.thumb} aria-hidden="true" />
          </span>
          {label && <span className={styles.labelText}>{label}</span>}
        </label>
        {description && (
          <span id={descId} className={styles.description}>
            {description}
          </span>
        )}
      </div>
    )
  }
)

Switch.displayName = 'Switch'

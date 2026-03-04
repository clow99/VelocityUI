import React from 'react'
import styles from './Progress.module.css'

export type ProgressVariant = 'primary' | 'success' | 'warning' | 'danger'
export type ProgressSize = 'sm' | 'md' | 'lg'

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  variant?: ProgressVariant
  size?: ProgressSize
  label?: string
  showValue?: boolean
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  variant = 'primary',
  size = 'md',
  label,
  showValue = false,
  className,
  ...props
}) => {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')} {...props}>
      {(label || showValue) && (
        <div className={styles.labelRow}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && <span className={styles.value}>{clamped}%</span>}
        </div>
      )}
      <div
        className={[styles.track, styles[size]].filter(Boolean).join(' ')}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `${clamped}%`}
      >
        <div
          className={[styles.bar, styles[variant]].filter(Boolean).join(' ')}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}

import React from 'react'
import styles from './Spinner.module.css'

export type SpinnerSize = 'sm' | 'md' | 'lg'
export type SpinnerColor = 'primary' | 'muted' | 'white'

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize
  color?: SpinnerColor
  label?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  label = 'Loading…',
  className,
  ...props
}) => {
  const classes = [styles.spinner, styles[size], styles[color], className ?? '']
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} role="status" aria-label={label} {...props}>
      <svg
        className={styles.svg}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          className={styles.track}
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          className={styles.arc}
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

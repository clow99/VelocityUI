import React from 'react'
import styles from './Divider.module.css'

export type DividerOrientation = 'horizontal' | 'vertical'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation
  label?: string
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className,
  ...props
}) => {
  const classes = [
    styles.divider,
    styles[orientation],
    label ? styles.withLabel : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={classes}
      {...props}
    >
      {label && <span className={styles.label}>{label}</span>}
    </div>
  )
}

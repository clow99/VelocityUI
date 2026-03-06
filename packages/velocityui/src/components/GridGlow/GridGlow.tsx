import React from 'react'
import styles from './GridGlow.module.css'

export type GridGlowVariant = 'default' | 'spotlight' | 'panel'

export interface GridGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GridGlowVariant
}

export const GridGlow: React.FC<GridGlowProps> = ({
  variant = 'default',
  className,
  ...props
}) => {
  const classes = [styles.root, styles[variant], className ?? ''].filter(Boolean).join(' ')

  return (
    <div className={classes} aria-hidden="true" {...props}>
      <span className={styles.grid} />
      <span className={styles.glow} />
      <span className={styles.beam} />
    </div>
  )
}

import React from 'react'
import styles from './GradientOrbs.module.css'

export type GradientOrbsVariant = 'hero' | 'diagonal' | 'spotlight'

export interface GradientOrbsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GradientOrbsVariant
}

export const GradientOrbs: React.FC<GradientOrbsProps> = ({
  variant = 'hero',
  className,
  ...props
}) => {
  const classes = [styles.root, styles[variant], className ?? ''].filter(Boolean).join(' ')

  return (
    <div className={classes} aria-hidden="true" {...props}>
      <span className={`${styles.orb} ${styles.primary}`} />
      <span className={`${styles.orb} ${styles.secondary}`} />
      <span className={`${styles.orb} ${styles.accent}`} />
      <span className={`${styles.orb} ${styles.highlight}`} />
    </div>
  )
}

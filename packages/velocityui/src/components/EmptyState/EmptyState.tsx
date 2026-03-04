import React from 'react'
import styles from './EmptyState.module.css'

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className,
  ...props
}) => {
  return (
    <div className={[styles.root, className ?? ''].filter(Boolean).join(' ')} {...props}>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.description}>{description}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}

import React from 'react'
import styles from './Breadcrumb.module.css'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
}

const DefaultSeparator = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6-6-6" />
  </svg>
)

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className,
  ...props
}) => {
  const sep = separator ?? <DefaultSeparator />

  return (
    <nav aria-label="Breadcrumb" className={[styles.nav, className ?? ''].filter(Boolean).join(' ')} {...props}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className={styles.item}>
              {i > 0 && (
                <span className={styles.separator} aria-hidden="true">
                  {sep}
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  className={[styles.crumb, isLast ? styles.current : styles.link].filter(Boolean).join(' ')}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className={[styles.crumb, styles.link].filter(Boolean).join(' ')}>
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

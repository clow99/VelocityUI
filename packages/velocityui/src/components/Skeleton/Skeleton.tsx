import React from 'react'
import styles from './Skeleton.module.css'

export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  width?: string | number
  height?: string | number
  radius?: string | number
  lines?: number
  gap?: string | number
}

const toCSS = (val: string | number | undefined): string | undefined => {
  if (val === undefined) return undefined
  return typeof val === 'number' ? `${val}px` : val
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  radius,
  lines,
  gap,
  className,
  style,
  ...props
}) => {
  if (lines && lines > 1) {
    const gapValue = toCSS(gap) ?? '0.5rem'
    return (
      <span
        className={[styles.stack, className ?? ''].filter(Boolean).join(' ')}
        style={{ gap: gapValue, ...style }}
        aria-hidden="true"
        {...props}
      >
        {Array.from({ length: lines }).map((_, i) => {
          const isLast = i === lines - 1
          return (
            <span
              key={i}
              className={styles.block}
              style={{
                width: isLast ? '75%' : toCSS(width) ?? '100%',
                height: toCSS(height) ?? '1rem',
                borderRadius: toCSS(radius) ?? 'var(--vui-radius-sm, 0.375rem)',
              }}
            />
          )
        })}
      </span>
    )
  }

  return (
    <span
      className={[styles.block, className ?? ''].filter(Boolean).join(' ')}
      style={{
        width: toCSS(width),
        height: toCSS(height) ?? '1rem',
        borderRadius: toCSS(radius) ?? 'var(--vui-radius-sm, 0.375rem)',
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  )
}

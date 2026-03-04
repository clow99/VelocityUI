import React, { useState } from 'react'
import styles from './Avatar.module.css'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarShape = 'circle' | 'square'
export type AvatarStatus = 'online' | 'away' | 'offline'

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
  shape?: AvatarShape
  status?: AvatarStatus
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  className,
  ...props
}) => {
  const [imgError, setImgError] = useState(false)

  const classes = [styles.avatar, styles[size], styles[shape], className ?? '']
    .filter(Boolean)
    .join(' ')

  const showImg = src && !imgError
  const initials = name ? getInitials(name) : null

  return (
    <span className={classes} aria-label={alt ?? name} {...props}>
      {showImg ? (
        <img
          src={src}
          alt={alt ?? name ?? ''}
          className={styles.img}
          onError={() => setImgError(true)}
        />
      ) : initials ? (
        <span className={styles.initials} aria-hidden="true">
          {initials}
        </span>
      ) : (
        <svg className={styles.fallbackIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      )}
      {status && (
        <span className={[styles.status, styles[status]].filter(Boolean).join(' ')} aria-label={status} />
      )}
    </span>
  )
}

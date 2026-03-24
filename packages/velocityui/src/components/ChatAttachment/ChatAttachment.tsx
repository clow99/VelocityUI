import React from 'react'
import styles from './ChatAttachment.module.css'

export type ChatAttachmentVariant = 'image' | 'file' | 'video' | 'audio'

export interface ChatAttachmentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ChatAttachmentVariant
  src?: string
  fileName?: string
  fileSize?: string
  onDownload?: () => void
  onPreview?: () => void
}

function FileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function AudioIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

const iconMap: Record<string, React.FC> = {
  file: FileIcon,
  video: VideoIcon,
  audio: AudioIcon,
}

export const ChatAttachment: React.FC<ChatAttachmentProps> = ({
  variant = 'file',
  src,
  fileName,
  fileSize,
  onDownload,
  onPreview,
  className,
  ...props
}) => {
  const classes = [styles.attachment, styles[variant], className ?? '']
    .filter(Boolean)
    .join(' ')

  if (variant === 'image' && src) {
    return (
      <div className={classes} {...props}>
        <button
          type="button"
          className={styles.imageButton}
          onClick={onPreview}
          aria-label={fileName ? `Preview ${fileName}` : 'Preview image'}
        >
          <img src={src} alt={fileName ?? 'Attachment'} className={styles.image} loading="lazy" />
        </button>
      </div>
    )
  }

  const Icon = iconMap[variant] ?? FileIcon

  return (
    <div className={classes} {...props}>
      <span className={styles.icon} aria-hidden="true">
        <Icon />
      </span>
      <div className={styles.info}>
        <span className={styles.fileName}>{fileName ?? 'File'}</span>
        {fileSize && <span className={styles.fileSize}>{fileSize}</span>}
      </div>
      {onDownload && (
        <button
          type="button"
          className={styles.downloadButton}
          onClick={onDownload}
          aria-label={`Download ${fileName ?? 'file'}`}
        >
          <DownloadIcon />
        </button>
      )}
    </div>
  )
}

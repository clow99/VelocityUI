import React, { useEffect, useRef } from 'react'
import styles from './Dialog.module.css'

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl'

export interface DialogProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: DialogSize
  children?: React.ReactNode
  className?: string
  closeOnOverlayClick?: boolean
}

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

const DialogHeader: React.FC<DialogHeaderProps> = ({ children, className, ...props }) => (
  <div className={`${styles.header} ${className ?? ''}`} {...props}>
    {children}
  </div>
)
DialogHeader.displayName = 'Dialog.Header'

const DialogBody: React.FC<DialogBodyProps> = ({ children, className, ...props }) => (
  <div className={`${styles.body} ${className ?? ''}`} {...props}>
    {children}
  </div>
)
DialogBody.displayName = 'Dialog.Body'

const DialogFooter: React.FC<DialogFooterProps> = ({ children, className, ...props }) => (
  <div className={`${styles.footer} ${className ?? ''}`} {...props}>
    {children}
  </div>
)
DialogFooter.displayName = 'Dialog.Footer'

const titleIdCounter = { current: 0 }

interface DialogComponent extends React.FC<DialogProps> {
  Header: typeof DialogHeader
  Body: typeof DialogBody
  Footer: typeof DialogFooter
}

const DialogBase: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  description,
  size = 'md',
  children,
  className,
  closeOnOverlayClick = true,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const titleId = useRef(`vui-dialog-title-${++titleIdCounter.current}`).current
  const descId = useRef(`vui-dialog-desc-${titleIdCounter.current}`).current
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return

    previousFocusRef.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'

    const focusFirst = () => {
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      focusable?.[0]?.focus()
    }
    const frame = requestAnimationFrame(focusFirst)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
        )
        if (focusable.length === 0) {
          e.preventDefault()
          return
        }
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === last) {
            first.focus()
            e.preventDefault()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previousFocusRef.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descId : undefined}
        className={[styles.dialog, styles[size], className ?? ''].filter(Boolean).join(' ')}
      >
        {title && (
          <div className={styles.header}>
            <p id={titleId} className={styles.title}>
              {title}
            </p>
            {description && (
              <p id={descId} className={styles.description}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export const Dialog = DialogBase as DialogComponent
Dialog.Header = DialogHeader
Dialog.Body = DialogBody
Dialog.Footer = DialogFooter
Dialog.displayName = 'Dialog'

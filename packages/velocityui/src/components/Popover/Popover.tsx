'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Popover.module.css'

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface PopoverProps {
  trigger: React.ReactNode
  content: React.ReactNode
  placement?: PopoverPlacement
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
}

interface Position {
  top: number
  left: number
}

function computePosition(
  triggerRect: DOMRect,
  popoverEl: HTMLDivElement,
  placement: PopoverPlacement
): Position {
  const { top, left, bottom, right, width, height } = triggerRect
  const pw = popoverEl.offsetWidth
  const ph = popoverEl.offsetHeight
  const gap = 8

  switch (placement) {
    case 'top':
      return { top: top - ph - gap + window.scrollY, left: left + width / 2 - pw / 2 + window.scrollX }
    case 'bottom':
      return { top: bottom + gap + window.scrollY, left: left + width / 2 - pw / 2 + window.scrollX }
    case 'left':
      return { top: top + height / 2 - ph / 2 + window.scrollY, left: left - pw - gap + window.scrollX }
    case 'right':
      return { top: top + height / 2 - ph / 2 + window.scrollY, left: right + gap + window.scrollX }
  }
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  placement = 'bottom',
  open: controlledOpen,
  onOpenChange,
  className,
}) => {
  const isControlled = controlledOpen !== undefined
  const [internalOpen, setInternalOpen] = useState(false)
  const open = isControlled ? controlledOpen : internalOpen

  const triggerRef = useRef<HTMLSpanElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<Position>({ top: 0, left: 0 })

  const setOpen = useCallback(
    (val: boolean) => {
      if (!isControlled) setInternalOpen(val)
      onOpenChange?.(val)
    },
    [isControlled, onOpenChange]
  )

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !popoverRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    setPos(computePosition(rect, popoverRef.current, placement))
  }, [placement])

  useEffect(() => {
    if (!open) return
    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [open, updatePosition])

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (
        !triggerRef.current?.contains(e.target as Node) &&
        !popoverRef.current?.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open, setOpen])

  const popoverClasses = [styles.popover, styles[placement], className ?? '']
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <span
        ref={triggerRef}
        className={styles.triggerWrapper}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {trigger}
      </span>
      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={popoverRef}
            className={popoverClasses}
            style={{ top: pos.top, left: pos.left }}
            role="dialog"
          >
            <div className={styles.arrow} aria-hidden="true" />
            {content}
          </div>,
          document.body
        )}
    </>
  )
}

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Dropdown.module.css'

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'

export interface DropdownItem {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  separator?: boolean
}

export interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  placement?: DropdownPlacement
  className?: string
}

interface MenuPosition {
  top: number
  left: number
}

function computeMenuPosition(
  triggerRect: DOMRect,
  menuEl: HTMLDivElement,
  placement: DropdownPlacement
): MenuPosition {
  const { top, left, bottom, right } = triggerRect
  const mh = menuEl.offsetHeight
  const mw = menuEl.offsetWidth
  const gap = 4

  switch (placement) {
    case 'bottom-start':
      return { top: bottom + gap + window.scrollY, left: left + window.scrollX }
    case 'bottom-end':
      return { top: bottom + gap + window.scrollY, left: right - mw + window.scrollX }
    case 'top-start':
      return { top: top - mh - gap + window.scrollY, left: left + window.scrollX }
    case 'top-end':
      return { top: top - mh - gap + window.scrollY, left: right - mw + window.scrollX }
    default:
      return { top: bottom + gap + window.scrollY, left: left + window.scrollX }
  }
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  placement = 'bottom-start',
  className,
}) => {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLSpanElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<MenuPosition>({ top: 0, left: 0 })

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !menuRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    setPos(computeMenuPosition(rect, menuRef.current, placement))
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
        !menuRef.current?.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.querySelector('button, a, [tabindex]')?.dispatchEvent(
          new Event('focus')
        )
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled) return
    item.onClick?.()
    setOpen(false)
  }

  return (
    <>
      <span
        ref={triggerRef}
        className={styles.triggerWrapper}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {trigger}
      </span>
      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={menuRef}
            className={[styles.menu, className ?? ''].filter(Boolean).join(' ')}
            style={{ top: pos.top, left: pos.left }}
            role="menu"
          >
            {items.map((item, i) => {
              if (item.separator) {
                return <div key={i} className={styles.separator} role="separator" />
              }
              return (
                <button
                  key={i}
                  type="button"
                  role="menuitem"
                  className={[styles.item, item.disabled ? styles.itemDisabled : ''].filter(Boolean).join(' ')}
                  onClick={() => handleItemClick(item)}
                  disabled={item.disabled}
                >
                  {item.icon && <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>}
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>,
          document.body
        )}
    </>
  )
}

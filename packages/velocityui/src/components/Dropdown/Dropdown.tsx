'use client'

import React, { useCallback, useEffect, useRef, useState, useId } from 'react'
import { createPortal } from 'react-dom'
import styles from './Dropdown.module.css'

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'

type DropdownActionItem = {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  separator?: false
}

type DropdownSeparatorItem = {
  separator: true
  label?: never
  icon?: never
  onClick?: never
  disabled?: never
}

export type DropdownItem = DropdownActionItem | DropdownSeparatorItem

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
  placement: DropdownPlacement,
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
  const menuId = useId()
  const firstFocus = useRef<'first' | 'last'>('first')
  const typeahead = useRef({ text: '', time: 0 })
  const triggerRef = useRef<HTMLSpanElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<MenuPosition>({ top: 0, left: 0 })
  const focusTrigger = () =>
    triggerRef.current?.querySelector<HTMLElement>('button, a, [tabindex]')?.focus()
  const menuItems = () =>
    Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]:not(:disabled)') ??
        [],
    )
  const disabled = React.isValidElement(trigger) && trigger.props.disabled
  const triggerProps = {
    'aria-haspopup': 'menu' as const,
    'aria-expanded': open,
    'aria-controls': open ? menuId : undefined,
  }
  const accessibleTrigger = React.isValidElement(trigger) ? (
    React.cloneElement(trigger as React.ReactElement, triggerProps)
  ) : (
    <button type="button" {...triggerProps}>
      {trigger}
    </button>
  )

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !menuRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    setPos(computeMenuPosition(rect, menuRef.current, placement))
  }, [placement])

  // Recompute position on open, and on any scroll/resize so the menu tracks
  // the trigger if the page shifts while it is visible.
  // Scroll uses capture=true to catch events on any scrollable ancestor.
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
    const available = menuItems()
    const target = firstFocus.current === 'last' ? available[available.length - 1] : available[0]
    ;(target ?? menuRef.current)?.focus()
  }, [open])

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
        // Return focus to the first focusable element inside the trigger wrapper
        // so keyboard users are not left stranded after dismissing the menu.
        const focusTarget = triggerRef.current?.querySelector<HTMLElement>('button, a, [tabindex]')
        focusTarget?.focus()
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
    setOpen(false)
    focusTrigger()
    item.onClick?.()
  }

  return (
    <>
      <span
        ref={triggerRef}
        className={styles.triggerWrapper}
        onClick={() => {
          if (!disabled) {
            firstFocus.current = 'first'
            setOpen((v) => !v)
          }
        }}
        onKeyDown={(event) => {
          if (disabled || event.defaultPrevented) return
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            firstFocus.current = event.key === 'ArrowUp' ? 'last' : 'first'
            setOpen(true)
          }
        }}
      >
        {accessibleTrigger}
      </span>
      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={menuRef}
            className={[styles.menu, className ?? ''].filter(Boolean).join(' ')}
            style={{ top: pos.top, left: pos.left }}
            role="menu"
            id={menuId}
            tabIndex={-1}
            aria-label="Actions"
            onKeyDown={(event) => {
              const available = menuItems()
              const current = available.indexOf(document.activeElement as HTMLButtonElement)
              if (event.key === 'Tab') {
                focusTrigger()
                setOpen(false)
                return
              }
              if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
                event.preventDefault()
                if (!available.length) return
                const next =
                  event.key === 'Home'
                    ? 0
                    : event.key === 'End'
                      ? available.length - 1
                      : (current + (event.key === 'ArrowDown' ? 1 : -1) + available.length) %
                        available.length
                available[next]?.focus()
              } else if (
                event.key.length === 1 &&
                event.key !== ' ' &&
                !event.ctrlKey &&
                !event.metaKey &&
                !event.altKey
              ) {
                const now = Date.now()
                typeahead.current.text =
                  (now - typeahead.current.time < 500 ? typeahead.current.text : '') +
                  event.key.toLowerCase()
                typeahead.current.time = now
                const text = typeahead.current.text
                const rotated = [
                  ...available.slice(current + 1),
                  ...available.slice(0, current + 1),
                ]
                const target = rotated.find((item) =>
                  item.textContent?.trim().toLowerCase().startsWith(text),
                )
                if (target) {
                  event.preventDefault()
                  target.focus()
                }
              }
            }}
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
                  tabIndex={-1}
                  className={[styles.item, item.disabled ? styles.itemDisabled : '']
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => handleItemClick(item)}
                  disabled={item.disabled}
                >
                  {item.icon && (
                    <span className={styles.itemIcon} aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>,
          document.body,
        )}
    </>
  )
}

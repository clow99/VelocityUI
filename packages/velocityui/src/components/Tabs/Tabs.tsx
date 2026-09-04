'use client'

import React, { useState, useRef, useId } from 'react'
import styles from './Tabs.module.css'

export type TabsVariant = 'underline' | 'pills' | 'boxed'

export interface TabItem {
  value: string
  label: string
  disabled?: boolean
  children: React.ReactNode
}

export interface TabsProps {
  items: TabItem[]
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  variant?: TabsVariant
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultValue,
  value,
  onChange,
  variant = 'underline',
}) => {
  const instanceId = useId()
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue ?? items.find((item) => !item.disabled)?.value ?? '',
  )

  const activeValue = isControlled ? value! : internalValue
  const tablistRef = useRef<HTMLDivElement>(null)

  const handleSelect = (tabValue: string) => {
    if (!isControlled) setInternalValue(tabValue)
    onChange?.(tabValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    const enabledItems = items.filter((item) => !item.disabled)
    const enabledIndex = enabledItems.findIndex((item) => item.value === items[currentIndex].value)

    if (!enabledItems.length) return
    let nextIndex: number | null = null

    if (e.key === 'ArrowRight') {
      nextIndex = (enabledIndex + 1) % enabledItems.length
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (enabledIndex - 1 + enabledItems.length) % enabledItems.length
    } else if (e.key === 'Home') {
      nextIndex = 0
    } else if (e.key === 'End') {
      nextIndex = enabledItems.length - 1
    }

    if (nextIndex !== null) {
      e.preventDefault()
      const nextItem = enabledItems[nextIndex]
      handleSelect(nextItem.value)
      const btn = Array.from(
        tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role=tab]') ?? [],
      ).find((button) => button.dataset.value === nextItem.value)
      btn?.focus()
    }
  }

  const tabPanelId = (v: string) => `vui-${instanceId}-tabpanel-${v}`
  const tabId = (v: string) => `vui-${instanceId}-tab-${v}`

  return (
    <div className={styles.tabs}>
      <div
        ref={tablistRef}
        role="tablist"
        className={[styles.tablist, styles[variant]].filter(Boolean).join(' ')}
      >
        {items.map((item, i) => (
          <button
            key={item.value}
            id={tabId(item.value)}
            role="tab"
            type="button"
            data-value={item.value}
            aria-selected={activeValue === item.value}
            aria-controls={tabPanelId(item.value)}
            disabled={item.disabled}
            tabIndex={activeValue === item.value ? 0 : -1}
            className={[styles.tab, activeValue === item.value ? styles.activeTab : '']
              .filter(Boolean)
              .join(' ')}
            onClick={() => handleSelect(item.value)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item) => (
        <div
          key={item.value}
          id={tabPanelId(item.value)}
          role="tabpanel"
          aria-labelledby={tabId(item.value)}
          hidden={activeValue !== item.value}
          className={styles.panel}
        >
          {item.children}
        </div>
      ))}
    </div>
  )
}

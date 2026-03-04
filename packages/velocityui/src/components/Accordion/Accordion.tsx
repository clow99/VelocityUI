'use client'

import React, { useState } from 'react'
import styles from './Accordion.module.css'

export type AccordionVariant = 'bordered' | 'flush' | 'separated'

export interface AccordionItem {
  value: string
  title: string
  content: React.ReactNode
  disabled?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  defaultValue?: string | string[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  multiple?: boolean
  variant?: AccordionVariant
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultValue,
  value,
  onChange,
  multiple = false,
  variant = 'bordered',
}) => {
  const isControlled = value !== undefined

  const normalise = (v: string | string[] | undefined): string[] => {
    if (!v) return []
    return Array.isArray(v) ? v : [v]
  }

  const [internalOpen, setInternalOpen] = useState<string[]>(normalise(defaultValue))
  const openValues = isControlled ? normalise(value) : internalOpen

  const toggle = (itemValue: string) => {
    let next: string[]
    if (openValues.includes(itemValue)) {
      next = openValues.filter((v) => v !== itemValue)
    } else {
      next = multiple ? [...openValues, itemValue] : [itemValue]
    }
    if (!isControlled) setInternalOpen(next)
    onChange?.(multiple ? next : next[0] ?? '')
  }

  return (
    <div className={[styles.accordion, styles[variant]].filter(Boolean).join(' ')}>
      {items.map((item) => {
        const isOpen = openValues.includes(item.value)
        const triggerId = `vui-accordion-trigger-${item.value}`
        const panelId = `vui-accordion-panel-${item.value}`

        return (
          <div
            key={item.value}
            className={[styles.item, isOpen ? styles.open : ''].filter(Boolean).join(' ')}
          >
            <h3 className={styles.heading}>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                disabled={item.disabled}
                className={styles.trigger}
                onClick={() => !item.disabled && toggle(item.value)}
              >
                <span>{item.title}</span>
                <span className={styles.icon} aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={styles.contentOuter}
            >
              <div className={styles.contentInner}>{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

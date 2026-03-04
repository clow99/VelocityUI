'use client'

import React, { useState, useId } from 'react'
import styles from './Tooltip.module.css'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactElement
  placement?: TooltipPlacement
  delay?: number
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  delay = 0,
}) => {
  const [visible, setVisible] = useState(false)
  const baseId = useId()
  const tooltipId = `vui-tooltip-${baseId.replace(/:/g, '')}`
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    if (delay > 0) {
      timerRef.current = setTimeout(() => setVisible(true), delay)
    } else {
      setVisible(true)
    }
  }

  const hide = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisible(false)
  }

  const trigger = React.cloneElement(children, {
    'aria-describedby': visible ? tooltipId : undefined,
  })

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {trigger}
      <span
        id={tooltipId}
        role="tooltip"
        className={[styles.tooltip, styles[placement], visible ? styles.visible : '']
          .filter(Boolean)
          .join(' ')}
        aria-hidden={!visible}
      >
        {content}
        <span className={`${styles.arrow} ${styles[`arrow${placement.charAt(0).toUpperCase()}${placement.slice(1)}`]}`} aria-hidden="true" />
      </span>
    </span>
  )
}

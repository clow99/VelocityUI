'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme, THEMES, DENSITIES, type ThemeName } from './ThemeContext'
import { Icon } from './Icon'
import styles from './AppearanceMenu.module.css'

const themeNotes: Record<ThemeName, string> = {
  default: 'Clean & light',
  midnight: 'Soft charcoal',
  ocean: 'Cool & calm',
  'dark-cyan': 'Electric dark',
  tangerine: 'Warm citrus',
  construction: 'Bold & industrial',
  glass: 'Light & frosted',
  soft: 'Gentle depth',
  'high-contrast': 'Strong definition',
  'monochrome-red': 'Dark with a spark',
}

export function AppearanceMenu({ onOpen }: { onOpen?: () => void }) {
  const { theme, density, setTheme, setDensity } = useTheme()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const id = useId()
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const isDefault = theme === 'default' && density === 'comfortable'

  useEffect(() => {
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const frame = requestAnimationFrame(() => {
      panel.current
        ?.querySelector<HTMLInputElement>('input:checked')
        ?.focus({ preventScroll: true })
    })
    function dismiss(event: PointerEvent) {
      if (root.current && !root.current.contains(event.target as Node))
        setOpen(false)
    }
    document.addEventListener('pointerdown', dismiss)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointerdown', dismiss)
    }
  }, [open])

  function close() {
    setOpen(false)
    trigger.current?.focus()
  }

  return (
    <div
      ref={root}
      className={styles.root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setOpen(false)
      }}
      onKeyDown={(event) => {
        if (open && event.key === 'Escape') {
          event.preventDefault()
          event.stopPropagation()
          close()
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        aria-label="Appearance settings"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? `${id}-panel` : undefined}
        onClick={() => {
          if (!open) onOpen?.()
          setOpen(!open)
        }}
      >
        <Icon name="palette" size={18} />
      </button>
      {open && (
        <div
          ref={panel}
          id={`${id}-panel`}
          role="dialog"
          aria-labelledby={`${id}-title`}
          className={styles.panel}
        >
          <div className={styles.header}>
            <div>
              <h2 id={`${id}-title`}>Make it yours</h2>
              <p>A different feel. The same components.</p>
            </div>
            <button
              className={styles.close}
              type="button"
              aria-label="Close appearance settings"
              onClick={close}
            >
              <Icon name="close" size={15} />
            </button>
          </div>
          <div className={styles.body}>
            <fieldset className={styles.section}>
              <legend>
                Color theme <span aria-hidden="true">10 presets</span>
              </legend>
              <div className={styles.themes}>
                {THEMES.map((option) => (
                  <label key={option.value} className={styles.choice}>
                    <input
                      className={styles.radio}
                      type="radio"
                      name={`${id}-theme`}
                      value={option.value}
                      checked={theme === option.value}
                      onChange={() => setTheme(option.value)}
                      aria-label={option.label}
                    />
                    <span
                      className={`${styles.swatch} vui-theme-${option.value} ${option.value === 'glass' ? styles.glassSwatch : ''}`}
                      aria-hidden="true"
                    >
                      <span className={styles.swatchSidebar} />
                      <span className={styles.swatchPage}>
                        <i />
                        <i />
                        <b />
                      </span>
                      <span className={styles.check}>
                        <Icon name="check" size={10} />
                      </span>
                    </span>
                    <span className={styles.choiceText}>
                      <strong>{option.label}</strong>
                      <span>{themeNotes[option.value]}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className={`${styles.section} ${styles.densitySection}`}>
              <legend>
                Density <span aria-hidden="true">Room to breathe</span>
              </legend>
              <div className={styles.densities}>
                {DENSITIES.map((option, index) => (
                  <label key={option.value} className={styles.densityChoice}>
                    <input
                      className={styles.radio}
                      type="radio"
                      name={`${id}-density`}
                      checked={density === option.value}
                      onChange={() => setDensity(option.value)}
                      value={option.value}
                      aria-label={option.label}
                    />
                    <svg
                      width="26"
                      height="23"
                      viewBox="0 0 30 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      {[12 - (index + 2) * 2, 12, 12 + (index + 2) * 2].map(
                        (y) => (
                          <path
                            key={y}
                            d={`M6 ${y}h18`}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        ),
                      )}
                    </svg>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div className={styles.footer}>
            <span>
              <span className={styles.liveDot} />
              Changes apply instantly
            </span>
            <button
              type="button"
              aria-disabled={isDefault}
              onClick={() => {
                if (isDefault) return
                setTheme('default')
                setDensity('comfortable')
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

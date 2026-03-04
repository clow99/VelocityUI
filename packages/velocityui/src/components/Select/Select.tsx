import React from 'react'
import styles from './Select.module.css'

export type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  size?: SelectSize
  error?: string
  hint?: string
  required?: boolean
  fullWidth?: boolean
  options?: SelectOption[]
  placeholder?: string
}

// Normalises native <option> children into the same SelectOption shape used by
// the options prop, so both approaches share a single rendering path.
function getOptionsFromChildren(children: React.ReactNode): SelectOption[] {
  return React.Children.toArray(children).flatMap((child) => {
    if (!React.isValidElement(child) || child.type !== 'option') {
      return []
    }

    const value = child.props.value
    const label = typeof child.props.children === 'string' ? child.props.children : String(value ?? '')

    if (value == null) {
      return []
    }

    return [
      {
        value: String(value),
        label,
        disabled: Boolean(child.props.disabled),
      },
    ]
  })
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      size = 'md',
      error,
      hint,
      required,
      fullWidth = false,
      options,
      placeholder,
      className,
      id,
      children,
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      disabled,
      name,
      autoComplete,
      form,
      ...props
    },
    ref
  ) => {
    const hiddenSelectRef = React.useRef<HTMLSelectElement>(null)
    const wrapperRef = React.useRef<HTMLDivElement>(null)

    // Forward the ref to the hidden <select> so callers can use standard form
    // APIs (validity, focus, reset) even though the visible UI is a <button>.
    React.useImperativeHandle(ref, () => hiddenSelectRef.current as HTMLSelectElement)

    const selectId =
      id ?? (label ? `vui-select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)
    const errorId = selectId ? `${selectId}-error` : undefined
    const hintId = selectId ? `${selectId}-hint` : undefined
    const listboxId = selectId ? `${selectId}-listbox` : undefined
    const labelId = selectId ? `${selectId}-label` : undefined

    const resolvedOptions = React.useMemo(
      () => (options ? options : getOptionsFromChildren(children)),
      [children, options]
    )

    const isControlled = value !== undefined
    const firstEnabledOption = resolvedOptions.find((o) => !o.disabled)
    const initialValue = String(defaultValue ?? (placeholder ? '' : firstEnabledOption?.value ?? ''))
    const [internalValue, setInternalValue] = React.useState(initialValue)
    const selectedValue = String(isControlled ? value ?? '' : internalValue)
    const [isOpen, setIsOpen] = React.useState(false)
    const [focusedIndex, setFocusedIndex] = React.useState(-1)

    // When the options list changes (e.g. async load or filter), reset the
    // internal value if the previously selected option no longer exists.
    React.useEffect(() => {
      if (isControlled) return
      if (!resolvedOptions.length) return

      const exists = resolvedOptions.some((opt) => opt.value === internalValue)
      if (!exists) {
        setInternalValue(firstEnabledOption?.value ?? '')
      }
    }, [resolvedOptions, isControlled, internalValue, firstEnabledOption])

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const selectedOption = resolvedOptions.find((o) => o.value === selectedValue)
    const displayText = selectedOption?.label ?? placeholder ?? ''

    const selectClasses = [
      styles.trigger,
      styles[size],
      error ? styles.hasError : '',
      fullWidth ? styles.fullWidth : '',
      isOpen ? styles.isOpen : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    // Programmatically update both React state and the hidden native select so
    // that form libraries (react-hook-form, etc.) that listen for native change
    // events see the new value.  The native property descriptor setter bypasses
    // React's synthetic event system, allowing the manually dispatched 'change'
    // event to reach external listeners.
    const updateValue = (nextValue: string) => {
      if (!isControlled) {
        setInternalValue(nextValue)
      }

      const selectEl = hiddenSelectRef.current
      if (selectEl) {
        const nativeSetter = Object.getOwnPropertyDescriptor(
          HTMLSelectElement.prototype,
          'value'
        )?.set
        nativeSetter?.call(selectEl, nextValue)
        selectEl.dispatchEvent(new Event('change', { bubbles: true }))
      }
    }

    const openDropdown = () => {
      if (disabled || !resolvedOptions.length) return
      setIsOpen(true)

      const selectedIndex = resolvedOptions.findIndex((o) => o.value === selectedValue && !o.disabled)
      if (selectedIndex >= 0) {
        setFocusedIndex(selectedIndex)
        return
      }

      const firstEnabledIndex = resolvedOptions.findIndex((o) => !o.disabled)
      setFocusedIndex(firstEnabledIndex)
    }

    const moveFocus = (direction: 1 | -1) => {
      if (!resolvedOptions.length) return

      let nextIndex = focusedIndex
      for (let i = 0; i < resolvedOptions.length; i += 1) {
        nextIndex = (nextIndex + direction + resolvedOptions.length) % resolvedOptions.length
        if (!resolvedOptions[nextIndex].disabled) {
          setFocusedIndex(nextIndex)
          return
        }
      }
    }

    const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event as unknown as React.KeyboardEvent<HTMLSelectElement>)
      if (event.defaultPrevented) return

      if (!isOpen && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault()
        openDropdown()
        return
      }

      if (!isOpen && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault()
        openDropdown()
        return
      }

      if (!isOpen) return

      if (event.key === 'Escape') {
        event.preventDefault()
        setIsOpen(false)
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        moveFocus(1)
        return
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        moveFocus(-1)
        return
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        if (focusedIndex >= 0 && !resolvedOptions[focusedIndex].disabled) {
          updateValue(resolvedOptions[focusedIndex].value)
          setIsOpen(false)
        }
      }
    }

    return (
      <div className={`${styles.wrapper}${fullWidth ? ` ${styles.wrapperFullWidth}` : ''}`}>
        {label && (
          <label id={labelId} className={styles.label}>
            {label}
            {required && (
              <span className={styles.required} aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <div className={styles.selectWrapper} ref={wrapperRef}>
          <select
            ref={hiddenSelectRef}
            id={selectId}
            className={styles.hiddenSelect}
            value={selectedValue}
            required={required}
            disabled={disabled}
            name={name}
            form={form}
            autoComplete={autoComplete}
            aria-invalid={!!error}
            aria-describedby={
              [error ? errorId : null, hint && !error ? hintId : null]
                .filter(Boolean)
                .join(' ') || undefined
            }
            // Hidden from AT; the custom combobox + listbox is the accessible surface.
          // tabIndex=-1 removes it from the tab order entirely.
          aria-hidden="true"
            tabIndex={-1}
            onChange={onChange ?? (() => {})}
            {...props}
          >
            {placeholder && (
              <option value="" disabled={required}>
                {placeholder}
              </option>
            )}
            {resolvedOptions.map((o) => (
              <option key={o.value} value={o.value} disabled={o.disabled}>
                {o.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            className={selectClasses}
            disabled={disabled}
            role="combobox"
            aria-invalid={!!error}
            aria-labelledby={labelId}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            onClick={() => (isOpen ? setIsOpen(false) : openDropdown())}
            onKeyDown={handleTriggerKeyDown}
            onFocus={(event) => onFocus?.(event as unknown as React.FocusEvent<HTMLSelectElement>)}
            onBlur={(event) => onBlur?.(event as unknown as React.FocusEvent<HTMLSelectElement>)}
          >
            <span className={`${styles.valueText}${!selectedOption ? ` ${styles.placeholder}` : ''}`}>
              {displayText}
            </span>
          </button>
          <span className={styles.chevron} aria-hidden="true">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          {isOpen && (
            <ul id={listboxId} role="listbox" className={styles.menu}>
              {resolvedOptions.map((option, index) => {
                const selected = option.value === selectedValue
                const focused = index === focusedIndex
                return (
                  <li key={option.value}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      className={[
                        styles.option,
                        selected ? styles.optionSelected : '',
                        focused ? styles.optionFocused : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      disabled={option.disabled}
                      onMouseEnter={() => setFocusedIndex(index)}
                      onClick={() => {
                        updateValue(option.value)
                        setIsOpen(false)
                      }}
                    >
                      <span className={styles.optionLabel}>{option.label}</span>
                      <span
                        className={`${styles.optionCheck}${selected ? ` ${styles.optionCheckVisible}` : ''}`}
                        aria-hidden="true"
                      >
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.25}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        {error && (
          <span id={errorId} className={styles.errorText} role="alert">
            {error}
          </span>
        )}
        {hint && !error && (
          <span id={hintId} className={styles.hint}>
            {hint}
          </span>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

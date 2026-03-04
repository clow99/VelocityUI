import React, { useId } from 'react'
import styles from './Slider.module.css'

export type SliderSize = 'sm' | 'md' | 'lg'

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'onChange'> {
  min?: number
  max?: number
  step?: number
  value?: number
  onChange?: (value: number) => void
  label?: string
  showValue?: boolean
  size?: SliderSize
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label,
  showValue = false,
  size = 'md',
  disabled,
  className,
  id: idProp,
  ...props
}) => {
  const generatedId = useId()
  const id = idProp ?? generatedId

  const percent = value !== undefined ? ((value - min) / (max - min)) * 100 : 0

  return (
    <div className={[styles.wrapper, disabled ? styles.wrapperDisabled : '', className ?? ''].filter(Boolean).join(' ')}>
      {(label || showValue) && (
        <div className={styles.labelRow}>
          {label && (
            <label htmlFor={id} className={styles.label}>
              {label}
            </label>
          )}
          {showValue && value !== undefined && (
            <span className={styles.valueDisplay}>{value}</span>
          )}
        </div>
      )}
      <div className={[styles.trackWrapper, styles[size]].filter(Boolean).join(' ')}>
        <div className={styles.trackBg} />
        <div className={styles.trackFill} style={{ width: `${percent}%` }} />
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange?.(Number(e.target.value))}
          className={styles.input}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          {...props}
        />
      </div>
    </div>
  )
}

import React from 'react'
import styles from './Stepper.module.css'

export type StepperOrientation = 'horizontal' | 'vertical'
export type StepperVariant = 'default' | 'compact'

export interface StepItem {
  label: string
  description?: string
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: StepItem[]
  currentStep: number
  orientation?: StepperOrientation
  variant?: StepperVariant
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  variant = 'default',
  className,
  ...props
}) => {
  const classes = [
    styles.root,
    styles[orientation],
    styles[variant],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      role="list"
      aria-label="Steps"
      {...props}
    >
      {steps.map((step, i) => {
        const stepNum = i + 1
        const isCompleted = stepNum < currentStep
        const isActive = stepNum === currentStep
        const isLast = i === steps.length - 1

        const stepClasses = [
          styles.step,
          isCompleted ? styles.completed : '',
          isActive ? styles.active : '',
          !isCompleted && !isActive ? styles.pending : '',
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <div key={i} className={stepClasses} role="listitem">
            <div className={styles.indicator}>
              <span className={styles.circle}>
                {isCompleted ? <CheckIcon /> : <span>{stepNum}</span>}
              </span>
              {!isLast && <span className={styles.connector} aria-hidden="true" />}
            </div>
            {variant !== 'compact' && (
              <div className={styles.content}>
                <span className={styles.label}>{step.label}</span>
                {step.description && (
                  <span className={styles.description}>{step.description}</span>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

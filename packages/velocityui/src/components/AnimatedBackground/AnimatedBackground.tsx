import React from 'react'
import styles from './AnimatedBackground.module.css'

export type AnimatedBackgroundIntensity = 'subtle' | 'medium' | 'vivid'
export type AnimatedBackgroundSpeed = 'slow' | 'medium' | 'fast'

export interface AnimatedBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: React.ReactNode
  contentClassName?: string
  intensity?: AnimatedBackgroundIntensity
  speed?: AnimatedBackgroundSpeed
  interactive?: boolean
  children?: React.ReactNode
}

const intensityStyles: Record<AnimatedBackgroundIntensity, Record<string, string>> = {
  subtle: {
    '--vui-ambient-opacity': '0.62',
    '--vui-ambient-blur': '88px',
    '--vui-ambient-scale': '0.92',
  },
  medium: {
    '--vui-ambient-opacity': '0.82',
    '--vui-ambient-blur': '112px',
    '--vui-ambient-scale': '1',
  },
  vivid: {
    '--vui-ambient-opacity': '1',
    '--vui-ambient-blur': '136px',
    '--vui-ambient-scale': '1.08',
  },
}

const speedStyles: Record<AnimatedBackgroundSpeed, Record<string, string>> = {
  slow: {
    '--vui-ambient-duration': '24s',
    '--vui-ambient-speed-multiplier': '0.72',
  },
  medium: {
    '--vui-ambient-duration': '18s',
    '--vui-ambient-speed-multiplier': '1',
  },
  fast: {
    '--vui-ambient-duration': '13s',
    '--vui-ambient-speed-multiplier': '1.25',
  },
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  background,
  contentClassName,
  intensity = 'medium',
  speed = 'medium',
  interactive = false,
  className,
  style,
  children,
  ...props
}) => {
  const rootClassName = [
    styles.root,
    interactive ? styles.interactive : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  const contentClasses = [styles.content, contentClassName ?? ''].filter(Boolean).join(' ')

  const mergedStyle = {
    ...intensityStyles[intensity],
    ...speedStyles[speed],
    ...style,
  } as React.CSSProperties

  return (
    <div className={rootClassName} style={mergedStyle} {...props}>
      {background ? <div className={styles.background}>{background}</div> : null}
      <div className={contentClasses}>{children}</div>
    </div>
  )
}

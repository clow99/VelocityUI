import React from 'react'
import styles from './Title.module.css'

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type TitleWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
export type TitleAlign = 'left' | 'center' | 'right'
export type TitleColor = 'default' | 'muted' | 'primary' | 'gradient'

const defaultSizeMap: Record<TitleLevel, TitleSize> = {
  h1: 'xxl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
}

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: TitleLevel
  level?: TitleLevel
  size?: TitleSize
  weight?: TitleWeight
  align?: TitleAlign
  color?: TitleColor
  children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({
  as,
  level = 'h1',
  size,
  weight = 'bold',
  align = 'left',
  color = 'default',
  children,
  className,
  ...props
}) => {
  const headingLevel = as ?? level
  const resolvedSize = size ?? defaultSizeMap[headingLevel]

  const classes = [
    styles.title,
    styles[resolvedSize],
    styles[weight],
    styles[align],
    styles[color],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return React.createElement(headingLevel, { className: classes, ...props }, children)
}

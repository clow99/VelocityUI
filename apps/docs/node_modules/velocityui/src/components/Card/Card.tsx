import React from 'react'
import styles from './Card.module.css'

export type CardVariant = 'bordered' | 'shadow' | 'elevated' | 'ghost'
export type CardSize = 'sm' | 'md' | 'lg'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  size?: CardSize
  hoverable?: boolean
  children: React.ReactNode
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className, ...props }) => (
  <div className={`${styles.cardHeader} ${className ?? ''}`} {...props}>
    {children}
  </div>
)
CardHeader.displayName = 'Card.Header'

const CardBody: React.FC<CardBodyProps> = ({ children, className, ...props }) => (
  <div className={`${styles.cardBody} ${className ?? ''}`} {...props}>
    {children}
  </div>
)
CardBody.displayName = 'Card.Body'

const CardFooter: React.FC<CardFooterProps> = ({ children, className, ...props }) => (
  <div className={`${styles.cardFooter} ${className ?? ''}`} {...props}>
    {children}
  </div>
)
CardFooter.displayName = 'Card.Footer'

interface CardComponent extends React.FC<CardProps> {
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter
}

const CardBase: React.FC<CardProps> = ({
  variant = 'bordered',
  size = 'md',
  hoverable = false,
  children,
  className,
  ...props
}) => {
  const classes = [
    styles.card,
    styles[variant],
    styles[size],
    hoverable ? styles.hoverable : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export const Card = CardBase as CardComponent
Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.displayName = 'Card'

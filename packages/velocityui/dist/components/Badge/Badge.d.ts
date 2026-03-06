import { default as React } from 'react';

export type BadgeVariant = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'primary';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeAnimation = 'none' | 'pulse' | 'shine';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    size?: BadgeSize;
    animation?: BadgeAnimation;
    dot?: boolean;
    leftIcon?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;

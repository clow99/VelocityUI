import { default as React } from 'react';

export type BadgeVariant = 'default' | 'info' | 'success' | 'warning' | 'danger' | 'primary';
export type BadgeSize = 'sm' | 'md' | 'lg';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    leftIcon?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;

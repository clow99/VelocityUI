import { default as React } from 'react';

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type TitleWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type TitleAlign = 'left' | 'center' | 'right';
export type TitleColor = 'default' | 'muted' | 'primary' | 'gradient';
export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: TitleLevel;
    size?: TitleSize;
    weight?: TitleWeight;
    align?: TitleAlign;
    color?: TitleColor;
    children: React.ReactNode;
}
export declare const Title: React.FC<TitleProps>;

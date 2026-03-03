import { default as React } from 'react';

export type CardVariant = 'bordered' | 'shadow' | 'elevated' | 'ghost';
export type CardSize = 'sm' | 'md' | 'lg';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    size?: CardSize;
    hoverable?: boolean;
    children: React.ReactNode;
}
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const CardHeader: React.FC<CardHeaderProps>;
declare const CardBody: React.FC<CardBodyProps>;
declare const CardFooter: React.FC<CardFooterProps>;
interface CardComponent extends React.FC<CardProps> {
    Header: typeof CardHeader;
    Body: typeof CardBody;
    Footer: typeof CardFooter;
}
export declare const Card: CardComponent;
export {};

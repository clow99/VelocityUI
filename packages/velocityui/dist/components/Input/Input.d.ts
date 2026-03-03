import { default as React } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputIconPosition = 'left' | 'right';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: InputSize;
    error?: string;
    hint?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    search?: boolean;
    searchIcon?: React.ReactNode;
    searchIconPosition?: InputIconPosition;
    leftIconClassName?: string;
    rightIconClassName?: string;
    required?: boolean;
    fullWidth?: boolean;
    floatingLabel?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

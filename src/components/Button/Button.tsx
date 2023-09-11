import styles from './Button.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'contained' | 'outlined'
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'contained', ...props }) => {
    return (
        <button {...props} className={cn(styles.Button, {
            [styles.Button_contained]: variant === 'contained',
            [styles.Button_outlined]: variant === 'outlined'
        })}>
            {children}
        </button >
    );
};
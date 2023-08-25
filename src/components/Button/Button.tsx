import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'contained' | 'outlined'
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'contained', ...props }) => {
    return (
        <button className={cn(styles.Button, {
            [styles.Button_contained]: variant === 'contained',
            [styles.Button_outlined]: variant === 'outlined'
        })}
            {...props}
        >
            {children}
        </button >
    );
};
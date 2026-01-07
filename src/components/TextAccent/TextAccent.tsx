import styles from './TextAccent.module.scss';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface TextAccentProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children: React.ReactNode
}

export const TextAccent: React.FC<TextAccentProps> = ({ children, ...props }) => {
    return (
        <span
            className={styles.TextAccent}
            {...props}
        >
            {children}
        </span>
    );
};

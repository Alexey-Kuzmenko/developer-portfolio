import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import styles from './FlexContainer.module.scss';

interface FlexContainerProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode
}

export const FlexContainer: React.FC<FlexContainerProps> = ({ children, ...props }) => {
    return (
        <div className={styles.FlexContainer} {...props}>
            {children}
        </div>
    );
};

import styles from './FlexContainer.module.scss';

interface FlexContainerProps {
    children: React.ReactNode
}

export const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
    return (
        <div className={styles.FlexContainer}>
            {children}
        </div>
    );
};
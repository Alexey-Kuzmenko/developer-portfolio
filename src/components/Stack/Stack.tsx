import styles from './Stack.module.scss';
import { Technology } from '@/models/project.type';

interface StackProps {
    technologies: Array<Technology>
}

export const Stack: React.FC<StackProps> = ({ technologies }) => {

    const renderListItems = (): JSX.Element[] => {
        return technologies.map(({ iconClass, label }: Technology) => {
            return (
                <ul className={styles.Stack__item}>
                    <i className={iconClass}></i>
                    <p>{label}</p>
                </ul>
            );
        });
    };

    return (
        <li className={styles.Stack}>
            {renderListItems()}
        </li>
    );
};


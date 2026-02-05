import { JSX } from 'react';
import styles from './Stack.module.scss';
import { ProjectTechnology } from '@/models/project.model';

interface StackProps {
    technologies: Array<ProjectTechnology>
}

export const Stack: React.FC<StackProps> = ({ technologies }) => {

    const renderListItems = (): JSX.Element[] => {
        return technologies.map(({ iconClass, label }: ProjectTechnology) => {
            return (
                <ul className={styles.Stack__item} key={label}>
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


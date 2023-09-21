import styles from './Skills.module.scss';
import { IconBox } from '@/components';

interface SkillsProps {
    skills: Array<{ label: string, iconClass: string }>
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {

    const renderSkills = (): JSX.Element[] => {
        return skills.map(({ label, iconClass }) => {
            return (
                <IconBox label={label} iconClass={iconClass} key={label} />
            );
        });
    };

    return (
        <div className={styles.Skills}>
            {renderSkills()}
        </div>
    );
};
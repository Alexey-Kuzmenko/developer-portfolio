import styles from './Skills.module.scss';
import { IconBox } from '@/components';
import Skill from '@/models/skill.type';

interface SkillsProps {
    skills: Array<Skill>
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {

    const renderSkills = (): JSX.Element[] => {
        return skills.map(({ _id, label, iconClass }) => {
            return (
                <IconBox label={label} iconClass={iconClass} key={_id} />
            );
        });
    };

    return (
        <div className={styles.Skills}>
            {renderSkills()}
        </div>
    );
};
import styles from './Skills.module.scss';
import { IconBox } from '@/components';
import Skill from '@/models/skill.type';
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

interface SkillsProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    skills: Array<Skill>
}

export const Skills: React.FC<SkillsProps> = ({ skills, ...props }) => {

    const renderSkills = (): JSX.Element[] => {
        return skills.map(({ _id, label, iconClass }) => {
            return (
                <IconBox label={label} iconClass={iconClass} key={_id} />
            );
        });
    };

    return (
        <div className={styles.Skills} {...props}>
            {renderSkills()}
        </div>
    );
};
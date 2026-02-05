import { DetailedHTMLProps, HtmlHTMLAttributes, JSX } from 'react';
import { IconBox } from '@/components';
import Skill from '@/models/skill.model';

import styles from './Skills.module.scss';

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

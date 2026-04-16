import { DetailedHTMLProps, HtmlHTMLAttributes, JSX } from 'react';
import { SkillModel } from '@alexey-kuzmenko/ok-apps-sdk';
import { IconBox } from '@/components';

import styles from './Skills.module.scss';

interface SkillsProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    skills: Array<SkillModel>
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

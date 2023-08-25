import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Tags.module.scss';
import cn from 'classnames';

interface TagsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode
    color?: 'blue' | 'purple' | 'ghost' | 'yellow' | 'pink'
}

export const Tag: React.FC<TagsProps> = ({ children, color = 'blue', ...props }) => {
    return (
        <div className={cn(styles.Tag, {
            [styles.Tag_blue]: color === 'blue',
            [styles.Tag_purple]: color === 'purple',
            [styles.Tag_ghost]: color === 'ghost',
            [styles.Tag_yellow]: color === 'yellow',
            [styles.Tag_pink]: color === 'pink',
        })}
            {...props}
        >
            {children}
        </div>
    );
};
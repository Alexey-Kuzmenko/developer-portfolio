import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Tags.module.scss';
import cn from 'classnames';

interface TagsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tagName: string
}

export const Tag: React.FC<TagsProps> = ({ tagName, ...props }) => {
    return (
        <div className={cn(styles.Tag, {
            [styles.Tag_blue]: tagName === 'TypeScript',
            [styles.Tag_purple]: tagName === 'React',
            [styles.Tag_ghost]: tagName === 'Next.js',
            [styles.Tag_yellow]: tagName === 'JavaScript',
            [styles.Tag_pink]: tagName === 'SCSS',
        })}
            {...props}
        >
            {tagName}
        </div>
    );
};

import styles from './ContentBlock.module.scss';

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Typography } from '@mui/material';


interface ContentBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
    text?: string
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ title, text, ...props }) => {
    return (
        <article className={styles.ContentBlock} {...props}>
            <Typography
                variant='h4'
                component='h2'
                className={styles.ContentBlock__title}
                sx={{ marginBottom: '15px' }}>
                {title}
            </Typography>
            <Typography variant='body1'>{text}</Typography>
        </article>
    );
};
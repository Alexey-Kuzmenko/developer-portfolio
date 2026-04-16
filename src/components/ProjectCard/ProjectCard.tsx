import { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { ProjectModel } from '@alexey-kuzmenko/ok-apps-sdk';
import { Button, Tag } from '..';

import styles from './ProjectCard.module.scss';

type ProjectCardProps = Omit<ProjectModel, 'body' | 'technologies'>

export const ProjectCard: React.FC<ProjectCardProps> = ({ _id, name, description, tags, link, repoLink, image }) => {

    const renderTags = (): JSX.Element[] => {
        return tags.map((tag: string, i: number) => {
            return (
                <Tag tagName={tag} key={i} />
            );
        });
    };

    return (
        <div className={styles.ProjectCard}>

            <Link href={`portfolio/${_id}`} className='ProjectCard__link'>
                <figure>
                    <Image
                        src={image}
                        alt={name}
                        className={styles.ProjectCard__img}
                        width={500}
                        height={400}
                    />
                </figure>

                <div className={styles.ProjectCard__tags}>
                    {renderTags()}
                </div>

                <Typography variant='h5' component='h2' mt={2}>{name}</Typography>
                <Typography variant='body1' mt={2}>{description}</Typography>

            </Link>

            <div className={styles.ProjectCard__controls}>
                <Button role='link' variant='outlined' href={link}>Visit</Button>
                <Button role='link' href={repoLink}>GitHub</Button>
            </div>

        </div>
    );
};

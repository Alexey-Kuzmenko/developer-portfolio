export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { Typography } from '@mui/material';
import { Aos, ProjectCard } from '@/components';
import { getAllProjects } from '@/services/api';
import { ProjectModel } from '@/models/project.model';
import seo from '../../content/seo.json';

import styles from './page.module.scss';

const { portfolio } = seo;

export const metadata: Metadata = {
    title: portfolio.title,
    description: portfolio.description
};

async function Portfolio() {
    const projects = await getAllProjects();

    const renderProjects = (): JSX.Element[] => {
        return projects.map(({ _id, name, description, image, tags, link, repoLink }: ProjectModel) => {
            return (
                <ProjectCard
                    key={_id}
                    _id={_id}
                    name={name}
                    description={description}
                    image={image}
                    tags={tags}
                    link={link}
                    repoLink={repoLink}
                />
            );
        });
    };

    return (
        <>
            <Aos />
            <div className={styles.ProjectsPage}>
                <Typography variant='h4' component='h1' data-aos="fade-up" data-aos-anchor-placement="top-center">
                    Portfolio
                </Typography >

                <div
                    className={styles.ProjectsPage__innerGridContainer}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    {renderProjects()}
                </div>
            </div>
        </>
    );
}

export default Portfolio;

import styles from './page.module.scss';

import { ProjectModel } from '@/models/project.model';
import { Aos, ProjectCard } from '@/components';
import { Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Oleksii Kuzmenko | Portfolio',
    description: 'Learn more about Oleksii Kuzmenko\'s front-end developer portfolio right now! React • JavaScript • TypeScript • Next.js.'
};

const fetchProjects = async (apiUrl: string, apiKey: string): Promise<ProjectModel[]> => {
    const response = await fetch(`${apiUrl}/projects`, {
        headers: {
            'Api-key': apiKey
        },
        next: {
            revalidate: 60
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error(`${response.status} ${response.statusText}`);
    }
};

async function Portfolio() {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    if (!API_KEY) {
        throw new Error('API KEY is not defined');
    }

    if (!API_URL) {
        throw new Error('API URL is not defined');
    }

    const projects = await fetchProjects(API_URL, API_KEY);

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

                <div className={styles.ProjectsPage__innerGridContainer} data-aos="fade-up" data-aos-anchor-placement="top-center">
                    {renderProjects()}
                </div>
            </div>
        </>
    );
}

export default Portfolio;
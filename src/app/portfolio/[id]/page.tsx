import styles from './page.module.scss';

import Image from 'next/image';
import { ProjectModel } from '@/models/project.model';
import { Stack, Button, Aos } from '@/components';
import { Metadata } from 'next';

type ProjectProps = {
    params: {
        id: string
    }
};

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
    const project = await fetch(`${process.env.API_URL}/${params.id}`, {
        headers: { 'API-KEY': process.env.API_KEY ? process.env.API_KEY : '' }
    });
    const data: ProjectModel = await project.json();

    return {
        title: data.name,
        description: data.description
    };
}

async function fetchProject(apiUrl: string, apiKey: string, id: string): Promise<ProjectModel> {
    const response = await fetch(`${apiUrl}/projects/${id}`, {
        headers: {
            'API-KEY': apiKey
        },
        cache: 'no-store',
    });

    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }

}

async function Project({ params: { id } }: ProjectProps) {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    if (!API_KEY) {
        throw new Error('API KEY is not defined');
    }

    if (!API_URL) {
        throw new Error('API URL is not defined');
    }

    const project: ProjectModel = await fetchProject(API_URL, API_KEY, id);

    return (
        <>
            <Aos />
            <div className={styles.ProjectPage}>
                <div className={styles.ProjectPage__innerGridContainer}>

                    <figure className={`${styles.ProjectPage__tile} ${styles.ProjectPage__image}`} data-aos="fade-right">
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={600}
                            height={574}
                        />
                    </figure>

                    <div className={`${styles.ProjectPage__tile} ${styles.ProjectPage__stack}`} data-aos="fade-left">
                        <div className={styles.ProjectPage__innerFlexContainer}>
                            <h1 className={styles.ProjectPage__tileTitle}>Used technologies</h1>
                            <Stack technologies={project.technologies} />
                        </div>
                    </div>

                    <div className={`${styles.ProjectPage__tile} ${styles.ProjectPage__body}`}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <div className={styles.ProjectPage__innerFlexContainer}>
                            <h1 className={styles.ProjectPage__tileTitle}>{project.name}</h1>
                            <p className={styles.ProjectPage__tileText}>{project.body}</p>

                            <div className={styles.ProjectPage__bodyControls}>
                                <Button variant='outlined' role='link' href={project.link}>Visit</Button>
                                <Button variant='contained' role='link' href={project.repoLink}>GitHub</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
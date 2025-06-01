import { Metadata } from 'next';
import Image from 'next/image';

import { ProjectModel } from '@/models/project.model';
import { Stack, Button, Aos } from '@/components';
import { getProject } from '@/services/api';
import getEnvVariable from '@/utils/getEnvVariable';

import styles from './page.module.scss';

type ProjectProps = {
    params: {
        id: string
    }
};



export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
    const API_KEY = getEnvVariable('NEXT_API_KEY');
    const API_URL = getEnvVariable('NEXT_API_URL');

    const project = await fetch(`${API_URL}/projects/${params.id}`, {
        headers: { 'API-KEY': API_KEY }
    });

    const data: ProjectModel = await project.json();

    return {
        title: data.name,
        description: data.description
    };
}


async function Project({ params: { id } }: ProjectProps) {
    const project: ProjectModel = await getProject(id);

    return (
        <>
            <Aos />
            <div className={styles.ProjectPage}>
                <div className={styles.ProjectPage__innerGridContainer}>

                    <figure
                        className={`${styles.ProjectPage__tile} ${styles.ProjectPage__image}`}
                        data-aos="fade-right">
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
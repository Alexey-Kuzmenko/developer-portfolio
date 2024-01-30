import styles from './page.module.scss';
import Project from '@/models/project.type';
import Image from 'next/image';
import { Stack, Button } from '@/components';

// * temporary files
import ProjectImg from '../../../../public/assets/Budget_app_image.svg';
import { Metadata } from 'next';

type ProjectProps = {
    params: {
        id: string
    }
};

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
    const project = await fetch(`http://localhost:3001/api/projects/${params.id}`);
    const data: Project = await project.json();

    return {
        title: data.name,
        description: data.description
    };

}

async function fetchProject(id: string): Promise<Project> {
    const response = await fetch(`http://localhost:3001/api/projects/${id}`, {
        cache: 'no-store',
    });

    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }

}

async function Project({ params: { id } }: ProjectProps) {
    const project: Project = await fetchProject(id);

    return (
        <div className={styles.ProjectPage}>
            <div className={styles.ProjectPage__innerGridContainer}>

                <figure className={`${styles.ProjectPage__tile} ${styles.ProjectPage__image}`}>
                    <Image
                        src={ProjectImg}
                        alt={project.previewImage}
                    />
                </figure>

                <div className={`${styles.ProjectPage__tile} ${styles.ProjectPage__stack}`}>
                    <div className={styles.ProjectPage__innerFlexContainer}>
                        <h1 className={styles.ProjectPage__tileTitle}>Used technologies</h1>
                        <Stack technologies={project.technologies} />
                    </div>
                </div>

                <div className={`${styles.ProjectPage__tile} ${styles.ProjectPage__body}`}>
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
    );
}

export default Project;
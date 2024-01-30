import styles from './page.module.scss';

import Project from '@/models/project.type';
import { Aos, ProjectCard } from '@/components';
import { Typography } from '@mui/material';

const fetchProjects = async (): Promise<Project[]> => {
    const response = await fetch('http://localhost:3001/api/projects', {
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
    const projects = await fetchProjects();

    const renderProjects = (): JSX.Element[] => {
        return projects.map(({ _id, name, description, previewImage, tags, link, repoLink }: Project) => {
            return (
                <ProjectCard
                    key={_id}
                    _id={_id}
                    name={name}
                    description={description}
                    previewImage={previewImage}
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
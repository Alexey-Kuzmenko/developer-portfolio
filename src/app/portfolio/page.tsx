import Project from '@/models/project.type';

const fetchProjects = async (): Promise<Project[]> => {
    const response = await fetch('http://localhost:3001/api/projects');
    const data = await response.json();

    return data;
};

async function Portfolio() {
    const projects = await fetchProjects();

    return (
        <>
            <h1>Portfolio page</h1>
            {/* debug */}
            {JSON.stringify(projects[0])}
        </>

    );
}

export default Portfolio;
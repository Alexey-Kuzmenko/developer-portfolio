export interface ProjectTechnology {
    iconClass: string,
    label: string
}

export interface ProjectModel {
    _id: string
    name: string;
    tags: Array<string>;
    description: string;
    link: string;
    repoLink: string;
    image: string;
    body: string;
    technologies: Array<ProjectTechnology>;
}

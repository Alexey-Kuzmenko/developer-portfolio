export interface Technology {
    iconClass: string,
    label: string
}

export default interface ProjectModel {
    _id: string
    name: string
    tags: Array<string>
    description: string
    link: string
    repoLink: string
    previewImage: string
    images?: Array<string>
    body?: string
    technologies: Array<Technology>
}
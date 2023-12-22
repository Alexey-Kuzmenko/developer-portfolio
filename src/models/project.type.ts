export default interface Project {
    _id: string
    name: string
    tags: Array<string>
    description: string
    link: string
    repoLink: string
    previewImage: string
    images?: Array<string>
    body?: string
}
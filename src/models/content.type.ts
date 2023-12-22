interface Link {
    label: string, href: string
}

export default interface Content {
    _id: string
    title?: string
    body?: string
    image?: string
    links: Array<Link>
}
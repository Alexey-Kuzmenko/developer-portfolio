export type ContentLang = 'ua' | 'eng';

export enum ContentType {
    ABOUT = 'about',
    CONTACTS = 'contacts',
    SERVICES = 'services',
    PROJECTS = 'projects'
}

interface Link {
    label: string,
    href: string
}

export interface ContentModel {
    type: string;
    ua: Content;
    eng: Content;
}

export interface Content {
    title: string;
    body?: string;
    image?: string;
    links?: Array<Link>;
}
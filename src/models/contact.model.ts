export enum IconType {
    TELEGRAM = 'telegram',
    EMAIL = 'email',
    LINKED_IN = 'linkedIn',
    INSTAGRAM = 'instagram'
}

export interface ContactModel {
    _id: string
    label: string;
    body: string;
    href: string;
    iconType: IconType;
    atl?: string;
}

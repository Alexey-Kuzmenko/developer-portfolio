import type { Metadata } from 'next';
import seo from '../../content/seo.json';

const { contacts } = seo;

export const metadata: Metadata = {
    title: contacts.title,
    description: contacts.description
};

export default function ContactsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
}

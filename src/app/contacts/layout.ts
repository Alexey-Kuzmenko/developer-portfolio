import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Oleksii Kuzmenko | Contacts',
    description: 'Development of web applications, landing pages and APIs for business. Oleksii Kuzmenko • front-end developer.',
};

export default function ContactsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
}
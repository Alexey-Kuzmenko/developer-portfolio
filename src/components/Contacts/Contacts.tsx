'use client';

import styles from './Contacts.module.scss';

import { Typography, Tooltip } from '@mui/material';
import Link from 'next/link';


interface ContactsProps {
    label: string
    body: string
    href: string
    children: React.ReactNode
}

export const Contacts: React.FC<ContactsProps> = ({ label, body, href, children }) => {

    const copy = (body: string): void => {
        navigator.clipboard.writeText(body);
    };

    return (
        <div className={styles.Contacts}>

            <Link href={label === 'Email' ? `mailto:${href}` : href} target='_blank'>
                {children}
            </Link>

            <Tooltip title='Click to copy'>
                <div>
                    <div onClick={() => copy(body)}>
                        <Typography sx={{ fontWeight: 400, fontSize: '1rem', color: '#FFF' }}>{label}</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: '#FFF', cursor: 'pointer' }}>{body}</Typography>
                    </div>
                </div>
            </Tooltip>
        </div>
    );
};
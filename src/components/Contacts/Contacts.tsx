'use client';

import styles from './Contacts.module.scss';

import { Typography, Tooltip } from '@mui/material';
import Link from 'next/link';
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';


interface ContactsProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label: string
    body: string
    href: string
    copyToClipboardHandler: React.MouseEventHandler
    children: React.ReactNode
}

export const Contacts: React.FC<ContactsProps> = ({ label, body, href, children, copyToClipboardHandler, ...props }) => {

    return (
        <div className={styles.Contacts} {...props}>

            <Link href={label === 'Email' ? `mailto:${href}` : href} target='_blank' className={styles.Contacts__icon}>
                {children}
            </Link>

            <Tooltip title='Click to copy'>
                <div>
                    <div onClick={copyToClipboardHandler}>
                        <Typography sx={{ fontWeight: 400, fontSize: '1rem', color: '#FFF' }}>{label}</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: '#FFF', cursor: 'pointer' }}>{body}</Typography>
                    </div>
                </div>
            </Tooltip>
        </div>
    );
};
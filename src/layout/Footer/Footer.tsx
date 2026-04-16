'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ContactModel } from '@alexey-kuzmenko/ok-apps-sdk';

import { Typography } from '@mui/material';
import { theme } from '@/theme/ThemeRegistry';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from '..';

import styles from './Footer.module.scss';

interface FooterState {
    [key: string]: string
}

export const Footer = () => {
    const whiteColor = theme.palette.primary.contrastText;
    const [contacts, setContacts] = useState<FooterState>();

    useEffect(() => {
        async function fetchContacts(): Promise<ContactModel[]> {
            const response = await fetch('/api/contacts', {
            });

            if (response.ok) {
                const data: Array<ContactModel> = await response.json();
                return data;
            } else {
                throw new Error(`Status text: ${response.statusText}, status: ${response.status}`);
            }
        }

        fetchContacts().then((res: ContactModel[]) => {

            const contacts = res.reduce((acc: FooterState, c: ContactModel): FooterState => {
                acc[c.label.toLocaleLowerCase()] = c.href;
                return acc;
            }, {});

            setContacts(contacts);
        });
    }, []);

    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.Footer__innerFlexContainer}>
                    <Typography variant='body2' sx={{ color: whiteColor }}>Copyright © Oleksii Kuzmenko</Typography>

                    {/* icons */}
                    <div className={styles.Footer__icons}>
                        <Link href={contacts ? contacts.instagram : ''} target='_blank'>
                            <InstagramIcon sx={{ color: whiteColor }} />
                        </Link>

                        <Link href={contacts ? contacts.telegram : ''} target='_blank'>
                            <TelegramIcon sx={{ color: whiteColor }} />
                        </Link>

                        <Link href={contacts ? contacts.linkedin : ''} target='_blank'>
                            <LinkedInIcon sx={{ color: whiteColor }} />
                        </Link>
                    </div>

                </div>
            </Container>
        </footer>
    );
};

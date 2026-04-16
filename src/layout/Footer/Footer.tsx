'use client';

import Link from 'next/link';
import { Typography } from '@mui/material';
import { theme } from '@/theme/ThemeRegistry';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useContacts } from '@/hooks';
import { Container } from '..';

import styles from './Footer.module.scss';

export const Footer = () => {
    const whiteColor = theme.palette.primary.contrastText;
    const { contactsLinks } = useContacts();

    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.Footer__innerFlexContainer}>
                    <Typography variant='body2' sx={{ color: whiteColor }}>Copyright © Oleksii Kuzmenko</Typography>

                    {/* icons */}
                    {contactsLinks &&
                        <div className={styles.Footer__icons}>
                            <Link href={contactsLinks.instagram ?? ''} target='_blank'>
                                <InstagramIcon sx={{ color: whiteColor }} />
                            </Link>

                            <Link href={contactsLinks.telegram ?? ''} target='_blank'>
                                <TelegramIcon sx={{ color: whiteColor }} />
                            </Link>

                            <Link href={contactsLinks.linkedin ?? ''} target='_blank'>
                                <LinkedInIcon sx={{ color: whiteColor }} />
                            </Link>
                        </div>
                    }
                </div>
            </Container>
        </footer >
    );
};

'use client';

import styles from './Footer.module.scss';

import { Container } from '..';
import { Typography } from '@mui/material';
import { theme } from '@/theme/ThemeRegistry';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export const Footer = () => {
    const whiteColor = theme.palette.primary.contrastText;

    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.Footer__innerFlexContainer}>
                    <Typography variant='body2' sx={{ color: whiteColor }}>Copyright © Oleksii Kuzmenko</Typography>

                    {/* icons */}
                    <div className={styles.Footer__icons}>
                        <Link href='' target='_blank'>
                            <InstagramIcon sx={{ color: whiteColor }} />
                        </Link>

                        <Link href='' target='_blank'>
                            <TelegramIcon sx={{ color: whiteColor }} />
                        </Link>

                        <Link href='' target='_blank'>
                            <LinkedInIcon sx={{ color: whiteColor }} />
                        </Link>
                    </div>

                </div>
            </Container>
        </footer>
    );
};
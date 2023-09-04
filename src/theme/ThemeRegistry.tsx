'use client';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({ weight: ['400', '500', '700'], subsets: ['latin', 'cyrillic'] });

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: nunitoSans.style.fontFamily,
        h4: {
            color: '#FFFF',
            lineHeight: 'normal',
            fontWeight: '700'
        },
        body1: {
            fontSize: '1.125rem',
            color: '#7E8694'
        },
    },
    palette: {
        primary: {
            main: '#F4F6FD',
        }
    },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
'use client';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({ weight: ['400', '500', '700'], subsets: ['latin', 'cyrillic'] });

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: nunitoSans.style.fontFamily,
        h1: {
            color: '#FFFF',
            lineHeight: 'normal',
            fontWeight: '700'
        },
        h2: {
            color: '#FFFF',
            lineHeight: 'normal',
            fontWeight: '700'
        },
        h3: {
            color: '#FFFF',
            lineHeight: 'normal',
            fontWeight: '700'
        },
        h4: {
            color: '#FFFF',
            lineHeight: 'normal',
            fontWeight: '700'
        },
        h5: {
            color: '#FFFF',
            lineHeight: 'normal',
            fontWeight: '600'
        },
        body1: {
            fontSize: '1.125rem',
            color: '#7E8694',
            textAlign: 'justify'
        },
    },
    palette: {
        primary: {
            main: '#040D1B',
            light: '#071324',
            contrastText: '#FFFF'
        }
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiFilledInput-root': { borderBottom: '2px solid #fff' },
                    '& .MuiFilledInput-root.Mui-focused': { borderBottom: '2px solid #3959FF' },
                    '& .MuiFilledInput-root.Mui-error': { borderBottom: '2px solid #d32f2f' },
                    '& .MuiInputLabel-root': { color: '#fff' },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#3959FF'
                    },
                    '& .MuiInputLabel-root.Mui-error': { color: '#d32f2f' },
                    '& .MuiInputLabel-root.Mui-focused.Mui-error': {
                        color: '#d32f2f'
                    },
                    textarea: { color: '#fff' },
                    input: { color: '#fff' },
                }

            }
        }
    }
};

export const theme = createTheme(themeOptions);

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
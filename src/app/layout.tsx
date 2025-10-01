import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

import { Footer } from '@/layout/Footer/Footer';
import { Container, Header } from '@/layout';
import ThemeRegistry from '@/theme/ThemeRegistry';
import getEnvVariable from '@/utils/getEnvVariable';
import seo from '../content/seo.json';

import '../scss/base/_reset.scss';
import styles from './globals.module.scss';

const { home } = seo;

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
};

const GA4_ID = getEnvVariable('NEXT_GA4_ID');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type='text/css'
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>

      <ThemeRegistry>
        <body className={styles.Body} data-body-scroll="false">
          <Header />

          <main className={styles.Main}>
            <Container>
              {children}
            </Container>
          </main>

          <Footer />
        </body>

        <GoogleAnalytics gaId={GA4_ID} />
      </ThemeRegistry>
    </html>
  );
}

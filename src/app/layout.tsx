import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

import { Footer } from '@/layout/Footer/Footer';
import { Container, Header } from '@/layout';
import '../scss/base/_reset.scss';
import ThemeRegistry from '@/theme/ThemeRegistry';

import styles from './globals.module.scss';

export const metadata: Metadata = {
  title: 'Oleksii Kuzmenko | Front-End Developer',
  description: 'Oleksii Kuzmenko is a skilled Front-end developer specializing in React, JavaScript, TypeScript, Next.js, and NestJS.',
};

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

        <GoogleAnalytics gaId={String(process.env.GA4_ID)} />
      </ThemeRegistry>
    </html>
  );
}

import styles from './globals.module.scss';
import '../scss/base/_reset.scss';

import ThemeRegistry from '@/theme/ThemeRegistry';
import { Container, Header } from '@/layout';

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Oleksii Kuzmenko | Front-End Developer',
  description: 'Oleksii Kuzmenko, a skilled front-end developer specializing in React, JavaScript, TypeScript, Next.js, and NestJS. Explore a portfolio of meticulously crafted websites, web apps, and landing pages that showcase creativity and technical prowess. Ready to elevate your online presence? Contact Oleksii today to discuss your next website or landing page project!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>

      <ThemeRegistry>
        <body className={styles.Body}>

          <Header />

          <main className={styles.Main}>
            <Container>
              {children}
            </Container>
          </main>

          {/* Footer */}

        </body>
      </ThemeRegistry>
    </html>
  );
}

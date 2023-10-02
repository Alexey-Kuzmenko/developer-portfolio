import styles from './page.module.scss';

import { Typography, Tooltip } from '@mui/material';
import { Button, ContentBlock, TextAccent } from '@/components';
import { FlexContainer, Skills } from '@/layout';
import Image from 'next/image';
import Link from 'next/link';

// ! testing
import Photo from '../../public/assets/Photo_for_cv_2 1.svg';
import WebImg from '../../public/Web_page_image.svg';

const text = `Hi, I'm Oleksii. I'm 20 years old. Nowadays, I'm studying in the 3rd year at DTEU
(KNUTE) as Marketer. So far, I am a Front-end developer with no experience, but I
want to get it. My goal is self-development and career growth in IT. I learn
development skills on my own, using Udemy courses, manuals and other
alternative sources of information. My main competitive advantage is bits of
knowledge of programming and marketing.`;

export default function Home() {
  return (
    <div className={styles.HomePage}>

      {/* About me */}
      <Typography variant='h4' component='h1' sx={{ textAlign: 'center' }}>Hi there! My name is Oleksii and I'm <br />  <TextAccent>Front-end</TextAccent> developer.</Typography>
      <FlexContainer>
        <ContentBlock title='About me' text={text} />
        <Tooltip title='Oleksii Kuzmenko | Front-end developer'>
          <Image
            src={Photo}
            width={350}
            height={350}
            alt='Developer photo'
          />
        </Tooltip>
      </FlexContainer>

      {/* Skills */}
      <Typography variant='h4' component='h2' sx={{ textAlign: 'center' }}>Skills & technologies</Typography>
      <Skills skills={[{ label: 'Next.js', iconClass: 'devicon-nextjs-original' }, { label: 'React', iconClass: 'devicon-react-original' }, { label: 'TypeScript', iconClass: 'devicon-typescript-plain' }, { label: 'Next.js', iconClass: 'devicon-nextjs-original' }, { label: 'React', iconClass: 'devicon-react-original' }, { label: 'TypeScript', iconClass: 'devicon-typescript-plain' }]} />

      {/* Projects */}
      <FlexContainer>
        <div>
          <ContentBlock title='Take a look at the latest projects I have done' />

          <div className={styles.Controls}>
            <Button variant='outlined' role='link' href='http://localhost:3000/portfolio'>Explore</Button>
            <Button role='link' href='https://github.com/Alexey-Kuzmenko'>My GitHub</Button>
          </div>

        </div>
        <Link href='http://localhost:3000/portfolio' target='_blank'>
          <Image
            src={WebImg}
            alt='Web page'
          />
        </Link>

      </FlexContainer>

    </div>
  );
}

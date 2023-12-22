import styles from './page.module.scss';

import { Typography, Tooltip, Box } from '@mui/material';
import { Button, ContentBlock, TextAccent } from '@/components';
import { FlexContainer, Skills, Solutions } from '@/layout';
import Image from 'next/image';
import Link from 'next/link';

// * temporary files
import Photo from '../../public/assets/Photo_for_cv_2 1.svg';
import GitHubImg from '../../public/assets/GitHub image.svg';
import Skill from '@/models/skill.type';

/* 
  TODO:
    - remove temporary files and text;
    - add in functions which fetch data verification;
*/

const text = `Hi, I'm Oleksii. I'm 20 years old. Nowadays, I'm studying in the 3rd year at DTEU
(KNUTE) as Marketer. So far, I am a Front-end developer with no experience, but I
want to get it. My goal is self-development and career growth in IT. I learn
development skills on my own, using Udemy courses, manuals and other
alternative sources of information. My main competitive advantage is bits of
knowledge of programming and marketing.`;

// ! testing. This function fetching data from API
async function fetchSkills(): Promise<Skill[]> {
  const response = fetch('http://localhost:3001/api/skills', {
    next: {
      revalidate: 60
    }
  });

  const data = (await response).json();
  return data;
}

// ! testing. This function fetching content from API
async function fetchContent(lang: 'ua' | 'eng', type = 'about') {
  const response = await fetch(`http://localhost:3001/api/content/${type}/${lang}`, {
    next: {
      revalidate: 60
    }
  });

  const data = await response.json();
  return data;
}

export default async function Home() {
  const skills = await fetchSkills();
  const about = await fetchContent('eng');

  return (
    <div className={styles.HomePage}>

      {/* About me */}
      <Typography variant='h4' component='h1' sx={{ textAlign: 'center' }}>
        Hi there! My name is Oleksii and I'm <br />  <TextAccent>Front-end</TextAccent> developer.
      </Typography>

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
      <Skills skills={skills} />

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
            src={GitHubImg}
            alt='Web page'
          />
        </Link>

      </FlexContainer>

      {/* Services */}
      <Box component='section' sx={{ width: '100%', maxWidth: '800px' }}>

        <Typography variant='h4' component='h2' sx={{ textAlign: 'center', marginBottom: '15px' }}>
          Front-End development <TextAccent>solutions</TextAccent>
        </Typography>

        <Typography variant='body1' sx={{ textAlign: 'center' }}>You are looking for a beautiful, functional, and user-friendly website or web application? Get in touch with me today to learn more about my solutions and affordable prices.</Typography>

        <Solutions />

        <Button role='link' variant='contained' style={{ margin: '0 auto', marginTop: '30px', display: 'block' }} href='/contacts'>Contact</Button>

      </Box>

    </div>
  );
}

export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';

import { Typography, Tooltip, Box } from '@mui/material';
import { FlexContainer, Skills, Solutions } from '@/layout';
import { Aos, Button, ContentBlock, TextAccent } from '@/components';

import { Content, ContentType } from '@/models/content.model';
import { getContent, getSkills } from '@/services/api';

import styles from './page.module.scss';

export default async function Home() {
  const aboutMe: Content = await getContent(ContentType.ABOUT, 'eng');
  const services: Content = await getContent(ContentType.SERVICES, 'eng');
  const skills = await getSkills();
  let linkToCV = '';

  if (aboutMe.links) {
    const link = aboutMe.links.find(link => link.label === 'CV');

    if (link) {
      linkToCV = link.href;
    }
  }

  return (
    <>
      <Aos />
      <div className={styles.HomePage}>

        {/* About me */}
        <Typography variant='h4' component='h1' sx={{ textAlign: 'center' }}>
          Hi there! My name is Oleksii and I'm <br />  <TextAccent>Front-end</TextAccent> developer.
        </Typography>

        <FlexContainer data-aos="fade-up" data-aos-anchor-placement="top-center">
          <div>
            <ContentBlock title={aboutMe.title} text={aboutMe.body} />
            <Button variant='text' role='link' href={linkToCV}>My CV</Button>
          </div>

          <figure>
            <Tooltip title='Oleksii Kuzmenko | Front-end developer'>
              <Image
                src={aboutMe.image ? aboutMe.image : ''}
                width={350}
                height={350}
                alt='Developer photo'
              />
            </Tooltip>
          </figure>
        </FlexContainer>

        {/* Skills */}
        <Typography
          variant='h4'
          component='h2'
          sx={{ textAlign: 'center' }}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          Skills & technologies
        </Typography>
        <Skills skills={skills} data-aos="fade-up" data-aos-anchor-placement="top-center" />

        {/* Projects */}
        <FlexContainer data-aos="fade-up" data-aos-anchor-placement="top-center">
          <div>
            <ContentBlock title='Take a look at the latest projects I have done' />

            <div className={styles.Controls}>
              <Button variant='outlined' role='link' href='/portfolio'>Explore</Button>
              <Button role='link' href='https://github.com/Alexey-Kuzmenko'>My GitHub</Button>
            </div>
          </div>

          <Link href='https://github.com/Alexey-Kuzmenko' target='_blank'>
            <Image
              src='https://api.ok-dev.pp.ua/static/home-page/home-page_github_preview.svg'
              alt='Web page'
              width={530}
              height={300}
            />
          </Link>
        </FlexContainer>

        {/* Services */}
        <Box component='section' sx={{ width: '100%', maxWidth: '800px' }} data-aos="fade-up">

          <Typography variant='h4' component='h2' sx={{ textAlign: 'center', marginBottom: '15px' }}>
            {services.title.substring(0, 21) + ' '}
            <TextAccent>{services.title.substring(services.title.length - 9)}</TextAccent>
          </Typography>

          <Typography variant='body1' sx={{ textAlign: 'center' }}>
            {services.body}
          </Typography>

          <Solutions />

          <Button
            role='link'
            variant='contained'
            style={{ margin: '0 auto', marginTop: '30px', display: 'block' }}
            href='/contacts'>
            Contact
          </Button>

        </Box>

      </div>
    </>
  );
}

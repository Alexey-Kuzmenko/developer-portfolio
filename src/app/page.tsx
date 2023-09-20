import { Typography, Tooltip } from '@mui/material';
import styles from './page.module.scss';
// ! testing IconBox
import { ContentBlock, TextAccent, IconBox } from '@/components';

// ! testing
import Image from 'next/image';
import Photo from '../../public/assets/Photo_for_cv_2 1.svg';
import { FlexContainer } from '@/layout';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam enim. In faucibus sollicitudin justo quis sollicitudin. Nullam eget turpis non elit consectetur sagittis. Aliquam vel libero blandit, lobortis velit sed, pharetra odio. Duis ut dui metus. Nullam sollicitudin ornare tellus, sed ultrices orci vehicula nec. Pellentesque rutrum a sapien nec rutrum. Maecenas diam orci, placerat a aliquet non, laoreet vitae nisl. Cras tincidunt turpis non tempor ornare. Mauris fermentum, dolor in ultrices convallis, libero augue volutpat risus, sed laoreet lorem neque id nisi.';

export default function Home() {
  return (
    <div className={styles.HomePage}>
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

      <Typography variant='h4' component='h2' sx={{ textAlign: 'center' }}>Skills & technologies</Typography>

      <IconBox label='Next.js' iconClass='devicon-nextjs-original' />
      <IconBox label='Next.js' iconClass='devicon-nextjs-original' />

    </div>
  );
}

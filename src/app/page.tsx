import { Typography } from '@mui/material';
import styles from './page.module.scss';
import { ContentBlock, TextAccent } from '@/components';

// ! testing
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam enim. In faucibus sollicitudin justo quis sollicitudin. Nullam eget turpis non elit consectetur sagittis. Aliquam vel libero blandit, lobortis velit sed, pharetra odio. Duis ut dui metus. Nullam sollicitudin ornare tellus, sed ultrices orci vehicula nec. Pellentesque rutrum a sapien nec rutrum. Maecenas diam orci, placerat a aliquet non, laoreet vitae nisl. Cras tincidunt turpis non tempor ornare. Mauris fermentum, dolor in ultrices convallis, libero augue volutpat risus, sed laoreet lorem neque id nisi.'

export default function Home() {
  return (
    <>
      <Typography variant='h4' sx={{ textAlign: 'center' }}>Hi there! My name is Oleksii and I'm <br />  <TextAccent>Front-end</TextAccent> developer.</Typography>
      <ContentBlock title='About me' text={text} />
    </>
  );
}

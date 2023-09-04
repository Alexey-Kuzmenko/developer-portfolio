import { Typography } from '@mui/material';
import styles from './page.module.scss';
// ! testing MenuIcon
import { TextAccent } from '@/components';


export default function Home() {
  return (
    <Typography variant='h4' sx={{ textAlign: 'center' }}>Hi there! My name is Oleksii and I'm <br />  <TextAccent>Front-end</TextAccent> developer.</Typography>
  );
}

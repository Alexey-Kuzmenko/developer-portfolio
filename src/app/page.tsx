import Image from 'next/image';
import styles from './page.module.css';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod aut odio voluptate sit sequi deleniti, consequuntur suscipit blanditiis quia.</Typography>
    </main>
  );
}

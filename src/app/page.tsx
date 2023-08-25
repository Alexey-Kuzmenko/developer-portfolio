import styles from './page.module.scss';

import { Typography } from '@mui/material';
//  ! testing
import { Button, TextAccent } from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ! testing */}
      <Typography variant='body1'> <TextAccent>Lorem</TextAccent> ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod aut odio voluptate sit sequi deleniti, consequuntur suscipit blanditiis quia.</Typography>
      <Button>Button</Button>
      <Button variant='outlined'>Button</Button>
    </main>
  );
}

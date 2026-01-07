import styles from './Solutions.module.scss';

import { IconBox } from '@/components';
import { Typography } from '@mui/material';

export const Solutions = () => {
    return (
        <div className={styles.Solutions}>
            <div className={styles.Solutions__flexWrapper}>
                <IconBox size='small' iconType='landing' />
                <Typography component='h3' variant='body1' textAlign='center'>Landing pages</Typography>
            </div>

            <div className={styles.Solutions__flexWrapper}>
                <IconBox size='small' iconType='app' />
                <Typography component='h3' variant='body1' textAlign='center'>Web apps</Typography>
            </div>

            <div className={styles.Solutions__flexWrapper}>
                <IconBox size='small' iconType='api' />
                <Typography component='h3' variant='body1' textAlign='center'>API's</Typography>
            </div>
        </div>
    );
}; 

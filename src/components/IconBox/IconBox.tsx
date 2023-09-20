'use client';

import styles from './IconBox.module.scss';

import cn from 'classnames';
import { Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

interface IconBoxProps {
    size?: 'default' | 'small',
    label?: string
    iconType?: 'telegram' | 'email' | 'linkedIn' | 'instagram'
    iconClass?: string
}

export const IconBox: React.FC<IconBoxProps> = ({ size = 'default', label, iconClass, iconType }) => {
    let icon = (
        <TelegramIcon sx={{ fontSize: '3rem', color: '#3959FF' }} />
    );

    if (iconType === 'email') {
        icon = <EmailIcon sx={{ fontSize: '3rem', color: '#FF6501' }} />;
    }

    if (iconType === 'linkedIn') {
        icon = <LinkedInIcon sx={{ fontSize: '3rem', color: '#58C990' }} />;
    }

    if (iconType === 'instagram') {
        icon = <InstagramIcon sx={{ fontSize: '3rem', color: '#EF39FF' }} />;
    }

    return (
        <div className={cn(styles.IconBox, [{
            [styles.IconBox_default]: size === 'default',
            [styles.IconBox_small]: size === 'small',
        }]
        )}
        >
            {iconClass ? <i className={`${iconClass} ${styles.IconBox__icon}`}></i> : icon ? icon : null}

            {label ? <Typography variant='h5' component='h3' sx={{ marginTop: '20px', textAlign: 'center' }}>{label}</Typography> : null}
        </div>
    );
};
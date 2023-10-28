'use client';

import styles from './IconBox.module.scss';

import cn from 'classnames';
import { theme } from '@/theme/ThemeRegistry';
import { Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';

interface IconBoxProps {
    size?: 'default' | 'small',
    label?: string
    iconType?: 'telegram' | 'email' | 'linkedIn' | 'instagram' | 'landing' | 'app' | 'api'
    iconClass?: string
}

export const IconBox: React.FC<IconBoxProps> = ({ size = 'default', label, iconClass, iconType }) => {
    let icon = (
        <TelegramIcon sx={{ fontSize: '3rem', color: '#3959FF' }} />
    );

    switch (iconType) {
        case 'email':
            icon = <EmailIcon sx={{ fontSize: '3rem', color: '#FF6501' }} />;
            break;
        case 'linkedIn':
            icon = <LinkedInIcon sx={{ fontSize: '3rem', color: '#58C990' }} />;
            break;
        case 'instagram':
            icon = <InstagramIcon sx={{ fontSize: '3rem', color: '#EF39FF' }} />;
            break;
        case 'landing':
            icon = <WebIcon sx={{ fontSize: '3rem', color: theme.palette.secondary.main }} />;
            break;
        case 'app':
            icon = <DevicesIcon sx={{ fontSize: '3rem', color: theme.palette.secondary.main }} />;
            break;
        case 'api':
            icon = <StorageIcon sx={{ fontSize: '3rem', color: theme.palette.secondary.main }} />;
            break;
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
'use client';

import styles from './Alert.module.scss';
import cn from 'classnames';
import { Alert as MuiAlert } from '@mui/material';

interface AlertProps {
    type: 'error' | 'warning' | 'info' | 'success'
    message: string
    open: boolean
    onClickHandler: () => void
}

export const Alert: React.FC<AlertProps> = ({ message, type, open, onClickHandler }) => {

    return (
        <div className={cn(styles.AlertWrapper, {
            [styles.AlertWrapper_open]: open === true
        })}>
            <MuiAlert severity={type} onClose={onClickHandler}>
                {message}
            </MuiAlert>
        </div>
    );
};

'use client';

import styles from './MenuIcon.module.scss';
import cn from 'classnames';

interface MenuIconProps {
    menuIsOpen: boolean
    menuIconClickHandler: React.MouseEventHandler
}

export const MenuIcon: React.FC<MenuIconProps> = ({ menuIsOpen, menuIconClickHandler }) => {
    return (
        <div
            className={cn(styles.MenuIcon, { [styles.MenuIcon_open]: menuIsOpen === true })}
            onClick={menuIconClickHandler}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

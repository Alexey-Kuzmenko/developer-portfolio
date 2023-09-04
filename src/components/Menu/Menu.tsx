'use client';

import styles from './Menu.module.scss';

import cn from 'classnames';
import MenuLink from '@/models/menu-link.type';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';

interface MenuProps {
    links: MenuLink[]
}

// ! testing
import { useState } from 'react';

export const Menu: React.FC<MenuProps> = ({ links }) => {
    // ! testing
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const onMenuIconClick = (): void => {
        setMenuIsOpen((prevState) => !prevState);
    };

    const onMenuLinkClick = (): void => {
        setMenuIsOpen(false);
    };

    const renderLinks = (): JSX.Element[] => {
        return links.map(({ label, href }: MenuLink, i) => {
            const isActive: boolean = pathname === href;

            return (
                <li key={i}>
                    <Link
                        href={href ? href : label}
                        className={cn(styles.Menu__link, { [styles.Menu__link_active]: isActive === true })}
                        onClick={onMenuLinkClick}
                    >{label}</Link>
                </li>
            );
        });
    };

    return (
        <div className={styles.Menu}>
            <div className={styles.Menu__icon} onClick={onMenuIconClick}>
                {
                    menuIsOpen ? <CloseIcon /> : <MenuIcon />
                }
            </div>

            <nav className={cn(styles.Menu__body, { [styles.Menu__body_open]: menuIsOpen === true })}>
                <ul className={styles.Menu__list}>
                    {renderLinks()}
                </ul>
            </nav>
        </div>
    );
};
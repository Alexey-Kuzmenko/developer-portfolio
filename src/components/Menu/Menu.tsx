'use client';

import styles from './Menu.module.scss';

import { useEffect, useState } from 'react';
import cn from 'classnames';
import MenuLink from '@/models/menu-link.model';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from '../MenuIcon/MenuIcon';

interface MenuProps {
    links: MenuLink[]
}

export const Menu: React.FC<MenuProps> = ({ links }) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const body = document.body;
        body.dataset.bodyScroll = String(!menuIsOpen);
    });

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

            <MenuIcon menuIsOpen={menuIsOpen} menuIconClickHandler={onMenuIconClick} />

            <nav className={cn(styles.Menu__body, { [styles.Menu__body_open]: menuIsOpen === true })}>
                <ul className={styles.Menu__list}>
                    {renderLinks()}
                </ul>
            </nav>
        </div>
    );
};
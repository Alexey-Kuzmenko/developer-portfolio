import styles from './Header.module.scss';

import { Container } from '..';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@/components';

import Logo from '../../../public/assets/Logo.svg';

export const Header = () => {
    return (
        <header className={styles.Header}>
            <Container>
                <div className={styles.Header__innerFlexContainer}>

                    <Link href='/' className={styles.Header__logo}>
                        <Image
                            src={Logo}
                            width='50'
                            alt='Logo'
                            priority
                        />
                        <p className={styles.Header__logoText}><b>Oleksii</b> Kuzmenko</p>
                    </Link>

                    <Menu links={[{ label: 'Home', href: '/' }, { label: 'Portfolio', href: '/portfolio' }, { label: 'Contacts', href: '/contacts' }]} />

                </div>
            </Container>
        </header>
    );
};
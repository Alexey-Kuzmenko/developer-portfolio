'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Aos = () => {
    useEffect(() => {
        AOS.init({
            disable: 'mobile',
            once: true,
            duration: 1_000
        });
    }, []);

    return <></>;
};
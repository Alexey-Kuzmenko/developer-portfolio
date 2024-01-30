'use client';

import { useEffect } from 'react';
import AOS from 'aos';

function Aos() {
    useEffect(() => {
        AOS.init();
    }, []);

    return <></>;
}

export default Aos;
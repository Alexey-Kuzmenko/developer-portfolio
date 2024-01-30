'use client';

import styles from './page.module.scss';

import { useEffect, useState } from 'react';
import { FlexContainer } from '@/layout';
import { Form } from '@/components/Form/Form';
import { ContentBlock, Alert, Aos } from '@/components';
import { ContactsGroup } from '@/components/ContactsGroup/ContactsGroup';
import ContentModel from '@/models/content.type';

// ! testing
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam enim. In faucibus sollicitudin justo quis sollicitudin. Nullam eget turpis non elit consectetur sagittis. Aliquam vel libero blandit, lobortis velit sed, pharetra odio. Duis ut dui metus. ';

function Contacts() {
    const [showAlert, setShowAlert] = useState<boolean>(false);

    useEffect(() => {
        async function fetchContent(lang: 'ua' | 'eng', type = 'contacts'): Promise<ContentModel> {
            const response = await fetch(`http://localhost:3001/api/content/${type}/${lang}`);

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        }

        // ! debug
        fetchContent('eng').then(res => console.log(res));

    }, []);

    const copyToClipboardHandler = (): void => {
        setShowAlert(true);
    };

    const hideAlertHandler = (): void => {
        setShowAlert(false);
    };

    return (
        <>
            <Aos />
            <div className={styles.ContactsPage}>
                <FlexContainer data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <div>
                        <ContentBlock title='Get in touch' text={text} />
                        <ContactsGroup onClickHandler={copyToClipboardHandler} />
                    </div>

                    <Form />
                </FlexContainer>

                <Alert message='Copied to clipboard' type='info' open={showAlert} onClickHandler={hideAlertHandler} />
            </div>
        </>
    );
}

export default Contacts;
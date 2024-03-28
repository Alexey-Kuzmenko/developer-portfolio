'use client';

import styles from './page.module.scss';

import { useEffect, useState } from 'react';
import { FlexContainer } from '@/layout';
import { Form } from '@/components/Form/Form';
import { ContentBlock, Alert, Aos } from '@/components';
import { ContactsGroup } from '@/components/ContactsGroup/ContactsGroup';
import { Content, ContentLang } from '@/models/content.model';

function Contacts() {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [content, setContent] = useState<Content>();

    useEffect(() => {
        async function fetchContent(lang: ContentLang): Promise<Content> {
            const response = await fetch(`/api/content/?lang=${lang}`, {
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        }

        fetchContent('eng').then(res => setContent(res));
    }, []);

    const hideAlertHandler = (): void => {
        setShowAlert(false);
    };

    return (
        <>
            <title>Oleksii Kuzmenko | Contacts</title>
            <meta name='description' content='Development of web applications, landing pages and APIs for business. Oleksii Kuzmenko • front-end developer.' />
            <Aos />
            <div className={styles.ContactsPage}>
                <FlexContainer data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <div>
                        <ContentBlock title={content ? content.title : ''} text={content ? content.body : ''} />
                        <ContactsGroup setShowAlert={setShowAlert} />
                    </div>

                    <Form />
                </FlexContainer>

                <Alert message='Copied to clipboard' type='info' open={showAlert} onClickHandler={hideAlertHandler} />
            </div>
        </>
    );
}

export default Contacts;
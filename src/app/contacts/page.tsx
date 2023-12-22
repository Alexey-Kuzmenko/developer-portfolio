'use client';

import styles from './page.module.scss';

import { useEffect, useState } from 'react';
import { FlexContainer } from '@/layout';
import { Form } from '@/components/Form/Form';
import { ContentBlock, Alert } from '@/components';
import { IconBox, Contacts as ContactsBlock } from '@/components';
import ContactModel from '@/models/contact.type';

// ! testing
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam enim. In faucibus sollicitudin justo quis sollicitudin. Nullam eget turpis non elit consectetur sagittis. Aliquam vel libero blandit, lobortis velit sed, pharetra odio. Duis ut dui metus. ';

function Contacts() {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [contacts, setContacts] = useState<ContactModel[]>([]);

    useEffect(() => {
        async function fetchContacts(): Promise<ContactModel[]> {
            const response = await fetch('http://localhost:3001/api/contacts', {
                method: 'GET'
            });
            const data: Array<ContactModel> = await response.json();

            return data;
        }

        async function fetchContent(lang: 'ua' | 'eng', type = 'contacts') {
            const response = await fetch(`http://localhost:3001/api/content/${type}/${lang}`);
            const data = await response.json();

            return data;
        }

        fetchContacts().then(res => setContacts(res));
        // ! debug
        fetchContent('eng').then(res => console.log(res));

    }, []);

    const renderContacts = (): JSX.Element[] => {
        return contacts.map(({ _id, label, body, href, iconType }: ContactModel) => {
            return (
                <ContactsBlock label={label} body={body} href={href} onClick={copyToClipboardHandler} key={_id}>
                    <IconBox size='small' iconType={iconType} />
                </ContactsBlock>
            );
        });
    };

    const copyToClipboardHandler = (): void => {
        setShowAlert(true);
    };

    const hideAlertHandler = (): void => {
        setShowAlert(false);
    };

    return (
        <div className={styles.ContactsPage}>
            <FlexContainer>

                <div>
                    <ContentBlock title='Get in touch' text={text} />
                    {renderContacts()}
                </div>

                <Form />

            </FlexContainer>

            <Alert message='Copied to clipboard' type='info' open={showAlert} onClickHandler={hideAlertHandler} />
        </div>
    );
}

export default Contacts;
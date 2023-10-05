'use client';

import { Form } from '@/components/Form/Form';
import styles from './page.module.scss';

import { useState } from 'react';
import { ContentBlock, Alert } from '@/components';
import { FlexContainer } from '@/layout';
import { IconBox, Contacts as ContactsBlock } from '@/components';

// ! testing
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam enim. In faucibus sollicitudin justo quis sollicitudin. Nullam eget turpis non elit consectetur sagittis. Aliquam vel libero blandit, lobortis velit sed, pharetra odio. Duis ut dui metus. ';

function Contacts() {
    const [showAlert, setShowAlert] = useState<boolean>(false);

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

                    <ContactsBlock label='Email' body='alexey.kuzmenko1101@gamil.com' href='alexey.kuzmenko1101@gamil.com' onClick={copyToClipboardHandler}>
                        <IconBox size='small' iconType='email' />
                    </ContactsBlock>

                    <ContactsBlock label='Telegram' body='@Alesha_Kuzmenko' href='https://t.me/Alesha_Kuzmenko'>
                        <IconBox size='small' iconType='telegram' />
                    </ContactsBlock>

                    <ContactsBlock label='LinkedIn' body='Oleksii Kuzmenko' href='alexey.kuzmenko1101@gamil.com'>
                        <IconBox size='small' iconType='linkedIn' />
                    </ContactsBlock>
                </div>

                <Form />

            </FlexContainer>

            <Alert message='Copied to clipboard' type='info' open={showAlert} onClickHandler={hideAlertHandler} />
        </div>
    );
}

export default Contacts;
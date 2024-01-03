'use client';

import { useEffect, useState } from 'react';
import { IconBox, Contacts } from '..';
import ContactModel from '@/models/contact.type';

interface ContactsGroupProps {
    onClickHandler: React.MouseEventHandler
}

export const ContactsGroup: React.FC<ContactsGroupProps> = ({ onClickHandler }) => {
    const [contacts, setContacts] = useState<ContactModel[]>([]);

    useEffect(() => {
        async function fetchContacts(): Promise<ContactModel[]> {
            const response = await fetch('http://localhost:3001/api/contacts', {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error(`Status text: ${response.statusText}, status: ${response.status}`);
            }

            const data: Array<ContactModel> = await response.json();
            return data;
        }

        fetchContacts().then(res => setContacts(res));

    }, []);

    const renderContacts = (): JSX.Element[] => {
        return contacts.map(({ _id, label, body, href, iconType }) => {
            return (
                <Contacts label={label} body={body} href={href} onClick={onClickHandler} key={_id}>
                    <IconBox size='small' iconType={iconType} />
                </Contacts>
            );
        });
    };

    return (
        <>
            {renderContacts()}
        </>
    );
};
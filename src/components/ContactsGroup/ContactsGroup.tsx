'use client';

import { JSX } from 'react';
import { useContacts } from '@/hooks';
import { IconBox, Contacts } from '..';

interface ContactsGroupProps {
    setShowAlert: (value: boolean) => void
}

export const ContactsGroup: React.FC<ContactsGroupProps> = ({ setShowAlert }) => {
    const { contacts } = useContacts();
    const contactsToRender = contacts?.filter((c) => !/instagram/i.test(c.label));

    const copyToClipboardHandler = (body: string): void => {
        navigator.clipboard.writeText(body);
        setShowAlert(true);
    };

    if (!contactsToRender || !contactsToRender.length) {
        return null;
    }

    const renderContacts = (): JSX.Element[] => {
        return contactsToRender.map(({ _id, label, body, href, iconType }) => {
            return (
                <Contacts
                    label={label}
                    body={body}
                    href={href}
                    copyToClipboardHandler={() => copyToClipboardHandler(body)} key={_id}>
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

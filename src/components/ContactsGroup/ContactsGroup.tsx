'use client';

import { useEffect, useState } from 'react';
import { IconBox, Contacts } from '..';
import { ContactModel } from '@/models/contact.model';

interface ContactsGroupProps {
    setShowAlert: (value: boolean) => void
}

export const ContactsGroup: React.FC<ContactsGroupProps> = ({ setShowAlert }) => {
    const [contacts, setContacts] = useState<ContactModel[]>([]);

    useEffect(() => {
        async function fetchContacts(): Promise<ContactModel[]> {
            const response = await fetch('/api/contacts', {
                cache: 'no-store'
            });

            if (response.ok) {
                const data: Array<ContactModel> = await response.json();
                return data;
            } else {
                throw new Error(`Status text: ${response.statusText}, status: ${response.status}`);
            }
        }

        fetchContacts().then((res: ContactModel[]) => {
            const contacts = res.filter((c) => c.label !== 'Instagram');
            setContacts(contacts);
        });
    }, []);

    const copyToClipboardHandler = (body: string): void => {
        navigator.clipboard.writeText(body);
        setShowAlert(true);
    };

    const renderContacts = (): JSX.Element[] => {
        return contacts.map(({ _id, label, body, href, iconType }) => {
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

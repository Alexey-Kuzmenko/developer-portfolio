import { useEffect, useState } from 'react';
import { ContactModel } from '@alexey-kuzmenko/ok-apps-sdk';

type ContactsLinks = Record<string, string>

interface ContactsData {
    contacts: Array<ContactModel> | null
    contactsLinks: ContactsLinks | null
}

export const useContacts = (): ContactsData => {
    const [contacts, setContacts] = useState<ContactModel[] | null>(null);
    const [contactsLinks, setContactsLinks] = useState<ContactsLinks | null>(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('/api/contacts', {
                    cache: 'no-store'
                });

                if (!response.ok) {
                    throw new Error(`Status text: ${response.statusText}, status: ${response.status}`);
                }

                const data: Array<ContactModel> = await response.json();
                setContacts(data);

                const contactsLinks = data.reduce((acc: ContactsLinks, c: ContactModel): ContactsLinks => {
                    acc[c.label.toLocaleLowerCase()] = c.href;
                    return acc;
                }, {});

                setContactsLinks(contactsLinks);
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error name: ${error.name}, error message: ${error.message}`);
                } else {
                    throw new Error(String(error));
                }
            }
        };

        fetchContacts();
    }, []);

    return {
        contacts,
        contactsLinks
    };
};

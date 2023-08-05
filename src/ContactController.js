import React, { useState, useEffect } from 'react';
import { generateFakeContactsList } from "./compilation/MockData/fakeContactsList";

const ContactController = ({ children }) => {
    const [selectedContact, setSelectedContact] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [contactsList, setContactsList] = useState([]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedContact(null);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        // Generate the fake contacts list when the component mounts
        const generatedContactsList = generateFakeContactsList(10);
        setContactsList(generatedContactsList);
    }, []);

    const handleContactClick = (conversationId) => {
        // Find the selected conversation/contact based on conversationId and set it as selected
        const selectedConversation = contactsList.find((contact) => contact.getId() === conversationId);
        setSelectedContact(selectedConversation);
    };

    return children({
        selectedContact,
        setSelectedContact,
        contactsList,
        handleContactClick,
    });
};

export default ContactController;

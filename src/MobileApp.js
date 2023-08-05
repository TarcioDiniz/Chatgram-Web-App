import React from 'react';
import ChatContainer from './ChatContainer';
import SideBar from './scenes/global/SidebarContext';

const MobileApp = ({selectedContact, handleContactClick, setSelectedContact, contactsList}) => {
    const handleGoBack = () => {
        setSelectedContact(null); // Set selectedContact to null to go back to the SideBar
    };

    return selectedContact ? (
        <ChatContainer selectedContact={selectedContact} isMobile={true} onGoBack={handleGoBack}/>
    ) : (
        <SideBar onContactClick={handleContactClick} contactsList={contactsList}/>
    );
};

export default MobileApp;

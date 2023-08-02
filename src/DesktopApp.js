import React from 'react';
import ChatContainer from './ChatContainer';
import SideBar from './scenes/global/SidebarContext';
import Home from './scenes/home';
import { Routes, Route } from 'react-router-dom';

const DesktopApp = ({ selectedContact, handleContactClick }) => {
    return (
        <>
            <SideBar onContactClick={handleContactClick} />
            <Routes>
                {selectedContact ? (
                    <Route path="/" element={<ChatContainer selectedContact={selectedContact} isMobile={false} />} />
                ) : (
                    <Route path="/" element={<Home />} />
                )}
            </Routes>
        </>
    );
};

export default DesktopApp;

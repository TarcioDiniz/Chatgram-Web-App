import React from 'react';
import Chat from './scenes/chat';
import Topbar from './scenes/global/Topbar';

const ChatContainer = ({ selectedContact, isMobile, onGoBack }) => {
    const chatContainerStyle = { flexGrow: 1, display: 'flex', flexDirection: 'column' };

    if (!selectedContact) {
        return null; // Render nothing if selectedConversation is null
    }

    const messages = selectedContact.getConversation().messages;

    return (
        <div style={chatContainerStyle}>
            <Topbar selectedContact={selectedContact} onGoBack={onGoBack} />
            <div className="chat-container" style={{ flexGrow: 1 }}>
                <Chat conversations={messages} />
            </div>
        </div>
    );
};

export default ChatContainer;

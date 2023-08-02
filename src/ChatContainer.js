import React from 'react';
import Chat from './scenes/chat';
import Topbar from './scenes/global/Topbar';

const ChatContainer = ({selectedContact, isMobile, onGoBack}) => {
    const chatContainerStyle = {flexGrow: 1, display: 'flex', flexDirection: 'column'};

    if (!selectedContact) {
        return null; // Render nothing if selectedContact is null
    }

    return (
        <div style={chatContainerStyle}>
            <Topbar name={selectedContact.name}
                    message={selectedContact.status}
                    selectedContact={selectedContact}
                    onGoBack={onGoBack}/>
            <div className="chat-container" style={{flexGrow: 1}}>
                <Chat conversations={selectedContact.conversation}/>
            </div>
        </div>
    );
};

export default ChatContainer;

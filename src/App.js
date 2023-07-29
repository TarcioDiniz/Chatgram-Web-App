import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import { Routes, Route } from 'react-router-dom';
import Chat from './scenes/chat';
import SideBar from './scenes/global/SideBar';
import mockDataConversations from './data/MockDataConversations';
import Home from "./scenes/home";

function App() {
    const [selectedContact, setSelectedContact] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    const handleContactClick = (conversationId) => {
        const contact = mockDataConversations.contatos.find(
            (contact) => contact.conversationId === conversationId
        );
        setSelectedContact(contact);
    };

    // Verifica se a largura da tela é menor que 680
    const isMobile = windowWidth < 680;

    return (
        <CssBaseline>
            <div className="app">
                <main className="content" style={{ display: 'flex', flexDirection: 'row' }}>
                    {isMobile ? (
                        // Se for mobile e tiver um contato selecionado, exibe o Chat com a TopBar
                        selectedContact ? (
                            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <Topbar
                                    name={selectedContact.name}
                                    message={selectedContact.status}
                                    avatar={selectedContact.avatar}
                                    selectedContact={selectedContact}
                                />
                                <div className="chat-container" style={{ flexGrow: 1 }}>
                                    <Chat conversations={selectedContact.conversation} />
                                </div>
                            </div>
                        ) : <SideBar onContactClick={handleContactClick} />
                    ) : (
                        <>
                            <SideBar onContactClick={handleContactClick} />
                            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <Topbar
                                    name={selectedContact?.name}
                                    message={selectedContact?.status}
                                    avatar={selectedContact?.avatar}
                                    selectedContact={selectedContact} />
                                <div className="chat-container" style={{ flexGrow: 1 }}>
                                    <Routes>
                                        {selectedContact ? (
                                            <Route path="/" element={<Chat conversations={selectedContact.conversation} />} />
                                        ) : (
                                            <Route path="/" element={<Home />} />
                                        )}
                                    </Routes>
                                </div>
                            </div>
                        </>
                    )}
                </main>
            </div>
        </CssBaseline>
    );
}

export default App;

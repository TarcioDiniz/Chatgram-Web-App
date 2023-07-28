import React, {useState, useEffect} from 'react';
import {CssBaseline} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import {Routes, Route} from "react-router-dom";
import Chat from "./scenes/chat";
import Home from "./scenes/home";
import SideBar from "./scenes/global/SideBar";
import mockDataConversations from "./data/MockDataConversations";

function App() {
    const [selectedContact, setSelectedContact] = useState(null);

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
        const contact = mockDataConversations.contatos.find(contact => contact.conversationId === conversationId);
        setSelectedContact(contact);
    };

    return (
        <CssBaseline>
            <div className="app">
                <main className="content" style={{display: "flex", flexDirection: "row"}}>
                    <SideBar onContactClick={handleContactClick}/>
                    <div style={{flexGrow: 1, display: "flex", flexDirection: "column"}}>
                        <Topbar name={selectedContact?.name} message={selectedContact?.status}
                                avatar={selectedContact?.avatar} selectedContact={selectedContact}/>
                        <div className="chat-container" style={{flexGrow: 1}}>
                            <Routes>
                                {selectedContact ? (
                                    <Route path="/" element={<Chat/>}/>
                                ) : (
                                    <Route path="/" element={<Home/>}/>
                                )}
                            </Routes>
                        </div>
                    </div>
                </main>
            </div>
        </CssBaseline>
    );
}

export default App;

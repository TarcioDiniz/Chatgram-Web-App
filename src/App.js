import React, {useState, useEffect} from 'react';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import MobileApp from './MobileApp';
import DesktopApp from './DesktopApp';
import mockDataConversations from './data/MockDataConversations';

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
        const contact = mockDataConversations.contatos.find((contact) => contact.conversationId === conversationId);
        setSelectedContact(contact);
    };

    const isMobile = windowWidth < theme.breakpoints.values.sm;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <div className="app">
                    <main className="content" style={{ display: 'flex', flexDirection: 'row' }}>
                        {isMobile ? (
                            <MobileApp
                                selectedContact={selectedContact}
                                handleContactClick={handleContactClick}
                                setSelectedContact={setSelectedContact} // Pass setSelectedContact here
                            />
                        ) : (
                            <DesktopApp selectedContact={selectedContact} handleContactClick={handleContactClick} />
                        )}
                    </main>
                </div>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;

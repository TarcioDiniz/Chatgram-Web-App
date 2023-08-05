import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import MobileApp from './MobileApp';
import DesktopApp from './DesktopApp';
import ContactController from './ContactController';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
                <main className="content" style={{ display: 'flex', flexDirection: 'row' }}>
                    <ContactController>
                        {({ selectedContact, setSelectedContact, contactsList, handleContactClick }) => {
                            // Move the code that uses selectedContact inside this function
                            if (selectedContact) {
                                selectedContact.getConversation().messages.forEach((message) => {
                                    message.setIsViewed(selectedContact.getName());
                                    console.log(selectedContact);
                                });
                            }

                            const isMobile = window.innerWidth < theme.breakpoints.values.sm;

                            // Render the MobileApp or DesktopApp based on isMobile
                            return (
                                <>
                                    {isMobile ? (
                                        <MobileApp
                                            selectedContact={selectedContact}
                                            handleContactClick={handleContactClick}
                                            setSelectedContact={setSelectedContact}
                                            contactsList={contactsList}
                                        />
                                    ) : (
                                        <DesktopApp
                                            selectedContact={selectedContact}
                                            handleContactClick={handleContactClick}
                                            contactsList={contactsList}
                                        />
                                    )}
                                </>
                            );
                        }}
                    </ContactController>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;

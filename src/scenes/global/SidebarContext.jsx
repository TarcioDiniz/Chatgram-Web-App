import React, {useEffect, useState} from 'react';
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import InputBase from '@mui/material/InputBase';
import {IconButton, Box} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import colors from '../../colors';
import mockDataConversations from '../../data/MockDataConversations';
import Contact from '../../utilities/contact/Contact';
import AvatarWithBadge from '../../utilities/contact/AvatarWithBadge';

const SidebarContext = ({onContactClick}) => {
    const WIDTH_INTERACTABLE_SIDEBAR = '10vh';

    const [selectedConversationId, setSelectedConversationId] = useState(null);
    const [showAvatar, setShowAvatar] = useState(false);

    const handleContactClick = (conversationId) => {
        setSelectedConversationId(conversationId);
        onContactClick(conversationId);
    };

    const renderContacts = () => {
        return mockDataConversations.contatos.map((contact, index) => (
            <Contact
                key={index}
                contact={contact}
                selectedConversationId={selectedConversationId}
                onClick={handleContactClick}
            />
        ));
    };

    const renderContactsAvatar = () => {
        return mockDataConversations.contatos.map((contact, index) => (
            <AvatarWithBadge
                key={index}
                contact={contact}
                selectedConversationId={selectedConversationId}
                onClick={handleContactClick}
            />
        ));
    };

    const searchBoxStyles = {
        display: 'flex',
        backgroundColor: colors.white1[400],
        borderRadius: '40px',
        width: '100%', // Update the width to 100%
        marginLeft: 1,
    };

    const sidebarStyles = {
        width: showAvatar ? WIDTH_INTERACTABLE_SIDEBAR : 'auto',
        '@media only screen and (max-width:680px)': {
            width: '100%',
        },
    };

    const contactsContainerStyles = {
        overflowY: 'auto',
        height: '93vh',
        '@media only screen and (max-width:680px)': {
            height: '80vh',
        },
    };

    const handleToggleAvatar = () => {
        setShowAvatar((prevShowAvatar) => !prevShowAvatar);
    };

    useEffect(() => {
        const handleResize = () => {
            setShowAvatar(window.innerWidth < 1000 && window.innerWidth > 680);
        };

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Remove resize event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box sx={sidebarStyles}>
            <Sidebar className="custom-pro-sidebar" style={{width: '100%'}}>
                <Menu>
                    <MenuItem>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            {window.innerWidth >= 680 && (
                                <IconButton sx={{p: 1,}} onClick={handleToggleAvatar}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            )}
                            {!showAvatar && (
                                <Box sx={searchBoxStyles}>
                                    <InputBase
                                        sx={{
                                            ml: 2,
                                            flex: 1,
                                            width: '100%', // Set the width to 100%
                                        }}
                                        placeholder="Search"
                                    />
                                    <IconButton type="button" sx={{p: 1}}>
                                        <SearchOutlinedIcon/>
                                    </IconButton>
                                </Box>
                            )}
                        </Box>
                    </MenuItem>
                    {showAvatar ? (
                        <Box
                            sx={{
                                ...contactsContainerStyles,
                                width: WIDTH_INTERACTABLE_SIDEBAR,
                                '@media only screen and (max-width:1520px)': {
                                    width: showAvatar ? '15vh' : 'auto',
                                },
                            }}
                        >
                            {renderContactsAvatar()}
                        </Box>
                    ) : (
                        <Box sx={contactsContainerStyles}>{renderContacts()}</Box>
                    )}
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SidebarContext;

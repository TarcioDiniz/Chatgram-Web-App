import React, { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { SearchOutlined } from '@mui/icons-material';
import { Box, Badge } from '@mui/material'; // Import Badge component
import Avatar from '@mui/material/Avatar'; // Import Avatar component
import colors from '../../colors';
import mockDataConversations from "../../data/MockDataConversations";
import ContactAvatar from "../../utilities/ContactAvatar";

const stringAvatar = (name) => {
    return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`, // Use first letters of first and last names
    };
};

const Sidebar = ({ onContactClick }) => {
    const [selectedConversationId, setSelectedConversationId] = useState(null);

    const handleContactClick = (conversationId) => {
        setSelectedConversationId(conversationId);
        onContactClick(conversationId);
    };


    const renderContacts = () => {
        return mockDataConversations.contatos.map((contact, index) => (
            <Box
                key={index}
                display="flex"
                alignItems="center"
                p={2}
                sx={{
                    cursor: 'pointer',
                    backgroundColor:
                        selectedConversationId === contact.conversationId
                            ? colors.white2[500]
                            : 'transparent',
                    '&:hover': {
                        backgroundColor: colors.white2[500],
                    },
                }}
                onClick={() => handleContactClick(contact.conversationId)}
            >
                {/* Use Avatar component for contact image or fallback to contact name */}
                {<ContactAvatar contact={contact} />}
                <Box sx={{ marginLeft: 2 }}>
                    <div style={{ fontWeight: 'bold' }}>{contact.name}</div>
                    <div style={{ color: colors.white2[600] }}>
                        {contact['last message'].substring(0,15) + '...'}
                    </div>
                </Box>
                {/* Wrap last message date and Badge in a Box */}
                <Box sx={{ marginLeft: 'auto', fontSize: '12px', textAlign: 'right' }}>
                    <div>{contact['last message date']}</div>
                    {/* Add Badge component to display number of unseen messages */}
                    {!contact.hasViewedConversation && (
                        <Badge
                            sx={{ marginRight: '3px' }}
                            badgeContent={contact.unseenMessages}
                            color="success"
                        />
                    )}
                </Box>
            </Box>
        ));
    };

    return (
        <Box>
            <ProSidebar width={0.01}>
                <Menu>
                    {/* Topo do Sidebar */}
                    <MenuItem>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <IconButton sx={{ p: 1 }}>
                                <MenuOutlinedIcon />
                            </IconButton>

                            {/* SEARCH BAR */}
                            <Box
                                display="flex"
                                backgroundColor={colors.white1[400]}
                                borderRadius="40px"
                                sx={{ marginLeft: 1 }}
                            >
                                <InputBase
                                    sx={{
                                        ml: 2,
                                        flex: 1,
                                        width: 200,
                                    }}
                                    placeholder="Search"
                                />
                                <IconButton type="button" sx={{ p: 1 }}>
                                    <SearchOutlined />
                                </IconButton>
                            </Box>
                        </Box>
                    </MenuItem>
                    {/* Wrap renderContacts() in a Box with overflowY set to auto and a height of 100vh */}
                    <Box sx={{ overflowY: 'auto', height: '93vh' }}>
                        {renderContacts()}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;

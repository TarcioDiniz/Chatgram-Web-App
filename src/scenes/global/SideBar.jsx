import React, { useState } from 'react';
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { SearchOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar'; // Import Avatar component
import colors from '../../colors';
import mockDataConversations from "../../data/MockDataConversations";

const stringAvatar = (name) => {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`, // Use first letters of first and last names
    };
};

const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.abs(hash).toString(16).slice(0, 6);
    return '#' + '0'.repeat(6 - color.length) + color;
};

const Sidebar = () => {
    const [selectedConversation, setSelectedConversation] = useState(null);

    const handleContactClick = (index) => {
        setSelectedConversation(index);
    };

    const renderContacts = () => {
        return mockDataConversations.contatos.map((contact, index) => (
            <Box
                key={index}
                display="flex"
                alignItems="center"
                p={2}
                onClick={() => handleContactClick(index)}
                style={{
                    backgroundColor: selectedConversation === index ? '#f0f0f0' : 'inherit',
                }}
            >
                {/* Use Avatar component for contact image or fallback to contact name */}
                {contact.avatar ? (
                    <Avatar src={contact.avatar} alt={contact.name} />
                ) : (
                    <Avatar {...stringAvatar(contact.name)} />
                )}
                <Box sx={{marginLeft: 2}}>
                    <div style={{ fontWeight: 'bold' }}>{contact.name}</div>
                    <div>{contact["last message"]}</div>
                </Box>
                <div style={{ marginLeft: 'auto', fontSize: '12px' }}>{contact["last message date"]}</div>
            </Box>
        ));
    };

    return (
        <Box>
            <ProSidebar>
                <SidebarHeader>
                    {/* Topo do Sidebar */}
                    <Box
                        p={1}
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
                </SidebarHeader>
                <Box>
                    <SidebarContent>
                        {renderContacts()}
                    </SidebarContent>
                </Box>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;

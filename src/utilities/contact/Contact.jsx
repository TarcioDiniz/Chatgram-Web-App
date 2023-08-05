import React from 'react';
import { Box, Badge } from '@mui/material';
import colors from '../../colors';
import ContactAvatar from './ContactAvatar';

const Contact = ({ contact, selectedConversationId, onClick }) => {
    const isSelectedContact = selectedConversationId === contact.getId();
    const unseenMessages = contact.getConversation().countUnseenMessages();
    const timestamp = contact.getConversation().getLastMessageTimestamp();
    const lastMessage = contact.getConversation().getLastMessage()

    return (
        <Box
            key={contact.getId()}
            display="flex"
            alignItems="center"
            p={2}
            sx={{
                cursor: 'pointer',
                backgroundColor: isSelectedContact ? colors.white2[500] : 'transparent',
                '&:hover': {
                    backgroundColor: colors.white2[500],
                },
            }}
            onClick={() => onClick(contact.getId())}
        >
            {/* Avatar */}
            <ContactAvatar contact={contact} />

            {/* Contact Name and Last Message */}
            <Box sx={{ marginLeft: 2, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontWeight: 'bold' }}>{contact.getName()}</div>
                <div style={{ color: colors.white2[600] }}>
                    {lastMessage ? lastMessage.TEXT.substring(0, 15) + '...' : null}
                </div>
            </Box>

            {/* Date and Badge */}
            <Box
                sx={{
                    marginLeft: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    fontSize: '12px',
                    textAlign: 'right',
                    marginBottom: '20px',
                }}
            >
                <div>{timestamp}</div>
                {/* Add Badge component to display the number of unseen messages */}
                {unseenMessages > 0 ? (
                    <Badge
                        sx={{ marginTop: '20px', marginRight: '5px' }}
                        badgeContent={unseenMessages}
                        color="success"
                    />
                ): null}
            </Box>
        </Box>
    );
};

export default Contact;

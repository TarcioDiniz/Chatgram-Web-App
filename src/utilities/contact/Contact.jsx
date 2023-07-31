import React from 'react';
import {Box, Badge} from '@mui/material';
import colors from '../../colors';
import ContactAvatar from './ContactAvatar';

const Contact = ({contact, selectedConversationId, onClick}) => {
    const isSelectedContact = selectedConversationId === contact.conversationId;

    return (
        <Box
            key={contact.conversationId}
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
            onClick={() => onClick(contact.conversationId)}
        >
            {/* Avatar */}
            <ContactAvatar contact={contact}/>

            {/* Contact Name and Last Message */}
            <Box sx={{marginLeft: 2, display: 'flex', flexDirection: 'column'}}>
                <div style={{fontWeight: 'bold'}}>{contact.name}</div>
                <div style={{color: colors.white2[600]}}>
                    {contact['last message'].substring(0, 15) + '...'}
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
                    marginBottom: "20px",
                }}
            >
                <div>{contact['last message date']}</div>
                {/* Add Badge component to display the number of unseen messages */}
                {!contact.hasViewedConversation && (
                    <Badge sx={{marginTop: '20px', marginRight: '5px'}} badgeContent={contact.unseenMessages}
                           color="success"/>
                )}
            </Box>
        </Box>
    );
};

export default Contact;

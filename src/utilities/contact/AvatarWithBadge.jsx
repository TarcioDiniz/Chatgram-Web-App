import React from 'react';
import { Box, Badge } from '@mui/material';
import colors from '../../colors';
import ContactAvatar from './ContactAvatar';

const AvatarWithBadge = ({ contact, selectedConversationId, onClick }) => {
    const isSelectedContact = selectedConversationId === contact.conversationId;

    // The component returns the JSX that will be rendered
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

            {/* Add Badge component to display the number of unseen messages */}
            {!contact.hasViewedConversation ? (
                <Badge color="success" overlap="circular" badgeContent={contact.unseenMessages}>
                    <ContactAvatar contact={contact} />
                </Badge>
            ) : (
                <ContactAvatar contact={contact} />
            )}
        </Box>
    );
};

export default AvatarWithBadge;

import React from 'react';
import { Box, Badge } from '@mui/material';
import colors from '../../colors';
import ContactAvatar from './ContactAvatar';

const AvatarWithBadge = ({ contact, selectedConversationId, onClick }) => {
    const isSelectedContact = selectedConversationId === contact.getId();
    const unseenMessages = contact.getConversation().countUnseenMessages();

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
            {/* Add Badge component to display the number of unseen messages */}
            {unseenMessages > 0 ? (
                <Badge color="success" overlap="circular" badgeContent={unseenMessages}>
                    <ContactAvatar contact={contact} />
                </Badge>
            ) : (
                <ContactAvatar contact={contact} />
            )}
        </Box>
    );
};

export default AvatarWithBadge;
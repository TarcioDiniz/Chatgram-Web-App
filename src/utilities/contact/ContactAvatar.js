import React from 'react';
import Avatar from '@mui/material/Avatar';

const stringAvatar = (name) => {
    if (!name) {
        return {
            children: 'NA', // Use any default text or icon for undefined names
        };
    }

    const initials = name
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase())
        .join('');

    return {
        children: initials, // Use first letters of first and last names
    };
};

const ContactAvatar = ({ contact }) => {
    if (!contact) {
        return null; // Return null or handle the case when contact is undefined or null
    }

    return contact.avatar ? (
        <Avatar src={contact.getAvatar()} alt={contact.getName()} />
    ) : (
        <Avatar sx={{ bgcolor: contact.getColorAvatar() }} {...stringAvatar(contact.getName())} />
    );
};

export default ContactAvatar;

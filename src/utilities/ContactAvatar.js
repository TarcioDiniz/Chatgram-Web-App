import React from 'react';
import Avatar from '@mui/material/Avatar';

const stringAvatar = (name) => {
    return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`, // Use first letters of first and last names
    };
};

const ContactAvatar = ({ contact }) => {
    return contact.avatar ? (
        <Avatar src={contact.avatar} alt={contact.name} />
    ) : (
        <Avatar {...stringAvatar(contact.name)} />
    );
};

export default ContactAvatar;

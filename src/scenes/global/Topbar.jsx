import { Box, IconButton, Typography } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneIcon from "@mui/icons-material/Phone";
import colors from "../../colors";
import ContactAvatar from "../../utilities/contact/ContactAvatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Topbar = ({ name, message, selectedContact, onGoBack }) => {
    if (!selectedContact) {
        return null;
    }

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={0.5}
            sx={{
                background: "#fffff",
            }}
        >
            {/* Left side */}
            <Box display="flex" alignItems="center">
                {/* Back Icon */}
                {onGoBack && (
                    <Box marginLeft={2}>
                        <IconButton onClick={onGoBack}>
                            <ArrowBackIcon />
                        </IconButton>
                    </Box>
                )}
                {/* Circular Avatar */}
                {selectedContact && (
                    <Box marginLeft={2}>
                        <ContactAvatar contact={selectedContact} />
                    </Box>
                )}
                <Box sx={{ marginLeft: 2 }}>
                    {/* Name */}
                    <Typography sx={{ color: colors.white2[900] }} variant="subtitle1" fontWeight="bold">
                        {name}
                    </Typography>
                    {/* Message */}
                    <Typography sx={{ color: colors.white1[700] }} variant="body2">
                        {message}
                    </Typography>
                </Box>
            </Box>

            {/* Right side */}
            <Box display="flex">
                {/* Search Icon */}
                <IconButton>
                    <SearchOutlined />
                </IconButton>

                {/* Call (Phone) Icon */}
                <IconButton>
                    <PhoneIcon />
                </IconButton>

                {/* Vertical Three Dots Icon */}
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;

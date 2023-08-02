import React from "react";
import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const FONT_SIZE_TEXT = "11px";
const FONT_SIZE_DATA = "9px";

const Message = ({ text, timestamp, sender, status }) => {
    const isUser = sender === "user";
    const alignItemsStyle = isUser ? "flex-end" : "flex-start";
    const justifyContentStyle = isUser ? "flex-end" : "flex-start";

    const getStatusIcon = () => {
        if (status === "sent") {
            return <DoneIcon style={{ fontSize: "14px", color: "#888" }} />;
        } else if (status === "received") {
            return <DoneAllIcon style={{ fontSize: "14px", color: "#4CAF50" }} />;
        } else if (status === "viewed") {
            return <DoneAllIcon style={{ fontSize: "14px", color: "#2196F3" }} />;
        } else if (status === "sending") {
            return <AccessTimeIcon sx={{ fontSize: "13px", color: "#888" }} />;
        }
        return null;
    };

    return (
        <Box
            sx={{
                backgroundColor: isUser ? "#DCF8C6" : "#E7E7E7",
                color: "#333",
                borderRadius: isUser ? "16px 16px 0 16px" : "16px 16px 16px 0",
                padding: "8px 16px",
                marginBottom: "8px",
                maxWidth: "80%",
                wordWrap: "break-word",
                fontSize: FONT_SIZE_TEXT,
                alignSelf: alignItemsStyle,
                display: "flex",
                flexDirection: "column",
            }}
            style={{
                wordBreak: "break-all",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                hyphens: "auto",
            }}
        >
            <div style={{ flex: 1 }}>{text}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: justifyContentStyle }}>
                <div style={{ fontSize: FONT_SIZE_DATA, color: "#888" }}>{timestamp}</div>
                <div style={{ marginLeft: "3px" }}>{getStatusIcon()}</div>
            </div>
        </Box>
    );
};

// Rest of the code remains the same...

const ChatRenderer = ({ conversations }) => {
    if (!Array.isArray(conversations) || conversations.length === 0) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                No messages to display.
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                height: "100%",
                width: "100%",
            }}
        >
            {conversations.map((msg, index) => (
                <Message key={index} {...msg} />
            ))}
        </Box>
    );
};

export default ChatRenderer;

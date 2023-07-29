import React from "react";
import Box from "@mui/material/Box";

const FONT_SIZE_TEXT = "11px"
const FONT_SIZE_DATA = "9px"
const MAX_WIDTH = "60%"


const SentMessage = ({ text, timestamp }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#DCF8C6",
                color: "#333",
                borderRadius: "16px 16px 0 16px",
                padding: "8px 16px",
                marginBottom: "8px",
                maxWidth: MAX_WIDTH,
                alignSelf: "flex-end", // Alinha à direita
                wordWrap: "break-word", // Add word-wrap property to wrap long text
                fontSize: FONT_SIZE_TEXT,
            }}
        >
            <div>{text}</div>
            <div style={{ fontSize: FONT_SIZE_DATA, color: "#888" }}>{timestamp}</div>
        </Box>
    );
};

const ReceivedMessage = ({ text, timestamp }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#E7E7E7",
                color: "#333",
                borderRadius: "16px 16px 16px 0",
                padding: "8px 16px",
                marginBottom: "8px",
                maxWidth: "60%",
                alignSelf: "flex-start", // Alinha à esquerda
                wordWrap: "break-word", // Add word-wrap property to wrap long text
                fontSize: FONT_SIZE_TEXT,
            }}
        >
            <div>{text}</div>
            <div style={{ fontSize: FONT_SIZE_DATA, color: "#888" }}>{timestamp}</div>
        </Box>
    );
};


const ChatRenderer = ({ conversations }) => {
    // Check if conversations is an array before using the map function
    if (!Array.isArray(conversations)) {
        // If conversations is not an array, you can render a fallback message or return null
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                No messages to display.
            </Box>
        );
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", overflowY: "auto", height: "100%" }}>
            {conversations.map((msg, index) => {
                if (msg.sender === "user") {
                    return <SentMessage key={index} text={msg.text} timestamp={msg.timestamp} />;
                } else {
                    return <ReceivedMessage key={index} text={msg.text} timestamp={msg.timestamp} />;
                }
            })}
        </Box>
    );
};


export default ChatRenderer;


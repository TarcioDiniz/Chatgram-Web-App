import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Picker from "@emoji-mart/react";
import default_background from "../../assets/background/default-background-black.png";
import applyBackgroundOpacity from "../../utilities/applyBackgroundOpacity";

const Chat = () => {
    const [message, setMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const textFieldRef = useRef(null);

    const handleSendMessage = () => {
        console.log(`Sending message: ${message}`);
        setMessage("");
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };

    const handleEmojiSelect = (emoji) => {
        setMessage((prevMessage) => prevMessage + emoji.native);
    };

    const handleOutsideClick = (event) => {
        if (
            textFieldRef.current &&
            !textFieldRef.current.contains(event.target) &&
            !event.target.classList.contains("emoji-mart")
        ) {
            setShowEmojiPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const backgroundStyle = applyBackgroundOpacity(default_background, 0.8); // Set the desired opacity here

    return (
        <Box sx={backgroundStyle}>
            {showEmojiPicker && (
                <Picker
                    onEmojiSelect={handleEmojiSelect}
                    showPreview={false}
                    showSkinTones={false}
                    style={{ marginBottom: 16 }}
                />
            )}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: 3,
                    padding: 1,
                    width: "80%",

                    // Remove focus and other borders
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 16,
                        "&.Mui-focused": {
                            boxShadow: "none",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                        },
                        "&:hover": {
                            // Add this new CSS rule to remove the border on hover
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                        },
                    },
                }}
            >
                <IconButton onClick={() => setShowEmojiPicker((prevShow) => !prevShow)}>
                    <InsertEmoticonIcon />
                </IconButton>
                <TextField
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Message"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline  // Allow multiline input
                    onKeyPress={handleKeyPress} // Call handleKeyPress on key press
                    ref={textFieldRef} // Assign the ref to the TextField
                />
                <IconButton onClick={handleSendMessage}>
                    <SendIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Chat;

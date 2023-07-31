import React, {useState, useRef} from "react";
import {Box, TextField, IconButton, createTheme, ThemeProvider, useMediaQuery} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import default_background from "../../assets/background/default-background-black.png";
import applyBackgroundOpacity from "../../utilities/applyBackgroundOpacity";
import EmojiPicker from 'emoji-picker-react';

const Chat = ({conversations}) => {
    const [message, setMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const textFieldRef = useRef();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Simple check for mobile screens

    const handleEmojiSelect = (emojiObject) => {
        setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    };

    const theme = createTheme(); // Create an empty theme

    return (
        <ThemeProvider theme={theme}>
            <Box sx={applyBackgroundOpacity(default_background, 0.8)}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: 3,
                    padding: 1,
                    width: isMobile ? "100%" : "80%",
                    "& .MuiOutlinedInput-root": {
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
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                        },
                    },
                }}>
                    <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                        <InsertEmoticonIcon/>
                    </IconButton>
                    {showEmojiPicker && (
                        <Box sx={{position: 'absolute', bottom: 80}}>
                            <EmojiPicker onEmojiClick={handleEmojiSelect}/>
                        </Box>
                    )}
                    <TextField
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Message"
                        variant="outlined"
                        size="small"
                        fullWidth
                        multiline
                        inputRef={textFieldRef}
                    />
                    <IconButton>
                        <SendIcon/>
                    </IconButton>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Chat;

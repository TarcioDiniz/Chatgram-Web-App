import React, { useState, useRef } from "react";
import {
    Box,
    TextField,
    IconButton,
    createTheme,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import default_background from "../../assets/background/default-background-black.png";
import applyBackgroundOpacity from "../../utilities/applyBackgroundOpacity";
import EmojiPicker from "emoji-picker-react";
import ChatRender from "./ChatRenderer";

const Chat = ({ conversations }) => {
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
                <ChatRender conversations={conversations} />
                <Box
                    sx={{
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
                    }}
                >
                    {isMobile ? null : (
                        <IconButton
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        >
                            <InsertEmoticonIcon />
                        </IconButton>
                    )}
                    {showEmojiPicker && (
                        <Box sx={{ position: "absolute", bottom: 80 }}>
                            <EmojiPicker onEmojiClick={handleEmojiSelect} />
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
                        minRows={1} // Definindo o número mínimo de linhas para 1
                        maxRows={3} // Definindo o número máximo de linhas para 3
                        inputRef={textFieldRef}
                        inputProps={{
                            style: {
                                overflowY: "auto", // Adicionando scroll quando necessário
                            },
                        }}
                    />
                    <IconButton>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Chat;

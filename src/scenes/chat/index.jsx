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
import { Message } from "../../data/model/Message";

const Chat = ({ conversations }) => {
    const [message, setMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const textFieldRef = useRef();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Simple check for mobile screens

    const handleEmojiSelect = (emojiObject) => {
        setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    };

    const handleSendMessage = () => {
        // Verificar se a mensagem não está vazia antes de enviar
        if (message.trim() !== "") {
            console.log("Mensagem enviada:", message);

            const text = message;
            const sender = "user";
            const timestampInSeconds = Math.floor(Date.now() / 1000);
            const timestamp = new Date(timestampInSeconds * 1000).toISOString();

            const status = "sending";
            const viewed = false;

            const newMessage = new Message(text, sender, timestamp, status, viewed);

            conversations.push(newMessage);

            setMessage("");
        }
    };

    const handleKeyPress = (event) => {
        // Verificar se a tecla pressionada é o Enter
        if (event.key === "Enter") {
            // Verificar se a tecla Shift também está pressionada (para pular uma linha)
            if (!event.shiftKey) {
                event.preventDefault(); // Impedir o comportamento padrão do Enter (enviar o formulário)
                handleSendMessage();
            }
        }
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
                        onKeyPress={handleKeyPress} // Adicionar o tratamento de pressionar teclas
                        placeholder="Message"
                        variant="outlined"
                        size="small"
                        fullWidth
                        multiline
                        minRows={1} // Definindo o número mínimo de linhas para 1
                        maxRows={3} // Definindo o número máximo de linhas para 3
                        inputRef={textFieldRef}
                    />
                    <IconButton onClick={handleSendMessage}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Chat;

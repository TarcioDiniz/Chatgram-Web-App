import { CssBaseline } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Chat from "./scenes/chat"; // Certifique-se de que o nome do componente esteja capitalizado
import SideBar from "./scenes/global/SideBar";

function App() {
    const name = "John Doe";
    const message = "Online";
    const avatar = "https://placehold.co/600x400";

    return (
        <CssBaseline>
            <div className="app">
                <div className="sidebar"><SideBar /></div>

                <main className="content">
                    <Topbar name={name} message={message} avatar={avatar} />
                    <div className="chat-container">
                        <Routes>
                            <Route path="/" element={<Chat />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </CssBaseline>
    );
}

export default App;

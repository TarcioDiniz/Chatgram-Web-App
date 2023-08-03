import React from "react";
import chatLogoUrl from "../../assets/Image/home.svg";
import LockIcon from "@mui/icons-material/Lock";

const Home = () => {
    const containerStyle = {
        textAlign: "center",
        marginTop: "50px",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const logoStyle = {
        width: "150px",
        height: "150px",
    };

    const chatTitleStyle = {
        marginBottom: "20px",
    };

    const footerStyle = {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        height: "2.5rem",
    };

    const lockIconStyle = {
        marginRight: "5px",
    };

    return (
        <div style={containerStyle}>
            <img src={chatLogoUrl} alt="Balão de Conversa" style={logoStyle}/>
            <h1 style={chatTitleStyle}>Chat Online</h1>
            <footer style={footerStyle}>
                <LockIcon style={lockIconStyle}/>
                <p>End-to-end encrypted</p>
            </footer>
        </div>
    );
};

export default Home;

// Function to apply opacity to a background image
const applyBackgroundOpacity = (backgroundImage, opacity) => {
    return {
        backgroundImage: `linear-gradient(rgba(139, 171, 216, ${opacity}), rgba(139, 171, 216, ${opacity})), url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor: "#8BABD8",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 2,
    };
};

export default applyBackgroundOpacity;
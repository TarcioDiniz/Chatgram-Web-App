const mockDataConversations = () => {
    const generateRandomBoolean = () => Math.random() < 0.5;
    const generateRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Simple hash function
    const hashCode = (str) => {
        let hash = 0;
        if (str.length === 0) return hash;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return hash;
    };

    const contacts = [
        {
            "conversationId": hashCode("João Silva"),
            "name": "João Silva",
            "last message": "Olá, tudo bem?",
            "last message date": "2023-07-27 10:30:00",
            "avatar": null,
            "hasViewedConversation": generateRandomBoolean(),
            "unseenMessages": generateRandomInt(0, 10)
        },
        {
            "conversationId": hashCode("Maria Oliveira"),
            "name": "Maria Oliveira",
            "last message": "Estou a caminho!",
            "last message date": "2023-07-26 15:20:00",
            "avatar": null,
            "hasViewedConversation": generateRandomBoolean(),
            "unseenMessages": generateRandomInt(0, 10)
        },
        // Add more contacts with their respective random fields...
        {
            "conversationId": hashCode("Gabriel Lima"),
            "name": "Gabriel Lima",
            "last message": "Ótima ideia!",
            "last message date": "2023-07-18 22:50:00",
            "avatar": null,
            "hasViewedConversation": generateRandomBoolean(),
            "unseenMessages": generateRandomInt(0, 10)
        }
    ];

    // Generate more random contacts to reach a total of 10
    while (contacts.length < 10) {
        const randomName = `Contact ${contacts.length + 1}`;
        contacts.push({
            "conversationId": hashCode(randomName),
            "name": randomName,
            "last message": "Random message",
            "last message date": "2023-07-27 12:00:00",
            "avatar": null,
            "hasViewedConversation": generateRandomBoolean(),
            "unseenMessages": generateRandomInt(0, 10)
        });
    }

    return { "contatos": contacts };
};

export default mockDataConversations();

const mockDataConversations = () => {
    // Funções auxiliares para gerar dados randômicos
    const generateRandomBoolean = () => Math.random() < 0.5;
    const generateRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const generateRandomDate = () => {
        const year = 2023;
        const month = generateRandomInt(1, 12);
        const day = generateRandomInt(1, 28);
        const hour = generateRandomInt(0, 23);
        const minute = generateRandomInt(0, 59);
        const second = generateRandomInt(0, 59);
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
    };
    const generateRandomMessage = () => {
        const messageLength = generateRandomInt(5, 100);
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let message = '';
        for (let i = 0; i < messageLength; i++) {
            message += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return message;
    };
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

    const contacts = [];

    // Gerar conversas randômicas para cada contato
    for (let i = 0; i < 50; i++) {
        const name = `Contact ${i + 1}`;
        const conversation = [];
        const numMessages = generateRandomInt(5, 20); // Número de mensagens randômicas por contato

        for (let j = 0; j < numMessages; j++) {
            const sender = generateRandomBoolean() ? "user" : "other";
            const text = generateRandomMessage();
            const timestamp = generateRandomDate();

            conversation.push({ text, sender, timestamp });
        }

        contacts.push({
            "conversationId": hashCode(name),
            "name": name,
            "last message": conversation[numMessages - 1].text,
            "last message date": conversation[numMessages - 1].timestamp,
            "avatar": null,
            "hasViewedConversation": generateRandomBoolean(),
            "unseenMessages": generateRandomInt(0, 10),
            "status": generateRandomBoolean() ? "online" : "offline",
            "conversation": conversation,
        });
    }

    return { "contatos": contacts };
};

export default mockDataConversations();

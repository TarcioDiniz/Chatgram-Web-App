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

    const generateRandomStatus = (index, totalMessages) => {
        if (index === totalMessages - 1) {
            // Last message, status will be "viewed"
            return "viewed";
        } else if (index % 2 === 0) {
            // Even-indexed messages, status will be "sending"
            return "sending";
        } else {
            // Odd-indexed messages, status will be randomly "sent" or "received"
            return Math.random() < 0.5 ? "sent" : "received";
        }
    };


    const generateRandomConversation = () => {
        const conversation = [];
        const numMessages = generateRandomInt(5, 20); // Random number of messages in each conversation

        for (let j = 0; j < numMessages; j++) {
            const sender = j % 2 === 0 ? "user" : "other"; // Alternate between user and other as sender
            const text = generateRandomMessage();
            const timestamp = generateRandomDate();
            const status = generateRandomStatus(j, numMessages); // Generate status based on the index and total messages

            conversation.push({ text, sender, timestamp, status });
        }

        // Sort conversation by timestamp in ascending order (oldest to newest)
        conversation.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

        return conversation;
    };

    const contacts = [];

    // Gerar conversas randômicas para cada contato
    for (let i = 0; i < 50; i++) {
        const name = `Contact ${i + 1}`;
        const conversation = generateRandomConversation();

        contacts.push({
            "conversationId": hashCode(name),
            "name": name,
            "last message": conversation[conversation.length - 1].text,
            "last message date": conversation[conversation.length - 1].timestamp,
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

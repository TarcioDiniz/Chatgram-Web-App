"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFakeMessages = void 0;
const Message_1 = require("../model/Message");
// Função para gerar uma data e hora aleatória entre 'start' e 'end'
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function generateRandomBoolean() {
    return Math.random() < 0.5;
}
// Função para gerar dados fictícios de Message
function generateFakeMessages(sender, numMessages) {
    const fakeMessages = [];
    const senders = [sender, "user"];
    const statuses = ["sent", "received", "viewed", "sending"];
    for (let i = 0; i < numMessages; i++) {
        const sender = senders[Math.floor(Math.random() * senders.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const text = `Message ${i + 1}`;
        const timestampInSeconds = Math.floor(Date.now() / 1000); // Obtendo o timestamp em segundos
        const timestamp = new Date(timestampInSeconds * 1000).toISOString(); // Convertendo para milissegundos e depois para ISO8601
        const viewed = generateRandomBoolean();
        const message = new Message_1.Message(text, sender, timestamp, status, viewed);
        fakeMessages.push(message);
    }
    return fakeMessages;
}
exports.generateFakeMessages = generateFakeMessages;

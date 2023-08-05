"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFakeConversation = void 0;
const fakeMessages_1 = require("./fakeMessages");
const Conversation_1 = require("../model/Conversation");
// Função para gerar dados fictícios de Conversation
function generateFakeConversation(sender, numMessages) {
    const fakeMessages = (0, fakeMessages_1.generateFakeMessages)(sender, numMessages);
    return new Conversation_1.Conversation(fakeMessages);
}
exports.generateFakeConversation = generateFakeConversation;

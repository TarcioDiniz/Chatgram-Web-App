"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFakeContactsList = void 0;
const fakeConversation_1 = require("./fakeConversation");
const Contact_1 = require("../model/Contact");
// Função auxiliar para gerar um ID único
function generateUniqueId(existingIds) {
    let id = "";
    do {
        id = Math.random().toString(36).substr(2, 9);
    } while (existingIds.has(id));
    return id;
}
// Função para gerar uma lista de contatos fictícios
function generateFakeContactsList(numContacts) {
    const fakeContacts = [];
    const existingIds = new Set();
    const names = ["Alice", "Miguel", "Sofia", "Arthur", "Laura", "Davi", "Isabella", "Pedro", "Helena", "Gabriel"];
    for (let i = 0; i < numContacts; i++) {
        const id = generateUniqueId(existingIds);
        existingIds.add(id);
        const name = names[Math.floor(Math.random() * names.length)];
        const avatar = Math.random() < 0.5 ? "avatar.jpg" : null;
        const statusOptions = ["Online", "Offline", "Busy"];
        const status = statusOptions[Math.floor(Math.random() * statusOptions.length)];
        // Gerar uma conversa fictícia com 5 mensagens
        const conversation = (0, fakeConversation_1.generateFakeConversation)(name, 5);
        const contact = new Contact_1.Contact(id, name, avatar, status, conversation);
        fakeContacts.push(contact);
    }
    return fakeContacts;
}
exports.generateFakeContactsList = generateFakeContactsList;

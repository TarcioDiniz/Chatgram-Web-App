import {generateFakeConversation} from "./fakeConversation";
import {Contact} from "../model/Contact";

// Função auxiliar para gerar um ID único
function generateUniqueId(existingIds: Set<string>): string {
    let id = "";
    do {
        id = Math.random().toString(36).substr(2, 9);
    } while (existingIds.has(id));
    return id;
}

// Função para gerar uma lista de contatos fictícios
export function generateFakeContactsList(numContacts: number): Contact[] {
    const fakeContacts: Contact[] = [];
    const existingIds: Set<string> = new Set();
    const names = ["Alice", "Miguel", "Sofia", "Arthur", "Laura", "Davi", "Isabella", "Pedro", "Helena", "Gabriel"];

    for (let i = 0; i < numContacts; i++) {
        const id = generateUniqueId(existingIds);
        existingIds.add(id);
        const name = names[Math.floor(Math.random() * names.length)];
        const avatar = Math.random() < 0.5 ? "avatar.jpg" : null;
        const statusOptions = ["Online", "Offline", "Busy"];
        const status = statusOptions[Math.floor(Math.random() * statusOptions.length)];

        // Gerar uma conversa fictícia com 5 mensagens
        const conversation = generateFakeConversation(name, 5);

        const contact = new Contact(id, name, avatar, status, conversation);
        fakeContacts.push(contact);
    }

    return fakeContacts;
}

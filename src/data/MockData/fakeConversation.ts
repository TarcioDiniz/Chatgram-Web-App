import {Message} from "../model/Message";
import {generateFakeMessages} from "./fakeMessages";
import {Conversation} from "../model/Conversation";

// Função para gerar dados fictícios de Conversation
export function generateFakeConversation(sender: string, numMessages: number): Conversation {
    const fakeMessages: Message[] = generateFakeMessages(sender, numMessages);
    return new Conversation(fakeMessages);
}

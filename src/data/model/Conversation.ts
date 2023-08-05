import { Message } from "./Message";

export class Conversation {
    private _messages: Message[];

    constructor(messages: Message[]) {
        this._messages = messages;
    }

    public get messages(): Message[] {
        return this._messages;
    }

    public set messages(newMessages: Message[]) {
        this._messages = this._messages.concat(newMessages);
    }

    // Method to get the last message
    public getLastMessage(): Message | null {
        return this._messages.length === 0 ? null : this._messages[this._messages.length - 1];
    }

    // Method to get the timestamp of the last message
    public getLastMessageTimestamp(): string | null {
        const lastMessage = this.getLastMessage();
        return lastMessage ? lastMessage.getTimestamp() : null;
    }

    // Method to get the status of the last message
    public getLastMessageStatus(): string | null {
        const lastMessage = this.getLastMessage();
        return lastMessage ? lastMessage.getStatus() : null;
    }

    // Method to count the number of unseen (privateViewed = false) messages
    public countUnseenMessages(): number {
        return this._messages.filter((message) => !message.isViewed() && message.getSender() !== "user").length;
    }

    // Method to get all unseen (privateViewed = false) messages
    public unseenMessages(): Message[] {
        return this._messages.filter((message) => !message.isViewed());
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversation = void 0;
class Conversation {
    constructor(messages) {
        this._messages = messages;
    }
    get messages() {
        return this._messages;
    }
    set messages(newMessages) {
        this._messages = this._messages.concat(newMessages);
    }
    // Method to get the last message
    getLastMessage() {
        return this._messages.length === 0 ? null : this._messages[this._messages.length - 1];
    }
    // Method to get the timestamp of the last message
    getLastMessageTimestamp() {
        const lastMessage = this.getLastMessage();
        return lastMessage ? lastMessage.getTimestamp() : null;
    }
    // Method to get the status of the last message
    getLastMessageStatus() {
        const lastMessage = this.getLastMessage();
        return lastMessage ? lastMessage.getStatus() : null;
    }
    // Method to count the number of unseen (privateViewed = false) messages
    countUnseenMessages() {
        return this._messages.filter((message) => !message.isViewed() && message.getSender() !== "user").length;
    }
    // Method to get all unseen (privateViewed = false) messages
    unseenMessages() {
        return this._messages.filter((message) => !message.isViewed());
    }
}
exports.Conversation = Conversation;

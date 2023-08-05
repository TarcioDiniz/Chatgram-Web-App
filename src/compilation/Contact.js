"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    constructor(ID, NAME, AVATAR, STATUS, CONVERSATION) {
        this.ID = ID;
        this.NAME = NAME;
        this.AVATAR = AVATAR;
        this.STATUS = STATUS;
        this.CONVERSATION = CONVERSATION;
    }
    getId() {
        return this.ID;
    }
    getName() {
        return this.NAME;
    }
    getAvatar() {
        return this.AVATAR;
    }
    getStatus() {
        return this.STATUS;
    }
    getConversation() {
        return this.CONVERSATION;
    }
    hasAvatar() {
        return this.AVATAR !== null;
    }
}
exports.Contact = Contact;

import {Conversation} from "./Conversation";

class Contact {
    public readonly ID: string;
    public readonly AVATAR: string;
    public readonly STATUS: string;
    public readonly CONVERSATION: Conversation;

    constructor(
        ID: string,
        AVATAR: string,
        STATUS: string,
        CONVERSATION: Conversation
    ) {
        this.ID = ID;
        this.AVATAR = AVATAR;
        this.STATUS = STATUS;
        this.CONVERSATION = CONVERSATION;
    }
}
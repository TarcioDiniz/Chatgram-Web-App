import {Conversation} from "./Conversation";
import {
    deepOrange,
    blue,
    blueGrey,
    brown,
    cyan,
    deepPurple,
    green,
    grey,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    orange,
    pink,
    purple,
    red,
    teal,
    yellow
} from '@mui/material/colors';

const colors = [
    deepOrange[500],
    blue[500],
    blueGrey[500],
    brown[500],
    cyan[500],
    deepPurple[500],
    green[500],
    grey[500],
    indigo[500],
    lightBlue[500],
    lightGreen[500],
    lime[500],
    orange[500],
    pink[500],
    purple[500],
    red[500],
    teal[500],
    yellow[500],
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export class Contact {
    public readonly ID: string;
    public readonly NAME: string;
    public readonly AVATAR: string | null;
    public readonly STATUS: string;
    public readonly CONVERSATION: Conversation;
    private readonly _ColorAvatar = getRandomColor();

    constructor(
        ID: string,
        NAME: string,
        AVATAR: string | null,
        STATUS: string,
        CONVERSATION: Conversation
    ) {
        this.ID = ID;
        this.NAME = NAME;
        this.AVATAR = AVATAR;
        this.STATUS = STATUS;
        this.CONVERSATION = CONVERSATION;
    }

    public getColorAvatar(): string {
        return this._ColorAvatar
    }

    public getId(): string {
        return this.ID;
    }

    public getName(): string {
        return this.NAME;
    }

    public getAvatar(): string | null {
        return this.AVATAR;
    }

    public getStatus(): string {
        return this.STATUS;
    }

    public getConversation(): Conversation {
        return this.CONVERSATION;
    }

    public hasAvatar(): boolean {
        return this.AVATAR !== null;
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const colors_1 = require("@mui/material/colors");
const colors = [
    colors_1.deepOrange[500],
    colors_1.blue[500],
    colors_1.blueGrey[500],
    colors_1.brown[500],
    colors_1.cyan[500],
    colors_1.deepPurple[500],
    colors_1.green[500],
    colors_1.grey[500],
    colors_1.indigo[500],
    colors_1.lightBlue[500],
    colors_1.lightGreen[500],
    colors_1.lime[500],
    colors_1.orange[500],
    colors_1.pink[500],
    colors_1.purple[500],
    colors_1.red[500],
    colors_1.teal[500],
    colors_1.yellow[500],
];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
class Contact {
    constructor(ID, NAME, AVATAR, STATUS, CONVERSATION) {
        this._ColorAvatar = getRandomColor();
        this.ID = ID;
        this.NAME = NAME;
        this.AVATAR = AVATAR;
        this.STATUS = STATUS;
        this.CONVERSATION = CONVERSATION;
    }
    getColorAvatar() {
        return this._ColorAvatar;
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

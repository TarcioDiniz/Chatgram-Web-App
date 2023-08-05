"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor(TEXT, SENDER, TIMESTAMP, STATUS, Viewed) {
        this.TEXT = TEXT;
        this.SENDER = SENDER;
        this.TIMESTAMP = TIMESTAMP;
        this.STATUS = STATUS;
        this._viewed = Viewed;
    }
    getText() {
        return this.TEXT;
    }
    getSender() {
        return this.SENDER;
    }
    getTimestamp() {
        return this.TIMESTAMP;
    }
    getStatus() {
        return this.STATUS;
    }
    isViewed() {
        return this._viewed;
    }
}
exports.Message = Message;

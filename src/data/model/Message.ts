export class Message {
    public readonly TEXT: string;
    public readonly SENDER: string;
    public readonly TIMESTAMP: string;
    public STATUS: string;
    private _viewed: boolean;

    constructor(
        TEXT: string,
        SENDER: string,
        TIMESTAMP: string,
        STATUS: string,
        Viewed: boolean
    ) {
        this.TEXT = TEXT;
        this.SENDER = SENDER;
        this.TIMESTAMP = TIMESTAMP;
        this.STATUS = STATUS;
        this._viewed = Viewed;
    }

    public getText(): string {
        return this.TEXT;
    }

    public getSender(): string {
        return this.SENDER;
    }

    public getTimestamp(): string {
        return this.TIMESTAMP;
    }

    public getStatus(): string {
        return this.STATUS;
    }

    public isViewed(): boolean {
        return this._viewed;
    }

    public setIsViewed(nameContact: string) {
        if (nameContact === this.SENDER) {
            this._viewed = true;
            this.STATUS = "viewed";
        }
    }
}
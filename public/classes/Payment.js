export class Payment {
    constructor(c, d, a) {
        this.format = () => {
            return `${this.recipient.name} is owed $ ${this.amount} for ${this.details}`;
        };
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
}

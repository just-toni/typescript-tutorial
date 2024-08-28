import { HasFormatter } from "../interfaces/hasFormatter.js";

export class Payment implements HasFormatter{
  readonly recipient: {name?: string, uid?: string|number};
  private details:string;
  public amount: number;

  constructor(c:{name?: string, uid?: string|number}, d: string, a:number){
    this.recipient = c;
    this.details = d;
    this.amount = a
  }

  format = ():string => {
    return `${this.recipient.name} is owed $ ${this.amount} for ${this.details}`;
  }
}
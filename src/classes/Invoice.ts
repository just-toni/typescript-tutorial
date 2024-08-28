import { HasFormatter } from "../interfaces/hasFormatter.js";

export class Invoice implements HasFormatter{
  readonly client: {name?: string, uid?: string|number};
  private details:string;
  public amount: number;

  constructor(c:{name?: string, uid?: string|number}, d: string, a:number){
    this.client = c;
    this.details = d;
    this.amount = a
  }
 
  format() {
    return `${this.client.name} owes $ ${this.amount} for ${this.details}`;
  }
}
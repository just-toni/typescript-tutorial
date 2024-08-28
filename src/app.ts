// interfaces

import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/hasFormatter.js'
import { ListTemplate } from './classes/ListTemplate.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice({name: 'toni'}, 'photos', 100);
docTwo = new Payment({name: 'toni'}, 'photos', 100);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

const invoice1 = new Invoice({name: "Tyed"}, "Grapefruit", 1000);
let allInvoices: Invoice[];
allInvoices = []
allInvoices.push(invoice1);

let anchor = document.querySelector('a');
console.log(anchor?.href);

const form = document.querySelector('form');

console.log(form?.children);

const ul = document.querySelector('ul');
const list = new ListTemplate(ul!);

let type = document.querySelector('#type') as HTMLSelectElement;
let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
let deets = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

form?.addEventListener('submit', (e:Event) => {
  e.preventDefault();
  let one: HasFormatter;

  let values: [object, string, number] = [{name: tofrom.value}, deets.value, amount.valueAsNumber];

  if(type.value === 'Invoice'){
    one = new Invoice(...values);
  } else{
    one = new Payment(...values); 
  }
  list.render(one, type.value, 'end');
  
  // console.log(one.format());
}
);

const generateUID = <T extends Object>(obj: T) => {
  let uid = Math.floor(Math.random() * 999);
  return {...obj, uid};
}

let per1 = generateUID({name:'mario', age:20});
let per2 = generateUID({name:'mario', age:20});
console.log(per1.uid)

enum TrialPart {BOOK, LETTER, MAGAZINE};

interface Trial<T, Y, P>{
  uid: Y,
  per: T,
  class: P
  type: TrialPart
}

const first: Trial<boolean, number, Payment> = {
  uid: 19,
  per: false,
  class: new Payment({
    name: 'pope',
    uid: 9
  },
  "poll", 1000),
  type: TrialPart.MAGAZINE
}

// tuples
let arr = ['ryu', 0, false];
let par: [string, boolean, number] = ['Stred', false, 0]
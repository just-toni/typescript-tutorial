// interfaces
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
let docOne;
let docTwo;
docOne = new Invoice({ name: 'toni' }, 'photos', 100);
docTwo = new Payment({ name: 'toni' }, 'photos', 100);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const invoice1 = new Invoice({ name: "Tyed" }, "Grapefruit", 1000);
let allInvoices;
allInvoices = [];
allInvoices.push(invoice1);
let anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
const form = document.querySelector('form');
console.log(form === null || form === void 0 ? void 0 : form.children);
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
let type = document.querySelector('#type');
let tofrom = document.querySelector("#tofrom");
let deets = document.querySelector("#details");
let amount = document.querySelector("#amount");
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    let one;
    let values = [{ name: tofrom.value }, deets.value, amount.valueAsNumber];
    if (type.value === 'Invoice') {
        one = new Invoice(...values);
    }
    else {
        one = new Payment(...values);
    }
    list.render(one, type.value, 'end');
    // console.log(one.format());
});
const generateUID = (obj) => {
    let uid = Math.floor(Math.random() * 999);
    return Object.assign(Object.assign({}, obj), { uid });
};
let per1 = generateUID({ name: 'mario', age: 20 });
let per2 = generateUID({ name: 'mario', age: 20 });
console.log(per1.uid);
var TrialPart;
(function (TrialPart) {
    TrialPart[TrialPart["BOOK"] = 0] = "BOOK";
    TrialPart[TrialPart["LETTER"] = 1] = "LETTER";
    TrialPart[TrialPart["MAGAZINE"] = 2] = "MAGAZINE";
})(TrialPart || (TrialPart = {}));
;
const first = {
    uid: 19,
    per: false,
    class: new Payment({
        name: 'pope',
        uid: 9
    }, "poll", 1000),
    type: TrialPart.MAGAZINE
};
// tuples
let arr = ['ryu', 0, false];
let par = ['Stred', false, 0];

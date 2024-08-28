let character = 'toni';
let age = 20;
let isSingle = true;

character = "poppy";

age = 17

// isSingle = 19
isSingle = false

const area = (radius:number) => {
    return radius*radius*Math.PI;
}
console.log(area(4.5));

const array = ['op', 'pol']

array[1] = 'mui'


let flavors: string[];
flavors = [];
flavors[0] = "cookies'n'cream"

console.log("test")

let add: Function;
add = (a: number, b:number, c:StringOrNum, d=10): void  => {
    console.log(a+b+d, ":", c);
}
add(4,5, '7', 9);

const minus: Function = (a:number,b:number):number => {
    return a - b;
}
let result = minus(18,10);
result = "0";

type StringOrNum = string|number;
type UserDeets = {name: string, uid: StringOrNum, habitat:addy};
type addy = {address:string, city: string, zipcode:StringOrNum}

// declare
let hello: (a:string, b:boolean) => string;
// initialise
hello = (word:string, truthe:boolean) => {
    return "pop";
}


interface isPerson{
    name: string;
    age: number;
    speak(lang: string): void;
    spend(amount: number): number;
}

const me: isPerson = {
    name: 'toni',
    age: 20,
    speak(text: string): void{
        console.log("i speak english");
    },
    spend(amount: number): number{
        console.log("I spent $", amount);
        return amount;
    }
}

console.log(me);

const greetPerson = (person: isPerson) => {
    console.log("hello", person.name);
    console.log(person.age);
}
greetPerson({
    name: "Toni", 
    age: 9, 
    speak(lang: string){
        console.log(lang);
    }, 
    spend(amount: number){
        return amount;
    }
})

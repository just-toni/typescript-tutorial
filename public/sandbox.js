"use strict";
let character = 'toni';
let age = 20;
let isSingle = true;
character = "poppy";
age = 17;
// isSingle = 19
isSingle = false;
const area = (radius) => {
    return radius * radius * Math.PI;
};
console.log(area(4.5));
const array = ['op', 'pol'];
array[1] = 'mui';
let flavors;
flavors = [];
flavors[0] = "cookies'n'cream";
console.log("test");
let add;
add = (a, b, c, d = 10) => {
    console.log(a + b + d, ":", c);
};
add(4, 5, '7', 9);
const minus = (a, b) => {
    return a - b;
};
let result = minus(18, 10);
result = "0";
// declare
let hello;
// initialise
hello = (word, truthe) => {
    return "pop";
};
const me = {
    name: 'toni',
    age: 20,
    speak(text) {
        console.log("i speak english");
    },
    spend(amount) {
        console.log("I spent $", amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log("hello", person.name);
    console.log(person.age);
};
greetPerson({
    name: "Toni",
    age: 9,
    speak(lang) {
        console.log(lang);
    },
    spend(amount) {
        return amount;
    }
});

// Datatypes
/*
1. Our system saves different kinds of data in boxes(variables), like numbers or words.
2. It’s important to know what kind of information/data is in each box and what it means.
*/

console.log(2 
    +
     2) // code readability should be high

// console.log("Sourabh")


// Primitive

// 7 types :- String, Number, Boolean, null, undefined, Symbol, BigInt

const firstName = "sourabh";    // " "

const score = 100;              // complete number
const scoreValue = 100.3;       // decimal value

const isLoggedIn = true;        // true/false

const outsideTemp = null;       // standalone value (variable created but value as empty - intentionally)

let userEmail;                  // undefined (variable created but empty)

const id = Symbol('123');       // unique value

const bigNumber = 3456543576654356754n;


console.table([firstName, score, scoreValue, isLoggedIn, outsideTemp, userEmail, id, bigNumber]);


// checking type of data
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object


// Non-Primitive (Reference)

// 3 types :- Array, Objects, Functions

const heros = ["ironman", "captain-america", "thor", "hulk"];

let myObj = {
    name: "sourabh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
myFunction();

console.log(myFunction);            // can change to view output
console.log(typeof myFunction);     // can change to view type of data

// https://262.ecma-international.org/5.1/#sec-11.4.3
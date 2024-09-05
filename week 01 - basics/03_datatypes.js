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

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const firstName = "sourabh";

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object










const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
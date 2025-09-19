// Primitive datatyes :-
// String, Number, Boolean, null, undefined, Symbol, BIGINT;

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null // object
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(typeof id);
console.log(id === anotherId); // false not same;
const bigNumber = 45415451451544658454515541n;
console.log(typeof bigNumber)

// Reference(Non-Primitive) :-
//Array, objects, Functions;

const heros = ["shaktiman", "naagraj", "doga"]; // Arrays

let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Yuvraj Singh")
}


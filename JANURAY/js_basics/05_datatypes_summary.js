// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

//for calling the bigint just put n in the last
const bigNumber = 234789543456789654n

//reference(non primitive)

//Array,Objects, Function

const heros = ['ironman','batman','spiderman'];
let myObj = {
    name : "love",
    age : 21
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);

 



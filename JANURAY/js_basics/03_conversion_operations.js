let score = 33 // first try
let score2 = "sam" //second try

console.log(typeof score);
console.log(typeof score2);

let valueInNumber = Number(score2);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN [not a number]
// true => 1 
// false => 0

let isLoggedIn = "SAM"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "" => false
// "sam" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2); => addition
// console.log(2-2); => subtraction
// console.log(2*2); => multiplication
// console.log(2**3); => power
// console.log(2/3); => division
// console.log(2%3); => mod

let str1 = "Hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3+4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2 , num3
num1 = num2 = num3 = 2+2 //bad practise 

let gamecounter = 100
++gamecounter;
console.log(gamecounter);

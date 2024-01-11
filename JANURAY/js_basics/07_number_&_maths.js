const score = 200;
console.log(score)

const balance = new Number(100);
console.log(balance)

//convert to string and checking th typeof:
console.log(typeof(balance.toString()));

//for getting the output in decimal
console.log(balance.toFixed(1));

//only take the precision number 
const otherNumber = 123.4321
console.log(otherNumber.toPrecision(4))

const hunderds = 1000000
// this used for commas and all by default they are american system
console.log(hunderds.toLocaleString());

//but we can convert this to INR as well
console.log(hunderds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++

console.log(Math);

//absolute value of the number
console.log(Math.abs(-4));

//round of the number
console.log(Math.round(4.6));

//always take the upper number
console.log(Math.ceil(4.2));

//always take the lower number
console.log(Math.floor(4.9))

//min value
console.log(Math.min(4,3,8,9))

//max value
console.log(Math.max(4,3,8,9))

//random => limit between 0 and 1 
console.log(Math.random())

// mutipling by 10 means converting random value from point value to one digit 
// and  + 1 means cause we dont want 0 so thats why we are adding
console.log((Math.random()*10) + 1)

//now we want the number in floor
console.log(Math.floor(Math.random()*10) + 1);


//for setting the condition for min and max 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)

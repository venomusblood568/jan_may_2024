// ++++++++++++++++++++++++  DATE ++++++++++++++++++++++++++++++++
let mydate = new Date()

//default values
console.log(mydate)

//converting the default value to Indian standard 
console.log(mydate.toString())

//mm-dd-yy and time
console.log(mydate.toLocaleString())

//type of my date is object
console.log(typeof mydate);

// month start from 0 in js
let myCreatedDate = new Date(2024,0,23)
console.log(myCreatedDate);

//
let myCreatedDate2 = new Date(2023,0,23,5,3)

let myCreatedDate3 = new Date("2024-01-11")
console.log(myCreatedDate3.toLocaleString());


//the output of this will be in milliseconds
let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate3.getTime())

//now for converting the millisecond in seconds
console.log(Math.floor(Date.now()/10000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

//additional condition and customization can be done 
// we will see when needed
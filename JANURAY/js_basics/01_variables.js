// const => once defined it cant be changed 
const accountID = 1234534
let accountEmail = "sam@googly.com"
var accountPassword = "145689"
accountCity = "tata"

//i can define the name and leave for future use in case 
let accountState

//see here we have updated the certain data 
accountEmail = "kitten@googly.com"
accountPassword = "0987659"
accountCity = "heart"

//for printing 
console.log(accountID);

/*
prefer not to use var 
because of issue in block scope and function scope 

*/

//aother method for printing the data
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);
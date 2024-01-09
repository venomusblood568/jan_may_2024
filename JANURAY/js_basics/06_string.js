const name = 'GOURAV ANAND'
const repoCount = 23

//basic way of printing / cantination
console.log(name + repoCount);

//this is modern way of writing string
console.log(`hello world i am ${name} and i have main ${repoCount} repo on my github account till now`);

const gameName = new String('gourav-anand-jha')

//for seeing the indexing of the string
console.log(gameName[0])

// Print the prototype of the object referenced by gameName
console.log(gameName.__proto__)

//count the length of the const
console.log(gameName.length)

//for converting the string to uppercase
console.log(gameName.toUpperCase())

//for finding the char at index
console.log(gameName.charAt(2));

//for checking the index of the char
console.log(gameName.indexOf('j'));

//for spliting the in string
console.log(gameName.split('-'));

//for printing the char from limits
//note => negative value input is not allowed 
const newString = gameName.substring(0,4);
console.log(newString);

//for priting the char but nagtive is also allowed
const new2String = gameName.slice(-16,4);
console.log(new2String);

const string23 = "             sam      is             crazy           ";
console.log(string23);
//for removing the extra space from the string [starting & ending space]
console.log(string23.trim());

const url = "https://jaishreeram.com/jai%20mahakal"

//for replacing certain keyword from string
console.log(url.replace('%20','-'))

//for checking if the word include output will be true if its present otherwise false
console.log(url.includes('mahakal'))



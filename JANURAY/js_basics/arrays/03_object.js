//singleton => A singleton is a design pattern that ensures a class has only one instance and provides a global point of access to that instance.

//Object.create

//object literals

//Symbol => In JavaScript, a symbol is a primitive data type representing a unique and immutable identifier often used as an object property key.
const mySym = Symbol("key1")
console.log(typeof mySym)

const JsUser = {
    name : "Gourav",
    "full name" : "Gourav Anand",
    [mySym] : "mykey2",
    age : 21,
    location : "RACHI",
    email: "midnight@gmail.com",
    isLoggedIn: false,
    lastloginDays : ['Monday','wednesday']
}

//differnt appraoch of finding and fetching the same thing for differnt situtaion
// Prints the type of the variable JsUser
console.log(typeof JsUser);

// Prints the value of the email property of the JsUser object
console.log(JsUser.email);

// Prints the value of the email property using bracket notation
console.log(JsUser["email"]);

// Attempts to access the full name property using bracket notation (may not work correctly if the property name has a space)
console.log(JsUser["full name"]);

// Attempts to access a property using a symbol (mySym) as the key
console.log(JsUser[mySym]);

JsUser.email = "sams_kitten@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.g1 = function(){
    console.log("Hello JS user");
}

JsUser.g2 = function(){
    console.log(`hello Js user , ${this.name}`)
}
//console.log(JsUser.g1());
//console.log(JsUser.g2());
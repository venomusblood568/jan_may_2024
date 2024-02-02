let myMoto = "diediedie                    ";
let mylife = "suffer                    ";

console.log(myMoto.trueLength); // Commented out, but seems like you're trying to access a property "trueLength" which is not defined.

let myproblems = ["headache", "blood"];

let place = {
    headache: "head",
    blood: "hand",

    getbloodpower: function(){
        console.log(`blood is coming out of ${this.blood}`);
    }
}


Object.prototype.sammy = function(){
    console.log(`blood is in everyone's body`);
}

Array.prototype.sammy_world = function(){
    console.log(`sam is a manic`);
}

place.sammy();          // Outputs: "blood is in everyone's body"
myproblems.sammy();     // Outputs: "blood is in everyone's body"
myproblems.sammy_world();// Outputs: "sam is a manic"

const need = {
    name: "coffee",
    email: "coffee@gmail.com"  
}

const cook = {
    maketea: true
}

const ingredient_need = {
    isAvailable: false
}

const order = {
    make_tea_order: 'chai is cooking',
    temperature: true,
    __proto__: ingredient_need 
}

cook.__proto__ = need; // Assigning the prototype of 'cook' to 'need'
Object.setPrototypeOf(ingredient_need, cook); // Modern syntax for setting the prototype

// Accessing properties in the inheritance chain
console.log(order.name);        // Outputs: "coffee"
console.log(order.maketea);     // Outputs: true
console.log(order.isAvailable); // Outputs: false

let anotherUsertea = 'chaiiscooking        '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsertea.trueLength();   // Outputs: "chaiiscooking        \ntrue length is: 12"
"tea".trueLength();            // Outputs: "tea\ntrue length is: 3"
"milkcoffee".trueLength();     // Outputs: "milkcoffee\ntrue length is: 10"

// IIFE => Immediately Invoked Function Expression
//when you want to implement two IIFE back to back use ";" semicolon 
(function chai(){
    //name iife
    console.log("hoiii")
    console.log(`sayonara`)
})();

((name) => {
    console.log(`kya chal reah hai pata nahi ${name}`);
})("#vit");

//
(function() {
    console.log("Traditional Parentheses");
})();

//
(function() {
    console.log("Parentheses Inside");
}());

//
(function(x, y) {
    console.log("Sum:", x + y);
})(2, 3);

//
(() => {
    console.log("Arrow Function");
})();

//
let result = (function() {
    return "Hello, IIFE!";
})();
console.log(result); // Outputs: Hello, IIFE!

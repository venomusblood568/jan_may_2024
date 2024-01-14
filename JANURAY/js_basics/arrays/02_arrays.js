const marvel_heros = ['thor','ironman','spiderman']
const dc_heros = ['superman','flash','batman']

//when dc_heros get push it will be taken as one whole thing
marvel_heros.push(dc_heros)
console.log(marvel_heros);
//for accessing the particular element from the new push thing
console.log(marvel_heros[3][1]);

const marvel_heros2 = ['thor', 'ironman', 'spiderman'];
const dc_heros2 = ['superman', 'flash', 'batman'];

// Concatenate arrays
const all_heros2 = marvel_heros2.concat(dc_heros2);

// Print the combined array
console.log(all_heros2);

//spread operator => The spread operator (...) in JavaScript is used to unpack elements of an array or properties of an object into a new array or object, respectively.
const all_new_heros = [...marvel_heros, ...dc_heros]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("SAMS LITTLE KITTEN"))
console.log(Array.from("sam"))
console.log(Array.from({name : "sam"}))  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

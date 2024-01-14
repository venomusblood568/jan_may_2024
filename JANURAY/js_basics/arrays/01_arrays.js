//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)

//for simple printing
console.log(myArr)
//for printing the index in array
console.log(myArr[1]);

//array methods
//for pushing element in arr
myArr.push(6)
console.log(myArr)

//for removing the last element in arr
myArr.pop(6)
console.log(myArr)

//unshift adds one or more elements to the beginning of an array in JavaScript. 
myArr.unshift(9)
console.log(myArr)

//shift removes the first element from an array in JavaScript.
myArr.shift(9)
console.log(myArr)


//for checking if element exist in the array or not 
console.log(myArr.includes(9));

//for checking the index of certain element
console.log(myArr.indexOf(3));

//for concatinate two arrays
const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

//for slice => slice creates a shallow copy of a portion of an array in JavaScript.
console.log("A => ",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B => ",myArr);

//`splice` is a way to add, remove, or replace elements at a specific position in a JavaScript array.
const myn2 = myArr.splice(1,3)
console.log("C => ",myArr);
console.log(myn2);

// slice: Creates a shallow copy of a portion of an array.
// Usage: array.slice(start, end)
// Effect: Returns a new array containing elements from the original array starting from the `start` index (inclusive) up to, but not including, the `end` index.
let originalArray1 = [1, 2, 3, 4, 5];
let slicedArray = originalArray1.slice(1, 4); // Returns [2, 3, 4]
console.log("slicearray => ",slicedArray)
// splice: Modifies the contents of an array by removing or replacing existing elements and/or adding new elements.
// Usage: array.splice(start, deleteCount, item1, item2, ...)
// Effect: Changes the original array by removing `deleteCount` elements starting from the `start` index, and optionally adds new elements at that position.
let originalArray2 = [1, 2, 3, 4, 5];
let splicedarray = originalArray2.splice(2, 2, 6, 7);
console.log("splicedarray => ",splicedarray)
// Removes 2 elements starting from index 2 and adds 6 and 7
// originalArray is now [1, 2, 6, 7, 5]

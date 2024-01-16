const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map( (num) => { return num + 10})
const newNums2 = myNumbers
                .map((num) => num * 10 ) //first implement
                .map( (num) => num + 1) //second implement
                .filter( (num) => num >= 40) //third implement

console.log(newNums2);

function sayMyName(){
    console.log("G")
    console.log("O")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("V")
}

sayMyName()

function addTwoNumber(num1,num2){
    console.log(num1+num2)
}
addTwoNumber("sum of two number using function: ",3,2)

function add_two_num(num1 , num2){
    let result = num1 + num2
    return result
}
const result = add_two_num(3, 5)
console.log("Result: ",result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("kitten"))
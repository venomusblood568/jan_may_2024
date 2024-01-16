const user = {
    username : 'kundu',
    price : 999,

    Welcome_message: function(){
        console.log(`${this.username},welcome to website you moron`);
        console.log(this);
    }
}

// for the first time it will take it as kundu
user.Welcome_message()
//now this kundu will be updated to manny because this is dynamic
user.username = "manny"
user.Welcome_message()

console.log(this);

//with function this keyword wont work
function chai(){
    let username = "ammy"
    console.log(this.username);
}
chai()

//with const this keyword wont work 
const chai2 = function () {
    let username = "hitesh"
    console.log(this.username);
}
chai2()


//this is how you define arrow
const chai3 = () => {
    let username = "Anand"
    console.log(this);
}
chai3()

//method 1
const addtwo = (num1,num2) => {
    return num1 + num2
}
console.log(addtwo(4,9))

//method 2
const addtwo2 = (num1,num2) => num1 + num2
console.log(addtwo2(2,9))

//method 3
const addtwo3 = (num1 , num2) => (num1 + num2)
console.log(addtwo3(9,9))

const addtwo4 = (num1,num2) => ({username : 'kush'})
console.log(addtwo4(9,6))

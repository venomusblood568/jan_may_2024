//if 
const isUserloggedIn = true
const temprature = 41

if (temprature === 40){
    console.log("less than 50");
}else{
    console.log("temprature is greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if(score > 100){
    let power = 'fly'
    console.log(`User power: ${power}`);
}

const balance = 1000
//we can define two like this but this is a bad practise
if (balance > 500) console.log('test'),console.log('test2');

if(balance < 500){
    console.log('less than 500');
} else if (balance < 750){
    console.log('less than 750');
} else if (balance < 900){
    console.log('less than 750');
}else{
    console.log('less than 1200');
}

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard && 2==3){
    console.log("Allow to buy course");
}else{
    console.log("Not allowed!!");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

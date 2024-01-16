var c = 300
let a = 30
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ",a)
}
console.log(a);
//console.log(b);
console.log(c);


//function one
function one(){
    const username = "sammy"
    
    //function two
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); => you cant access it cause it out of function 
    //function call
    two()
}
//function call
one()

if(true){
    const username = "sammys"
    if(username === "sammys"){
        const website = " world"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// ++++++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++

//method 1 => you can call first then define function
console.log(addone(5))

function addone(num){
    return num + 1
}

const addtwo = function(num){
    return num + 2
}
console.log(addtwo(6))

//method 1 
async function getAlluser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("E",error)
    }
}
getAlluser()


//method2 
fetch("https://api.github.com/users/venomusblood568")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
//const tinderUser = new object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "google@gmail.com",
    full_name : {
        userfullname: {
            firstName : "SANJANA",
            lastName : "GOURAV JHA"
        }
    }
}

console.log(regularUser.full_name.userfullname.firstName);

const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {1:'a',2:'b',3:'c'}
const obj3 = {1:'a',2:'b',3:'c'}

const obj4 = {obj1,obj2,obj3}
console.log(obj4)

const obj5 = Object.assign({},obj1,obj2,obj3)
console.log(obj5)

const obj6 = {...obj1,...obj2,...obj3}
console.log(obj6)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
console.log(users)

// Prints an array of keys in tinderUser object
console.log(Object.keys(tinderUser));

// Prints an array of values in tinderUser object
console.log(Object.values(tinderUser));

// Prints an array of [key, value] pairs in tinderUser object
console.log(Object.entries(tinderUser));

// Checks if tinderUser object has a property named 'isLoggedIn'
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor

const {price: p} = course

// console.log(courseInstructor);
console.log(p);

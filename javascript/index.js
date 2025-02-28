
const myName ='felix'
console. log(myName)
let myAge=24
let locaction='nairobi'
console. log(myAge)
console. log(locaction)
let aboutME =`my name is ${myName} and i live in ${locaction}`
console. log(aboutME)
// booleans are used to check for the truthiness of something
let isstudent =true
let isteacher =false
let person ={
    isstudent:false,
    phoneNumber:1234567890,
    
}
console.log(person,isstudent,isteacher,person.phoneNumber)
// camel case -->myName,myAge,myLocation
//snake case-->my_name,my_age,my_loaction
//kebab case-->my-name,my-age,my-location
//pascal case-->myName,myAge,myLocation


// Arrays are used to store multiple values
let fruits=['apple','banana','mango','orange']
console.log(fruits[0])
console.log(fruits.length)


let students=[
   {
    id:1,
    name:'felix',
    age:24,
    location:'nairobi',

   },

   {
    id:2,
    name:'jane',
    age:24,
    location:'london',

   },

   {id:3,
    name:'john',
    age:24,
    location:'mombasa',
}
]
console.log(students[0])
const mappedData=students.map((students)=>{
 return students.name
}
)
console.log(mappedData)


// loops
if(myAge>=15)
{  console.log('adult')}
else(myAge<=14)
{
console.log('younger')
}
//const myName='felix'
// let myAge=4


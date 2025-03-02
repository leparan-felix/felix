const myName = 'Felix'; 

// myName = "John" // Error: Assignment to constant variable.
let location = 'Nairobi, Kenya';
// location = 'Kisumu'
// console.log(location)
// string interpolation is used with backticks ``
// let aboutMe = 'My name is myNameandIlivein
// myNameandIlivein{location}';
let aboutMe = `My name is ${myName} and I live in ${location}`;
// console.log(aboutMe)
// My school is Moringa School and I am learning JavaScript.
let mySchool = 'Moringa School';
let progLang = 'JavaScript';
let myDetails = `My school is ${mySchool} and I am learning ${progLang}.`;
// console.log(myDetails);
let myAge = 25;
let age = '25';
let sum = myAge + parseInt(age); // Corrected: Parse the string '25' to an integer.
// console.log(sum);
// console.log(typeof sum);
// console.log(typeof myAge);
// console.log(myAge + 25);
// booleans are used to check for the truthiness of something
let isStudent = true;
let isTeacher = false;
// ARRAYS AND OBJECTS
// Objects are used to store key-value pairs
// object = { key: value }
// 'My name is Rodgers and I am 25 years old. I live in Nairobi, Kenya'
let person = {
  name: 'Felix',
  age: 25,
  location: 'Nairobi, Kenya',
  isStudent: false,
  phoneNumber: null, // '0712345678'
};
// camel case --> phoneNumber, myName, myAge, myLocation, isPhoneNumberValid
// snake case --> phone_number, my_name, my_age, my_location
let phone = person.phoneNumber ?? 'not available';
// console.log(person.name, person.age, person.location, person.phoneNumber);
// console.log(`My name is ${person.name} and I live in ${person.location} and my phone number is ${phone}.`);
// Arrays are used to store multiple values in a single variable
let fruits = ['apple', 'banana', 'mango', 'orange'];
// console.log(fruits.length)
// console.log(fruits[3])
let students = [
  {
    id: 1,
    name: 'Andrew',
    age: 23,
    location: 'Nairobi, Kenya',
    technicalMentor: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane',
    age: 25,
    location: 'Kisumu, Kenya',
    technicalMentor: 'John Doe',
  },
  {
    id: 3,
    name: 'John',
    age: 30,
    location: 'Mombasa, Kenya',
    technicalMentor: 'Jane Doe',
  },
];
// console.log(students.length);
// console.log(students[0]);
// arithmetic operators
// +, -, *, /, %, ++, --
let num = 10;
let num2 = 15;
// find the sum of the two numbers: num and num2 --> +
let mySum = num + num2; // 10+15
// console.log(mySum)
// find the difference of the two numbers: num and num2 --> -
let diff = num2 - num; // 15-10
// console.log(diff)
// multiply the two numbers
let pdt = num * num2; // 10*15
// console.log(pdt)
// divide the two numbers
let div = num / num2; // 15/10
// console.log(div)
// find the square of num and num2 and the exponent of num and num2 -->
let sqr = num ** 2; // 10^2
let sqr2 = num2 ** 2; // 15^2
let exp = num ** num2; // 10^15
// console.log(sqr, sqr2, exp)
// find the remainder of num2 divided by num --> %
let rem = num2 % num; // 15 % 10
// console.log(rem)
// console.log(4 % 2)
// console.log(9 % 2)
// Increment a value by a certain number --> ++, num = 10, num2 = 15, num3 = 3
// Post-increment
// let increment = num++
// console.log(increment, num) // output: 10, 11
// let inc2 = num2++
// console.log(inc2, num2)
// Pre-increment
// let inc = ++num
// console.log(inc, num)
// decrement a value by a certain number --> --, num = 10, num2 = 15
// Post-decrement and Pre-decrement
// let dec = num--
// console.log(dec, num)
// let dec2 = --num
// console.log(dec2, num)
// COMPARISON OPERATORS
// returns a boolean
// == --> equal to  // loose equality
// === --> equal value and equal type // strict equality
// != --> not equal // loose inequality
// !== --> not equal value or not equal type // strict inequality
// >= --> greater than or equal to
// <= --> less than or equal to
// > --> greater than
// < --> less than
// num = 10, num2 = 15, num3 = 3,
(val = '10'), (val2 = '15');
// console.log(num == num2)
// console.log(10 == '10') // true
// console.log(10 === '10') // false
// console.log(10 != 15) // true
// console.log(10 !== 15) // true
// console.log(10 != '10') // false
// --> loose inequality check
// does not check for data types --> LHS-10-->number; RHS-'10'-->string
// type coercion --> '10' is being converted to 10 -->  '10' --> 10
// 10 != 10 --> false
// console.log(10 !== '10') // true
// strict inequality check (both values and data types)
// values check --> 10 != '10' is coerced to 10 != 10 therefore we expect false
// data type check --> number != string --> true
// num = 10, num2 = 15
// console.log(num > num2) // false
// console.log(num >= num2) // false
// console.log(num < num2) // true
// console.log(num <= num2) // true
// console.log(10 <= 10)
// IF STATEMENTS & ELSE IF STATEMENTS
// if (condition) {
// do something is the condition is met
// }
let myNum = 6;
if (myNum % 2 === 0) {
  console.log('the number is even')
} else {
 console.log('the number is odd')
}
let userAge = 12;
// if you are above the age of 18 you can get a DL
if (userAge >= 18) {
  console.log('you can have a DL')
} else {
   console.log('you cannot have a DL')
}
// create a grading system (0-100)
// A >= 70
// B >= 60
// C >=50
// D >= 40
// E >= 0
// --> check for values greater than 100% and values less than 0
let score = 72;
if (score >= 70) {
   console.log('A')
} else if (score >= 60) {
  console.log('B')
} else if (score >= 50) {
   console.log('C')
} else if (score >= 40) {
  console.log('D')
} else if (score >= 0) {
  console.log('E')
} else {
  console.log('Invalid grade')
}
// SWITCH STATEMENTS --
// expressions
// cases for values we're comparing to our single expression --> scenarios to be met
// default case --> optional
// --> break keyword
// --> syntax
let applicantAge = 15;

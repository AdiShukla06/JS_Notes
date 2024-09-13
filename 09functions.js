// functions

// function is a block of code that can be called and executed at any time

// function declaration


function greet() {
    console.log('Hello');
}
// greet()

// function expression

const speak = function() {
    console.log('Good day');
}
// speak()

// arguments and parameters

const speak2 = function(name = 'luigi', time = 'night') {
    console.log(`Good ${time} ${name}`);
}
// speak2('mario', 'morning'); // Good morning mario
// speak2() // Good night luigi

// Return Statement
// When a return statement is executed, the function stops executing and returns the value to the caller

const calcArea = function(radius) {
    return 3.14 * radius**2;
}
// console.log(calcArea(5)); // 78.5

// Function Hoisting

// function declarations are hoisted to the top of the file

// hoistedFunction(); // Hello

function hoistedFunction() {
    console.log('Hello');
}

// function expressions are not hoisted

// notHoistedFunction(); // TypeError: notHoistedFunction is not a function

const notHoistedFunction = function() {
    console.log('Goodbye');
}

// Rest Parameters

// allows us to represent an indefinite number of arguments as an array

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// console.log(sum(1, 2, 3, 4, 5)); // 15
// console.log(sum(1 ,2)); // 3

function calculate(val1, val2, ...others){
    return others
}
console.log(calculate(200, 400, 500, 2000))

// Anonymous Functions

// functions without a name

// setTimeout(function() {
//     console.log('Timeout');
// }, 3000);

// Arrow Functions

const greet2 = () => {
    console.log('Hello');
}
// greet2() // Hello

const greet3 = name => {
    console.log(`Hello ${name}`);
}
// greet3('Aditya'); // Hello Aditya

const square = num => num * num;
// console.log(square(5)); // 25

// Passing functions as arguments

function greet4(name){
    console.log(`Hello ${name}`);
}
function executeFunction(fn, value){
    fn(value);
}
// executeFunction(greet4, 'Aditya'); // Hello Aditya

// Returning functions from functions

function createGreeting(name){
    return function(){
        console.log(`Hello ${name}`);
    }
}
let greetAditya = createGreeting('Aditya');
// greetAditya(); // Hello Aditya

// IIFE (Immediately Invoked Function Expression)

// a function that is executed immediately after it is created

// (function(){
//     console.log('IIFE has been invoked!!!');
// })();

// (function(name){
//     console.log(`Hello ${name}`);
// })('Aditya')

// Closures

// a function that has access to the outer function's variables even after the outer function has returned

function outer(){
    let count = 0;
    return function inner(){
        count++;
        return count;
    }
}

let increment = outer()
// console.log(increment()); // 1
// console.log(increment()); // 2

// Callback Functions

// a function that is passed as an argument to another function and is executed after some operation has been completed.

// function fetchData(callback){
//     setTimeout(() => {
//         callback('Data has been fetched');
//     }, 2000);
// }

// fetchData(function(data){
//     console.log(data);
// });

// Higher Order Functions

// a function that takes another function as an argument or returns a function, or both

function higherOrder(fn) {
    console.log('I am a higher-order function');
    fn();
  }
  
  higherOrder(function() {
    console.log('I am passed as a callback');
  });
  

// this Keyword

// The value of this inside a function depends on how the function is called:

// Global Context or Regular Function: this refers to the global object (window in browsers).
// Object Method: this refers to the object calling the method.
// Arrow Function: this retains the value from the context in which it was defined.


// in an object method

let person = {
    name: 'Aditya',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}
person.greet(); // Hello Aditya

// in an arrow function

let person2 = {
    name: 'Aditya',
    greet: () => {
        console.log(`Hello ${this.name}`);
    }
}
person2.greet() // Hello undefined

// Recursion

// a function that calls itself

function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)) // 120

// ************************************************************************************

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "Aditya"
user.welcomeMessage()
console.log(this)


// function chai(){
//     let username = 'aditya'
//     console.log(this.username); // undefined because username is not a property of the global object
    
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }

// chai()

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()
//There are ways to declare a variable in JavaScript. The three most common ways are var, const, and let.
// var, const and let

car = 'benz' //global scope 


// ************************************************************************************************************************

//var: original way to declare a variable in earlier versions of JavaScript. 

var name = 'Aditya';
// console.log(name); //Aditya
// console.log(typeof name) //string

var name = 'Shukla'; //redeclaration and reassigning is possible
// console.log(name); //Shukla

//It is function scoped, meaning they are accessible anywhere within the function they are declared in, or globally if declared outside any function.

function example() {
    if(true){
        var x = 1;
    }
    // console.log(x); //1 
}
example();

// Variables declared with var are hoisted to the top of their function scope. This means the variable is available before it has been declared.

// console.log(y); //undefined (doesn't throw an error)
var y = 10;

// ************************************************************************************************************************

//let: introduced in ES6 (2015). It is block scoped, meaning it is only accessible within the block they are declared in.

// let age = 21;
// console.log(age); //21

if(true){
    let age = 22;
    // console.log(age); //22
}
// console.log(age) //ReferenceError: age is not defined

// let is also hoisted to the top of its block scope, but not initialized. This is known as the "temporal dead zone".
// console.log(z); //ReferenceError: Cannot access 'z' before initialization
let z = 10;

// variables declared with 'let' cannot be redeclared in the same scope.

let umar = 21;
// let umar = 22; //SyntaxError: Identifier 'umar' has already been declared

// ************************************************************************************************************************

//const: also introduced in ES6 (2015). It is block scoped.

if(true){
    const age = 22;
    // console.log(age); //22
}
// console.log(age) //ReferenceError: age is not defined

// const is also hoisted to the top of its block scope, but not initialized. This is known as the "temporal dead zone".
// console.log(a); //ReferenceError: Cannot access 'a' before initialization
const a = 10;

// variables declared with 'const' cannot be redeclared in the same scope.
const b = 21;
// const b = 22; //SyntaxError: Identifier 'b' has already been declared

// const variables must be assigned a value when declared.
// const c; //SyntaxError: Missing initializer in const declaration

// const variables cannot be reassigned.
const d = 21;
// d = 22; //TypeError: Assignment to constant variable.

// immutability: The const keyword ensures that the variable reference cannot be changed, but it does not make the value itself immutable. For objects and arrays, the contents can still be modified.

const obj = {name: 'Aditya'};
obj.name = 'Shukla'; //allowed
obj = {name: 'Aditya'}; //TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); //allowed
arr = [1, 2, 3, 4]; //TypeError: Assignment to constant variable.

// ************************************************************************************************************************
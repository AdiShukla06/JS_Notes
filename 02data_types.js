//Primitive data types: They are immutable and are compared by their value.

// 1. String : Represents a sequence of characters.
let name = "Umar";
let name2 = 'Umar';
let name3 = `hello ${name}`;

// 2. Number : Represents both integers and floating point numbers.
let age = 21;
let pi = 3.14;

// 3. BigInt : Represents integers with arbitrary precision. Introduced to handle large numbers.
let bigInt = 1234567890123456789012345678901234567890n;

// 4. Boolean : Represents logical values, true and false.
let isTrue = true;

// 5. Undefined :  Represents a variable that has been declared but has not been assigned a value. 
let x;
// console.log(x); // undefined

// 6. Null : Represents an empty value.
let y = null;
// console.log(typeof null); // object

// 7. Symbol : Represents a unique value. often used to create unique keys in objects.
const sym1 = Symbol('name');
const sym2 = Symbol('name');
// console.log(sym1 === sym2); // false
// console.log(typeof sym1); // symbol

// *************************************************************

// Non-primitive data types: They are mutable and are compared by their reference.

// 1. Object : Represents a collection of key-value pairs.
let person = {
    name: "Umar",
    age: 21,
    isTrue: true,
    function() {
        console.log("Hello");
    }
};
// console.log(person);// { name: 'Umar', age: 21, isTrue: true, function: [Function: function] }

// 2. Array : Represents a list of elements.
let fruits = ['apple', 'banana', 'mango'];
// console.log(fruits); // [ 'apple', 'banana', 'mango' ]

// 3. Function : Represents a block of code that can be called.
function greet() {
    console.log("Hello");
}
// console.log(greet); // [Function: greet]
// console.log(greet()); // Hello

// 4. Date : Represents a date and time.
let today = new Date();
// console.log(today); 
// console.log(today.toDateString());




/*JavaScript handles type conversion in two primary ways:

1. Implicit Conversion (Type Coercion)
2. Explicit Conversion*/

// 1.  Implicit Conversion (Type Coercion)

// JavaScript often performs automatic type conversion when combining different data types. This is known as type coercion.

// Example 1: String + Number
// let x = 33;
// let y = "aditya";
// let z = x + y;
// console.log(z); // 33aditya

// Example 2: Number + Boolean
// let x = 33;
// let y = true;
// let z = x + y;
// console.log(z); // 34

// Example 3: String + Boolean
// let x = "33";
// let y = true;
// let z = x + y;
// console.log(z); // 33true

// Boolean Context:
// JavaScript has truthy and falsy values. When a value is evaluated in a boolean context, it is converted to a boolean value.

// if value = 0, -0, null, false, NaN, undefined, or an empty string (""), it is falsy.
// Otherwise, it is truthy.

// ********************************************************************************

// 2. Explicit Conversion

// Example 1 : String Conversion
// let num = 123
// let str1 = String(num);
// let str2 = num.toString()
// console.log(str1); // "123"
// console.log(str2); // "123"

// Example 2 : Number Conversion
// let str = "123ab";
// let num1 = Number(str);
// let num2 = parseInt(str);
// let num3 = parseFloat(str);
// console.log(num1); // NaN
// console.log(num2); // 123
// console.log(num3); // 123

// Example 3 : Boolean Conversion
// let x = 1;
// let y = Boolean(x);
// console.log(y); // true

// ********************************************************************************

// Common Confusions
// console.log(5 == '5'); // true
// console.log(5 === '5'); // false

let value = NaN;
if (value){
    console.log('this won\'t be executed'); 
}

// console.log(parseInt("123ab34c")); //123

// console.log(1 + 2 + '3'); //33
// console.log('1' + 2 + 3); //123

// ******************************************************************************** 

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory
// here, we get the copy of the datatype.

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory
// here, reference of original data is passed.

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

// Example : 
// let name = "Aditya"; // string
// let name2 = name; // string
// name2 = 'shukla'
// console.log(name); // Aditya
// console.log(name2); // shukla









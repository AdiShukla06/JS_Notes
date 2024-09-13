// there is only one type for numbers in JS

// let integer = 22
// let float = 22.22

// Special number values
// Infinity : 
// console.log(1 / 0); // Infinity
// console.log(-1 / 0); // -Infinity
// console.log("hello"/2) // NaN

// Number Methods

// 1. toString() : Converts a number to a string.
// let num = 22;
// console.log(num.toString()); // "22"

// 2. toFixed() : Formats a number using fixed-point notation.
// let num = 22.12345;
// console.log(num.toFixed(2)); // 22.12

// 3. toPrecision() : Formats a number to a specified length.
// let num = 22.12345;
// console.log(num.toPrecision(2)); // 22

// 4. parseInt() : Parses a string and returns an integer.
// let num = "22";
// console.log(parseInt(num)); // 22

// 5. parseFloat() : Parses a string and returns a floating-point number.
// let num = "22.12345";
// console.log(parseFloat(num)); // 22.12345

// 6. isNaN() : Returns true if the value is NaN, otherwise false.
// let num = "hello";
// console.log(isNaN(num)); // true

// 7. isFinite() : Returns true if the value is a finite number, otherwise false.
// let num = 22;
// console.log(isFinite(num)); // true

// ******************************************************************************

// Math Object : 

// Constants in Math : 

// 1. Math.PI : Returns the value of PI.
// console.log(Math.PI); // 3.141592653589793

// 2. Math.E : Returns the value of Euler's number.
// console.log(Math.E); // 2.718281828459045

// Math Methods : 

// 1. Math.round() : Rounds a number to the nearest integer.
// console.log(Math.round(22.5)); // 23

// 2. Math.ceil() : Rounds a number up to the nearest integer.
// console.log(Math.ceil(22.1)); // 23

// 3. Math.floor() : Rounds a number down to the nearest integer.
// console.log(Math.floor(22.9)); // 22

// 4. Math.abs() : Returns the absolute value of a number.
// console.log(Math.abs(-22)); // 22

// 5. Math.pow() : Returns the value of a number raised to the power of another number.
// console.log(Math.pow(2, 3)); // 8

// 6. Math.sqrt() : Returns the square root of a number.
// console.log(Math.sqrt(16)); // 4

// 7. Math.min() : Returns the number with the lowest value.
// console.log(Math.min(2, 3, 4, 5)); // 2

// 8. Math.max() : Returns the number with the highest value.
// console.log(Math.max(2, 3, 4, 5)); // 5

// 9. Math.random() : Returns a random number between 0 and 1.
// console.log(Math.random()); // 0.123456789

// 10. Math.floor(Math.random() * 10) : Returns a random integer between 0 and 9.
// console.log(Math.floor(Math.random() * 10)); // 5

// 11. Math.floor(Math.random() * 10) + 1 : Returns a random integer between 1 and 10.
// console.log(Math.floor(Math.random() * 10) + 1); // 5

// To get a random number within a range : 
// let min = 1
// let max = 10
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNum); // 5

// Math.trunc() : Returns the integer part of a number by removing the fractional digits.
// console.log(Math.trunc(22.12345)); // 22


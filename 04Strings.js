// Strings are used to store text. Strings must be inside of either single or double quotes or backticks(for template literals).

// String methods : 

// 1. length : Returns the length of the string.
// let str = "Hello World!";
// console.log(str.length); // 12

// 2. toUpperCase() : Converts the string to uppercase.
// let str = "Hello World!";
// console.log(str.toUpperCase()); // HELLO WORLD!

// 3. toLowerCase() : Converts the string to lowercase.
// let str = "Hello World!";
// console.log(str.toLowerCase()); // hello world!

// 4. charAt() : Returns the character at the specified index.
// let str = "Hello World!";
// console.log(str.charAt(0)); // H

// 5. charCodeAt() : Returns the Unicode of the character at the specified index.
// let str = "Hello World!";
// console.log(str.charCodeAt(0)); // 72

// 6. indexOf() : Returns the index of the first occurrence of the specified value.
// let str = "Hello World!";
// console.log(str.indexOf("o")); // 4

// 7. lastIndexOf() : Returns the index of the last occurrence of the specified value.
// let str = "Hello World!";
// console.log(str.lastIndexOf("o")); // 7

// 8. includes() : Returns true if the string contains the specified value, otherwise false.
// let str = "Hello World!";
// console.log(str.includes("World")); // true

// 9. startsWith() : Returns true if the string starts with the specified value, otherwise false.
// let str = "Hello World!";
// console.log(str.startsWith("Hello")); // true

// 10. endsWith() : Returns true if the string ends with the specified value, otherwise false.
// let str = "Hello World!";
// console.log(str.endsWith("World!")); // true

// 11. slice() : Extracts a part of the string and returns a new string.
// let str = "Hello World!";
// console.log(str.slice(0, 5)); // Hello

// 12. substring() : Extracts the characters from a string, between two specified indices. (Similar to slice but doesn't support negative indices)
// let str = "Hello World!";
// console.log(str.substring(0, 5)); // Hello

// 13. substr() : Extracts the characters from a string, beginning at a specified start position, and through the specified number of characters.
// let str = "Hello World!";
// console.log(str.substr(0, 5)); // Hello

// 14. replace() : Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
// let str = "Hello World!";
// console.log(str.replace("World", "Universe")); // Hello Universe!

// 15. split() : Splits a string into an array of substrings based on a specified separator.
// let str = "Hello World!";
// console.log(str.split(" ")); // ["Hello", "World!"]

// 16. trim() : Removes whitespace from both ends of a string.
// let str = " Hello World! ";
// console.log(str.trim()); // Hello World!

// 17. repeat() : Returns a new string with a specified number of copies of the string.
// let str = "Hello World!";
// console.log(str.repeat(2)); // Hello World!Hello World!

// 18. concat() : Joins two or more strings and returns a new string.
// let str1 = "Hello";
// let str2 = "World!";
// console.log(str1.concat(" ", str2)); // Hello World!

// ********************************************************************************

// Template Literals 

// Template literals are string literals that allow embedded expressions. You can use multi-line strings and string interpolation features with them.

// let name = "John";
// let age = 25;
// let sentence = `My name is ${name} and I am ${age} years old.`;
// console.log(sentence); // My name is John and I am 25 years old.


// Escape characters
// let str = "This is a \"quote\" ";

// common escape characters : 
// \' : single quote
// \" : double quote
// \\ : backslash
// \n : newline


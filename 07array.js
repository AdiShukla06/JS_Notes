// Array

// an array is a data structure that can store multiple values (of any type) in a single variable.

// Creating an array
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

let emptyArray = new Array(5)
console.log(emptyArray); // [ <5 empty items> ]

// Accessing array elements
// console.log(fruits[0]); // Apple

// fruits[1] = "Pineapple";
// console.log(fruits); // [ 'Apple', 'Pineapple', 'Mango', 'Orange' ]

// **************************************************************************

// Array properties and methods

// Array length

let animals = ["Dog", "Cat", "Elephant", "Lion"];
console.log(animals.length); // 4

// Array methods

// 1. push() - adds one or more elements to the end of an array and returns the new length of the array.

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let newLength = fruits.push("Pineapple");
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange', 'Pineapple' ]
console.log(newLength); // 5

// 2. pop() - removes the last element from an array and returns that element.

let removedElement = fruits.pop();
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(removedElement); // Pineapple

// 3. shift() - removes the first element from an array and returns that element.

let removedFirstElement = fruits.shift();
console.log(fruits); // [ 'Banana', 'Mango', 'Orange' ]
console.log(removedFirstElement); // Apple

// 4. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.

let newLength1 = fruits.unshift("Apple");
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(newLength1); // 4

// 5. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.

let index = fruits.indexOf("Mango");
console.log(index); // 2

// 6. includes() - determines whether an array includes a certain element, returning true or false as appropriate.  

let isPresent = fruits.includes("Banana");
console.log(isPresent); // true

// 7. slice() - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

let slicedArray = fruits.slice(1, 3);
console.log(slicedArray); // [ 'Banana', 'Mango' ]
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// 8. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let removedElements = fruits.splice(1, 2, "Pineapple", "Grapes");
console.log(fruits); // [ 'Apple', 'Pineapple', 'Grapes', 'Orange' ]
console.log(removedElements); // [ 'Banana', 'Mango' ]

// 9. concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let vegetables = ["Carrot", "Potato", "Tomato"];
let mergedArray = fruits.concat(vegetables);
console.log(mergedArray); // [ 'Apple', 'Pineapple', 'Grapes', 'Orange', 'Carrot', 'Potato', 'Tomato' ]

// 10. reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

let reversedArray = fruits.reverse();
console.log(reversedArray); // [ 'Orange', 'Grapes', 'Pineapple', 'Apple' ]

// 11. sort() - sorts the elements of an array in place and returns the sorted array.

let sortedArray = fruits.sort();
console.log(sortedArray); // [ 'Apple', 'Grapes', 'Orange', 'Pineapple' ]

// 12. join() - creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

let joinedString = fruits.join(" - ");
console.log(joinedString); // Apple - Grapes - Orange - Pineapple

// Array Iteration

let numbers1 = [1, 2, 3, 4, 5];

// 1. for loop

for (let i = 0; i < numbers1.length; i++) {
    // console.log(numbers1[i]);
}

// 2. forEach() method

numbers1.forEach(function(number){
    // console.log(number);
})
numbers1.forEach((number) => {
    // console.log(number);
})

// 3. map() method

let doubledNumbers = numbers1.map((number) => {
    return number * 2;
})
console.log(doubledNumbers); // [ 2, 4, 6, 8, 10 ]

// 4. filter() method

let evenNumbers = numbers1.filter((number) => {
    return number % 2 === 0;
})
console.log(evenNumbers); // [ 2, 4 ]

// 5. reduce() method

let sum = numbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)
console.log(sum); // 15

// 6. find() method

let firstEvenNumber = numbers1.find((number) => {
    return number % 2 === 0;
})  
console.log(firstEvenNumber); // 2

// 7. findIndex() method

let firstEvenNumberIndex = numbers1.findIndex((number) => {
    return number % 2 === 0;
})
console.log(firstEvenNumberIndex); // 1

// 8. some() method

let isEvenNumberPresent = numbers1.some((number) => {
    return number % 2 === 0;
})
console.log(isEvenNumberPresent); // true

// 9. every() method

let areAllNumbersEven = numbers1.every((number) => {
    return number % 2 === 0;
})
console.log(areAllNumbersEven); // false

// 10. includes() method

let isNumberPresent = numbers1.includes(3);
console.log(isNumberPresent); // true

//************************************************************************************

// Destructuring arrays

// let [first, second, third] = ["Apple", "Banana", "Mango"];
// console.log(first); // Apple
// console.log(second); // Banana

// let [first, ...rest] = ["Apple", "Banana", "Mango"];
// console.log(first); // Apple
// console.log(rest); // [ 'Banana', 'Mango' ]

// let[first, , third, fourth='orange'] = ["Apple", "Banana", "Mango"];
// console.log(first); // Apple
// console.log(third); // Mango
// console.log(fourth); // orange

// Copying Arrays

// let fruits1 = ["Apple", "Banana", "Mango"];
// let copiedFruits = fruits1.slice();
// console.log(copiedFruits); // [ 'Apple', 'Banana', 'Mango' ]

let fruits1 = ["Apple", "Banana", "Mango"];
let copiedFruits = [...fruits1];
console.log(copiedFruits); // [ 'Apple', 'Banana', 'Mango' ]

// Merging Arrays

let fruits2 = ["Apple", "Banana", "Mango"];
let vegetables1 = ["Carrot", "Potato", "Tomato"];
let mergedArray1 = [...fruits2, ...vegetables1];
console.log(mergedArray1); // [ 'Apple', 'Banana', 'Mango', 'Carrot', 'Potato', 'Tomato' ]

// ****************************************************************************************

let array1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
let flatArray = array1.flat(Infinity);
console.log(flatArray); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// Array.from() method

console.log(Array.from("Aditya"))
console.log(Array.from({name: "hitesh"})) // interesting


// Array.of() method

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
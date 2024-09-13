// Date and time in js

// Date object

// Date object is used to work with dates and times

// let now = new Date()
// console.log(now) // 2021-09-23T06:26:52.810Z;

// let specificDate = new Date('2024-09-13')
// console.log(specificDate);

// let anotherDate = new Date(2024, 4, 12)
// console.log(anotherDate);

// Months are zero-indexed

let timestamp = new Date(0)
console.log(timestamp); // 1970-01-01T00:00:00.000Z

let timestamp2 = new Date(100000000)
console.log(timestamp2); // 1970-01-02T03:46:40.000Z

// Methods in Date object

let date = new Date();
// 1. getFullYear() : Returns the year of the specified date according to local time.
console.log(date.getFullYear()); // 2024

// 2. getMonth() : Returns the month of the specified date according to local time.
console.log(date.getMonth()); // 8 (because months are zero-indexed)

// 3. getDate() : Returns the day of the month for the specified date according to local time.
console.log(date.getDate()); // 13

// 4. getDay() : Returns the day of the week for the specified date according to local time.
console.log(date.getDay()); // 5 (0 is sunday)

// 5. getHours() : Returns the hour for the specified date according to local time.
console.log(date.getHours()); // 6

// 6. getMinutes() : Returns the minutes in the specified date according to local time.
console.log(date.getMinutes()); // 40

// 7. getSeconds() : Returns the seconds in the specified date according to local time.
console.log(date.getSeconds()); // 40

// Formatting Dates

// toDateString() : Returns the date portion of a Date object in human-readable form.
console.log(date.toDateString()); // Fri Sep 13 2024

// toTimeString() : Returns the time portion of a Date object in human-readable form.
console.log(date.toTimeString()); // 12:40:40 GMT+0530 (India Standard Time)

// toISOString() : Returns the date as a string, using the ISO standard.
console.log(date.toISOString()); // 2024-09-13T06:40:40.000Z

// toLocaleDateString() : Returns the date portion of a Date object as a string, using locale conventions.
console.log(date.toLocaleDateString()); // 9/13/2024

// toLocaleTimeString() : Returns the time portion of a Date object as a string, using locale conventions.
console.log(date.toLocaleTimeString()); // 12:40:40 AM

// toLocaleString() : Converts a Date object to a string, using locale conventions.
console.log(date.toLocaleString()); // 9/13/2024, 12:40:40 AM

// toUTCString() : Converts a Date object to a string, according to universal time.
console.log(date.toUTCString()); // Fri, 13 Sep 2024 06:40:40 GMT

// Date.now() : Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(Date.now()); // 1631511640000

// ********************************************************************************************************************

// Date Arithmetic 

// Adding days to a date

let currentDate = new Date();
let newDate = new Date(currentDate);
newDate.setDate(currentDate.getDate() + 10);
console.log(newDate);

// Difference between two dates

let date1 = new Date('2024-01-01')
let date2 = new Date('2023-01-01')

let differenceInTime = date1 - date2 //difference in milliseconds
console.log(differenceInTime);

let differenceInDays = differenceInTime / (1000 * 3600 * 24)
console.log(differenceInDays); //365


// Date.now()
// The Date.now() method returns the number of milliseconds since January 1, 1970 (the Unix Epoch). It’s useful for measuring elapsed time or performing high-resolution calculations.

// Measuring time taken by an operation

let start = Date.now();
for (let i = 0; i < 100000; i++) {
    // some operation
}
let end = Date.now();
console.log(`Time taken: ${end - start}ms`);
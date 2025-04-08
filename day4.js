/*
Task for You:
Create an array of 5 random numbers.

Use find to get the first number greater than 50.

Use findIndex to get the index of the first even number.

Use includes to check if the number 25 is in the array.
*/

const number = [10, 18, 50, 76, 23];

const firstGreater = number.find((num) => num > 50);
console.log(firstGreater);

const firstEven = number.findIndex((num) => num % 2 === 0);
console.log(firstEven);

const has25 = number.includes(25);
console.log(has25);

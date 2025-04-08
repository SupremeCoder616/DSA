/*
Task for You:
Create an array of 5 numbers.

Use reduce to find the sum of the numbers.

Use reduce to find the product of the numbers.
*/

const number = [10, 20, 30, 40];
console.log(number.reduce((acc, num) => acc + num, 0));
console.log(number.reduce((acc, num) => acc * num, 1));

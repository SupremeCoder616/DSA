/*
Task for You:
Create an array of 5 numbers.

Use forEach to print each number.

Use map to create a new array where each number is doubled.

Use filter to create a new array with only even numbers.
*/

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((data) => {
  console.log(data);
});

const doubleNumbers = numbers.map((data) => {
  return data * 2;
});

// console.log(doubleNumbers);

const evenNumbers = numbers.filter((data) => {
  return data % 2 === 0;
});

console.log(evenNumbers);

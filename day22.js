/*  Sum of an array (without reduce) */
const numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum:", sum);

/*  Find maximum and minimum in an array (manual logic) */
const values = [45, 22, 89, 1, 33];

let max = values[0];
let min = values[0];

for (let i = 1; i < values.length; i++) {
  if (values[i] > max) max = values[i];
  if (values[i] < min) min = values[i];
}

console.log("Max:", max); // 89
console.log("Min:", min); // 1

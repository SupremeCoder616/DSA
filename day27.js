// 1. Find the largest number in an array.
const largest_number_arr = [10, 40, 25, 99, 5];

let max = largest_number_arr[0];
for (let i = 1; i < largest_number_arr.length; i++) {
  if (largest_number_arr[i] > max) max = largest_number_arr[i];
}

console.log(max);

// 2. Find the sum of all elements in the array.
const sum_of_arr = [5, 10, 15, 20];
console.log(sum_of_arr.reduce((acc, num) => acc + num, 0));

let sum = 0;
for (let i = 0; i < sum_of_arr.length; i++) {
  sum += sum_of_arr[i];
}
console.log(sum);

//3. Count the number of even numbers in the array.
function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenCount = countEvenNumbers(numbers);
console.log(evenCount);

/*
1️⃣ Reverse an Array
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

Solve using a loop (don’t use reverse() method).
*/

const array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log(reversedArray);

/*
2️⃣ Find the Second Largest Number in an Array
Input: [10, 5, 20, 8, 15]
Output: 15

Handle edge cases: duplicate max numbers like [20, 20, 15] should return 15.
*/

const arr = [10, 5, 20, 20, 8, 15];
let largest = 0;
let secondLargest = 0;

for (const num of arr) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num < largest) {
    secondLargest = num;
  }
}

console.log(secondLargest);

/*
3️⃣ Remove Duplicates from an Array (without using Set)
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]

Use a loop and .includes() or a simple tracking method.
*/
const arr1 = [1, 2, 2, 3, 4, 4, 5];
let newArr = [];
for (let i = 0; i < arr1.length; i++) {
  if (!newArr.includes(arr1[i])) {
    newArr.push(arr1[i]);
  }
}

console.log(newArr);

/* Clone an array manually */
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = [];

for (let i = 0; i < originalArray.length; i++) {
  clonedArray.push(originalArray[i]);
}

console.log(clonedArray); // [1, 2, 3, 4, 5]

/* Access nested arrays */

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(nestedArray[0][1]);
console.log(nestedArray[2][0]);

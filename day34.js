/*
Problem 1 — Reverse a String
You are given a string: "javascript".
Write a function to reverse it without using .reverse() directly on the string.
 */

function reverseStr(str) {
  let splitStr = str.split("");
  let reverseString = "";
  //   console.log(splitStr);
  for (let i = splitStr.length - 1; i >= 0; i--) {
    reverseString = reverseString + splitStr[i];
  }
  return reverseString;
}

// console.log(reverseStr("javascript"));

/*
Problem 2 — Count Even Numbers
You are given an array of numbers: [5, 8, 13, 2, 6, 9, 12].
Count how many numbers are even.
 */
function getEvenNumbersCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

// console.log(getEvenNumbersCount([5, 8, 13, 2, 6, 9, 12]));

const arr = [4, 9, 1, 32, 15, 7];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
  if (num > largest) {
    secondLargest = largest;
    console.log(secondLargest);
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}

console.log("Second largest number is:", secondLargest);

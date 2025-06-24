/*
 Task 1: Find the Missing Number
Input: [1, 2, 3, 5]
Output: 4
(Assume the array has numbers from 1 to n, one number is missing.)
*/

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

// Test case
const input = [1, 2, 3, 5];
const output = findMissingNumber(input);
console.log(output);

/*
 Task 2: Count Vowels in a String
Input: "Hello World"
Output: 3 (because: e, o, o)

📌 Use a loop or .includes().
*/
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello"));

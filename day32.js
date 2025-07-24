function num(proNum) {
  let numVal = proNum[0];
  for (let i = 1; i < proNum.length; i++) {
    numVal *= proNum[i];
  }

  return numVal;
}
// num([2, 3, 4]);
// console.log(num([2, 3, 4]));

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

// console.log(countVowels("hello kartik"));

function isAnagram(str1, str2) {
  console.log([...str1], [...str2].sort().join(""));
  return [...str1].sort().join("") === [...str2].sort().join("");
}

// console.log(isAnagram("listen", "silent"));
let stringVal = "kartik";
// console.log([...stringVal].sort().join(""));

// console.log(Math.sqrt(7));
// console.log(7 % 2 === 0);

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
// console.log(isPrime(4));

/* Reverse a string (manual logic, no built-in reverse) */
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Hello"));

/* Check if a string is a palindrome */
function isPalindrome(str) {
  const reversed = reverseString(str);
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

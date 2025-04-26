/*
Task 2: Create your own factorial function like above
*/

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

function printReverse(n) {
  if (n === 0) return;
  console.log(n);
  printReverse(n - 1);
}

// printReverse(5);

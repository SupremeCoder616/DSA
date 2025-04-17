/*
Task 2: Create your own factorial function like above
*/

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3));

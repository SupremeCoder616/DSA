/*
Task for You:

1. Create an array of 5 random numbers.

2. Use sort to arrange them in ascending order.

3. Use sort to arrange them in descending order.

4. Reverse the array using reverse.
*/

const number = [68, 75, 90, 89, 10];
console.log(number.sort((a, b) => a - b));

console.log(number.sort((a, b) => b - a));
console.log(number.reverse());

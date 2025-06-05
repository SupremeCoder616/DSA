/*
Task
Print all combinations of a 3x3 matrix using nested loops.

Print the triangle star pattern shown above.
*/

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`Row ${i}, Column ${j}`);
//   }
// }

for (let i = 1; i <= 5; ++i) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// let i = 0;
// console.log(++i);
// console.log(i++);
// console.log(i);

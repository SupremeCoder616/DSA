//Print a Right-Angled Triangle Pattern
// for (let i = 1; i <= 5; i++) {
//   let n = "";
//   for (let j = 1; j <= i; j++) {
//     n += "* ";
//   }
//   console.log(n);
// }

let arr = [1, 2, 3, 4, 5];
let target = 6;
for (let i = 0; i < arr.length; i++) {
  let n = [];
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      n.push([arr[i], arr[j]]);
    }
    //   n += [i, j];
  }
  console.log(n);
}

let arr = [5, 4, 3, 2, 1];

// function sorted(arr) {
//   let firstVal = arr[0];
//   let arrVal = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     // console.log("arr[i] =", arr[i], "i =", i);
//     if (firstVal > arr[i]) {
//       arrVal.push(arr[i]);
//     } else {
//       arrVal.push(arr[i]);
//     }
//   }
//   console.log(arrVal);
// }

// sorted(arr);

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("arr[i + 1] === ", i + 1);
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted(arr));

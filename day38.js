function findSmallNum(arrNum) {
  let value = arrNum[0];

  for (let i = 1; i < arrNum.length; i++) {
    if (arrNum[i] < value) {
      value = arrNum[i];
    }
  }
  return value;
}

let numArr = [34, 25, 32, 66, 30, 2];

console.log(findSmallNum(numArr));

function getEvenNumCount(arrNum) {
  let evenNum = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
      evenNum.push(arrNum[i]);
    }
  }

  return evenNum.length;
}

let numArr = [2, 4, 67, 833, 8, 9, 101, 13, 16];
console.log(getEvenNumCount(numArr));

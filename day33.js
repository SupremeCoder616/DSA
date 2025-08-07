let arrtest = [2, 7, 10, 9];
let gettedValue = 0;
for (let i = 0; i < arrtest.length; i++) {
  if (gettedValue < arrtest[i]) {
    gettedValue = arrtest[i];
  }
}

console.log(gettedValue);

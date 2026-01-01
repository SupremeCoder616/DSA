function reverseStr(str) {
  let value = "";
  for (let i = str.length - 1; i >= 0; i--) {
    value += str[i];
  }
  return value;
}

// console.log(reverseStr("kartik"));

const reverseStr2 = (str) => str.split("").reverse().join("");

// console.log(reverseStr2("Kartik"));

console.log(0.1 + 0.2 === 0.3);

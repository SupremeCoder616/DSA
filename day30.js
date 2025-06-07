const pan = (stringData) => {
  let reString = stringData.split("").reverse().join("");
  if (reString === stringData) {
    return true;
  } else {
    return false;
  }
};
// console.log(pan("madam"))
// console.log(pan("hello"))

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

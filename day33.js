let arrtest = [2, 7, 10, 9];
let gettedValue = 0;
for (let i = 0; i < arrtest.length; i++) {
  if (gettedValue < arrtest[i]) {
    gettedValue = arrtest[i];
  }
}

// console.log(gettedValue);

/*
Problem 3:
You have a list of names: ["Amit", "Kartik", "Rahul", "Neha"]
How would you find out if "Kartik" is in the list?
 */
function findName(arr, name) {
  let name_exist = false;
  let name_Lower_case = name.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === name_Lower_case) {
      return (name_exist = true);
    }
  }
  return name_exist;
}

// console.log(findName(["Amit", "Kartik", "Rahul", "Neha", 0], "kartik"));
// console.log(findName(["AMIT", "Kartik", "Rahul", "Neha"], "AMit"));

/*
Problem 1:
You have a basket of apples: [4, 6, 2, 8, 3].
What is the total number of apples?
 */
function findApplesSum(arr) {
  let applesSum = 0;
  for (let i = 0; i < arr.length; i++) {
    applesSum += arr[i];
  }
  return applesSum;
}

console.log(findApplesSum([4, 6, 2, 8, 3]));

/*
Problem 2:
You are given a list of temperatures in °C: [30, 31, 28, 33, 29].
How would you find the average temperature?
→ Break down the logic in steps.
*/

function findTheAverageTemperature(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

let temperatures = findTheAverageTemperature([30, 31, 28, 33, 29]);
console.log(`The average temperature is ${temperatures.toFixed(2)}°C`);

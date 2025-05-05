/*
Task
Create a function printCity() with a let variable city = "Delhi" inside.

Try printing city inside the function (✅) and outside the function (❌).

Create an if block, declare a const age = 25 inside it, and try printing it outside (❌).

Declare a global variable country = "India" and access it inside a function.
*/

function printCity() {
  var city = "New York";
  console.log(city); // ✅
}

printCity();
// console.log(city);

if (true) {
  const age = 25;
  console.log(age);
}

// console.log(age);

// const country = "India";

// function accessCountry() {
//   console.log(country); // ✅
// }
// accessCountry();

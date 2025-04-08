/*
Task for You:
Create an object car → { brand: "Tesla", model: "Model S", year: 2022 }

Destructure brand and model into variables.

Create an array fruits → ["Apple", "Banana", "Orange"]

Destructure the first two fruits into variables.

Print all results.
*/

const car = { brand: "Tesla", model: "Model S", year: 2022 };
const { brand, model } = car;
console.log(brand, model);

const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

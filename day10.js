/*
Task for You:
Create an object laptop with:

brand: "Dell"

model: "XPS 15"

price: 1500

Use for...in loop to print all keys & values.

Use Object.keys() to print all keys.

Use Object.values() to print all values.

Use Object.entries() to print key-value pairs.
*/

const laptop = {
  brand: "Dell",
  model: "XPS 15",
  price: 1500,
};

for (key in laptop) {
  console.log(key + ": " + laptop[key]);
}

console.log(Object.keys(laptop));
console.log(Object.values(laptop));
console.log(Object.entries(laptop));

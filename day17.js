/*
 Your Task for Day 17:
Create an array of 5 of your favorite food items.

Print all items using:

for loop

while loop

for...of loop
*/

const vegetables = ["Carrot", "Broccoli", "Cucumber"];

for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

for (const vegetable of vegetables) {
  console.log(vegetable);
}

let i = 0;
while (i < vegetables.length) {
  console.log(vegetables[i]);
  i++;
}

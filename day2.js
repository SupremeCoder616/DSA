/*
Task for You:
Create an array of 5 colors.

Add a new color to the end and beginning.

Remove the last and first color.

Print the final array.
*/

const color = ["Red", "Blue", "Green", "Yellow", "Orange"];

color.push("Pink");
color.unshift("Purple");
color.pop();
color.shift();

console.log(color);

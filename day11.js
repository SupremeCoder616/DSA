/*
 */

const person1 = { name: "Kartik", age: 21 };
const person2 = { city: "New York", country: "USA" };
const mergedObjWithAssign = Object.assign({}, person1, person2);
const mergedObjWithSpread = { ...person1, ...person2 };
const personCopyWithAssign = Object.assign({}, person1);
const personCopyWithSpread = { ...person1 };
console.log(mergedObjWithAssign);
console.log(mergedObjWithSpread);
console.log(personCopyWithAssign);
console.log(personCopyWithSpread);

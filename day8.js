/*
Task:
*/

const student = {
  name: "John",
  age: 20,
  subjects: ["Math", "Science", "English"],
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

console.log(student.name);
console.log(student.age);
student.greet();

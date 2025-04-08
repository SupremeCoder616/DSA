/*
🧠 Your Task:
Create a variable marks = 65.

Use if...else if...else to:

Print “Excellent” if marks > 90

Print “Good” if marks > 70

Print “Average” if marks > 50

Print “Fail” otherwise

Use ternary to check:

If marks > 60 → print “Passed”

Else → print “Failed”
*/

const marks = 95;

if (marks > 90) {
  console.log("Excellent");
} else if (marks > 70) {
  console.log("Good");
} else if (marks > 50) {
  console.log("Average");
} else {
  console.log("Fail");
}

console.log(marks > 60 ? "You passed!" : "You failed.");

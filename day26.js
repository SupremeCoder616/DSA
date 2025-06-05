/* Task 1: Get current date and time */
const now = new Date();
console.log("Current Date & Time:", now);

/* Task 2: Extract parts of the date */
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day (0-Sun):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

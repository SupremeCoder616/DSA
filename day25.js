/* Task 1: Delay a message using setTimeout */
// setTimeout(() => {
//   console.log("This message appears after 2 seconds");
// }, 2000);

/* Task 2: Repeated message using setInterval and stop it using clearInterval */
let count = 0;

const intervalId = setInterval(() => {
  console.log("Repeating message:", count);
  ++count;

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Stopped interval");
  }
}, 1000);

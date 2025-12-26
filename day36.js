let arrNum = [3, -2, 5, 0, -8, 4];

function sumOfPositiveNum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (0 < arr[i]) {
      sum += arr[i];
    }
  }
  return sum;
}

// console.log(sumOfPositiveNum(arrNum));

function boxPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j == 1 || j === n) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    pattern += "\n";
  }

  console.log(pattern);
}

// boxPattern(4);

function diamondPattern() {
  let n = 5; // must be an odd number
  let mid = Math.floor(n / 2);

  // Upper half (including middle)
  for (let i = 0; i <= mid; i++) {
    let line = "";

    // spaces
    for (let j = 0; j < mid - i; j++) {
      line += " ";
    }

    // stars
    for (let k = 0; k < 2 * i + 1; k++) {
      line += "*";
    }

    console.log(line);
  }

  // Lower half
  for (let i = mid - 1; i >= 0; i--) {
    let line = "";

    // spaces
    for (let j = 0; j < mid - i; j++) {
      line += " ";
    }

    // stars
    for (let k = 0; k < 2 * i + 1; k++) {
      line += "*";
    }

    console.log(line);
  }
}

// diamondPattern();

function diamondPattern2() {
  let n = 3; // height of top half
  let width = 2 * n - 1;

  // Top half
  for (let i = 1; i <= n; i++) {
    let line = "";

    // spaces
    for (let s = 0; s < n - i; s++) {
      line += " ";
    }

    // stars
    for (let st = 0; st < 2 * i - 1; st++) {
      line += "*";
    }

    console.log(line);
  }

  // Bottom half (starts again from n)
  for (let i = n; i >= 1; i--) {
    let line = "";

    // spaces
    for (let s = 0; s < n - i; s++) {
      line += " ";
    }

    // stars
    for (let st = 0; st < 2 * i - 1; st++) {
      line += "*";
    }

    console.log(line);
  }
}

// diamondPattern2();

// Leetcode qustion in this
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }

  return this[this.length - 1];
};

let val = [null, {}, 3];
console.log(val.last());

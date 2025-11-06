// 1.Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)

// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

// assign the values to the variable.
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

let x = 5;

// x = x + 3;
// x += x + 3;
// x -= x + 3;
// x *= x + 3;
x /= x + 3;

console.log(x);

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

let count = 5;
// console.log(count)
// console.log(count++)
// console.log(count)

console.log(count);
console.log(count--);
console.log(count);

// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

console.log(5 == "5");
console.log(5 === "5");

// e. Check if 10 is greater than 5, less than 20, and equal to 10.
let p = 10;
console.log(p > 5);
console.log(p < 20);
console.log(p == 10);

// 2. Variable Hoisting in JavaScript
// a. Predict output of:
console.log(d);
var d = 10;

// b. Predict output of:
console.log(z);
let z = 10;

// c. Predict output of:
test();
function test() {
  console.log("Hello");
}

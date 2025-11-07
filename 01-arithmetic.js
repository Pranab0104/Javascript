// // 1.Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// // Comparison, Logical, Bitwise)

// // a. Create two numbers a = 10 and b = 3.
// // Perform and log: a + b, a - b, a * b, a / b, a % b.

// // assign the values to the variable.
// let a = 10;
// let b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// // b. Write: let x = 5; x = x + 3;
// // Now rewrite the same using +=.
// // Do the same for -=, *=, /=.

// let x = 5;

// // x = x + 3;
// // x += x + 3;
// // x -= x + 3;
// // x *= x + 3;
// x /= x + 3;

// console.log(x);

// // c. let count = 5;
// // Use count++ and log value before and after.
// // Repeat for count–.

// let count = 5;
// // console.log(count)
// // console.log(count++)
// // console.log(count)

// console.log(count);
// console.log(count--);
// console.log(count);

// // d. Compare two values: 5 == “5” and 5 === “5”.
// // Observe difference.

// console.log(5 == "5");
// console.log(5 === "5");

// // e. Check if 10 is greater than 5, less than 20, and equal to 10.
// let p = 10;
// console.log(p > 5);
// console.log(p < 20);
// console.log(p == 10);

// // 2. Variable Hoisting in JavaScript
// // a. Predict output of:
// console.log(d);
// var d = 10;

// // b. Predict output of:
// console.log(z);
// let z = 10;

// // c. Predict output of:
// test();

// function test() {
//   console.log("Hello"); //its prints hello but before runs this code you have to clear all the before lines of code.
// }

// // d. Try writing a function expression before initialization and call it:
// // Write what happened and why.
// hello();
// var hello = function () {
//   console.log("Hi");
// };

// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

// let age = +prompt("How old are you?");
// if (age > 18) {
//   console.log("Nice you are adult");
// } else {
//   console.log("You are minor.");
// }

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

// let marks = +prompt("What's your score on exams?");

// if (marks >= 90) {
//   console.log("You are first class distinction with A grade.");
// } else if (marks >= 75) {
//   console.log("You are first class only with B grade.");
// } else if (marks >= 50) {
//   console.log("You are first class only with C grade.");
// } else {
//   console.log("You failed the exam.");
// }

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

// let city = "Bhopal"

// if (city === "Bhopal") {
//     console.log("MP")
// }
// else if (city === "Delhi") {
//     console.log("Capital")
// }
// else if (city === "Chandrapur") {
//     console.log("MS")
// }
// else{
//     console.log("Unknown city")
// }

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

// let score = prompt("How much did you score in exam?");

// score = score.trim();
// if (score === "") {
//   console.error("❌ Blank spaces are not allowed!");
// }
// else if (isNaN(score)) {
//   console.error("❌ Please enter a valid number!");

// }
// else {
//   score = Number(score);
//   if(score > 0 || score <100){
//     console.error("❌ Please enetr a valid detail or score!")
//   }
//   else{
//       let result = (score >= 50) ? "✅ Pass" : "❌ Fail";
//       console.log(result);
//   }
// }

//     e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

// let temperature = prompt("What's the temperature today?");
// temperature = temperature.trim();
// if (temperature === "") {
//   console.error(" Blank spaces are not allowed!");
// }
// else if (isNaN(temperature)) {
//   console.error(" Please enter a valid number!");
// }
// else {
//   temperature = Number(temperature);
//   if (temperature < 0 || temperature > 100) {
//     console.error("⚠️ Please enter a temperature between 0 and 100!");
//   }
//   else {
//     let result = (temperature >= 30) ? "🔥 Hot" : "❄️ Cold";
//     console.log(result);
//   }
// }

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

// let day = prompt("What's the day today?");
// day = day.trim();
// if (day === "") {
//   console.error("Blank spaces are not allowed here ❌");
// } else if (isNaN(day)) {
//   console.error("Only valid numbers between 1 to 7.");
// } else {
//   day = Number(day);

//   {
//     switch (day) {
//       case 1:
//         console.log("Monday");
//         break;
//       case 2:
//         console.log("Tuesday");
//         break;
//       case 3:
//         console.log("Wednesday");
//         break;
//       case 4:
//         console.log("Thursday");
//         break;
//       case 5:
//         console.log("Friday");
//         break;
//       case 6:
//         console.log("Saturday");
//         break;
//       case 7:
//         console.log("Sunday");
//         break;
//       default:
//         console.error("Invalid day! please enetr numbers between 1 to 7.");
//     }
//   }
// }

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let age = prompt("Enter your age: ");
let country = prompt("Country must be India, Enter your country: ");

age = age.trim();
country = country.trim();

if (age === "" || country === "") {
  console.error(" Blank spaces are not allowed!");
}
else if (isNaN(age)) {
  console.error(" Age must be a number!");
}
else if (Number(age) > 18 && country.toLowerCase() === "india") {
  console.log("✅ Eligible for Vote");
}
else {
  console.log(" Not Eligible");
}
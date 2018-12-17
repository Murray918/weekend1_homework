// Variables and Datatypes


// // A. Q + A

// How do we assign a value to a variable?
// We use the '=' token to assign value to a declared variable.
// ex. let a = 'assigned'

// How do we change the value of a variable?
// We change the value of a variable by reassigning the variable with a new statement.
// ex. a = 'changed'

// How do we assign an existing variable to a new variable?
// If I understand the question correctly, we declare the new variable, and put the existing one after the '='.
// ex. let b = a

// Remind me, what are declare, assign, and define?
// To declare a variable is to allocate memory for it. To define it is to assign the declared variable a value.
// ex. let c (declare variable c) = (assign) 'cupcake' (definition) > (= 'cupcake') is where we define variable c.

// What is pseudocoding and why should you do it?
// Pseudocoding is the act of writing out code in plain English before going about trying to actually write it in
// JavaScript (or another language). We should do it because it helps us to lay out our objectives and plan of attack in
// more natural language before we go about trying to take the steps and piece by piece use them to create JavaScript code.
// I think in some way it could be like writing an outline of a paper before you even write the first draft.

// What percentage of time should be spent thinking about how you're going to solve a problem
// vs actually typing in code to solve it?
// We should spend the vast majority of our time thinking about how we're going to solve a problem
// before we go about actually writing the code. I still struggle with this concept because I feel like just going in and
// writing some JavaScript helps to break the ice and get me thinking. Even if I have to scrap everything and start all over,
// it helps me to get through the process of solving the problem.


// // B. Strings

// // 1. Create a variable called firstVariable.
// let firstVariable
// // Assign it the value of the string "Hello World"
// firstVariable = 'Hello World'
// // Change the value of this variable to some number.
// firstVariable = 11
// // Store the value of firstVariable in a new variable called secondVariable
// let secondVariable = firstVariable
// // Change the value of secondVariable to any string.
// secondVariable = "string cheeze"
// // What is the value of firstVariable?
// 11

// // 2. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes
// // the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

// let yourName = "Tristan";
// let introduction = "Hello, my name is " + yourName


// // C. Booleans

// // Using the provided variable definitions, replace the blanks so that all log statements print true in the console.
// // Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   console.log(true !== false);
//   console.log(false === false || false === false ||false === false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a + b === c);
//   console.log(a * a === d);
//   console.log(48 !== '48');


// // D. The farm

// // Declare a variable animal. Set it to be either "cow" or something else.
// let animal = "pig";
// // Write code that will print out "mooooo" if the it is equal to cow.
// if (animal === "cow") {
// 	console.log("mooooo");
// } else {
// 	console.log("Hey! You're not a cow.")
// }
// // Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// // Commit.


// // E. Driver's Ed

// // Make a variable that will hold a person's age. Be semantic.
// let age = 1;
// // Write code that will print out "Here are the keys", if the age is 16 years or older.
// // If the age is younger than 16, a message should print "Sorry, you're too young."
// if (age >= 16) {
// 	console.log("Here are the keys.");
// }  else {
// 	console.log("Sorry, you're too young.")
// }


// II. Loops
// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)


// // A. The basics

// // Write a loop that will print out all the numbers from 0 to 10, inclusive.
// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// }
// // Write a loop that will print out all the numbers from 10 up to and including 400.
// for (let i = 10; i <= 400; i++) {
// 	console.log(i);
// // }
// // Write a loop that will print out every third number starting with 12 and going no higher than 4000.
// for (let i = 12; i <= 4000; i += 3) {
// 	console.log(i);
// }


// // B. Get even

// // Print out the even numbers that are within the range of 1 - 100.
// // Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
// for (let i = 2; i <= 100; i += 2) {
// 	console.log(i + " <-- is an even number.");
// }






//1. How do we assign a value to a variable?
//A. You declare the Variable and assing a value with "Equals (=)" (Let x = 10)	 

//2. How do we change the value of a variable?
//A. you just re-assing a value (x = 5)

//3. How do we assign an existing variable to a new variable?
//A. by assigning the existing variable to the new one (Let y = x)

//4. Remind me, what are declare, assign, and define?
//A. to declare is to create the variable, assing is giving the variable a value, and 

//5. What is pseudocoding and why should you do it?
//A. pseudocoding mean writting your code in you own words before you actually start coding. It helps you visualize and plan how are you going to code.

//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//A. 75 -90% planning and 10-25% typing code.

/*
let firstVariable = "Hello World";
firstVariable = 2;

let secondVariable = firstVariable;
secondVariable = "Hello Friend";

//the value of firstVariable is 2

let yourName = "Jamal Amar";

console.log("Hello, my name is", `${yourName})
*/

/*
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true || false);
  console.log(false && false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b < c);
  console.log(a && a < d);
  console.log(48 !== '48');
*/

/*
let animal = "cow";

if (animal === "cow") {
	console.log("Mooooooo")
}
	else {
		console.log("Hey! You're not a cow")
}
*/

/*
let jamal = {
	age: 24
}

if (jamal.age >= 16) {
	console.log("Here are the keys")
}
else {
	console.log("Sorry, you're too young")
}
*/


/*
for(let i = 0; i<10; i++) {
	console.log(i)
}

for(let i = 10; i<=400; i++) {
	console.log(i)
}

for(let i = 12; i<4000; i++) {
	if (i%3===0) {
		console.log(i)
	}
}
*/

/*
for(let i = 1; i<=100; i++) {
	if (i%2===0) {
		console.log(i, "<-- is an even number.")
	}
}
*/


for (let i = 0; i<=100; i++) {
	if(i%5===0) {
		console.log("I found a", i, "High five!")
	}
	else if (i%3===0) {
		console.log("I found a", i, "Three is a crowd")
	}
}
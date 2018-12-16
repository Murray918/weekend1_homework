//1.1) Variables & Datatypes

/*
Q.1 How do we assign a value to a variable?
A.1 Use the keywords let, const or var to assign a variable.  For example...
let i = 0;

Q.2 How do we change the value of a variable?
A.2 use a single "=" equal sign to change the value of a variable.  For example...
i=5;


Q.3 How do we assign an existing variable to a new variable?
let x = i;


Q.4 Remind me, what are declare, assign, and define?
A.4 Declare  this is the let i part
Assign this is the "=" part
Define this is the value.  

Q.5 What is pseudocoding and why should you do it?
A.5 It gives high level flow of the program and is human readable vs writing actual code.  It will contain loops showing the flow and steps to complete the program 

Q.6 What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
A.6  Thinking about how to solve the problem should take ~80% of the time and coding should take ~20%.
     Another average is a programmer can program 10 lines of tested code per day!
*/

//1.2)  Strings

console.log(`******* #1.B) Strings *******` );

let firstVariable;
firstVariable = "Hello World";
firstVariable = 0;
let secondVariable = firstVariable;
secondVariable = "Dad";
//What is the value of firstVariable.  It is still 0 from line 34
yourName = "Christopher Conley"

let func = function(str)
{
	return `Hello, my name is ${yourName}`;
}
console.log(func(yourName));


//1.3)  Booleans.  Make the console statement print true
console.log(`******* #1.C) Booleans *******` );

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false == false == false == false == false == false == true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a == a != d);
console.log(48 == '48');


console.log(`******* #1.D) The Farm *******` );
let animalArray = ["cow", "dog", "cat", "horse", "cow"]
let animal = "moo";

for (let animals of animalArray )
{
	if (animals === "cow")
	{
		console.log(`Mooooo  You are a ${animals}`);
	}
	else
	{
		console.log(`You are not a cow!!! You are a ${animals}`);
	}
}





console.log(`******* #1.E) Driver's Ed *******` );




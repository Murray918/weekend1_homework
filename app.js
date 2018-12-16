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

let ageArray = ["16", "12", "23", "55", "15"]
let driversThreshold = 16;

for (let ages of ageArray )
{
	if (ages >= driversThreshold)
	{
		console.log(`Here are the keys.  Age = ${ages}`);
	}
	else
	{
		console.log(`Sorry, you are too young!  Age = ${ages}`);
	}
}

console.log(`******* #2.A) Loops The Basics *******` );

for (let loopCount1 = 0; loopCount1 <= 10; loopCount1++)
{
	console.log(`Count is: ${loopCount1}`);
}
console.log(`-----------------------------------------------`);
for (let loopCount2 = 10; loopCount2 <= 400; loopCount2++)
{
	console.log(`Count is: ${loopCount2}`);
}
console.log(`-----------------------------------------------`);
for (let loopCount3 = 12; loopCount3 <= 4000; loopCount3++)
{
	if (loopCount3 % 3 == 0)
		console.log(`Count is: ${loopCount3}`);
}

console.log(`******* #2.B) Get Even *******` );

for (let loopCount4 = 1; loopCount4 <= 100; loopCount4++)
{
	if (loopCount4 % 2 == 0)
		console.log(` ${loopCount4} <-- is an even number`);
}

console.log(`******* #2.C) Give me 5's *******` );

for (let loopCount5 = 0; loopCount5 <= 100; loopCount5++)
{
	if (loopCount5 % 5 == 0)
		console.log(`I found a ${loopCount5}. High Five!`);
	else if (loopCount5 % 3 == 0)
		console.log(`I found a ${loopCount5}. Three is a crowd`);
}


console.log(`******* #2.D) Savings Account *******` );

let bankAccount = 0;
for (let loopCount6 = 1; loopCount6 <= 10; loopCount6++)
{
	bankAccount += loopCount6;
}

console.log(`I should have \$${bankAccount}. Boooooo!!!`);
console.log(`-------------------------------------------------` );
bankAccount = 0;
for (let loopCount7 = 1; loopCount7 <= 100; loopCount7++)
{
	bankAccount += (loopCount7*2);
}

console.log(`I should have \$${bankAccount}. Due to a massive pay raise!!!`);

console.log(`******* #2.E) Multiples of 3 and 5 *******` );
//I did this problem in the last homework assignment.  Please see Github Arrays_Loops_Objects-Homework repository
console.log(`Skipped because this was done already in a previous assignment.  Please see Github repository called "Arrays_Loops_Objects-Homework"` );



console.log(`******* #3.A) Talk about it *******` );
console.log(`Elements` );
console.log(`No they are not guaranteed to be sorted` );
console.log(`My collection of Star Wars Toys can be placed into an array` );

/*
- What are the things in an array called?
Elements
- Do Arrays guarantee those things will be in order?
No
- What real-life thing could you model with an array?
My collection of Star Wars Toys
*/


console.log(`******* #3.B) Easy does it *******` );

let quotes = ["Aye Pirate", "What you looking at?", "Merry Xmas!"];


console.log(`******* #3.C) Accessing elements *******` );

const randomThings = [1, 10, "Hello", true]

randomThings[2] = "World";
console.log(randomThings);

console.log(`******* #3.D) Change values *******` );
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
//The box notation ourClass[2], splice(2,1)

//Change the value of "Github" to "Octocat". 
//If this array become sorted or changed in any way then this code below is busted!!! 
ourClass.pop();
ourClass.push("Octocat");
console.log(ourClass);

//Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
console.log(ourClass);


console.log(`******* #3.E) Mix It Up *******` );
const myArray = [5, 10, 500, 20]
//Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Egon", "Stan");
console.log(myArray);

//Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

//Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
//Remove the string of your choise from the end of the array.
myArray.splice(-3,1);  // removing the 20
console.log(myArray);

//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
//Yes -- reverse is destructive and will alter the original array!!!
//Mutate means that it will alter the original variable.  
myArray.reverse();
console.log(myArray);

console.log(`******* #3.F) Biggie Smalls *******` );
let bigSmall = [101,201,4,88,999,69,888];

for (let i=0; i<bigSmall.length; ++i )
{
	if (bigSmall[i] < 100 )
	{
		console.log(`Number is: ${bigSmall[i]}.  little number`);
	}
	else
	{
		console.log(`Number is: ${bigSmall[i]}.  BIG number`);

	}
}

console.log(`******* #3.G) Monkey in the Middle *******` );
bigSmall = [5,10,9,4,100,0,-1];
for (let i=0; i<bigSmall.length; ++i )
{
	if (bigSmall[i] < 5 )
	{
		console.log(`Number is: ${bigSmall[i]}.  little number`);
	}
	else if (bigSmall[i] > 10 )
	{
		console.log(`Number is: ${bigSmall[i]}.  BIG number`);

	}
	else
		console.log(`Number is: ${bigSmall[i]}.  MONKEY`);
}


console.log(`******* #3.H) What's in Your Closet? *******` );
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];


//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

//Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
let chop = kristynsCloset.splice(-1,1,"raybans")
kristynsCloset.push(String(chop));
console.log(kristynsCloset);

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
let val = kristynsCloset.lastIndexOf('yellow knit hat');
kristynsCloset[val] = "stained knit hat";
console.log(kristynsCloset);
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0]);
//In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2]);
//Access one item from Thom's accessories array.
console.log(thomsCloset[2][2]);
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Tom is looking fierce in the ${thomsCloset[0][3]}, ${thomsCloset[1][2]} and ${thomsCloset[2][2]} `);
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

val = thomsCloset[1].lastIndexOf('PJs');
thomsCloset[1][val] = "Footie Pajamas";
console.log(thomsCloset);



console.log(`******* #4.A) printGreeting *******` );

let printGreeting = function(name)
{
	return `Hello there, ${name}!`
}

console.log(printGreeting("Slimer"));

console.log(`******* #4.B) printCool *******` );

let printCool = function(name)
{
	return `${name} is cool`
}

console.log(printCool("Captain Reynolds"));

console.log(`******* #4.C) calculateCube *******` );

let calculateCube = function (num)
{
	return num*num*num;
}

console.log(calculateCube(5));

console.log(`******* #4.D) siVowel *******` );
var re = /a|e|i|o|u/gi;

let isVowel = function(str)
{
	if (str.match(re))
	{
		return true;
	}
	else
	{
		return false;
	}

}

console.log(isVowel("a"));


console.log(`******* #4.E) getTwoLengths *******` );

let getTwoLengths = function(str1,str2)
{
	let array =  [];
	array.push(str1.length, str2.length)
	return array;
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

console.log(`******* #4.F) getMultipleLengths *******` );

let getMultipleLengths = function(array)
{
	let arrayStringLength =  [];
	for (elements of array)
	{
		arrayStringLength.push(elements.length)	
	}
	return arrayStringLength;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

console.log(`******* #4.G) maxOfThree *******` );

let maxOfThree = function(nums1,nums2,nums3)
{
	let maxNum = [];  //empty array
	maxNum.push(nums1, nums2, nums3);  //push individual numbers into an array to sort
	maxNum.sort((a, b) => b - a);  //sort from max to min
	return maxNum.shift();  //return the first element which should be the largest number 
}

console.log(maxOfThree(6, 9, 1));

console.log(`******* #4.H) printLongestWord *******` );

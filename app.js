// I. Variables & Datatypes
//A. Q+A
// 		1. After declaring the variable assign a value with the equals sign (let x = 0)
// 		2. Change the value of a variable after declaring it by calling it and reassigning the value with the equals sign (x = 3)
// 		3. Use the equals sign to assign the value of a existing variable to a new variable (let y = x)
//  	4. You DECLARE the existence of a variable. You ASSIGN the value of the variable after declaring it. You DEFINE a function by giving it properties.
// 		5. You use pseudocoding to talk out coding prior to actually writing code. You pseudocode to talk out some of the 
// 		6. 75-90% planning, and 10-25% writing code

//B. Strings
// 		1.
let firstVariable = "Hello World"
firstVariable = 5
let secondVariable = firstVariable
secondVariable = "Hi World"
//  the value of firstVariable is 5.
// 		2.
let yourName = "Lance"
"Hello, my name is" + yourName
//C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log(false + false + false + false + false + false != true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(48 == '48');

// D.
//  1.
let animal = "cow"
if (animal = "cow"){
	console.log("mooooo")
	} 	
else {
		console.log("Hey! You're not a cow!")
	}

// E.
let driversAge = 16
if (driversAge >= 16) {
	console.log("Here are the keys.")
}
else {
	console.log("Sorry, you're too young.")
}

// II. Loops
// A.
// for (let x = 0; x <= 10; x++)
// for (let x = 10; x <= 400; x++)
// for (let x = 12; x <= 4000; x+=3)
// B.
for (let y = 2; y <=100; y+=2)
	console.log(y + " <-- is an even number")
// C.
for (let z = 3; z <= 100; z++){
	if (z % 5 === 0)
		console.log("I found a " + z + ". " + "High five!")
	if (z % 3 === 0)
			console.log("I found a " + z + ". " + "Three is a crowd.")
}
// D.
 // 1.
let bank_account = 0
for (let x = 0; x <= 10; x++){
	bank_account+=x
}
// console.log(bank_account)
//  2.
bank_account = 0
for (let x = 0; x <= 100; x++){
	bank_account+=x
}
console.log(bank_account*2)

// E.
let sum = 0
for (j = 1; j <= 1000; j++)
	if (j % 3 == 0 || j % 5 ==0){
    sum += j}
		console.log(sum)

// III
//  A.
//   1. Elements
	 // 2. While the position of the elements is determined by the place they hold in the array, items can be moved around with different methods.
	 // 3. A car, and then list out the properties of the vehicle within the array.

//  B.
let quotes = ["I have pop pop in the attic", "Her?", "Has anybody in this family ever seen a chicken?"]

//  C.
const randomThings = [1, 10, "Hello", true]
randomThings[0]
randomThings[2] = "World"
console.log(randomThings)

//  D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2]
ourClass[4] = "Octocat"
ourClass.push("Cloud City")
console.log(ourClass)

//  E.
const myArray = [5, 10, 500, 20]
myArray.push("Egon", 400)
myArray.shift()
myArray.unshift("Bob Marley")
myArray.pop()
myArray.reverse()
// It does not return anything, though it does mutate the Array, changing the order that the Array was originally in.

// F.
let numero = 10 
if (numero < 100){ 
	console.log("little number")
} else {(numero >= 100)
	console.log("big number")}

// G.
let numeric = 25
if (numeric < 5){
	console.log("little number")
} 
else if (numeric > 10){
	console.log("big number")}
else {console.log(monkey)}

 // H.
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
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!") 
kristynsCloset.splice(5, 0, 'raybans')
kristynsCloset[6] = "stained knit hat"
console.log(thomsCloset[0][0])
console.log(thomsCloset[1][1])
console.log(thomsCloset[2][2])
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ', ' + thomsCloset[2][2] + '.')
thomsCloset[1][2] = "Footie Pajamas"

// IV
//  A.
function printGreeting(name){
	console.log("Hello there, " + name + "!")
}
printGreeting("Slimer")

//  B.
function printCool(name){
console.log(name + " is cool!")
}
printCool("Captain Reynolds")

//  C.
function calculateCube(numeral){
	console.log(numeral*numeral*numeral)}
calculateCube(6)

//  D.
function isVowel(vowel){
	if(vowel === "a"||"e"||"i"||"o"||"u")
		console.log()
}
isVowel("A")

// Struggled to figure this one out.

//  E.
function getTwoLengths(){

}
getTwoLengths("Hank", "Hippopopalous")
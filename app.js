// Variables and Datatypes

//A
// How do we assign a value to a variable?
// 	let x = 0 

// How do we change the value of a variable?
//	numbers can be incremented or decremented for example. Strings can be changed by assigning a new string to the same variable.

// How do we assign an existing variable to a new variable?
// 	let x = 0 and then we can say let y = x

// Remind me, what are declare, assign, and define?
// 	Declare would be creating a variable like, let x. We then assign a value to x such 0 which looks like let x = 0.

// What is pseudocoding and why should you do it?
// 	pseudocoding is a term used to describe solving technical problems in the real world. It helps by giving a better understanding of solving problems.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 	How ever long it takes to understand the problem.

// B
// let firstVariable = "Hello World"
// firstVariable = 0
// let secondVariable = firstVariable
// secondVariable = "Yollo World"
// // The value of firstVariable = 0

// let yourName = "AJ"
// let myName = function(){
// 	return console.log("Hello, my name is " + yourName)
// }
// myName()

// C
  // const a = 4;
  // const b = 53;
  // const c = 57;
  // const d = 16;
  // const e = 'Kevin';

  // console.log(a != b);
  // console.log(c != d);
  // console.log('Name' == 'Name');
  // console.log(true != false);
  // console.log(false == false == false == false == false == false == true);
  // console.log(false == false)
  // console.log(e == 'Kevin');
  // console.log(a != b != c);
  // console.log(a == a != d);
  // console.log(48 == '48');

// D
// let animal = "cow"
// if(animal === "cow"){
// 	return console.log("mooooooo")
// }
// else{
// 	console.log("Hey! You're not a cow")
// }

// E
// let age = 0
// if(age >= 16){
// 	console.log("Here are the keys")
// }
// else{
// 	console.log("Sorry, you're too young.")
// }

// LOOPS
// A
// 1
// for(let i = 0; i <= 10; i++){
// 	console.log(i)
// }

// 2
// for(let i = 10; i <= 400; i++){
// 	console.log(i)
// }

// 3
// for(let i = 12; i <= 4000; i++){
// 	if(i % 3 === 0){
// 		console.log(i)
// 	}
// }

// B
// for (let i = 0; i <= 100; i++){
// 	if(i % 2 === 0){
// 		console.log(i + " is an even number")
// 	}
// }

// C
// 1 and 2
// for (let i = 3; i <= 100; i++){
// 	if(i % 3 === 0){
// 		console.log("I found a " + i + ". Three is a crowd")
// 	}
// 	else if(i % 5 == 0){
// 		console.log("I found a " + i + ". High five!")
// 	}
// }

// D
// 1
// let bank_account = 0
// for (let i = 0; i <= 10; i++){
// 	bank_account += i
// 	console.log(bank_account)
// }
// 2
// let bank_account = 0
// for (let i = 0; i <= 100; i++){
// 	bank_account += i * 2
// 	console.log(bank_account)
// }

// E
// let sum = 0
// for (let i = 0; i < 1000; i++){
// 	if(i % 3 === 0 || i % 5 === 0){
// 		sum += i
// 		console.log(sum)
// 	}
// }

// Section III
// A
// 1 What are the things in an array called?
// Arrays can store values and objects (objects can store methods).

// 2 Do Arrays guarantee those things will be in order?
// Yes unless specified

// 3 What real-life thing could you model with an array?
// Array is like an organizer, so you could model a chess board after it.
// Your old christamas decorations or your shoe collection.

// B
// let quotes = ["","",""]

// C
// 1
// const randomThings = [1, 0, "Hello", true]
// you call the array, randdomThings and access which element you'd like by 
// placing [] at the end of the variable, randomThings[]. To choose which 
// element you'd like to access you place a value within 
// the brackets, randomThings[0] would return the first element of the array.

// 2
// randomThings[2] = "World"
// console.log(randomThings[2])

// D
// 1
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//ourClass[2]

// 2
// ourClass[4] = "Octocat"
// ourClass.push("Cloud City")
// console.log(ourClass)

// E
// const myArray = [5, 10, 500, 20]
// // 1
// myArray.push("Egon", "Raymond")
// myArray.shift()
// myArray.unshift("Bob Marley")
// myArray.splice(4,1)
// myArray.reverse()
// console.log(myArray)
// The Reverse method reverses the order of the array. So 0, 1, 2 will now be , 2, 1, 0
// I believe this will permanently reverse the array so if ever called again it will be reversed.

// F
// let myNumber = 20
// // if(myNumber < 100){
// // 	console.log("little number")
// // }
// // else{
// // 	console.log("big number")
// // }

// G
// if(myNumber < 5){
// 	console.log("little number")
// }
// else if(myNumber > 10){
// 	console.log("big number")
// }
// else{
// 	console.log("monkey")
// }

// H
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// kristynsCloset.splice(6,0,"raybans")
// kristynsCloset[5] = "stained knit hat"
// //console.log(kristynsCloset)
// console.log("Kristyn is rocking that " + kristynsCloset[6] + " today!")
// thomsCloset[0][0]
// thomsCloset[1][1]
// thomsCloset[2][1]
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and a " + thomsCloset [2][1])
// thomsCloset[1][2] = "Footie Pajamas"
// console.log(thomsCloset[1][2])

// Section IV
// A
// yes

// B
// let printCool = function(name){
// 	console.log(name + " is cool")
// }
// printCool("Captain Reynolds")

// C
// let calculateCube = function(num){
// 	console.log(num * 25)
// 	return num

// }
// calculateCube(5)

// D
// Not sure how this would work.
// let isVowel = function(string){
// 	console.log(string)
// }
// isVowel("ab")

// E
// let getTwoLengths = function (name1, name2){
// 	let myArray = []
// 	myArray.push(name1.length)
// 	myArray.push(name2.length)
// 	console.log(myArray)

// }
// getTwoLengths("hank", "Hippopopalous")

// F
// Need help
// let getMultipleLengths = function(arrayOfStrings){
// 	let b = 0
// 	for(let i = 0; i < arrayOfStrings.length; i++){
// 		arrayOfStrings.push()
// 	}
// 	console.log(arrayOfStrings[0].length)
// }
// getMultipleLengths(["hello", "what", "is", "up", "dude"])

// G
// Not sure what is being asked.
//  let maxOfThree = function(num1, num2, num3){
// 	for(let i = 0; i >= 3; i++)
// 	{
// 		if(i === 9){
// 			return 
// 		}
// 		else{

// 		}
// 	}
// }
// maxOfThree(6, 9, 1)

// H
// let names = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]
// let printLongestWord = function(longNames){
// 	let longest = names

// 	for(let i = 0; i < names.length; i++){
// 		if(names[i].length > longest.length){
// 			longest = names[i]
// 		}
// 	}
// 	 console.log(longest)
// }
// printLongestWord(names)

// I
// Don't understand how to solve problem
// let transmogrify = function(num1, num2, num3){
// 	return num1 * num2
// }
// transmogrify(5, 3, 2)

// J
// Couldn't solve
// let reverseOrder = function(string){
// 	let revArray = []
// 	for(let i = string.length-1; i >= 0; i--)
// 	{
// 		revArray.push(string[i])
// 	}

// 	console.log(revArray)
// }
// reverseOrder("Hello world")

// K
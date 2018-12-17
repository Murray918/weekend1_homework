// //b
// let firstVariable = "Hello World"
// firstVariable = 6
// console.log(firstVariable)
// let secondVariable = firstVariable
// secondVariable = "yooo"
// console.log(firstVariable)
// let yourName = "Jules Camarillo"
// console.log("Hello, my name is " + yourName +".")
// //c
// // const a = 4;
// //   const b = 53;
// //   const c = 57;
// //   const d = 16;
// //   const e = 'Kevin';

// //    console.log(a < b);
// //    console.log(c > d);
// //    console.log('Name' === 'Name');
// //    console.log(true > false);
// //    console.log(false && false && false && false && false && false || true);
// //    console.log(false === false)
// //    console.log(e === 'Kevin');
// //    console.log(a < b < c);
// //    console.log(a && a < d);
// //    console.log(48 !== '48');

// //d
// let animal = "cow"
// if (animal === "cow"){
// 	console.log("moooo")
// } else {console.log("Hey! You're not a cow!")}

// //e--coming back to E

// // let age = x
// // for ( let i = 10 ; i <25 ; i++){
// // 	if ( i < )
// // }


// //2-a-1

// let x = 0
// while (x < 11){
// 	console.log(x)
// 	x++
// }
// //2-a-2
// let y = 10
// while (y < 401){
// 	console.log(y)
// 	y++
// }

// //2-a-3
// for (i = 12; i < 4000; i++){
// 	if ( i % 3 ===0){
// 		console.log(i)
// 	}
// }
// // 2-b-1
// for (z = 0; z < 101; z++){
// 	if(z % 2 === 0 ){
// 		console.log(z)
// 	}
// }
// // 2-b-2
// for (b = 0; b < 101; b++){
// 	if(b % 2 === 0 ){
// 		console.log(b + " is an even number")
// 	} else (console.log(b))
// }
// //2-c-1
// for (d = 0; d < 101; d++){
// 	if (d % 5 === 0){
// 		console.log("I found a " + d + ". High five!")
// 	}
// }
// // 2-c-2
// for (d = 0; d < 101; d++){
// 	if (d % 5 === 0){
// 		console.log("I found a " + d + ". High five!")
// 	}else if( d % 3 === 0){
// 		console.log("I found a " + d + ". Three is a crowd")
// 	}
// }

////2d 1
// let bankAccount = function() {
// 	let total = 0;
// 	for (let i = 0; i<11; i++){
// 		total += i
// 	}
// 	return total
// }
// console.log(bankAccount())
// //2d2
// let bankAccount1 = function() {
// 	let total = 0;
// 	for (let i = 0; i<101; i++){
// 		total += i *2
// 	}
// 	return total
// }
// console.log(bankAccount1())

////2e
// let Euler = function() {
// 	total = 0
// 	for (let i = 0; i < 1000; i++){
// 		if (i % 3 === 0 || i % 5 === 0){
// 			total += i 
// 		}
// 	} return total
// }

// console.log(Euler())

////3a
////1. Elements
////2. They will be in the order entered so yes in that sense.
////3. Virtually anything that is a data set. A company directory.
////3b
// let quotes = ["Just Do It", "Hastalavista, Baby", "I declare Bankruptcyyy"]
// console.log(quotes)
////3c
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0])
// randomThings[2] = "World"
// console.log(randomThings)
////3d
// const Ourclass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// console.log(Ourclass[2])
// Ourclass.splice(4,2,"Octocat")
// Ourclass.splice(5,0,"Cloud City")
// console.log(Ourclass)
////3e
// const myArray = [5, 10, 500, 20]
// myArray.push("Egon","Jules")
// console.log(myArray)
// myArray.splice(0,0,"Bob Marley")
// console.log(myArray)
// myArray.splice(4,1)
// console.log(myArray)
// myArray.reverse()
// console.log(myArray)
////3f.
// let BiggieSmalls = 120
// if (BiggieSmalls < 100){
// 	console.log("little number")
// } else {
// 	console.log("Big number")
// }

// for (q = 0; q < 15; q++){
// 	if (q < 5){
// 		console.log("Little Number")
// 	} else if ( q > 10){
// 		console.log("Big Number")
// 	} else (console.log("Monkey"))
// }
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

// console.log("kristyn is rocking that " + kristynsCloset[2] + "!")
// kristynsCloset.splice(5, 0, "Ray Bans")
// console.log(kristynsCloset)
// kristynsCloset.splice(5,2,"stained knit hat")
// console.log(kristynsCloset)
// console.log(thomsCloset[0][0])
// console.log(thomsCloset[1][0])
// console.log(thomsCloset[2][1])
// console.log(" Thom is looking fierce in a " + thomsCloset[0][0] + ", " 
// 	+ thomsCloset[1][0] + " and " + thomsCloset[2][1] + "!" )
// thomsCloset[1][2] = "footie pajamas"
// console.log(thomsCloset)
// //4b)
// let printCool = function(name) {
// 	return name + " is cool"
// }

// console.log(printCool("Jules"))

// //4c
// let calculateCube = function(number) {
// 	return number * number * number 
// }
// console.log(calculateCube(8))
// //4d
// let isVowel = function (char) {
// 	let vowels = ['a','e','i','o','u']
// 	for (let i = 0; i < vowels.length; i++) {
// 		if (vowels[i] === char.toLowerCase() ){
// 			return true
// 		}
// 	}
// 	return false
// }

// console.log(isVowel("h"))

// //4e
// let getTwoLengths = function(string1,string2) {
// 	return [string1.length, string2.length]
// }
// console.log(getTwoLengths('jim','james'))

// //4f
// let arrayOfstrings = ["hello", "what", "is", "up", "dude"]
// let getMultiplelengths = function(arrayOfstrings) {
// 	let stringLength = []
// 	for (let i = 0; i < arrayOfstrings.length; i++) {
// 		stringLength.push(arrayOfstrings[i].length)

// 	}
// 	return stringLength
// }
// console.log(getMultiplelengths(arrayOfstrings))

// //4g

// let maxOfThree = function(n1,n2,n3){
// 	return Math.max(n1,n2,n3)
// }
// console.log(maxOfThree(3,5,9))

// //4h
// let arrayOfstringz = ["BoJack", "Princezzzsssss", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]
// let printLongestword = function(arrayOfstringz) {
// 	let longestWord = []
// 	for (let i =0; i < arrayOfstringz.length; i++) {
// 		if (arrayOfstringz[i].length > longestWord.length) {
// 			longestWord = arrayOfstringz[i]
// 		}
// 	}
// 	return longestWord
// //4i
// }
// console.log(printLongestword(arrayOfstringz))

// let transmogrify = function(n1,n2,n3) {
// 	return (n1 * n2) ** n3 
// 	}
// console.log(transmogrify(2,3,4)) 

// //4j skipping

// //4k1
// let randomNum = function() {
// 	return Math.floor(Math.random() * 10)
// }
// console.log(randomNum())
// //4k2
// let randomNum100 = function() {
// 	return Math.floor(Math.random() * 91) + 10
// }
// console.log(randomNum100())

// //4k3
// let randomNum532 = function() {
// 	return Math.floor(Math.random() * (1 + 12735) + 532)
// }
// console.log(randomNum532())
////4k5
// let quotes = ["Just Do It", "Hastalavista, Baby", "I declare Bankruptcyyy","Get to da choppa","Wilsonnn"]
// let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
// console.log(randomQuote)
////Objects A
let user = {}
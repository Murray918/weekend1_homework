/* A.
let create space 
let = new value
x = y


Pseudocode is writing out your code in a simplified manner

75% thinking 25% typing code
*/
//1.
let firstVariable = "Hello World"
firstVariable = 7
let secondVariable = firstVariable
secondVariable = "Hello"
console.log(firstVariable)

// firstVariable = 7

let yourName = "Andrew"

let name = "hello, my name is " + yourName
console.log(name)


const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name');
  console.log(true !== false);
 // console.log(false __ false __ false __ false __ false __ false __ true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b == c);
  console.log(a * a == d);
  console.log(48 !== '48');


  //let animal = "dog"

  let sayMoo = function(animal){
  	 if(animal === "cow"){
  	 	return("mooo")
  	 }
  	 else{return("Hey! You're not a cow.")
  	}
  	
  }


console.log(sayMoo("dog"));
 
// E.


let myAge = function(age){
	if(age >= 16){
		console.log("Here are the keys")
	}
	else{
		console.log("Sorry, you're too young")
	}
}

myAge(12);

//Loops

for(let i = 0; i < 10; i++){
	console.log(i)
}

for(let i = 10; i <= 400; i++){
	console.log(i)
}

for(let i = 12; i <= 4000; i = i + 3 ){
	console.log(i)
}

//Get even

for(let i = 1; i <= 100; i++){

	if(i % 2 === 0)
		console.log(i, "is an even number")
	else{
		console.log(i)
	}
}

// Give me five


for(let number = 1; number <=100; number++){
	if(number % 5 ===0)
		console.log(number, "I found a " + number + ". High five!" )
	else if(number % 3 ===0)
		console.log(number, "I found a " + number + ". Three is a crowd")
}

//Savings Account

let bank_account = function(total){
	
	for(let i = 1; i <= 10; i++){
		total += i 
		
	}
	console.log(total)

}

bank_account(0);


//

let bigBank_account = function(total){
	
	for(let i = 1; i <= 100; i++){
		total += i * 2
		
	}
	console.log(total)

}

bigBank_account(0);

//Multiples of 3 and 5

let naturalNumbers = function(sum){
	
	for(let i = 1; i < 1000; i++){
		if(i % 3 === 0 && i % 5 ===0);
		sum += i
	}
	console.log(sum)



}

naturalNumbers(0)
	
	
/* A. Talk about it:
- an array is made up of elements
- No
- Test scores


*/

//B.

let quotes = ["hey", "wassup", "hello"]
//C.
const randomThings = [1, 10, "Hello", true]

randomThings[0]

randomThings[2] = "World"

//console.log(randomThings)

//D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

ourClass[2]

ourClass[4] = "Octocat"

ourClass.push("Cloud City");

//E. Mix it up

const myArray = [5, 10, 500, 20]

myArray.push("Egon")
myArray.push("Aluko")

myArray.unshift("Bob Marley")

myArray.pop()

myArray.reverse()


console.log(myArray)



//F. Biggie Smalls

/*let x = 17

if( x < 100)
console.log("little number")
else{
	console.log("big number")
}
*/

//G. Monkey in the Middle

let x = undefined

if( x < 5){
	console.log("little number");
} else if (x > 10){
	console.log("Big number");
} else{
	console.log("monkey")
}

//H.

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
  ["grey button-up", "dark grey button-up","light blue button-up", "blue button-up",],

  ["grey jeans", "jeans","PJs"],
  
  ["wool mittens","wool scarf","raybans"]
];

//1. 
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
//2.
kristynsCloset.splice(6, 0, "raybans")

//3.
kristynsCloset[5] = "stained knit hat"
//console.log(kristynsCloset)

//4.
console.log(thomsCloset[0][0])

console.log(thomsCloset[1][1])


console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] +"!")	

thomsCloset[1][2] = "footie pajamas"

//Functions
//a. printGreeting

let printGreeting = function(name){
	console.log("Hello there, " + name +"!")

}

printGreeting("Andy");

//b.

let printCool = function(name){
	console.log(name + " is cool")

}

printCool("Andy");

//c.

let calculateCube = function(number){
	return number * number
}


console.log(calculateCube(3))

//d.
let isVowel = function(vowel){
	//let vowel = ["a","e","i","o","u"]
	if(vowel.length <= 1 && vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u")
		console.log(true)
	else{
		console.log(false)

	}

}

isVowel("b");

//e.
let getTwoLengths = function(string1, string2){
return [string1.length, string2.length];


}

console.log(getTwoLengths("andy", "aluko"))

//f.

let getMultipleLengths = function(array){
	return [array.length]

}

console.log(getMultipleLengths(["hello", "good morning"]))

//g.
let maxOfThree = function (num1,num2,num3){
	if(num1 > num2 && num1 > num3)
		return num1
	else if (num2 > num1 && num2 > num3)
		return num2
	else if (num3 > num1 && num3 > num2)
		return num3
	else if (num1 === num2)
		return num1 || num2
	else if (num1 === num3)
		return num1 || num3
	else if (num1 === num2 === num3)
		return num1 || num2 || num3


}

console.log(maxOfThree(6, 1, 6))

//h.

let printLongestWord = function([str]){
	let strSplit = str.split(' ');
	let longestWord = 0;
	
	for(let i = 0; i < strSplit.length; i++){
		if(strSplit[i].length > longestWord){
			longestWord = strSplit[i].length;
			}
		}
		return longestWord;
	}






console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))


//i. 

let transmogrify = function(arg1, arg2, arg3){
	
	return Math.pow(arg1 * arg2, arg3);
}

console.log(transmogrify(2, 3, 2))


//j.

let reverseWordOrder = function (string){
	let newString = "";
	for(let i = string.length - 1; i >= 0; i--){
		newString += string[i] 
	}
	return newString
}

console.log(reverseWordOrder("Hey whats up"))


//k. 
let randomInt = function (num){
	
		return Math.floor(Math.random() * Math.floor(num)) 
}
console.log(randomInt(10))


let randomMaxInt = function (min, max){
	return Math.floor(Math.random() * max) + min 
}

console.log(randomMaxInt(10,100))



//Objects


let user = {
	name: "Andrew",
	email: "aluko17@yes.com",
	age: 27,
	purchased: []
}


	
	



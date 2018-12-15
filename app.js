
/*


How do we assign a value to a variable?     We assign it with an equal sign. let x = 0

How do we change the value of a variable?   By re assigning the value with an equal sign. x = 3

How do we assign an existing variable to a new variable?  Take the original variable and add it to a new one with an equal sign. let x = y 

Remind me, what are declare, assign, and define? Declare and define are the same thing. Declare is allocating space for a new variable. Assign is assigning a variable a value. 

What is pseudocoding and why should you do it?    Writing code out on paper, before actually starting the code.

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?   90% thinking about it and 10% actually coding.




let firstVariable = "Hello World"

firstVariable = 4

let secondVariable = firstVariable

secondVariable = "Hello"

//4 is the value of the firstVariable

let myName = "Johnathan"
console.log("Hello, my name is " + myName)


  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true != false);
  console.log(false || false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b < c);
  console.log(a === a != d);
  console.log(48 == '48');


let animal = 'cow'
//animal = 'chicken'
if(animal === 'cow'){
	console.log('Mooooooooo')
}else{
	console.log("Hey! You're not a cow.")
}


let age = 17
//age = 15
if(age >= 16){
	console.log('Here are the keys!')
}else{
	console.log('Sorry, you are to young!')
}


//for(let i = 0; i <= 10; i++){
   //console.log(i)
//}
//for(let i = 10; i <= 400; i++){
	//console.log(i)
//}
for(let i = 12; i <= 4000; i=i+3)
console.log(i) 


//for(let i = 1; i <= 100; i=i+2){
   //console.log(i+1)
//}
for(let i = 0; i <= 100; i++){
	if(i % 2 === 0){
		console.log(i + '<-- is an even number')
	}else{
		console.log(i)
	}
}

for(let i = 0; i <= 100; i++){
	if(i % 5 === 0){
		console.log('I found a ' + i + ' High five!')
	}else if(i % 3 === 0){
		console.log('I found a ' + i + ' Three is a crowd')
	}else{
		console.log(i)
	}
}


//let bank_account = 0

//for(let i = 0; i <= 10; i++){
//	bank_account = bank_account + i
//}

//console.log(bank_account)
let bank_account = 0

for(let i = 0; i<=100; i++){
	bank_account = bank_account + i*2
}
console.log(bank_account)


 Multiples of 3 and 5        I did this one!!!



//What are the things in an array called?   An element.

//Do Arrays guarantee those things will be in order?  No.

//What real-life thing could you model with an array?  Grocery list

let quotes = ["Hello", "Goodbye", "Wow"]

const randomThings = [1, 10, "Hello", true]
//console.log(randomThings[0])
randomThings.splice(2, 1, "World")
//console.log(randomThings)

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//console.log(ourClass[2])
ourClass.splice(4, 1, 'Octocat')
//console.log(ourClass)
ourClass.push('Cloud City')
console.log(ourClass)

const myArray = [5, 10, 500, 20]
myArray.push('Egon', 'fresh')
myArray.splice(0, 1)
myArray.unshift('Bob Marley')
myArray.pop()
myArray.reverse()
console.log(myArray)
*/
let rapper = 789
if(rapper < 100){
	console.log('little number')
}else{
	console.log('big number')
}











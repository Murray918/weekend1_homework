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

let x = 105

if( x < 100)
console.log("little number")
else{
	console.log("big number")
}






//A 
/*1. we assign a value of a variable using the = asignment operator.
2. we reasign the value using = operator
3. let a new variable and set it equal to your first varible 
4. declare is to alociate space on memory for a varible, we then use the assignmet operator = to assign our new varible a value. 
5.pseudocoding is the process of writting out your plan for coding a oriject on paper, this allows you to plan ahead for problems that might arrive in the immediate future.
Doing this also alows you to go into a project with a plan so your not blindly coding.
6. we should spend 75-90% planning and 25-10% coding.
*/
/*
//B
 let firstVariable  = 'Hello World'

 firstVariable = 67

 let secoundVariable = firstVariable

secoundVariable = 'Goodbye world'

// the value of first variable is the number 67

//2B
 let yourName = 'Joshua'

 let myName = 'Hello, my name is ' + yourName
*/

//C
/*
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a != b);
  console.log(c != d);
  console.log('Name' === 'Name');
  console.log(true != false);
  console.log(false === false === false === false === false === false == true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b < c);
  console.log(a <= a < d);
  console.log(48 == '48');
*/

//D 
/*
let animal = 'cow'

if(animal != 'cow'){
	console.log('your not a cow!!')
} else {
	console.log('MOOOOO')
}
*/
//E
/*
let age = 17 

if( age >= 16){
	console.log('Here are the keys')
} else {
	console.log('Sorry your to young to drive')
}
*/
// 2A
/*
for(let i = 0; i <=10; i++){
	console.log(i)
}
for(let i =10; i <=400; i++){
	console.log(i)
}
for(let i = 12; i<= 400;i++){
	if(i%3 === 0){
		console.log(i)
	}
}
*/
//2B
/*
 for(let i = 0; i<=100; i++){
 	if(i%2 === 0){
 		console.log(i+'<-- is an even number')
 	} else{
 		console.log(i)
 	}
 }
*/
//2C
/*
for(let i = 0; i<=100; i++){
	if(i%5 === 0){
		console.log('I found a ' + i + '. High Five')
	}else if( i%3 === 0){
		console.log('I found a '+ i +  '. Three is a crowd')
	}
}
*/
//2D
/*
let bank_account = 0
for(let i = 0; i<=10; i++){
	bank_account += i
}

for(let i = 0; i<=100;i++){
	bank_account += i*2
}
console.log(bank_account)
*/
//2E
/*
let sum = 0
for( let i = 0; i<= 1000; i++){
	if(i %3 === 0 || i % 5 === 0){
		sum += i
	}
}
*/
//3A
/*
1. the things arrays store are elements
2. Arrats do not guarantee these things will be in order
3. A unordered list pf items
*/
//3B
/*
let quotes = ['let there be light','In a galaxy far far away','Aged like a fine wine']
*/
//3C
/*
const randomThings = [1, 10, "Hello", true]

randomThings[0]

randomThings.splice(2,1,'World')

console.log(randomThings)

3.Because we used splice to cut out Hello and insert World in its place.
*/
//3D
/*
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

ourClass[2]

ourClass.splice(-1,1,'Octocat')

ourClass.push('Cloud City')
*/
//3E
/*
const myArray = [5, 10, 500, 20]

myArray.push('Egon','LOL')

myArray.shift()

myArray.unshift('Bob Marley')

myArray.pop()

myArray.reverse()

the array was mutated through out the steps above. Mutate means to change in form or nature.
when we used the reverse method nothing was displayed to the console.
 
*/
//3F
/*
let x = 4

if(x <= 100){
	console.log('little number')
} else {
	console.log('Big number')
}
*/

//3G
/*
let x = 7 

if( x < 5){
	console.log('little number')
} else if(x> 10){
	console.log('Big Number')
} else {
	console.log('Monkey')
}
*/

//3H
/*
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

kristynsCloset.splice(6,0,'raybans')

kristynsCloset.splice(5,1,"stained knit hat")

console.log(thomsCloset[0][2])
console.log(thomsCloset[1][1])
console.log(thomsCloset[2][1])

console.log('Tom is looking ferice in a '+thomsCloset[0][2]+' '+thomsCloset[1][1]+' '+thomsCloset[2][1])

thomsCloset[1].splice(2,1,'Footie Pajamas')
*/
//4A
/*
let printGreeting = function(name){
	return 'Hello there, ' + name + '!'
}

console.log(printGreeting('slimer'))
*/
//4B
/*
let pringCool =  function(name){
	return name + ' is cool'
}
console.log(pringCool('Captain Reynolds'))
*/
//4C
/*
let calculateCube = function(num){
	return num**3
}
console.log(calculateCube(5))
*/
//4D
/*
let vowels = ['A','a','E','e','I,','i','O','o','U','u']
let isVowel = function(x){
	if(x.length != 1){
		return 'no'
	} else for(let i = 0 ; i <= vowels.length; i++){
		if(x === vowels[i]){
			return'true'}
		}
	return 'false'
	
}

console.log(isVowel('y'))
*/
//4E
/*
let first = []
let getTwoLengths = function(x,y){
	first.push(x.length)
	first.push(y.length)
	return first
}

console.log(getTwoLengths('hey','world'))
*/
//4F

let first =[]
let getMultipleLengths = function([]){
	
}









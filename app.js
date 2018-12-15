//You assign values to variables using the equals sign(let var = 12)
//You change the value of a variable using the equals sign after the varioable has been declared(var=12)
//You use the equals sign to assign a new variable to an existing variable (let newVar = oldvar)
//declaring a variable is allocating space in memory for a new variable using the let, var or const keywords. Assigning a variable is giving it a value using the equals sign. Defining a variable is the same as declaring a variable
//Pseudocoding is creating a code/english hybid algorithm to wrap your head around the problem before you start on it so the code is easier to implement
//60%

let firstVariable = "Hello World"
firstVariable = 10
let secondVariable = firstVariable
secondVariable = "This is a string"
//Expected output of firstVariable: 10
console.log(firstVariable)
let myName = "Jacob Werbin"
console.log("Hello, my name is " + myName)

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true || false);
  console.log(false || false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c);
  console.log(a * a === d);
  console.log(48 == '48');

  let animal = "chicken"
  	animal === "cow" ? console.log("Mooooooo") : console.log("Hey, your not a cow.")

  let age = 42
	age>=16 ? console.log("Here are your keys!") : console.log("Sorry, you are too young.")

  for(let i=0;i<=10;i++)
  	console.log(i)

  for(let i=10;i<=400;i++)
  	console.log(i)

  for(let i=12;i<=4000;i+=3)
  	console.log(i)

  for(let i=1;i<=100;i++)
  	i%2==0 ? console.log(i + " <---this is an even number.") : console.log(i)

  for(let i=0;i<=100;i++)
  	i%5==0 ? console.log("I found a " + i + " High five!") : i%3==0 ? console.log("I found a " + i + " Three is a crowd.") : console.log(i)

  let bankAccount = 0
  for(let i = 0;i<=10;i++)
  	bankAccount+=i
  console.log(bankAccount)
  bankAccount = 0
  for(let i = 1;i<=100;i++)
  {
  	bankAccount+=(i*2)
  }
  console.log(bankAccount)

  //Ive already completed this problem

  //Items in an array are called elements
  //Arrays do not guarantee order
  //Anything that can be put in a list can be inserted into an array, students in a school, email addresses in a database, phone numbers in a form

  let quotes = ["Hello", "These Are", "Quotes", "I", "Like", "Quotes", "Ok"]

  const randomThings = [1, 10, "Hello", true]
  console.log(randomThings[0])
  randomThings[2] = "World"
  console.log(randomThings.toString())

  const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
  console.log(ourClass[3])
  ourClass[4] = "Octocat"
  ourClass.push("Cloud City")
  console.log(ourClass.toString())

  const myArray = [5, 10, 500, 20]
  myArray.push("Egon", "Hello")
  myArray.shift()
  myArray.unshift("Bob Marley")
  myArray.pop()
  myArray.reverse()
  //myArray will be reversed and returns the reversed array. This function mutates the original array (changes it)

  let number = 8
  number<100 ? console.log("little number") : console.log("big number")

  number<5 ? console.log("little number") : number>10 ? console.log("big number") : console.log("monkey")

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

console.log("Kristn is rocking that " + kristynsCloset[2] + " today!")
kristynsCloset.splice(6, 0, "raybans")
kristynsCloset[5] = "stained knit hat"
let thomsShirt = thomsCloset[0][0]
let thomsPants = thomsCloset[1][0]
let thomsAccessory = thomsCloset[2][0]
console.log("Thoms is wearing "+thomsShirt+" "+thomsPants+" "+thomsAccessory+" today!")
thomsCloset[1][2] = "Footie Pajamas"

function printGreeting(name)
{
	return (`Hello I'm ${name}`)
}
console.log(printGreeting("Jake"))

function printCool(name)
{
	return name+" is cool."
}
console.log(printCool("This"))

function calculateCube(num)
{
	return num**3
}
console.log(calculateCube(5))

function isVowel(char)
{
	if(char.length>1 || char.length<1)
		return false
	else if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u')
		return true
	else
		return false
}
console.log(isVowel("e"))

function getTwoLengths(str1, str2)
{
	return [str1.length, str2.length]
}
console.log(getTwoLengths("Hello", "Text"))

function getMultipleLengths(strings)
{
	let lengthsArray = []
	for(let lengths of strings)
	{
		lengthsArray.push(lengths.length)
	}
	return lengthsArray
}
console.log(getMultipleLengths(["dafasddf","sdafasdf","asdfasdf","dfhgd","s","dfgsdfh"]))

function maxOfThree(num1, num2, num3)
{
	return Math.max(num1, num2, num3)
}
console.log(maxOfThree(3,3,3))

function printLongestWord(strings)
{
	currerntLargestWord = ""
	for(let string of strings)
	{
		if(currerntLargestWord.length<string.length)
			currerntLargestWord = string
	}
	return currerntLargestWord
}
console.log(printLongestWord(["sklajhfkjlas", "grdsgth", "gdhs", "fsdaf", "asdsdf"]))

function transmogrify(num1, num2, num3)
{
	return (num1*num2)**num3
}
console.log(transmogrify(2, 5, 3))

function reverseWordOrder(string)
{
	let rv = ""
	let word = ""
	let wordArray= []
	let returnedArray = []
	let j = wordArray.length-1
	let temp = ""
	for(let i = 0;i<string.length;i++)
	{
		if(string[i] === ' ' || i === string.length-1)
		{
			if(i===string.length-1)
				word+=string[string.length-1]
			wordArray.push(word)
			word = ""
		}
		else
		{
			word += string[i]
		}
	}
	for(let i = wordArray.length-1;i>=0;i--)
	{
		returnedArray.push(wordArray[i])
	}
	for(let i = 0;i<returnedArray.length;i++)
	{
		rv+=returnedArray[i]+" "
	}
	return rv
}

console.log(reverseWordOrder("Hello my name is Jacob"))

function randomNumber1()
{
	return Math.floor(Math.random()* 10 + 1)
} 
console.log(randomNumber1())

function randomNumber2()
{
	return Math.floor(Math.random() * 91 + 10)
}
console.log(randomNumber2())

function randomNumber3()
{
	return Math.random()*12735+532
}
console.log(randomNumber3())

function randomNumber4()
{
	return Math.random()*10+1
}
console.log(randomNumber4())

function getRandomElement(array)
{
	return array[Math.floor(Math.random()*array.length)]
}
console.log(getRandomElement(quotes))

let user = 
{
	name: "John",
	email: "appleseed@swag.com",
	purchased: [],
	age: -24
}

user.email = "saucyschoolboy@sillynoodle.com"
user.age++

user.location = "Mercury"

user.purchased.push("carbohydrates","peace of mind","Merino jodhpurs")
console.log(user.purchased[2])


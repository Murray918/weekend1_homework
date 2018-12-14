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

  

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
// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//    console.log(a < b);
//    console.log(c > d);
//    console.log('Name' === 'Name');
//    console.log(true > false);
//    console.log(false && false && false && false && false && false || true);
//    console.log(false === false)
//    console.log(e === 'Kevin');
//    console.log(a < b < c);
//    console.log(a && a < d);
//    console.log(48 !== '48');

// //d
// let animal = "cow"
// if (animal === "cow"){
// 	console.log("moooo")
// } else {console.log("Hey! You're not a cow!")}

// //e--coming back to E

// let age = x
// for ( let i = 10 ; i <25 ; i++){
// 	if ( i < )
// }

//||
//2-a-1

let x = 0
while (x < 11){
	console.log(x)
	x++
}
//2-a-2
let y = 10
while (y < 401){
	console.log(y)
	y++
}

//2-a-3
for (i = 12; i < 4000; i++){
	if ( i % 3 ===0){
		console.log(i)
	}
}
// 2-b-1
for (z = 0; z < 101; z++){
	if(z % 2 === 0 ){
		console.log(z)
	}
}
// 2-b-2
for (b = 0; b < 101; b++){
	if(b % 2 === 0 ){
		console.log(b + " is an even number")
	} else (console.log(b))
}
//2-c-1
for (d = 0; d < 101; d++){
	if (d % 5 === 0){
		console.log("I found a " + d + ". High five!")
	}
}
// 2-c-2
for (d = 0; d < 101; d++){
	if (d % 5 === 0){
		console.log("I found a " + d + ". High five!")
	}else if( d % 3 === 0){
		console.log("I found a " + d + ". Three is a crowd")
	}
}

//d 1
const Ourclass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(Ourclass[2])
Ourclass.splice(4,1,"Cloud City")
console.log(Ourclass)

const myArray = [5, 10, 500, 20]
myArray.push("Egon","Jules")
console.log(myArray)
myArray.splice(0,0,"Bob Marley")
console.log(myArray)
myArray.splice(4,1)
console.log(myArray)
myArray.reverse()
console.log(myArray)


// Variables
var hello = 'hello world'
var int = 5
var float = 5.5
var boolean = true
var myName = 'Iury'

// reasigning a variable
myName = 'Max'
console.log(myName)
//method
var math = Math.random()

//or 
console.log('hello:', hello, 'int:', int, 'float:', float)

//conditionals 
if (typeof (float) === 'number') {
  console.log('It is a number')
} else if (typeof (float) !== 'number') {
  console.log('not a number')
} else {
  console.log('not a number')
}

// printing
console.log(hello)
console.log(int)
console.log(float)
console.log(boolean)
console.log(math)
// console.log(typeof (myName))

const myAge = '14'

if (myAge >= 65) {
  console.log('you collect social security benefits')
} else if (myAge >= 35) {
  console.log('you can run for president')
} else if (myAge >= 25) {
  console.log('you can rent a car')
} else if (myAge >= 21) {
  console.log('you can drink alcohol')
} else if (myAge >= 18) {
  console.log('you can vote')
} else if (myAge >= 16) {
  console.log('you can drive')
} else if (myAge < 16 && myAge === 'string') {
  console.log('you cannot do much outside of going to school')
}
console.log(myAge)


// parseInt() - convert to a number

// convert to a number
const myNewAge = Number(myAge)
console.log(typeof (myNewAge))

//convert to a string
const myNewAge2 = String(myNewAge)
console.log(typeof (myNewAge2))

// && = and
// || = or
// [] = array
// shift() = remove first item in a array
// pop() = remove last item in a array

// Loops
//For loop
const names = ['iury', 'Imiya', 'Jan', 'Josh']
for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}

// forEach loop
names.forEach((names) => {
  console.log(names)
})


const number = 100
for (var x = 1; x <= number; x++) {
  if (x % 3 && x % 5) {
    console.log('FizzBuzz')
  } else {
    if (x % 3 === 0) {
      console.log('Fizz')
    }
    if (x % 5 === 0) {
      console.log('Buzz')
    }
  }
}






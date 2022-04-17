// Reverse List Order
// https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript

const reverseList = list => list.reverse()

console.log(reverseList([1,2,3,4]))
console.log(' ')

// Hello, Name or World!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

const hello = (name) => {
  if (name === undefined || name === '') {
    // handle undefine and empty strings
    return `Hello, World!`
  } else {
    // grab the first emement and make it Uppercas
    // while the rest of the name is lowercase
    let n = name.toLowerCase().split('')
    n[0] = n[0].toUpperCase()
    return `Hello, ${n.join('').toString()}!`
  }
}

const hello2 = n => `Hello, ${n ? n[0].toUpperCase() + n.slice(1).toLowerCase() : 'World'}!`

console.log(hello('alice'))
console.log(hello())
console.log(hello(''))
console.log(' ')


// Training JS #1: create your first JS function and print "Hello World!"
// https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/train/javascript

function helloWorld() {
  var str = "Hello World!"
  console.log(str)
}

console.log(helloWorld())
console.log(' ')

// The 'if' function
// https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript

const _if = (bool, func1, func2) => bool ? func1() : func2()

console.log(' ')

// Grasshopper - Basic Function Fixer
// https://www.codewars.com/kata/56200d610758762fb0000002/train/javascript

const addFive = n => n + 5

console.log(addFive(5))
console.log(addFive(15))
console.log(' ')
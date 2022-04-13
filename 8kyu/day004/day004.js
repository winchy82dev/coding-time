// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(n){
  let result = n.split(" ")           // convert the given string into an array
                .map( e => +e)        // convert string to numbers
                .sort( (a, b) => b-a) // sort descresinly
  return `${result[0]} ${result[result.length-1]}` // using template literal
}
console.log(' ')
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
console.log(highAndLow("1 2 3"))
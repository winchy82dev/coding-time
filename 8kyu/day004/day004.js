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

// Drink about
// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript

function peopleWithAgeDrink(old) {
  
  if (old < 14){
   return 'drink toddy'
  } else if (old < 18){
    return 'drink coke'
  } else if (old < 21){
    return 'drink beer'
  } else {
    return 'drink whisky'
  }

};

console.log(' ')
console.log(13,peopleWithAgeDrink(13))
console.log(14,peopleWithAgeDrink(14))
console.log(17,peopleWithAgeDrink(17))
console.log(18,peopleWithAgeDrink(18))
console.log(21,peopleWithAgeDrink(21))
console.log(22,peopleWithAgeDrink(22))
console.log(30,peopleWithAgeDrink(30))
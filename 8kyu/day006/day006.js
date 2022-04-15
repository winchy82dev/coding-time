// Is it a palindrome?
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

const isPalindrome = x => x.split('').reverse().join('').toLowerCase() === x.toLowerCase()

console.log(isPalindrome("Anna"))
console.log(' ')

// What is between?
// https://www.codewars.com/kata/55ecd718f46fba02e5000029

function between(a, b) {
  let result = []
  for (let i=a; i<=b; i++){
    result.push(i)
  }
  return result
}

console.log(between(5,8))
console.log(' ')

// Multiplication table for number
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

function multiTable(n) {
  let str = ''
  for(let i = 1; i<=10 ; i++){
    str += `${i} * ${n} = ${i*n}`
    if (i<10){
      str+= '\n'
    }
  }
  return str
}

console.log(multiTable(6))
console.log(' ')
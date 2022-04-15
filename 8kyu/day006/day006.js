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
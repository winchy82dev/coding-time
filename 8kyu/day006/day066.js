// Is it a palindrome?
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

const isPalindrome = x => x.split('').reverse().join('').toLowerCase() === x.toLowerCase()

console.log(isPalindrome("Anna"))
console.log(' ')
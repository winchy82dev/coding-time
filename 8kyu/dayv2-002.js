// Squash the bugs
// https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript

function findLongest(str) {
  let spl = str.split(" ");
  let longest = 0
  
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
  return longest
}

console.log(' ')
console.log(findLongest("The quick white fox jumped around the massive dog"))
	
// N-th Power
// https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript
const index = (array, n) => (array[n] !== undefined) ? array[n] ** n : -1

console.log(' ')
console.log(index([1, 3, 10, 100],3))
console.log(index([6,31], 3))
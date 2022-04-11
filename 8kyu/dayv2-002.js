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

//
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter(b) {
  let result = []
  let found = false
  let g = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (let i = 0; i < b.length; i++){
    for (let j = 0; j < g.length; j++){
    	// console.log(`b${i}: ${b[i]}`)
    	// console.log(`g${j}: ${g[j]}`)
	      if (b[i] === g[j]){
	      	found = true
	      }  
      }
      if (found === false){
  	 	result.push(b[i])
  	  }
		found = false
    }
    return result
  }
 
console.log(' ')
console.log(gooseFilter(["African","Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]))

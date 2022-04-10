// 1 - CodeWars Challenges

// Function 2 - squaring an argument
// https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript

const square = n => n*n
console.log('square of 4 :', square(4))

// Unfinished Loop - Bug Fixing #1
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript

function createArray(number){
  var newArray = [];
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  return newArray;
}
console.log(' ')
console.log('fix a bug to create an array of 15:', createArray(15))

// Removing Elements
// https://www.codewars.cosm/kata/5769b3802ae6f8e4890009d2/train/javascript
let arr = [0,1,2,3,4,5,6,7,8,9,10]
function removeEveryOther(arr){
 let result  = []
 for (let i=0; i<arr.length; i++){
   if (i%2 === 0){
     result.push(arr[i])
   }
 }
 return result
}
console.log(' ')
console.log('remove the odd ones:',removeEveryOther(arr))

// Keep up the hoop
// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"

console.log(' ')
console.log('5 hoops:',hoopCount(5))
console.log('10 hoop:',hoopCount(10))

// Is the string uppercase?
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

String.prototype.isUpperCase = function() {
  let str = this
  let isUpperCase = false
  let result = []
  
  for (let i=0; i<str.length; i++){
    if (str[i] === str[i].toUpperCase()){
      result.push('up') // 1 for uperCase
    } else{
      result.push('low') // 1 for uperCase
    }
  }

  if (result.includes('low')){
    return false
  } else {
    return true
  }  
}
console.log(' ')
console.log('is this STring in uppercase','is this STring in uppercase'.isUpperCase()) 
console.log('HOW ABOUT THIS ONE','HOW ABOUT THIS ONE'.isUpperCase()) 
console.log(' ')

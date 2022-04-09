// 1 - CodeWars Challenges

// Function 2 - squaring an argument
// https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript

const square = n => n*n

// Unfinished Loop - Bug Fixing #1
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript

function createArray(number){
  var newArray = [];
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  return newArray;
}

// Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr){
 let result  = []
 for (let i=0; i<arr.length; i++){
   if (i%2 === 0){
     result.push(arr[i])
   }
 }
 return result
}

// Keep up the hoop
// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"

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

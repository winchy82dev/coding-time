// To square(root) or not to square(root)
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(array) {
  let result = []
  for (let i=0; i<array.length; i++){
    if (Number.isInteger((Math.sqrt(array[i])))){
      result.push(Math.sqrt(array[i]))
    } else {
      result.push(array[i]**2)
    }
    
  }
  return result
}

console.log(' ')
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ]))
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ]))

// Check same case
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

function sameCase(a, b){
  let alpha = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
  ]
 if (
      (alpha.includes(a) === false && alpha.includes(a.toLowerCase()) === false)|| 
      (alpha.includes(b) === false && alpha.includes(b.toLowerCase()) === false)
      ) {
     return -1
  } else if (
    alpha.includes(a) || alpha.includes(a.toLowerCase()) &&
    alpha.includes(b) || alpha.includes(b.toLowerCase())
    ){
    if (
        (a === a.toLowerCase() && b === b.toLowerCase()) ||
        (a === a.toUpperCase() && b === b.toUpperCase()) 
    ){
      return 1
    } else {
      return 0
    }
  }  
}
console.log(' ')
console.log(sameCase('C', 'B'))
console.log(sameCase('A', 's'))
console.log(sameCase('\t', 'Z'))
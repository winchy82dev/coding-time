// Welcome!
// https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

const languages = {
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
console.log(" ")
const greet = lang => (languages[lang] === undefined) ? languages.english : languages[lang] 
console.log(greet('zer'))

// Student's Final Grade
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

function finalGrade (e, p) {
  if ( e>90 || p>10) {
    return 100
  } else if ( e>75 && p>=5) {
      return 90
  } else if ( e>50 && p>=2) {
      return 75
  } else {
      return 0
  }
}
console.log(" ")
console.log(finalGrade(91, 1) )  // 100
console.log(finalGrade(12, 11) ) // 100
console.log(finalGrade(76, 5) )  // 90
console.log(finalGrade(76, 3) )  // 75
console.log(finalGrade(56, 3) )  // 75
console.log(finalGrade(56, 5) )  // 75
console.log(finalGrade(46, 5) )  // 0
console.log(finalGrade(46, 10) )  // 0


// Difference of Volumes of Cuboids
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

function findDifference(a, b) {
  volA = a[0]*a[1]*a[2]
  volB = b[0]*b[1]*b[2]
  return Math.max(volA,volB) - Math.min(volA,volB)
}

console.log(" ")
console.log(findDifference([3, 2, 5], [1, 4, 4]))


// Correct the mistakes of the character recognition software
// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
function correct(str) {
  let s = Array.from(str)
  let r = []
  for(let i=0;i<s.length;i++){
           if (s[i]==='5'){
      r.push('S')
    } else if (s[i]==='1'){
      r.push('I')
    } else if (s[i]==='0'){
      r.push('O')
    } else {
      r.push(s[i])
    }
  }
  return r.join("").toString()
}
console.log(" ")
console.log(correct("L0ND0N"))
console.log(correct("51NGAP0RE"))
console.log(correct("PAR15"))


// Is it even?
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
const testEven = n => n%2===0
console.log(" ")
console.log(testEven(0.5))
console.log(testEven(0))

// Grasshopper - Terminal game move function
// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript
const move = (p, r) => p + r * 2
console.log(' ')
console.log(move(0, 4))
console.log(move(2, 5))

// All Star Code Challenge #18
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
const strCount = (str, letter) => {
  let s = Array.from(str)
  let counter = 0
  for(let i=0;i<str.length;i++){
    if(s[i]===letter){
      counter++
    }
  }
  return counter
  }
console.log(' ')
console.log(strCount('Hello', 'o'))
console.log(strCount('Hello', 'l'))

let mystr = 'lolipop'
console.log(mystr.split(''))
console.log(mystr.split('').filter(e => e ==='o'))
console.log(mystr.split('').filter(e => e ==='o').length)

// Regular Ball Super Ball
// https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
class Ball {
  constructor(p) {
    (p === undefined)? this.ballType = "regular" : this.ballType = p
    }
  }
console.log(' ')
console.log(new Ball().ballType)
console.log(new Ball("super").ballType)

// Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript


function well(x){
  let score = x.filter(e => e ==='good').length
  if(score === 0){
    return 'Fail!'
  } else if(score <= 2 ){
    return 'Publish!'
  } else if(score > 2 ){
    return 'I smell a series!'
  }
}
console.log(' ')
console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

// Grasshopper - Debug sayHello
// https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript
const sayHello = name =>`Hello, ${name}`
console.log(' ')
console.log(sayHello('Mr. Spock'))
console.log(sayHello('Captain Kirk'))
console.log(sayHello('Dr. McCoy'))
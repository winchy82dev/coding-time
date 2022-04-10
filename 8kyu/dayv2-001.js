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

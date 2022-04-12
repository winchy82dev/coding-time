// Adding character experience
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md#adding-character-experience

const player = {
  name : "winchy",
  health : 100,
  strength :25
}

player.playerStatus = function() {
  return `${this.name} has ${this.health} health points and ${this.strength} strength`
}

console.log('get player status:',player.playerStatus())
// trhow an arrow to winchy
player.health -= 20

console.log(`${player.name} is harmed, he has now ${player.health} health points`)
console.log(player.playerStatus())


player.xp = 25
player.getXp = function(){
  return `${player.name} has ${player.xp} xp points`
}

console.log(player.getXp())

// Modeling a dog
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md#modeling-a-dog

const dog={
  name: 'Rocky',
  species:'Caniche',
  size: 12,
  bark : function() {
    return 'Whaf! whaf!'
  }
}

console.log(' ')
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a circle
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md#modeling-a-circle

const r = Number(prompt("Enter the circle radius:"));

const circle = {
  radius : r,
  circumference : function() {
    return 2 * Math.PI * this.radius
  },
  area : function() {
    return Math.PI * this.radius ** 2
  }
}

console.log(' ')
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// Modeling a bank account
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md#modeling-a-bank-account

const account = {
  name: 'Alex',
  balance : 0,
  credit : function (pValue){
    this.balance += pValue
    return `your balance was ${pValue >0 ? 'credited' : 'debited'} by ${pValue}, you current balance is :  ${this.balance}`
  },
  describe : function(){
    return `${this.name} has a balance of ${this.balance}`
  }
  
}

console.log(' ')
console.log(account.describe())
console.log(account.credit(250))
console.log(account.credit(-80))
console.log(account.describe())
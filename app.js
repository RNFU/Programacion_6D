// function satetement
function greet(){
  console.log('Hola')
}
greet()

// function are first-class
function logGreeting(fn) {
  fn()
}
logGreeting(greet)

// function expression
const greetMe = function() {
  console.log('Hola Soriel')
}
greetMe()

// it's first class
logGreeting(greetMe)
// use a function expression on the fly
logGreeting(function() {
  console.log('Hola Rebe')
})

logGreeting((() => () => console.log('Hi Rebe') )())

function Person(firstName, lastName){

  this.firstName = firstName;
  this.lastName = lastName;
}
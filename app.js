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

//Prototipo es un objeto especial al que todos los objetos a puntan
//con la palara recervada protoipo a algo puedo agregar una propiedad extraque no esta establecida en su constructor
Person.prototype.greet= function(){
  console.log('Hello, '+ this.firstName + ' ' + this.lastName);
}

var john = new Person ('John', 'Smith');
//console.log(john(firstName));
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

//pass by value
function change(b){
  b = 2;

}

var a = 1;
change(a);
console.log(a);

//pass by reference

function changeObj(d){
  d.prop1 = function() {}
  d.prop2 = {};

}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

//function values and methods
var obj = {
  greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

//functions and arrays

var arr = [];
arr.push(function(){
  console.log('Hello World 1');
});

arr.push(function(){
  console.log('Hello World 2');
});

arr.push(function(){
  console.log('Hello World 3');
});

arr.forEach(function(item){
  item();
});
//0214
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
//0219
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
//0221
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

//0226
//MODULES
//app.js
//var Emitter = require('./emitter.js'); Esta línea en teoria es lo mismo que la línea de abajo.
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
  console.log('Hola');
});

emtr.on('greet', function(){
  console.log('Hi');
});

console.log('Hello');
emtr.emit('greet');

//0312 Magic string
var person = {
  firstname: '', 
  lastname: '',
  greet: function(){
    return this.firstname + ' ' + this.lastname;
  }
}

var jose = Object.create(person);
jose.firstname = 'jose';
jose.lastname = 'perez';

var ramon = Object.create(person);
ramon.firstname = 'ramon';
ramon.lastname = 'lopez';

console.log(jose.greet());
console.log(ramon.greet());
//**********************************/
var EventEmitter = require ('events');
var util = require('util');

function Greetr(){
  this.greeting = 'Hola mundo';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(){
  console.log(this.greeting);
  this.emit('greet');
}

var greeter1 = new Greetr();
greeter1.on('greet', function(){
  console.log('Alguien saludando');
});

greeter1.greet();
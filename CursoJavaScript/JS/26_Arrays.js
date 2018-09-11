//create an array literal
var array = ['Joao', 'Rodrigo', 'Jose'];

document.getElementById("demo").innerHTML = array;

//acessing the element of an array
var cars = [
    'fiat',
    'bmw',
    'corola'
];

document.getElementById("demo2").innerHTML = cars[0];

//arrays are objects
var person = {
    firstName: 'Rodrigo',
    lastName: 'S. França',
    age: 22,
    lamparina: function () {
       return this.firstName;
    }
};

document.getElementById("demo3").innerHTML = person["firstName"];

document.getElementById("demo4").innerHTML = person["lamparina"];

//the lenght property
var fruits = ['orange', 'banana', 'apple'];

document.getElementById("demo5").innerHTML = fruits.length;

//add elements in an array
var fruits = ['orange', 'banana', 'apple'];

document.getElementById("demo6").innerHTML = fruits;

function myFunction() {
fruits.push("Lemon");
    document.getElementById("demo6").innerHTML = fruits;
}

//Associative Array
var person = [];

person[0] = 'Rodrigo';
person[1] = 'Sousa';
person[2] = 22;

document.getElementById("demo7").innerHTML = person[0] + " " + person.length;

var n = [];
n[0] = 22;
n[1] = 26;

document.getElementById("demo8").innerHTML = typeof n[0];

//objects in javascript
var add = [];
add.push("Jose");
add.push();
add.push("Arnaldo");

document.getElementById("object").innerHTML = add;


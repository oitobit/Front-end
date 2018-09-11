var length = 16; //number
var lastName = "John";//string
var x = {firtsName:"Rodrigo", lastName:"França"};//object
var x = 16 + "Volvo";
var x1 = 16 + 4 + "Volto";
var x_1 = "Volvo" + 16 + 4;

var x2;//now x undefined
var x2 = 5;//now x is a number
var x2 = "John";//now x is a string

var x3 = 34;
var x_3 = 34.00;
var x_3_1 = 3.14;

var cars = ["cachorro", "gato", "rato"];

var person = {
    firstName:"Rodrigo", 
    lastName:"França", 
    age:"18", 
    eyeColor:"blue"
};
document.getElementById("um").innerHTML = x;
document.getElementById("dois").innerHTML = x1;
document.getElementById("tres").innerHTML = x_1;

document.getElementById("demo").innerHTML = x2;

document.getElementById("demo1").innerHTML = x3 + "<br>" + x_3 + "<br>" + x_3_1;

document.getElementById("demo2").innerHTML = cars[1]; 

document.getElementById("demo3").innerHTML =
  person.firstName + " is " + person.age + " years old.";
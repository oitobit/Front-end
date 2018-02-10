//JavaScript Strings
var carName1 = "Volvo xc60";
var carName2 = 'Volvo xc60';

document.getElementById("demo").innerHTML = carName1 + "<br>" + carName2;

//JavaScript
var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

document.getElementById("demo2").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;

//String Length
var txt = "ahlhfljflkjfdk";

document.getElementById("demo3").innerHTML = txt.length;

//Strings can be Objects
var x = "Rodrigo";
var y = new String("Joao");

document.getElementById("tp").innerHTML = typeof x + "<br>" + typeof y;
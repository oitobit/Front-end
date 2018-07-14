//methods constructers
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//instance of object
var myFather = new Person("Rodrigo", "S. França", 23, "castanhos");
var myMother = new Person("Sally", "Rally", 60, "blue");

//display results
document.getElementById("father").innerHTML = "My name is "  + myFather.firstName + ", and have " +  myFather.age + " age";

document.getElementById("mother").innerHTML = "My name is " + myMother.firstName + ", and have " +  myMother.age + " age.";


//add nationaly to object
myFather.nationaly = "Brazilian";
//display
document.getElementById("add-property").innerHTML = "My name is "  + myFather.firstName + ", and have " +  myFather.age + " age" + " and i'm " + myFather.nationaly;


//add a method
myFather.nameMethod  = function() {
    return this.firstName + " " + this.lastName;
}
//display
document.getElementById("add-method").innerHTML = myFather.nameMethod();

//add a property constructer
Person.nationaly = "Brazilian";
//display
document.getElementById("add-property-constructor").innerHTML = Person.nationaly;


//add a method constructor
function Person2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName;
    }
}

var myFather = new Person2("Rodrigo", "S. França", 23, "castanhos");

document.getElementById("add-method-constructor").innerHTML = myFather.name();


//other mode of add method constructor
function Person3(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.changeName = function (name) {
        this.lastName = name;
    }
}

var myFather = new Person3("Rodrigo", "S. França", 23, "castanhos");

myFather.changeName("Doe");

document.getElementById("add-method-constructor2").innerHTML = myFather.lastName;

//Built-in Constructer
var x1 = new Object();   // A new Object object
var x2 = new String();   // A new String object
var x3 = new Number();   // A new Number object
var x4 = new Boolean();  // A new Boolean object
var x5 = new Array();    // A new Array object
var x6 = new RegExp();   // A new RegExp object
var x7 = new Function(); // A new Function object
var x8 = new Date();     // A new Date object

document.getElementById("demo").innerHTML =
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>" +
"x8: " + typeof x8 + "<br>";


//Quebra Linha
var linha, quebraLinha;
quebraLinha = "";

for(linha = 0; linha < 10; linha++) {
    quebraLinha += "<br>";
}

document.getElementById("quebraLinha").innerHTML = quebraLinha;
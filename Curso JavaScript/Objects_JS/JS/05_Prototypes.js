//object 
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//adding property to object Person
Person.prototype.nationaly = "Brazilian";

//adding method to object Person
Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
}

//instance of object
var myFather = new Person("Rodrigo", "S. França", 23, "Blue");

document.getElementById("add-property-object").innerHTML = myFather.nationaly;

document.getElementById("add-method-object").innerHTML = myFather.name();
//acessing an Object Method
var person2 = {
    firstName: "Rodrigo",
    lastName: "Franca",
    age: 22,
    eyeColor: "castanho",
    fullName: function () { //method object
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("methods-objects").innerHTML = person2.fullName();

//Using Built-In Methods
var message = "Hello World";
var x = message.toUpperCase();


//adding a Method to an Object
var nameObject = {
    firstName : "John",
    lastName: "Doe",
    id: 5566
};

nameObject.nameMethod = function () {
    return this.firstName + " " + this.lastName;
};
zinnerHTML =  "My father is " + nameObject.nameMethod();


//Quebra de linha
var linha = "";
var quebraLinha;

 for (quebraLinha = 0; quebraLinha < 40; quebraLinha++) {
    linha += "<br>";
 }

document.getElementById("br").innerHTML = linha;








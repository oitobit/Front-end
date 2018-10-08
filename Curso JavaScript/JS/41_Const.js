// Using block scope
var x = 10;

{
    const x = 2;
}
document.getElementById("demo").innerHTML = x;


// Using Assigned when Declared
//incorret declared
// const PI;
// PI = 3.14159265359;

//Correct declared
const PI2 = 3.14159265359;


//Primite Value
try {
    const PI = 3.14159265359;
    PI = 3.14;
}

catch (err) {
    document.getElementById("demo2").innerHTML = err;
}

//Constant change object
const car = {
    name: "Rodrigo",
    model: "Fiat",
    color: "white"
};

car.color =  "red";

document.getElementById("demo3").innerHTML = 
"Name: " + car.name + "<br>" 
+ "Model: " + car.model + "<br>"
+ "Color: " + car.color;

const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";
cars.push("Audi");

document.getElementById("demo4").innerHTML = cars; 
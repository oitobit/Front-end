var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var i;
var text = "";

for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;


var txt = "";
var person = {
    fname: "John",
    lname: "Doe",
    age: 25
};
var x;
for (x in person) {
    txt += person[x] + " ";
}

console.log(txt);
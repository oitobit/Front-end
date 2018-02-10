var car = "Fiat";

document.getElementById("car").innerHTML = car;

//Objects are variables too. But objects can contain many value.

var car2 = { //car2 tanto é uma variavel quanto um objeto
    type: "Fiat", 
    model: "500",
    color: "white"
 };

document.getElementById("car2").innerHTML = car.model;

//propertie
var person = {
    firstName: "Rodrigo", 
    lastName: "França",
    age: 22, 
    eyeColor: "Castanho",
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("property").innerHTML = "My name is " + person.firstName + " " + person.lastName + " have age is" + person.age;

/*acessing objetc of propertie:
objectname.propertyname
or
objectname["propertyname"]
*/
document.getElementById("pro").innerHTML = person["age"];

document.getElementById("method").innerHTML = person.fullname();
//outa maneira de chamar um metodo no objeto
document.getElementById("method2").innerHTML = person.fullname;
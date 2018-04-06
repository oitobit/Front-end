document.getElementById("DataTypes").innerHTML = 
typeof "number" + "<br>" + //string
typeof 123 + "<br>" + //number
typeof true + "<br>" +//boolean
typeof NaN + "<br>" +//number
typeof [1, 2, 3, 4] + "<br>" +//object/array
typeof {name: "John", age: 16} + "<br>" +//object
typeof new Date() + "<br>" +//object/Date
typeof function () {} + "<br>" +//function
typeof myCar + "<br>" +//undefied
typeof null;//null


//Converting Numbers to Strings
var x = 123;

document.getElementById("convert").innerHTML = 
x.toString() + "<br>" +
(123).toString() + "<br>" +
(100 + 23).toString();

//converting booleans to Strings
document.getElementById("convertBoll").innerHTML = 
false.toString() + "<br>" +
true.toString();



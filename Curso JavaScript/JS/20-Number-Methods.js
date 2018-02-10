//convert value number for toString
var x = 123;

document.getElementById("demo").innerHTML = x.toString();

//convert value number for toExponential
var x2 = 9.659;

document.getElementById("demo2").innerHTML = x2.toExponential();

//convert value number for toFixed
var x3 = 9.659;

document.getElementById("demo3").innerHTML =           x3.toFixed(0) + "<br>" + 
    x3.toFixed(2) + "<br>" +
    x3.toFixed(4) + "<br>" +
    x3.toFixed(6);

//convert value number for toPrecision
var x4 = 9.659;

document.getElementById("demo4").innerHTML =           x4.toPrecision() + "<br>" +
    x4.toPrecision(2) + "<br>" +
    x4.toPrecision(4) + "<br>" +
    x4.toPrecision(6);

//return number as a number
var x5 = 123;

document.getElementById("demo5").innerHTML = 
    x5.valueOf() + "<br>" +
    (123).valueOf() + "<br>" +
    (100 + 23).valueOf();
//SCOPES DETERMINES THA VISIBILITY OF VARIABLES

/*
Int JavaScript there two types of scopes:
    1. local scope;
    2. global scope.
*/

//variables local are declared within of function. Ex.:
function myFunction () {
    var carName = "Volvo";
    /*
    1. Variable local scope;
    2. variales local not are accessed outside of a function.
    */
}
document.getElementById("local").innerHTML =  typeof carName;

//Variables Global are declared outside of function. Ex.:
var carName2 = "Volvo";
myFunction2();

function myFunction2 () {
    document.getElementById("global").innerHTML = carName2;
    /*
    1. All scripts and functions can be access on a web page.
    2. Global variables can de acess on any script  or functions.
    */
}

//variables in html
var carName3 = "Volvo";

// code here can use window.carName
document.getElementById("globalHTML").innerHTML = window.carName3;


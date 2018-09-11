//1.0 Function Declaration
var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

var x8 = 4;

function myFunction(a, b) {
    return a * b;
}

//2.0 Function Expressions (anonymous function)
var x2 = function (c, d) {return c * d;}
document.getElementById("demo2").innerHTML = x2;

    //2.1 Using function store in variable
    var z = x2(4, 5);
    document.getElementById("demo3").innerHTML = z;

    //2.2 Other way using function stored in variable
    document.getElementById("demo4").innerHTML = x2(4, 5);

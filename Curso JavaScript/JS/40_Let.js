var x = 10; //here x is 10

{
    var x = 2; //here x is 2
}

document.getElementById("demo").innerHTML = x;


//redeclaring variable with let
var x2 = 10;

{
    let x2 = 2;
}
document.getElementById("demo2").innerHTML = x2;

//Loop Scope
var i = 5;
for (var i = 0; i < 10; i++) {

}
document.getElementById("demo3").innerHTML = i;


//Using the  Let
let xi = 5;
for (let xi = 0; xi < 10; xi++) {
    // document.getElementById("demo4").innerHTML = xi;
}
document.getElementById("demo4").innerHTML = xi;


//finding elements by id
var myElements = document.getElementById("intro");
document.getElementById("demo").innerHTML = "The text from the intro pargraph is " + myElements.innerHTML;

//finding elements by tag Name
var x = document.getElementsByTagName("p");
document.getElementById("demo2").innerHTML = 'The first paragraph (index 0) is: ' + x[8].innerHTML;

var xx = document.getElementById("main");
var y = xx.getElementsByTagName("p");
document.getElementById("demo3").innerHTML = 'The first paragraph (index 0) inside "main" is: ' +  y[0].innerHTML;

//finding elements by ClassName
var ClassName = document.getElementsByClassName("intro");
document.getElementById('demo4').innerHTML = 'The first paragraph (index 0) with class="intro": ' + ClassName[0].innerHTML;

//finding elements by css selector
var querySelector = document.querySelectorAll("p.intro");
document.getElementById("demo5").innerHTML = querySelector[0].innerHTML;

//finding elements by HTML Object Collections
function myFunction() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo6").innerHTML = text;
}
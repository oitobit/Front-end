//String Methods
var x = 8;
var y = 6;

var z = x + y;

document.getElementById("demo").innerHTML = y;

//String Length
var txt = "lksjfsjslkfjsdlkf";

document.getElementById("demo2").innerHTML = txt.length;

//Finding a String in a String
function myFunction() {
  var str = document.getElementById("p1").innerHTML;
  var pos = str.indexOf("locate");
  document.getElementById("demo").innerHTML = pos;
  
}

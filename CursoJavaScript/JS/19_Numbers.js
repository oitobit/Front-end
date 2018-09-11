/*numberns in javascript can be written with, without decimals.
Ex.:
*/
var x = 30.00; //A number with decimals
var y = 30; //A number without decimals.

//floating point is not always 100% accurate
function myFunction() {
  var x = 0.2 + 0.1;
  document.getElementById("demo").innerHTML = "0.2 + 0.1 = " + x;
}

function conversao() {
  document.getElementById("demo2").innerHTML = "0xFF = " + 0xFF;
}

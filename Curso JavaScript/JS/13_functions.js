//Invocando uma função
function sum(x, y) {
    return x + y;
 }
//somando x e y
 document.getElementById("addition").innerHTML = sum(4, 6); 

 //subtraindo x e 
function sub (x, y) {
    return x - y;
}
document.getElementById("subtration").innerHTML = sub(4, 6);

//multiplicando x e y
function mult (x, y) {
    return x * y;
}
document.getElementById("multiplication").innerHTML = mult(4, 6);

//dividindo x e y
function division (x, y) {
    return x / y;
}
document.getElementById("division").innerHTML = division(4, 6);

//exponenciação de x e y
function exponetion (x, y) {
    return x ** y;
}
document.getElementById("exponetion").innerHTML = exponetion(4, 6);

//convertendo temperatura
function toCelsius(f /*parametro*/) {
  return 5 / 9 * (f - 32);
}
document.getElementById("celsius").innerHTML = toCelsius(77);

document.getElementById("celsius").innerHTML =
  "The temperature is " + toCelsius(77) + " Celsius";

  var x = myFunction(4, 3);

  function myFunction(x, y){
      return x * y;
  }

  dcoument.getElementById("return").innerHTML = x;
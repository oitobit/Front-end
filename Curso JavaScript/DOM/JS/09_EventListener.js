/*-------------------------------------------------------------
Add an Event Handler to an Element
---------------------------------------------------------------
*/
document.getElementById("btn").addEventListener("click", function(){
    alert("Você clicou no botão");
})
document.getElementById("btn").style.color = "red";


/*-------------------------------------------------------------
Add Many Event Handlers to the Same Element
---------------------------------------------------------------
*/
var x = document.getElementById("btn2");
x.addEventListener("click", myAlert);
x.addEventListener("click", otherFunciont);
//myAlert
function myAlert() {
    alert("Vocẽ clicou no botão");
}
//otherFunction
function otherFunciont () {
    alert("Você clicou novamente no botão");
}


/*-------------------------------------------------------------
The removeEventListener() method
---------------------------------------------------------------
*/

document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
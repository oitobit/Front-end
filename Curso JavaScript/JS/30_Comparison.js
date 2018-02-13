//OPERATOR FO COMPARATION
//variable of value
var x = 5;

//equals to(self value:true)
document.getElementById("demo").innerHTML = (x == 8);//false
document.getElementById("demo1").innerHTML = (x == 5);//true
document.getElementById("demo2").innerHTML = (x == "5");//true

//equals value and equals type(self value and type:true)
document.getElementById("demo3").innerHTML = (x === 5);//true
document.getElementById("demo4").innerHTML = (x === "5");//false

//not equal(not value:true)
document.getElementById("demo5").innerHTML = (x != 8);//true

//not equal value or not equal type
document.getElementById("demo6").innerHTML = (x !== 5);//false
document.getElementById("demo7").innerHTML = (x !== "5");//true
document.getElementById("demo8").innerHTML = (x !== 8);//true


//LOGICAL OPERATOR
//variable of value
var xx = 6;
var y = 3;

document.getElementById("demo9").innerHTML = (xx < 10 && y > 1);//true
document.getElementById("demo10").innerHTML = (xx == 5 || y == 5);//false
document.getElementById("demo11").innerHTML = !(xx == y);//true


//OPERATOR TERNARY
function myFunction() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young" : "Old enough";
    document.getElementById("ternario").innerHTML = voteable + " to vote.";
}

//COMPARING DIFFERENT TYPES
document.getElementById("demo12").innerHTML = "2" < "12";//false
document.getElementById("demo13").innerHTML = "2" > "12";//true
document.getElementById("demo14").innerHTML = "2" == "12";//false
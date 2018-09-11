var i = 0;
var contar = "";

while (i <= 10) {
    contar += i + "<br>";
    ++i;
}

document.getElementById("demo").innerHTML = contar;

var indice = 0;
var  text = "";

do {
    text += indice + "<br>";
    ++indice;
}
while(indice < 10);

document.getElementById("demo2").innerHTML = text;



var cars = ["Jose", "Maria", "Antonio", "Raimundo"];
var n = 0;
var s = "";

for (;cars[n];) {
    s += cars[n] + "<br>";
    ++n;
}

document.getElementById("demo3").innerHTML = s;


while (cars[n]) {
    s += cars[n] + "<br>;"
    ++n;
}
document.getElementById("demo4").innerHTML = s;

















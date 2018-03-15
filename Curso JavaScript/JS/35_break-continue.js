var i;
var text = "";

for (i = 0; i < 10; i++ ){
    if (i === 3){
        break;
    }
    text += i + "<br>";
}

console.log(text);

var cars = ["fiat", "uno", "prisma", "gol"];
var iText = "";

list: {
    iText += cars[0] + "<br>";
    iText += cars[1] + "<br>";
    iText += cars[2] + "<br>";
    break list;
    iText += cars[3] + "<br>";
    iText += cars[4] + "<br>";
}

console.log(iText);
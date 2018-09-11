//String Methods
var x = 8;
var y = 6;

var z = x + y;

document.getElementById("demo").innerHTML = y;

//String Length
var txt = "Rodrigo S. França";
document.getElementById("demo2").innerHTML = txt.length;


//Finding a String in a String
var str = "Please! Finding the position string actual of 'locate', and display";
var pos = str.indexOf("locate");
document.getElementById("demo3").innerHTML = pos;


//finding a string into string with lastIndexOf
var str1 = "Please! Finding the position string actual of 'locate', and display";
var pos1 = str1.lastIndexOf("locate");
document.getElementById("demo4").innerHTML  = pos1;

//Both methods accept a second parameter as the starting position for the search
var both = "Please! Finding the position string actual of 'locate', and display";
var posBoth = both.indexOf("locate", 15);
document.getElementById("demo5").innerHTML = posBoth;


//Search a string in a  string
var src = "Please locate where 'locate' occurs! Please! Finding the position string actual of 'locate', and display";
var att = src.search("locate");
document.getElementById("demo6").innerHTML = att;


var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "secound paragraph: " + "<b style='color:crimson;'>" + myCollection[4].innerHTML + "<b>";

var contSpan = document.getElementsByTagName("span");
document.getElementById("span").innerHTML = "This document contains: " + "<b style='color:crimson;'>" + contSpan.length + " span." + "</b>";
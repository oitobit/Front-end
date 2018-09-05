var nodeList = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = "paragraph select is: " + "<b style='color:crimson;'>" + nodeList[6].innerHTML + "</b>";

var nodeList = document.querySelectorAll("p");
document.getElementById("demo2").innerHTML = "This document contains: " + "<b style='color:crimson;'>" + nodeList.length; + "</b>";

function myChangeColor () {
    var nodeListColor = document.querySelectorAll("p");
    var i;
    for (i = 0; i < nodeListColor.length; i++) {
        nodeListColor[i].style.color = "red";
    }
}
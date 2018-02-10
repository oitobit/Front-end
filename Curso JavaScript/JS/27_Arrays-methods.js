var fruits = ["orange", "apple", "banana", "lemon"];

document.getElementById("demo").innerHTML = fruits.toString();

//removing elements with pop()
var fruits = ["orange", "apple", "banana", "lemon"];

document.getElementById("demo2").innerHTML = fruits; fruits.pop();//removing the last elements. ;(lemon)
document.getElementById("demo3").innerHTML = fruits;

//shifting elements
var fruits = ["orange", "apple", "banana", "lemon"];

document.getElementById("demo4").innerHTML = fruits; fruits.shift();
document.getElementById("demo5").innerHTML = fruits;

function myFunction () {
    fruits.unshift("kiwi");
    document.getElementById("demo6").innerHTML = fruits;
}

document.getElementById("demo7").innerHTML = delete fruits[0];
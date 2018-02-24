
function myFunction () {
    var i;
    var x = "";
    for (i=0; i<=10; i++){
        x += i + "<br>";
    }
    document.getElementById("demo").innerHTML = x;
}


function cliqueME (){
    var arr = {
        fname: "Rodrigo",
        lname: "S. França",
        age: 22
    };
    document.getElementById("clique").innerHTML = arr.fname + " " + arr.lname;
}
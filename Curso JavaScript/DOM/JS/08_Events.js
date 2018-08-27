function changeText(id) {
    id.innerHTML = "Ooops!";
}

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies Enable";
    }
    else {
        text = "Cookies are not enable";
    }
}

document.getElementById("demo").innerHTML = text;
document.getElementById("demo").innerHTML = text;
document.getElementById("href").innerHTML = window.location.href;

document.getElementById("host").innerHTML = "Sem hostname" +  window.location.hostname;

document.getElementById("path").innerHTML = window.location.pathname;

document.getElementById("protocol").innerHTML = "Protocolo é: " +  window.location.protocol;

document.getElementById("port").innerHTML = "Sem porta" + window.location.port;

function doc() {
    window.location.assign("https://www.w3schools.com/js/js_window_location.asp");
}
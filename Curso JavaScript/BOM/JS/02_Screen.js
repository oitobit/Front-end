//  can by used both window.screen.width or screen.width

document.getElementById("demo").innerHTML = "Size of width screen: " + screen.width;

document.getElementById("demo2").innerHTML = "Size of height screen: " + window.screen.height;

document.getElementById("demo3").innerHTML = "Size of width without taksbar: " + window.screen.availWidth;

document.getElementById("demo4").innerHTML = "Size of width without taksbar: " + window.screen.availHeight;

document.getElementById("demo5").innerHTML = "Screen Color Depth: " + window.screen.colorDepth + " bits";

document.getElementById("demo6").innerHTML = "Screen Pixel Depth: " + window.screen.pixelDepth;
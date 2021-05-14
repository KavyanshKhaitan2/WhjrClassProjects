canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = null;

var lastPosOfMouseX;
var lastPosOfMouseY;

color = "black";
width = 1;

canvas.addEventListener("mouseDown", myMousedown)
function myMousedown(e) {
  color = document.getElementById("color").value;
  console.log("Color: "+color);
  width = document.getElementById("width").value;
  mouseEvent = "mousedown";
}

canvas.addEventListener("mouseUp", myMouseup);
function myMouseup(e) {
  mouseEvent = "mouseup";
}

canvas.addEventListener("mouseLeave", myMouseleave);
function myMouseleave(e) {
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseMove", myMousemove);
function myMousemove(e) {
  currentPosOfMouseX = e.clientX - canvas.offsetLeft;
  currentPosOfMouseY = e.clientY - canvas.offsetTop;
  if (mouseEvent = "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    console.log("Last Position of X and Y coordinates: ");
    console.log("X = " + lastPosOfMouseX);
    console.log("Y = " + lastPosOfMouseY);
    ctx.moveTo(lastPosOfMouseX, lastPosOfMouseY);
    console.log("currentPosOfMouseX and Y coordinates = ");
    console.log("X = " + currentPosOfMouseX + " Y = " + currentPosOfMouseY);
    ctx.lineTo(currentPosOfMouseX, currentPosOfMouseY);
    ctx.Stroke();
  }

  lastPosOfMouseX = currentPosOfMouseX;
  lastPosOfMouseY = currentPosOfMouseY;
  
}

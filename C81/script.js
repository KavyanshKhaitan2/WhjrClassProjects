 canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.stokestyle = color;
ctx.linewidth = 2;


function update() {
    ctx.arc(120, 50, 50 ,0 , 2 * Math.PI);
    ctx.stroke();
}

addEventListener("event", my_function);
function my_function(e) {
   button = document.getElementById("button");
   button.addEventListener("click", my_function);
   function my_function(e) {
       console.log("i am button");
   }
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    var mouse_x = e.clientX - canvas.offsetleft;
    var mouse_y = e.clientY - canvas.offsettop;
    console.log("X = " + mouse_x+" Y = "+mouse_y);
    circle(mouse_x, mouse_y);
}
